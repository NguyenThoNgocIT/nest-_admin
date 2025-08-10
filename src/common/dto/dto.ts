import z from 'zod'
import { createZodDto } from '..'
import { numStrSchema } from '../function/zod'

export const offsetPaginationSchema = {
	take: numStrSchema({ min: 1, int: true }).optional().default('10'),
	skip: numStrSchema({ min: 0, int: true }).optional().default('0'),
}
export const cursorPaginationSchema = {
	take: numStrSchema({ min: 1, int: true }).optional().default('10'),
	cursor: z.string().optional(),
}

export class IdsDto extends createZodDto(
	z.object({ ids: z.array(z.string().min(1)).min(1) }),
) { }

export class IdDto extends createZodDto(z.object({ id: z.string().min(1) })) { }

export class PaginationReqDto extends createZodDto(
	z.object(offsetPaginationSchema),
) { }

export class CuidDto extends createZodDto(
	z.object({
		length: numStrSchema({ min: 1 }).default('12'),
		amount: numStrSchema({ min: 1 }).default('10'),
	}),
) { }
