import type { FastifyRequest } from 'fastify'
import {
  CallHandler,
  ExecutionContext,
  HttpStatus,
  Injectable,
  NestInterceptor,
} from '@nestjs/common'
import { Reflector } from '@nestjs/core'
import qs from 'qs'
import { Observable } from 'rxjs'
import { map } from 'rxjs/operators'

import { ResOp } from '~/common/model/response.model'

import { BYPASS_KEY } from '../decorators/bypass.decorator'

/**
 * Unify the processing of interface requests and response results. If not needed, add the @Bypass decorator
 */
@Injectable()
export class TransformInterceptor implements NestInterceptor {
  constructor(private readonly reflector: Reflector) {}

  intercept(
    context: ExecutionContext,
    next: CallHandler<any>,
  ): Observable<any> {
    const bypass = this.reflector.get<boolean>(
      BYPASS_KEY,
      context.getHandler(),
    )

    if (bypass)
      return next.handle()

    const http = context.switchToHttp()
    const request = http.getRequest<FastifyRequest>()

    // Process query parameters and convert array parameters to arrays, such as: ?a[]=1&a[]=2 => { a: [1, 2] }
    request.query = qs.parse(request.url.split('?').at(1))

    return next.handle().pipe(
      map((data) => {
        // if (typeof data === 'undefined') {
        //   context.switchToHttp().getResponse().status(HttpStatus.NO_CONTENT);
        //   return data;
        // }

        return new ResOp(HttpStatus.OK, data ?? null)
      }),
    )
  }
}
