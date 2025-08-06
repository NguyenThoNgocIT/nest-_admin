import {
  ExecutionContext,
  Inject,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common'
import { Reflector } from '@nestjs/core'
import { AuthGuard } from '@nestjs/passport'
import { FastifyRequest } from 'fastify'
import Redis from 'ioredis'
import { isEmpty, isNil } from 'lodash'
import { ExtractJwt } from 'passport-jwt'

import { InjectRedis } from '~/common/decorators/inject-redis.decorator'

import { BusinessException } from '~/common/exceptions/biz.exception'
import { AppConfig, IAppConfig, RouterWhiteList } from '~/config'
import { ErrorEnum } from '~/constants/error-code.constant'
import { genTokenBlacklistKey } from '~/helper/genRedisKey'

import { AuthService } from '~/modules/auth/auth.service'

import { checkIsDemoMode } from '~/utils'

import { AuthStrategy, PUBLIC_KEY } from '../auth.constant'
import { TokenService } from '../services/token.service'

/** @type {import('fastify').RequestGenericInterface} */
interface RequestType {
  Params: {
    uid?: string
  }
  Querystring: {
    token?: string
  }
}

// https://docs.nestjs.com/recipes/passport#implement-protected-route-and-jwt-strategy-guards
@Injectable()
export class JwtAuthGuard extends AuthGuard(AuthStrategy.JWT) {
  jwtFromRequestFn = ExtractJwt.fromAuthHeaderAsBearerToken()

  constructor(
    private reflector: Reflector,
    private authService: AuthService,
    private tokenService: TokenService,
    @InjectRedis() private readonly redis: Redis,
    @Inject(AppConfig.KEY) private appConfig: IAppConfig,
  ) {
    super()
  }

  async canActivate(context: ExecutionContext): Promise<any> {
    const isPublic = this.reflector.getAllAndOverride<boolean>(PUBLIC_KEY, [
      context.getHandler(),
      context.getClass(),
    ])

    const request = context.switchToHttp().getRequest<FastifyRequest<RequestType>>()

    // ✅ Bỏ qua xác thực nếu URL nằm trong whitelist
    if (RouterWhiteList.includes(request.routeOptions.url))
      return true

    // ✅ Trong chế độ demo, chặn các thao tác thêm/sửa/xóa (ngoại trừ login)
    if (request.method !== 'GET' && !request.url.includes('/auth/login'))
      checkIsDemoMode()

    const isSse = request.headers.accept === 'text/event-stream'

    // ✅ Đối với SSE, nếu không có Authorization Header thì lấy token từ query
    if (isSse && !request.headers.authorization?.startsWith('Bearer ')) {
      const { token } = request.query
      if (token)
        request.headers.authorization = `Bearer ${token}`
    }

    const token = this.jwtFromRequestFn(request)

    // ✅ Kiểm tra token có nằm trong danh sách đen (đăng xuất, bị vô hiệu hóa)
    if (await this.redis.get(genTokenBlacklistKey(token)))
      throw new BusinessException(ErrorEnum.INVALID_LOGIN)

    request.accessToken = token

    let result: any = false
    try {
      result = await super.canActivate(context)
    }
    catch (err) {
      // ✅ Nếu route là public thì cho qua
      if (isPublic)
        return true

      // ✅ Nếu không có token thì báo lỗi chưa đăng nhập
      if (isEmpty(token))
        throw new UnauthorizedException('Bạn chưa đăng nhập')

      // ✅ Nếu là lỗi UnauthorizedException thì trả lỗi không hợp lệ
      if (err instanceof UnauthorizedException)
        throw new BusinessException(ErrorEnum.INVALID_LOGIN)

      // ✅ Kiểm tra token có hợp lệ không (hết hạn hoặc bị giả mạo)
      const isValid = isNil(token)
        ? undefined
        : await this.tokenService.checkAccessToken(token!)

      if (!isValid)
        throw new BusinessException(ErrorEnum.INVALID_LOGIN)
    }

    // ✅ Trường hợp SSE: kiểm tra uid trong path khớp với uid trong token
    if (isSse) {
      const { uid } = request.params

      if (Number(uid) !== request.user.uid)
        throw new UnauthorizedException('UID trong đường dẫn không khớp với người dùng đang đăng nhập')
    }

    // ✅ Kiểm tra phiên bản mật khẩu: nếu đổi mật khẩu giữa chừng thì đăng nhập lại
    const pv = await this.authService.getPasswordVersionByUid(request.user.uid)
    if (pv !== `${request.user.pv}`) {
      throw new BusinessException(ErrorEnum.INVALID_LOGIN)
    }

    // ✅ Nếu không cho phép đăng nhập nhiều thiết bị thì kiểm tra token
    if (!this.appConfig.multiDeviceLogin) {
      const cacheToken = await this.authService.getTokenByUid(request.user.uid)

      if (token !== cacheToken) {
        throw new BusinessException(ErrorEnum.ACCOUNT_LOGGED_IN_ELSEWHERE)
      }
    }

    return result
  }

  handleRequest(err, user, info) {
    // ✅ Xử lý lỗi xác thực — nếu không có user thì ném lỗi
    if (err || !user)
      throw err || new UnauthorizedException()

    return user
  }
}
