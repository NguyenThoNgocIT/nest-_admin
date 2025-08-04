import { ApiProperty } from '@nestjs/swagger'
import { Type } from 'class-transformer'
import {
  IsEmail,
  IsInt,
  IsMobilePhone,
  IsOptional,
  IsString,
} from 'class-validator'

// DTO cho hình ảnh mã xác minh (captcha)
export class ImageCaptchaDto {
  @ApiProperty({
    required: false,
    default: 100,
    description: 'Chiều rộng của mã xác minh',
  })
  @Type(() => Number)
  @IsInt()
  @IsOptional()
  readonly width: number = 100

  @ApiProperty({
    required: false,
    default: 50,
    description: 'Chiều cao của mã xác minh',
  })
  @Type(() => Number)
  @IsInt()
  @IsOptional()
  readonly height: number = 50
}

// DTO để gửi mã xác minh qua email
export class SendEmailCodeDto {
  @ApiProperty({ description: 'Email' })
  @IsEmail({}, { message: 'Định dạng email không hợp lệ' })
  email: string
}

// DTO để gửi mã xác minh qua tin nhắn SMS
export class SendSmsCodeDto {
  @ApiProperty({ description: 'Số điện thoại' })
  @IsMobilePhone('zh-CN', {}, { message: 'Định dạng số điện thoại không hợp lệ' })
  phone: string
}

// DTO để kiểm tra mã xác minh
export class CheckCodeDto {
  @ApiProperty({ description: 'Email hoặc số điện thoại' })
  @IsString()
  account: string

  @ApiProperty({ description: 'Mã xác minh' })
  @IsString()
  code: string
}
