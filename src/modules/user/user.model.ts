import { ApiProperty } from '@nestjs/swagger'

export class AccountInfo {
  @ApiProperty({ description: 'username' })
  username: string

  @ApiProperty({ description: 'name' })
  nickname: string

  @ApiProperty({ description: 'email' })
  email: string

  @ApiProperty({ description: 'phone' })
  phone: string

  @ApiProperty({ description: 'ghi chú' })
  remark: string

  @ApiProperty({ description: 'avatar' })
  avatar: string
}
