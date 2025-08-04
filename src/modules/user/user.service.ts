import { BadRequestException, Injectable, Logger } from '@nestjs/common'
import { InjectEntityManager, InjectRepository } from '@nestjs/typeorm'
import Redis from 'ioredis'
import { isEmpty, isNil } from 'lodash'
import { EntityManager, In, Like, Repository } from 'typeorm'
import { InjectRedis } from '~/common/decorators/inject-redis.decorator'
import { BusinessException } from '~/common/exceptions/biz.exception'

import { ErrorEnum } from '~/constants/error-code.constant'

import { ROOT_ROLE_ID, SYS_USER_INITPASSWORD } from '~/constants/system.constant'
import { genAuthPermKey, genAuthPVKey, genAuthTokenKey, genOnlineUserKey } from '~/helper/genRedisKey'
import { paginate } from '~/helper/paginate'
import { Pagination } from '~/helper/paginate/pagination'

import { AccountUpdateDto } from '~/modules/auth/dto/account.dto'
import { RegisterDto } from '~/modules/auth/dto/auth.dto'
import { QQService } from '~/shared/helper/qq.service'
import { md5, randomValue } from '~/utils'

import { AccessTokenEntity } from '../auth/entities/access-token.entity'

import { DeptEntity } from '../system/dept/dept.entity'
import { ParamConfigService } from '../system/param-config/param-config.service'
import { RoleEntity } from '../system/role/role.entity'
import { OdooPartnerData, OdooService } from './../odoo/odoo.service'

import { UserStatus } from './constant'
import { PasswordUpdateDto } from './dto/password.dto'
import { UserDto, UserQueryDto, UserUpdateDto } from './dto/user.dto'
import { UserEntity } from './user.entity'
import { AccountInfo } from './user.model'

@Injectable()
export class UserService {
  private readonly logger = new Logger(UserService.name)

  constructor(
    @InjectRedis() private readonly redis: Redis,
    @InjectRepository(UserEntity) private readonly userRepository: Repository<UserEntity>,
    @InjectRepository(RoleEntity) private readonly roleRepository: Repository<RoleEntity>,
    @InjectEntityManager() private entityManager: EntityManager,
    private readonly paramConfigService: ParamConfigService,
    private readonly qqService: QQService,
    private readonly OdooService: OdooService,
  ) {}

  // Tìm người dùng theo ID, chỉ trả về nếu đang kích hoạt
  async findUserById(id: number): Promise<UserEntity | undefined> {
    return this.userRepository
      .createQueryBuilder('user')
      .where({
        id,
        status: UserStatus.Enabled,
      })
      .getOne()
  }

  // Tìm người dùng theo username, chỉ trả về nếu đang kích hoạt
  async findUserByUserName(username: string): Promise<UserEntity | undefined> {
    return this.userRepository
      .createQueryBuilder('user')
      .where({
        username,
        status: UserStatus.Enabled,
      })
      .getOne()
  }

  // Lấy thông tin tài khoản người dùng kèm roles
  async getAccountInfo(uid: number): Promise<AccountInfo> {
    const user = await this.userRepository
      .createQueryBuilder('user')
      .leftJoinAndSelect('user.roles', 'role')
      .where(`user.id = :uid`, { uid })
      .getOne()

    if (isEmpty(user))
      throw new BusinessException(ErrorEnum.USER_NOT_FOUND)
    delete user?.psalt
    return user
  }

  // Cập nhật thông tin người dùng như avatar, email, qq...
  async updateAccountInfo(uid: number, info: AccountUpdateDto): Promise<void> {
    const user = await this.userRepository.findOneBy({ id: uid })
    if (isEmpty(user))
      throw new BusinessException(ErrorEnum.USER_NOT_FOUND)

    const data = {
      ...(info.nickname ? { nickname: info.nickname } : null),
      ...(info.avatar ? { avatar: info.avatar } : null),
      ...(info.email ? { email: info.email } : null),
      ...(info.phone ? { phone: info.phone } : null),
      ...(info.qq ? { qq: info.qq } : null),
      ...(info.remark ? { remark: info.remark } : null),
    }

    if (!info.avatar && info.qq && info.qq !== user.qq) {
      data.avatar = await this.qqService.getAvater(info.qq)
    }

    await this.userRepository.update(uid, data)
  }

  // Cập nhật mật khẩu có xác thực mật khẩu cũ
  async updatePassword(uid: number, dto: PasswordUpdateDto): Promise<void> {
    const user = await this.userRepository.findOneBy({ id: uid })
    if (isEmpty(user))
      throw new BusinessException(ErrorEnum.USER_NOT_FOUND)

    const comparePassword = md5(`${dto.oldPassword}${user.psalt}`)
    if (user.password !== comparePassword)
      throw new BusinessException(ErrorEnum.PASSWORD_MISMATCH)

    const password = md5(`${dto.newPassword}${user.psalt}`)
    await this.userRepository.update({ id: uid }, { password })
    await this.upgradePasswordV(user.id)
  }

  // Cập nhật mật khẩu bắt buộc (dùng cho admin)
  async forceUpdatePassword(uid: number, password: string): Promise<void> {
    const user = await this.userRepository.findOneBy({ id: uid })
    const newPassword = md5(`${password}${user.psalt}`)
    await this.userRepository.update({ id: uid }, { password: newPassword })
    await this.upgradePasswordV(user.id)
  }

  // Tạo mới người dùng + đồng bộ với Odoo
  async create({
    username,
    password,
    roleIds,
    deptId,
    ...data
  }: UserDto): Promise<void> {
    const exists = await this.userRepository.findOneBy({ username })
    if (!isEmpty(exists))
      throw new BusinessException(ErrorEnum.SYSTEM_USER_EXISTS)

    await this.entityManager.transaction(async (manager) => {
      const salt = randomValue(32)

      if (!password) {
        const initPassword = await this.paramConfigService.findValueByKey(SYS_USER_INITPASSWORD)
        password = md5(`${initPassword ?? '123456'}${salt}`)
      }
      else {
        password = md5(`${password}${salt}`)
      }

      const u = manager.create(UserEntity, {
        username,
        password,
        ...data,
        psalt: salt,
        roles: await this.roleRepository.findBy({ id: In(roleIds) }),
        dept: await DeptEntity.findOneBy({ id: deptId }),
      })

      await manager.save(u)
    })

    // Đồng bộ người dùng với Odoo
    try {
      const odooData: OdooPartnerData = {
        name: data.nickname || username,
        email: data.email,
        phone: data.phone,
      }
      await this.OdooService.syncPartner(odooData)
    }
    catch (error) {
      console.log(`failed to sync  new user  ${username} to odoo.`, error.stack)
    }
  }

  // Cập nhật người dùng: thông tin, roles, phòng ban
  async update(
    id: number,
    { password, deptId, roleIds, status, ...data }: UserUpdateDto,
  ): Promise<void> {
    await this.entityManager.transaction(async (manager) => {
      if (password)
        await this.forceUpdatePassword(id, password)

      await manager.update(UserEntity, id, { ...data, status })

      const user = await this.userRepository
        .createQueryBuilder('user')
        .leftJoinAndSelect('user.roles', 'roles')
        .leftJoinAndSelect('user.dept', 'dept')
        .where('user.id = :id', { id })
        .getOne()

      if (roleIds) {
        await manager
          .createQueryBuilder()
          .relation(UserEntity, 'roles')
          .of(id)
          .addAndRemove(roleIds, user.roles)
      }

      if (deptId) {
        await manager
          .createQueryBuilder()
          .relation(UserEntity, 'dept')
          .of(id)
          .set(deptId)
      }

      if (status === 0) {
        await this.forbidden(id)
      }
    })
  }

  // Lấy chi tiết người dùng (kèm roles, phòng ban)
  async info(id: number): Promise<UserEntity> {
    const user = await this.userRepository
      .createQueryBuilder('user')
      .leftJoinAndSelect('user.roles', 'roles')
      .leftJoinAndSelect('user.dept', 'dept')
      .where('user.id = :id', { id })
      .getOne()

    delete user.password
    delete user.psalt

    return user
  }

  // Xóa người dùng (và đồng bộ hủy hoạt động Odoo nếu có email)
  async delete(userIds: number[]): Promise<void> {
    const rootUserId = await this.findRootUserId()
    if (userIds.includes(rootUserId))
      throw new BadRequestException('Không thể xóa người dùng root!')

    const usersToDelete = await this.userRepository.findBy({ id: In(userIds) })
    for (const user of usersToDelete) {
      if (user.email) {
        try {
          await this.OdooService.deactivatePartnerByEmail(user.email)
        }
        catch (error) {
          this.logger.error(`Failed to deactivate Odoo partner for user ID ${user.id}.`, error.stack)
        }
      }
    }

    await this.userRepository.delete(userIds)
  }

  // Tìm ID người dùng có role root
  async findRootUserId(): Promise<number> {
    const user = await this.userRepository.findOneBy({
      roles: { id: ROOT_ROLE_ID },
    })
    return user.id
  }

  // Lấy danh sách người dùng kèm filter và phân trang
  async list({
    page,
    pageSize,
    username,
    nickname,
    deptId,
    email,
    status,
  }: UserQueryDto): Promise<Pagination<UserEntity>> {
    const queryBuilder = this.userRepository
      .createQueryBuilder('user')
      .leftJoinAndSelect('user.dept', 'dept')
      .leftJoinAndSelect('user.roles', 'role')
      .where({
        ...(username ? { username: Like(`%${username}%`) } : null),
        ...(nickname ? { nickname: Like(`%${nickname}%`) } : null),
        ...(email ? { email: Like(`%${email}%`) } : null),
        ...(!isNil(status) ? { status } : null),
      })

    if (deptId)
      queryBuilder.andWhere('dept.id = :deptId', { deptId })

    return paginate<UserEntity>(queryBuilder, { page, pageSize })
  }

  // Thu hồi quyền truy cập người dùng (Xóa khỏi Redis)
  async forbidden(uid: number, accessToken?: string): Promise<void> {
    await this.redis.del(genAuthPVKey(uid))
    await this.redis.del(genAuthTokenKey(uid))
    await this.redis.del(genAuthPermKey(uid))
    if (accessToken) {
      const token = await AccessTokenEntity.findOne({ where: { value: accessToken } })
      this.redis.del(genOnlineUserKey(token.id))
    }
  }

  // Thu hồi quyền nhiều người dùng
  async multiForbidden(uids: number[]): Promise<void> {
    if (uids) {
      const pvs: string[] = []
      const ts: string[] = []
      const ps: string[] = []
      uids.forEach((uid) => {
        pvs.push(genAuthPVKey(uid))
        ts.push(genAuthTokenKey(uid))
        ps.push(genAuthPermKey(uid))
      })
      await this.redis.del(pvs)
      await this.redis.del(ts)
      await this.redis.del(ps)
    }
  }

  // Tăng version mật khẩu (phục vụ xác thực token mới)
  async upgradePasswordV(id: number): Promise<void> {
    const v = await this.redis.get(genAuthPVKey(id))
    if (!isEmpty(v))
      await this.redis.set(genAuthPVKey(id), Number.parseInt(v) + 1)
  }

  // Kiểm tra username đã tồn tại chưa
  async exist(username: string) {
    const user = await this.userRepository.findOneBy({ username })
    if (isNil(user))
      throw new BusinessException(ErrorEnum.SYSTEM_USER_EXISTS)

    return true
  }

  // Đăng ký tài khoản người dùng (dành cho user tự đăng ký)
  async register({ username, ...data }: RegisterDto): Promise<void> {
    const exists = await this.userRepository.findOneBy({ username })
    if (!isEmpty(exists))
      throw new BusinessException(ErrorEnum.SYSTEM_USER_EXISTS)

    await this.entityManager.transaction(async (manager) => {
      const salt = randomValue(32)
      const password = md5(`${data.password ?? 'a123456'}${salt}`)

      const u = manager.create(UserEntity, {
        username,
        password,
        status: 1,
        psalt: salt,
      })

      await manager.save(u)
    })
  }
}
