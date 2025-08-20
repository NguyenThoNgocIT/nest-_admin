import { applyDecorators } from '@nestjs/common'
import { ApiSecurity } from '@nestjs/swagger'

export const API_SECURITY_AUTH = 'access-token'

/**
 * like to @ApiSecurity('auth')
 */
export function ApiSecurityAuth(): ClassDecorator & MethodDecorator {
  return applyDecorators(ApiSecurity(API_SECURITY_AUTH))
}
