import crypto from 'node:crypto'
import { z } from 'zod'
// hàm này sẽ sắp xếp các khóa của một đối tượng theo thứ tự tăng dần
// tik tok shop api sẽ yêu cầu các tham số được sắp xếp theo thứ tự chữ cái
function objKeySort(obj) {
  const newKey = Object.keys(obj).sort()
  const newObj = {}
  for (let i = 0; i < newKey.length; i++) {
    newObj[newKey[i]] = obj[newKey[i]]
  }
  return newObj
}
/// dùng để tạo signature cho các yêu cầu đến tiktok shop api
export function generateSignature(params: any, body: string, path: string): string {
  const appSecret = process.env.TIKTOK_SHOP_SECRET
  const sortParam = objKeySort(params)
  let signstring = appSecret + path

  for (const key in sortParam) {
    signstring = signstring + key + sortParam[key]
  }
  signstring = signstring + (!body ? appSecret : JSON.stringify(body) + appSecret)

  return crypto
    .createHmac('sha256', appSecret as string)
    .update(signstring)
    .digest('hex')
}
export type CompatibleZodInfer<T extends CompatibleZodType> = T['_output']
export type CompatibleZodType = Pick<
  z.ZodType<unknown>,
  '_input' | '_output' | 'parse' | 'safeParse'
>
export type EnforceOptional<ObjectType> = Simplify<
  {
    [Key in keyof ObjectType as RequiredFilter<
      ObjectType,
      Key
    >]: ObjectType[Key]
  } & {
    [Key in keyof ObjectType as OptionalFilter<ObjectType, Key>]?: Exclude<
      ObjectType[Key],
      undefined
    >
  }
>
export type Merge<Destination, Source> = EnforceOptional<
  SimpleMerge<PickIndexSignature<Destination>, PickIndexSignature<Source>> &
  SimpleMerge<OmitIndexSignature<Destination>, OmitIndexSignature<Source>>
>
export type MergeZodSchemaOutput<T extends CompatibleZodType> =
  T extends z.ZodDiscriminatedUnion<any, infer Options>
    ? Merge<
    object,
      TupleToUnion<{
        [X in keyof Options]: Options[X] extends z.ZodType
          ? Options[X]['_output']
          : Options[X]
      }>
    >
    : T extends z.ZodUnion<infer UnionTypes>
      ? UnionTypes extends z.ZodType[]
        ? Merge<
    object,
          TupleToUnion<{
            [X in keyof UnionTypes]: UnionTypes[X] extends z.ZodType
              ? UnionTypes[X]['_output']
              : UnionTypes[X]
          }>
        >
        : T['_output']
      : T['_output']
export type OmitIndexSignature<ObjectType> = {
  [KeyType in keyof ObjectType as object extends Record<KeyType, unknown>
    ? never
    : KeyType]: ObjectType[KeyType]
}
export type OptionalFilter<
  Type,
  Key extends keyof Type,
> = undefined extends Type[Key]
  ? Type[Key] extends undefined
    ? never
    : Key
  : never
export type PickIndexSignature<ObjectType> = {
  [KeyType in keyof ObjectType as object extends Record<KeyType, unknown>
    ? KeyType
    : never]: ObjectType[KeyType]
}
export type RequiredFilter<
  Type,
  Key extends keyof Type,
> = undefined extends Type[Key]
  ? Type[Key] extends undefined
    ? Key
    : never
  : Key
export type SimpleMerge<Destination, Source> = {
  [Key in keyof Destination | keyof Source]: Key extends keyof Source
    ? Source[Key]
    : Key extends keyof Destination
      ? Destination[Key]
      : never
}
export type Simplify<T> = {
  [KeyType in keyof T]: T[KeyType]
}
export type TupleToUnion<ArrayType> = ArrayType extends readonly unknown[]
  ? ArrayType[number]
  : never
export interface ZodDto<T extends CompatibleZodType = CompatibleZodType> {
  new(): MergeZodSchemaOutput<T>
  schema: T
  create: (input: unknown) => CompatibleZodInfer<T>
}
export function createZodDto<T extends z.ZodTypeAny>(s: T): ZodDto<T> {
  class AugmentedZodDto {
    public static schema = s
    public static create(input: unknown) {
      return this.schema.parse(input)
    }
  }
  return AugmentedZodDto as unknown as ZodDto<T>
}
