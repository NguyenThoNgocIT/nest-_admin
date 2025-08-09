import type { FastifyRequest } from 'fastify'
import { ClassSerializerInterceptor, Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'

import { APP_FILTER, APP_GUARD, APP_INTERCEPTOR } from '@nestjs/core'
import { ThrottlerGuard } from '@nestjs/throttler'
import { ClsModule } from 'nestjs-cls'

import config from '~/config'
import { SharedModule } from '~/shared/shared.module'

import { AllExceptionsFilter } from './common/filters/any-exception.filter'

import { IdempotenceInterceptor } from './common/interceptors/idempotence.interceptor'
import { TimeoutInterceptor } from './common/interceptors/timeout.interceptor'
import { TransformInterceptor } from './common/interceptors/transform.interceptor'
import { AuthModule } from './modules/auth/auth.module'
import { JwtAuthGuard } from './modules/auth/guards/jwt-auth.guard'
import { RbacGuard } from './modules/auth/guards/rbac.guard'
import { HealthModule } from './modules/health/health.module'
import { NetdiskModule } from './modules/netdisk/netdisk.module'

import { OdooModule } from './modules/odoo/odoo.module'
import { SseModule } from './modules/sse/sse.module'
import { SystemModule } from './modules/system/system.module'

import { TasksModule } from './modules/tasks/tasks.module'

import { TodoModule } from './modules/todo/todo.module'
import { ToolsModule } from './modules/tools/tools.module'

import { DatabaseModule } from './shared/database/database.module'
import { SocketModule } from './socket/socket.module'

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      expandVariables: true,
      envFilePath: ['.env.local', `.env.${process.env.NODE_ENV}`, '.env'],
      load: [...Object.values(config)],
    }),
    ClsModule.forRoot({
      global: true,
      // https://github.com/Papooch/nestjs-cls/issues/92
      interceptor: {
        mount: true,
        setup: (cls, context) => {
          const req = context.switchToHttp().getRequest<FastifyRequest<{ Params: { id?: string } }>>()
          if (req.params?.id && req.body) {
            cls.set('operateId', Number.parseInt(req.params.id))
          }
        },
      },
    }),
    SharedModule,
    DatabaseModule,

    AuthModule,
    SystemModule,
    TasksModule.forRoot(),
    ToolsModule,
    SocketModule,
    HealthModule,
    SseModule,
    NetdiskModule,
    TodoModule,
    OdooModule,
  ],
  providers: [
    { provide: APP_FILTER, useClass: AllExceptionsFilter },

    { provide: APP_INTERCEPTOR, useClass: ClassSerializerInterceptor },
    { provide: APP_INTERCEPTOR, useClass: TransformInterceptor },
    { provide: APP_INTERCEPTOR, useFactory: () => new TimeoutInterceptor(15 * 1000) },
    { provide: APP_INTERCEPTOR, useClass: IdempotenceInterceptor },

    { provide: APP_GUARD, useClass: JwtAuthGuard },
    { provide: APP_GUARD, useClass: RbacGuard },
    { provide: APP_GUARD, useClass: ThrottlerGuard },

  ],
})
export class AppModule {}
