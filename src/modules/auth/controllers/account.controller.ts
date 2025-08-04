import { Body, Controller, Get, Post, Put, Req, UseGuards } from '@nestjs/common'
import { ApiExtraModels, ApiOperation, ApiTags } from '@nestjs/swagger'
import { FastifyRequest } from 'fastify'

import { ApiResult } from '~/common/decorators/api-result.decorator'

import { ApiSecurityAuth } from '~/common/decorators/swagger.decorator'
import { AllowAnon } from '~/modules/auth/decorators/allow-anon.decorator'
import { AuthUser } from '~/modules/auth/decorators/auth-user.decorator'

import { PasswordUpdateDto } from '~/modules/user/dto/password.dto'

import { AccountInfo } from '../../user/user.model'
import { UserService } from '../../user/user.service'
import { AuthService } from '../auth.service'
import { AccountMenus, AccountUpdateDto } from '../dto/account.dto'
import { JwtAuthGuard } from '../guards/jwt-auth.guard'

@ApiTags('Account - Mô-đun tài khoản')
@ApiSecurityAuth()
@ApiExtraModels(AccountInfo)
@UseGuards(JwtAuthGuard)
@Controller('account')
export class AccountController {
  constructor(
    private userService: UserService,
    private authService: AuthService,
  ) {}

  @Get('profile')
  @ApiOperation({ summary: 'Lấy thông tin tài khoản' })
  @ApiResult({ type: AccountInfo })
  @AllowAnon()
  async profile(@AuthUser() user: IAuthUser): Promise<AccountInfo> {
    return this.userService.getAccountInfo(user.uid)
  }

  @Get('logout')
  @ApiOperation({ summary: 'Đăng xuất tài khoản' })
  @AllowAnon()
  async logout(@AuthUser() user: IAuthUser, @Req() req: FastifyRequest): Promise<void> {
    await this.authService.clearLoginStatus(user, req.accessToken)
  }

  @Get('menus')
  @ApiOperation({ summary: 'Lấy danh sách menu' })
  @ApiResult({ type: [AccountMenus] })
  @AllowAnon()
  async menu(@AuthUser() user: IAuthUser) {
    return this.authService.getMenus(user.uid)
  }

  @Get('permissions')
  @ApiOperation({ summary: 'Lấy danh sách quyền' })
  @ApiResult({ type: [String] })
  @AllowAnon()
  async permissions(@AuthUser() user: IAuthUser): Promise<string[]> {
    return this.authService.getPermissions(user.uid)
  }

  @Put('update')
  @ApiOperation({ summary: 'Cập nhật thông tin tài khoản' })
  @AllowAnon()
  async update(
    @AuthUser() user: IAuthUser,
    @Body() dto: AccountUpdateDto,
  ): Promise<void> {
    await this.userService.updateAccountInfo(user.uid, dto)
  }

  @Post('password')
  @ApiOperation({ summary: 'Đổi mật khẩu tài khoản' })
  @AllowAnon()
  async password(
    @AuthUser() user: IAuthUser,
    @Body() dto: PasswordUpdateDto,
  ): Promise<void> {
    await this.userService.updatePassword(user.uid, dto)
  }
}
