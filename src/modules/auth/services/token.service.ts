import { Inject, Injectable } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import dayjs from 'dayjs'
import Redis from 'ioredis'

import { InjectRedis } from '~/common/decorators/inject-redis.decorator'

import { ISecurityConfig, SecurityConfig } from '~/config'
import { genOnlineUserKey } from '~/helper/genRedisKey'
import { RoleService } from '~/modules/system/role/role.service'
import { UserEntity } from '~/modules/user/user.entity'
import { generateUUID } from '~/utils'

import { AccessTokenEntity } from '../entities/access-token.entity'
import { RefreshTokenEntity } from '../entities/refresh-token.entity'

/**
 * Dịch vụ xử lý Token
 *
 */
@Injectable()
export class TokenService {
  constructor(
    private jwtService: JwtService,
    private roleService: RoleService,
    @InjectRedis() private redis: Redis,
    @Inject(SecurityConfig.KEY) private securityConfig: ISecurityConfig,
  ) {}

  /**
   * Làm mới AccessToken và RefreshToken từ AccessToken hiện tại
   * @param accessToken
   */
  async refreshToken(accessToken: AccessTokenEntity) {
    const { user, refreshToken } = accessToken

    if (refreshToken) {
      const now = dayjs()
      // Kiểm tra xem refreshToken có hết hạn không

      if (now.isAfter(refreshToken.expired_at))
        return null

      const roleIds = await this.roleService.getRoleIdsByUser(user.id)
      const roleValues = await this.roleService.getRoleValues(roleIds)

      // Nếu chưa hết hạn thì tạo mới access_token và refresh_token
      const token = await this.generateAccessToken(user.id, roleValues)

      await accessToken.remove()
      return token
    }
    return null
  }

  generateJwtSign(payload: any) {
    const jwtSign = this.jwtService.sign(payload)
    return jwtSign
  }

  async generateAccessToken(uid: number, roles: string[] = []) {
    const payload: IAuthUser = {
      uid,
      pv: 1,
      roles,
    }

    const jwtSign = await this.jwtService.signAsync(payload)

    // Tạo accessToken
    const accessToken = new AccessTokenEntity()
    accessToken.value = jwtSign
    accessToken.user = { id: uid } as UserEntity
    accessToken.expired_at = dayjs()
      .add(this.securityConfig.jwtExprire, 'second')
      .toDate()

    await accessToken.save()

    // Tạo refreshToken
    const refreshToken = await this.generateRefreshToken(accessToken, dayjs())

    return {
      accessToken: jwtSign,
      refreshToken,
    }
  }

  /**
   * Tạo refreshToken mới và lưu vào cơ sở dữ liệu
   *
   * @param accessToken
   * @param now
   */
  async generateRefreshToken(
    accessToken: AccessTokenEntity,
    now: dayjs.Dayjs,
  ): Promise<string> {
    const refreshTokenPayload = {
      uuid: generateUUID(),
    }

    const refreshTokenSign = await this.jwtService.signAsync(refreshTokenPayload, {
      secret: this.securityConfig.refreshSecret,
    })

    const refreshToken = new RefreshTokenEntity()
    refreshToken.value = refreshTokenSign
    refreshToken.expired_at = now
      .add(this.securityConfig.refreshExpire, 'second')
      .toDate()
    refreshToken.accessToken = accessToken

    await refreshToken.save()

    return refreshTokenSign
  }

  /**
   *  Kiểm tra accessToken có tồn tại và còn hiệu lực không
   *
   * @param value
   */
  async checkAccessToken(value: string) {
    let isValid = false
    try {
      await this.verifyAccessToken(value)
      const res = await AccessTokenEntity.findOne({
        where: { value },
        relations: ['user', 'refreshToken'],
        cache: true,
      })
      isValid = Boolean(res)
    }
    catch (error) {}

    return isValid
  }

  /**
   *  Xoá accessToken và tự động xoá refreshToken liên quan
   * @param value
   */
  async removeAccessToken(value: string) {
    const accessToken = await AccessTokenEntity.findOne({
      where: { value },
    })
    if (accessToken) {
      this.redis.del(genOnlineUserKey(accessToken.id))
      await accessToken.remove()
    }
  }

  /**
   *  Xoá refreshToken
   *
   * @param value
   */
  async removeRefreshToken(value: string) {
    const refreshToken = await RefreshTokenEntity.findOne({
      where: { value },
      relations: ['accessToken'],
    })
    if (refreshToken) {
      if (refreshToken.accessToken)
        this.redis.del(genOnlineUserKey(refreshToken.accessToken.id))
      await refreshToken.accessToken.remove()
      await refreshToken.remove()
    }
  }

  /**
   *  Xác thực token có hợp lệ không, nếu hợp lệ thì trả về thông tin người dùng
   *
   * @param token
   */
  async verifyAccessToken(token: string): Promise<IAuthUser> {
    return this.jwtService.verifyAsync(token)
  }
}
