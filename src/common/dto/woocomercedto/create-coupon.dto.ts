import { Type } from 'class-transformer'
import { IsArray, IsBoolean, IsEnum, IsInt, IsNumberString, IsOptional, IsString } from 'class-validator'

class MetaData {
  @IsString()
  key: string

  @IsString()
  value: string
}

export class CreateCouponDto {
  @IsString()
  code: string // Bắt buộc

  @IsNumberString()
  @IsOptional()
  amount?: string

  @IsEnum(['percent', 'fixed_cart', 'fixed_product'])
  @IsOptional()
  discount_type?: 'percent' | 'fixed_cart' | 'fixed_product'

  @IsString()
  @IsOptional()
  description?: string

  @IsString()
  @IsOptional()
  date_expires?: string

  @IsString()
  @IsOptional()
  date_expires_gmt?: string

  @IsBoolean()
  @IsOptional()
  individual_use?: boolean

  @IsArray()
  @IsInt({ each: true })
  @IsOptional()
  product_ids?: number[]

  @IsArray()
  @IsInt({ each: true })
  @IsOptional()
  excluded_product_ids?: number[]

  @IsInt()
  @IsOptional()
  usage_limit?: number

  @IsInt()
  @IsOptional()
  usage_limit_per_user?: number

  @IsInt()
  @IsOptional()
  limit_usage_to_x_items?: number

  @IsBoolean()
  @IsOptional()
  free_shipping?: boolean

  @IsArray()
  @IsInt({ each: true })
  @IsOptional()
  product_categories?: number[]

  @IsArray()
  @IsInt({ each: true })
  @IsOptional()
  excluded_product_categories?: number[]

  @IsBoolean()
  @IsOptional()
  exclude_sale_items?: boolean

  @IsNumberString()
  @IsOptional()
  minimum_amount?: string

  @IsNumberString()
  @IsOptional()
  maximum_amount?: string

  @IsArray()
  @IsString({ each: true })
  @IsOptional()
  email_restrictions?: string[]

  @IsArray()
  @Type(() => MetaData)
  @IsOptional()
  meta_data?: MetaData[]
}
