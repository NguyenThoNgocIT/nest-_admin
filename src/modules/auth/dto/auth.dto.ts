import { ApiProperty } from '@nestjs/swagger'
import { IsString, Matches, MaxLength, MinLength } from 'class-validator'

// DTO cho đăng nhập
export class LoginDto {
  @ApiProperty({ description: 'Tên đăng nhập' })
  @IsString()
  @MinLength(4)
  username: string

  @ApiProperty({ description: 'Mật khẩu', example: 'a123456' })
  @IsString()
  @Matches(/^\S*(?=\S{6})(?=\S*\d)(?=\S*[A-Z])\S*$/i)
  @MinLength(6)
  password: string

  @ApiProperty({ description: 'ID của mã xác minh (captcha)' })
  @IsString()
  captchaId: string

  @ApiProperty({ description: 'Mã xác minh do người dùng nhập' })
  @IsString()
  @MinLength(4)
  @MaxLength(4)
  verifyCode: string
}

// DTO cho đăng ký tài khoản
export class RegisterDto {
  @ApiProperty({ description: 'Tên tài khoản' })
  @IsString()
  username: string

  @ApiProperty({ description: 'Mật khẩu' })
  @IsString()
  @Matches(/^\S*(?=\S{6})(?=\S*\d)(?=\S*[A-Z])\S*$/i)
  @MinLength(6)
  @MaxLength(16)
  password: string

  @ApiProperty({ description: 'Ngôn ngữ', examples: ['EN', 'ZH'] })
  @IsString()
  lang: string
}
