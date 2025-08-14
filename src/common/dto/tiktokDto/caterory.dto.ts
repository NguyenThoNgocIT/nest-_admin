import z from 'zod'
import { createZodDto } from '../..'
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class getListingsDto extends createZodDto(
  z
    .object({
      locale: z.string().optional(),
      keyword: z.string().optional(),
      category_version: z.string().optional(),
      listing_platform: z.string().optional(),
    }),

) { }

const getBrandsSchema = z.object({
  category_id: z.string().optional(),
  is_authorized: z.boolean().optional(),
  brand_name: z.string().optional(),
  listing_platform: z.string().optional(),
  page_size: z.coerce.number(),
  page_token: z.string().optional(),
  category_version: z.string(),
});

// Định nghĩa DTO với Zod và Swagger
export class getbrandsDto extends createZodDto(getBrandsSchema) {
  @ApiPropertyOptional({ type: String, description: 'Category ID' })
  category_id?: string;

  @ApiPropertyOptional({ type: Boolean, description: 'Is authorized' })
  is_authorized?: boolean;

  @ApiPropertyOptional({ type: String, description: 'Brand name' })
  brand_name?: string;

  @ApiPropertyOptional({ type: String, description: 'Listing platform' })
  listing_platform?: string;

  @ApiProperty({ type: Number, description: 'Page size' })
  page_size: number;

  @ApiPropertyOptional({ type: String, description: 'Page token' })
  page_token?: string;

  @ApiProperty({ type: String, description: 'Category version' })
  category_version?: string;
}