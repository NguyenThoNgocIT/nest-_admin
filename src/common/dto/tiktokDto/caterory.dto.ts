import z from 'zod'
import { createZodDto } from '../..'

export class getListingsDto extends createZodDto(
  z
    .object({
      locale: z.string().optional(),
      keyword: z.string().optional(),
      category_version: z.string().optional(),
      listing_platform: z.string().optional(),
    }),

) { }

export class getbrandsDto extends createZodDto(
  z
    .object({
      category_id: z.string().optional(),
      is_authorized: z.boolean().optional(),
      brand_name: z.string().optional(),
      listing_platform: z.string().optional(),
      page_size: z.number(),
      page_token: z.string().optional(),
      category_version: z.string(),
    }),

) { }
