import { isNil } from 'lodash'
import z, { ZodEffects, ZodType, ZodTypeDef } from 'zod'

export const numStrSchema = (
	option: {
		min?: number
		max?: number
		int?: boolean
	} = {},
): z.ZodType<number, z.ZodTypeDef, string> => {
	const { int, max, min } = option
	return z
		.string()
		.transform(val => {
			if (val === '' || isNil(val)) {
				throw new Error('Value is required')
			}
			const num = Number(val)
			if (Number.isNaN(num)) throw new Error('Value must be a number')
			return num
		})
		.refine(num => !int || Number.isInteger(num), {
			message: 'Value must be an integer',
		})
		.refine(num => min === undefined || num >= min, {
			message: `Value must be at least ${min}`,
		})
		.refine(num => max === undefined || num <= max, {
			message: `Value must be at most ${max}`,
		})
}

export const boolStrSchema: ZodEffects<
	ZodType<unknown, ZodTypeDef, unknown>,
	boolean,
	unknown
> = z.custom<unknown>().transform(value => {
	if (value == null) return false
	const strValue = `${value}`.toLowerCase().trim()
	if (['1', 'yes', 'true'].includes(strValue)) return true
	if (['0', 'no', 'false'].includes(strValue)) return false
	return Boolean(value)
})

export const cuidSchema = z
	.string()
	.refine(value => /^[a-z0-9]{12}$/.test(value), {
		message: 'ID must be exactly 12 alphanumeric lowercase characters',
		path: [],
	})
