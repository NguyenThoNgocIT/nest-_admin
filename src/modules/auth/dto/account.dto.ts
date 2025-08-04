import { ApiProperty, OmitType, PartialType, PickType } from '@nestjs/swagger'
import {
  IsEmail,
  IsOptional,
  IsString,
  Matches,
  MaxLength,
  MinLength,
} from 'class-validator'

import { MenuEntity } from '~/modules/system/menu/menu.entity'

// DTO để cập nhật thông tin tài khoản người dùng
export class AccountUpdateDto {
  @ApiProperty({ description: 'Biệt danh người dùng' })
  @IsString()
  @IsOptional()
  nickname: string

  @ApiProperty({ description: 'Email người dùng' })
  @IsOptional()
  @IsEmail()
  email: string

  @ApiProperty({ description: 'Số QQ của người dùng' })
  @IsOptional()
  @IsString()
  @Matches(/^\d+$/)
  @MinLength(5)
  @MaxLength(11)
  qq: string

  @ApiProperty({ description: 'Số điện thoại người dùng' })
  @IsOptional()
  @IsString()
  phone: string

  @ApiProperty({ description: 'Ảnh đại diện của người dùng' })
  @IsOptional()
  @IsString()
  avatar: string

  @ApiProperty({ description: 'Ghi chú của người dùng' })
  @IsOptional()
  @IsString()
  remark: string
}

// DTO để đặt lại mật khẩu
export class ResetPasswordDto {
  @ApiProperty({ description: 'Token tạm thời', example: 'uuid' })
  @IsString()
  accessToken: string

  @ApiProperty({ description: 'Mật khẩu mới', example: 'a123456' })
  @IsString()
  @Matches(/^\S*(?=\S{6})(?=\S*\d)(?=\S*[A-Z])\S*$/i)
  @MinLength(6)
  password: string
}

// Thông tin meta cho menu (loại bỏ các trường không cần và cho phép tùy chọn)
export class MenuMeta extends PartialType(
  OmitType(MenuEntity, ['parentId', 'createdAt', 'updatedAt', 'id', 'roles', 'path', 'name'] as const),
) {
  title: string
}

// Dữ liệu menu tài khoản với một số trường được chọn
export class AccountMenus extends PickType(MenuEntity, ['id', 'path', 'name', 'component'] as const) {
  meta: MenuMeta
}
