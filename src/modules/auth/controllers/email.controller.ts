import { Body, Controller, Post, UseGuards } from '@nestjs/common'
import { ApiOperation, ApiTags } from '@nestjs/swagger'

import { Throttle, ThrottlerGuard } from '@nestjs/throttler'

import { Ip } from '~/common/decorators/http.decorator'

import { MailerService } from '~/shared/mailer/mailer.service'

import { Public } from '../decorators/public.decorator'

import { SendEmailCodeDto } from '../dto/captcha.dto'

// Gắn nhãn cho tài liệu Swagger
@ApiTags('Xác thực - Gửi mã qua Email')
@UseGuards(ThrottlerGuard)
@Controller('auth/email')
export class EmailController {
  constructor(private mailerService: MailerService) {}

  @Post('send')
  @ApiOperation({ summary: 'Gửi mã xác thực qua email' })
  @Public()
  @Throttle({ default: { limit: 2, ttl: 600000 } }) // Giới hạn 2 lần mỗi 10 phút
  async sendEmailCode(
    @Body() dto: SendEmailCodeDto,
    @Ip() ip: string,
  ): Promise<void> {
    // Kiểm tra captcha hình ảnh nếu cần
    // await this.authService.checkImgCaptcha(dto.captchaId, dto.verifyCode);

    const { email } = dto

    await this.mailerService.checkLimit(email, ip)
    const { code } = await this.mailerService.sendVerificationCode(email)

    await this.mailerService.log(email, code, ip)
  }

  // @Post()
  // async authWithEmail(@AuthUser() user: IAuthUser) {
  //   // TODO: Xác thực bằng email
  // }
}
