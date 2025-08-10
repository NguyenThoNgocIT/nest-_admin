
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Permission
 * 
 */
export type Permission = $Result.DefaultSelection<Prisma.$PermissionPayload>
/**
 * Model Role
 * 
 */
export type Role = $Result.DefaultSelection<Prisma.$RolePayload>
/**
 * Model RolePermission
 * 
 */
export type RolePermission = $Result.DefaultSelection<Prisma.$RolePermissionPayload>
/**
 * Model RolePlayer
 * 
 */
export type RolePlayer = $Result.DefaultSelection<Prisma.$RolePlayerPayload>
/**
 * Model Session
 * 
 */
export type Session = $Result.DefaultSelection<Prisma.$SessionPayload>
/**
 * Model ApiKey
 * 
 */
export type ApiKey = $Result.DefaultSelection<Prisma.$ApiKeyPayload>
/**
 * Model Activity
 * 
 */
export type Activity = $Result.DefaultSelection<Prisma.$ActivityPayload>
/**
 * Model I18n
 * 
 */
export type I18n = $Result.DefaultSelection<Prisma.$I18nPayload>
/**
 * Model IPWhitelist
 * 
 */
export type IPWhitelist = $Result.DefaultSelection<Prisma.$IPWhitelistPayload>
/**
 * Model Setting
 * 
 */
export type Setting = $Result.DefaultSelection<Prisma.$SettingPayload>
/**
 * Model Proxy
 * 
 */
export type Proxy = $Result.DefaultSelection<Prisma.$ProxyPayload>
/**
 * Model TelegramTemplate
 * 
 */
export type TelegramTemplate = $Result.DefaultSelection<Prisma.$TelegramTemplatePayload>
/**
 * Model TelegramChat
 * 
 */
export type TelegramChat = $Result.DefaultSelection<Prisma.$TelegramChatPayload>
/**
 * Model TelegramBot
 * 
 */
export type TelegramBot = $Result.DefaultSelection<Prisma.$TelegramBotPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const API_KEY_TYPE: {
  PUBLIC: 'PUBLIC',
  PRIVATE: 'PRIVATE'
};

export type API_KEY_TYPE = (typeof API_KEY_TYPE)[keyof typeof API_KEY_TYPE]


export const SETTING_DATA_TYPE: {
  STRING: 'STRING',
  NUMBER: 'NUMBER',
  BOOLEAN: 'BOOLEAN',
  DATE: 'DATE'
};

export type SETTING_DATA_TYPE = (typeof SETTING_DATA_TYPE)[keyof typeof SETTING_DATA_TYPE]


export const ProxyProtocol: {
  HTTP: 'HTTP',
  HTTPS: 'HTTPS',
  SOCKS4: 'SOCKS4',
  SOCKS5: 'SOCKS5'
};

export type ProxyProtocol = (typeof ProxyProtocol)[keyof typeof ProxyProtocol]


export const TELEGRAM_CHAT_TYPE: {
  CHAT: 'CHAT',
  GROUP: 'GROUP',
  CHANEL: 'CHANEL'
};

export type TELEGRAM_CHAT_TYPE = (typeof TELEGRAM_CHAT_TYPE)[keyof typeof TELEGRAM_CHAT_TYPE]

}

export type API_KEY_TYPE = $Enums.API_KEY_TYPE

export const API_KEY_TYPE: typeof $Enums.API_KEY_TYPE

export type SETTING_DATA_TYPE = $Enums.SETTING_DATA_TYPE

export const SETTING_DATA_TYPE: typeof $Enums.SETTING_DATA_TYPE

export type ProxyProtocol = $Enums.ProxyProtocol

export const ProxyProtocol: typeof $Enums.ProxyProtocol

export type TELEGRAM_CHAT_TYPE = $Enums.TELEGRAM_CHAT_TYPE

export const TELEGRAM_CHAT_TYPE: typeof $Enums.TELEGRAM_CHAT_TYPE

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.permission`: Exposes CRUD operations for the **Permission** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Permissions
    * const permissions = await prisma.permission.findMany()
    * ```
    */
  get permission(): Prisma.PermissionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.role`: Exposes CRUD operations for the **Role** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Roles
    * const roles = await prisma.role.findMany()
    * ```
    */
  get role(): Prisma.RoleDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.rolePermission`: Exposes CRUD operations for the **RolePermission** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RolePermissions
    * const rolePermissions = await prisma.rolePermission.findMany()
    * ```
    */
  get rolePermission(): Prisma.RolePermissionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.rolePlayer`: Exposes CRUD operations for the **RolePlayer** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RolePlayers
    * const rolePlayers = await prisma.rolePlayer.findMany()
    * ```
    */
  get rolePlayer(): Prisma.RolePlayerDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.session`: Exposes CRUD operations for the **Session** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sessions
    * const sessions = await prisma.session.findMany()
    * ```
    */
  get session(): Prisma.SessionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.apiKey`: Exposes CRUD operations for the **ApiKey** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ApiKeys
    * const apiKeys = await prisma.apiKey.findMany()
    * ```
    */
  get apiKey(): Prisma.ApiKeyDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.activity`: Exposes CRUD operations for the **Activity** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Activities
    * const activities = await prisma.activity.findMany()
    * ```
    */
  get activity(): Prisma.ActivityDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.i18n`: Exposes CRUD operations for the **I18n** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more I18ns
    * const i18ns = await prisma.i18n.findMany()
    * ```
    */
  get i18n(): Prisma.I18nDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.iPWhitelist`: Exposes CRUD operations for the **IPWhitelist** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more IPWhitelists
    * const iPWhitelists = await prisma.iPWhitelist.findMany()
    * ```
    */
  get iPWhitelist(): Prisma.IPWhitelistDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.setting`: Exposes CRUD operations for the **Setting** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Settings
    * const settings = await prisma.setting.findMany()
    * ```
    */
  get setting(): Prisma.SettingDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.proxy`: Exposes CRUD operations for the **Proxy** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Proxies
    * const proxies = await prisma.proxy.findMany()
    * ```
    */
  get proxy(): Prisma.ProxyDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.telegramTemplate`: Exposes CRUD operations for the **TelegramTemplate** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TelegramTemplates
    * const telegramTemplates = await prisma.telegramTemplate.findMany()
    * ```
    */
  get telegramTemplate(): Prisma.TelegramTemplateDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.telegramChat`: Exposes CRUD operations for the **TelegramChat** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TelegramChats
    * const telegramChats = await prisma.telegramChat.findMany()
    * ```
    */
  get telegramChat(): Prisma.TelegramChatDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.telegramBot`: Exposes CRUD operations for the **TelegramBot** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TelegramBots
    * const telegramBots = await prisma.telegramBot.findMany()
    * ```
    */
  get telegramBot(): Prisma.TelegramBotDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.13.0
   * Query Engine version: 361e86d0ea4987e9f53a565309b3eed797a6bcbd
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Permission: 'Permission',
    Role: 'Role',
    RolePermission: 'RolePermission',
    RolePlayer: 'RolePlayer',
    Session: 'Session',
    ApiKey: 'ApiKey',
    Activity: 'Activity',
    I18n: 'I18n',
    IPWhitelist: 'IPWhitelist',
    Setting: 'Setting',
    Proxy: 'Proxy',
    TelegramTemplate: 'TelegramTemplate',
    TelegramChat: 'TelegramChat',
    TelegramBot: 'TelegramBot'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "permission" | "role" | "rolePermission" | "rolePlayer" | "session" | "apiKey" | "activity" | "i18n" | "iPWhitelist" | "setting" | "proxy" | "telegramTemplate" | "telegramChat" | "telegramBot"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Permission: {
        payload: Prisma.$PermissionPayload<ExtArgs>
        fields: Prisma.PermissionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PermissionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermissionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PermissionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermissionPayload>
          }
          findFirst: {
            args: Prisma.PermissionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermissionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PermissionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermissionPayload>
          }
          findMany: {
            args: Prisma.PermissionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermissionPayload>[]
          }
          create: {
            args: Prisma.PermissionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermissionPayload>
          }
          createMany: {
            args: Prisma.PermissionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PermissionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermissionPayload>[]
          }
          delete: {
            args: Prisma.PermissionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermissionPayload>
          }
          update: {
            args: Prisma.PermissionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermissionPayload>
          }
          deleteMany: {
            args: Prisma.PermissionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PermissionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PermissionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermissionPayload>[]
          }
          upsert: {
            args: Prisma.PermissionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermissionPayload>
          }
          aggregate: {
            args: Prisma.PermissionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePermission>
          }
          groupBy: {
            args: Prisma.PermissionGroupByArgs<ExtArgs>
            result: $Utils.Optional<PermissionGroupByOutputType>[]
          }
          count: {
            args: Prisma.PermissionCountArgs<ExtArgs>
            result: $Utils.Optional<PermissionCountAggregateOutputType> | number
          }
        }
      }
      Role: {
        payload: Prisma.$RolePayload<ExtArgs>
        fields: Prisma.RoleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RoleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RoleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          findFirst: {
            args: Prisma.RoleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RoleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          findMany: {
            args: Prisma.RoleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>[]
          }
          create: {
            args: Prisma.RoleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          createMany: {
            args: Prisma.RoleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RoleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>[]
          }
          delete: {
            args: Prisma.RoleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          update: {
            args: Prisma.RoleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          deleteMany: {
            args: Prisma.RoleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RoleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RoleUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>[]
          }
          upsert: {
            args: Prisma.RoleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          aggregate: {
            args: Prisma.RoleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRole>
          }
          groupBy: {
            args: Prisma.RoleGroupByArgs<ExtArgs>
            result: $Utils.Optional<RoleGroupByOutputType>[]
          }
          count: {
            args: Prisma.RoleCountArgs<ExtArgs>
            result: $Utils.Optional<RoleCountAggregateOutputType> | number
          }
        }
      }
      RolePermission: {
        payload: Prisma.$RolePermissionPayload<ExtArgs>
        fields: Prisma.RolePermissionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RolePermissionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePermissionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RolePermissionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePermissionPayload>
          }
          findFirst: {
            args: Prisma.RolePermissionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePermissionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RolePermissionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePermissionPayload>
          }
          findMany: {
            args: Prisma.RolePermissionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePermissionPayload>[]
          }
          create: {
            args: Prisma.RolePermissionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePermissionPayload>
          }
          createMany: {
            args: Prisma.RolePermissionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RolePermissionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePermissionPayload>[]
          }
          delete: {
            args: Prisma.RolePermissionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePermissionPayload>
          }
          update: {
            args: Prisma.RolePermissionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePermissionPayload>
          }
          deleteMany: {
            args: Prisma.RolePermissionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RolePermissionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RolePermissionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePermissionPayload>[]
          }
          upsert: {
            args: Prisma.RolePermissionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePermissionPayload>
          }
          aggregate: {
            args: Prisma.RolePermissionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRolePermission>
          }
          groupBy: {
            args: Prisma.RolePermissionGroupByArgs<ExtArgs>
            result: $Utils.Optional<RolePermissionGroupByOutputType>[]
          }
          count: {
            args: Prisma.RolePermissionCountArgs<ExtArgs>
            result: $Utils.Optional<RolePermissionCountAggregateOutputType> | number
          }
        }
      }
      RolePlayer: {
        payload: Prisma.$RolePlayerPayload<ExtArgs>
        fields: Prisma.RolePlayerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RolePlayerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePlayerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RolePlayerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePlayerPayload>
          }
          findFirst: {
            args: Prisma.RolePlayerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePlayerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RolePlayerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePlayerPayload>
          }
          findMany: {
            args: Prisma.RolePlayerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePlayerPayload>[]
          }
          create: {
            args: Prisma.RolePlayerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePlayerPayload>
          }
          createMany: {
            args: Prisma.RolePlayerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RolePlayerCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePlayerPayload>[]
          }
          delete: {
            args: Prisma.RolePlayerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePlayerPayload>
          }
          update: {
            args: Prisma.RolePlayerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePlayerPayload>
          }
          deleteMany: {
            args: Prisma.RolePlayerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RolePlayerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RolePlayerUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePlayerPayload>[]
          }
          upsert: {
            args: Prisma.RolePlayerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePlayerPayload>
          }
          aggregate: {
            args: Prisma.RolePlayerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRolePlayer>
          }
          groupBy: {
            args: Prisma.RolePlayerGroupByArgs<ExtArgs>
            result: $Utils.Optional<RolePlayerGroupByOutputType>[]
          }
          count: {
            args: Prisma.RolePlayerCountArgs<ExtArgs>
            result: $Utils.Optional<RolePlayerCountAggregateOutputType> | number
          }
        }
      }
      Session: {
        payload: Prisma.$SessionPayload<ExtArgs>
        fields: Prisma.SessionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SessionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SessionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findFirst: {
            args: Prisma.SessionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SessionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findMany: {
            args: Prisma.SessionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          create: {
            args: Prisma.SessionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          createMany: {
            args: Prisma.SessionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SessionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          delete: {
            args: Prisma.SessionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          update: {
            args: Prisma.SessionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          deleteMany: {
            args: Prisma.SessionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SessionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SessionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          upsert: {
            args: Prisma.SessionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          aggregate: {
            args: Prisma.SessionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSession>
          }
          groupBy: {
            args: Prisma.SessionGroupByArgs<ExtArgs>
            result: $Utils.Optional<SessionGroupByOutputType>[]
          }
          count: {
            args: Prisma.SessionCountArgs<ExtArgs>
            result: $Utils.Optional<SessionCountAggregateOutputType> | number
          }
        }
      }
      ApiKey: {
        payload: Prisma.$ApiKeyPayload<ExtArgs>
        fields: Prisma.ApiKeyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ApiKeyFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiKeyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ApiKeyFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiKeyPayload>
          }
          findFirst: {
            args: Prisma.ApiKeyFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiKeyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ApiKeyFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiKeyPayload>
          }
          findMany: {
            args: Prisma.ApiKeyFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiKeyPayload>[]
          }
          create: {
            args: Prisma.ApiKeyCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiKeyPayload>
          }
          createMany: {
            args: Prisma.ApiKeyCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ApiKeyCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiKeyPayload>[]
          }
          delete: {
            args: Prisma.ApiKeyDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiKeyPayload>
          }
          update: {
            args: Prisma.ApiKeyUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiKeyPayload>
          }
          deleteMany: {
            args: Prisma.ApiKeyDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ApiKeyUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ApiKeyUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiKeyPayload>[]
          }
          upsert: {
            args: Prisma.ApiKeyUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiKeyPayload>
          }
          aggregate: {
            args: Prisma.ApiKeyAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateApiKey>
          }
          groupBy: {
            args: Prisma.ApiKeyGroupByArgs<ExtArgs>
            result: $Utils.Optional<ApiKeyGroupByOutputType>[]
          }
          count: {
            args: Prisma.ApiKeyCountArgs<ExtArgs>
            result: $Utils.Optional<ApiKeyCountAggregateOutputType> | number
          }
        }
      }
      Activity: {
        payload: Prisma.$ActivityPayload<ExtArgs>
        fields: Prisma.ActivityFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ActivityFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ActivityFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityPayload>
          }
          findFirst: {
            args: Prisma.ActivityFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ActivityFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityPayload>
          }
          findMany: {
            args: Prisma.ActivityFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityPayload>[]
          }
          create: {
            args: Prisma.ActivityCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityPayload>
          }
          createMany: {
            args: Prisma.ActivityCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ActivityCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityPayload>[]
          }
          delete: {
            args: Prisma.ActivityDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityPayload>
          }
          update: {
            args: Prisma.ActivityUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityPayload>
          }
          deleteMany: {
            args: Prisma.ActivityDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ActivityUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ActivityUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityPayload>[]
          }
          upsert: {
            args: Prisma.ActivityUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityPayload>
          }
          aggregate: {
            args: Prisma.ActivityAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateActivity>
          }
          groupBy: {
            args: Prisma.ActivityGroupByArgs<ExtArgs>
            result: $Utils.Optional<ActivityGroupByOutputType>[]
          }
          count: {
            args: Prisma.ActivityCountArgs<ExtArgs>
            result: $Utils.Optional<ActivityCountAggregateOutputType> | number
          }
        }
      }
      I18n: {
        payload: Prisma.$I18nPayload<ExtArgs>
        fields: Prisma.I18nFieldRefs
        operations: {
          findUnique: {
            args: Prisma.I18nFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$I18nPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.I18nFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$I18nPayload>
          }
          findFirst: {
            args: Prisma.I18nFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$I18nPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.I18nFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$I18nPayload>
          }
          findMany: {
            args: Prisma.I18nFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$I18nPayload>[]
          }
          create: {
            args: Prisma.I18nCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$I18nPayload>
          }
          createMany: {
            args: Prisma.I18nCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.I18nCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$I18nPayload>[]
          }
          delete: {
            args: Prisma.I18nDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$I18nPayload>
          }
          update: {
            args: Prisma.I18nUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$I18nPayload>
          }
          deleteMany: {
            args: Prisma.I18nDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.I18nUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.I18nUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$I18nPayload>[]
          }
          upsert: {
            args: Prisma.I18nUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$I18nPayload>
          }
          aggregate: {
            args: Prisma.I18nAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateI18n>
          }
          groupBy: {
            args: Prisma.I18nGroupByArgs<ExtArgs>
            result: $Utils.Optional<I18nGroupByOutputType>[]
          }
          count: {
            args: Prisma.I18nCountArgs<ExtArgs>
            result: $Utils.Optional<I18nCountAggregateOutputType> | number
          }
        }
      }
      IPWhitelist: {
        payload: Prisma.$IPWhitelistPayload<ExtArgs>
        fields: Prisma.IPWhitelistFieldRefs
        operations: {
          findUnique: {
            args: Prisma.IPWhitelistFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IPWhitelistPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.IPWhitelistFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IPWhitelistPayload>
          }
          findFirst: {
            args: Prisma.IPWhitelistFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IPWhitelistPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.IPWhitelistFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IPWhitelistPayload>
          }
          findMany: {
            args: Prisma.IPWhitelistFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IPWhitelistPayload>[]
          }
          create: {
            args: Prisma.IPWhitelistCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IPWhitelistPayload>
          }
          createMany: {
            args: Prisma.IPWhitelistCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.IPWhitelistCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IPWhitelistPayload>[]
          }
          delete: {
            args: Prisma.IPWhitelistDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IPWhitelistPayload>
          }
          update: {
            args: Prisma.IPWhitelistUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IPWhitelistPayload>
          }
          deleteMany: {
            args: Prisma.IPWhitelistDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.IPWhitelistUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.IPWhitelistUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IPWhitelistPayload>[]
          }
          upsert: {
            args: Prisma.IPWhitelistUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IPWhitelistPayload>
          }
          aggregate: {
            args: Prisma.IPWhitelistAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateIPWhitelist>
          }
          groupBy: {
            args: Prisma.IPWhitelistGroupByArgs<ExtArgs>
            result: $Utils.Optional<IPWhitelistGroupByOutputType>[]
          }
          count: {
            args: Prisma.IPWhitelistCountArgs<ExtArgs>
            result: $Utils.Optional<IPWhitelistCountAggregateOutputType> | number
          }
        }
      }
      Setting: {
        payload: Prisma.$SettingPayload<ExtArgs>
        fields: Prisma.SettingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SettingFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SettingFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettingPayload>
          }
          findFirst: {
            args: Prisma.SettingFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SettingFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettingPayload>
          }
          findMany: {
            args: Prisma.SettingFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettingPayload>[]
          }
          create: {
            args: Prisma.SettingCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettingPayload>
          }
          createMany: {
            args: Prisma.SettingCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SettingCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettingPayload>[]
          }
          delete: {
            args: Prisma.SettingDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettingPayload>
          }
          update: {
            args: Prisma.SettingUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettingPayload>
          }
          deleteMany: {
            args: Prisma.SettingDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SettingUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SettingUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettingPayload>[]
          }
          upsert: {
            args: Prisma.SettingUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettingPayload>
          }
          aggregate: {
            args: Prisma.SettingAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSetting>
          }
          groupBy: {
            args: Prisma.SettingGroupByArgs<ExtArgs>
            result: $Utils.Optional<SettingGroupByOutputType>[]
          }
          count: {
            args: Prisma.SettingCountArgs<ExtArgs>
            result: $Utils.Optional<SettingCountAggregateOutputType> | number
          }
        }
      }
      Proxy: {
        payload: Prisma.$ProxyPayload<ExtArgs>
        fields: Prisma.ProxyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProxyFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProxyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProxyFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProxyPayload>
          }
          findFirst: {
            args: Prisma.ProxyFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProxyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProxyFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProxyPayload>
          }
          findMany: {
            args: Prisma.ProxyFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProxyPayload>[]
          }
          create: {
            args: Prisma.ProxyCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProxyPayload>
          }
          createMany: {
            args: Prisma.ProxyCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProxyCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProxyPayload>[]
          }
          delete: {
            args: Prisma.ProxyDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProxyPayload>
          }
          update: {
            args: Prisma.ProxyUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProxyPayload>
          }
          deleteMany: {
            args: Prisma.ProxyDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProxyUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProxyUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProxyPayload>[]
          }
          upsert: {
            args: Prisma.ProxyUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProxyPayload>
          }
          aggregate: {
            args: Prisma.ProxyAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProxy>
          }
          groupBy: {
            args: Prisma.ProxyGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProxyGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProxyCountArgs<ExtArgs>
            result: $Utils.Optional<ProxyCountAggregateOutputType> | number
          }
        }
      }
      TelegramTemplate: {
        payload: Prisma.$TelegramTemplatePayload<ExtArgs>
        fields: Prisma.TelegramTemplateFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TelegramTemplateFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TelegramTemplatePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TelegramTemplateFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TelegramTemplatePayload>
          }
          findFirst: {
            args: Prisma.TelegramTemplateFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TelegramTemplatePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TelegramTemplateFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TelegramTemplatePayload>
          }
          findMany: {
            args: Prisma.TelegramTemplateFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TelegramTemplatePayload>[]
          }
          create: {
            args: Prisma.TelegramTemplateCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TelegramTemplatePayload>
          }
          createMany: {
            args: Prisma.TelegramTemplateCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TelegramTemplateCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TelegramTemplatePayload>[]
          }
          delete: {
            args: Prisma.TelegramTemplateDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TelegramTemplatePayload>
          }
          update: {
            args: Prisma.TelegramTemplateUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TelegramTemplatePayload>
          }
          deleteMany: {
            args: Prisma.TelegramTemplateDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TelegramTemplateUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TelegramTemplateUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TelegramTemplatePayload>[]
          }
          upsert: {
            args: Prisma.TelegramTemplateUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TelegramTemplatePayload>
          }
          aggregate: {
            args: Prisma.TelegramTemplateAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTelegramTemplate>
          }
          groupBy: {
            args: Prisma.TelegramTemplateGroupByArgs<ExtArgs>
            result: $Utils.Optional<TelegramTemplateGroupByOutputType>[]
          }
          count: {
            args: Prisma.TelegramTemplateCountArgs<ExtArgs>
            result: $Utils.Optional<TelegramTemplateCountAggregateOutputType> | number
          }
        }
      }
      TelegramChat: {
        payload: Prisma.$TelegramChatPayload<ExtArgs>
        fields: Prisma.TelegramChatFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TelegramChatFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TelegramChatPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TelegramChatFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TelegramChatPayload>
          }
          findFirst: {
            args: Prisma.TelegramChatFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TelegramChatPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TelegramChatFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TelegramChatPayload>
          }
          findMany: {
            args: Prisma.TelegramChatFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TelegramChatPayload>[]
          }
          create: {
            args: Prisma.TelegramChatCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TelegramChatPayload>
          }
          createMany: {
            args: Prisma.TelegramChatCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TelegramChatCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TelegramChatPayload>[]
          }
          delete: {
            args: Prisma.TelegramChatDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TelegramChatPayload>
          }
          update: {
            args: Prisma.TelegramChatUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TelegramChatPayload>
          }
          deleteMany: {
            args: Prisma.TelegramChatDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TelegramChatUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TelegramChatUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TelegramChatPayload>[]
          }
          upsert: {
            args: Prisma.TelegramChatUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TelegramChatPayload>
          }
          aggregate: {
            args: Prisma.TelegramChatAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTelegramChat>
          }
          groupBy: {
            args: Prisma.TelegramChatGroupByArgs<ExtArgs>
            result: $Utils.Optional<TelegramChatGroupByOutputType>[]
          }
          count: {
            args: Prisma.TelegramChatCountArgs<ExtArgs>
            result: $Utils.Optional<TelegramChatCountAggregateOutputType> | number
          }
        }
      }
      TelegramBot: {
        payload: Prisma.$TelegramBotPayload<ExtArgs>
        fields: Prisma.TelegramBotFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TelegramBotFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TelegramBotPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TelegramBotFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TelegramBotPayload>
          }
          findFirst: {
            args: Prisma.TelegramBotFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TelegramBotPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TelegramBotFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TelegramBotPayload>
          }
          findMany: {
            args: Prisma.TelegramBotFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TelegramBotPayload>[]
          }
          create: {
            args: Prisma.TelegramBotCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TelegramBotPayload>
          }
          createMany: {
            args: Prisma.TelegramBotCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TelegramBotCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TelegramBotPayload>[]
          }
          delete: {
            args: Prisma.TelegramBotDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TelegramBotPayload>
          }
          update: {
            args: Prisma.TelegramBotUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TelegramBotPayload>
          }
          deleteMany: {
            args: Prisma.TelegramBotDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TelegramBotUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TelegramBotUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TelegramBotPayload>[]
          }
          upsert: {
            args: Prisma.TelegramBotUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TelegramBotPayload>
          }
          aggregate: {
            args: Prisma.TelegramBotAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTelegramBot>
          }
          groupBy: {
            args: Prisma.TelegramBotGroupByArgs<ExtArgs>
            result: $Utils.Optional<TelegramBotGroupByOutputType>[]
          }
          count: {
            args: Prisma.TelegramBotCountArgs<ExtArgs>
            result: $Utils.Optional<TelegramBotCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    permission?: PermissionOmit
    role?: RoleOmit
    rolePermission?: RolePermissionOmit
    rolePlayer?: RolePlayerOmit
    session?: SessionOmit
    apiKey?: ApiKeyOmit
    activity?: ActivityOmit
    i18n?: I18nOmit
    iPWhitelist?: IPWhitelistOmit
    setting?: SettingOmit
    proxy?: ProxyOmit
    telegramTemplate?: TelegramTemplateOmit
    telegramChat?: TelegramChatOmit
    telegramBot?: TelegramBotOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    activities: number
    apiKeys: number
    roles: number
    sessions: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    activities?: boolean | UserCountOutputTypeCountActivitiesArgs
    apiKeys?: boolean | UserCountOutputTypeCountApiKeysArgs
    roles?: boolean | UserCountOutputTypeCountRolesArgs
    sessions?: boolean | UserCountOutputTypeCountSessionsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountActivitiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ActivityWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountApiKeysArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ApiKeyWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountRolesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RolePlayerWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
  }


  /**
   * Count Type PermissionCountOutputType
   */

  export type PermissionCountOutputType = {
    roles: number
  }

  export type PermissionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    roles?: boolean | PermissionCountOutputTypeCountRolesArgs
  }

  // Custom InputTypes
  /**
   * PermissionCountOutputType without action
   */
  export type PermissionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PermissionCountOutputType
     */
    select?: PermissionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PermissionCountOutputType without action
   */
  export type PermissionCountOutputTypeCountRolesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RolePermissionWhereInput
  }


  /**
   * Count Type RoleCountOutputType
   */

  export type RoleCountOutputType = {
    permissions: number
    players: number
  }

  export type RoleCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    permissions?: boolean | RoleCountOutputTypeCountPermissionsArgs
    players?: boolean | RoleCountOutputTypeCountPlayersArgs
  }

  // Custom InputTypes
  /**
   * RoleCountOutputType without action
   */
  export type RoleCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoleCountOutputType
     */
    select?: RoleCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RoleCountOutputType without action
   */
  export type RoleCountOutputTypeCountPermissionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RolePermissionWhereInput
  }

  /**
   * RoleCountOutputType without action
   */
  export type RoleCountOutputTypeCountPlayersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RolePlayerWhereInput
  }


  /**
   * Count Type SessionCountOutputType
   */

  export type SessionCountOutputType = {
    activities: number
  }

  export type SessionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    activities?: boolean | SessionCountOutputTypeCountActivitiesArgs
  }

  // Custom InputTypes
  /**
   * SessionCountOutputType without action
   */
  export type SessionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SessionCountOutputType
     */
    select?: SessionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SessionCountOutputType without action
   */
  export type SessionCountOutputTypeCountActivitiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ActivityWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    passwordAttempt: number | null
  }

  export type UserSumAggregateOutputType = {
    passwordAttempt: number | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    username: string | null
    password: string | null
    emailUser: string | null
    inviteBy: string | null
    passwordExpired: Date | null
    passwordCreated: Date | null
    passwordAttempt: number | null
    is_owner: boolean | null
    mfaTelegramEnabled: boolean | null
    mfaTotpEnabled: boolean | null
    telegramUsername: string | null
    totpSecret: string | null
    enabled: boolean | null
    modified: Date | null
    created: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    username: string | null
    password: string | null
    emailUser: string | null
    inviteBy: string | null
    passwordExpired: Date | null
    passwordCreated: Date | null
    passwordAttempt: number | null
    is_owner: boolean | null
    mfaTelegramEnabled: boolean | null
    mfaTotpEnabled: boolean | null
    telegramUsername: string | null
    totpSecret: string | null
    enabled: boolean | null
    modified: Date | null
    created: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    username: number
    password: number
    emailUser: number
    inviteBy: number
    passwordExpired: number
    passwordCreated: number
    passwordAttempt: number
    is_owner: number
    mfaTelegramEnabled: number
    mfaTotpEnabled: number
    telegramUsername: number
    totpSecret: number
    enabled: number
    modified: number
    created: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    passwordAttempt?: true
  }

  export type UserSumAggregateInputType = {
    passwordAttempt?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    username?: true
    password?: true
    emailUser?: true
    inviteBy?: true
    passwordExpired?: true
    passwordCreated?: true
    passwordAttempt?: true
    is_owner?: true
    mfaTelegramEnabled?: true
    mfaTotpEnabled?: true
    telegramUsername?: true
    totpSecret?: true
    enabled?: true
    modified?: true
    created?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    username?: true
    password?: true
    emailUser?: true
    inviteBy?: true
    passwordExpired?: true
    passwordCreated?: true
    passwordAttempt?: true
    is_owner?: true
    mfaTelegramEnabled?: true
    mfaTotpEnabled?: true
    telegramUsername?: true
    totpSecret?: true
    enabled?: true
    modified?: true
    created?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    username?: true
    password?: true
    emailUser?: true
    inviteBy?: true
    passwordExpired?: true
    passwordCreated?: true
    passwordAttempt?: true
    is_owner?: true
    mfaTelegramEnabled?: true
    mfaTotpEnabled?: true
    telegramUsername?: true
    totpSecret?: true
    enabled?: true
    modified?: true
    created?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    username: string
    password: string
    emailUser: string
    inviteBy: string
    passwordExpired: Date
    passwordCreated: Date
    passwordAttempt: number
    is_owner: boolean
    mfaTelegramEnabled: boolean
    mfaTotpEnabled: boolean
    telegramUsername: string | null
    totpSecret: string | null
    enabled: boolean
    modified: Date
    created: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    password?: boolean
    emailUser?: boolean
    inviteBy?: boolean
    passwordExpired?: boolean
    passwordCreated?: boolean
    passwordAttempt?: boolean
    is_owner?: boolean
    mfaTelegramEnabled?: boolean
    mfaTotpEnabled?: boolean
    telegramUsername?: boolean
    totpSecret?: boolean
    enabled?: boolean
    modified?: boolean
    created?: boolean
    activities?: boolean | User$activitiesArgs<ExtArgs>
    apiKeys?: boolean | User$apiKeysArgs<ExtArgs>
    roles?: boolean | User$rolesArgs<ExtArgs>
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    password?: boolean
    emailUser?: boolean
    inviteBy?: boolean
    passwordExpired?: boolean
    passwordCreated?: boolean
    passwordAttempt?: boolean
    is_owner?: boolean
    mfaTelegramEnabled?: boolean
    mfaTotpEnabled?: boolean
    telegramUsername?: boolean
    totpSecret?: boolean
    enabled?: boolean
    modified?: boolean
    created?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    password?: boolean
    emailUser?: boolean
    inviteBy?: boolean
    passwordExpired?: boolean
    passwordCreated?: boolean
    passwordAttempt?: boolean
    is_owner?: boolean
    mfaTelegramEnabled?: boolean
    mfaTotpEnabled?: boolean
    telegramUsername?: boolean
    totpSecret?: boolean
    enabled?: boolean
    modified?: boolean
    created?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    username?: boolean
    password?: boolean
    emailUser?: boolean
    inviteBy?: boolean
    passwordExpired?: boolean
    passwordCreated?: boolean
    passwordAttempt?: boolean
    is_owner?: boolean
    mfaTelegramEnabled?: boolean
    mfaTotpEnabled?: boolean
    telegramUsername?: boolean
    totpSecret?: boolean
    enabled?: boolean
    modified?: boolean
    created?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "username" | "password" | "emailUser" | "inviteBy" | "passwordExpired" | "passwordCreated" | "passwordAttempt" | "is_owner" | "mfaTelegramEnabled" | "mfaTotpEnabled" | "telegramUsername" | "totpSecret" | "enabled" | "modified" | "created", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    activities?: boolean | User$activitiesArgs<ExtArgs>
    apiKeys?: boolean | User$apiKeysArgs<ExtArgs>
    roles?: boolean | User$rolesArgs<ExtArgs>
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      activities: Prisma.$ActivityPayload<ExtArgs>[]
      apiKeys: Prisma.$ApiKeyPayload<ExtArgs>[]
      roles: Prisma.$RolePlayerPayload<ExtArgs>[]
      sessions: Prisma.$SessionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      username: string
      password: string
      emailUser: string
      inviteBy: string
      passwordExpired: Date
      passwordCreated: Date
      passwordAttempt: number
      is_owner: boolean
      mfaTelegramEnabled: boolean
      mfaTotpEnabled: boolean
      telegramUsername: string | null
      totpSecret: string | null
      enabled: boolean
      modified: Date
      created: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    activities<T extends User$activitiesArgs<ExtArgs> = {}>(args?: Subset<T, User$activitiesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActivityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    apiKeys<T extends User$apiKeysArgs<ExtArgs> = {}>(args?: Subset<T, User$apiKeysArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApiKeyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    roles<T extends User$rolesArgs<ExtArgs> = {}>(args?: Subset<T, User$rolesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolePlayerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    sessions<T extends User$sessionsArgs<ExtArgs> = {}>(args?: Subset<T, User$sessionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly username: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly emailUser: FieldRef<"User", 'String'>
    readonly inviteBy: FieldRef<"User", 'String'>
    readonly passwordExpired: FieldRef<"User", 'DateTime'>
    readonly passwordCreated: FieldRef<"User", 'DateTime'>
    readonly passwordAttempt: FieldRef<"User", 'Int'>
    readonly is_owner: FieldRef<"User", 'Boolean'>
    readonly mfaTelegramEnabled: FieldRef<"User", 'Boolean'>
    readonly mfaTotpEnabled: FieldRef<"User", 'Boolean'>
    readonly telegramUsername: FieldRef<"User", 'String'>
    readonly totpSecret: FieldRef<"User", 'String'>
    readonly enabled: FieldRef<"User", 'Boolean'>
    readonly modified: FieldRef<"User", 'DateTime'>
    readonly created: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.activities
   */
  export type User$activitiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activity
     */
    select?: ActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Activity
     */
    omit?: ActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityInclude<ExtArgs> | null
    where?: ActivityWhereInput
    orderBy?: ActivityOrderByWithRelationInput | ActivityOrderByWithRelationInput[]
    cursor?: ActivityWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ActivityScalarFieldEnum | ActivityScalarFieldEnum[]
  }

  /**
   * User.apiKeys
   */
  export type User$apiKeysArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiKey
     */
    select?: ApiKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiKey
     */
    omit?: ApiKeyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiKeyInclude<ExtArgs> | null
    where?: ApiKeyWhereInput
    orderBy?: ApiKeyOrderByWithRelationInput | ApiKeyOrderByWithRelationInput[]
    cursor?: ApiKeyWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ApiKeyScalarFieldEnum | ApiKeyScalarFieldEnum[]
  }

  /**
   * User.roles
   */
  export type User$rolesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RolePlayer
     */
    select?: RolePlayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RolePlayer
     */
    omit?: RolePlayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolePlayerInclude<ExtArgs> | null
    where?: RolePlayerWhereInput
    orderBy?: RolePlayerOrderByWithRelationInput | RolePlayerOrderByWithRelationInput[]
    cursor?: RolePlayerWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RolePlayerScalarFieldEnum | RolePlayerScalarFieldEnum[]
  }

  /**
   * User.sessions
   */
  export type User$sessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    cursor?: SessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Permission
   */

  export type AggregatePermission = {
    _count: PermissionCountAggregateOutputType | null
    _min: PermissionMinAggregateOutputType | null
    _max: PermissionMaxAggregateOutputType | null
  }

  export type PermissionMinAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
  }

  export type PermissionMaxAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
  }

  export type PermissionCountAggregateOutputType = {
    id: number
    title: number
    description: number
    _all: number
  }


  export type PermissionMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
  }

  export type PermissionMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
  }

  export type PermissionCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    _all?: true
  }

  export type PermissionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Permission to aggregate.
     */
    where?: PermissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Permissions to fetch.
     */
    orderBy?: PermissionOrderByWithRelationInput | PermissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PermissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Permissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Permissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Permissions
    **/
    _count?: true | PermissionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PermissionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PermissionMaxAggregateInputType
  }

  export type GetPermissionAggregateType<T extends PermissionAggregateArgs> = {
        [P in keyof T & keyof AggregatePermission]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePermission[P]>
      : GetScalarType<T[P], AggregatePermission[P]>
  }




  export type PermissionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PermissionWhereInput
    orderBy?: PermissionOrderByWithAggregationInput | PermissionOrderByWithAggregationInput[]
    by: PermissionScalarFieldEnum[] | PermissionScalarFieldEnum
    having?: PermissionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PermissionCountAggregateInputType | true
    _min?: PermissionMinAggregateInputType
    _max?: PermissionMaxAggregateInputType
  }

  export type PermissionGroupByOutputType = {
    id: string
    title: string
    description: string | null
    _count: PermissionCountAggregateOutputType | null
    _min: PermissionMinAggregateOutputType | null
    _max: PermissionMaxAggregateOutputType | null
  }

  type GetPermissionGroupByPayload<T extends PermissionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PermissionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PermissionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PermissionGroupByOutputType[P]>
            : GetScalarType<T[P], PermissionGroupByOutputType[P]>
        }
      >
    >


  export type PermissionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    roles?: boolean | Permission$rolesArgs<ExtArgs>
    _count?: boolean | PermissionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["permission"]>

  export type PermissionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
  }, ExtArgs["result"]["permission"]>

  export type PermissionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
  }, ExtArgs["result"]["permission"]>

  export type PermissionSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
  }

  export type PermissionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description", ExtArgs["result"]["permission"]>
  export type PermissionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    roles?: boolean | Permission$rolesArgs<ExtArgs>
    _count?: boolean | PermissionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PermissionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type PermissionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $PermissionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Permission"
    objects: {
      roles: Prisma.$RolePermissionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      description: string | null
    }, ExtArgs["result"]["permission"]>
    composites: {}
  }

  type PermissionGetPayload<S extends boolean | null | undefined | PermissionDefaultArgs> = $Result.GetResult<Prisma.$PermissionPayload, S>

  type PermissionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PermissionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PermissionCountAggregateInputType | true
    }

  export interface PermissionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Permission'], meta: { name: 'Permission' } }
    /**
     * Find zero or one Permission that matches the filter.
     * @param {PermissionFindUniqueArgs} args - Arguments to find a Permission
     * @example
     * // Get one Permission
     * const permission = await prisma.permission.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PermissionFindUniqueArgs>(args: SelectSubset<T, PermissionFindUniqueArgs<ExtArgs>>): Prisma__PermissionClient<$Result.GetResult<Prisma.$PermissionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Permission that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PermissionFindUniqueOrThrowArgs} args - Arguments to find a Permission
     * @example
     * // Get one Permission
     * const permission = await prisma.permission.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PermissionFindUniqueOrThrowArgs>(args: SelectSubset<T, PermissionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PermissionClient<$Result.GetResult<Prisma.$PermissionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Permission that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PermissionFindFirstArgs} args - Arguments to find a Permission
     * @example
     * // Get one Permission
     * const permission = await prisma.permission.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PermissionFindFirstArgs>(args?: SelectSubset<T, PermissionFindFirstArgs<ExtArgs>>): Prisma__PermissionClient<$Result.GetResult<Prisma.$PermissionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Permission that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PermissionFindFirstOrThrowArgs} args - Arguments to find a Permission
     * @example
     * // Get one Permission
     * const permission = await prisma.permission.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PermissionFindFirstOrThrowArgs>(args?: SelectSubset<T, PermissionFindFirstOrThrowArgs<ExtArgs>>): Prisma__PermissionClient<$Result.GetResult<Prisma.$PermissionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Permissions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PermissionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Permissions
     * const permissions = await prisma.permission.findMany()
     * 
     * // Get first 10 Permissions
     * const permissions = await prisma.permission.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const permissionWithIdOnly = await prisma.permission.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PermissionFindManyArgs>(args?: SelectSubset<T, PermissionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PermissionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Permission.
     * @param {PermissionCreateArgs} args - Arguments to create a Permission.
     * @example
     * // Create one Permission
     * const Permission = await prisma.permission.create({
     *   data: {
     *     // ... data to create a Permission
     *   }
     * })
     * 
     */
    create<T extends PermissionCreateArgs>(args: SelectSubset<T, PermissionCreateArgs<ExtArgs>>): Prisma__PermissionClient<$Result.GetResult<Prisma.$PermissionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Permissions.
     * @param {PermissionCreateManyArgs} args - Arguments to create many Permissions.
     * @example
     * // Create many Permissions
     * const permission = await prisma.permission.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PermissionCreateManyArgs>(args?: SelectSubset<T, PermissionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Permissions and returns the data saved in the database.
     * @param {PermissionCreateManyAndReturnArgs} args - Arguments to create many Permissions.
     * @example
     * // Create many Permissions
     * const permission = await prisma.permission.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Permissions and only return the `id`
     * const permissionWithIdOnly = await prisma.permission.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PermissionCreateManyAndReturnArgs>(args?: SelectSubset<T, PermissionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PermissionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Permission.
     * @param {PermissionDeleteArgs} args - Arguments to delete one Permission.
     * @example
     * // Delete one Permission
     * const Permission = await prisma.permission.delete({
     *   where: {
     *     // ... filter to delete one Permission
     *   }
     * })
     * 
     */
    delete<T extends PermissionDeleteArgs>(args: SelectSubset<T, PermissionDeleteArgs<ExtArgs>>): Prisma__PermissionClient<$Result.GetResult<Prisma.$PermissionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Permission.
     * @param {PermissionUpdateArgs} args - Arguments to update one Permission.
     * @example
     * // Update one Permission
     * const permission = await prisma.permission.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PermissionUpdateArgs>(args: SelectSubset<T, PermissionUpdateArgs<ExtArgs>>): Prisma__PermissionClient<$Result.GetResult<Prisma.$PermissionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Permissions.
     * @param {PermissionDeleteManyArgs} args - Arguments to filter Permissions to delete.
     * @example
     * // Delete a few Permissions
     * const { count } = await prisma.permission.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PermissionDeleteManyArgs>(args?: SelectSubset<T, PermissionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Permissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PermissionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Permissions
     * const permission = await prisma.permission.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PermissionUpdateManyArgs>(args: SelectSubset<T, PermissionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Permissions and returns the data updated in the database.
     * @param {PermissionUpdateManyAndReturnArgs} args - Arguments to update many Permissions.
     * @example
     * // Update many Permissions
     * const permission = await prisma.permission.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Permissions and only return the `id`
     * const permissionWithIdOnly = await prisma.permission.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PermissionUpdateManyAndReturnArgs>(args: SelectSubset<T, PermissionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PermissionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Permission.
     * @param {PermissionUpsertArgs} args - Arguments to update or create a Permission.
     * @example
     * // Update or create a Permission
     * const permission = await prisma.permission.upsert({
     *   create: {
     *     // ... data to create a Permission
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Permission we want to update
     *   }
     * })
     */
    upsert<T extends PermissionUpsertArgs>(args: SelectSubset<T, PermissionUpsertArgs<ExtArgs>>): Prisma__PermissionClient<$Result.GetResult<Prisma.$PermissionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Permissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PermissionCountArgs} args - Arguments to filter Permissions to count.
     * @example
     * // Count the number of Permissions
     * const count = await prisma.permission.count({
     *   where: {
     *     // ... the filter for the Permissions we want to count
     *   }
     * })
    **/
    count<T extends PermissionCountArgs>(
      args?: Subset<T, PermissionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PermissionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Permission.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PermissionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PermissionAggregateArgs>(args: Subset<T, PermissionAggregateArgs>): Prisma.PrismaPromise<GetPermissionAggregateType<T>>

    /**
     * Group by Permission.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PermissionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PermissionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PermissionGroupByArgs['orderBy'] }
        : { orderBy?: PermissionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PermissionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPermissionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Permission model
   */
  readonly fields: PermissionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Permission.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PermissionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    roles<T extends Permission$rolesArgs<ExtArgs> = {}>(args?: Subset<T, Permission$rolesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolePermissionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Permission model
   */
  interface PermissionFieldRefs {
    readonly id: FieldRef<"Permission", 'String'>
    readonly title: FieldRef<"Permission", 'String'>
    readonly description: FieldRef<"Permission", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Permission findUnique
   */
  export type PermissionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permission
     */
    select?: PermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Permission
     */
    omit?: PermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissionInclude<ExtArgs> | null
    /**
     * Filter, which Permission to fetch.
     */
    where: PermissionWhereUniqueInput
  }

  /**
   * Permission findUniqueOrThrow
   */
  export type PermissionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permission
     */
    select?: PermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Permission
     */
    omit?: PermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissionInclude<ExtArgs> | null
    /**
     * Filter, which Permission to fetch.
     */
    where: PermissionWhereUniqueInput
  }

  /**
   * Permission findFirst
   */
  export type PermissionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permission
     */
    select?: PermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Permission
     */
    omit?: PermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissionInclude<ExtArgs> | null
    /**
     * Filter, which Permission to fetch.
     */
    where?: PermissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Permissions to fetch.
     */
    orderBy?: PermissionOrderByWithRelationInput | PermissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Permissions.
     */
    cursor?: PermissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Permissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Permissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Permissions.
     */
    distinct?: PermissionScalarFieldEnum | PermissionScalarFieldEnum[]
  }

  /**
   * Permission findFirstOrThrow
   */
  export type PermissionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permission
     */
    select?: PermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Permission
     */
    omit?: PermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissionInclude<ExtArgs> | null
    /**
     * Filter, which Permission to fetch.
     */
    where?: PermissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Permissions to fetch.
     */
    orderBy?: PermissionOrderByWithRelationInput | PermissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Permissions.
     */
    cursor?: PermissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Permissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Permissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Permissions.
     */
    distinct?: PermissionScalarFieldEnum | PermissionScalarFieldEnum[]
  }

  /**
   * Permission findMany
   */
  export type PermissionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permission
     */
    select?: PermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Permission
     */
    omit?: PermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissionInclude<ExtArgs> | null
    /**
     * Filter, which Permissions to fetch.
     */
    where?: PermissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Permissions to fetch.
     */
    orderBy?: PermissionOrderByWithRelationInput | PermissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Permissions.
     */
    cursor?: PermissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Permissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Permissions.
     */
    skip?: number
    distinct?: PermissionScalarFieldEnum | PermissionScalarFieldEnum[]
  }

  /**
   * Permission create
   */
  export type PermissionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permission
     */
    select?: PermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Permission
     */
    omit?: PermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissionInclude<ExtArgs> | null
    /**
     * The data needed to create a Permission.
     */
    data: XOR<PermissionCreateInput, PermissionUncheckedCreateInput>
  }

  /**
   * Permission createMany
   */
  export type PermissionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Permissions.
     */
    data: PermissionCreateManyInput | PermissionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Permission createManyAndReturn
   */
  export type PermissionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permission
     */
    select?: PermissionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Permission
     */
    omit?: PermissionOmit<ExtArgs> | null
    /**
     * The data used to create many Permissions.
     */
    data: PermissionCreateManyInput | PermissionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Permission update
   */
  export type PermissionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permission
     */
    select?: PermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Permission
     */
    omit?: PermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissionInclude<ExtArgs> | null
    /**
     * The data needed to update a Permission.
     */
    data: XOR<PermissionUpdateInput, PermissionUncheckedUpdateInput>
    /**
     * Choose, which Permission to update.
     */
    where: PermissionWhereUniqueInput
  }

  /**
   * Permission updateMany
   */
  export type PermissionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Permissions.
     */
    data: XOR<PermissionUpdateManyMutationInput, PermissionUncheckedUpdateManyInput>
    /**
     * Filter which Permissions to update
     */
    where?: PermissionWhereInput
    /**
     * Limit how many Permissions to update.
     */
    limit?: number
  }

  /**
   * Permission updateManyAndReturn
   */
  export type PermissionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permission
     */
    select?: PermissionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Permission
     */
    omit?: PermissionOmit<ExtArgs> | null
    /**
     * The data used to update Permissions.
     */
    data: XOR<PermissionUpdateManyMutationInput, PermissionUncheckedUpdateManyInput>
    /**
     * Filter which Permissions to update
     */
    where?: PermissionWhereInput
    /**
     * Limit how many Permissions to update.
     */
    limit?: number
  }

  /**
   * Permission upsert
   */
  export type PermissionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permission
     */
    select?: PermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Permission
     */
    omit?: PermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissionInclude<ExtArgs> | null
    /**
     * The filter to search for the Permission to update in case it exists.
     */
    where: PermissionWhereUniqueInput
    /**
     * In case the Permission found by the `where` argument doesn't exist, create a new Permission with this data.
     */
    create: XOR<PermissionCreateInput, PermissionUncheckedCreateInput>
    /**
     * In case the Permission was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PermissionUpdateInput, PermissionUncheckedUpdateInput>
  }

  /**
   * Permission delete
   */
  export type PermissionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permission
     */
    select?: PermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Permission
     */
    omit?: PermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissionInclude<ExtArgs> | null
    /**
     * Filter which Permission to delete.
     */
    where: PermissionWhereUniqueInput
  }

  /**
   * Permission deleteMany
   */
  export type PermissionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Permissions to delete
     */
    where?: PermissionWhereInput
    /**
     * Limit how many Permissions to delete.
     */
    limit?: number
  }

  /**
   * Permission.roles
   */
  export type Permission$rolesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RolePermission
     */
    select?: RolePermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RolePermission
     */
    omit?: RolePermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolePermissionInclude<ExtArgs> | null
    where?: RolePermissionWhereInput
    orderBy?: RolePermissionOrderByWithRelationInput | RolePermissionOrderByWithRelationInput[]
    cursor?: RolePermissionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RolePermissionScalarFieldEnum | RolePermissionScalarFieldEnum[]
  }

  /**
   * Permission without action
   */
  export type PermissionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permission
     */
    select?: PermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Permission
     */
    omit?: PermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissionInclude<ExtArgs> | null
  }


  /**
   * Model Role
   */

  export type AggregateRole = {
    _count: RoleCountAggregateOutputType | null
    _min: RoleMinAggregateOutputType | null
    _max: RoleMaxAggregateOutputType | null
  }

  export type RoleMinAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    enabled: boolean | null
    modified: Date | null
    created: Date | null
  }

  export type RoleMaxAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    enabled: boolean | null
    modified: Date | null
    created: Date | null
  }

  export type RoleCountAggregateOutputType = {
    id: number
    title: number
    description: number
    enabled: number
    modified: number
    created: number
    _all: number
  }


  export type RoleMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    enabled?: true
    modified?: true
    created?: true
  }

  export type RoleMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    enabled?: true
    modified?: true
    created?: true
  }

  export type RoleCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    enabled?: true
    modified?: true
    created?: true
    _all?: true
  }

  export type RoleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Role to aggregate.
     */
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Roles
    **/
    _count?: true | RoleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RoleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RoleMaxAggregateInputType
  }

  export type GetRoleAggregateType<T extends RoleAggregateArgs> = {
        [P in keyof T & keyof AggregateRole]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRole[P]>
      : GetScalarType<T[P], AggregateRole[P]>
  }




  export type RoleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoleWhereInput
    orderBy?: RoleOrderByWithAggregationInput | RoleOrderByWithAggregationInput[]
    by: RoleScalarFieldEnum[] | RoleScalarFieldEnum
    having?: RoleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RoleCountAggregateInputType | true
    _min?: RoleMinAggregateInputType
    _max?: RoleMaxAggregateInputType
  }

  export type RoleGroupByOutputType = {
    id: string
    title: string
    description: string | null
    enabled: boolean
    modified: Date
    created: Date
    _count: RoleCountAggregateOutputType | null
    _min: RoleMinAggregateOutputType | null
    _max: RoleMaxAggregateOutputType | null
  }

  type GetRoleGroupByPayload<T extends RoleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RoleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RoleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RoleGroupByOutputType[P]>
            : GetScalarType<T[P], RoleGroupByOutputType[P]>
        }
      >
    >


  export type RoleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    enabled?: boolean
    modified?: boolean
    created?: boolean
    permissions?: boolean | Role$permissionsArgs<ExtArgs>
    players?: boolean | Role$playersArgs<ExtArgs>
    _count?: boolean | RoleCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["role"]>

  export type RoleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    enabled?: boolean
    modified?: boolean
    created?: boolean
  }, ExtArgs["result"]["role"]>

  export type RoleSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    enabled?: boolean
    modified?: boolean
    created?: boolean
  }, ExtArgs["result"]["role"]>

  export type RoleSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    enabled?: boolean
    modified?: boolean
    created?: boolean
  }

  export type RoleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description" | "enabled" | "modified" | "created", ExtArgs["result"]["role"]>
  export type RoleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    permissions?: boolean | Role$permissionsArgs<ExtArgs>
    players?: boolean | Role$playersArgs<ExtArgs>
    _count?: boolean | RoleCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type RoleIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type RoleIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $RolePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Role"
    objects: {
      permissions: Prisma.$RolePermissionPayload<ExtArgs>[]
      players: Prisma.$RolePlayerPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      description: string | null
      enabled: boolean
      modified: Date
      created: Date
    }, ExtArgs["result"]["role"]>
    composites: {}
  }

  type RoleGetPayload<S extends boolean | null | undefined | RoleDefaultArgs> = $Result.GetResult<Prisma.$RolePayload, S>

  type RoleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RoleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RoleCountAggregateInputType | true
    }

  export interface RoleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Role'], meta: { name: 'Role' } }
    /**
     * Find zero or one Role that matches the filter.
     * @param {RoleFindUniqueArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RoleFindUniqueArgs>(args: SelectSubset<T, RoleFindUniqueArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Role that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RoleFindUniqueOrThrowArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RoleFindUniqueOrThrowArgs>(args: SelectSubset<T, RoleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Role that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleFindFirstArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RoleFindFirstArgs>(args?: SelectSubset<T, RoleFindFirstArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Role that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleFindFirstOrThrowArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RoleFindFirstOrThrowArgs>(args?: SelectSubset<T, RoleFindFirstOrThrowArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Roles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Roles
     * const roles = await prisma.role.findMany()
     * 
     * // Get first 10 Roles
     * const roles = await prisma.role.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const roleWithIdOnly = await prisma.role.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RoleFindManyArgs>(args?: SelectSubset<T, RoleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Role.
     * @param {RoleCreateArgs} args - Arguments to create a Role.
     * @example
     * // Create one Role
     * const Role = await prisma.role.create({
     *   data: {
     *     // ... data to create a Role
     *   }
     * })
     * 
     */
    create<T extends RoleCreateArgs>(args: SelectSubset<T, RoleCreateArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Roles.
     * @param {RoleCreateManyArgs} args - Arguments to create many Roles.
     * @example
     * // Create many Roles
     * const role = await prisma.role.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RoleCreateManyArgs>(args?: SelectSubset<T, RoleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Roles and returns the data saved in the database.
     * @param {RoleCreateManyAndReturnArgs} args - Arguments to create many Roles.
     * @example
     * // Create many Roles
     * const role = await prisma.role.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Roles and only return the `id`
     * const roleWithIdOnly = await prisma.role.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RoleCreateManyAndReturnArgs>(args?: SelectSubset<T, RoleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Role.
     * @param {RoleDeleteArgs} args - Arguments to delete one Role.
     * @example
     * // Delete one Role
     * const Role = await prisma.role.delete({
     *   where: {
     *     // ... filter to delete one Role
     *   }
     * })
     * 
     */
    delete<T extends RoleDeleteArgs>(args: SelectSubset<T, RoleDeleteArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Role.
     * @param {RoleUpdateArgs} args - Arguments to update one Role.
     * @example
     * // Update one Role
     * const role = await prisma.role.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RoleUpdateArgs>(args: SelectSubset<T, RoleUpdateArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Roles.
     * @param {RoleDeleteManyArgs} args - Arguments to filter Roles to delete.
     * @example
     * // Delete a few Roles
     * const { count } = await prisma.role.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RoleDeleteManyArgs>(args?: SelectSubset<T, RoleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Roles
     * const role = await prisma.role.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RoleUpdateManyArgs>(args: SelectSubset<T, RoleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Roles and returns the data updated in the database.
     * @param {RoleUpdateManyAndReturnArgs} args - Arguments to update many Roles.
     * @example
     * // Update many Roles
     * const role = await prisma.role.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Roles and only return the `id`
     * const roleWithIdOnly = await prisma.role.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RoleUpdateManyAndReturnArgs>(args: SelectSubset<T, RoleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Role.
     * @param {RoleUpsertArgs} args - Arguments to update or create a Role.
     * @example
     * // Update or create a Role
     * const role = await prisma.role.upsert({
     *   create: {
     *     // ... data to create a Role
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Role we want to update
     *   }
     * })
     */
    upsert<T extends RoleUpsertArgs>(args: SelectSubset<T, RoleUpsertArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleCountArgs} args - Arguments to filter Roles to count.
     * @example
     * // Count the number of Roles
     * const count = await prisma.role.count({
     *   where: {
     *     // ... the filter for the Roles we want to count
     *   }
     * })
    **/
    count<T extends RoleCountArgs>(
      args?: Subset<T, RoleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RoleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Role.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RoleAggregateArgs>(args: Subset<T, RoleAggregateArgs>): Prisma.PrismaPromise<GetRoleAggregateType<T>>

    /**
     * Group by Role.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RoleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RoleGroupByArgs['orderBy'] }
        : { orderBy?: RoleGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RoleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRoleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Role model
   */
  readonly fields: RoleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Role.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RoleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    permissions<T extends Role$permissionsArgs<ExtArgs> = {}>(args?: Subset<T, Role$permissionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolePermissionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    players<T extends Role$playersArgs<ExtArgs> = {}>(args?: Subset<T, Role$playersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolePlayerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Role model
   */
  interface RoleFieldRefs {
    readonly id: FieldRef<"Role", 'String'>
    readonly title: FieldRef<"Role", 'String'>
    readonly description: FieldRef<"Role", 'String'>
    readonly enabled: FieldRef<"Role", 'Boolean'>
    readonly modified: FieldRef<"Role", 'DateTime'>
    readonly created: FieldRef<"Role", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Role findUnique
   */
  export type RoleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Role to fetch.
     */
    where: RoleWhereUniqueInput
  }

  /**
   * Role findUniqueOrThrow
   */
  export type RoleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Role to fetch.
     */
    where: RoleWhereUniqueInput
  }

  /**
   * Role findFirst
   */
  export type RoleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Role to fetch.
     */
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Roles.
     */
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Roles.
     */
    distinct?: RoleScalarFieldEnum | RoleScalarFieldEnum[]
  }

  /**
   * Role findFirstOrThrow
   */
  export type RoleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Role to fetch.
     */
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Roles.
     */
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Roles.
     */
    distinct?: RoleScalarFieldEnum | RoleScalarFieldEnum[]
  }

  /**
   * Role findMany
   */
  export type RoleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Roles to fetch.
     */
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Roles.
     */
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    distinct?: RoleScalarFieldEnum | RoleScalarFieldEnum[]
  }

  /**
   * Role create
   */
  export type RoleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * The data needed to create a Role.
     */
    data: XOR<RoleCreateInput, RoleUncheckedCreateInput>
  }

  /**
   * Role createMany
   */
  export type RoleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Roles.
     */
    data: RoleCreateManyInput | RoleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Role createManyAndReturn
   */
  export type RoleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * The data used to create many Roles.
     */
    data: RoleCreateManyInput | RoleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Role update
   */
  export type RoleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * The data needed to update a Role.
     */
    data: XOR<RoleUpdateInput, RoleUncheckedUpdateInput>
    /**
     * Choose, which Role to update.
     */
    where: RoleWhereUniqueInput
  }

  /**
   * Role updateMany
   */
  export type RoleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Roles.
     */
    data: XOR<RoleUpdateManyMutationInput, RoleUncheckedUpdateManyInput>
    /**
     * Filter which Roles to update
     */
    where?: RoleWhereInput
    /**
     * Limit how many Roles to update.
     */
    limit?: number
  }

  /**
   * Role updateManyAndReturn
   */
  export type RoleUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * The data used to update Roles.
     */
    data: XOR<RoleUpdateManyMutationInput, RoleUncheckedUpdateManyInput>
    /**
     * Filter which Roles to update
     */
    where?: RoleWhereInput
    /**
     * Limit how many Roles to update.
     */
    limit?: number
  }

  /**
   * Role upsert
   */
  export type RoleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * The filter to search for the Role to update in case it exists.
     */
    where: RoleWhereUniqueInput
    /**
     * In case the Role found by the `where` argument doesn't exist, create a new Role with this data.
     */
    create: XOR<RoleCreateInput, RoleUncheckedCreateInput>
    /**
     * In case the Role was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RoleUpdateInput, RoleUncheckedUpdateInput>
  }

  /**
   * Role delete
   */
  export type RoleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter which Role to delete.
     */
    where: RoleWhereUniqueInput
  }

  /**
   * Role deleteMany
   */
  export type RoleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Roles to delete
     */
    where?: RoleWhereInput
    /**
     * Limit how many Roles to delete.
     */
    limit?: number
  }

  /**
   * Role.permissions
   */
  export type Role$permissionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RolePermission
     */
    select?: RolePermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RolePermission
     */
    omit?: RolePermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolePermissionInclude<ExtArgs> | null
    where?: RolePermissionWhereInput
    orderBy?: RolePermissionOrderByWithRelationInput | RolePermissionOrderByWithRelationInput[]
    cursor?: RolePermissionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RolePermissionScalarFieldEnum | RolePermissionScalarFieldEnum[]
  }

  /**
   * Role.players
   */
  export type Role$playersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RolePlayer
     */
    select?: RolePlayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RolePlayer
     */
    omit?: RolePlayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolePlayerInclude<ExtArgs> | null
    where?: RolePlayerWhereInput
    orderBy?: RolePlayerOrderByWithRelationInput | RolePlayerOrderByWithRelationInput[]
    cursor?: RolePlayerWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RolePlayerScalarFieldEnum | RolePlayerScalarFieldEnum[]
  }

  /**
   * Role without action
   */
  export type RoleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
  }


  /**
   * Model RolePermission
   */

  export type AggregateRolePermission = {
    _count: RolePermissionCountAggregateOutputType | null
    _min: RolePermissionMinAggregateOutputType | null
    _max: RolePermissionMaxAggregateOutputType | null
  }

  export type RolePermissionMinAggregateOutputType = {
    id: string | null
    roleId: string | null
    permissionId: string | null
    modified: Date | null
    created: Date | null
  }

  export type RolePermissionMaxAggregateOutputType = {
    id: string | null
    roleId: string | null
    permissionId: string | null
    modified: Date | null
    created: Date | null
  }

  export type RolePermissionCountAggregateOutputType = {
    id: number
    roleId: number
    permissionId: number
    modified: number
    created: number
    _all: number
  }


  export type RolePermissionMinAggregateInputType = {
    id?: true
    roleId?: true
    permissionId?: true
    modified?: true
    created?: true
  }

  export type RolePermissionMaxAggregateInputType = {
    id?: true
    roleId?: true
    permissionId?: true
    modified?: true
    created?: true
  }

  export type RolePermissionCountAggregateInputType = {
    id?: true
    roleId?: true
    permissionId?: true
    modified?: true
    created?: true
    _all?: true
  }

  export type RolePermissionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RolePermission to aggregate.
     */
    where?: RolePermissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RolePermissions to fetch.
     */
    orderBy?: RolePermissionOrderByWithRelationInput | RolePermissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RolePermissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RolePermissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RolePermissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RolePermissions
    **/
    _count?: true | RolePermissionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RolePermissionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RolePermissionMaxAggregateInputType
  }

  export type GetRolePermissionAggregateType<T extends RolePermissionAggregateArgs> = {
        [P in keyof T & keyof AggregateRolePermission]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRolePermission[P]>
      : GetScalarType<T[P], AggregateRolePermission[P]>
  }




  export type RolePermissionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RolePermissionWhereInput
    orderBy?: RolePermissionOrderByWithAggregationInput | RolePermissionOrderByWithAggregationInput[]
    by: RolePermissionScalarFieldEnum[] | RolePermissionScalarFieldEnum
    having?: RolePermissionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RolePermissionCountAggregateInputType | true
    _min?: RolePermissionMinAggregateInputType
    _max?: RolePermissionMaxAggregateInputType
  }

  export type RolePermissionGroupByOutputType = {
    id: string
    roleId: string
    permissionId: string
    modified: Date
    created: Date
    _count: RolePermissionCountAggregateOutputType | null
    _min: RolePermissionMinAggregateOutputType | null
    _max: RolePermissionMaxAggregateOutputType | null
  }

  type GetRolePermissionGroupByPayload<T extends RolePermissionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RolePermissionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RolePermissionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RolePermissionGroupByOutputType[P]>
            : GetScalarType<T[P], RolePermissionGroupByOutputType[P]>
        }
      >
    >


  export type RolePermissionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    roleId?: boolean
    permissionId?: boolean
    modified?: boolean
    created?: boolean
    permission?: boolean | PermissionDefaultArgs<ExtArgs>
    role?: boolean | RoleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rolePermission"]>

  export type RolePermissionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    roleId?: boolean
    permissionId?: boolean
    modified?: boolean
    created?: boolean
    permission?: boolean | PermissionDefaultArgs<ExtArgs>
    role?: boolean | RoleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rolePermission"]>

  export type RolePermissionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    roleId?: boolean
    permissionId?: boolean
    modified?: boolean
    created?: boolean
    permission?: boolean | PermissionDefaultArgs<ExtArgs>
    role?: boolean | RoleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rolePermission"]>

  export type RolePermissionSelectScalar = {
    id?: boolean
    roleId?: boolean
    permissionId?: boolean
    modified?: boolean
    created?: boolean
  }

  export type RolePermissionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "roleId" | "permissionId" | "modified" | "created", ExtArgs["result"]["rolePermission"]>
  export type RolePermissionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    permission?: boolean | PermissionDefaultArgs<ExtArgs>
    role?: boolean | RoleDefaultArgs<ExtArgs>
  }
  export type RolePermissionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    permission?: boolean | PermissionDefaultArgs<ExtArgs>
    role?: boolean | RoleDefaultArgs<ExtArgs>
  }
  export type RolePermissionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    permission?: boolean | PermissionDefaultArgs<ExtArgs>
    role?: boolean | RoleDefaultArgs<ExtArgs>
  }

  export type $RolePermissionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RolePermission"
    objects: {
      permission: Prisma.$PermissionPayload<ExtArgs>
      role: Prisma.$RolePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      roleId: string
      permissionId: string
      modified: Date
      created: Date
    }, ExtArgs["result"]["rolePermission"]>
    composites: {}
  }

  type RolePermissionGetPayload<S extends boolean | null | undefined | RolePermissionDefaultArgs> = $Result.GetResult<Prisma.$RolePermissionPayload, S>

  type RolePermissionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RolePermissionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RolePermissionCountAggregateInputType | true
    }

  export interface RolePermissionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RolePermission'], meta: { name: 'RolePermission' } }
    /**
     * Find zero or one RolePermission that matches the filter.
     * @param {RolePermissionFindUniqueArgs} args - Arguments to find a RolePermission
     * @example
     * // Get one RolePermission
     * const rolePermission = await prisma.rolePermission.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RolePermissionFindUniqueArgs>(args: SelectSubset<T, RolePermissionFindUniqueArgs<ExtArgs>>): Prisma__RolePermissionClient<$Result.GetResult<Prisma.$RolePermissionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one RolePermission that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RolePermissionFindUniqueOrThrowArgs} args - Arguments to find a RolePermission
     * @example
     * // Get one RolePermission
     * const rolePermission = await prisma.rolePermission.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RolePermissionFindUniqueOrThrowArgs>(args: SelectSubset<T, RolePermissionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RolePermissionClient<$Result.GetResult<Prisma.$RolePermissionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RolePermission that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolePermissionFindFirstArgs} args - Arguments to find a RolePermission
     * @example
     * // Get one RolePermission
     * const rolePermission = await prisma.rolePermission.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RolePermissionFindFirstArgs>(args?: SelectSubset<T, RolePermissionFindFirstArgs<ExtArgs>>): Prisma__RolePermissionClient<$Result.GetResult<Prisma.$RolePermissionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RolePermission that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolePermissionFindFirstOrThrowArgs} args - Arguments to find a RolePermission
     * @example
     * // Get one RolePermission
     * const rolePermission = await prisma.rolePermission.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RolePermissionFindFirstOrThrowArgs>(args?: SelectSubset<T, RolePermissionFindFirstOrThrowArgs<ExtArgs>>): Prisma__RolePermissionClient<$Result.GetResult<Prisma.$RolePermissionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more RolePermissions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolePermissionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RolePermissions
     * const rolePermissions = await prisma.rolePermission.findMany()
     * 
     * // Get first 10 RolePermissions
     * const rolePermissions = await prisma.rolePermission.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const rolePermissionWithIdOnly = await prisma.rolePermission.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RolePermissionFindManyArgs>(args?: SelectSubset<T, RolePermissionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolePermissionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a RolePermission.
     * @param {RolePermissionCreateArgs} args - Arguments to create a RolePermission.
     * @example
     * // Create one RolePermission
     * const RolePermission = await prisma.rolePermission.create({
     *   data: {
     *     // ... data to create a RolePermission
     *   }
     * })
     * 
     */
    create<T extends RolePermissionCreateArgs>(args: SelectSubset<T, RolePermissionCreateArgs<ExtArgs>>): Prisma__RolePermissionClient<$Result.GetResult<Prisma.$RolePermissionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many RolePermissions.
     * @param {RolePermissionCreateManyArgs} args - Arguments to create many RolePermissions.
     * @example
     * // Create many RolePermissions
     * const rolePermission = await prisma.rolePermission.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RolePermissionCreateManyArgs>(args?: SelectSubset<T, RolePermissionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many RolePermissions and returns the data saved in the database.
     * @param {RolePermissionCreateManyAndReturnArgs} args - Arguments to create many RolePermissions.
     * @example
     * // Create many RolePermissions
     * const rolePermission = await prisma.rolePermission.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many RolePermissions and only return the `id`
     * const rolePermissionWithIdOnly = await prisma.rolePermission.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RolePermissionCreateManyAndReturnArgs>(args?: SelectSubset<T, RolePermissionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolePermissionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a RolePermission.
     * @param {RolePermissionDeleteArgs} args - Arguments to delete one RolePermission.
     * @example
     * // Delete one RolePermission
     * const RolePermission = await prisma.rolePermission.delete({
     *   where: {
     *     // ... filter to delete one RolePermission
     *   }
     * })
     * 
     */
    delete<T extends RolePermissionDeleteArgs>(args: SelectSubset<T, RolePermissionDeleteArgs<ExtArgs>>): Prisma__RolePermissionClient<$Result.GetResult<Prisma.$RolePermissionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one RolePermission.
     * @param {RolePermissionUpdateArgs} args - Arguments to update one RolePermission.
     * @example
     * // Update one RolePermission
     * const rolePermission = await prisma.rolePermission.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RolePermissionUpdateArgs>(args: SelectSubset<T, RolePermissionUpdateArgs<ExtArgs>>): Prisma__RolePermissionClient<$Result.GetResult<Prisma.$RolePermissionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more RolePermissions.
     * @param {RolePermissionDeleteManyArgs} args - Arguments to filter RolePermissions to delete.
     * @example
     * // Delete a few RolePermissions
     * const { count } = await prisma.rolePermission.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RolePermissionDeleteManyArgs>(args?: SelectSubset<T, RolePermissionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RolePermissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolePermissionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RolePermissions
     * const rolePermission = await prisma.rolePermission.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RolePermissionUpdateManyArgs>(args: SelectSubset<T, RolePermissionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RolePermissions and returns the data updated in the database.
     * @param {RolePermissionUpdateManyAndReturnArgs} args - Arguments to update many RolePermissions.
     * @example
     * // Update many RolePermissions
     * const rolePermission = await prisma.rolePermission.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more RolePermissions and only return the `id`
     * const rolePermissionWithIdOnly = await prisma.rolePermission.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RolePermissionUpdateManyAndReturnArgs>(args: SelectSubset<T, RolePermissionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolePermissionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one RolePermission.
     * @param {RolePermissionUpsertArgs} args - Arguments to update or create a RolePermission.
     * @example
     * // Update or create a RolePermission
     * const rolePermission = await prisma.rolePermission.upsert({
     *   create: {
     *     // ... data to create a RolePermission
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RolePermission we want to update
     *   }
     * })
     */
    upsert<T extends RolePermissionUpsertArgs>(args: SelectSubset<T, RolePermissionUpsertArgs<ExtArgs>>): Prisma__RolePermissionClient<$Result.GetResult<Prisma.$RolePermissionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of RolePermissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolePermissionCountArgs} args - Arguments to filter RolePermissions to count.
     * @example
     * // Count the number of RolePermissions
     * const count = await prisma.rolePermission.count({
     *   where: {
     *     // ... the filter for the RolePermissions we want to count
     *   }
     * })
    **/
    count<T extends RolePermissionCountArgs>(
      args?: Subset<T, RolePermissionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RolePermissionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RolePermission.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolePermissionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RolePermissionAggregateArgs>(args: Subset<T, RolePermissionAggregateArgs>): Prisma.PrismaPromise<GetRolePermissionAggregateType<T>>

    /**
     * Group by RolePermission.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolePermissionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RolePermissionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RolePermissionGroupByArgs['orderBy'] }
        : { orderBy?: RolePermissionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RolePermissionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRolePermissionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RolePermission model
   */
  readonly fields: RolePermissionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RolePermission.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RolePermissionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    permission<T extends PermissionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PermissionDefaultArgs<ExtArgs>>): Prisma__PermissionClient<$Result.GetResult<Prisma.$PermissionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    role<T extends RoleDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RoleDefaultArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the RolePermission model
   */
  interface RolePermissionFieldRefs {
    readonly id: FieldRef<"RolePermission", 'String'>
    readonly roleId: FieldRef<"RolePermission", 'String'>
    readonly permissionId: FieldRef<"RolePermission", 'String'>
    readonly modified: FieldRef<"RolePermission", 'DateTime'>
    readonly created: FieldRef<"RolePermission", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * RolePermission findUnique
   */
  export type RolePermissionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RolePermission
     */
    select?: RolePermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RolePermission
     */
    omit?: RolePermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolePermissionInclude<ExtArgs> | null
    /**
     * Filter, which RolePermission to fetch.
     */
    where: RolePermissionWhereUniqueInput
  }

  /**
   * RolePermission findUniqueOrThrow
   */
  export type RolePermissionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RolePermission
     */
    select?: RolePermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RolePermission
     */
    omit?: RolePermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolePermissionInclude<ExtArgs> | null
    /**
     * Filter, which RolePermission to fetch.
     */
    where: RolePermissionWhereUniqueInput
  }

  /**
   * RolePermission findFirst
   */
  export type RolePermissionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RolePermission
     */
    select?: RolePermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RolePermission
     */
    omit?: RolePermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolePermissionInclude<ExtArgs> | null
    /**
     * Filter, which RolePermission to fetch.
     */
    where?: RolePermissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RolePermissions to fetch.
     */
    orderBy?: RolePermissionOrderByWithRelationInput | RolePermissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RolePermissions.
     */
    cursor?: RolePermissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RolePermissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RolePermissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RolePermissions.
     */
    distinct?: RolePermissionScalarFieldEnum | RolePermissionScalarFieldEnum[]
  }

  /**
   * RolePermission findFirstOrThrow
   */
  export type RolePermissionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RolePermission
     */
    select?: RolePermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RolePermission
     */
    omit?: RolePermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolePermissionInclude<ExtArgs> | null
    /**
     * Filter, which RolePermission to fetch.
     */
    where?: RolePermissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RolePermissions to fetch.
     */
    orderBy?: RolePermissionOrderByWithRelationInput | RolePermissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RolePermissions.
     */
    cursor?: RolePermissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RolePermissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RolePermissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RolePermissions.
     */
    distinct?: RolePermissionScalarFieldEnum | RolePermissionScalarFieldEnum[]
  }

  /**
   * RolePermission findMany
   */
  export type RolePermissionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RolePermission
     */
    select?: RolePermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RolePermission
     */
    omit?: RolePermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolePermissionInclude<ExtArgs> | null
    /**
     * Filter, which RolePermissions to fetch.
     */
    where?: RolePermissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RolePermissions to fetch.
     */
    orderBy?: RolePermissionOrderByWithRelationInput | RolePermissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RolePermissions.
     */
    cursor?: RolePermissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RolePermissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RolePermissions.
     */
    skip?: number
    distinct?: RolePermissionScalarFieldEnum | RolePermissionScalarFieldEnum[]
  }

  /**
   * RolePermission create
   */
  export type RolePermissionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RolePermission
     */
    select?: RolePermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RolePermission
     */
    omit?: RolePermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolePermissionInclude<ExtArgs> | null
    /**
     * The data needed to create a RolePermission.
     */
    data: XOR<RolePermissionCreateInput, RolePermissionUncheckedCreateInput>
  }

  /**
   * RolePermission createMany
   */
  export type RolePermissionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RolePermissions.
     */
    data: RolePermissionCreateManyInput | RolePermissionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RolePermission createManyAndReturn
   */
  export type RolePermissionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RolePermission
     */
    select?: RolePermissionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RolePermission
     */
    omit?: RolePermissionOmit<ExtArgs> | null
    /**
     * The data used to create many RolePermissions.
     */
    data: RolePermissionCreateManyInput | RolePermissionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolePermissionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * RolePermission update
   */
  export type RolePermissionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RolePermission
     */
    select?: RolePermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RolePermission
     */
    omit?: RolePermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolePermissionInclude<ExtArgs> | null
    /**
     * The data needed to update a RolePermission.
     */
    data: XOR<RolePermissionUpdateInput, RolePermissionUncheckedUpdateInput>
    /**
     * Choose, which RolePermission to update.
     */
    where: RolePermissionWhereUniqueInput
  }

  /**
   * RolePermission updateMany
   */
  export type RolePermissionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RolePermissions.
     */
    data: XOR<RolePermissionUpdateManyMutationInput, RolePermissionUncheckedUpdateManyInput>
    /**
     * Filter which RolePermissions to update
     */
    where?: RolePermissionWhereInput
    /**
     * Limit how many RolePermissions to update.
     */
    limit?: number
  }

  /**
   * RolePermission updateManyAndReturn
   */
  export type RolePermissionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RolePermission
     */
    select?: RolePermissionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RolePermission
     */
    omit?: RolePermissionOmit<ExtArgs> | null
    /**
     * The data used to update RolePermissions.
     */
    data: XOR<RolePermissionUpdateManyMutationInput, RolePermissionUncheckedUpdateManyInput>
    /**
     * Filter which RolePermissions to update
     */
    where?: RolePermissionWhereInput
    /**
     * Limit how many RolePermissions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolePermissionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * RolePermission upsert
   */
  export type RolePermissionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RolePermission
     */
    select?: RolePermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RolePermission
     */
    omit?: RolePermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolePermissionInclude<ExtArgs> | null
    /**
     * The filter to search for the RolePermission to update in case it exists.
     */
    where: RolePermissionWhereUniqueInput
    /**
     * In case the RolePermission found by the `where` argument doesn't exist, create a new RolePermission with this data.
     */
    create: XOR<RolePermissionCreateInput, RolePermissionUncheckedCreateInput>
    /**
     * In case the RolePermission was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RolePermissionUpdateInput, RolePermissionUncheckedUpdateInput>
  }

  /**
   * RolePermission delete
   */
  export type RolePermissionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RolePermission
     */
    select?: RolePermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RolePermission
     */
    omit?: RolePermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolePermissionInclude<ExtArgs> | null
    /**
     * Filter which RolePermission to delete.
     */
    where: RolePermissionWhereUniqueInput
  }

  /**
   * RolePermission deleteMany
   */
  export type RolePermissionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RolePermissions to delete
     */
    where?: RolePermissionWhereInput
    /**
     * Limit how many RolePermissions to delete.
     */
    limit?: number
  }

  /**
   * RolePermission without action
   */
  export type RolePermissionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RolePermission
     */
    select?: RolePermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RolePermission
     */
    omit?: RolePermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolePermissionInclude<ExtArgs> | null
  }


  /**
   * Model RolePlayer
   */

  export type AggregateRolePlayer = {
    _count: RolePlayerCountAggregateOutputType | null
    _min: RolePlayerMinAggregateOutputType | null
    _max: RolePlayerMaxAggregateOutputType | null
  }

  export type RolePlayerMinAggregateOutputType = {
    id: string | null
    playerId: string | null
    roleId: string | null
    modified: Date | null
    created: Date | null
  }

  export type RolePlayerMaxAggregateOutputType = {
    id: string | null
    playerId: string | null
    roleId: string | null
    modified: Date | null
    created: Date | null
  }

  export type RolePlayerCountAggregateOutputType = {
    id: number
    playerId: number
    roleId: number
    modified: number
    created: number
    _all: number
  }


  export type RolePlayerMinAggregateInputType = {
    id?: true
    playerId?: true
    roleId?: true
    modified?: true
    created?: true
  }

  export type RolePlayerMaxAggregateInputType = {
    id?: true
    playerId?: true
    roleId?: true
    modified?: true
    created?: true
  }

  export type RolePlayerCountAggregateInputType = {
    id?: true
    playerId?: true
    roleId?: true
    modified?: true
    created?: true
    _all?: true
  }

  export type RolePlayerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RolePlayer to aggregate.
     */
    where?: RolePlayerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RolePlayers to fetch.
     */
    orderBy?: RolePlayerOrderByWithRelationInput | RolePlayerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RolePlayerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RolePlayers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RolePlayers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RolePlayers
    **/
    _count?: true | RolePlayerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RolePlayerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RolePlayerMaxAggregateInputType
  }

  export type GetRolePlayerAggregateType<T extends RolePlayerAggregateArgs> = {
        [P in keyof T & keyof AggregateRolePlayer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRolePlayer[P]>
      : GetScalarType<T[P], AggregateRolePlayer[P]>
  }




  export type RolePlayerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RolePlayerWhereInput
    orderBy?: RolePlayerOrderByWithAggregationInput | RolePlayerOrderByWithAggregationInput[]
    by: RolePlayerScalarFieldEnum[] | RolePlayerScalarFieldEnum
    having?: RolePlayerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RolePlayerCountAggregateInputType | true
    _min?: RolePlayerMinAggregateInputType
    _max?: RolePlayerMaxAggregateInputType
  }

  export type RolePlayerGroupByOutputType = {
    id: string
    playerId: string
    roleId: string
    modified: Date
    created: Date
    _count: RolePlayerCountAggregateOutputType | null
    _min: RolePlayerMinAggregateOutputType | null
    _max: RolePlayerMaxAggregateOutputType | null
  }

  type GetRolePlayerGroupByPayload<T extends RolePlayerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RolePlayerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RolePlayerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RolePlayerGroupByOutputType[P]>
            : GetScalarType<T[P], RolePlayerGroupByOutputType[P]>
        }
      >
    >


  export type RolePlayerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    playerId?: boolean
    roleId?: boolean
    modified?: boolean
    created?: boolean
    player?: boolean | UserDefaultArgs<ExtArgs>
    role?: boolean | RoleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rolePlayer"]>

  export type RolePlayerSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    playerId?: boolean
    roleId?: boolean
    modified?: boolean
    created?: boolean
    player?: boolean | UserDefaultArgs<ExtArgs>
    role?: boolean | RoleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rolePlayer"]>

  export type RolePlayerSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    playerId?: boolean
    roleId?: boolean
    modified?: boolean
    created?: boolean
    player?: boolean | UserDefaultArgs<ExtArgs>
    role?: boolean | RoleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rolePlayer"]>

  export type RolePlayerSelectScalar = {
    id?: boolean
    playerId?: boolean
    roleId?: boolean
    modified?: boolean
    created?: boolean
  }

  export type RolePlayerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "playerId" | "roleId" | "modified" | "created", ExtArgs["result"]["rolePlayer"]>
  export type RolePlayerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    player?: boolean | UserDefaultArgs<ExtArgs>
    role?: boolean | RoleDefaultArgs<ExtArgs>
  }
  export type RolePlayerIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    player?: boolean | UserDefaultArgs<ExtArgs>
    role?: boolean | RoleDefaultArgs<ExtArgs>
  }
  export type RolePlayerIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    player?: boolean | UserDefaultArgs<ExtArgs>
    role?: boolean | RoleDefaultArgs<ExtArgs>
  }

  export type $RolePlayerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RolePlayer"
    objects: {
      player: Prisma.$UserPayload<ExtArgs>
      role: Prisma.$RolePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      playerId: string
      roleId: string
      modified: Date
      created: Date
    }, ExtArgs["result"]["rolePlayer"]>
    composites: {}
  }

  type RolePlayerGetPayload<S extends boolean | null | undefined | RolePlayerDefaultArgs> = $Result.GetResult<Prisma.$RolePlayerPayload, S>

  type RolePlayerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RolePlayerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RolePlayerCountAggregateInputType | true
    }

  export interface RolePlayerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RolePlayer'], meta: { name: 'RolePlayer' } }
    /**
     * Find zero or one RolePlayer that matches the filter.
     * @param {RolePlayerFindUniqueArgs} args - Arguments to find a RolePlayer
     * @example
     * // Get one RolePlayer
     * const rolePlayer = await prisma.rolePlayer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RolePlayerFindUniqueArgs>(args: SelectSubset<T, RolePlayerFindUniqueArgs<ExtArgs>>): Prisma__RolePlayerClient<$Result.GetResult<Prisma.$RolePlayerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one RolePlayer that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RolePlayerFindUniqueOrThrowArgs} args - Arguments to find a RolePlayer
     * @example
     * // Get one RolePlayer
     * const rolePlayer = await prisma.rolePlayer.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RolePlayerFindUniqueOrThrowArgs>(args: SelectSubset<T, RolePlayerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RolePlayerClient<$Result.GetResult<Prisma.$RolePlayerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RolePlayer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolePlayerFindFirstArgs} args - Arguments to find a RolePlayer
     * @example
     * // Get one RolePlayer
     * const rolePlayer = await prisma.rolePlayer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RolePlayerFindFirstArgs>(args?: SelectSubset<T, RolePlayerFindFirstArgs<ExtArgs>>): Prisma__RolePlayerClient<$Result.GetResult<Prisma.$RolePlayerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RolePlayer that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolePlayerFindFirstOrThrowArgs} args - Arguments to find a RolePlayer
     * @example
     * // Get one RolePlayer
     * const rolePlayer = await prisma.rolePlayer.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RolePlayerFindFirstOrThrowArgs>(args?: SelectSubset<T, RolePlayerFindFirstOrThrowArgs<ExtArgs>>): Prisma__RolePlayerClient<$Result.GetResult<Prisma.$RolePlayerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more RolePlayers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolePlayerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RolePlayers
     * const rolePlayers = await prisma.rolePlayer.findMany()
     * 
     * // Get first 10 RolePlayers
     * const rolePlayers = await prisma.rolePlayer.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const rolePlayerWithIdOnly = await prisma.rolePlayer.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RolePlayerFindManyArgs>(args?: SelectSubset<T, RolePlayerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolePlayerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a RolePlayer.
     * @param {RolePlayerCreateArgs} args - Arguments to create a RolePlayer.
     * @example
     * // Create one RolePlayer
     * const RolePlayer = await prisma.rolePlayer.create({
     *   data: {
     *     // ... data to create a RolePlayer
     *   }
     * })
     * 
     */
    create<T extends RolePlayerCreateArgs>(args: SelectSubset<T, RolePlayerCreateArgs<ExtArgs>>): Prisma__RolePlayerClient<$Result.GetResult<Prisma.$RolePlayerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many RolePlayers.
     * @param {RolePlayerCreateManyArgs} args - Arguments to create many RolePlayers.
     * @example
     * // Create many RolePlayers
     * const rolePlayer = await prisma.rolePlayer.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RolePlayerCreateManyArgs>(args?: SelectSubset<T, RolePlayerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many RolePlayers and returns the data saved in the database.
     * @param {RolePlayerCreateManyAndReturnArgs} args - Arguments to create many RolePlayers.
     * @example
     * // Create many RolePlayers
     * const rolePlayer = await prisma.rolePlayer.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many RolePlayers and only return the `id`
     * const rolePlayerWithIdOnly = await prisma.rolePlayer.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RolePlayerCreateManyAndReturnArgs>(args?: SelectSubset<T, RolePlayerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolePlayerPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a RolePlayer.
     * @param {RolePlayerDeleteArgs} args - Arguments to delete one RolePlayer.
     * @example
     * // Delete one RolePlayer
     * const RolePlayer = await prisma.rolePlayer.delete({
     *   where: {
     *     // ... filter to delete one RolePlayer
     *   }
     * })
     * 
     */
    delete<T extends RolePlayerDeleteArgs>(args: SelectSubset<T, RolePlayerDeleteArgs<ExtArgs>>): Prisma__RolePlayerClient<$Result.GetResult<Prisma.$RolePlayerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one RolePlayer.
     * @param {RolePlayerUpdateArgs} args - Arguments to update one RolePlayer.
     * @example
     * // Update one RolePlayer
     * const rolePlayer = await prisma.rolePlayer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RolePlayerUpdateArgs>(args: SelectSubset<T, RolePlayerUpdateArgs<ExtArgs>>): Prisma__RolePlayerClient<$Result.GetResult<Prisma.$RolePlayerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more RolePlayers.
     * @param {RolePlayerDeleteManyArgs} args - Arguments to filter RolePlayers to delete.
     * @example
     * // Delete a few RolePlayers
     * const { count } = await prisma.rolePlayer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RolePlayerDeleteManyArgs>(args?: SelectSubset<T, RolePlayerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RolePlayers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolePlayerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RolePlayers
     * const rolePlayer = await prisma.rolePlayer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RolePlayerUpdateManyArgs>(args: SelectSubset<T, RolePlayerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RolePlayers and returns the data updated in the database.
     * @param {RolePlayerUpdateManyAndReturnArgs} args - Arguments to update many RolePlayers.
     * @example
     * // Update many RolePlayers
     * const rolePlayer = await prisma.rolePlayer.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more RolePlayers and only return the `id`
     * const rolePlayerWithIdOnly = await prisma.rolePlayer.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RolePlayerUpdateManyAndReturnArgs>(args: SelectSubset<T, RolePlayerUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolePlayerPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one RolePlayer.
     * @param {RolePlayerUpsertArgs} args - Arguments to update or create a RolePlayer.
     * @example
     * // Update or create a RolePlayer
     * const rolePlayer = await prisma.rolePlayer.upsert({
     *   create: {
     *     // ... data to create a RolePlayer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RolePlayer we want to update
     *   }
     * })
     */
    upsert<T extends RolePlayerUpsertArgs>(args: SelectSubset<T, RolePlayerUpsertArgs<ExtArgs>>): Prisma__RolePlayerClient<$Result.GetResult<Prisma.$RolePlayerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of RolePlayers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolePlayerCountArgs} args - Arguments to filter RolePlayers to count.
     * @example
     * // Count the number of RolePlayers
     * const count = await prisma.rolePlayer.count({
     *   where: {
     *     // ... the filter for the RolePlayers we want to count
     *   }
     * })
    **/
    count<T extends RolePlayerCountArgs>(
      args?: Subset<T, RolePlayerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RolePlayerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RolePlayer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolePlayerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RolePlayerAggregateArgs>(args: Subset<T, RolePlayerAggregateArgs>): Prisma.PrismaPromise<GetRolePlayerAggregateType<T>>

    /**
     * Group by RolePlayer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolePlayerGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RolePlayerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RolePlayerGroupByArgs['orderBy'] }
        : { orderBy?: RolePlayerGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RolePlayerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRolePlayerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RolePlayer model
   */
  readonly fields: RolePlayerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RolePlayer.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RolePlayerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    player<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    role<T extends RoleDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RoleDefaultArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the RolePlayer model
   */
  interface RolePlayerFieldRefs {
    readonly id: FieldRef<"RolePlayer", 'String'>
    readonly playerId: FieldRef<"RolePlayer", 'String'>
    readonly roleId: FieldRef<"RolePlayer", 'String'>
    readonly modified: FieldRef<"RolePlayer", 'DateTime'>
    readonly created: FieldRef<"RolePlayer", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * RolePlayer findUnique
   */
  export type RolePlayerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RolePlayer
     */
    select?: RolePlayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RolePlayer
     */
    omit?: RolePlayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolePlayerInclude<ExtArgs> | null
    /**
     * Filter, which RolePlayer to fetch.
     */
    where: RolePlayerWhereUniqueInput
  }

  /**
   * RolePlayer findUniqueOrThrow
   */
  export type RolePlayerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RolePlayer
     */
    select?: RolePlayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RolePlayer
     */
    omit?: RolePlayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolePlayerInclude<ExtArgs> | null
    /**
     * Filter, which RolePlayer to fetch.
     */
    where: RolePlayerWhereUniqueInput
  }

  /**
   * RolePlayer findFirst
   */
  export type RolePlayerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RolePlayer
     */
    select?: RolePlayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RolePlayer
     */
    omit?: RolePlayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolePlayerInclude<ExtArgs> | null
    /**
     * Filter, which RolePlayer to fetch.
     */
    where?: RolePlayerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RolePlayers to fetch.
     */
    orderBy?: RolePlayerOrderByWithRelationInput | RolePlayerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RolePlayers.
     */
    cursor?: RolePlayerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RolePlayers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RolePlayers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RolePlayers.
     */
    distinct?: RolePlayerScalarFieldEnum | RolePlayerScalarFieldEnum[]
  }

  /**
   * RolePlayer findFirstOrThrow
   */
  export type RolePlayerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RolePlayer
     */
    select?: RolePlayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RolePlayer
     */
    omit?: RolePlayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolePlayerInclude<ExtArgs> | null
    /**
     * Filter, which RolePlayer to fetch.
     */
    where?: RolePlayerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RolePlayers to fetch.
     */
    orderBy?: RolePlayerOrderByWithRelationInput | RolePlayerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RolePlayers.
     */
    cursor?: RolePlayerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RolePlayers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RolePlayers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RolePlayers.
     */
    distinct?: RolePlayerScalarFieldEnum | RolePlayerScalarFieldEnum[]
  }

  /**
   * RolePlayer findMany
   */
  export type RolePlayerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RolePlayer
     */
    select?: RolePlayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RolePlayer
     */
    omit?: RolePlayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolePlayerInclude<ExtArgs> | null
    /**
     * Filter, which RolePlayers to fetch.
     */
    where?: RolePlayerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RolePlayers to fetch.
     */
    orderBy?: RolePlayerOrderByWithRelationInput | RolePlayerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RolePlayers.
     */
    cursor?: RolePlayerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RolePlayers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RolePlayers.
     */
    skip?: number
    distinct?: RolePlayerScalarFieldEnum | RolePlayerScalarFieldEnum[]
  }

  /**
   * RolePlayer create
   */
  export type RolePlayerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RolePlayer
     */
    select?: RolePlayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RolePlayer
     */
    omit?: RolePlayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolePlayerInclude<ExtArgs> | null
    /**
     * The data needed to create a RolePlayer.
     */
    data: XOR<RolePlayerCreateInput, RolePlayerUncheckedCreateInput>
  }

  /**
   * RolePlayer createMany
   */
  export type RolePlayerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RolePlayers.
     */
    data: RolePlayerCreateManyInput | RolePlayerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RolePlayer createManyAndReturn
   */
  export type RolePlayerCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RolePlayer
     */
    select?: RolePlayerSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RolePlayer
     */
    omit?: RolePlayerOmit<ExtArgs> | null
    /**
     * The data used to create many RolePlayers.
     */
    data: RolePlayerCreateManyInput | RolePlayerCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolePlayerIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * RolePlayer update
   */
  export type RolePlayerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RolePlayer
     */
    select?: RolePlayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RolePlayer
     */
    omit?: RolePlayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolePlayerInclude<ExtArgs> | null
    /**
     * The data needed to update a RolePlayer.
     */
    data: XOR<RolePlayerUpdateInput, RolePlayerUncheckedUpdateInput>
    /**
     * Choose, which RolePlayer to update.
     */
    where: RolePlayerWhereUniqueInput
  }

  /**
   * RolePlayer updateMany
   */
  export type RolePlayerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RolePlayers.
     */
    data: XOR<RolePlayerUpdateManyMutationInput, RolePlayerUncheckedUpdateManyInput>
    /**
     * Filter which RolePlayers to update
     */
    where?: RolePlayerWhereInput
    /**
     * Limit how many RolePlayers to update.
     */
    limit?: number
  }

  /**
   * RolePlayer updateManyAndReturn
   */
  export type RolePlayerUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RolePlayer
     */
    select?: RolePlayerSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RolePlayer
     */
    omit?: RolePlayerOmit<ExtArgs> | null
    /**
     * The data used to update RolePlayers.
     */
    data: XOR<RolePlayerUpdateManyMutationInput, RolePlayerUncheckedUpdateManyInput>
    /**
     * Filter which RolePlayers to update
     */
    where?: RolePlayerWhereInput
    /**
     * Limit how many RolePlayers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolePlayerIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * RolePlayer upsert
   */
  export type RolePlayerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RolePlayer
     */
    select?: RolePlayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RolePlayer
     */
    omit?: RolePlayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolePlayerInclude<ExtArgs> | null
    /**
     * The filter to search for the RolePlayer to update in case it exists.
     */
    where: RolePlayerWhereUniqueInput
    /**
     * In case the RolePlayer found by the `where` argument doesn't exist, create a new RolePlayer with this data.
     */
    create: XOR<RolePlayerCreateInput, RolePlayerUncheckedCreateInput>
    /**
     * In case the RolePlayer was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RolePlayerUpdateInput, RolePlayerUncheckedUpdateInput>
  }

  /**
   * RolePlayer delete
   */
  export type RolePlayerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RolePlayer
     */
    select?: RolePlayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RolePlayer
     */
    omit?: RolePlayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolePlayerInclude<ExtArgs> | null
    /**
     * Filter which RolePlayer to delete.
     */
    where: RolePlayerWhereUniqueInput
  }

  /**
   * RolePlayer deleteMany
   */
  export type RolePlayerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RolePlayers to delete
     */
    where?: RolePlayerWhereInput
    /**
     * Limit how many RolePlayers to delete.
     */
    limit?: number
  }

  /**
   * RolePlayer without action
   */
  export type RolePlayerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RolePlayer
     */
    select?: RolePlayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RolePlayer
     */
    omit?: RolePlayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolePlayerInclude<ExtArgs> | null
  }


  /**
   * Model Session
   */

  export type AggregateSession = {
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  export type SessionMinAggregateOutputType = {
    id: string | null
    device: string | null
    ip: string | null
    token: string | null
    createdById: string | null
    expired: Date | null
    revoked: boolean | null
    modified: Date | null
    created: Date | null
  }

  export type SessionMaxAggregateOutputType = {
    id: string | null
    device: string | null
    ip: string | null
    token: string | null
    createdById: string | null
    expired: Date | null
    revoked: boolean | null
    modified: Date | null
    created: Date | null
  }

  export type SessionCountAggregateOutputType = {
    id: number
    device: number
    ip: number
    token: number
    createdById: number
    expired: number
    revoked: number
    modified: number
    created: number
    _all: number
  }


  export type SessionMinAggregateInputType = {
    id?: true
    device?: true
    ip?: true
    token?: true
    createdById?: true
    expired?: true
    revoked?: true
    modified?: true
    created?: true
  }

  export type SessionMaxAggregateInputType = {
    id?: true
    device?: true
    ip?: true
    token?: true
    createdById?: true
    expired?: true
    revoked?: true
    modified?: true
    created?: true
  }

  export type SessionCountAggregateInputType = {
    id?: true
    device?: true
    ip?: true
    token?: true
    createdById?: true
    expired?: true
    revoked?: true
    modified?: true
    created?: true
    _all?: true
  }

  export type SessionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Session to aggregate.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sessions
    **/
    _count?: true | SessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SessionMaxAggregateInputType
  }

  export type GetSessionAggregateType<T extends SessionAggregateArgs> = {
        [P in keyof T & keyof AggregateSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSession[P]>
      : GetScalarType<T[P], AggregateSession[P]>
  }




  export type SessionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithAggregationInput | SessionOrderByWithAggregationInput[]
    by: SessionScalarFieldEnum[] | SessionScalarFieldEnum
    having?: SessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SessionCountAggregateInputType | true
    _min?: SessionMinAggregateInputType
    _max?: SessionMaxAggregateInputType
  }

  export type SessionGroupByOutputType = {
    id: string
    device: string
    ip: string
    token: string
    createdById: string
    expired: Date
    revoked: boolean
    modified: Date
    created: Date
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  type GetSessionGroupByPayload<T extends SessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SessionGroupByOutputType[P]>
            : GetScalarType<T[P], SessionGroupByOutputType[P]>
        }
      >
    >


  export type SessionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    device?: boolean
    ip?: boolean
    token?: boolean
    createdById?: boolean
    expired?: boolean
    revoked?: boolean
    modified?: boolean
    created?: boolean
    activities?: boolean | Session$activitiesArgs<ExtArgs>
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
    _count?: boolean | SessionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    device?: boolean
    ip?: boolean
    token?: boolean
    createdById?: boolean
    expired?: boolean
    revoked?: boolean
    modified?: boolean
    created?: boolean
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    device?: boolean
    ip?: boolean
    token?: boolean
    createdById?: boolean
    expired?: boolean
    revoked?: boolean
    modified?: boolean
    created?: boolean
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectScalar = {
    id?: boolean
    device?: boolean
    ip?: boolean
    token?: boolean
    createdById?: boolean
    expired?: boolean
    revoked?: boolean
    modified?: boolean
    created?: boolean
  }

  export type SessionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "device" | "ip" | "token" | "createdById" | "expired" | "revoked" | "modified" | "created", ExtArgs["result"]["session"]>
  export type SessionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    activities?: boolean | Session$activitiesArgs<ExtArgs>
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
    _count?: boolean | SessionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SessionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SessionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $SessionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Session"
    objects: {
      activities: Prisma.$ActivityPayload<ExtArgs>[]
      createdBy: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      device: string
      ip: string
      token: string
      createdById: string
      expired: Date
      revoked: boolean
      modified: Date
      created: Date
    }, ExtArgs["result"]["session"]>
    composites: {}
  }

  type SessionGetPayload<S extends boolean | null | undefined | SessionDefaultArgs> = $Result.GetResult<Prisma.$SessionPayload, S>

  type SessionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SessionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SessionCountAggregateInputType | true
    }

  export interface SessionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Session'], meta: { name: 'Session' } }
    /**
     * Find zero or one Session that matches the filter.
     * @param {SessionFindUniqueArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SessionFindUniqueArgs>(args: SelectSubset<T, SessionFindUniqueArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Session that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SessionFindUniqueOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SessionFindUniqueOrThrowArgs>(args: SelectSubset<T, SessionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Session that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SessionFindFirstArgs>(args?: SelectSubset<T, SessionFindFirstArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Session that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SessionFindFirstOrThrowArgs>(args?: SelectSubset<T, SessionFindFirstOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sessions
     * const sessions = await prisma.session.findMany()
     * 
     * // Get first 10 Sessions
     * const sessions = await prisma.session.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sessionWithIdOnly = await prisma.session.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SessionFindManyArgs>(args?: SelectSubset<T, SessionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Session.
     * @param {SessionCreateArgs} args - Arguments to create a Session.
     * @example
     * // Create one Session
     * const Session = await prisma.session.create({
     *   data: {
     *     // ... data to create a Session
     *   }
     * })
     * 
     */
    create<T extends SessionCreateArgs>(args: SelectSubset<T, SessionCreateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sessions.
     * @param {SessionCreateManyArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SessionCreateManyArgs>(args?: SelectSubset<T, SessionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Sessions and returns the data saved in the database.
     * @param {SessionCreateManyAndReturnArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Sessions and only return the `id`
     * const sessionWithIdOnly = await prisma.session.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SessionCreateManyAndReturnArgs>(args?: SelectSubset<T, SessionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Session.
     * @param {SessionDeleteArgs} args - Arguments to delete one Session.
     * @example
     * // Delete one Session
     * const Session = await prisma.session.delete({
     *   where: {
     *     // ... filter to delete one Session
     *   }
     * })
     * 
     */
    delete<T extends SessionDeleteArgs>(args: SelectSubset<T, SessionDeleteArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Session.
     * @param {SessionUpdateArgs} args - Arguments to update one Session.
     * @example
     * // Update one Session
     * const session = await prisma.session.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SessionUpdateArgs>(args: SelectSubset<T, SessionUpdateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sessions.
     * @param {SessionDeleteManyArgs} args - Arguments to filter Sessions to delete.
     * @example
     * // Delete a few Sessions
     * const { count } = await prisma.session.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SessionDeleteManyArgs>(args?: SelectSubset<T, SessionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SessionUpdateManyArgs>(args: SelectSubset<T, SessionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions and returns the data updated in the database.
     * @param {SessionUpdateManyAndReturnArgs} args - Arguments to update many Sessions.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Sessions and only return the `id`
     * const sessionWithIdOnly = await prisma.session.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SessionUpdateManyAndReturnArgs>(args: SelectSubset<T, SessionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Session.
     * @param {SessionUpsertArgs} args - Arguments to update or create a Session.
     * @example
     * // Update or create a Session
     * const session = await prisma.session.upsert({
     *   create: {
     *     // ... data to create a Session
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Session we want to update
     *   }
     * })
     */
    upsert<T extends SessionUpsertArgs>(args: SelectSubset<T, SessionUpsertArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionCountArgs} args - Arguments to filter Sessions to count.
     * @example
     * // Count the number of Sessions
     * const count = await prisma.session.count({
     *   where: {
     *     // ... the filter for the Sessions we want to count
     *   }
     * })
    **/
    count<T extends SessionCountArgs>(
      args?: Subset<T, SessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SessionAggregateArgs>(args: Subset<T, SessionAggregateArgs>): Prisma.PrismaPromise<GetSessionAggregateType<T>>

    /**
     * Group by Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SessionGroupByArgs['orderBy'] }
        : { orderBy?: SessionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Session model
   */
  readonly fields: SessionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Session.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SessionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    activities<T extends Session$activitiesArgs<ExtArgs> = {}>(args?: Subset<T, Session$activitiesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActivityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    createdBy<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Session model
   */
  interface SessionFieldRefs {
    readonly id: FieldRef<"Session", 'String'>
    readonly device: FieldRef<"Session", 'String'>
    readonly ip: FieldRef<"Session", 'String'>
    readonly token: FieldRef<"Session", 'String'>
    readonly createdById: FieldRef<"Session", 'String'>
    readonly expired: FieldRef<"Session", 'DateTime'>
    readonly revoked: FieldRef<"Session", 'Boolean'>
    readonly modified: FieldRef<"Session", 'DateTime'>
    readonly created: FieldRef<"Session", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Session findUnique
   */
  export type SessionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findUniqueOrThrow
   */
  export type SessionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findFirst
   */
  export type SessionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findFirstOrThrow
   */
  export type SessionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findMany
   */
  export type SessionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Sessions to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session create
   */
  export type SessionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to create a Session.
     */
    data: XOR<SessionCreateInput, SessionUncheckedCreateInput>
  }

  /**
   * Session createMany
   */
  export type SessionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Session createManyAndReturn
   */
  export type SessionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Session update
   */
  export type SessionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to update a Session.
     */
    data: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
    /**
     * Choose, which Session to update.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session updateMany
   */
  export type SessionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to update.
     */
    limit?: number
  }

  /**
   * Session updateManyAndReturn
   */
  export type SessionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Session upsert
   */
  export type SessionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The filter to search for the Session to update in case it exists.
     */
    where: SessionWhereUniqueInput
    /**
     * In case the Session found by the `where` argument doesn't exist, create a new Session with this data.
     */
    create: XOR<SessionCreateInput, SessionUncheckedCreateInput>
    /**
     * In case the Session was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
  }

  /**
   * Session delete
   */
  export type SessionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter which Session to delete.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session deleteMany
   */
  export type SessionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sessions to delete
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to delete.
     */
    limit?: number
  }

  /**
   * Session.activities
   */
  export type Session$activitiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activity
     */
    select?: ActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Activity
     */
    omit?: ActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityInclude<ExtArgs> | null
    where?: ActivityWhereInput
    orderBy?: ActivityOrderByWithRelationInput | ActivityOrderByWithRelationInput[]
    cursor?: ActivityWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ActivityScalarFieldEnum | ActivityScalarFieldEnum[]
  }

  /**
   * Session without action
   */
  export type SessionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
  }


  /**
   * Model ApiKey
   */

  export type AggregateApiKey = {
    _count: ApiKeyCountAggregateOutputType | null
    _min: ApiKeyMinAggregateOutputType | null
    _max: ApiKeyMaxAggregateOutputType | null
  }

  export type ApiKeyMinAggregateOutputType = {
    id: string | null
    type: $Enums.API_KEY_TYPE | null
    name: string | null
    key: string | null
    hash: string | null
    enabled: boolean | null
    startDate: Date | null
    endDate: Date | null
    created: Date | null
    userId: string | null
  }

  export type ApiKeyMaxAggregateOutputType = {
    id: string | null
    type: $Enums.API_KEY_TYPE | null
    name: string | null
    key: string | null
    hash: string | null
    enabled: boolean | null
    startDate: Date | null
    endDate: Date | null
    created: Date | null
    userId: string | null
  }

  export type ApiKeyCountAggregateOutputType = {
    id: number
    type: number
    name: number
    key: number
    hash: number
    enabled: number
    startDate: number
    endDate: number
    created: number
    userId: number
    _all: number
  }


  export type ApiKeyMinAggregateInputType = {
    id?: true
    type?: true
    name?: true
    key?: true
    hash?: true
    enabled?: true
    startDate?: true
    endDate?: true
    created?: true
    userId?: true
  }

  export type ApiKeyMaxAggregateInputType = {
    id?: true
    type?: true
    name?: true
    key?: true
    hash?: true
    enabled?: true
    startDate?: true
    endDate?: true
    created?: true
    userId?: true
  }

  export type ApiKeyCountAggregateInputType = {
    id?: true
    type?: true
    name?: true
    key?: true
    hash?: true
    enabled?: true
    startDate?: true
    endDate?: true
    created?: true
    userId?: true
    _all?: true
  }

  export type ApiKeyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ApiKey to aggregate.
     */
    where?: ApiKeyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ApiKeys to fetch.
     */
    orderBy?: ApiKeyOrderByWithRelationInput | ApiKeyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ApiKeyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ApiKeys from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ApiKeys.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ApiKeys
    **/
    _count?: true | ApiKeyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ApiKeyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ApiKeyMaxAggregateInputType
  }

  export type GetApiKeyAggregateType<T extends ApiKeyAggregateArgs> = {
        [P in keyof T & keyof AggregateApiKey]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateApiKey[P]>
      : GetScalarType<T[P], AggregateApiKey[P]>
  }




  export type ApiKeyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ApiKeyWhereInput
    orderBy?: ApiKeyOrderByWithAggregationInput | ApiKeyOrderByWithAggregationInput[]
    by: ApiKeyScalarFieldEnum[] | ApiKeyScalarFieldEnum
    having?: ApiKeyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ApiKeyCountAggregateInputType | true
    _min?: ApiKeyMinAggregateInputType
    _max?: ApiKeyMaxAggregateInputType
  }

  export type ApiKeyGroupByOutputType = {
    id: string
    type: $Enums.API_KEY_TYPE
    name: string
    key: string
    hash: string
    enabled: boolean
    startDate: Date
    endDate: Date | null
    created: Date
    userId: string
    _count: ApiKeyCountAggregateOutputType | null
    _min: ApiKeyMinAggregateOutputType | null
    _max: ApiKeyMaxAggregateOutputType | null
  }

  type GetApiKeyGroupByPayload<T extends ApiKeyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ApiKeyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ApiKeyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ApiKeyGroupByOutputType[P]>
            : GetScalarType<T[P], ApiKeyGroupByOutputType[P]>
        }
      >
    >


  export type ApiKeySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    name?: boolean
    key?: boolean
    hash?: boolean
    enabled?: boolean
    startDate?: boolean
    endDate?: boolean
    created?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["apiKey"]>

  export type ApiKeySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    name?: boolean
    key?: boolean
    hash?: boolean
    enabled?: boolean
    startDate?: boolean
    endDate?: boolean
    created?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["apiKey"]>

  export type ApiKeySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    name?: boolean
    key?: boolean
    hash?: boolean
    enabled?: boolean
    startDate?: boolean
    endDate?: boolean
    created?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["apiKey"]>

  export type ApiKeySelectScalar = {
    id?: boolean
    type?: boolean
    name?: boolean
    key?: boolean
    hash?: boolean
    enabled?: boolean
    startDate?: boolean
    endDate?: boolean
    created?: boolean
    userId?: boolean
  }

  export type ApiKeyOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "type" | "name" | "key" | "hash" | "enabled" | "startDate" | "endDate" | "created" | "userId", ExtArgs["result"]["apiKey"]>
  export type ApiKeyInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ApiKeyIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ApiKeyIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ApiKeyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ApiKey"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      type: $Enums.API_KEY_TYPE
      name: string
      key: string
      hash: string
      enabled: boolean
      startDate: Date
      endDate: Date | null
      created: Date
      userId: string
    }, ExtArgs["result"]["apiKey"]>
    composites: {}
  }

  type ApiKeyGetPayload<S extends boolean | null | undefined | ApiKeyDefaultArgs> = $Result.GetResult<Prisma.$ApiKeyPayload, S>

  type ApiKeyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ApiKeyFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ApiKeyCountAggregateInputType | true
    }

  export interface ApiKeyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ApiKey'], meta: { name: 'ApiKey' } }
    /**
     * Find zero or one ApiKey that matches the filter.
     * @param {ApiKeyFindUniqueArgs} args - Arguments to find a ApiKey
     * @example
     * // Get one ApiKey
     * const apiKey = await prisma.apiKey.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ApiKeyFindUniqueArgs>(args: SelectSubset<T, ApiKeyFindUniqueArgs<ExtArgs>>): Prisma__ApiKeyClient<$Result.GetResult<Prisma.$ApiKeyPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ApiKey that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ApiKeyFindUniqueOrThrowArgs} args - Arguments to find a ApiKey
     * @example
     * // Get one ApiKey
     * const apiKey = await prisma.apiKey.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ApiKeyFindUniqueOrThrowArgs>(args: SelectSubset<T, ApiKeyFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ApiKeyClient<$Result.GetResult<Prisma.$ApiKeyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ApiKey that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApiKeyFindFirstArgs} args - Arguments to find a ApiKey
     * @example
     * // Get one ApiKey
     * const apiKey = await prisma.apiKey.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ApiKeyFindFirstArgs>(args?: SelectSubset<T, ApiKeyFindFirstArgs<ExtArgs>>): Prisma__ApiKeyClient<$Result.GetResult<Prisma.$ApiKeyPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ApiKey that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApiKeyFindFirstOrThrowArgs} args - Arguments to find a ApiKey
     * @example
     * // Get one ApiKey
     * const apiKey = await prisma.apiKey.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ApiKeyFindFirstOrThrowArgs>(args?: SelectSubset<T, ApiKeyFindFirstOrThrowArgs<ExtArgs>>): Prisma__ApiKeyClient<$Result.GetResult<Prisma.$ApiKeyPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ApiKeys that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApiKeyFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ApiKeys
     * const apiKeys = await prisma.apiKey.findMany()
     * 
     * // Get first 10 ApiKeys
     * const apiKeys = await prisma.apiKey.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const apiKeyWithIdOnly = await prisma.apiKey.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ApiKeyFindManyArgs>(args?: SelectSubset<T, ApiKeyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApiKeyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ApiKey.
     * @param {ApiKeyCreateArgs} args - Arguments to create a ApiKey.
     * @example
     * // Create one ApiKey
     * const ApiKey = await prisma.apiKey.create({
     *   data: {
     *     // ... data to create a ApiKey
     *   }
     * })
     * 
     */
    create<T extends ApiKeyCreateArgs>(args: SelectSubset<T, ApiKeyCreateArgs<ExtArgs>>): Prisma__ApiKeyClient<$Result.GetResult<Prisma.$ApiKeyPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ApiKeys.
     * @param {ApiKeyCreateManyArgs} args - Arguments to create many ApiKeys.
     * @example
     * // Create many ApiKeys
     * const apiKey = await prisma.apiKey.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ApiKeyCreateManyArgs>(args?: SelectSubset<T, ApiKeyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ApiKeys and returns the data saved in the database.
     * @param {ApiKeyCreateManyAndReturnArgs} args - Arguments to create many ApiKeys.
     * @example
     * // Create many ApiKeys
     * const apiKey = await prisma.apiKey.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ApiKeys and only return the `id`
     * const apiKeyWithIdOnly = await prisma.apiKey.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ApiKeyCreateManyAndReturnArgs>(args?: SelectSubset<T, ApiKeyCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApiKeyPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ApiKey.
     * @param {ApiKeyDeleteArgs} args - Arguments to delete one ApiKey.
     * @example
     * // Delete one ApiKey
     * const ApiKey = await prisma.apiKey.delete({
     *   where: {
     *     // ... filter to delete one ApiKey
     *   }
     * })
     * 
     */
    delete<T extends ApiKeyDeleteArgs>(args: SelectSubset<T, ApiKeyDeleteArgs<ExtArgs>>): Prisma__ApiKeyClient<$Result.GetResult<Prisma.$ApiKeyPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ApiKey.
     * @param {ApiKeyUpdateArgs} args - Arguments to update one ApiKey.
     * @example
     * // Update one ApiKey
     * const apiKey = await prisma.apiKey.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ApiKeyUpdateArgs>(args: SelectSubset<T, ApiKeyUpdateArgs<ExtArgs>>): Prisma__ApiKeyClient<$Result.GetResult<Prisma.$ApiKeyPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ApiKeys.
     * @param {ApiKeyDeleteManyArgs} args - Arguments to filter ApiKeys to delete.
     * @example
     * // Delete a few ApiKeys
     * const { count } = await prisma.apiKey.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ApiKeyDeleteManyArgs>(args?: SelectSubset<T, ApiKeyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ApiKeys.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApiKeyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ApiKeys
     * const apiKey = await prisma.apiKey.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ApiKeyUpdateManyArgs>(args: SelectSubset<T, ApiKeyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ApiKeys and returns the data updated in the database.
     * @param {ApiKeyUpdateManyAndReturnArgs} args - Arguments to update many ApiKeys.
     * @example
     * // Update many ApiKeys
     * const apiKey = await prisma.apiKey.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ApiKeys and only return the `id`
     * const apiKeyWithIdOnly = await prisma.apiKey.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ApiKeyUpdateManyAndReturnArgs>(args: SelectSubset<T, ApiKeyUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApiKeyPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ApiKey.
     * @param {ApiKeyUpsertArgs} args - Arguments to update or create a ApiKey.
     * @example
     * // Update or create a ApiKey
     * const apiKey = await prisma.apiKey.upsert({
     *   create: {
     *     // ... data to create a ApiKey
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ApiKey we want to update
     *   }
     * })
     */
    upsert<T extends ApiKeyUpsertArgs>(args: SelectSubset<T, ApiKeyUpsertArgs<ExtArgs>>): Prisma__ApiKeyClient<$Result.GetResult<Prisma.$ApiKeyPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ApiKeys.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApiKeyCountArgs} args - Arguments to filter ApiKeys to count.
     * @example
     * // Count the number of ApiKeys
     * const count = await prisma.apiKey.count({
     *   where: {
     *     // ... the filter for the ApiKeys we want to count
     *   }
     * })
    **/
    count<T extends ApiKeyCountArgs>(
      args?: Subset<T, ApiKeyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ApiKeyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ApiKey.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApiKeyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ApiKeyAggregateArgs>(args: Subset<T, ApiKeyAggregateArgs>): Prisma.PrismaPromise<GetApiKeyAggregateType<T>>

    /**
     * Group by ApiKey.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApiKeyGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ApiKeyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ApiKeyGroupByArgs['orderBy'] }
        : { orderBy?: ApiKeyGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ApiKeyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetApiKeyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ApiKey model
   */
  readonly fields: ApiKeyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ApiKey.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ApiKeyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ApiKey model
   */
  interface ApiKeyFieldRefs {
    readonly id: FieldRef<"ApiKey", 'String'>
    readonly type: FieldRef<"ApiKey", 'API_KEY_TYPE'>
    readonly name: FieldRef<"ApiKey", 'String'>
    readonly key: FieldRef<"ApiKey", 'String'>
    readonly hash: FieldRef<"ApiKey", 'String'>
    readonly enabled: FieldRef<"ApiKey", 'Boolean'>
    readonly startDate: FieldRef<"ApiKey", 'DateTime'>
    readonly endDate: FieldRef<"ApiKey", 'DateTime'>
    readonly created: FieldRef<"ApiKey", 'DateTime'>
    readonly userId: FieldRef<"ApiKey", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ApiKey findUnique
   */
  export type ApiKeyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiKey
     */
    select?: ApiKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiKey
     */
    omit?: ApiKeyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiKeyInclude<ExtArgs> | null
    /**
     * Filter, which ApiKey to fetch.
     */
    where: ApiKeyWhereUniqueInput
  }

  /**
   * ApiKey findUniqueOrThrow
   */
  export type ApiKeyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiKey
     */
    select?: ApiKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiKey
     */
    omit?: ApiKeyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiKeyInclude<ExtArgs> | null
    /**
     * Filter, which ApiKey to fetch.
     */
    where: ApiKeyWhereUniqueInput
  }

  /**
   * ApiKey findFirst
   */
  export type ApiKeyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiKey
     */
    select?: ApiKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiKey
     */
    omit?: ApiKeyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiKeyInclude<ExtArgs> | null
    /**
     * Filter, which ApiKey to fetch.
     */
    where?: ApiKeyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ApiKeys to fetch.
     */
    orderBy?: ApiKeyOrderByWithRelationInput | ApiKeyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ApiKeys.
     */
    cursor?: ApiKeyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ApiKeys from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ApiKeys.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ApiKeys.
     */
    distinct?: ApiKeyScalarFieldEnum | ApiKeyScalarFieldEnum[]
  }

  /**
   * ApiKey findFirstOrThrow
   */
  export type ApiKeyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiKey
     */
    select?: ApiKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiKey
     */
    omit?: ApiKeyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiKeyInclude<ExtArgs> | null
    /**
     * Filter, which ApiKey to fetch.
     */
    where?: ApiKeyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ApiKeys to fetch.
     */
    orderBy?: ApiKeyOrderByWithRelationInput | ApiKeyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ApiKeys.
     */
    cursor?: ApiKeyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ApiKeys from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ApiKeys.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ApiKeys.
     */
    distinct?: ApiKeyScalarFieldEnum | ApiKeyScalarFieldEnum[]
  }

  /**
   * ApiKey findMany
   */
  export type ApiKeyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiKey
     */
    select?: ApiKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiKey
     */
    omit?: ApiKeyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiKeyInclude<ExtArgs> | null
    /**
     * Filter, which ApiKeys to fetch.
     */
    where?: ApiKeyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ApiKeys to fetch.
     */
    orderBy?: ApiKeyOrderByWithRelationInput | ApiKeyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ApiKeys.
     */
    cursor?: ApiKeyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ApiKeys from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ApiKeys.
     */
    skip?: number
    distinct?: ApiKeyScalarFieldEnum | ApiKeyScalarFieldEnum[]
  }

  /**
   * ApiKey create
   */
  export type ApiKeyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiKey
     */
    select?: ApiKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiKey
     */
    omit?: ApiKeyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiKeyInclude<ExtArgs> | null
    /**
     * The data needed to create a ApiKey.
     */
    data: XOR<ApiKeyCreateInput, ApiKeyUncheckedCreateInput>
  }

  /**
   * ApiKey createMany
   */
  export type ApiKeyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ApiKeys.
     */
    data: ApiKeyCreateManyInput | ApiKeyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ApiKey createManyAndReturn
   */
  export type ApiKeyCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiKey
     */
    select?: ApiKeySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ApiKey
     */
    omit?: ApiKeyOmit<ExtArgs> | null
    /**
     * The data used to create many ApiKeys.
     */
    data: ApiKeyCreateManyInput | ApiKeyCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiKeyIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ApiKey update
   */
  export type ApiKeyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiKey
     */
    select?: ApiKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiKey
     */
    omit?: ApiKeyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiKeyInclude<ExtArgs> | null
    /**
     * The data needed to update a ApiKey.
     */
    data: XOR<ApiKeyUpdateInput, ApiKeyUncheckedUpdateInput>
    /**
     * Choose, which ApiKey to update.
     */
    where: ApiKeyWhereUniqueInput
  }

  /**
   * ApiKey updateMany
   */
  export type ApiKeyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ApiKeys.
     */
    data: XOR<ApiKeyUpdateManyMutationInput, ApiKeyUncheckedUpdateManyInput>
    /**
     * Filter which ApiKeys to update
     */
    where?: ApiKeyWhereInput
    /**
     * Limit how many ApiKeys to update.
     */
    limit?: number
  }

  /**
   * ApiKey updateManyAndReturn
   */
  export type ApiKeyUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiKey
     */
    select?: ApiKeySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ApiKey
     */
    omit?: ApiKeyOmit<ExtArgs> | null
    /**
     * The data used to update ApiKeys.
     */
    data: XOR<ApiKeyUpdateManyMutationInput, ApiKeyUncheckedUpdateManyInput>
    /**
     * Filter which ApiKeys to update
     */
    where?: ApiKeyWhereInput
    /**
     * Limit how many ApiKeys to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiKeyIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ApiKey upsert
   */
  export type ApiKeyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiKey
     */
    select?: ApiKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiKey
     */
    omit?: ApiKeyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiKeyInclude<ExtArgs> | null
    /**
     * The filter to search for the ApiKey to update in case it exists.
     */
    where: ApiKeyWhereUniqueInput
    /**
     * In case the ApiKey found by the `where` argument doesn't exist, create a new ApiKey with this data.
     */
    create: XOR<ApiKeyCreateInput, ApiKeyUncheckedCreateInput>
    /**
     * In case the ApiKey was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ApiKeyUpdateInput, ApiKeyUncheckedUpdateInput>
  }

  /**
   * ApiKey delete
   */
  export type ApiKeyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiKey
     */
    select?: ApiKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiKey
     */
    omit?: ApiKeyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiKeyInclude<ExtArgs> | null
    /**
     * Filter which ApiKey to delete.
     */
    where: ApiKeyWhereUniqueInput
  }

  /**
   * ApiKey deleteMany
   */
  export type ApiKeyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ApiKeys to delete
     */
    where?: ApiKeyWhereInput
    /**
     * Limit how many ApiKeys to delete.
     */
    limit?: number
  }

  /**
   * ApiKey without action
   */
  export type ApiKeyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiKey
     */
    select?: ApiKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiKey
     */
    omit?: ApiKeyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiKeyInclude<ExtArgs> | null
  }


  /**
   * Model Activity
   */

  export type AggregateActivity = {
    _count: ActivityCountAggregateOutputType | null
    _min: ActivityMinAggregateOutputType | null
    _max: ActivityMaxAggregateOutputType | null
  }

  export type ActivityMinAggregateOutputType = {
    id: string | null
    type: string | null
    description: string | null
    device: string | null
    ip: string | null
    sessionId: string | null
    createdById: string | null
    modified: Date | null
    created: Date | null
  }

  export type ActivityMaxAggregateOutputType = {
    id: string | null
    type: string | null
    description: string | null
    device: string | null
    ip: string | null
    sessionId: string | null
    createdById: string | null
    modified: Date | null
    created: Date | null
  }

  export type ActivityCountAggregateOutputType = {
    id: number
    type: number
    description: number
    device: number
    ip: number
    sessionId: number
    reference: number
    createdById: number
    modified: number
    created: number
    _all: number
  }


  export type ActivityMinAggregateInputType = {
    id?: true
    type?: true
    description?: true
    device?: true
    ip?: true
    sessionId?: true
    createdById?: true
    modified?: true
    created?: true
  }

  export type ActivityMaxAggregateInputType = {
    id?: true
    type?: true
    description?: true
    device?: true
    ip?: true
    sessionId?: true
    createdById?: true
    modified?: true
    created?: true
  }

  export type ActivityCountAggregateInputType = {
    id?: true
    type?: true
    description?: true
    device?: true
    ip?: true
    sessionId?: true
    reference?: true
    createdById?: true
    modified?: true
    created?: true
    _all?: true
  }

  export type ActivityAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Activity to aggregate.
     */
    where?: ActivityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Activities to fetch.
     */
    orderBy?: ActivityOrderByWithRelationInput | ActivityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ActivityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Activities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Activities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Activities
    **/
    _count?: true | ActivityCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ActivityMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ActivityMaxAggregateInputType
  }

  export type GetActivityAggregateType<T extends ActivityAggregateArgs> = {
        [P in keyof T & keyof AggregateActivity]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateActivity[P]>
      : GetScalarType<T[P], AggregateActivity[P]>
  }




  export type ActivityGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ActivityWhereInput
    orderBy?: ActivityOrderByWithAggregationInput | ActivityOrderByWithAggregationInput[]
    by: ActivityScalarFieldEnum[] | ActivityScalarFieldEnum
    having?: ActivityScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ActivityCountAggregateInputType | true
    _min?: ActivityMinAggregateInputType
    _max?: ActivityMaxAggregateInputType
  }

  export type ActivityGroupByOutputType = {
    id: string
    type: string
    description: string | null
    device: string
    ip: string
    sessionId: string | null
    reference: JsonValue | null
    createdById: string
    modified: Date
    created: Date
    _count: ActivityCountAggregateOutputType | null
    _min: ActivityMinAggregateOutputType | null
    _max: ActivityMaxAggregateOutputType | null
  }

  type GetActivityGroupByPayload<T extends ActivityGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ActivityGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ActivityGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ActivityGroupByOutputType[P]>
            : GetScalarType<T[P], ActivityGroupByOutputType[P]>
        }
      >
    >


  export type ActivitySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    description?: boolean
    device?: boolean
    ip?: boolean
    sessionId?: boolean
    reference?: boolean
    createdById?: boolean
    modified?: boolean
    created?: boolean
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
    session?: boolean | Activity$sessionArgs<ExtArgs>
  }, ExtArgs["result"]["activity"]>

  export type ActivitySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    description?: boolean
    device?: boolean
    ip?: boolean
    sessionId?: boolean
    reference?: boolean
    createdById?: boolean
    modified?: boolean
    created?: boolean
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
    session?: boolean | Activity$sessionArgs<ExtArgs>
  }, ExtArgs["result"]["activity"]>

  export type ActivitySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    description?: boolean
    device?: boolean
    ip?: boolean
    sessionId?: boolean
    reference?: boolean
    createdById?: boolean
    modified?: boolean
    created?: boolean
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
    session?: boolean | Activity$sessionArgs<ExtArgs>
  }, ExtArgs["result"]["activity"]>

  export type ActivitySelectScalar = {
    id?: boolean
    type?: boolean
    description?: boolean
    device?: boolean
    ip?: boolean
    sessionId?: boolean
    reference?: boolean
    createdById?: boolean
    modified?: boolean
    created?: boolean
  }

  export type ActivityOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "type" | "description" | "device" | "ip" | "sessionId" | "reference" | "createdById" | "modified" | "created", ExtArgs["result"]["activity"]>
  export type ActivityInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
    session?: boolean | Activity$sessionArgs<ExtArgs>
  }
  export type ActivityIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
    session?: boolean | Activity$sessionArgs<ExtArgs>
  }
  export type ActivityIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
    session?: boolean | Activity$sessionArgs<ExtArgs>
  }

  export type $ActivityPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Activity"
    objects: {
      createdBy: Prisma.$UserPayload<ExtArgs>
      session: Prisma.$SessionPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      type: string
      description: string | null
      device: string
      ip: string
      sessionId: string | null
      reference: Prisma.JsonValue | null
      createdById: string
      modified: Date
      created: Date
    }, ExtArgs["result"]["activity"]>
    composites: {}
  }

  type ActivityGetPayload<S extends boolean | null | undefined | ActivityDefaultArgs> = $Result.GetResult<Prisma.$ActivityPayload, S>

  type ActivityCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ActivityFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ActivityCountAggregateInputType | true
    }

  export interface ActivityDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Activity'], meta: { name: 'Activity' } }
    /**
     * Find zero or one Activity that matches the filter.
     * @param {ActivityFindUniqueArgs} args - Arguments to find a Activity
     * @example
     * // Get one Activity
     * const activity = await prisma.activity.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ActivityFindUniqueArgs>(args: SelectSubset<T, ActivityFindUniqueArgs<ExtArgs>>): Prisma__ActivityClient<$Result.GetResult<Prisma.$ActivityPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Activity that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ActivityFindUniqueOrThrowArgs} args - Arguments to find a Activity
     * @example
     * // Get one Activity
     * const activity = await prisma.activity.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ActivityFindUniqueOrThrowArgs>(args: SelectSubset<T, ActivityFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ActivityClient<$Result.GetResult<Prisma.$ActivityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Activity that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityFindFirstArgs} args - Arguments to find a Activity
     * @example
     * // Get one Activity
     * const activity = await prisma.activity.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ActivityFindFirstArgs>(args?: SelectSubset<T, ActivityFindFirstArgs<ExtArgs>>): Prisma__ActivityClient<$Result.GetResult<Prisma.$ActivityPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Activity that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityFindFirstOrThrowArgs} args - Arguments to find a Activity
     * @example
     * // Get one Activity
     * const activity = await prisma.activity.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ActivityFindFirstOrThrowArgs>(args?: SelectSubset<T, ActivityFindFirstOrThrowArgs<ExtArgs>>): Prisma__ActivityClient<$Result.GetResult<Prisma.$ActivityPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Activities that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Activities
     * const activities = await prisma.activity.findMany()
     * 
     * // Get first 10 Activities
     * const activities = await prisma.activity.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const activityWithIdOnly = await prisma.activity.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ActivityFindManyArgs>(args?: SelectSubset<T, ActivityFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActivityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Activity.
     * @param {ActivityCreateArgs} args - Arguments to create a Activity.
     * @example
     * // Create one Activity
     * const Activity = await prisma.activity.create({
     *   data: {
     *     // ... data to create a Activity
     *   }
     * })
     * 
     */
    create<T extends ActivityCreateArgs>(args: SelectSubset<T, ActivityCreateArgs<ExtArgs>>): Prisma__ActivityClient<$Result.GetResult<Prisma.$ActivityPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Activities.
     * @param {ActivityCreateManyArgs} args - Arguments to create many Activities.
     * @example
     * // Create many Activities
     * const activity = await prisma.activity.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ActivityCreateManyArgs>(args?: SelectSubset<T, ActivityCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Activities and returns the data saved in the database.
     * @param {ActivityCreateManyAndReturnArgs} args - Arguments to create many Activities.
     * @example
     * // Create many Activities
     * const activity = await prisma.activity.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Activities and only return the `id`
     * const activityWithIdOnly = await prisma.activity.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ActivityCreateManyAndReturnArgs>(args?: SelectSubset<T, ActivityCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActivityPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Activity.
     * @param {ActivityDeleteArgs} args - Arguments to delete one Activity.
     * @example
     * // Delete one Activity
     * const Activity = await prisma.activity.delete({
     *   where: {
     *     // ... filter to delete one Activity
     *   }
     * })
     * 
     */
    delete<T extends ActivityDeleteArgs>(args: SelectSubset<T, ActivityDeleteArgs<ExtArgs>>): Prisma__ActivityClient<$Result.GetResult<Prisma.$ActivityPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Activity.
     * @param {ActivityUpdateArgs} args - Arguments to update one Activity.
     * @example
     * // Update one Activity
     * const activity = await prisma.activity.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ActivityUpdateArgs>(args: SelectSubset<T, ActivityUpdateArgs<ExtArgs>>): Prisma__ActivityClient<$Result.GetResult<Prisma.$ActivityPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Activities.
     * @param {ActivityDeleteManyArgs} args - Arguments to filter Activities to delete.
     * @example
     * // Delete a few Activities
     * const { count } = await prisma.activity.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ActivityDeleteManyArgs>(args?: SelectSubset<T, ActivityDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Activities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Activities
     * const activity = await prisma.activity.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ActivityUpdateManyArgs>(args: SelectSubset<T, ActivityUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Activities and returns the data updated in the database.
     * @param {ActivityUpdateManyAndReturnArgs} args - Arguments to update many Activities.
     * @example
     * // Update many Activities
     * const activity = await prisma.activity.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Activities and only return the `id`
     * const activityWithIdOnly = await prisma.activity.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ActivityUpdateManyAndReturnArgs>(args: SelectSubset<T, ActivityUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActivityPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Activity.
     * @param {ActivityUpsertArgs} args - Arguments to update or create a Activity.
     * @example
     * // Update or create a Activity
     * const activity = await prisma.activity.upsert({
     *   create: {
     *     // ... data to create a Activity
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Activity we want to update
     *   }
     * })
     */
    upsert<T extends ActivityUpsertArgs>(args: SelectSubset<T, ActivityUpsertArgs<ExtArgs>>): Prisma__ActivityClient<$Result.GetResult<Prisma.$ActivityPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Activities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityCountArgs} args - Arguments to filter Activities to count.
     * @example
     * // Count the number of Activities
     * const count = await prisma.activity.count({
     *   where: {
     *     // ... the filter for the Activities we want to count
     *   }
     * })
    **/
    count<T extends ActivityCountArgs>(
      args?: Subset<T, ActivityCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ActivityCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Activity.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ActivityAggregateArgs>(args: Subset<T, ActivityAggregateArgs>): Prisma.PrismaPromise<GetActivityAggregateType<T>>

    /**
     * Group by Activity.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ActivityGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ActivityGroupByArgs['orderBy'] }
        : { orderBy?: ActivityGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ActivityGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetActivityGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Activity model
   */
  readonly fields: ActivityFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Activity.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ActivityClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    createdBy<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    session<T extends Activity$sessionArgs<ExtArgs> = {}>(args?: Subset<T, Activity$sessionArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Activity model
   */
  interface ActivityFieldRefs {
    readonly id: FieldRef<"Activity", 'String'>
    readonly type: FieldRef<"Activity", 'String'>
    readonly description: FieldRef<"Activity", 'String'>
    readonly device: FieldRef<"Activity", 'String'>
    readonly ip: FieldRef<"Activity", 'String'>
    readonly sessionId: FieldRef<"Activity", 'String'>
    readonly reference: FieldRef<"Activity", 'Json'>
    readonly createdById: FieldRef<"Activity", 'String'>
    readonly modified: FieldRef<"Activity", 'DateTime'>
    readonly created: FieldRef<"Activity", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Activity findUnique
   */
  export type ActivityFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activity
     */
    select?: ActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Activity
     */
    omit?: ActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityInclude<ExtArgs> | null
    /**
     * Filter, which Activity to fetch.
     */
    where: ActivityWhereUniqueInput
  }

  /**
   * Activity findUniqueOrThrow
   */
  export type ActivityFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activity
     */
    select?: ActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Activity
     */
    omit?: ActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityInclude<ExtArgs> | null
    /**
     * Filter, which Activity to fetch.
     */
    where: ActivityWhereUniqueInput
  }

  /**
   * Activity findFirst
   */
  export type ActivityFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activity
     */
    select?: ActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Activity
     */
    omit?: ActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityInclude<ExtArgs> | null
    /**
     * Filter, which Activity to fetch.
     */
    where?: ActivityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Activities to fetch.
     */
    orderBy?: ActivityOrderByWithRelationInput | ActivityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Activities.
     */
    cursor?: ActivityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Activities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Activities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Activities.
     */
    distinct?: ActivityScalarFieldEnum | ActivityScalarFieldEnum[]
  }

  /**
   * Activity findFirstOrThrow
   */
  export type ActivityFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activity
     */
    select?: ActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Activity
     */
    omit?: ActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityInclude<ExtArgs> | null
    /**
     * Filter, which Activity to fetch.
     */
    where?: ActivityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Activities to fetch.
     */
    orderBy?: ActivityOrderByWithRelationInput | ActivityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Activities.
     */
    cursor?: ActivityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Activities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Activities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Activities.
     */
    distinct?: ActivityScalarFieldEnum | ActivityScalarFieldEnum[]
  }

  /**
   * Activity findMany
   */
  export type ActivityFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activity
     */
    select?: ActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Activity
     */
    omit?: ActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityInclude<ExtArgs> | null
    /**
     * Filter, which Activities to fetch.
     */
    where?: ActivityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Activities to fetch.
     */
    orderBy?: ActivityOrderByWithRelationInput | ActivityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Activities.
     */
    cursor?: ActivityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Activities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Activities.
     */
    skip?: number
    distinct?: ActivityScalarFieldEnum | ActivityScalarFieldEnum[]
  }

  /**
   * Activity create
   */
  export type ActivityCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activity
     */
    select?: ActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Activity
     */
    omit?: ActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityInclude<ExtArgs> | null
    /**
     * The data needed to create a Activity.
     */
    data: XOR<ActivityCreateInput, ActivityUncheckedCreateInput>
  }

  /**
   * Activity createMany
   */
  export type ActivityCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Activities.
     */
    data: ActivityCreateManyInput | ActivityCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Activity createManyAndReturn
   */
  export type ActivityCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activity
     */
    select?: ActivitySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Activity
     */
    omit?: ActivityOmit<ExtArgs> | null
    /**
     * The data used to create many Activities.
     */
    data: ActivityCreateManyInput | ActivityCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Activity update
   */
  export type ActivityUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activity
     */
    select?: ActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Activity
     */
    omit?: ActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityInclude<ExtArgs> | null
    /**
     * The data needed to update a Activity.
     */
    data: XOR<ActivityUpdateInput, ActivityUncheckedUpdateInput>
    /**
     * Choose, which Activity to update.
     */
    where: ActivityWhereUniqueInput
  }

  /**
   * Activity updateMany
   */
  export type ActivityUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Activities.
     */
    data: XOR<ActivityUpdateManyMutationInput, ActivityUncheckedUpdateManyInput>
    /**
     * Filter which Activities to update
     */
    where?: ActivityWhereInput
    /**
     * Limit how many Activities to update.
     */
    limit?: number
  }

  /**
   * Activity updateManyAndReturn
   */
  export type ActivityUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activity
     */
    select?: ActivitySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Activity
     */
    omit?: ActivityOmit<ExtArgs> | null
    /**
     * The data used to update Activities.
     */
    data: XOR<ActivityUpdateManyMutationInput, ActivityUncheckedUpdateManyInput>
    /**
     * Filter which Activities to update
     */
    where?: ActivityWhereInput
    /**
     * Limit how many Activities to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Activity upsert
   */
  export type ActivityUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activity
     */
    select?: ActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Activity
     */
    omit?: ActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityInclude<ExtArgs> | null
    /**
     * The filter to search for the Activity to update in case it exists.
     */
    where: ActivityWhereUniqueInput
    /**
     * In case the Activity found by the `where` argument doesn't exist, create a new Activity with this data.
     */
    create: XOR<ActivityCreateInput, ActivityUncheckedCreateInput>
    /**
     * In case the Activity was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ActivityUpdateInput, ActivityUncheckedUpdateInput>
  }

  /**
   * Activity delete
   */
  export type ActivityDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activity
     */
    select?: ActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Activity
     */
    omit?: ActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityInclude<ExtArgs> | null
    /**
     * Filter which Activity to delete.
     */
    where: ActivityWhereUniqueInput
  }

  /**
   * Activity deleteMany
   */
  export type ActivityDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Activities to delete
     */
    where?: ActivityWhereInput
    /**
     * Limit how many Activities to delete.
     */
    limit?: number
  }

  /**
   * Activity.session
   */
  export type Activity$sessionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    where?: SessionWhereInput
  }

  /**
   * Activity without action
   */
  export type ActivityDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activity
     */
    select?: ActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Activity
     */
    omit?: ActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityInclude<ExtArgs> | null
  }


  /**
   * Model I18n
   */

  export type AggregateI18n = {
    _count: I18nCountAggregateOutputType | null
    _min: I18nMinAggregateOutputType | null
    _max: I18nMaxAggregateOutputType | null
  }

  export type I18nMinAggregateOutputType = {
    id: string | null
    key: string | null
    en: string | null
    zh: string | null
    vi: string | null
    ko: string | null
  }

  export type I18nMaxAggregateOutputType = {
    id: string | null
    key: string | null
    en: string | null
    zh: string | null
    vi: string | null
    ko: string | null
  }

  export type I18nCountAggregateOutputType = {
    id: number
    key: number
    en: number
    zh: number
    vi: number
    ko: number
    _all: number
  }


  export type I18nMinAggregateInputType = {
    id?: true
    key?: true
    en?: true
    zh?: true
    vi?: true
    ko?: true
  }

  export type I18nMaxAggregateInputType = {
    id?: true
    key?: true
    en?: true
    zh?: true
    vi?: true
    ko?: true
  }

  export type I18nCountAggregateInputType = {
    id?: true
    key?: true
    en?: true
    zh?: true
    vi?: true
    ko?: true
    _all?: true
  }

  export type I18nAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which I18n to aggregate.
     */
    where?: I18nWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of I18ns to fetch.
     */
    orderBy?: I18nOrderByWithRelationInput | I18nOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: I18nWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` I18ns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` I18ns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned I18ns
    **/
    _count?: true | I18nCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: I18nMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: I18nMaxAggregateInputType
  }

  export type GetI18nAggregateType<T extends I18nAggregateArgs> = {
        [P in keyof T & keyof AggregateI18n]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateI18n[P]>
      : GetScalarType<T[P], AggregateI18n[P]>
  }




  export type I18nGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: I18nWhereInput
    orderBy?: I18nOrderByWithAggregationInput | I18nOrderByWithAggregationInput[]
    by: I18nScalarFieldEnum[] | I18nScalarFieldEnum
    having?: I18nScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: I18nCountAggregateInputType | true
    _min?: I18nMinAggregateInputType
    _max?: I18nMaxAggregateInputType
  }

  export type I18nGroupByOutputType = {
    id: string
    key: string
    en: string | null
    zh: string | null
    vi: string | null
    ko: string | null
    _count: I18nCountAggregateOutputType | null
    _min: I18nMinAggregateOutputType | null
    _max: I18nMaxAggregateOutputType | null
  }

  type GetI18nGroupByPayload<T extends I18nGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<I18nGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof I18nGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], I18nGroupByOutputType[P]>
            : GetScalarType<T[P], I18nGroupByOutputType[P]>
        }
      >
    >


  export type I18nSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    key?: boolean
    en?: boolean
    zh?: boolean
    vi?: boolean
    ko?: boolean
  }, ExtArgs["result"]["i18n"]>

  export type I18nSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    key?: boolean
    en?: boolean
    zh?: boolean
    vi?: boolean
    ko?: boolean
  }, ExtArgs["result"]["i18n"]>

  export type I18nSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    key?: boolean
    en?: boolean
    zh?: boolean
    vi?: boolean
    ko?: boolean
  }, ExtArgs["result"]["i18n"]>

  export type I18nSelectScalar = {
    id?: boolean
    key?: boolean
    en?: boolean
    zh?: boolean
    vi?: boolean
    ko?: boolean
  }

  export type I18nOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "key" | "en" | "zh" | "vi" | "ko", ExtArgs["result"]["i18n"]>

  export type $I18nPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "I18n"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      key: string
      en: string | null
      zh: string | null
      vi: string | null
      ko: string | null
    }, ExtArgs["result"]["i18n"]>
    composites: {}
  }

  type I18nGetPayload<S extends boolean | null | undefined | I18nDefaultArgs> = $Result.GetResult<Prisma.$I18nPayload, S>

  type I18nCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<I18nFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: I18nCountAggregateInputType | true
    }

  export interface I18nDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['I18n'], meta: { name: 'I18n' } }
    /**
     * Find zero or one I18n that matches the filter.
     * @param {I18nFindUniqueArgs} args - Arguments to find a I18n
     * @example
     * // Get one I18n
     * const i18n = await prisma.i18n.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends I18nFindUniqueArgs>(args: SelectSubset<T, I18nFindUniqueArgs<ExtArgs>>): Prisma__I18nClient<$Result.GetResult<Prisma.$I18nPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one I18n that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {I18nFindUniqueOrThrowArgs} args - Arguments to find a I18n
     * @example
     * // Get one I18n
     * const i18n = await prisma.i18n.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends I18nFindUniqueOrThrowArgs>(args: SelectSubset<T, I18nFindUniqueOrThrowArgs<ExtArgs>>): Prisma__I18nClient<$Result.GetResult<Prisma.$I18nPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first I18n that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {I18nFindFirstArgs} args - Arguments to find a I18n
     * @example
     * // Get one I18n
     * const i18n = await prisma.i18n.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends I18nFindFirstArgs>(args?: SelectSubset<T, I18nFindFirstArgs<ExtArgs>>): Prisma__I18nClient<$Result.GetResult<Prisma.$I18nPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first I18n that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {I18nFindFirstOrThrowArgs} args - Arguments to find a I18n
     * @example
     * // Get one I18n
     * const i18n = await prisma.i18n.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends I18nFindFirstOrThrowArgs>(args?: SelectSubset<T, I18nFindFirstOrThrowArgs<ExtArgs>>): Prisma__I18nClient<$Result.GetResult<Prisma.$I18nPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more I18ns that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {I18nFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all I18ns
     * const i18ns = await prisma.i18n.findMany()
     * 
     * // Get first 10 I18ns
     * const i18ns = await prisma.i18n.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const i18nWithIdOnly = await prisma.i18n.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends I18nFindManyArgs>(args?: SelectSubset<T, I18nFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$I18nPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a I18n.
     * @param {I18nCreateArgs} args - Arguments to create a I18n.
     * @example
     * // Create one I18n
     * const I18n = await prisma.i18n.create({
     *   data: {
     *     // ... data to create a I18n
     *   }
     * })
     * 
     */
    create<T extends I18nCreateArgs>(args: SelectSubset<T, I18nCreateArgs<ExtArgs>>): Prisma__I18nClient<$Result.GetResult<Prisma.$I18nPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many I18ns.
     * @param {I18nCreateManyArgs} args - Arguments to create many I18ns.
     * @example
     * // Create many I18ns
     * const i18n = await prisma.i18n.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends I18nCreateManyArgs>(args?: SelectSubset<T, I18nCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many I18ns and returns the data saved in the database.
     * @param {I18nCreateManyAndReturnArgs} args - Arguments to create many I18ns.
     * @example
     * // Create many I18ns
     * const i18n = await prisma.i18n.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many I18ns and only return the `id`
     * const i18nWithIdOnly = await prisma.i18n.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends I18nCreateManyAndReturnArgs>(args?: SelectSubset<T, I18nCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$I18nPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a I18n.
     * @param {I18nDeleteArgs} args - Arguments to delete one I18n.
     * @example
     * // Delete one I18n
     * const I18n = await prisma.i18n.delete({
     *   where: {
     *     // ... filter to delete one I18n
     *   }
     * })
     * 
     */
    delete<T extends I18nDeleteArgs>(args: SelectSubset<T, I18nDeleteArgs<ExtArgs>>): Prisma__I18nClient<$Result.GetResult<Prisma.$I18nPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one I18n.
     * @param {I18nUpdateArgs} args - Arguments to update one I18n.
     * @example
     * // Update one I18n
     * const i18n = await prisma.i18n.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends I18nUpdateArgs>(args: SelectSubset<T, I18nUpdateArgs<ExtArgs>>): Prisma__I18nClient<$Result.GetResult<Prisma.$I18nPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more I18ns.
     * @param {I18nDeleteManyArgs} args - Arguments to filter I18ns to delete.
     * @example
     * // Delete a few I18ns
     * const { count } = await prisma.i18n.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends I18nDeleteManyArgs>(args?: SelectSubset<T, I18nDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more I18ns.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {I18nUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many I18ns
     * const i18n = await prisma.i18n.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends I18nUpdateManyArgs>(args: SelectSubset<T, I18nUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more I18ns and returns the data updated in the database.
     * @param {I18nUpdateManyAndReturnArgs} args - Arguments to update many I18ns.
     * @example
     * // Update many I18ns
     * const i18n = await prisma.i18n.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more I18ns and only return the `id`
     * const i18nWithIdOnly = await prisma.i18n.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends I18nUpdateManyAndReturnArgs>(args: SelectSubset<T, I18nUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$I18nPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one I18n.
     * @param {I18nUpsertArgs} args - Arguments to update or create a I18n.
     * @example
     * // Update or create a I18n
     * const i18n = await prisma.i18n.upsert({
     *   create: {
     *     // ... data to create a I18n
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the I18n we want to update
     *   }
     * })
     */
    upsert<T extends I18nUpsertArgs>(args: SelectSubset<T, I18nUpsertArgs<ExtArgs>>): Prisma__I18nClient<$Result.GetResult<Prisma.$I18nPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of I18ns.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {I18nCountArgs} args - Arguments to filter I18ns to count.
     * @example
     * // Count the number of I18ns
     * const count = await prisma.i18n.count({
     *   where: {
     *     // ... the filter for the I18ns we want to count
     *   }
     * })
    **/
    count<T extends I18nCountArgs>(
      args?: Subset<T, I18nCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], I18nCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a I18n.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {I18nAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends I18nAggregateArgs>(args: Subset<T, I18nAggregateArgs>): Prisma.PrismaPromise<GetI18nAggregateType<T>>

    /**
     * Group by I18n.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {I18nGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends I18nGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: I18nGroupByArgs['orderBy'] }
        : { orderBy?: I18nGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, I18nGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetI18nGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the I18n model
   */
  readonly fields: I18nFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for I18n.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__I18nClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the I18n model
   */
  interface I18nFieldRefs {
    readonly id: FieldRef<"I18n", 'String'>
    readonly key: FieldRef<"I18n", 'String'>
    readonly en: FieldRef<"I18n", 'String'>
    readonly zh: FieldRef<"I18n", 'String'>
    readonly vi: FieldRef<"I18n", 'String'>
    readonly ko: FieldRef<"I18n", 'String'>
  }
    

  // Custom InputTypes
  /**
   * I18n findUnique
   */
  export type I18nFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the I18n
     */
    select?: I18nSelect<ExtArgs> | null
    /**
     * Omit specific fields from the I18n
     */
    omit?: I18nOmit<ExtArgs> | null
    /**
     * Filter, which I18n to fetch.
     */
    where: I18nWhereUniqueInput
  }

  /**
   * I18n findUniqueOrThrow
   */
  export type I18nFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the I18n
     */
    select?: I18nSelect<ExtArgs> | null
    /**
     * Omit specific fields from the I18n
     */
    omit?: I18nOmit<ExtArgs> | null
    /**
     * Filter, which I18n to fetch.
     */
    where: I18nWhereUniqueInput
  }

  /**
   * I18n findFirst
   */
  export type I18nFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the I18n
     */
    select?: I18nSelect<ExtArgs> | null
    /**
     * Omit specific fields from the I18n
     */
    omit?: I18nOmit<ExtArgs> | null
    /**
     * Filter, which I18n to fetch.
     */
    where?: I18nWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of I18ns to fetch.
     */
    orderBy?: I18nOrderByWithRelationInput | I18nOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for I18ns.
     */
    cursor?: I18nWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` I18ns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` I18ns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of I18ns.
     */
    distinct?: I18nScalarFieldEnum | I18nScalarFieldEnum[]
  }

  /**
   * I18n findFirstOrThrow
   */
  export type I18nFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the I18n
     */
    select?: I18nSelect<ExtArgs> | null
    /**
     * Omit specific fields from the I18n
     */
    omit?: I18nOmit<ExtArgs> | null
    /**
     * Filter, which I18n to fetch.
     */
    where?: I18nWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of I18ns to fetch.
     */
    orderBy?: I18nOrderByWithRelationInput | I18nOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for I18ns.
     */
    cursor?: I18nWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` I18ns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` I18ns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of I18ns.
     */
    distinct?: I18nScalarFieldEnum | I18nScalarFieldEnum[]
  }

  /**
   * I18n findMany
   */
  export type I18nFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the I18n
     */
    select?: I18nSelect<ExtArgs> | null
    /**
     * Omit specific fields from the I18n
     */
    omit?: I18nOmit<ExtArgs> | null
    /**
     * Filter, which I18ns to fetch.
     */
    where?: I18nWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of I18ns to fetch.
     */
    orderBy?: I18nOrderByWithRelationInput | I18nOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing I18ns.
     */
    cursor?: I18nWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` I18ns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` I18ns.
     */
    skip?: number
    distinct?: I18nScalarFieldEnum | I18nScalarFieldEnum[]
  }

  /**
   * I18n create
   */
  export type I18nCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the I18n
     */
    select?: I18nSelect<ExtArgs> | null
    /**
     * Omit specific fields from the I18n
     */
    omit?: I18nOmit<ExtArgs> | null
    /**
     * The data needed to create a I18n.
     */
    data: XOR<I18nCreateInput, I18nUncheckedCreateInput>
  }

  /**
   * I18n createMany
   */
  export type I18nCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many I18ns.
     */
    data: I18nCreateManyInput | I18nCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * I18n createManyAndReturn
   */
  export type I18nCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the I18n
     */
    select?: I18nSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the I18n
     */
    omit?: I18nOmit<ExtArgs> | null
    /**
     * The data used to create many I18ns.
     */
    data: I18nCreateManyInput | I18nCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * I18n update
   */
  export type I18nUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the I18n
     */
    select?: I18nSelect<ExtArgs> | null
    /**
     * Omit specific fields from the I18n
     */
    omit?: I18nOmit<ExtArgs> | null
    /**
     * The data needed to update a I18n.
     */
    data: XOR<I18nUpdateInput, I18nUncheckedUpdateInput>
    /**
     * Choose, which I18n to update.
     */
    where: I18nWhereUniqueInput
  }

  /**
   * I18n updateMany
   */
  export type I18nUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update I18ns.
     */
    data: XOR<I18nUpdateManyMutationInput, I18nUncheckedUpdateManyInput>
    /**
     * Filter which I18ns to update
     */
    where?: I18nWhereInput
    /**
     * Limit how many I18ns to update.
     */
    limit?: number
  }

  /**
   * I18n updateManyAndReturn
   */
  export type I18nUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the I18n
     */
    select?: I18nSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the I18n
     */
    omit?: I18nOmit<ExtArgs> | null
    /**
     * The data used to update I18ns.
     */
    data: XOR<I18nUpdateManyMutationInput, I18nUncheckedUpdateManyInput>
    /**
     * Filter which I18ns to update
     */
    where?: I18nWhereInput
    /**
     * Limit how many I18ns to update.
     */
    limit?: number
  }

  /**
   * I18n upsert
   */
  export type I18nUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the I18n
     */
    select?: I18nSelect<ExtArgs> | null
    /**
     * Omit specific fields from the I18n
     */
    omit?: I18nOmit<ExtArgs> | null
    /**
     * The filter to search for the I18n to update in case it exists.
     */
    where: I18nWhereUniqueInput
    /**
     * In case the I18n found by the `where` argument doesn't exist, create a new I18n with this data.
     */
    create: XOR<I18nCreateInput, I18nUncheckedCreateInput>
    /**
     * In case the I18n was found with the provided `where` argument, update it with this data.
     */
    update: XOR<I18nUpdateInput, I18nUncheckedUpdateInput>
  }

  /**
   * I18n delete
   */
  export type I18nDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the I18n
     */
    select?: I18nSelect<ExtArgs> | null
    /**
     * Omit specific fields from the I18n
     */
    omit?: I18nOmit<ExtArgs> | null
    /**
     * Filter which I18n to delete.
     */
    where: I18nWhereUniqueInput
  }

  /**
   * I18n deleteMany
   */
  export type I18nDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which I18ns to delete
     */
    where?: I18nWhereInput
    /**
     * Limit how many I18ns to delete.
     */
    limit?: number
  }

  /**
   * I18n without action
   */
  export type I18nDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the I18n
     */
    select?: I18nSelect<ExtArgs> | null
    /**
     * Omit specific fields from the I18n
     */
    omit?: I18nOmit<ExtArgs> | null
  }


  /**
   * Model IPWhitelist
   */

  export type AggregateIPWhitelist = {
    _count: IPWhitelistCountAggregateOutputType | null
    _min: IPWhitelistMinAggregateOutputType | null
    _max: IPWhitelistMaxAggregateOutputType | null
  }

  export type IPWhitelistMinAggregateOutputType = {
    id: string | null
    ip: string | null
    note: string | null
  }

  export type IPWhitelistMaxAggregateOutputType = {
    id: string | null
    ip: string | null
    note: string | null
  }

  export type IPWhitelistCountAggregateOutputType = {
    id: number
    ip: number
    note: number
    _all: number
  }


  export type IPWhitelistMinAggregateInputType = {
    id?: true
    ip?: true
    note?: true
  }

  export type IPWhitelistMaxAggregateInputType = {
    id?: true
    ip?: true
    note?: true
  }

  export type IPWhitelistCountAggregateInputType = {
    id?: true
    ip?: true
    note?: true
    _all?: true
  }

  export type IPWhitelistAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which IPWhitelist to aggregate.
     */
    where?: IPWhitelistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IPWhitelists to fetch.
     */
    orderBy?: IPWhitelistOrderByWithRelationInput | IPWhitelistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: IPWhitelistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IPWhitelists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IPWhitelists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned IPWhitelists
    **/
    _count?: true | IPWhitelistCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: IPWhitelistMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: IPWhitelistMaxAggregateInputType
  }

  export type GetIPWhitelistAggregateType<T extends IPWhitelistAggregateArgs> = {
        [P in keyof T & keyof AggregateIPWhitelist]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateIPWhitelist[P]>
      : GetScalarType<T[P], AggregateIPWhitelist[P]>
  }




  export type IPWhitelistGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: IPWhitelistWhereInput
    orderBy?: IPWhitelistOrderByWithAggregationInput | IPWhitelistOrderByWithAggregationInput[]
    by: IPWhitelistScalarFieldEnum[] | IPWhitelistScalarFieldEnum
    having?: IPWhitelistScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: IPWhitelistCountAggregateInputType | true
    _min?: IPWhitelistMinAggregateInputType
    _max?: IPWhitelistMaxAggregateInputType
  }

  export type IPWhitelistGroupByOutputType = {
    id: string
    ip: string
    note: string | null
    _count: IPWhitelistCountAggregateOutputType | null
    _min: IPWhitelistMinAggregateOutputType | null
    _max: IPWhitelistMaxAggregateOutputType | null
  }

  type GetIPWhitelistGroupByPayload<T extends IPWhitelistGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<IPWhitelistGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof IPWhitelistGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], IPWhitelistGroupByOutputType[P]>
            : GetScalarType<T[P], IPWhitelistGroupByOutputType[P]>
        }
      >
    >


  export type IPWhitelistSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ip?: boolean
    note?: boolean
  }, ExtArgs["result"]["iPWhitelist"]>

  export type IPWhitelistSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ip?: boolean
    note?: boolean
  }, ExtArgs["result"]["iPWhitelist"]>

  export type IPWhitelistSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ip?: boolean
    note?: boolean
  }, ExtArgs["result"]["iPWhitelist"]>

  export type IPWhitelistSelectScalar = {
    id?: boolean
    ip?: boolean
    note?: boolean
  }

  export type IPWhitelistOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "ip" | "note", ExtArgs["result"]["iPWhitelist"]>

  export type $IPWhitelistPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "IPWhitelist"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      ip: string
      note: string | null
    }, ExtArgs["result"]["iPWhitelist"]>
    composites: {}
  }

  type IPWhitelistGetPayload<S extends boolean | null | undefined | IPWhitelistDefaultArgs> = $Result.GetResult<Prisma.$IPWhitelistPayload, S>

  type IPWhitelistCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<IPWhitelistFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: IPWhitelistCountAggregateInputType | true
    }

  export interface IPWhitelistDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['IPWhitelist'], meta: { name: 'IPWhitelist' } }
    /**
     * Find zero or one IPWhitelist that matches the filter.
     * @param {IPWhitelistFindUniqueArgs} args - Arguments to find a IPWhitelist
     * @example
     * // Get one IPWhitelist
     * const iPWhitelist = await prisma.iPWhitelist.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends IPWhitelistFindUniqueArgs>(args: SelectSubset<T, IPWhitelistFindUniqueArgs<ExtArgs>>): Prisma__IPWhitelistClient<$Result.GetResult<Prisma.$IPWhitelistPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one IPWhitelist that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {IPWhitelistFindUniqueOrThrowArgs} args - Arguments to find a IPWhitelist
     * @example
     * // Get one IPWhitelist
     * const iPWhitelist = await prisma.iPWhitelist.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends IPWhitelistFindUniqueOrThrowArgs>(args: SelectSubset<T, IPWhitelistFindUniqueOrThrowArgs<ExtArgs>>): Prisma__IPWhitelistClient<$Result.GetResult<Prisma.$IPWhitelistPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first IPWhitelist that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IPWhitelistFindFirstArgs} args - Arguments to find a IPWhitelist
     * @example
     * // Get one IPWhitelist
     * const iPWhitelist = await prisma.iPWhitelist.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends IPWhitelistFindFirstArgs>(args?: SelectSubset<T, IPWhitelistFindFirstArgs<ExtArgs>>): Prisma__IPWhitelistClient<$Result.GetResult<Prisma.$IPWhitelistPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first IPWhitelist that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IPWhitelistFindFirstOrThrowArgs} args - Arguments to find a IPWhitelist
     * @example
     * // Get one IPWhitelist
     * const iPWhitelist = await prisma.iPWhitelist.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends IPWhitelistFindFirstOrThrowArgs>(args?: SelectSubset<T, IPWhitelistFindFirstOrThrowArgs<ExtArgs>>): Prisma__IPWhitelistClient<$Result.GetResult<Prisma.$IPWhitelistPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more IPWhitelists that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IPWhitelistFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all IPWhitelists
     * const iPWhitelists = await prisma.iPWhitelist.findMany()
     * 
     * // Get first 10 IPWhitelists
     * const iPWhitelists = await prisma.iPWhitelist.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const iPWhitelistWithIdOnly = await prisma.iPWhitelist.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends IPWhitelistFindManyArgs>(args?: SelectSubset<T, IPWhitelistFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IPWhitelistPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a IPWhitelist.
     * @param {IPWhitelistCreateArgs} args - Arguments to create a IPWhitelist.
     * @example
     * // Create one IPWhitelist
     * const IPWhitelist = await prisma.iPWhitelist.create({
     *   data: {
     *     // ... data to create a IPWhitelist
     *   }
     * })
     * 
     */
    create<T extends IPWhitelistCreateArgs>(args: SelectSubset<T, IPWhitelistCreateArgs<ExtArgs>>): Prisma__IPWhitelistClient<$Result.GetResult<Prisma.$IPWhitelistPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many IPWhitelists.
     * @param {IPWhitelistCreateManyArgs} args - Arguments to create many IPWhitelists.
     * @example
     * // Create many IPWhitelists
     * const iPWhitelist = await prisma.iPWhitelist.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends IPWhitelistCreateManyArgs>(args?: SelectSubset<T, IPWhitelistCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many IPWhitelists and returns the data saved in the database.
     * @param {IPWhitelistCreateManyAndReturnArgs} args - Arguments to create many IPWhitelists.
     * @example
     * // Create many IPWhitelists
     * const iPWhitelist = await prisma.iPWhitelist.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many IPWhitelists and only return the `id`
     * const iPWhitelistWithIdOnly = await prisma.iPWhitelist.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends IPWhitelistCreateManyAndReturnArgs>(args?: SelectSubset<T, IPWhitelistCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IPWhitelistPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a IPWhitelist.
     * @param {IPWhitelistDeleteArgs} args - Arguments to delete one IPWhitelist.
     * @example
     * // Delete one IPWhitelist
     * const IPWhitelist = await prisma.iPWhitelist.delete({
     *   where: {
     *     // ... filter to delete one IPWhitelist
     *   }
     * })
     * 
     */
    delete<T extends IPWhitelistDeleteArgs>(args: SelectSubset<T, IPWhitelistDeleteArgs<ExtArgs>>): Prisma__IPWhitelistClient<$Result.GetResult<Prisma.$IPWhitelistPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one IPWhitelist.
     * @param {IPWhitelistUpdateArgs} args - Arguments to update one IPWhitelist.
     * @example
     * // Update one IPWhitelist
     * const iPWhitelist = await prisma.iPWhitelist.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends IPWhitelistUpdateArgs>(args: SelectSubset<T, IPWhitelistUpdateArgs<ExtArgs>>): Prisma__IPWhitelistClient<$Result.GetResult<Prisma.$IPWhitelistPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more IPWhitelists.
     * @param {IPWhitelistDeleteManyArgs} args - Arguments to filter IPWhitelists to delete.
     * @example
     * // Delete a few IPWhitelists
     * const { count } = await prisma.iPWhitelist.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends IPWhitelistDeleteManyArgs>(args?: SelectSubset<T, IPWhitelistDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more IPWhitelists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IPWhitelistUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many IPWhitelists
     * const iPWhitelist = await prisma.iPWhitelist.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends IPWhitelistUpdateManyArgs>(args: SelectSubset<T, IPWhitelistUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more IPWhitelists and returns the data updated in the database.
     * @param {IPWhitelistUpdateManyAndReturnArgs} args - Arguments to update many IPWhitelists.
     * @example
     * // Update many IPWhitelists
     * const iPWhitelist = await prisma.iPWhitelist.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more IPWhitelists and only return the `id`
     * const iPWhitelistWithIdOnly = await prisma.iPWhitelist.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends IPWhitelistUpdateManyAndReturnArgs>(args: SelectSubset<T, IPWhitelistUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IPWhitelistPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one IPWhitelist.
     * @param {IPWhitelistUpsertArgs} args - Arguments to update or create a IPWhitelist.
     * @example
     * // Update or create a IPWhitelist
     * const iPWhitelist = await prisma.iPWhitelist.upsert({
     *   create: {
     *     // ... data to create a IPWhitelist
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the IPWhitelist we want to update
     *   }
     * })
     */
    upsert<T extends IPWhitelistUpsertArgs>(args: SelectSubset<T, IPWhitelistUpsertArgs<ExtArgs>>): Prisma__IPWhitelistClient<$Result.GetResult<Prisma.$IPWhitelistPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of IPWhitelists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IPWhitelistCountArgs} args - Arguments to filter IPWhitelists to count.
     * @example
     * // Count the number of IPWhitelists
     * const count = await prisma.iPWhitelist.count({
     *   where: {
     *     // ... the filter for the IPWhitelists we want to count
     *   }
     * })
    **/
    count<T extends IPWhitelistCountArgs>(
      args?: Subset<T, IPWhitelistCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], IPWhitelistCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a IPWhitelist.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IPWhitelistAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends IPWhitelistAggregateArgs>(args: Subset<T, IPWhitelistAggregateArgs>): Prisma.PrismaPromise<GetIPWhitelistAggregateType<T>>

    /**
     * Group by IPWhitelist.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IPWhitelistGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends IPWhitelistGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: IPWhitelistGroupByArgs['orderBy'] }
        : { orderBy?: IPWhitelistGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, IPWhitelistGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetIPWhitelistGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the IPWhitelist model
   */
  readonly fields: IPWhitelistFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for IPWhitelist.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__IPWhitelistClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the IPWhitelist model
   */
  interface IPWhitelistFieldRefs {
    readonly id: FieldRef<"IPWhitelist", 'String'>
    readonly ip: FieldRef<"IPWhitelist", 'String'>
    readonly note: FieldRef<"IPWhitelist", 'String'>
  }
    

  // Custom InputTypes
  /**
   * IPWhitelist findUnique
   */
  export type IPWhitelistFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IPWhitelist
     */
    select?: IPWhitelistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IPWhitelist
     */
    omit?: IPWhitelistOmit<ExtArgs> | null
    /**
     * Filter, which IPWhitelist to fetch.
     */
    where: IPWhitelistWhereUniqueInput
  }

  /**
   * IPWhitelist findUniqueOrThrow
   */
  export type IPWhitelistFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IPWhitelist
     */
    select?: IPWhitelistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IPWhitelist
     */
    omit?: IPWhitelistOmit<ExtArgs> | null
    /**
     * Filter, which IPWhitelist to fetch.
     */
    where: IPWhitelistWhereUniqueInput
  }

  /**
   * IPWhitelist findFirst
   */
  export type IPWhitelistFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IPWhitelist
     */
    select?: IPWhitelistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IPWhitelist
     */
    omit?: IPWhitelistOmit<ExtArgs> | null
    /**
     * Filter, which IPWhitelist to fetch.
     */
    where?: IPWhitelistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IPWhitelists to fetch.
     */
    orderBy?: IPWhitelistOrderByWithRelationInput | IPWhitelistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for IPWhitelists.
     */
    cursor?: IPWhitelistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IPWhitelists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IPWhitelists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of IPWhitelists.
     */
    distinct?: IPWhitelistScalarFieldEnum | IPWhitelistScalarFieldEnum[]
  }

  /**
   * IPWhitelist findFirstOrThrow
   */
  export type IPWhitelistFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IPWhitelist
     */
    select?: IPWhitelistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IPWhitelist
     */
    omit?: IPWhitelistOmit<ExtArgs> | null
    /**
     * Filter, which IPWhitelist to fetch.
     */
    where?: IPWhitelistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IPWhitelists to fetch.
     */
    orderBy?: IPWhitelistOrderByWithRelationInput | IPWhitelistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for IPWhitelists.
     */
    cursor?: IPWhitelistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IPWhitelists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IPWhitelists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of IPWhitelists.
     */
    distinct?: IPWhitelistScalarFieldEnum | IPWhitelistScalarFieldEnum[]
  }

  /**
   * IPWhitelist findMany
   */
  export type IPWhitelistFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IPWhitelist
     */
    select?: IPWhitelistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IPWhitelist
     */
    omit?: IPWhitelistOmit<ExtArgs> | null
    /**
     * Filter, which IPWhitelists to fetch.
     */
    where?: IPWhitelistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IPWhitelists to fetch.
     */
    orderBy?: IPWhitelistOrderByWithRelationInput | IPWhitelistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing IPWhitelists.
     */
    cursor?: IPWhitelistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IPWhitelists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IPWhitelists.
     */
    skip?: number
    distinct?: IPWhitelistScalarFieldEnum | IPWhitelistScalarFieldEnum[]
  }

  /**
   * IPWhitelist create
   */
  export type IPWhitelistCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IPWhitelist
     */
    select?: IPWhitelistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IPWhitelist
     */
    omit?: IPWhitelistOmit<ExtArgs> | null
    /**
     * The data needed to create a IPWhitelist.
     */
    data: XOR<IPWhitelistCreateInput, IPWhitelistUncheckedCreateInput>
  }

  /**
   * IPWhitelist createMany
   */
  export type IPWhitelistCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many IPWhitelists.
     */
    data: IPWhitelistCreateManyInput | IPWhitelistCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * IPWhitelist createManyAndReturn
   */
  export type IPWhitelistCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IPWhitelist
     */
    select?: IPWhitelistSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the IPWhitelist
     */
    omit?: IPWhitelistOmit<ExtArgs> | null
    /**
     * The data used to create many IPWhitelists.
     */
    data: IPWhitelistCreateManyInput | IPWhitelistCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * IPWhitelist update
   */
  export type IPWhitelistUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IPWhitelist
     */
    select?: IPWhitelistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IPWhitelist
     */
    omit?: IPWhitelistOmit<ExtArgs> | null
    /**
     * The data needed to update a IPWhitelist.
     */
    data: XOR<IPWhitelistUpdateInput, IPWhitelistUncheckedUpdateInput>
    /**
     * Choose, which IPWhitelist to update.
     */
    where: IPWhitelistWhereUniqueInput
  }

  /**
   * IPWhitelist updateMany
   */
  export type IPWhitelistUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update IPWhitelists.
     */
    data: XOR<IPWhitelistUpdateManyMutationInput, IPWhitelistUncheckedUpdateManyInput>
    /**
     * Filter which IPWhitelists to update
     */
    where?: IPWhitelistWhereInput
    /**
     * Limit how many IPWhitelists to update.
     */
    limit?: number
  }

  /**
   * IPWhitelist updateManyAndReturn
   */
  export type IPWhitelistUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IPWhitelist
     */
    select?: IPWhitelistSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the IPWhitelist
     */
    omit?: IPWhitelistOmit<ExtArgs> | null
    /**
     * The data used to update IPWhitelists.
     */
    data: XOR<IPWhitelistUpdateManyMutationInput, IPWhitelistUncheckedUpdateManyInput>
    /**
     * Filter which IPWhitelists to update
     */
    where?: IPWhitelistWhereInput
    /**
     * Limit how many IPWhitelists to update.
     */
    limit?: number
  }

  /**
   * IPWhitelist upsert
   */
  export type IPWhitelistUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IPWhitelist
     */
    select?: IPWhitelistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IPWhitelist
     */
    omit?: IPWhitelistOmit<ExtArgs> | null
    /**
     * The filter to search for the IPWhitelist to update in case it exists.
     */
    where: IPWhitelistWhereUniqueInput
    /**
     * In case the IPWhitelist found by the `where` argument doesn't exist, create a new IPWhitelist with this data.
     */
    create: XOR<IPWhitelistCreateInput, IPWhitelistUncheckedCreateInput>
    /**
     * In case the IPWhitelist was found with the provided `where` argument, update it with this data.
     */
    update: XOR<IPWhitelistUpdateInput, IPWhitelistUncheckedUpdateInput>
  }

  /**
   * IPWhitelist delete
   */
  export type IPWhitelistDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IPWhitelist
     */
    select?: IPWhitelistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IPWhitelist
     */
    omit?: IPWhitelistOmit<ExtArgs> | null
    /**
     * Filter which IPWhitelist to delete.
     */
    where: IPWhitelistWhereUniqueInput
  }

  /**
   * IPWhitelist deleteMany
   */
  export type IPWhitelistDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which IPWhitelists to delete
     */
    where?: IPWhitelistWhereInput
    /**
     * Limit how many IPWhitelists to delete.
     */
    limit?: number
  }

  /**
   * IPWhitelist without action
   */
  export type IPWhitelistDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IPWhitelist
     */
    select?: IPWhitelistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IPWhitelist
     */
    omit?: IPWhitelistOmit<ExtArgs> | null
  }


  /**
   * Model Setting
   */

  export type AggregateSetting = {
    _count: SettingCountAggregateOutputType | null
    _min: SettingMinAggregateOutputType | null
    _max: SettingMaxAggregateOutputType | null
  }

  export type SettingMinAggregateOutputType = {
    id: string | null
    key: string | null
    value: string | null
    description: string | null
    isSecret: boolean | null
    type: $Enums.SETTING_DATA_TYPE | null
  }

  export type SettingMaxAggregateOutputType = {
    id: string | null
    key: string | null
    value: string | null
    description: string | null
    isSecret: boolean | null
    type: $Enums.SETTING_DATA_TYPE | null
  }

  export type SettingCountAggregateOutputType = {
    id: number
    key: number
    value: number
    description: number
    isSecret: number
    type: number
    _all: number
  }


  export type SettingMinAggregateInputType = {
    id?: true
    key?: true
    value?: true
    description?: true
    isSecret?: true
    type?: true
  }

  export type SettingMaxAggregateInputType = {
    id?: true
    key?: true
    value?: true
    description?: true
    isSecret?: true
    type?: true
  }

  export type SettingCountAggregateInputType = {
    id?: true
    key?: true
    value?: true
    description?: true
    isSecret?: true
    type?: true
    _all?: true
  }

  export type SettingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Setting to aggregate.
     */
    where?: SettingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Settings to fetch.
     */
    orderBy?: SettingOrderByWithRelationInput | SettingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SettingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Settings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Settings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Settings
    **/
    _count?: true | SettingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SettingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SettingMaxAggregateInputType
  }

  export type GetSettingAggregateType<T extends SettingAggregateArgs> = {
        [P in keyof T & keyof AggregateSetting]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSetting[P]>
      : GetScalarType<T[P], AggregateSetting[P]>
  }




  export type SettingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SettingWhereInput
    orderBy?: SettingOrderByWithAggregationInput | SettingOrderByWithAggregationInput[]
    by: SettingScalarFieldEnum[] | SettingScalarFieldEnum
    having?: SettingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SettingCountAggregateInputType | true
    _min?: SettingMinAggregateInputType
    _max?: SettingMaxAggregateInputType
  }

  export type SettingGroupByOutputType = {
    id: string
    key: string
    value: string
    description: string | null
    isSecret: boolean
    type: $Enums.SETTING_DATA_TYPE
    _count: SettingCountAggregateOutputType | null
    _min: SettingMinAggregateOutputType | null
    _max: SettingMaxAggregateOutputType | null
  }

  type GetSettingGroupByPayload<T extends SettingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SettingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SettingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SettingGroupByOutputType[P]>
            : GetScalarType<T[P], SettingGroupByOutputType[P]>
        }
      >
    >


  export type SettingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    key?: boolean
    value?: boolean
    description?: boolean
    isSecret?: boolean
    type?: boolean
  }, ExtArgs["result"]["setting"]>

  export type SettingSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    key?: boolean
    value?: boolean
    description?: boolean
    isSecret?: boolean
    type?: boolean
  }, ExtArgs["result"]["setting"]>

  export type SettingSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    key?: boolean
    value?: boolean
    description?: boolean
    isSecret?: boolean
    type?: boolean
  }, ExtArgs["result"]["setting"]>

  export type SettingSelectScalar = {
    id?: boolean
    key?: boolean
    value?: boolean
    description?: boolean
    isSecret?: boolean
    type?: boolean
  }

  export type SettingOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "key" | "value" | "description" | "isSecret" | "type", ExtArgs["result"]["setting"]>

  export type $SettingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Setting"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      key: string
      value: string
      description: string | null
      isSecret: boolean
      type: $Enums.SETTING_DATA_TYPE
    }, ExtArgs["result"]["setting"]>
    composites: {}
  }

  type SettingGetPayload<S extends boolean | null | undefined | SettingDefaultArgs> = $Result.GetResult<Prisma.$SettingPayload, S>

  type SettingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SettingFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SettingCountAggregateInputType | true
    }

  export interface SettingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Setting'], meta: { name: 'Setting' } }
    /**
     * Find zero or one Setting that matches the filter.
     * @param {SettingFindUniqueArgs} args - Arguments to find a Setting
     * @example
     * // Get one Setting
     * const setting = await prisma.setting.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SettingFindUniqueArgs>(args: SelectSubset<T, SettingFindUniqueArgs<ExtArgs>>): Prisma__SettingClient<$Result.GetResult<Prisma.$SettingPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Setting that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SettingFindUniqueOrThrowArgs} args - Arguments to find a Setting
     * @example
     * // Get one Setting
     * const setting = await prisma.setting.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SettingFindUniqueOrThrowArgs>(args: SelectSubset<T, SettingFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SettingClient<$Result.GetResult<Prisma.$SettingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Setting that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SettingFindFirstArgs} args - Arguments to find a Setting
     * @example
     * // Get one Setting
     * const setting = await prisma.setting.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SettingFindFirstArgs>(args?: SelectSubset<T, SettingFindFirstArgs<ExtArgs>>): Prisma__SettingClient<$Result.GetResult<Prisma.$SettingPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Setting that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SettingFindFirstOrThrowArgs} args - Arguments to find a Setting
     * @example
     * // Get one Setting
     * const setting = await prisma.setting.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SettingFindFirstOrThrowArgs>(args?: SelectSubset<T, SettingFindFirstOrThrowArgs<ExtArgs>>): Prisma__SettingClient<$Result.GetResult<Prisma.$SettingPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Settings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SettingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Settings
     * const settings = await prisma.setting.findMany()
     * 
     * // Get first 10 Settings
     * const settings = await prisma.setting.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const settingWithIdOnly = await prisma.setting.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SettingFindManyArgs>(args?: SelectSubset<T, SettingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SettingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Setting.
     * @param {SettingCreateArgs} args - Arguments to create a Setting.
     * @example
     * // Create one Setting
     * const Setting = await prisma.setting.create({
     *   data: {
     *     // ... data to create a Setting
     *   }
     * })
     * 
     */
    create<T extends SettingCreateArgs>(args: SelectSubset<T, SettingCreateArgs<ExtArgs>>): Prisma__SettingClient<$Result.GetResult<Prisma.$SettingPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Settings.
     * @param {SettingCreateManyArgs} args - Arguments to create many Settings.
     * @example
     * // Create many Settings
     * const setting = await prisma.setting.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SettingCreateManyArgs>(args?: SelectSubset<T, SettingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Settings and returns the data saved in the database.
     * @param {SettingCreateManyAndReturnArgs} args - Arguments to create many Settings.
     * @example
     * // Create many Settings
     * const setting = await prisma.setting.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Settings and only return the `id`
     * const settingWithIdOnly = await prisma.setting.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SettingCreateManyAndReturnArgs>(args?: SelectSubset<T, SettingCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SettingPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Setting.
     * @param {SettingDeleteArgs} args - Arguments to delete one Setting.
     * @example
     * // Delete one Setting
     * const Setting = await prisma.setting.delete({
     *   where: {
     *     // ... filter to delete one Setting
     *   }
     * })
     * 
     */
    delete<T extends SettingDeleteArgs>(args: SelectSubset<T, SettingDeleteArgs<ExtArgs>>): Prisma__SettingClient<$Result.GetResult<Prisma.$SettingPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Setting.
     * @param {SettingUpdateArgs} args - Arguments to update one Setting.
     * @example
     * // Update one Setting
     * const setting = await prisma.setting.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SettingUpdateArgs>(args: SelectSubset<T, SettingUpdateArgs<ExtArgs>>): Prisma__SettingClient<$Result.GetResult<Prisma.$SettingPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Settings.
     * @param {SettingDeleteManyArgs} args - Arguments to filter Settings to delete.
     * @example
     * // Delete a few Settings
     * const { count } = await prisma.setting.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SettingDeleteManyArgs>(args?: SelectSubset<T, SettingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Settings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SettingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Settings
     * const setting = await prisma.setting.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SettingUpdateManyArgs>(args: SelectSubset<T, SettingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Settings and returns the data updated in the database.
     * @param {SettingUpdateManyAndReturnArgs} args - Arguments to update many Settings.
     * @example
     * // Update many Settings
     * const setting = await prisma.setting.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Settings and only return the `id`
     * const settingWithIdOnly = await prisma.setting.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SettingUpdateManyAndReturnArgs>(args: SelectSubset<T, SettingUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SettingPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Setting.
     * @param {SettingUpsertArgs} args - Arguments to update or create a Setting.
     * @example
     * // Update or create a Setting
     * const setting = await prisma.setting.upsert({
     *   create: {
     *     // ... data to create a Setting
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Setting we want to update
     *   }
     * })
     */
    upsert<T extends SettingUpsertArgs>(args: SelectSubset<T, SettingUpsertArgs<ExtArgs>>): Prisma__SettingClient<$Result.GetResult<Prisma.$SettingPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Settings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SettingCountArgs} args - Arguments to filter Settings to count.
     * @example
     * // Count the number of Settings
     * const count = await prisma.setting.count({
     *   where: {
     *     // ... the filter for the Settings we want to count
     *   }
     * })
    **/
    count<T extends SettingCountArgs>(
      args?: Subset<T, SettingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SettingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Setting.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SettingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SettingAggregateArgs>(args: Subset<T, SettingAggregateArgs>): Prisma.PrismaPromise<GetSettingAggregateType<T>>

    /**
     * Group by Setting.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SettingGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SettingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SettingGroupByArgs['orderBy'] }
        : { orderBy?: SettingGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SettingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSettingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Setting model
   */
  readonly fields: SettingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Setting.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SettingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Setting model
   */
  interface SettingFieldRefs {
    readonly id: FieldRef<"Setting", 'String'>
    readonly key: FieldRef<"Setting", 'String'>
    readonly value: FieldRef<"Setting", 'String'>
    readonly description: FieldRef<"Setting", 'String'>
    readonly isSecret: FieldRef<"Setting", 'Boolean'>
    readonly type: FieldRef<"Setting", 'SETTING_DATA_TYPE'>
  }
    

  // Custom InputTypes
  /**
   * Setting findUnique
   */
  export type SettingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Setting
     */
    select?: SettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Setting
     */
    omit?: SettingOmit<ExtArgs> | null
    /**
     * Filter, which Setting to fetch.
     */
    where: SettingWhereUniqueInput
  }

  /**
   * Setting findUniqueOrThrow
   */
  export type SettingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Setting
     */
    select?: SettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Setting
     */
    omit?: SettingOmit<ExtArgs> | null
    /**
     * Filter, which Setting to fetch.
     */
    where: SettingWhereUniqueInput
  }

  /**
   * Setting findFirst
   */
  export type SettingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Setting
     */
    select?: SettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Setting
     */
    omit?: SettingOmit<ExtArgs> | null
    /**
     * Filter, which Setting to fetch.
     */
    where?: SettingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Settings to fetch.
     */
    orderBy?: SettingOrderByWithRelationInput | SettingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Settings.
     */
    cursor?: SettingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Settings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Settings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Settings.
     */
    distinct?: SettingScalarFieldEnum | SettingScalarFieldEnum[]
  }

  /**
   * Setting findFirstOrThrow
   */
  export type SettingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Setting
     */
    select?: SettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Setting
     */
    omit?: SettingOmit<ExtArgs> | null
    /**
     * Filter, which Setting to fetch.
     */
    where?: SettingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Settings to fetch.
     */
    orderBy?: SettingOrderByWithRelationInput | SettingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Settings.
     */
    cursor?: SettingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Settings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Settings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Settings.
     */
    distinct?: SettingScalarFieldEnum | SettingScalarFieldEnum[]
  }

  /**
   * Setting findMany
   */
  export type SettingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Setting
     */
    select?: SettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Setting
     */
    omit?: SettingOmit<ExtArgs> | null
    /**
     * Filter, which Settings to fetch.
     */
    where?: SettingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Settings to fetch.
     */
    orderBy?: SettingOrderByWithRelationInput | SettingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Settings.
     */
    cursor?: SettingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Settings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Settings.
     */
    skip?: number
    distinct?: SettingScalarFieldEnum | SettingScalarFieldEnum[]
  }

  /**
   * Setting create
   */
  export type SettingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Setting
     */
    select?: SettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Setting
     */
    omit?: SettingOmit<ExtArgs> | null
    /**
     * The data needed to create a Setting.
     */
    data: XOR<SettingCreateInput, SettingUncheckedCreateInput>
  }

  /**
   * Setting createMany
   */
  export type SettingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Settings.
     */
    data: SettingCreateManyInput | SettingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Setting createManyAndReturn
   */
  export type SettingCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Setting
     */
    select?: SettingSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Setting
     */
    omit?: SettingOmit<ExtArgs> | null
    /**
     * The data used to create many Settings.
     */
    data: SettingCreateManyInput | SettingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Setting update
   */
  export type SettingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Setting
     */
    select?: SettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Setting
     */
    omit?: SettingOmit<ExtArgs> | null
    /**
     * The data needed to update a Setting.
     */
    data: XOR<SettingUpdateInput, SettingUncheckedUpdateInput>
    /**
     * Choose, which Setting to update.
     */
    where: SettingWhereUniqueInput
  }

  /**
   * Setting updateMany
   */
  export type SettingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Settings.
     */
    data: XOR<SettingUpdateManyMutationInput, SettingUncheckedUpdateManyInput>
    /**
     * Filter which Settings to update
     */
    where?: SettingWhereInput
    /**
     * Limit how many Settings to update.
     */
    limit?: number
  }

  /**
   * Setting updateManyAndReturn
   */
  export type SettingUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Setting
     */
    select?: SettingSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Setting
     */
    omit?: SettingOmit<ExtArgs> | null
    /**
     * The data used to update Settings.
     */
    data: XOR<SettingUpdateManyMutationInput, SettingUncheckedUpdateManyInput>
    /**
     * Filter which Settings to update
     */
    where?: SettingWhereInput
    /**
     * Limit how many Settings to update.
     */
    limit?: number
  }

  /**
   * Setting upsert
   */
  export type SettingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Setting
     */
    select?: SettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Setting
     */
    omit?: SettingOmit<ExtArgs> | null
    /**
     * The filter to search for the Setting to update in case it exists.
     */
    where: SettingWhereUniqueInput
    /**
     * In case the Setting found by the `where` argument doesn't exist, create a new Setting with this data.
     */
    create: XOR<SettingCreateInput, SettingUncheckedCreateInput>
    /**
     * In case the Setting was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SettingUpdateInput, SettingUncheckedUpdateInput>
  }

  /**
   * Setting delete
   */
  export type SettingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Setting
     */
    select?: SettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Setting
     */
    omit?: SettingOmit<ExtArgs> | null
    /**
     * Filter which Setting to delete.
     */
    where: SettingWhereUniqueInput
  }

  /**
   * Setting deleteMany
   */
  export type SettingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Settings to delete
     */
    where?: SettingWhereInput
    /**
     * Limit how many Settings to delete.
     */
    limit?: number
  }

  /**
   * Setting without action
   */
  export type SettingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Setting
     */
    select?: SettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Setting
     */
    omit?: SettingOmit<ExtArgs> | null
  }


  /**
   * Model Proxy
   */

  export type AggregateProxy = {
    _count: ProxyCountAggregateOutputType | null
    _avg: ProxyAvgAggregateOutputType | null
    _sum: ProxySumAggregateOutputType | null
    _min: ProxyMinAggregateOutputType | null
    _max: ProxyMaxAggregateOutputType | null
  }

  export type ProxyAvgAggregateOutputType = {
    port: number | null
  }

  export type ProxySumAggregateOutputType = {
    port: number | null
  }

  export type ProxyMinAggregateOutputType = {
    id: string | null
    protocol: $Enums.ProxyProtocol | null
    host: string | null
    port: number | null
    username: string | null
    password: string | null
    enabled: boolean | null
    modified: Date | null
    created: Date | null
  }

  export type ProxyMaxAggregateOutputType = {
    id: string | null
    protocol: $Enums.ProxyProtocol | null
    host: string | null
    port: number | null
    username: string | null
    password: string | null
    enabled: boolean | null
    modified: Date | null
    created: Date | null
  }

  export type ProxyCountAggregateOutputType = {
    id: number
    protocol: number
    host: number
    port: number
    username: number
    password: number
    enabled: number
    modified: number
    created: number
    _all: number
  }


  export type ProxyAvgAggregateInputType = {
    port?: true
  }

  export type ProxySumAggregateInputType = {
    port?: true
  }

  export type ProxyMinAggregateInputType = {
    id?: true
    protocol?: true
    host?: true
    port?: true
    username?: true
    password?: true
    enabled?: true
    modified?: true
    created?: true
  }

  export type ProxyMaxAggregateInputType = {
    id?: true
    protocol?: true
    host?: true
    port?: true
    username?: true
    password?: true
    enabled?: true
    modified?: true
    created?: true
  }

  export type ProxyCountAggregateInputType = {
    id?: true
    protocol?: true
    host?: true
    port?: true
    username?: true
    password?: true
    enabled?: true
    modified?: true
    created?: true
    _all?: true
  }

  export type ProxyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Proxy to aggregate.
     */
    where?: ProxyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Proxies to fetch.
     */
    orderBy?: ProxyOrderByWithRelationInput | ProxyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProxyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Proxies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Proxies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Proxies
    **/
    _count?: true | ProxyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProxyAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProxySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProxyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProxyMaxAggregateInputType
  }

  export type GetProxyAggregateType<T extends ProxyAggregateArgs> = {
        [P in keyof T & keyof AggregateProxy]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProxy[P]>
      : GetScalarType<T[P], AggregateProxy[P]>
  }




  export type ProxyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProxyWhereInput
    orderBy?: ProxyOrderByWithAggregationInput | ProxyOrderByWithAggregationInput[]
    by: ProxyScalarFieldEnum[] | ProxyScalarFieldEnum
    having?: ProxyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProxyCountAggregateInputType | true
    _avg?: ProxyAvgAggregateInputType
    _sum?: ProxySumAggregateInputType
    _min?: ProxyMinAggregateInputType
    _max?: ProxyMaxAggregateInputType
  }

  export type ProxyGroupByOutputType = {
    id: string
    protocol: $Enums.ProxyProtocol
    host: string
    port: number
    username: string
    password: string
    enabled: boolean
    modified: Date
    created: Date
    _count: ProxyCountAggregateOutputType | null
    _avg: ProxyAvgAggregateOutputType | null
    _sum: ProxySumAggregateOutputType | null
    _min: ProxyMinAggregateOutputType | null
    _max: ProxyMaxAggregateOutputType | null
  }

  type GetProxyGroupByPayload<T extends ProxyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProxyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProxyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProxyGroupByOutputType[P]>
            : GetScalarType<T[P], ProxyGroupByOutputType[P]>
        }
      >
    >


  export type ProxySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    protocol?: boolean
    host?: boolean
    port?: boolean
    username?: boolean
    password?: boolean
    enabled?: boolean
    modified?: boolean
    created?: boolean
  }, ExtArgs["result"]["proxy"]>

  export type ProxySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    protocol?: boolean
    host?: boolean
    port?: boolean
    username?: boolean
    password?: boolean
    enabled?: boolean
    modified?: boolean
    created?: boolean
  }, ExtArgs["result"]["proxy"]>

  export type ProxySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    protocol?: boolean
    host?: boolean
    port?: boolean
    username?: boolean
    password?: boolean
    enabled?: boolean
    modified?: boolean
    created?: boolean
  }, ExtArgs["result"]["proxy"]>

  export type ProxySelectScalar = {
    id?: boolean
    protocol?: boolean
    host?: boolean
    port?: boolean
    username?: boolean
    password?: boolean
    enabled?: boolean
    modified?: boolean
    created?: boolean
  }

  export type ProxyOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "protocol" | "host" | "port" | "username" | "password" | "enabled" | "modified" | "created", ExtArgs["result"]["proxy"]>

  export type $ProxyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Proxy"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      protocol: $Enums.ProxyProtocol
      host: string
      port: number
      username: string
      password: string
      enabled: boolean
      modified: Date
      created: Date
    }, ExtArgs["result"]["proxy"]>
    composites: {}
  }

  type ProxyGetPayload<S extends boolean | null | undefined | ProxyDefaultArgs> = $Result.GetResult<Prisma.$ProxyPayload, S>

  type ProxyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProxyFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProxyCountAggregateInputType | true
    }

  export interface ProxyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Proxy'], meta: { name: 'Proxy' } }
    /**
     * Find zero or one Proxy that matches the filter.
     * @param {ProxyFindUniqueArgs} args - Arguments to find a Proxy
     * @example
     * // Get one Proxy
     * const proxy = await prisma.proxy.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProxyFindUniqueArgs>(args: SelectSubset<T, ProxyFindUniqueArgs<ExtArgs>>): Prisma__ProxyClient<$Result.GetResult<Prisma.$ProxyPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Proxy that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProxyFindUniqueOrThrowArgs} args - Arguments to find a Proxy
     * @example
     * // Get one Proxy
     * const proxy = await prisma.proxy.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProxyFindUniqueOrThrowArgs>(args: SelectSubset<T, ProxyFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProxyClient<$Result.GetResult<Prisma.$ProxyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Proxy that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProxyFindFirstArgs} args - Arguments to find a Proxy
     * @example
     * // Get one Proxy
     * const proxy = await prisma.proxy.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProxyFindFirstArgs>(args?: SelectSubset<T, ProxyFindFirstArgs<ExtArgs>>): Prisma__ProxyClient<$Result.GetResult<Prisma.$ProxyPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Proxy that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProxyFindFirstOrThrowArgs} args - Arguments to find a Proxy
     * @example
     * // Get one Proxy
     * const proxy = await prisma.proxy.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProxyFindFirstOrThrowArgs>(args?: SelectSubset<T, ProxyFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProxyClient<$Result.GetResult<Prisma.$ProxyPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Proxies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProxyFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Proxies
     * const proxies = await prisma.proxy.findMany()
     * 
     * // Get first 10 Proxies
     * const proxies = await prisma.proxy.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const proxyWithIdOnly = await prisma.proxy.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProxyFindManyArgs>(args?: SelectSubset<T, ProxyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProxyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Proxy.
     * @param {ProxyCreateArgs} args - Arguments to create a Proxy.
     * @example
     * // Create one Proxy
     * const Proxy = await prisma.proxy.create({
     *   data: {
     *     // ... data to create a Proxy
     *   }
     * })
     * 
     */
    create<T extends ProxyCreateArgs>(args: SelectSubset<T, ProxyCreateArgs<ExtArgs>>): Prisma__ProxyClient<$Result.GetResult<Prisma.$ProxyPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Proxies.
     * @param {ProxyCreateManyArgs} args - Arguments to create many Proxies.
     * @example
     * // Create many Proxies
     * const proxy = await prisma.proxy.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProxyCreateManyArgs>(args?: SelectSubset<T, ProxyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Proxies and returns the data saved in the database.
     * @param {ProxyCreateManyAndReturnArgs} args - Arguments to create many Proxies.
     * @example
     * // Create many Proxies
     * const proxy = await prisma.proxy.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Proxies and only return the `id`
     * const proxyWithIdOnly = await prisma.proxy.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProxyCreateManyAndReturnArgs>(args?: SelectSubset<T, ProxyCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProxyPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Proxy.
     * @param {ProxyDeleteArgs} args - Arguments to delete one Proxy.
     * @example
     * // Delete one Proxy
     * const Proxy = await prisma.proxy.delete({
     *   where: {
     *     // ... filter to delete one Proxy
     *   }
     * })
     * 
     */
    delete<T extends ProxyDeleteArgs>(args: SelectSubset<T, ProxyDeleteArgs<ExtArgs>>): Prisma__ProxyClient<$Result.GetResult<Prisma.$ProxyPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Proxy.
     * @param {ProxyUpdateArgs} args - Arguments to update one Proxy.
     * @example
     * // Update one Proxy
     * const proxy = await prisma.proxy.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProxyUpdateArgs>(args: SelectSubset<T, ProxyUpdateArgs<ExtArgs>>): Prisma__ProxyClient<$Result.GetResult<Prisma.$ProxyPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Proxies.
     * @param {ProxyDeleteManyArgs} args - Arguments to filter Proxies to delete.
     * @example
     * // Delete a few Proxies
     * const { count } = await prisma.proxy.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProxyDeleteManyArgs>(args?: SelectSubset<T, ProxyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Proxies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProxyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Proxies
     * const proxy = await prisma.proxy.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProxyUpdateManyArgs>(args: SelectSubset<T, ProxyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Proxies and returns the data updated in the database.
     * @param {ProxyUpdateManyAndReturnArgs} args - Arguments to update many Proxies.
     * @example
     * // Update many Proxies
     * const proxy = await prisma.proxy.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Proxies and only return the `id`
     * const proxyWithIdOnly = await prisma.proxy.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ProxyUpdateManyAndReturnArgs>(args: SelectSubset<T, ProxyUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProxyPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Proxy.
     * @param {ProxyUpsertArgs} args - Arguments to update or create a Proxy.
     * @example
     * // Update or create a Proxy
     * const proxy = await prisma.proxy.upsert({
     *   create: {
     *     // ... data to create a Proxy
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Proxy we want to update
     *   }
     * })
     */
    upsert<T extends ProxyUpsertArgs>(args: SelectSubset<T, ProxyUpsertArgs<ExtArgs>>): Prisma__ProxyClient<$Result.GetResult<Prisma.$ProxyPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Proxies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProxyCountArgs} args - Arguments to filter Proxies to count.
     * @example
     * // Count the number of Proxies
     * const count = await prisma.proxy.count({
     *   where: {
     *     // ... the filter for the Proxies we want to count
     *   }
     * })
    **/
    count<T extends ProxyCountArgs>(
      args?: Subset<T, ProxyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProxyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Proxy.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProxyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProxyAggregateArgs>(args: Subset<T, ProxyAggregateArgs>): Prisma.PrismaPromise<GetProxyAggregateType<T>>

    /**
     * Group by Proxy.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProxyGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProxyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProxyGroupByArgs['orderBy'] }
        : { orderBy?: ProxyGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProxyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProxyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Proxy model
   */
  readonly fields: ProxyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Proxy.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProxyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Proxy model
   */
  interface ProxyFieldRefs {
    readonly id: FieldRef<"Proxy", 'String'>
    readonly protocol: FieldRef<"Proxy", 'ProxyProtocol'>
    readonly host: FieldRef<"Proxy", 'String'>
    readonly port: FieldRef<"Proxy", 'Int'>
    readonly username: FieldRef<"Proxy", 'String'>
    readonly password: FieldRef<"Proxy", 'String'>
    readonly enabled: FieldRef<"Proxy", 'Boolean'>
    readonly modified: FieldRef<"Proxy", 'DateTime'>
    readonly created: FieldRef<"Proxy", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Proxy findUnique
   */
  export type ProxyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Proxy
     */
    select?: ProxySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Proxy
     */
    omit?: ProxyOmit<ExtArgs> | null
    /**
     * Filter, which Proxy to fetch.
     */
    where: ProxyWhereUniqueInput
  }

  /**
   * Proxy findUniqueOrThrow
   */
  export type ProxyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Proxy
     */
    select?: ProxySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Proxy
     */
    omit?: ProxyOmit<ExtArgs> | null
    /**
     * Filter, which Proxy to fetch.
     */
    where: ProxyWhereUniqueInput
  }

  /**
   * Proxy findFirst
   */
  export type ProxyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Proxy
     */
    select?: ProxySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Proxy
     */
    omit?: ProxyOmit<ExtArgs> | null
    /**
     * Filter, which Proxy to fetch.
     */
    where?: ProxyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Proxies to fetch.
     */
    orderBy?: ProxyOrderByWithRelationInput | ProxyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Proxies.
     */
    cursor?: ProxyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Proxies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Proxies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Proxies.
     */
    distinct?: ProxyScalarFieldEnum | ProxyScalarFieldEnum[]
  }

  /**
   * Proxy findFirstOrThrow
   */
  export type ProxyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Proxy
     */
    select?: ProxySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Proxy
     */
    omit?: ProxyOmit<ExtArgs> | null
    /**
     * Filter, which Proxy to fetch.
     */
    where?: ProxyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Proxies to fetch.
     */
    orderBy?: ProxyOrderByWithRelationInput | ProxyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Proxies.
     */
    cursor?: ProxyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Proxies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Proxies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Proxies.
     */
    distinct?: ProxyScalarFieldEnum | ProxyScalarFieldEnum[]
  }

  /**
   * Proxy findMany
   */
  export type ProxyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Proxy
     */
    select?: ProxySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Proxy
     */
    omit?: ProxyOmit<ExtArgs> | null
    /**
     * Filter, which Proxies to fetch.
     */
    where?: ProxyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Proxies to fetch.
     */
    orderBy?: ProxyOrderByWithRelationInput | ProxyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Proxies.
     */
    cursor?: ProxyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Proxies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Proxies.
     */
    skip?: number
    distinct?: ProxyScalarFieldEnum | ProxyScalarFieldEnum[]
  }

  /**
   * Proxy create
   */
  export type ProxyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Proxy
     */
    select?: ProxySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Proxy
     */
    omit?: ProxyOmit<ExtArgs> | null
    /**
     * The data needed to create a Proxy.
     */
    data: XOR<ProxyCreateInput, ProxyUncheckedCreateInput>
  }

  /**
   * Proxy createMany
   */
  export type ProxyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Proxies.
     */
    data: ProxyCreateManyInput | ProxyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Proxy createManyAndReturn
   */
  export type ProxyCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Proxy
     */
    select?: ProxySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Proxy
     */
    omit?: ProxyOmit<ExtArgs> | null
    /**
     * The data used to create many Proxies.
     */
    data: ProxyCreateManyInput | ProxyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Proxy update
   */
  export type ProxyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Proxy
     */
    select?: ProxySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Proxy
     */
    omit?: ProxyOmit<ExtArgs> | null
    /**
     * The data needed to update a Proxy.
     */
    data: XOR<ProxyUpdateInput, ProxyUncheckedUpdateInput>
    /**
     * Choose, which Proxy to update.
     */
    where: ProxyWhereUniqueInput
  }

  /**
   * Proxy updateMany
   */
  export type ProxyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Proxies.
     */
    data: XOR<ProxyUpdateManyMutationInput, ProxyUncheckedUpdateManyInput>
    /**
     * Filter which Proxies to update
     */
    where?: ProxyWhereInput
    /**
     * Limit how many Proxies to update.
     */
    limit?: number
  }

  /**
   * Proxy updateManyAndReturn
   */
  export type ProxyUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Proxy
     */
    select?: ProxySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Proxy
     */
    omit?: ProxyOmit<ExtArgs> | null
    /**
     * The data used to update Proxies.
     */
    data: XOR<ProxyUpdateManyMutationInput, ProxyUncheckedUpdateManyInput>
    /**
     * Filter which Proxies to update
     */
    where?: ProxyWhereInput
    /**
     * Limit how many Proxies to update.
     */
    limit?: number
  }

  /**
   * Proxy upsert
   */
  export type ProxyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Proxy
     */
    select?: ProxySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Proxy
     */
    omit?: ProxyOmit<ExtArgs> | null
    /**
     * The filter to search for the Proxy to update in case it exists.
     */
    where: ProxyWhereUniqueInput
    /**
     * In case the Proxy found by the `where` argument doesn't exist, create a new Proxy with this data.
     */
    create: XOR<ProxyCreateInput, ProxyUncheckedCreateInput>
    /**
     * In case the Proxy was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProxyUpdateInput, ProxyUncheckedUpdateInput>
  }

  /**
   * Proxy delete
   */
  export type ProxyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Proxy
     */
    select?: ProxySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Proxy
     */
    omit?: ProxyOmit<ExtArgs> | null
    /**
     * Filter which Proxy to delete.
     */
    where: ProxyWhereUniqueInput
  }

  /**
   * Proxy deleteMany
   */
  export type ProxyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Proxies to delete
     */
    where?: ProxyWhereInput
    /**
     * Limit how many Proxies to delete.
     */
    limit?: number
  }

  /**
   * Proxy without action
   */
  export type ProxyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Proxy
     */
    select?: ProxySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Proxy
     */
    omit?: ProxyOmit<ExtArgs> | null
  }


  /**
   * Model TelegramTemplate
   */

  export type AggregateTelegramTemplate = {
    _count: TelegramTemplateCountAggregateOutputType | null
    _min: TelegramTemplateMinAggregateOutputType | null
    _max: TelegramTemplateMaxAggregateOutputType | null
  }

  export type TelegramTemplateMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    message: string | null
    created: Date | null
    modified: Date | null
  }

  export type TelegramTemplateMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    message: string | null
    created: Date | null
    modified: Date | null
  }

  export type TelegramTemplateCountAggregateOutputType = {
    id: number
    name: number
    description: number
    message: number
    photos: number
    videos: number
    buttons: number
    created: number
    modified: number
    _all: number
  }


  export type TelegramTemplateMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    message?: true
    created?: true
    modified?: true
  }

  export type TelegramTemplateMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    message?: true
    created?: true
    modified?: true
  }

  export type TelegramTemplateCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    message?: true
    photos?: true
    videos?: true
    buttons?: true
    created?: true
    modified?: true
    _all?: true
  }

  export type TelegramTemplateAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TelegramTemplate to aggregate.
     */
    where?: TelegramTemplateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TelegramTemplates to fetch.
     */
    orderBy?: TelegramTemplateOrderByWithRelationInput | TelegramTemplateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TelegramTemplateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TelegramTemplates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TelegramTemplates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TelegramTemplates
    **/
    _count?: true | TelegramTemplateCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TelegramTemplateMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TelegramTemplateMaxAggregateInputType
  }

  export type GetTelegramTemplateAggregateType<T extends TelegramTemplateAggregateArgs> = {
        [P in keyof T & keyof AggregateTelegramTemplate]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTelegramTemplate[P]>
      : GetScalarType<T[P], AggregateTelegramTemplate[P]>
  }




  export type TelegramTemplateGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TelegramTemplateWhereInput
    orderBy?: TelegramTemplateOrderByWithAggregationInput | TelegramTemplateOrderByWithAggregationInput[]
    by: TelegramTemplateScalarFieldEnum[] | TelegramTemplateScalarFieldEnum
    having?: TelegramTemplateScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TelegramTemplateCountAggregateInputType | true
    _min?: TelegramTemplateMinAggregateInputType
    _max?: TelegramTemplateMaxAggregateInputType
  }

  export type TelegramTemplateGroupByOutputType = {
    id: string
    name: string
    description: string | null
    message: string | null
    photos: string[]
    videos: string[]
    buttons: JsonValue | null
    created: Date
    modified: Date
    _count: TelegramTemplateCountAggregateOutputType | null
    _min: TelegramTemplateMinAggregateOutputType | null
    _max: TelegramTemplateMaxAggregateOutputType | null
  }

  type GetTelegramTemplateGroupByPayload<T extends TelegramTemplateGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TelegramTemplateGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TelegramTemplateGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TelegramTemplateGroupByOutputType[P]>
            : GetScalarType<T[P], TelegramTemplateGroupByOutputType[P]>
        }
      >
    >


  export type TelegramTemplateSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    message?: boolean
    photos?: boolean
    videos?: boolean
    buttons?: boolean
    created?: boolean
    modified?: boolean
  }, ExtArgs["result"]["telegramTemplate"]>

  export type TelegramTemplateSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    message?: boolean
    photos?: boolean
    videos?: boolean
    buttons?: boolean
    created?: boolean
    modified?: boolean
  }, ExtArgs["result"]["telegramTemplate"]>

  export type TelegramTemplateSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    message?: boolean
    photos?: boolean
    videos?: boolean
    buttons?: boolean
    created?: boolean
    modified?: boolean
  }, ExtArgs["result"]["telegramTemplate"]>

  export type TelegramTemplateSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    message?: boolean
    photos?: boolean
    videos?: boolean
    buttons?: boolean
    created?: boolean
    modified?: boolean
  }

  export type TelegramTemplateOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "message" | "photos" | "videos" | "buttons" | "created" | "modified", ExtArgs["result"]["telegramTemplate"]>

  export type $TelegramTemplatePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TelegramTemplate"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      description: string | null
      message: string | null
      photos: string[]
      videos: string[]
      buttons: Prisma.JsonValue | null
      created: Date
      modified: Date
    }, ExtArgs["result"]["telegramTemplate"]>
    composites: {}
  }

  type TelegramTemplateGetPayload<S extends boolean | null | undefined | TelegramTemplateDefaultArgs> = $Result.GetResult<Prisma.$TelegramTemplatePayload, S>

  type TelegramTemplateCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TelegramTemplateFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TelegramTemplateCountAggregateInputType | true
    }

  export interface TelegramTemplateDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TelegramTemplate'], meta: { name: 'TelegramTemplate' } }
    /**
     * Find zero or one TelegramTemplate that matches the filter.
     * @param {TelegramTemplateFindUniqueArgs} args - Arguments to find a TelegramTemplate
     * @example
     * // Get one TelegramTemplate
     * const telegramTemplate = await prisma.telegramTemplate.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TelegramTemplateFindUniqueArgs>(args: SelectSubset<T, TelegramTemplateFindUniqueArgs<ExtArgs>>): Prisma__TelegramTemplateClient<$Result.GetResult<Prisma.$TelegramTemplatePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TelegramTemplate that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TelegramTemplateFindUniqueOrThrowArgs} args - Arguments to find a TelegramTemplate
     * @example
     * // Get one TelegramTemplate
     * const telegramTemplate = await prisma.telegramTemplate.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TelegramTemplateFindUniqueOrThrowArgs>(args: SelectSubset<T, TelegramTemplateFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TelegramTemplateClient<$Result.GetResult<Prisma.$TelegramTemplatePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TelegramTemplate that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TelegramTemplateFindFirstArgs} args - Arguments to find a TelegramTemplate
     * @example
     * // Get one TelegramTemplate
     * const telegramTemplate = await prisma.telegramTemplate.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TelegramTemplateFindFirstArgs>(args?: SelectSubset<T, TelegramTemplateFindFirstArgs<ExtArgs>>): Prisma__TelegramTemplateClient<$Result.GetResult<Prisma.$TelegramTemplatePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TelegramTemplate that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TelegramTemplateFindFirstOrThrowArgs} args - Arguments to find a TelegramTemplate
     * @example
     * // Get one TelegramTemplate
     * const telegramTemplate = await prisma.telegramTemplate.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TelegramTemplateFindFirstOrThrowArgs>(args?: SelectSubset<T, TelegramTemplateFindFirstOrThrowArgs<ExtArgs>>): Prisma__TelegramTemplateClient<$Result.GetResult<Prisma.$TelegramTemplatePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TelegramTemplates that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TelegramTemplateFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TelegramTemplates
     * const telegramTemplates = await prisma.telegramTemplate.findMany()
     * 
     * // Get first 10 TelegramTemplates
     * const telegramTemplates = await prisma.telegramTemplate.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const telegramTemplateWithIdOnly = await prisma.telegramTemplate.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TelegramTemplateFindManyArgs>(args?: SelectSubset<T, TelegramTemplateFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TelegramTemplatePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TelegramTemplate.
     * @param {TelegramTemplateCreateArgs} args - Arguments to create a TelegramTemplate.
     * @example
     * // Create one TelegramTemplate
     * const TelegramTemplate = await prisma.telegramTemplate.create({
     *   data: {
     *     // ... data to create a TelegramTemplate
     *   }
     * })
     * 
     */
    create<T extends TelegramTemplateCreateArgs>(args: SelectSubset<T, TelegramTemplateCreateArgs<ExtArgs>>): Prisma__TelegramTemplateClient<$Result.GetResult<Prisma.$TelegramTemplatePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TelegramTemplates.
     * @param {TelegramTemplateCreateManyArgs} args - Arguments to create many TelegramTemplates.
     * @example
     * // Create many TelegramTemplates
     * const telegramTemplate = await prisma.telegramTemplate.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TelegramTemplateCreateManyArgs>(args?: SelectSubset<T, TelegramTemplateCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TelegramTemplates and returns the data saved in the database.
     * @param {TelegramTemplateCreateManyAndReturnArgs} args - Arguments to create many TelegramTemplates.
     * @example
     * // Create many TelegramTemplates
     * const telegramTemplate = await prisma.telegramTemplate.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TelegramTemplates and only return the `id`
     * const telegramTemplateWithIdOnly = await prisma.telegramTemplate.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TelegramTemplateCreateManyAndReturnArgs>(args?: SelectSubset<T, TelegramTemplateCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TelegramTemplatePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TelegramTemplate.
     * @param {TelegramTemplateDeleteArgs} args - Arguments to delete one TelegramTemplate.
     * @example
     * // Delete one TelegramTemplate
     * const TelegramTemplate = await prisma.telegramTemplate.delete({
     *   where: {
     *     // ... filter to delete one TelegramTemplate
     *   }
     * })
     * 
     */
    delete<T extends TelegramTemplateDeleteArgs>(args: SelectSubset<T, TelegramTemplateDeleteArgs<ExtArgs>>): Prisma__TelegramTemplateClient<$Result.GetResult<Prisma.$TelegramTemplatePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TelegramTemplate.
     * @param {TelegramTemplateUpdateArgs} args - Arguments to update one TelegramTemplate.
     * @example
     * // Update one TelegramTemplate
     * const telegramTemplate = await prisma.telegramTemplate.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TelegramTemplateUpdateArgs>(args: SelectSubset<T, TelegramTemplateUpdateArgs<ExtArgs>>): Prisma__TelegramTemplateClient<$Result.GetResult<Prisma.$TelegramTemplatePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TelegramTemplates.
     * @param {TelegramTemplateDeleteManyArgs} args - Arguments to filter TelegramTemplates to delete.
     * @example
     * // Delete a few TelegramTemplates
     * const { count } = await prisma.telegramTemplate.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TelegramTemplateDeleteManyArgs>(args?: SelectSubset<T, TelegramTemplateDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TelegramTemplates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TelegramTemplateUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TelegramTemplates
     * const telegramTemplate = await prisma.telegramTemplate.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TelegramTemplateUpdateManyArgs>(args: SelectSubset<T, TelegramTemplateUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TelegramTemplates and returns the data updated in the database.
     * @param {TelegramTemplateUpdateManyAndReturnArgs} args - Arguments to update many TelegramTemplates.
     * @example
     * // Update many TelegramTemplates
     * const telegramTemplate = await prisma.telegramTemplate.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TelegramTemplates and only return the `id`
     * const telegramTemplateWithIdOnly = await prisma.telegramTemplate.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TelegramTemplateUpdateManyAndReturnArgs>(args: SelectSubset<T, TelegramTemplateUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TelegramTemplatePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TelegramTemplate.
     * @param {TelegramTemplateUpsertArgs} args - Arguments to update or create a TelegramTemplate.
     * @example
     * // Update or create a TelegramTemplate
     * const telegramTemplate = await prisma.telegramTemplate.upsert({
     *   create: {
     *     // ... data to create a TelegramTemplate
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TelegramTemplate we want to update
     *   }
     * })
     */
    upsert<T extends TelegramTemplateUpsertArgs>(args: SelectSubset<T, TelegramTemplateUpsertArgs<ExtArgs>>): Prisma__TelegramTemplateClient<$Result.GetResult<Prisma.$TelegramTemplatePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TelegramTemplates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TelegramTemplateCountArgs} args - Arguments to filter TelegramTemplates to count.
     * @example
     * // Count the number of TelegramTemplates
     * const count = await prisma.telegramTemplate.count({
     *   where: {
     *     // ... the filter for the TelegramTemplates we want to count
     *   }
     * })
    **/
    count<T extends TelegramTemplateCountArgs>(
      args?: Subset<T, TelegramTemplateCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TelegramTemplateCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TelegramTemplate.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TelegramTemplateAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TelegramTemplateAggregateArgs>(args: Subset<T, TelegramTemplateAggregateArgs>): Prisma.PrismaPromise<GetTelegramTemplateAggregateType<T>>

    /**
     * Group by TelegramTemplate.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TelegramTemplateGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TelegramTemplateGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TelegramTemplateGroupByArgs['orderBy'] }
        : { orderBy?: TelegramTemplateGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TelegramTemplateGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTelegramTemplateGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TelegramTemplate model
   */
  readonly fields: TelegramTemplateFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TelegramTemplate.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TelegramTemplateClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the TelegramTemplate model
   */
  interface TelegramTemplateFieldRefs {
    readonly id: FieldRef<"TelegramTemplate", 'String'>
    readonly name: FieldRef<"TelegramTemplate", 'String'>
    readonly description: FieldRef<"TelegramTemplate", 'String'>
    readonly message: FieldRef<"TelegramTemplate", 'String'>
    readonly photos: FieldRef<"TelegramTemplate", 'String[]'>
    readonly videos: FieldRef<"TelegramTemplate", 'String[]'>
    readonly buttons: FieldRef<"TelegramTemplate", 'Json'>
    readonly created: FieldRef<"TelegramTemplate", 'DateTime'>
    readonly modified: FieldRef<"TelegramTemplate", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * TelegramTemplate findUnique
   */
  export type TelegramTemplateFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TelegramTemplate
     */
    select?: TelegramTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TelegramTemplate
     */
    omit?: TelegramTemplateOmit<ExtArgs> | null
    /**
     * Filter, which TelegramTemplate to fetch.
     */
    where: TelegramTemplateWhereUniqueInput
  }

  /**
   * TelegramTemplate findUniqueOrThrow
   */
  export type TelegramTemplateFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TelegramTemplate
     */
    select?: TelegramTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TelegramTemplate
     */
    omit?: TelegramTemplateOmit<ExtArgs> | null
    /**
     * Filter, which TelegramTemplate to fetch.
     */
    where: TelegramTemplateWhereUniqueInput
  }

  /**
   * TelegramTemplate findFirst
   */
  export type TelegramTemplateFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TelegramTemplate
     */
    select?: TelegramTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TelegramTemplate
     */
    omit?: TelegramTemplateOmit<ExtArgs> | null
    /**
     * Filter, which TelegramTemplate to fetch.
     */
    where?: TelegramTemplateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TelegramTemplates to fetch.
     */
    orderBy?: TelegramTemplateOrderByWithRelationInput | TelegramTemplateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TelegramTemplates.
     */
    cursor?: TelegramTemplateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TelegramTemplates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TelegramTemplates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TelegramTemplates.
     */
    distinct?: TelegramTemplateScalarFieldEnum | TelegramTemplateScalarFieldEnum[]
  }

  /**
   * TelegramTemplate findFirstOrThrow
   */
  export type TelegramTemplateFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TelegramTemplate
     */
    select?: TelegramTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TelegramTemplate
     */
    omit?: TelegramTemplateOmit<ExtArgs> | null
    /**
     * Filter, which TelegramTemplate to fetch.
     */
    where?: TelegramTemplateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TelegramTemplates to fetch.
     */
    orderBy?: TelegramTemplateOrderByWithRelationInput | TelegramTemplateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TelegramTemplates.
     */
    cursor?: TelegramTemplateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TelegramTemplates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TelegramTemplates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TelegramTemplates.
     */
    distinct?: TelegramTemplateScalarFieldEnum | TelegramTemplateScalarFieldEnum[]
  }

  /**
   * TelegramTemplate findMany
   */
  export type TelegramTemplateFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TelegramTemplate
     */
    select?: TelegramTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TelegramTemplate
     */
    omit?: TelegramTemplateOmit<ExtArgs> | null
    /**
     * Filter, which TelegramTemplates to fetch.
     */
    where?: TelegramTemplateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TelegramTemplates to fetch.
     */
    orderBy?: TelegramTemplateOrderByWithRelationInput | TelegramTemplateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TelegramTemplates.
     */
    cursor?: TelegramTemplateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TelegramTemplates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TelegramTemplates.
     */
    skip?: number
    distinct?: TelegramTemplateScalarFieldEnum | TelegramTemplateScalarFieldEnum[]
  }

  /**
   * TelegramTemplate create
   */
  export type TelegramTemplateCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TelegramTemplate
     */
    select?: TelegramTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TelegramTemplate
     */
    omit?: TelegramTemplateOmit<ExtArgs> | null
    /**
     * The data needed to create a TelegramTemplate.
     */
    data: XOR<TelegramTemplateCreateInput, TelegramTemplateUncheckedCreateInput>
  }

  /**
   * TelegramTemplate createMany
   */
  export type TelegramTemplateCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TelegramTemplates.
     */
    data: TelegramTemplateCreateManyInput | TelegramTemplateCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TelegramTemplate createManyAndReturn
   */
  export type TelegramTemplateCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TelegramTemplate
     */
    select?: TelegramTemplateSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TelegramTemplate
     */
    omit?: TelegramTemplateOmit<ExtArgs> | null
    /**
     * The data used to create many TelegramTemplates.
     */
    data: TelegramTemplateCreateManyInput | TelegramTemplateCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TelegramTemplate update
   */
  export type TelegramTemplateUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TelegramTemplate
     */
    select?: TelegramTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TelegramTemplate
     */
    omit?: TelegramTemplateOmit<ExtArgs> | null
    /**
     * The data needed to update a TelegramTemplate.
     */
    data: XOR<TelegramTemplateUpdateInput, TelegramTemplateUncheckedUpdateInput>
    /**
     * Choose, which TelegramTemplate to update.
     */
    where: TelegramTemplateWhereUniqueInput
  }

  /**
   * TelegramTemplate updateMany
   */
  export type TelegramTemplateUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TelegramTemplates.
     */
    data: XOR<TelegramTemplateUpdateManyMutationInput, TelegramTemplateUncheckedUpdateManyInput>
    /**
     * Filter which TelegramTemplates to update
     */
    where?: TelegramTemplateWhereInput
    /**
     * Limit how many TelegramTemplates to update.
     */
    limit?: number
  }

  /**
   * TelegramTemplate updateManyAndReturn
   */
  export type TelegramTemplateUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TelegramTemplate
     */
    select?: TelegramTemplateSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TelegramTemplate
     */
    omit?: TelegramTemplateOmit<ExtArgs> | null
    /**
     * The data used to update TelegramTemplates.
     */
    data: XOR<TelegramTemplateUpdateManyMutationInput, TelegramTemplateUncheckedUpdateManyInput>
    /**
     * Filter which TelegramTemplates to update
     */
    where?: TelegramTemplateWhereInput
    /**
     * Limit how many TelegramTemplates to update.
     */
    limit?: number
  }

  /**
   * TelegramTemplate upsert
   */
  export type TelegramTemplateUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TelegramTemplate
     */
    select?: TelegramTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TelegramTemplate
     */
    omit?: TelegramTemplateOmit<ExtArgs> | null
    /**
     * The filter to search for the TelegramTemplate to update in case it exists.
     */
    where: TelegramTemplateWhereUniqueInput
    /**
     * In case the TelegramTemplate found by the `where` argument doesn't exist, create a new TelegramTemplate with this data.
     */
    create: XOR<TelegramTemplateCreateInput, TelegramTemplateUncheckedCreateInput>
    /**
     * In case the TelegramTemplate was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TelegramTemplateUpdateInput, TelegramTemplateUncheckedUpdateInput>
  }

  /**
   * TelegramTemplate delete
   */
  export type TelegramTemplateDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TelegramTemplate
     */
    select?: TelegramTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TelegramTemplate
     */
    omit?: TelegramTemplateOmit<ExtArgs> | null
    /**
     * Filter which TelegramTemplate to delete.
     */
    where: TelegramTemplateWhereUniqueInput
  }

  /**
   * TelegramTemplate deleteMany
   */
  export type TelegramTemplateDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TelegramTemplates to delete
     */
    where?: TelegramTemplateWhereInput
    /**
     * Limit how many TelegramTemplates to delete.
     */
    limit?: number
  }

  /**
   * TelegramTemplate without action
   */
  export type TelegramTemplateDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TelegramTemplate
     */
    select?: TelegramTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TelegramTemplate
     */
    omit?: TelegramTemplateOmit<ExtArgs> | null
  }


  /**
   * Model TelegramChat
   */

  export type AggregateTelegramChat = {
    _count: TelegramChatCountAggregateOutputType | null
    _min: TelegramChatMinAggregateOutputType | null
    _max: TelegramChatMaxAggregateOutputType | null
  }

  export type TelegramChatMinAggregateOutputType = {
    id: string | null
    name: string | null
    type: $Enums.TELEGRAM_CHAT_TYPE | null
    description: string | null
    chatId: string | null
    created: Date | null
    modified: Date | null
  }

  export type TelegramChatMaxAggregateOutputType = {
    id: string | null
    name: string | null
    type: $Enums.TELEGRAM_CHAT_TYPE | null
    description: string | null
    chatId: string | null
    created: Date | null
    modified: Date | null
  }

  export type TelegramChatCountAggregateOutputType = {
    id: number
    name: number
    type: number
    description: number
    chatId: number
    created: number
    modified: number
    _all: number
  }


  export type TelegramChatMinAggregateInputType = {
    id?: true
    name?: true
    type?: true
    description?: true
    chatId?: true
    created?: true
    modified?: true
  }

  export type TelegramChatMaxAggregateInputType = {
    id?: true
    name?: true
    type?: true
    description?: true
    chatId?: true
    created?: true
    modified?: true
  }

  export type TelegramChatCountAggregateInputType = {
    id?: true
    name?: true
    type?: true
    description?: true
    chatId?: true
    created?: true
    modified?: true
    _all?: true
  }

  export type TelegramChatAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TelegramChat to aggregate.
     */
    where?: TelegramChatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TelegramChats to fetch.
     */
    orderBy?: TelegramChatOrderByWithRelationInput | TelegramChatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TelegramChatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TelegramChats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TelegramChats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TelegramChats
    **/
    _count?: true | TelegramChatCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TelegramChatMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TelegramChatMaxAggregateInputType
  }

  export type GetTelegramChatAggregateType<T extends TelegramChatAggregateArgs> = {
        [P in keyof T & keyof AggregateTelegramChat]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTelegramChat[P]>
      : GetScalarType<T[P], AggregateTelegramChat[P]>
  }




  export type TelegramChatGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TelegramChatWhereInput
    orderBy?: TelegramChatOrderByWithAggregationInput | TelegramChatOrderByWithAggregationInput[]
    by: TelegramChatScalarFieldEnum[] | TelegramChatScalarFieldEnum
    having?: TelegramChatScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TelegramChatCountAggregateInputType | true
    _min?: TelegramChatMinAggregateInputType
    _max?: TelegramChatMaxAggregateInputType
  }

  export type TelegramChatGroupByOutputType = {
    id: string
    name: string
    type: $Enums.TELEGRAM_CHAT_TYPE
    description: string | null
    chatId: string
    created: Date
    modified: Date
    _count: TelegramChatCountAggregateOutputType | null
    _min: TelegramChatMinAggregateOutputType | null
    _max: TelegramChatMaxAggregateOutputType | null
  }

  type GetTelegramChatGroupByPayload<T extends TelegramChatGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TelegramChatGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TelegramChatGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TelegramChatGroupByOutputType[P]>
            : GetScalarType<T[P], TelegramChatGroupByOutputType[P]>
        }
      >
    >


  export type TelegramChatSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    type?: boolean
    description?: boolean
    chatId?: boolean
    created?: boolean
    modified?: boolean
  }, ExtArgs["result"]["telegramChat"]>

  export type TelegramChatSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    type?: boolean
    description?: boolean
    chatId?: boolean
    created?: boolean
    modified?: boolean
  }, ExtArgs["result"]["telegramChat"]>

  export type TelegramChatSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    type?: boolean
    description?: boolean
    chatId?: boolean
    created?: boolean
    modified?: boolean
  }, ExtArgs["result"]["telegramChat"]>

  export type TelegramChatSelectScalar = {
    id?: boolean
    name?: boolean
    type?: boolean
    description?: boolean
    chatId?: boolean
    created?: boolean
    modified?: boolean
  }

  export type TelegramChatOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "type" | "description" | "chatId" | "created" | "modified", ExtArgs["result"]["telegramChat"]>

  export type $TelegramChatPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TelegramChat"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      type: $Enums.TELEGRAM_CHAT_TYPE
      description: string | null
      chatId: string
      created: Date
      modified: Date
    }, ExtArgs["result"]["telegramChat"]>
    composites: {}
  }

  type TelegramChatGetPayload<S extends boolean | null | undefined | TelegramChatDefaultArgs> = $Result.GetResult<Prisma.$TelegramChatPayload, S>

  type TelegramChatCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TelegramChatFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TelegramChatCountAggregateInputType | true
    }

  export interface TelegramChatDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TelegramChat'], meta: { name: 'TelegramChat' } }
    /**
     * Find zero or one TelegramChat that matches the filter.
     * @param {TelegramChatFindUniqueArgs} args - Arguments to find a TelegramChat
     * @example
     * // Get one TelegramChat
     * const telegramChat = await prisma.telegramChat.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TelegramChatFindUniqueArgs>(args: SelectSubset<T, TelegramChatFindUniqueArgs<ExtArgs>>): Prisma__TelegramChatClient<$Result.GetResult<Prisma.$TelegramChatPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TelegramChat that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TelegramChatFindUniqueOrThrowArgs} args - Arguments to find a TelegramChat
     * @example
     * // Get one TelegramChat
     * const telegramChat = await prisma.telegramChat.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TelegramChatFindUniqueOrThrowArgs>(args: SelectSubset<T, TelegramChatFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TelegramChatClient<$Result.GetResult<Prisma.$TelegramChatPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TelegramChat that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TelegramChatFindFirstArgs} args - Arguments to find a TelegramChat
     * @example
     * // Get one TelegramChat
     * const telegramChat = await prisma.telegramChat.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TelegramChatFindFirstArgs>(args?: SelectSubset<T, TelegramChatFindFirstArgs<ExtArgs>>): Prisma__TelegramChatClient<$Result.GetResult<Prisma.$TelegramChatPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TelegramChat that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TelegramChatFindFirstOrThrowArgs} args - Arguments to find a TelegramChat
     * @example
     * // Get one TelegramChat
     * const telegramChat = await prisma.telegramChat.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TelegramChatFindFirstOrThrowArgs>(args?: SelectSubset<T, TelegramChatFindFirstOrThrowArgs<ExtArgs>>): Prisma__TelegramChatClient<$Result.GetResult<Prisma.$TelegramChatPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TelegramChats that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TelegramChatFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TelegramChats
     * const telegramChats = await prisma.telegramChat.findMany()
     * 
     * // Get first 10 TelegramChats
     * const telegramChats = await prisma.telegramChat.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const telegramChatWithIdOnly = await prisma.telegramChat.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TelegramChatFindManyArgs>(args?: SelectSubset<T, TelegramChatFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TelegramChatPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TelegramChat.
     * @param {TelegramChatCreateArgs} args - Arguments to create a TelegramChat.
     * @example
     * // Create one TelegramChat
     * const TelegramChat = await prisma.telegramChat.create({
     *   data: {
     *     // ... data to create a TelegramChat
     *   }
     * })
     * 
     */
    create<T extends TelegramChatCreateArgs>(args: SelectSubset<T, TelegramChatCreateArgs<ExtArgs>>): Prisma__TelegramChatClient<$Result.GetResult<Prisma.$TelegramChatPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TelegramChats.
     * @param {TelegramChatCreateManyArgs} args - Arguments to create many TelegramChats.
     * @example
     * // Create many TelegramChats
     * const telegramChat = await prisma.telegramChat.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TelegramChatCreateManyArgs>(args?: SelectSubset<T, TelegramChatCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TelegramChats and returns the data saved in the database.
     * @param {TelegramChatCreateManyAndReturnArgs} args - Arguments to create many TelegramChats.
     * @example
     * // Create many TelegramChats
     * const telegramChat = await prisma.telegramChat.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TelegramChats and only return the `id`
     * const telegramChatWithIdOnly = await prisma.telegramChat.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TelegramChatCreateManyAndReturnArgs>(args?: SelectSubset<T, TelegramChatCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TelegramChatPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TelegramChat.
     * @param {TelegramChatDeleteArgs} args - Arguments to delete one TelegramChat.
     * @example
     * // Delete one TelegramChat
     * const TelegramChat = await prisma.telegramChat.delete({
     *   where: {
     *     // ... filter to delete one TelegramChat
     *   }
     * })
     * 
     */
    delete<T extends TelegramChatDeleteArgs>(args: SelectSubset<T, TelegramChatDeleteArgs<ExtArgs>>): Prisma__TelegramChatClient<$Result.GetResult<Prisma.$TelegramChatPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TelegramChat.
     * @param {TelegramChatUpdateArgs} args - Arguments to update one TelegramChat.
     * @example
     * // Update one TelegramChat
     * const telegramChat = await prisma.telegramChat.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TelegramChatUpdateArgs>(args: SelectSubset<T, TelegramChatUpdateArgs<ExtArgs>>): Prisma__TelegramChatClient<$Result.GetResult<Prisma.$TelegramChatPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TelegramChats.
     * @param {TelegramChatDeleteManyArgs} args - Arguments to filter TelegramChats to delete.
     * @example
     * // Delete a few TelegramChats
     * const { count } = await prisma.telegramChat.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TelegramChatDeleteManyArgs>(args?: SelectSubset<T, TelegramChatDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TelegramChats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TelegramChatUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TelegramChats
     * const telegramChat = await prisma.telegramChat.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TelegramChatUpdateManyArgs>(args: SelectSubset<T, TelegramChatUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TelegramChats and returns the data updated in the database.
     * @param {TelegramChatUpdateManyAndReturnArgs} args - Arguments to update many TelegramChats.
     * @example
     * // Update many TelegramChats
     * const telegramChat = await prisma.telegramChat.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TelegramChats and only return the `id`
     * const telegramChatWithIdOnly = await prisma.telegramChat.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TelegramChatUpdateManyAndReturnArgs>(args: SelectSubset<T, TelegramChatUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TelegramChatPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TelegramChat.
     * @param {TelegramChatUpsertArgs} args - Arguments to update or create a TelegramChat.
     * @example
     * // Update or create a TelegramChat
     * const telegramChat = await prisma.telegramChat.upsert({
     *   create: {
     *     // ... data to create a TelegramChat
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TelegramChat we want to update
     *   }
     * })
     */
    upsert<T extends TelegramChatUpsertArgs>(args: SelectSubset<T, TelegramChatUpsertArgs<ExtArgs>>): Prisma__TelegramChatClient<$Result.GetResult<Prisma.$TelegramChatPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TelegramChats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TelegramChatCountArgs} args - Arguments to filter TelegramChats to count.
     * @example
     * // Count the number of TelegramChats
     * const count = await prisma.telegramChat.count({
     *   where: {
     *     // ... the filter for the TelegramChats we want to count
     *   }
     * })
    **/
    count<T extends TelegramChatCountArgs>(
      args?: Subset<T, TelegramChatCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TelegramChatCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TelegramChat.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TelegramChatAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TelegramChatAggregateArgs>(args: Subset<T, TelegramChatAggregateArgs>): Prisma.PrismaPromise<GetTelegramChatAggregateType<T>>

    /**
     * Group by TelegramChat.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TelegramChatGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TelegramChatGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TelegramChatGroupByArgs['orderBy'] }
        : { orderBy?: TelegramChatGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TelegramChatGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTelegramChatGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TelegramChat model
   */
  readonly fields: TelegramChatFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TelegramChat.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TelegramChatClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the TelegramChat model
   */
  interface TelegramChatFieldRefs {
    readonly id: FieldRef<"TelegramChat", 'String'>
    readonly name: FieldRef<"TelegramChat", 'String'>
    readonly type: FieldRef<"TelegramChat", 'TELEGRAM_CHAT_TYPE'>
    readonly description: FieldRef<"TelegramChat", 'String'>
    readonly chatId: FieldRef<"TelegramChat", 'String'>
    readonly created: FieldRef<"TelegramChat", 'DateTime'>
    readonly modified: FieldRef<"TelegramChat", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * TelegramChat findUnique
   */
  export type TelegramChatFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TelegramChat
     */
    select?: TelegramChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TelegramChat
     */
    omit?: TelegramChatOmit<ExtArgs> | null
    /**
     * Filter, which TelegramChat to fetch.
     */
    where: TelegramChatWhereUniqueInput
  }

  /**
   * TelegramChat findUniqueOrThrow
   */
  export type TelegramChatFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TelegramChat
     */
    select?: TelegramChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TelegramChat
     */
    omit?: TelegramChatOmit<ExtArgs> | null
    /**
     * Filter, which TelegramChat to fetch.
     */
    where: TelegramChatWhereUniqueInput
  }

  /**
   * TelegramChat findFirst
   */
  export type TelegramChatFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TelegramChat
     */
    select?: TelegramChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TelegramChat
     */
    omit?: TelegramChatOmit<ExtArgs> | null
    /**
     * Filter, which TelegramChat to fetch.
     */
    where?: TelegramChatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TelegramChats to fetch.
     */
    orderBy?: TelegramChatOrderByWithRelationInput | TelegramChatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TelegramChats.
     */
    cursor?: TelegramChatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TelegramChats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TelegramChats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TelegramChats.
     */
    distinct?: TelegramChatScalarFieldEnum | TelegramChatScalarFieldEnum[]
  }

  /**
   * TelegramChat findFirstOrThrow
   */
  export type TelegramChatFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TelegramChat
     */
    select?: TelegramChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TelegramChat
     */
    omit?: TelegramChatOmit<ExtArgs> | null
    /**
     * Filter, which TelegramChat to fetch.
     */
    where?: TelegramChatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TelegramChats to fetch.
     */
    orderBy?: TelegramChatOrderByWithRelationInput | TelegramChatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TelegramChats.
     */
    cursor?: TelegramChatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TelegramChats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TelegramChats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TelegramChats.
     */
    distinct?: TelegramChatScalarFieldEnum | TelegramChatScalarFieldEnum[]
  }

  /**
   * TelegramChat findMany
   */
  export type TelegramChatFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TelegramChat
     */
    select?: TelegramChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TelegramChat
     */
    omit?: TelegramChatOmit<ExtArgs> | null
    /**
     * Filter, which TelegramChats to fetch.
     */
    where?: TelegramChatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TelegramChats to fetch.
     */
    orderBy?: TelegramChatOrderByWithRelationInput | TelegramChatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TelegramChats.
     */
    cursor?: TelegramChatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TelegramChats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TelegramChats.
     */
    skip?: number
    distinct?: TelegramChatScalarFieldEnum | TelegramChatScalarFieldEnum[]
  }

  /**
   * TelegramChat create
   */
  export type TelegramChatCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TelegramChat
     */
    select?: TelegramChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TelegramChat
     */
    omit?: TelegramChatOmit<ExtArgs> | null
    /**
     * The data needed to create a TelegramChat.
     */
    data: XOR<TelegramChatCreateInput, TelegramChatUncheckedCreateInput>
  }

  /**
   * TelegramChat createMany
   */
  export type TelegramChatCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TelegramChats.
     */
    data: TelegramChatCreateManyInput | TelegramChatCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TelegramChat createManyAndReturn
   */
  export type TelegramChatCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TelegramChat
     */
    select?: TelegramChatSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TelegramChat
     */
    omit?: TelegramChatOmit<ExtArgs> | null
    /**
     * The data used to create many TelegramChats.
     */
    data: TelegramChatCreateManyInput | TelegramChatCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TelegramChat update
   */
  export type TelegramChatUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TelegramChat
     */
    select?: TelegramChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TelegramChat
     */
    omit?: TelegramChatOmit<ExtArgs> | null
    /**
     * The data needed to update a TelegramChat.
     */
    data: XOR<TelegramChatUpdateInput, TelegramChatUncheckedUpdateInput>
    /**
     * Choose, which TelegramChat to update.
     */
    where: TelegramChatWhereUniqueInput
  }

  /**
   * TelegramChat updateMany
   */
  export type TelegramChatUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TelegramChats.
     */
    data: XOR<TelegramChatUpdateManyMutationInput, TelegramChatUncheckedUpdateManyInput>
    /**
     * Filter which TelegramChats to update
     */
    where?: TelegramChatWhereInput
    /**
     * Limit how many TelegramChats to update.
     */
    limit?: number
  }

  /**
   * TelegramChat updateManyAndReturn
   */
  export type TelegramChatUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TelegramChat
     */
    select?: TelegramChatSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TelegramChat
     */
    omit?: TelegramChatOmit<ExtArgs> | null
    /**
     * The data used to update TelegramChats.
     */
    data: XOR<TelegramChatUpdateManyMutationInput, TelegramChatUncheckedUpdateManyInput>
    /**
     * Filter which TelegramChats to update
     */
    where?: TelegramChatWhereInput
    /**
     * Limit how many TelegramChats to update.
     */
    limit?: number
  }

  /**
   * TelegramChat upsert
   */
  export type TelegramChatUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TelegramChat
     */
    select?: TelegramChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TelegramChat
     */
    omit?: TelegramChatOmit<ExtArgs> | null
    /**
     * The filter to search for the TelegramChat to update in case it exists.
     */
    where: TelegramChatWhereUniqueInput
    /**
     * In case the TelegramChat found by the `where` argument doesn't exist, create a new TelegramChat with this data.
     */
    create: XOR<TelegramChatCreateInput, TelegramChatUncheckedCreateInput>
    /**
     * In case the TelegramChat was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TelegramChatUpdateInput, TelegramChatUncheckedUpdateInput>
  }

  /**
   * TelegramChat delete
   */
  export type TelegramChatDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TelegramChat
     */
    select?: TelegramChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TelegramChat
     */
    omit?: TelegramChatOmit<ExtArgs> | null
    /**
     * Filter which TelegramChat to delete.
     */
    where: TelegramChatWhereUniqueInput
  }

  /**
   * TelegramChat deleteMany
   */
  export type TelegramChatDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TelegramChats to delete
     */
    where?: TelegramChatWhereInput
    /**
     * Limit how many TelegramChats to delete.
     */
    limit?: number
  }

  /**
   * TelegramChat without action
   */
  export type TelegramChatDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TelegramChat
     */
    select?: TelegramChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TelegramChat
     */
    omit?: TelegramChatOmit<ExtArgs> | null
  }


  /**
   * Model TelegramBot
   */

  export type AggregateTelegramBot = {
    _count: TelegramBotCountAggregateOutputType | null
    _min: TelegramBotMinAggregateOutputType | null
    _max: TelegramBotMaxAggregateOutputType | null
  }

  export type TelegramBotMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    enabled: boolean | null
    token: string | null
    created: Date | null
    modified: Date | null
  }

  export type TelegramBotMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    enabled: boolean | null
    token: string | null
    created: Date | null
    modified: Date | null
  }

  export type TelegramBotCountAggregateOutputType = {
    id: number
    name: number
    description: number
    enabled: number
    token: number
    created: number
    modified: number
    _all: number
  }


  export type TelegramBotMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    enabled?: true
    token?: true
    created?: true
    modified?: true
  }

  export type TelegramBotMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    enabled?: true
    token?: true
    created?: true
    modified?: true
  }

  export type TelegramBotCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    enabled?: true
    token?: true
    created?: true
    modified?: true
    _all?: true
  }

  export type TelegramBotAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TelegramBot to aggregate.
     */
    where?: TelegramBotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TelegramBots to fetch.
     */
    orderBy?: TelegramBotOrderByWithRelationInput | TelegramBotOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TelegramBotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TelegramBots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TelegramBots.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TelegramBots
    **/
    _count?: true | TelegramBotCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TelegramBotMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TelegramBotMaxAggregateInputType
  }

  export type GetTelegramBotAggregateType<T extends TelegramBotAggregateArgs> = {
        [P in keyof T & keyof AggregateTelegramBot]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTelegramBot[P]>
      : GetScalarType<T[P], AggregateTelegramBot[P]>
  }




  export type TelegramBotGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TelegramBotWhereInput
    orderBy?: TelegramBotOrderByWithAggregationInput | TelegramBotOrderByWithAggregationInput[]
    by: TelegramBotScalarFieldEnum[] | TelegramBotScalarFieldEnum
    having?: TelegramBotScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TelegramBotCountAggregateInputType | true
    _min?: TelegramBotMinAggregateInputType
    _max?: TelegramBotMaxAggregateInputType
  }

  export type TelegramBotGroupByOutputType = {
    id: string
    name: string
    description: string | null
    enabled: boolean
    token: string
    created: Date
    modified: Date
    _count: TelegramBotCountAggregateOutputType | null
    _min: TelegramBotMinAggregateOutputType | null
    _max: TelegramBotMaxAggregateOutputType | null
  }

  type GetTelegramBotGroupByPayload<T extends TelegramBotGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TelegramBotGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TelegramBotGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TelegramBotGroupByOutputType[P]>
            : GetScalarType<T[P], TelegramBotGroupByOutputType[P]>
        }
      >
    >


  export type TelegramBotSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    enabled?: boolean
    token?: boolean
    created?: boolean
    modified?: boolean
  }, ExtArgs["result"]["telegramBot"]>

  export type TelegramBotSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    enabled?: boolean
    token?: boolean
    created?: boolean
    modified?: boolean
  }, ExtArgs["result"]["telegramBot"]>

  export type TelegramBotSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    enabled?: boolean
    token?: boolean
    created?: boolean
    modified?: boolean
  }, ExtArgs["result"]["telegramBot"]>

  export type TelegramBotSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    enabled?: boolean
    token?: boolean
    created?: boolean
    modified?: boolean
  }

  export type TelegramBotOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "enabled" | "token" | "created" | "modified", ExtArgs["result"]["telegramBot"]>

  export type $TelegramBotPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TelegramBot"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      description: string | null
      enabled: boolean
      token: string
      created: Date
      modified: Date
    }, ExtArgs["result"]["telegramBot"]>
    composites: {}
  }

  type TelegramBotGetPayload<S extends boolean | null | undefined | TelegramBotDefaultArgs> = $Result.GetResult<Prisma.$TelegramBotPayload, S>

  type TelegramBotCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TelegramBotFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TelegramBotCountAggregateInputType | true
    }

  export interface TelegramBotDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TelegramBot'], meta: { name: 'TelegramBot' } }
    /**
     * Find zero or one TelegramBot that matches the filter.
     * @param {TelegramBotFindUniqueArgs} args - Arguments to find a TelegramBot
     * @example
     * // Get one TelegramBot
     * const telegramBot = await prisma.telegramBot.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TelegramBotFindUniqueArgs>(args: SelectSubset<T, TelegramBotFindUniqueArgs<ExtArgs>>): Prisma__TelegramBotClient<$Result.GetResult<Prisma.$TelegramBotPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TelegramBot that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TelegramBotFindUniqueOrThrowArgs} args - Arguments to find a TelegramBot
     * @example
     * // Get one TelegramBot
     * const telegramBot = await prisma.telegramBot.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TelegramBotFindUniqueOrThrowArgs>(args: SelectSubset<T, TelegramBotFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TelegramBotClient<$Result.GetResult<Prisma.$TelegramBotPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TelegramBot that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TelegramBotFindFirstArgs} args - Arguments to find a TelegramBot
     * @example
     * // Get one TelegramBot
     * const telegramBot = await prisma.telegramBot.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TelegramBotFindFirstArgs>(args?: SelectSubset<T, TelegramBotFindFirstArgs<ExtArgs>>): Prisma__TelegramBotClient<$Result.GetResult<Prisma.$TelegramBotPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TelegramBot that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TelegramBotFindFirstOrThrowArgs} args - Arguments to find a TelegramBot
     * @example
     * // Get one TelegramBot
     * const telegramBot = await prisma.telegramBot.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TelegramBotFindFirstOrThrowArgs>(args?: SelectSubset<T, TelegramBotFindFirstOrThrowArgs<ExtArgs>>): Prisma__TelegramBotClient<$Result.GetResult<Prisma.$TelegramBotPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TelegramBots that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TelegramBotFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TelegramBots
     * const telegramBots = await prisma.telegramBot.findMany()
     * 
     * // Get first 10 TelegramBots
     * const telegramBots = await prisma.telegramBot.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const telegramBotWithIdOnly = await prisma.telegramBot.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TelegramBotFindManyArgs>(args?: SelectSubset<T, TelegramBotFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TelegramBotPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TelegramBot.
     * @param {TelegramBotCreateArgs} args - Arguments to create a TelegramBot.
     * @example
     * // Create one TelegramBot
     * const TelegramBot = await prisma.telegramBot.create({
     *   data: {
     *     // ... data to create a TelegramBot
     *   }
     * })
     * 
     */
    create<T extends TelegramBotCreateArgs>(args: SelectSubset<T, TelegramBotCreateArgs<ExtArgs>>): Prisma__TelegramBotClient<$Result.GetResult<Prisma.$TelegramBotPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TelegramBots.
     * @param {TelegramBotCreateManyArgs} args - Arguments to create many TelegramBots.
     * @example
     * // Create many TelegramBots
     * const telegramBot = await prisma.telegramBot.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TelegramBotCreateManyArgs>(args?: SelectSubset<T, TelegramBotCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TelegramBots and returns the data saved in the database.
     * @param {TelegramBotCreateManyAndReturnArgs} args - Arguments to create many TelegramBots.
     * @example
     * // Create many TelegramBots
     * const telegramBot = await prisma.telegramBot.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TelegramBots and only return the `id`
     * const telegramBotWithIdOnly = await prisma.telegramBot.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TelegramBotCreateManyAndReturnArgs>(args?: SelectSubset<T, TelegramBotCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TelegramBotPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TelegramBot.
     * @param {TelegramBotDeleteArgs} args - Arguments to delete one TelegramBot.
     * @example
     * // Delete one TelegramBot
     * const TelegramBot = await prisma.telegramBot.delete({
     *   where: {
     *     // ... filter to delete one TelegramBot
     *   }
     * })
     * 
     */
    delete<T extends TelegramBotDeleteArgs>(args: SelectSubset<T, TelegramBotDeleteArgs<ExtArgs>>): Prisma__TelegramBotClient<$Result.GetResult<Prisma.$TelegramBotPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TelegramBot.
     * @param {TelegramBotUpdateArgs} args - Arguments to update one TelegramBot.
     * @example
     * // Update one TelegramBot
     * const telegramBot = await prisma.telegramBot.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TelegramBotUpdateArgs>(args: SelectSubset<T, TelegramBotUpdateArgs<ExtArgs>>): Prisma__TelegramBotClient<$Result.GetResult<Prisma.$TelegramBotPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TelegramBots.
     * @param {TelegramBotDeleteManyArgs} args - Arguments to filter TelegramBots to delete.
     * @example
     * // Delete a few TelegramBots
     * const { count } = await prisma.telegramBot.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TelegramBotDeleteManyArgs>(args?: SelectSubset<T, TelegramBotDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TelegramBots.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TelegramBotUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TelegramBots
     * const telegramBot = await prisma.telegramBot.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TelegramBotUpdateManyArgs>(args: SelectSubset<T, TelegramBotUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TelegramBots and returns the data updated in the database.
     * @param {TelegramBotUpdateManyAndReturnArgs} args - Arguments to update many TelegramBots.
     * @example
     * // Update many TelegramBots
     * const telegramBot = await prisma.telegramBot.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TelegramBots and only return the `id`
     * const telegramBotWithIdOnly = await prisma.telegramBot.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TelegramBotUpdateManyAndReturnArgs>(args: SelectSubset<T, TelegramBotUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TelegramBotPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TelegramBot.
     * @param {TelegramBotUpsertArgs} args - Arguments to update or create a TelegramBot.
     * @example
     * // Update or create a TelegramBot
     * const telegramBot = await prisma.telegramBot.upsert({
     *   create: {
     *     // ... data to create a TelegramBot
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TelegramBot we want to update
     *   }
     * })
     */
    upsert<T extends TelegramBotUpsertArgs>(args: SelectSubset<T, TelegramBotUpsertArgs<ExtArgs>>): Prisma__TelegramBotClient<$Result.GetResult<Prisma.$TelegramBotPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TelegramBots.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TelegramBotCountArgs} args - Arguments to filter TelegramBots to count.
     * @example
     * // Count the number of TelegramBots
     * const count = await prisma.telegramBot.count({
     *   where: {
     *     // ... the filter for the TelegramBots we want to count
     *   }
     * })
    **/
    count<T extends TelegramBotCountArgs>(
      args?: Subset<T, TelegramBotCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TelegramBotCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TelegramBot.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TelegramBotAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TelegramBotAggregateArgs>(args: Subset<T, TelegramBotAggregateArgs>): Prisma.PrismaPromise<GetTelegramBotAggregateType<T>>

    /**
     * Group by TelegramBot.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TelegramBotGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TelegramBotGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TelegramBotGroupByArgs['orderBy'] }
        : { orderBy?: TelegramBotGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TelegramBotGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTelegramBotGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TelegramBot model
   */
  readonly fields: TelegramBotFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TelegramBot.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TelegramBotClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the TelegramBot model
   */
  interface TelegramBotFieldRefs {
    readonly id: FieldRef<"TelegramBot", 'String'>
    readonly name: FieldRef<"TelegramBot", 'String'>
    readonly description: FieldRef<"TelegramBot", 'String'>
    readonly enabled: FieldRef<"TelegramBot", 'Boolean'>
    readonly token: FieldRef<"TelegramBot", 'String'>
    readonly created: FieldRef<"TelegramBot", 'DateTime'>
    readonly modified: FieldRef<"TelegramBot", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * TelegramBot findUnique
   */
  export type TelegramBotFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TelegramBot
     */
    select?: TelegramBotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TelegramBot
     */
    omit?: TelegramBotOmit<ExtArgs> | null
    /**
     * Filter, which TelegramBot to fetch.
     */
    where: TelegramBotWhereUniqueInput
  }

  /**
   * TelegramBot findUniqueOrThrow
   */
  export type TelegramBotFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TelegramBot
     */
    select?: TelegramBotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TelegramBot
     */
    omit?: TelegramBotOmit<ExtArgs> | null
    /**
     * Filter, which TelegramBot to fetch.
     */
    where: TelegramBotWhereUniqueInput
  }

  /**
   * TelegramBot findFirst
   */
  export type TelegramBotFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TelegramBot
     */
    select?: TelegramBotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TelegramBot
     */
    omit?: TelegramBotOmit<ExtArgs> | null
    /**
     * Filter, which TelegramBot to fetch.
     */
    where?: TelegramBotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TelegramBots to fetch.
     */
    orderBy?: TelegramBotOrderByWithRelationInput | TelegramBotOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TelegramBots.
     */
    cursor?: TelegramBotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TelegramBots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TelegramBots.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TelegramBots.
     */
    distinct?: TelegramBotScalarFieldEnum | TelegramBotScalarFieldEnum[]
  }

  /**
   * TelegramBot findFirstOrThrow
   */
  export type TelegramBotFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TelegramBot
     */
    select?: TelegramBotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TelegramBot
     */
    omit?: TelegramBotOmit<ExtArgs> | null
    /**
     * Filter, which TelegramBot to fetch.
     */
    where?: TelegramBotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TelegramBots to fetch.
     */
    orderBy?: TelegramBotOrderByWithRelationInput | TelegramBotOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TelegramBots.
     */
    cursor?: TelegramBotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TelegramBots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TelegramBots.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TelegramBots.
     */
    distinct?: TelegramBotScalarFieldEnum | TelegramBotScalarFieldEnum[]
  }

  /**
   * TelegramBot findMany
   */
  export type TelegramBotFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TelegramBot
     */
    select?: TelegramBotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TelegramBot
     */
    omit?: TelegramBotOmit<ExtArgs> | null
    /**
     * Filter, which TelegramBots to fetch.
     */
    where?: TelegramBotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TelegramBots to fetch.
     */
    orderBy?: TelegramBotOrderByWithRelationInput | TelegramBotOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TelegramBots.
     */
    cursor?: TelegramBotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TelegramBots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TelegramBots.
     */
    skip?: number
    distinct?: TelegramBotScalarFieldEnum | TelegramBotScalarFieldEnum[]
  }

  /**
   * TelegramBot create
   */
  export type TelegramBotCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TelegramBot
     */
    select?: TelegramBotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TelegramBot
     */
    omit?: TelegramBotOmit<ExtArgs> | null
    /**
     * The data needed to create a TelegramBot.
     */
    data: XOR<TelegramBotCreateInput, TelegramBotUncheckedCreateInput>
  }

  /**
   * TelegramBot createMany
   */
  export type TelegramBotCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TelegramBots.
     */
    data: TelegramBotCreateManyInput | TelegramBotCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TelegramBot createManyAndReturn
   */
  export type TelegramBotCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TelegramBot
     */
    select?: TelegramBotSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TelegramBot
     */
    omit?: TelegramBotOmit<ExtArgs> | null
    /**
     * The data used to create many TelegramBots.
     */
    data: TelegramBotCreateManyInput | TelegramBotCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TelegramBot update
   */
  export type TelegramBotUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TelegramBot
     */
    select?: TelegramBotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TelegramBot
     */
    omit?: TelegramBotOmit<ExtArgs> | null
    /**
     * The data needed to update a TelegramBot.
     */
    data: XOR<TelegramBotUpdateInput, TelegramBotUncheckedUpdateInput>
    /**
     * Choose, which TelegramBot to update.
     */
    where: TelegramBotWhereUniqueInput
  }

  /**
   * TelegramBot updateMany
   */
  export type TelegramBotUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TelegramBots.
     */
    data: XOR<TelegramBotUpdateManyMutationInput, TelegramBotUncheckedUpdateManyInput>
    /**
     * Filter which TelegramBots to update
     */
    where?: TelegramBotWhereInput
    /**
     * Limit how many TelegramBots to update.
     */
    limit?: number
  }

  /**
   * TelegramBot updateManyAndReturn
   */
  export type TelegramBotUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TelegramBot
     */
    select?: TelegramBotSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TelegramBot
     */
    omit?: TelegramBotOmit<ExtArgs> | null
    /**
     * The data used to update TelegramBots.
     */
    data: XOR<TelegramBotUpdateManyMutationInput, TelegramBotUncheckedUpdateManyInput>
    /**
     * Filter which TelegramBots to update
     */
    where?: TelegramBotWhereInput
    /**
     * Limit how many TelegramBots to update.
     */
    limit?: number
  }

  /**
   * TelegramBot upsert
   */
  export type TelegramBotUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TelegramBot
     */
    select?: TelegramBotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TelegramBot
     */
    omit?: TelegramBotOmit<ExtArgs> | null
    /**
     * The filter to search for the TelegramBot to update in case it exists.
     */
    where: TelegramBotWhereUniqueInput
    /**
     * In case the TelegramBot found by the `where` argument doesn't exist, create a new TelegramBot with this data.
     */
    create: XOR<TelegramBotCreateInput, TelegramBotUncheckedCreateInput>
    /**
     * In case the TelegramBot was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TelegramBotUpdateInput, TelegramBotUncheckedUpdateInput>
  }

  /**
   * TelegramBot delete
   */
  export type TelegramBotDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TelegramBot
     */
    select?: TelegramBotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TelegramBot
     */
    omit?: TelegramBotOmit<ExtArgs> | null
    /**
     * Filter which TelegramBot to delete.
     */
    where: TelegramBotWhereUniqueInput
  }

  /**
   * TelegramBot deleteMany
   */
  export type TelegramBotDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TelegramBots to delete
     */
    where?: TelegramBotWhereInput
    /**
     * Limit how many TelegramBots to delete.
     */
    limit?: number
  }

  /**
   * TelegramBot without action
   */
  export type TelegramBotDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TelegramBot
     */
    select?: TelegramBotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TelegramBot
     */
    omit?: TelegramBotOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    username: 'username',
    password: 'password',
    emailUser: 'emailUser',
    inviteBy: 'inviteBy',
    passwordExpired: 'passwordExpired',
    passwordCreated: 'passwordCreated',
    passwordAttempt: 'passwordAttempt',
    is_owner: 'is_owner',
    mfaTelegramEnabled: 'mfaTelegramEnabled',
    mfaTotpEnabled: 'mfaTotpEnabled',
    telegramUsername: 'telegramUsername',
    totpSecret: 'totpSecret',
    enabled: 'enabled',
    modified: 'modified',
    created: 'created'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const PermissionScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description'
  };

  export type PermissionScalarFieldEnum = (typeof PermissionScalarFieldEnum)[keyof typeof PermissionScalarFieldEnum]


  export const RoleScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    enabled: 'enabled',
    modified: 'modified',
    created: 'created'
  };

  export type RoleScalarFieldEnum = (typeof RoleScalarFieldEnum)[keyof typeof RoleScalarFieldEnum]


  export const RolePermissionScalarFieldEnum: {
    id: 'id',
    roleId: 'roleId',
    permissionId: 'permissionId',
    modified: 'modified',
    created: 'created'
  };

  export type RolePermissionScalarFieldEnum = (typeof RolePermissionScalarFieldEnum)[keyof typeof RolePermissionScalarFieldEnum]


  export const RolePlayerScalarFieldEnum: {
    id: 'id',
    playerId: 'playerId',
    roleId: 'roleId',
    modified: 'modified',
    created: 'created'
  };

  export type RolePlayerScalarFieldEnum = (typeof RolePlayerScalarFieldEnum)[keyof typeof RolePlayerScalarFieldEnum]


  export const SessionScalarFieldEnum: {
    id: 'id',
    device: 'device',
    ip: 'ip',
    token: 'token',
    createdById: 'createdById',
    expired: 'expired',
    revoked: 'revoked',
    modified: 'modified',
    created: 'created'
  };

  export type SessionScalarFieldEnum = (typeof SessionScalarFieldEnum)[keyof typeof SessionScalarFieldEnum]


  export const ApiKeyScalarFieldEnum: {
    id: 'id',
    type: 'type',
    name: 'name',
    key: 'key',
    hash: 'hash',
    enabled: 'enabled',
    startDate: 'startDate',
    endDate: 'endDate',
    created: 'created',
    userId: 'userId'
  };

  export type ApiKeyScalarFieldEnum = (typeof ApiKeyScalarFieldEnum)[keyof typeof ApiKeyScalarFieldEnum]


  export const ActivityScalarFieldEnum: {
    id: 'id',
    type: 'type',
    description: 'description',
    device: 'device',
    ip: 'ip',
    sessionId: 'sessionId',
    reference: 'reference',
    createdById: 'createdById',
    modified: 'modified',
    created: 'created'
  };

  export type ActivityScalarFieldEnum = (typeof ActivityScalarFieldEnum)[keyof typeof ActivityScalarFieldEnum]


  export const I18nScalarFieldEnum: {
    id: 'id',
    key: 'key',
    en: 'en',
    zh: 'zh',
    vi: 'vi',
    ko: 'ko'
  };

  export type I18nScalarFieldEnum = (typeof I18nScalarFieldEnum)[keyof typeof I18nScalarFieldEnum]


  export const IPWhitelistScalarFieldEnum: {
    id: 'id',
    ip: 'ip',
    note: 'note'
  };

  export type IPWhitelistScalarFieldEnum = (typeof IPWhitelistScalarFieldEnum)[keyof typeof IPWhitelistScalarFieldEnum]


  export const SettingScalarFieldEnum: {
    id: 'id',
    key: 'key',
    value: 'value',
    description: 'description',
    isSecret: 'isSecret',
    type: 'type'
  };

  export type SettingScalarFieldEnum = (typeof SettingScalarFieldEnum)[keyof typeof SettingScalarFieldEnum]


  export const ProxyScalarFieldEnum: {
    id: 'id',
    protocol: 'protocol',
    host: 'host',
    port: 'port',
    username: 'username',
    password: 'password',
    enabled: 'enabled',
    modified: 'modified',
    created: 'created'
  };

  export type ProxyScalarFieldEnum = (typeof ProxyScalarFieldEnum)[keyof typeof ProxyScalarFieldEnum]


  export const TelegramTemplateScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    message: 'message',
    photos: 'photos',
    videos: 'videos',
    buttons: 'buttons',
    created: 'created',
    modified: 'modified'
  };

  export type TelegramTemplateScalarFieldEnum = (typeof TelegramTemplateScalarFieldEnum)[keyof typeof TelegramTemplateScalarFieldEnum]


  export const TelegramChatScalarFieldEnum: {
    id: 'id',
    name: 'name',
    type: 'type',
    description: 'description',
    chatId: 'chatId',
    created: 'created',
    modified: 'modified'
  };

  export type TelegramChatScalarFieldEnum = (typeof TelegramChatScalarFieldEnum)[keyof typeof TelegramChatScalarFieldEnum]


  export const TelegramBotScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    enabled: 'enabled',
    token: 'token',
    created: 'created',
    modified: 'modified'
  };

  export type TelegramBotScalarFieldEnum = (typeof TelegramBotScalarFieldEnum)[keyof typeof TelegramBotScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'API_KEY_TYPE'
   */
  export type EnumAPI_KEY_TYPEFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'API_KEY_TYPE'>
    


  /**
   * Reference to a field of type 'API_KEY_TYPE[]'
   */
  export type ListEnumAPI_KEY_TYPEFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'API_KEY_TYPE[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'SETTING_DATA_TYPE'
   */
  export type EnumSETTING_DATA_TYPEFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SETTING_DATA_TYPE'>
    


  /**
   * Reference to a field of type 'SETTING_DATA_TYPE[]'
   */
  export type ListEnumSETTING_DATA_TYPEFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SETTING_DATA_TYPE[]'>
    


  /**
   * Reference to a field of type 'ProxyProtocol'
   */
  export type EnumProxyProtocolFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ProxyProtocol'>
    


  /**
   * Reference to a field of type 'ProxyProtocol[]'
   */
  export type ListEnumProxyProtocolFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ProxyProtocol[]'>
    


  /**
   * Reference to a field of type 'TELEGRAM_CHAT_TYPE'
   */
  export type EnumTELEGRAM_CHAT_TYPEFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TELEGRAM_CHAT_TYPE'>
    


  /**
   * Reference to a field of type 'TELEGRAM_CHAT_TYPE[]'
   */
  export type ListEnumTELEGRAM_CHAT_TYPEFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TELEGRAM_CHAT_TYPE[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    username?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    emailUser?: StringFilter<"User"> | string
    inviteBy?: StringFilter<"User"> | string
    passwordExpired?: DateTimeFilter<"User"> | Date | string
    passwordCreated?: DateTimeFilter<"User"> | Date | string
    passwordAttempt?: IntFilter<"User"> | number
    is_owner?: BoolFilter<"User"> | boolean
    mfaTelegramEnabled?: BoolFilter<"User"> | boolean
    mfaTotpEnabled?: BoolFilter<"User"> | boolean
    telegramUsername?: StringNullableFilter<"User"> | string | null
    totpSecret?: StringNullableFilter<"User"> | string | null
    enabled?: BoolFilter<"User"> | boolean
    modified?: DateTimeFilter<"User"> | Date | string
    created?: DateTimeFilter<"User"> | Date | string
    activities?: ActivityListRelationFilter
    apiKeys?: ApiKeyListRelationFilter
    roles?: RolePlayerListRelationFilter
    sessions?: SessionListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    emailUser?: SortOrder
    inviteBy?: SortOrder
    passwordExpired?: SortOrder
    passwordCreated?: SortOrder
    passwordAttempt?: SortOrder
    is_owner?: SortOrder
    mfaTelegramEnabled?: SortOrder
    mfaTotpEnabled?: SortOrder
    telegramUsername?: SortOrderInput | SortOrder
    totpSecret?: SortOrderInput | SortOrder
    enabled?: SortOrder
    modified?: SortOrder
    created?: SortOrder
    activities?: ActivityOrderByRelationAggregateInput
    apiKeys?: ApiKeyOrderByRelationAggregateInput
    roles?: RolePlayerOrderByRelationAggregateInput
    sessions?: SessionOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    username?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringFilter<"User"> | string
    emailUser?: StringFilter<"User"> | string
    inviteBy?: StringFilter<"User"> | string
    passwordExpired?: DateTimeFilter<"User"> | Date | string
    passwordCreated?: DateTimeFilter<"User"> | Date | string
    passwordAttempt?: IntFilter<"User"> | number
    is_owner?: BoolFilter<"User"> | boolean
    mfaTelegramEnabled?: BoolFilter<"User"> | boolean
    mfaTotpEnabled?: BoolFilter<"User"> | boolean
    telegramUsername?: StringNullableFilter<"User"> | string | null
    totpSecret?: StringNullableFilter<"User"> | string | null
    enabled?: BoolFilter<"User"> | boolean
    modified?: DateTimeFilter<"User"> | Date | string
    created?: DateTimeFilter<"User"> | Date | string
    activities?: ActivityListRelationFilter
    apiKeys?: ApiKeyListRelationFilter
    roles?: RolePlayerListRelationFilter
    sessions?: SessionListRelationFilter
  }, "id" | "username">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    emailUser?: SortOrder
    inviteBy?: SortOrder
    passwordExpired?: SortOrder
    passwordCreated?: SortOrder
    passwordAttempt?: SortOrder
    is_owner?: SortOrder
    mfaTelegramEnabled?: SortOrder
    mfaTotpEnabled?: SortOrder
    telegramUsername?: SortOrderInput | SortOrder
    totpSecret?: SortOrderInput | SortOrder
    enabled?: SortOrder
    modified?: SortOrder
    created?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    username?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    emailUser?: StringWithAggregatesFilter<"User"> | string
    inviteBy?: StringWithAggregatesFilter<"User"> | string
    passwordExpired?: DateTimeWithAggregatesFilter<"User"> | Date | string
    passwordCreated?: DateTimeWithAggregatesFilter<"User"> | Date | string
    passwordAttempt?: IntWithAggregatesFilter<"User"> | number
    is_owner?: BoolWithAggregatesFilter<"User"> | boolean
    mfaTelegramEnabled?: BoolWithAggregatesFilter<"User"> | boolean
    mfaTotpEnabled?: BoolWithAggregatesFilter<"User"> | boolean
    telegramUsername?: StringNullableWithAggregatesFilter<"User"> | string | null
    totpSecret?: StringNullableWithAggregatesFilter<"User"> | string | null
    enabled?: BoolWithAggregatesFilter<"User"> | boolean
    modified?: DateTimeWithAggregatesFilter<"User"> | Date | string
    created?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type PermissionWhereInput = {
    AND?: PermissionWhereInput | PermissionWhereInput[]
    OR?: PermissionWhereInput[]
    NOT?: PermissionWhereInput | PermissionWhereInput[]
    id?: StringFilter<"Permission"> | string
    title?: StringFilter<"Permission"> | string
    description?: StringNullableFilter<"Permission"> | string | null
    roles?: RolePermissionListRelationFilter
  }

  export type PermissionOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    roles?: RolePermissionOrderByRelationAggregateInput
  }

  export type PermissionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    title?: string
    AND?: PermissionWhereInput | PermissionWhereInput[]
    OR?: PermissionWhereInput[]
    NOT?: PermissionWhereInput | PermissionWhereInput[]
    description?: StringNullableFilter<"Permission"> | string | null
    roles?: RolePermissionListRelationFilter
  }, "id" | "title">

  export type PermissionOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    _count?: PermissionCountOrderByAggregateInput
    _max?: PermissionMaxOrderByAggregateInput
    _min?: PermissionMinOrderByAggregateInput
  }

  export type PermissionScalarWhereWithAggregatesInput = {
    AND?: PermissionScalarWhereWithAggregatesInput | PermissionScalarWhereWithAggregatesInput[]
    OR?: PermissionScalarWhereWithAggregatesInput[]
    NOT?: PermissionScalarWhereWithAggregatesInput | PermissionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Permission"> | string
    title?: StringWithAggregatesFilter<"Permission"> | string
    description?: StringNullableWithAggregatesFilter<"Permission"> | string | null
  }

  export type RoleWhereInput = {
    AND?: RoleWhereInput | RoleWhereInput[]
    OR?: RoleWhereInput[]
    NOT?: RoleWhereInput | RoleWhereInput[]
    id?: StringFilter<"Role"> | string
    title?: StringFilter<"Role"> | string
    description?: StringNullableFilter<"Role"> | string | null
    enabled?: BoolFilter<"Role"> | boolean
    modified?: DateTimeFilter<"Role"> | Date | string
    created?: DateTimeFilter<"Role"> | Date | string
    permissions?: RolePermissionListRelationFilter
    players?: RolePlayerListRelationFilter
  }

  export type RoleOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    enabled?: SortOrder
    modified?: SortOrder
    created?: SortOrder
    permissions?: RolePermissionOrderByRelationAggregateInput
    players?: RolePlayerOrderByRelationAggregateInput
  }

  export type RoleWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    title?: string
    AND?: RoleWhereInput | RoleWhereInput[]
    OR?: RoleWhereInput[]
    NOT?: RoleWhereInput | RoleWhereInput[]
    description?: StringNullableFilter<"Role"> | string | null
    enabled?: BoolFilter<"Role"> | boolean
    modified?: DateTimeFilter<"Role"> | Date | string
    created?: DateTimeFilter<"Role"> | Date | string
    permissions?: RolePermissionListRelationFilter
    players?: RolePlayerListRelationFilter
  }, "id" | "title">

  export type RoleOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    enabled?: SortOrder
    modified?: SortOrder
    created?: SortOrder
    _count?: RoleCountOrderByAggregateInput
    _max?: RoleMaxOrderByAggregateInput
    _min?: RoleMinOrderByAggregateInput
  }

  export type RoleScalarWhereWithAggregatesInput = {
    AND?: RoleScalarWhereWithAggregatesInput | RoleScalarWhereWithAggregatesInput[]
    OR?: RoleScalarWhereWithAggregatesInput[]
    NOT?: RoleScalarWhereWithAggregatesInput | RoleScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Role"> | string
    title?: StringWithAggregatesFilter<"Role"> | string
    description?: StringNullableWithAggregatesFilter<"Role"> | string | null
    enabled?: BoolWithAggregatesFilter<"Role"> | boolean
    modified?: DateTimeWithAggregatesFilter<"Role"> | Date | string
    created?: DateTimeWithAggregatesFilter<"Role"> | Date | string
  }

  export type RolePermissionWhereInput = {
    AND?: RolePermissionWhereInput | RolePermissionWhereInput[]
    OR?: RolePermissionWhereInput[]
    NOT?: RolePermissionWhereInput | RolePermissionWhereInput[]
    id?: StringFilter<"RolePermission"> | string
    roleId?: StringFilter<"RolePermission"> | string
    permissionId?: StringFilter<"RolePermission"> | string
    modified?: DateTimeFilter<"RolePermission"> | Date | string
    created?: DateTimeFilter<"RolePermission"> | Date | string
    permission?: XOR<PermissionScalarRelationFilter, PermissionWhereInput>
    role?: XOR<RoleScalarRelationFilter, RoleWhereInput>
  }

  export type RolePermissionOrderByWithRelationInput = {
    id?: SortOrder
    roleId?: SortOrder
    permissionId?: SortOrder
    modified?: SortOrder
    created?: SortOrder
    permission?: PermissionOrderByWithRelationInput
    role?: RoleOrderByWithRelationInput
  }

  export type RolePermissionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    roleId_permissionId?: RolePermissionRoleIdPermissionIdCompoundUniqueInput
    AND?: RolePermissionWhereInput | RolePermissionWhereInput[]
    OR?: RolePermissionWhereInput[]
    NOT?: RolePermissionWhereInput | RolePermissionWhereInput[]
    roleId?: StringFilter<"RolePermission"> | string
    permissionId?: StringFilter<"RolePermission"> | string
    modified?: DateTimeFilter<"RolePermission"> | Date | string
    created?: DateTimeFilter<"RolePermission"> | Date | string
    permission?: XOR<PermissionScalarRelationFilter, PermissionWhereInput>
    role?: XOR<RoleScalarRelationFilter, RoleWhereInput>
  }, "id" | "roleId_permissionId">

  export type RolePermissionOrderByWithAggregationInput = {
    id?: SortOrder
    roleId?: SortOrder
    permissionId?: SortOrder
    modified?: SortOrder
    created?: SortOrder
    _count?: RolePermissionCountOrderByAggregateInput
    _max?: RolePermissionMaxOrderByAggregateInput
    _min?: RolePermissionMinOrderByAggregateInput
  }

  export type RolePermissionScalarWhereWithAggregatesInput = {
    AND?: RolePermissionScalarWhereWithAggregatesInput | RolePermissionScalarWhereWithAggregatesInput[]
    OR?: RolePermissionScalarWhereWithAggregatesInput[]
    NOT?: RolePermissionScalarWhereWithAggregatesInput | RolePermissionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"RolePermission"> | string
    roleId?: StringWithAggregatesFilter<"RolePermission"> | string
    permissionId?: StringWithAggregatesFilter<"RolePermission"> | string
    modified?: DateTimeWithAggregatesFilter<"RolePermission"> | Date | string
    created?: DateTimeWithAggregatesFilter<"RolePermission"> | Date | string
  }

  export type RolePlayerWhereInput = {
    AND?: RolePlayerWhereInput | RolePlayerWhereInput[]
    OR?: RolePlayerWhereInput[]
    NOT?: RolePlayerWhereInput | RolePlayerWhereInput[]
    id?: StringFilter<"RolePlayer"> | string
    playerId?: StringFilter<"RolePlayer"> | string
    roleId?: StringFilter<"RolePlayer"> | string
    modified?: DateTimeFilter<"RolePlayer"> | Date | string
    created?: DateTimeFilter<"RolePlayer"> | Date | string
    player?: XOR<UserScalarRelationFilter, UserWhereInput>
    role?: XOR<RoleScalarRelationFilter, RoleWhereInput>
  }

  export type RolePlayerOrderByWithRelationInput = {
    id?: SortOrder
    playerId?: SortOrder
    roleId?: SortOrder
    modified?: SortOrder
    created?: SortOrder
    player?: UserOrderByWithRelationInput
    role?: RoleOrderByWithRelationInput
  }

  export type RolePlayerWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    roleId_playerId?: RolePlayerRoleIdPlayerIdCompoundUniqueInput
    AND?: RolePlayerWhereInput | RolePlayerWhereInput[]
    OR?: RolePlayerWhereInput[]
    NOT?: RolePlayerWhereInput | RolePlayerWhereInput[]
    playerId?: StringFilter<"RolePlayer"> | string
    roleId?: StringFilter<"RolePlayer"> | string
    modified?: DateTimeFilter<"RolePlayer"> | Date | string
    created?: DateTimeFilter<"RolePlayer"> | Date | string
    player?: XOR<UserScalarRelationFilter, UserWhereInput>
    role?: XOR<RoleScalarRelationFilter, RoleWhereInput>
  }, "id" | "roleId_playerId">

  export type RolePlayerOrderByWithAggregationInput = {
    id?: SortOrder
    playerId?: SortOrder
    roleId?: SortOrder
    modified?: SortOrder
    created?: SortOrder
    _count?: RolePlayerCountOrderByAggregateInput
    _max?: RolePlayerMaxOrderByAggregateInput
    _min?: RolePlayerMinOrderByAggregateInput
  }

  export type RolePlayerScalarWhereWithAggregatesInput = {
    AND?: RolePlayerScalarWhereWithAggregatesInput | RolePlayerScalarWhereWithAggregatesInput[]
    OR?: RolePlayerScalarWhereWithAggregatesInput[]
    NOT?: RolePlayerScalarWhereWithAggregatesInput | RolePlayerScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"RolePlayer"> | string
    playerId?: StringWithAggregatesFilter<"RolePlayer"> | string
    roleId?: StringWithAggregatesFilter<"RolePlayer"> | string
    modified?: DateTimeWithAggregatesFilter<"RolePlayer"> | Date | string
    created?: DateTimeWithAggregatesFilter<"RolePlayer"> | Date | string
  }

  export type SessionWhereInput = {
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    id?: StringFilter<"Session"> | string
    device?: StringFilter<"Session"> | string
    ip?: StringFilter<"Session"> | string
    token?: StringFilter<"Session"> | string
    createdById?: StringFilter<"Session"> | string
    expired?: DateTimeFilter<"Session"> | Date | string
    revoked?: BoolFilter<"Session"> | boolean
    modified?: DateTimeFilter<"Session"> | Date | string
    created?: DateTimeFilter<"Session"> | Date | string
    activities?: ActivityListRelationFilter
    createdBy?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type SessionOrderByWithRelationInput = {
    id?: SortOrder
    device?: SortOrder
    ip?: SortOrder
    token?: SortOrder
    createdById?: SortOrder
    expired?: SortOrder
    revoked?: SortOrder
    modified?: SortOrder
    created?: SortOrder
    activities?: ActivityOrderByRelationAggregateInput
    createdBy?: UserOrderByWithRelationInput
  }

  export type SessionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    token?: string
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    device?: StringFilter<"Session"> | string
    ip?: StringFilter<"Session"> | string
    createdById?: StringFilter<"Session"> | string
    expired?: DateTimeFilter<"Session"> | Date | string
    revoked?: BoolFilter<"Session"> | boolean
    modified?: DateTimeFilter<"Session"> | Date | string
    created?: DateTimeFilter<"Session"> | Date | string
    activities?: ActivityListRelationFilter
    createdBy?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "token">

  export type SessionOrderByWithAggregationInput = {
    id?: SortOrder
    device?: SortOrder
    ip?: SortOrder
    token?: SortOrder
    createdById?: SortOrder
    expired?: SortOrder
    revoked?: SortOrder
    modified?: SortOrder
    created?: SortOrder
    _count?: SessionCountOrderByAggregateInput
    _max?: SessionMaxOrderByAggregateInput
    _min?: SessionMinOrderByAggregateInput
  }

  export type SessionScalarWhereWithAggregatesInput = {
    AND?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    OR?: SessionScalarWhereWithAggregatesInput[]
    NOT?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Session"> | string
    device?: StringWithAggregatesFilter<"Session"> | string
    ip?: StringWithAggregatesFilter<"Session"> | string
    token?: StringWithAggregatesFilter<"Session"> | string
    createdById?: StringWithAggregatesFilter<"Session"> | string
    expired?: DateTimeWithAggregatesFilter<"Session"> | Date | string
    revoked?: BoolWithAggregatesFilter<"Session"> | boolean
    modified?: DateTimeWithAggregatesFilter<"Session"> | Date | string
    created?: DateTimeWithAggregatesFilter<"Session"> | Date | string
  }

  export type ApiKeyWhereInput = {
    AND?: ApiKeyWhereInput | ApiKeyWhereInput[]
    OR?: ApiKeyWhereInput[]
    NOT?: ApiKeyWhereInput | ApiKeyWhereInput[]
    id?: StringFilter<"ApiKey"> | string
    type?: EnumAPI_KEY_TYPEFilter<"ApiKey"> | $Enums.API_KEY_TYPE
    name?: StringFilter<"ApiKey"> | string
    key?: StringFilter<"ApiKey"> | string
    hash?: StringFilter<"ApiKey"> | string
    enabled?: BoolFilter<"ApiKey"> | boolean
    startDate?: DateTimeFilter<"ApiKey"> | Date | string
    endDate?: DateTimeNullableFilter<"ApiKey"> | Date | string | null
    created?: DateTimeFilter<"ApiKey"> | Date | string
    userId?: StringFilter<"ApiKey"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type ApiKeyOrderByWithRelationInput = {
    id?: SortOrder
    type?: SortOrder
    name?: SortOrder
    key?: SortOrder
    hash?: SortOrder
    enabled?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrderInput | SortOrder
    created?: SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type ApiKeyWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    key?: string
    AND?: ApiKeyWhereInput | ApiKeyWhereInput[]
    OR?: ApiKeyWhereInput[]
    NOT?: ApiKeyWhereInput | ApiKeyWhereInput[]
    type?: EnumAPI_KEY_TYPEFilter<"ApiKey"> | $Enums.API_KEY_TYPE
    name?: StringFilter<"ApiKey"> | string
    hash?: StringFilter<"ApiKey"> | string
    enabled?: BoolFilter<"ApiKey"> | boolean
    startDate?: DateTimeFilter<"ApiKey"> | Date | string
    endDate?: DateTimeNullableFilter<"ApiKey"> | Date | string | null
    created?: DateTimeFilter<"ApiKey"> | Date | string
    userId?: StringFilter<"ApiKey"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "key">

  export type ApiKeyOrderByWithAggregationInput = {
    id?: SortOrder
    type?: SortOrder
    name?: SortOrder
    key?: SortOrder
    hash?: SortOrder
    enabled?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrderInput | SortOrder
    created?: SortOrder
    userId?: SortOrder
    _count?: ApiKeyCountOrderByAggregateInput
    _max?: ApiKeyMaxOrderByAggregateInput
    _min?: ApiKeyMinOrderByAggregateInput
  }

  export type ApiKeyScalarWhereWithAggregatesInput = {
    AND?: ApiKeyScalarWhereWithAggregatesInput | ApiKeyScalarWhereWithAggregatesInput[]
    OR?: ApiKeyScalarWhereWithAggregatesInput[]
    NOT?: ApiKeyScalarWhereWithAggregatesInput | ApiKeyScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ApiKey"> | string
    type?: EnumAPI_KEY_TYPEWithAggregatesFilter<"ApiKey"> | $Enums.API_KEY_TYPE
    name?: StringWithAggregatesFilter<"ApiKey"> | string
    key?: StringWithAggregatesFilter<"ApiKey"> | string
    hash?: StringWithAggregatesFilter<"ApiKey"> | string
    enabled?: BoolWithAggregatesFilter<"ApiKey"> | boolean
    startDate?: DateTimeWithAggregatesFilter<"ApiKey"> | Date | string
    endDate?: DateTimeNullableWithAggregatesFilter<"ApiKey"> | Date | string | null
    created?: DateTimeWithAggregatesFilter<"ApiKey"> | Date | string
    userId?: StringWithAggregatesFilter<"ApiKey"> | string
  }

  export type ActivityWhereInput = {
    AND?: ActivityWhereInput | ActivityWhereInput[]
    OR?: ActivityWhereInput[]
    NOT?: ActivityWhereInput | ActivityWhereInput[]
    id?: StringFilter<"Activity"> | string
    type?: StringFilter<"Activity"> | string
    description?: StringNullableFilter<"Activity"> | string | null
    device?: StringFilter<"Activity"> | string
    ip?: StringFilter<"Activity"> | string
    sessionId?: StringNullableFilter<"Activity"> | string | null
    reference?: JsonNullableFilter<"Activity">
    createdById?: StringFilter<"Activity"> | string
    modified?: DateTimeFilter<"Activity"> | Date | string
    created?: DateTimeFilter<"Activity"> | Date | string
    createdBy?: XOR<UserScalarRelationFilter, UserWhereInput>
    session?: XOR<SessionNullableScalarRelationFilter, SessionWhereInput> | null
  }

  export type ActivityOrderByWithRelationInput = {
    id?: SortOrder
    type?: SortOrder
    description?: SortOrderInput | SortOrder
    device?: SortOrder
    ip?: SortOrder
    sessionId?: SortOrderInput | SortOrder
    reference?: SortOrderInput | SortOrder
    createdById?: SortOrder
    modified?: SortOrder
    created?: SortOrder
    createdBy?: UserOrderByWithRelationInput
    session?: SessionOrderByWithRelationInput
  }

  export type ActivityWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ActivityWhereInput | ActivityWhereInput[]
    OR?: ActivityWhereInput[]
    NOT?: ActivityWhereInput | ActivityWhereInput[]
    type?: StringFilter<"Activity"> | string
    description?: StringNullableFilter<"Activity"> | string | null
    device?: StringFilter<"Activity"> | string
    ip?: StringFilter<"Activity"> | string
    sessionId?: StringNullableFilter<"Activity"> | string | null
    reference?: JsonNullableFilter<"Activity">
    createdById?: StringFilter<"Activity"> | string
    modified?: DateTimeFilter<"Activity"> | Date | string
    created?: DateTimeFilter<"Activity"> | Date | string
    createdBy?: XOR<UserScalarRelationFilter, UserWhereInput>
    session?: XOR<SessionNullableScalarRelationFilter, SessionWhereInput> | null
  }, "id">

  export type ActivityOrderByWithAggregationInput = {
    id?: SortOrder
    type?: SortOrder
    description?: SortOrderInput | SortOrder
    device?: SortOrder
    ip?: SortOrder
    sessionId?: SortOrderInput | SortOrder
    reference?: SortOrderInput | SortOrder
    createdById?: SortOrder
    modified?: SortOrder
    created?: SortOrder
    _count?: ActivityCountOrderByAggregateInput
    _max?: ActivityMaxOrderByAggregateInput
    _min?: ActivityMinOrderByAggregateInput
  }

  export type ActivityScalarWhereWithAggregatesInput = {
    AND?: ActivityScalarWhereWithAggregatesInput | ActivityScalarWhereWithAggregatesInput[]
    OR?: ActivityScalarWhereWithAggregatesInput[]
    NOT?: ActivityScalarWhereWithAggregatesInput | ActivityScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Activity"> | string
    type?: StringWithAggregatesFilter<"Activity"> | string
    description?: StringNullableWithAggregatesFilter<"Activity"> | string | null
    device?: StringWithAggregatesFilter<"Activity"> | string
    ip?: StringWithAggregatesFilter<"Activity"> | string
    sessionId?: StringNullableWithAggregatesFilter<"Activity"> | string | null
    reference?: JsonNullableWithAggregatesFilter<"Activity">
    createdById?: StringWithAggregatesFilter<"Activity"> | string
    modified?: DateTimeWithAggregatesFilter<"Activity"> | Date | string
    created?: DateTimeWithAggregatesFilter<"Activity"> | Date | string
  }

  export type I18nWhereInput = {
    AND?: I18nWhereInput | I18nWhereInput[]
    OR?: I18nWhereInput[]
    NOT?: I18nWhereInput | I18nWhereInput[]
    id?: StringFilter<"I18n"> | string
    key?: StringFilter<"I18n"> | string
    en?: StringNullableFilter<"I18n"> | string | null
    zh?: StringNullableFilter<"I18n"> | string | null
    vi?: StringNullableFilter<"I18n"> | string | null
    ko?: StringNullableFilter<"I18n"> | string | null
  }

  export type I18nOrderByWithRelationInput = {
    id?: SortOrder
    key?: SortOrder
    en?: SortOrderInput | SortOrder
    zh?: SortOrderInput | SortOrder
    vi?: SortOrderInput | SortOrder
    ko?: SortOrderInput | SortOrder
  }

  export type I18nWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    key?: string
    AND?: I18nWhereInput | I18nWhereInput[]
    OR?: I18nWhereInput[]
    NOT?: I18nWhereInput | I18nWhereInput[]
    en?: StringNullableFilter<"I18n"> | string | null
    zh?: StringNullableFilter<"I18n"> | string | null
    vi?: StringNullableFilter<"I18n"> | string | null
    ko?: StringNullableFilter<"I18n"> | string | null
  }, "id" | "key">

  export type I18nOrderByWithAggregationInput = {
    id?: SortOrder
    key?: SortOrder
    en?: SortOrderInput | SortOrder
    zh?: SortOrderInput | SortOrder
    vi?: SortOrderInput | SortOrder
    ko?: SortOrderInput | SortOrder
    _count?: I18nCountOrderByAggregateInput
    _max?: I18nMaxOrderByAggregateInput
    _min?: I18nMinOrderByAggregateInput
  }

  export type I18nScalarWhereWithAggregatesInput = {
    AND?: I18nScalarWhereWithAggregatesInput | I18nScalarWhereWithAggregatesInput[]
    OR?: I18nScalarWhereWithAggregatesInput[]
    NOT?: I18nScalarWhereWithAggregatesInput | I18nScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"I18n"> | string
    key?: StringWithAggregatesFilter<"I18n"> | string
    en?: StringNullableWithAggregatesFilter<"I18n"> | string | null
    zh?: StringNullableWithAggregatesFilter<"I18n"> | string | null
    vi?: StringNullableWithAggregatesFilter<"I18n"> | string | null
    ko?: StringNullableWithAggregatesFilter<"I18n"> | string | null
  }

  export type IPWhitelistWhereInput = {
    AND?: IPWhitelistWhereInput | IPWhitelistWhereInput[]
    OR?: IPWhitelistWhereInput[]
    NOT?: IPWhitelistWhereInput | IPWhitelistWhereInput[]
    id?: StringFilter<"IPWhitelist"> | string
    ip?: StringFilter<"IPWhitelist"> | string
    note?: StringNullableFilter<"IPWhitelist"> | string | null
  }

  export type IPWhitelistOrderByWithRelationInput = {
    id?: SortOrder
    ip?: SortOrder
    note?: SortOrderInput | SortOrder
  }

  export type IPWhitelistWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    ip?: string
    AND?: IPWhitelistWhereInput | IPWhitelistWhereInput[]
    OR?: IPWhitelistWhereInput[]
    NOT?: IPWhitelistWhereInput | IPWhitelistWhereInput[]
    note?: StringNullableFilter<"IPWhitelist"> | string | null
  }, "id" | "ip">

  export type IPWhitelistOrderByWithAggregationInput = {
    id?: SortOrder
    ip?: SortOrder
    note?: SortOrderInput | SortOrder
    _count?: IPWhitelistCountOrderByAggregateInput
    _max?: IPWhitelistMaxOrderByAggregateInput
    _min?: IPWhitelistMinOrderByAggregateInput
  }

  export type IPWhitelistScalarWhereWithAggregatesInput = {
    AND?: IPWhitelistScalarWhereWithAggregatesInput | IPWhitelistScalarWhereWithAggregatesInput[]
    OR?: IPWhitelistScalarWhereWithAggregatesInput[]
    NOT?: IPWhitelistScalarWhereWithAggregatesInput | IPWhitelistScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"IPWhitelist"> | string
    ip?: StringWithAggregatesFilter<"IPWhitelist"> | string
    note?: StringNullableWithAggregatesFilter<"IPWhitelist"> | string | null
  }

  export type SettingWhereInput = {
    AND?: SettingWhereInput | SettingWhereInput[]
    OR?: SettingWhereInput[]
    NOT?: SettingWhereInput | SettingWhereInput[]
    id?: StringFilter<"Setting"> | string
    key?: StringFilter<"Setting"> | string
    value?: StringFilter<"Setting"> | string
    description?: StringNullableFilter<"Setting"> | string | null
    isSecret?: BoolFilter<"Setting"> | boolean
    type?: EnumSETTING_DATA_TYPEFilter<"Setting"> | $Enums.SETTING_DATA_TYPE
  }

  export type SettingOrderByWithRelationInput = {
    id?: SortOrder
    key?: SortOrder
    value?: SortOrder
    description?: SortOrderInput | SortOrder
    isSecret?: SortOrder
    type?: SortOrder
  }

  export type SettingWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    key?: string
    AND?: SettingWhereInput | SettingWhereInput[]
    OR?: SettingWhereInput[]
    NOT?: SettingWhereInput | SettingWhereInput[]
    value?: StringFilter<"Setting"> | string
    description?: StringNullableFilter<"Setting"> | string | null
    isSecret?: BoolFilter<"Setting"> | boolean
    type?: EnumSETTING_DATA_TYPEFilter<"Setting"> | $Enums.SETTING_DATA_TYPE
  }, "id" | "key">

  export type SettingOrderByWithAggregationInput = {
    id?: SortOrder
    key?: SortOrder
    value?: SortOrder
    description?: SortOrderInput | SortOrder
    isSecret?: SortOrder
    type?: SortOrder
    _count?: SettingCountOrderByAggregateInput
    _max?: SettingMaxOrderByAggregateInput
    _min?: SettingMinOrderByAggregateInput
  }

  export type SettingScalarWhereWithAggregatesInput = {
    AND?: SettingScalarWhereWithAggregatesInput | SettingScalarWhereWithAggregatesInput[]
    OR?: SettingScalarWhereWithAggregatesInput[]
    NOT?: SettingScalarWhereWithAggregatesInput | SettingScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Setting"> | string
    key?: StringWithAggregatesFilter<"Setting"> | string
    value?: StringWithAggregatesFilter<"Setting"> | string
    description?: StringNullableWithAggregatesFilter<"Setting"> | string | null
    isSecret?: BoolWithAggregatesFilter<"Setting"> | boolean
    type?: EnumSETTING_DATA_TYPEWithAggregatesFilter<"Setting"> | $Enums.SETTING_DATA_TYPE
  }

  export type ProxyWhereInput = {
    AND?: ProxyWhereInput | ProxyWhereInput[]
    OR?: ProxyWhereInput[]
    NOT?: ProxyWhereInput | ProxyWhereInput[]
    id?: StringFilter<"Proxy"> | string
    protocol?: EnumProxyProtocolFilter<"Proxy"> | $Enums.ProxyProtocol
    host?: StringFilter<"Proxy"> | string
    port?: IntFilter<"Proxy"> | number
    username?: StringFilter<"Proxy"> | string
    password?: StringFilter<"Proxy"> | string
    enabled?: BoolFilter<"Proxy"> | boolean
    modified?: DateTimeFilter<"Proxy"> | Date | string
    created?: DateTimeFilter<"Proxy"> | Date | string
  }

  export type ProxyOrderByWithRelationInput = {
    id?: SortOrder
    protocol?: SortOrder
    host?: SortOrder
    port?: SortOrder
    username?: SortOrder
    password?: SortOrder
    enabled?: SortOrder
    modified?: SortOrder
    created?: SortOrder
  }

  export type ProxyWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    host_port_protocol_username_password?: ProxyHostPortProtocolUsernamePasswordCompoundUniqueInput
    AND?: ProxyWhereInput | ProxyWhereInput[]
    OR?: ProxyWhereInput[]
    NOT?: ProxyWhereInput | ProxyWhereInput[]
    protocol?: EnumProxyProtocolFilter<"Proxy"> | $Enums.ProxyProtocol
    host?: StringFilter<"Proxy"> | string
    port?: IntFilter<"Proxy"> | number
    username?: StringFilter<"Proxy"> | string
    password?: StringFilter<"Proxy"> | string
    enabled?: BoolFilter<"Proxy"> | boolean
    modified?: DateTimeFilter<"Proxy"> | Date | string
    created?: DateTimeFilter<"Proxy"> | Date | string
  }, "id" | "host_port_protocol_username_password">

  export type ProxyOrderByWithAggregationInput = {
    id?: SortOrder
    protocol?: SortOrder
    host?: SortOrder
    port?: SortOrder
    username?: SortOrder
    password?: SortOrder
    enabled?: SortOrder
    modified?: SortOrder
    created?: SortOrder
    _count?: ProxyCountOrderByAggregateInput
    _avg?: ProxyAvgOrderByAggregateInput
    _max?: ProxyMaxOrderByAggregateInput
    _min?: ProxyMinOrderByAggregateInput
    _sum?: ProxySumOrderByAggregateInput
  }

  export type ProxyScalarWhereWithAggregatesInput = {
    AND?: ProxyScalarWhereWithAggregatesInput | ProxyScalarWhereWithAggregatesInput[]
    OR?: ProxyScalarWhereWithAggregatesInput[]
    NOT?: ProxyScalarWhereWithAggregatesInput | ProxyScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Proxy"> | string
    protocol?: EnumProxyProtocolWithAggregatesFilter<"Proxy"> | $Enums.ProxyProtocol
    host?: StringWithAggregatesFilter<"Proxy"> | string
    port?: IntWithAggregatesFilter<"Proxy"> | number
    username?: StringWithAggregatesFilter<"Proxy"> | string
    password?: StringWithAggregatesFilter<"Proxy"> | string
    enabled?: BoolWithAggregatesFilter<"Proxy"> | boolean
    modified?: DateTimeWithAggregatesFilter<"Proxy"> | Date | string
    created?: DateTimeWithAggregatesFilter<"Proxy"> | Date | string
  }

  export type TelegramTemplateWhereInput = {
    AND?: TelegramTemplateWhereInput | TelegramTemplateWhereInput[]
    OR?: TelegramTemplateWhereInput[]
    NOT?: TelegramTemplateWhereInput | TelegramTemplateWhereInput[]
    id?: StringFilter<"TelegramTemplate"> | string
    name?: StringFilter<"TelegramTemplate"> | string
    description?: StringNullableFilter<"TelegramTemplate"> | string | null
    message?: StringNullableFilter<"TelegramTemplate"> | string | null
    photos?: StringNullableListFilter<"TelegramTemplate">
    videos?: StringNullableListFilter<"TelegramTemplate">
    buttons?: JsonNullableFilter<"TelegramTemplate">
    created?: DateTimeFilter<"TelegramTemplate"> | Date | string
    modified?: DateTimeFilter<"TelegramTemplate"> | Date | string
  }

  export type TelegramTemplateOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    message?: SortOrderInput | SortOrder
    photos?: SortOrder
    videos?: SortOrder
    buttons?: SortOrderInput | SortOrder
    created?: SortOrder
    modified?: SortOrder
  }

  export type TelegramTemplateWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TelegramTemplateWhereInput | TelegramTemplateWhereInput[]
    OR?: TelegramTemplateWhereInput[]
    NOT?: TelegramTemplateWhereInput | TelegramTemplateWhereInput[]
    name?: StringFilter<"TelegramTemplate"> | string
    description?: StringNullableFilter<"TelegramTemplate"> | string | null
    message?: StringNullableFilter<"TelegramTemplate"> | string | null
    photos?: StringNullableListFilter<"TelegramTemplate">
    videos?: StringNullableListFilter<"TelegramTemplate">
    buttons?: JsonNullableFilter<"TelegramTemplate">
    created?: DateTimeFilter<"TelegramTemplate"> | Date | string
    modified?: DateTimeFilter<"TelegramTemplate"> | Date | string
  }, "id">

  export type TelegramTemplateOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    message?: SortOrderInput | SortOrder
    photos?: SortOrder
    videos?: SortOrder
    buttons?: SortOrderInput | SortOrder
    created?: SortOrder
    modified?: SortOrder
    _count?: TelegramTemplateCountOrderByAggregateInput
    _max?: TelegramTemplateMaxOrderByAggregateInput
    _min?: TelegramTemplateMinOrderByAggregateInput
  }

  export type TelegramTemplateScalarWhereWithAggregatesInput = {
    AND?: TelegramTemplateScalarWhereWithAggregatesInput | TelegramTemplateScalarWhereWithAggregatesInput[]
    OR?: TelegramTemplateScalarWhereWithAggregatesInput[]
    NOT?: TelegramTemplateScalarWhereWithAggregatesInput | TelegramTemplateScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"TelegramTemplate"> | string
    name?: StringWithAggregatesFilter<"TelegramTemplate"> | string
    description?: StringNullableWithAggregatesFilter<"TelegramTemplate"> | string | null
    message?: StringNullableWithAggregatesFilter<"TelegramTemplate"> | string | null
    photos?: StringNullableListFilter<"TelegramTemplate">
    videos?: StringNullableListFilter<"TelegramTemplate">
    buttons?: JsonNullableWithAggregatesFilter<"TelegramTemplate">
    created?: DateTimeWithAggregatesFilter<"TelegramTemplate"> | Date | string
    modified?: DateTimeWithAggregatesFilter<"TelegramTemplate"> | Date | string
  }

  export type TelegramChatWhereInput = {
    AND?: TelegramChatWhereInput | TelegramChatWhereInput[]
    OR?: TelegramChatWhereInput[]
    NOT?: TelegramChatWhereInput | TelegramChatWhereInput[]
    id?: StringFilter<"TelegramChat"> | string
    name?: StringFilter<"TelegramChat"> | string
    type?: EnumTELEGRAM_CHAT_TYPEFilter<"TelegramChat"> | $Enums.TELEGRAM_CHAT_TYPE
    description?: StringNullableFilter<"TelegramChat"> | string | null
    chatId?: StringFilter<"TelegramChat"> | string
    created?: DateTimeFilter<"TelegramChat"> | Date | string
    modified?: DateTimeFilter<"TelegramChat"> | Date | string
  }

  export type TelegramChatOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    description?: SortOrderInput | SortOrder
    chatId?: SortOrder
    created?: SortOrder
    modified?: SortOrder
  }

  export type TelegramChatWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TelegramChatWhereInput | TelegramChatWhereInput[]
    OR?: TelegramChatWhereInput[]
    NOT?: TelegramChatWhereInput | TelegramChatWhereInput[]
    name?: StringFilter<"TelegramChat"> | string
    type?: EnumTELEGRAM_CHAT_TYPEFilter<"TelegramChat"> | $Enums.TELEGRAM_CHAT_TYPE
    description?: StringNullableFilter<"TelegramChat"> | string | null
    chatId?: StringFilter<"TelegramChat"> | string
    created?: DateTimeFilter<"TelegramChat"> | Date | string
    modified?: DateTimeFilter<"TelegramChat"> | Date | string
  }, "id">

  export type TelegramChatOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    description?: SortOrderInput | SortOrder
    chatId?: SortOrder
    created?: SortOrder
    modified?: SortOrder
    _count?: TelegramChatCountOrderByAggregateInput
    _max?: TelegramChatMaxOrderByAggregateInput
    _min?: TelegramChatMinOrderByAggregateInput
  }

  export type TelegramChatScalarWhereWithAggregatesInput = {
    AND?: TelegramChatScalarWhereWithAggregatesInput | TelegramChatScalarWhereWithAggregatesInput[]
    OR?: TelegramChatScalarWhereWithAggregatesInput[]
    NOT?: TelegramChatScalarWhereWithAggregatesInput | TelegramChatScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"TelegramChat"> | string
    name?: StringWithAggregatesFilter<"TelegramChat"> | string
    type?: EnumTELEGRAM_CHAT_TYPEWithAggregatesFilter<"TelegramChat"> | $Enums.TELEGRAM_CHAT_TYPE
    description?: StringNullableWithAggregatesFilter<"TelegramChat"> | string | null
    chatId?: StringWithAggregatesFilter<"TelegramChat"> | string
    created?: DateTimeWithAggregatesFilter<"TelegramChat"> | Date | string
    modified?: DateTimeWithAggregatesFilter<"TelegramChat"> | Date | string
  }

  export type TelegramBotWhereInput = {
    AND?: TelegramBotWhereInput | TelegramBotWhereInput[]
    OR?: TelegramBotWhereInput[]
    NOT?: TelegramBotWhereInput | TelegramBotWhereInput[]
    id?: StringFilter<"TelegramBot"> | string
    name?: StringFilter<"TelegramBot"> | string
    description?: StringNullableFilter<"TelegramBot"> | string | null
    enabled?: BoolFilter<"TelegramBot"> | boolean
    token?: StringFilter<"TelegramBot"> | string
    created?: DateTimeFilter<"TelegramBot"> | Date | string
    modified?: DateTimeFilter<"TelegramBot"> | Date | string
  }

  export type TelegramBotOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    enabled?: SortOrder
    token?: SortOrder
    created?: SortOrder
    modified?: SortOrder
  }

  export type TelegramBotWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TelegramBotWhereInput | TelegramBotWhereInput[]
    OR?: TelegramBotWhereInput[]
    NOT?: TelegramBotWhereInput | TelegramBotWhereInput[]
    name?: StringFilter<"TelegramBot"> | string
    description?: StringNullableFilter<"TelegramBot"> | string | null
    enabled?: BoolFilter<"TelegramBot"> | boolean
    token?: StringFilter<"TelegramBot"> | string
    created?: DateTimeFilter<"TelegramBot"> | Date | string
    modified?: DateTimeFilter<"TelegramBot"> | Date | string
  }, "id">

  export type TelegramBotOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    enabled?: SortOrder
    token?: SortOrder
    created?: SortOrder
    modified?: SortOrder
    _count?: TelegramBotCountOrderByAggregateInput
    _max?: TelegramBotMaxOrderByAggregateInput
    _min?: TelegramBotMinOrderByAggregateInput
  }

  export type TelegramBotScalarWhereWithAggregatesInput = {
    AND?: TelegramBotScalarWhereWithAggregatesInput | TelegramBotScalarWhereWithAggregatesInput[]
    OR?: TelegramBotScalarWhereWithAggregatesInput[]
    NOT?: TelegramBotScalarWhereWithAggregatesInput | TelegramBotScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"TelegramBot"> | string
    name?: StringWithAggregatesFilter<"TelegramBot"> | string
    description?: StringNullableWithAggregatesFilter<"TelegramBot"> | string | null
    enabled?: BoolWithAggregatesFilter<"TelegramBot"> | boolean
    token?: StringWithAggregatesFilter<"TelegramBot"> | string
    created?: DateTimeWithAggregatesFilter<"TelegramBot"> | Date | string
    modified?: DateTimeWithAggregatesFilter<"TelegramBot"> | Date | string
  }

  export type UserCreateInput = {
    id: string
    username: string
    password: string
    emailUser?: string
    inviteBy?: string
    passwordExpired?: Date | string
    passwordCreated?: Date | string
    passwordAttempt?: number
    is_owner?: boolean
    mfaTelegramEnabled?: boolean
    mfaTotpEnabled?: boolean
    telegramUsername?: string | null
    totpSecret?: string | null
    enabled?: boolean
    modified?: Date | string
    created?: Date | string
    activities?: ActivityCreateNestedManyWithoutCreatedByInput
    apiKeys?: ApiKeyCreateNestedManyWithoutUserInput
    roles?: RolePlayerCreateNestedManyWithoutPlayerInput
    sessions?: SessionCreateNestedManyWithoutCreatedByInput
  }

  export type UserUncheckedCreateInput = {
    id: string
    username: string
    password: string
    emailUser?: string
    inviteBy?: string
    passwordExpired?: Date | string
    passwordCreated?: Date | string
    passwordAttempt?: number
    is_owner?: boolean
    mfaTelegramEnabled?: boolean
    mfaTotpEnabled?: boolean
    telegramUsername?: string | null
    totpSecret?: string | null
    enabled?: boolean
    modified?: Date | string
    created?: Date | string
    activities?: ActivityUncheckedCreateNestedManyWithoutCreatedByInput
    apiKeys?: ApiKeyUncheckedCreateNestedManyWithoutUserInput
    roles?: RolePlayerUncheckedCreateNestedManyWithoutPlayerInput
    sessions?: SessionUncheckedCreateNestedManyWithoutCreatedByInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    emailUser?: StringFieldUpdateOperationsInput | string
    inviteBy?: StringFieldUpdateOperationsInput | string
    passwordExpired?: DateTimeFieldUpdateOperationsInput | Date | string
    passwordCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    passwordAttempt?: IntFieldUpdateOperationsInput | number
    is_owner?: BoolFieldUpdateOperationsInput | boolean
    mfaTelegramEnabled?: BoolFieldUpdateOperationsInput | boolean
    mfaTotpEnabled?: BoolFieldUpdateOperationsInput | boolean
    telegramUsername?: NullableStringFieldUpdateOperationsInput | string | null
    totpSecret?: NullableStringFieldUpdateOperationsInput | string | null
    enabled?: BoolFieldUpdateOperationsInput | boolean
    modified?: DateTimeFieldUpdateOperationsInput | Date | string
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    activities?: ActivityUpdateManyWithoutCreatedByNestedInput
    apiKeys?: ApiKeyUpdateManyWithoutUserNestedInput
    roles?: RolePlayerUpdateManyWithoutPlayerNestedInput
    sessions?: SessionUpdateManyWithoutCreatedByNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    emailUser?: StringFieldUpdateOperationsInput | string
    inviteBy?: StringFieldUpdateOperationsInput | string
    passwordExpired?: DateTimeFieldUpdateOperationsInput | Date | string
    passwordCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    passwordAttempt?: IntFieldUpdateOperationsInput | number
    is_owner?: BoolFieldUpdateOperationsInput | boolean
    mfaTelegramEnabled?: BoolFieldUpdateOperationsInput | boolean
    mfaTotpEnabled?: BoolFieldUpdateOperationsInput | boolean
    telegramUsername?: NullableStringFieldUpdateOperationsInput | string | null
    totpSecret?: NullableStringFieldUpdateOperationsInput | string | null
    enabled?: BoolFieldUpdateOperationsInput | boolean
    modified?: DateTimeFieldUpdateOperationsInput | Date | string
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    activities?: ActivityUncheckedUpdateManyWithoutCreatedByNestedInput
    apiKeys?: ApiKeyUncheckedUpdateManyWithoutUserNestedInput
    roles?: RolePlayerUncheckedUpdateManyWithoutPlayerNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutCreatedByNestedInput
  }

  export type UserCreateManyInput = {
    id: string
    username: string
    password: string
    emailUser?: string
    inviteBy?: string
    passwordExpired?: Date | string
    passwordCreated?: Date | string
    passwordAttempt?: number
    is_owner?: boolean
    mfaTelegramEnabled?: boolean
    mfaTotpEnabled?: boolean
    telegramUsername?: string | null
    totpSecret?: string | null
    enabled?: boolean
    modified?: Date | string
    created?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    emailUser?: StringFieldUpdateOperationsInput | string
    inviteBy?: StringFieldUpdateOperationsInput | string
    passwordExpired?: DateTimeFieldUpdateOperationsInput | Date | string
    passwordCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    passwordAttempt?: IntFieldUpdateOperationsInput | number
    is_owner?: BoolFieldUpdateOperationsInput | boolean
    mfaTelegramEnabled?: BoolFieldUpdateOperationsInput | boolean
    mfaTotpEnabled?: BoolFieldUpdateOperationsInput | boolean
    telegramUsername?: NullableStringFieldUpdateOperationsInput | string | null
    totpSecret?: NullableStringFieldUpdateOperationsInput | string | null
    enabled?: BoolFieldUpdateOperationsInput | boolean
    modified?: DateTimeFieldUpdateOperationsInput | Date | string
    created?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    emailUser?: StringFieldUpdateOperationsInput | string
    inviteBy?: StringFieldUpdateOperationsInput | string
    passwordExpired?: DateTimeFieldUpdateOperationsInput | Date | string
    passwordCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    passwordAttempt?: IntFieldUpdateOperationsInput | number
    is_owner?: BoolFieldUpdateOperationsInput | boolean
    mfaTelegramEnabled?: BoolFieldUpdateOperationsInput | boolean
    mfaTotpEnabled?: BoolFieldUpdateOperationsInput | boolean
    telegramUsername?: NullableStringFieldUpdateOperationsInput | string | null
    totpSecret?: NullableStringFieldUpdateOperationsInput | string | null
    enabled?: BoolFieldUpdateOperationsInput | boolean
    modified?: DateTimeFieldUpdateOperationsInput | Date | string
    created?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PermissionCreateInput = {
    id: string
    title: string
    description?: string | null
    roles?: RolePermissionCreateNestedManyWithoutPermissionInput
  }

  export type PermissionUncheckedCreateInput = {
    id: string
    title: string
    description?: string | null
    roles?: RolePermissionUncheckedCreateNestedManyWithoutPermissionInput
  }

  export type PermissionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    roles?: RolePermissionUpdateManyWithoutPermissionNestedInput
  }

  export type PermissionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    roles?: RolePermissionUncheckedUpdateManyWithoutPermissionNestedInput
  }

  export type PermissionCreateManyInput = {
    id: string
    title: string
    description?: string | null
  }

  export type PermissionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PermissionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RoleCreateInput = {
    id: string
    title: string
    description?: string | null
    enabled?: boolean
    modified?: Date | string
    created?: Date | string
    permissions?: RolePermissionCreateNestedManyWithoutRoleInput
    players?: RolePlayerCreateNestedManyWithoutRoleInput
  }

  export type RoleUncheckedCreateInput = {
    id: string
    title: string
    description?: string | null
    enabled?: boolean
    modified?: Date | string
    created?: Date | string
    permissions?: RolePermissionUncheckedCreateNestedManyWithoutRoleInput
    players?: RolePlayerUncheckedCreateNestedManyWithoutRoleInput
  }

  export type RoleUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    enabled?: BoolFieldUpdateOperationsInput | boolean
    modified?: DateTimeFieldUpdateOperationsInput | Date | string
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    permissions?: RolePermissionUpdateManyWithoutRoleNestedInput
    players?: RolePlayerUpdateManyWithoutRoleNestedInput
  }

  export type RoleUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    enabled?: BoolFieldUpdateOperationsInput | boolean
    modified?: DateTimeFieldUpdateOperationsInput | Date | string
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    permissions?: RolePermissionUncheckedUpdateManyWithoutRoleNestedInput
    players?: RolePlayerUncheckedUpdateManyWithoutRoleNestedInput
  }

  export type RoleCreateManyInput = {
    id: string
    title: string
    description?: string | null
    enabled?: boolean
    modified?: Date | string
    created?: Date | string
  }

  export type RoleUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    enabled?: BoolFieldUpdateOperationsInput | boolean
    modified?: DateTimeFieldUpdateOperationsInput | Date | string
    created?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoleUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    enabled?: BoolFieldUpdateOperationsInput | boolean
    modified?: DateTimeFieldUpdateOperationsInput | Date | string
    created?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RolePermissionCreateInput = {
    id: string
    modified?: Date | string
    created?: Date | string
    permission: PermissionCreateNestedOneWithoutRolesInput
    role: RoleCreateNestedOneWithoutPermissionsInput
  }

  export type RolePermissionUncheckedCreateInput = {
    id: string
    roleId: string
    permissionId: string
    modified?: Date | string
    created?: Date | string
  }

  export type RolePermissionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    modified?: DateTimeFieldUpdateOperationsInput | Date | string
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    permission?: PermissionUpdateOneRequiredWithoutRolesNestedInput
    role?: RoleUpdateOneRequiredWithoutPermissionsNestedInput
  }

  export type RolePermissionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    roleId?: StringFieldUpdateOperationsInput | string
    permissionId?: StringFieldUpdateOperationsInput | string
    modified?: DateTimeFieldUpdateOperationsInput | Date | string
    created?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RolePermissionCreateManyInput = {
    id: string
    roleId: string
    permissionId: string
    modified?: Date | string
    created?: Date | string
  }

  export type RolePermissionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    modified?: DateTimeFieldUpdateOperationsInput | Date | string
    created?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RolePermissionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    roleId?: StringFieldUpdateOperationsInput | string
    permissionId?: StringFieldUpdateOperationsInput | string
    modified?: DateTimeFieldUpdateOperationsInput | Date | string
    created?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RolePlayerCreateInput = {
    id: string
    modified?: Date | string
    created?: Date | string
    player: UserCreateNestedOneWithoutRolesInput
    role: RoleCreateNestedOneWithoutPlayersInput
  }

  export type RolePlayerUncheckedCreateInput = {
    id: string
    playerId: string
    roleId: string
    modified?: Date | string
    created?: Date | string
  }

  export type RolePlayerUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    modified?: DateTimeFieldUpdateOperationsInput | Date | string
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    player?: UserUpdateOneRequiredWithoutRolesNestedInput
    role?: RoleUpdateOneRequiredWithoutPlayersNestedInput
  }

  export type RolePlayerUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    playerId?: StringFieldUpdateOperationsInput | string
    roleId?: StringFieldUpdateOperationsInput | string
    modified?: DateTimeFieldUpdateOperationsInput | Date | string
    created?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RolePlayerCreateManyInput = {
    id: string
    playerId: string
    roleId: string
    modified?: Date | string
    created?: Date | string
  }

  export type RolePlayerUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    modified?: DateTimeFieldUpdateOperationsInput | Date | string
    created?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RolePlayerUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    playerId?: StringFieldUpdateOperationsInput | string
    roleId?: StringFieldUpdateOperationsInput | string
    modified?: DateTimeFieldUpdateOperationsInput | Date | string
    created?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionCreateInput = {
    id: string
    device: string
    ip: string
    token: string
    expired: Date | string
    revoked?: boolean
    modified?: Date | string
    created?: Date | string
    activities?: ActivityCreateNestedManyWithoutSessionInput
    createdBy: UserCreateNestedOneWithoutSessionsInput
  }

  export type SessionUncheckedCreateInput = {
    id: string
    device: string
    ip: string
    token: string
    createdById: string
    expired: Date | string
    revoked?: boolean
    modified?: Date | string
    created?: Date | string
    activities?: ActivityUncheckedCreateNestedManyWithoutSessionInput
  }

  export type SessionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    device?: StringFieldUpdateOperationsInput | string
    ip?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expired?: DateTimeFieldUpdateOperationsInput | Date | string
    revoked?: BoolFieldUpdateOperationsInput | boolean
    modified?: DateTimeFieldUpdateOperationsInput | Date | string
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    activities?: ActivityUpdateManyWithoutSessionNestedInput
    createdBy?: UserUpdateOneRequiredWithoutSessionsNestedInput
  }

  export type SessionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    device?: StringFieldUpdateOperationsInput | string
    ip?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    createdById?: StringFieldUpdateOperationsInput | string
    expired?: DateTimeFieldUpdateOperationsInput | Date | string
    revoked?: BoolFieldUpdateOperationsInput | boolean
    modified?: DateTimeFieldUpdateOperationsInput | Date | string
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    activities?: ActivityUncheckedUpdateManyWithoutSessionNestedInput
  }

  export type SessionCreateManyInput = {
    id: string
    device: string
    ip: string
    token: string
    createdById: string
    expired: Date | string
    revoked?: boolean
    modified?: Date | string
    created?: Date | string
  }

  export type SessionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    device?: StringFieldUpdateOperationsInput | string
    ip?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expired?: DateTimeFieldUpdateOperationsInput | Date | string
    revoked?: BoolFieldUpdateOperationsInput | boolean
    modified?: DateTimeFieldUpdateOperationsInput | Date | string
    created?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    device?: StringFieldUpdateOperationsInput | string
    ip?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    createdById?: StringFieldUpdateOperationsInput | string
    expired?: DateTimeFieldUpdateOperationsInput | Date | string
    revoked?: BoolFieldUpdateOperationsInput | boolean
    modified?: DateTimeFieldUpdateOperationsInput | Date | string
    created?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApiKeyCreateInput = {
    id: string
    type?: $Enums.API_KEY_TYPE
    name: string
    key: string
    hash: string
    enabled?: boolean
    startDate?: Date | string
    endDate?: Date | string | null
    created?: Date | string
    user: UserCreateNestedOneWithoutApiKeysInput
  }

  export type ApiKeyUncheckedCreateInput = {
    id: string
    type?: $Enums.API_KEY_TYPE
    name: string
    key: string
    hash: string
    enabled?: boolean
    startDate?: Date | string
    endDate?: Date | string | null
    created?: Date | string
    userId: string
  }

  export type ApiKeyUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumAPI_KEY_TYPEFieldUpdateOperationsInput | $Enums.API_KEY_TYPE
    name?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    hash?: StringFieldUpdateOperationsInput | string
    enabled?: BoolFieldUpdateOperationsInput | boolean
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutApiKeysNestedInput
  }

  export type ApiKeyUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumAPI_KEY_TYPEFieldUpdateOperationsInput | $Enums.API_KEY_TYPE
    name?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    hash?: StringFieldUpdateOperationsInput | string
    enabled?: BoolFieldUpdateOperationsInput | boolean
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type ApiKeyCreateManyInput = {
    id: string
    type?: $Enums.API_KEY_TYPE
    name: string
    key: string
    hash: string
    enabled?: boolean
    startDate?: Date | string
    endDate?: Date | string | null
    created?: Date | string
    userId: string
  }

  export type ApiKeyUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumAPI_KEY_TYPEFieldUpdateOperationsInput | $Enums.API_KEY_TYPE
    name?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    hash?: StringFieldUpdateOperationsInput | string
    enabled?: BoolFieldUpdateOperationsInput | boolean
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApiKeyUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumAPI_KEY_TYPEFieldUpdateOperationsInput | $Enums.API_KEY_TYPE
    name?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    hash?: StringFieldUpdateOperationsInput | string
    enabled?: BoolFieldUpdateOperationsInput | boolean
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type ActivityCreateInput = {
    id: string
    type: string
    description?: string | null
    device: string
    ip: string
    reference?: NullableJsonNullValueInput | InputJsonValue
    modified?: Date | string
    created?: Date | string
    createdBy: UserCreateNestedOneWithoutActivitiesInput
    session?: SessionCreateNestedOneWithoutActivitiesInput
  }

  export type ActivityUncheckedCreateInput = {
    id: string
    type: string
    description?: string | null
    device: string
    ip: string
    sessionId?: string | null
    reference?: NullableJsonNullValueInput | InputJsonValue
    createdById: string
    modified?: Date | string
    created?: Date | string
  }

  export type ActivityUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    device?: StringFieldUpdateOperationsInput | string
    ip?: StringFieldUpdateOperationsInput | string
    reference?: NullableJsonNullValueInput | InputJsonValue
    modified?: DateTimeFieldUpdateOperationsInput | Date | string
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: UserUpdateOneRequiredWithoutActivitiesNestedInput
    session?: SessionUpdateOneWithoutActivitiesNestedInput
  }

  export type ActivityUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    device?: StringFieldUpdateOperationsInput | string
    ip?: StringFieldUpdateOperationsInput | string
    sessionId?: NullableStringFieldUpdateOperationsInput | string | null
    reference?: NullableJsonNullValueInput | InputJsonValue
    createdById?: StringFieldUpdateOperationsInput | string
    modified?: DateTimeFieldUpdateOperationsInput | Date | string
    created?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ActivityCreateManyInput = {
    id: string
    type: string
    description?: string | null
    device: string
    ip: string
    sessionId?: string | null
    reference?: NullableJsonNullValueInput | InputJsonValue
    createdById: string
    modified?: Date | string
    created?: Date | string
  }

  export type ActivityUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    device?: StringFieldUpdateOperationsInput | string
    ip?: StringFieldUpdateOperationsInput | string
    reference?: NullableJsonNullValueInput | InputJsonValue
    modified?: DateTimeFieldUpdateOperationsInput | Date | string
    created?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ActivityUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    device?: StringFieldUpdateOperationsInput | string
    ip?: StringFieldUpdateOperationsInput | string
    sessionId?: NullableStringFieldUpdateOperationsInput | string | null
    reference?: NullableJsonNullValueInput | InputJsonValue
    createdById?: StringFieldUpdateOperationsInput | string
    modified?: DateTimeFieldUpdateOperationsInput | Date | string
    created?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type I18nCreateInput = {
    id: string
    key: string
    en?: string | null
    zh?: string | null
    vi?: string | null
    ko?: string | null
  }

  export type I18nUncheckedCreateInput = {
    id: string
    key: string
    en?: string | null
    zh?: string | null
    vi?: string | null
    ko?: string | null
  }

  export type I18nUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    en?: NullableStringFieldUpdateOperationsInput | string | null
    zh?: NullableStringFieldUpdateOperationsInput | string | null
    vi?: NullableStringFieldUpdateOperationsInput | string | null
    ko?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type I18nUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    en?: NullableStringFieldUpdateOperationsInput | string | null
    zh?: NullableStringFieldUpdateOperationsInput | string | null
    vi?: NullableStringFieldUpdateOperationsInput | string | null
    ko?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type I18nCreateManyInput = {
    id: string
    key: string
    en?: string | null
    zh?: string | null
    vi?: string | null
    ko?: string | null
  }

  export type I18nUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    en?: NullableStringFieldUpdateOperationsInput | string | null
    zh?: NullableStringFieldUpdateOperationsInput | string | null
    vi?: NullableStringFieldUpdateOperationsInput | string | null
    ko?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type I18nUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    en?: NullableStringFieldUpdateOperationsInput | string | null
    zh?: NullableStringFieldUpdateOperationsInput | string | null
    vi?: NullableStringFieldUpdateOperationsInput | string | null
    ko?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type IPWhitelistCreateInput = {
    id: string
    ip: string
    note?: string | null
  }

  export type IPWhitelistUncheckedCreateInput = {
    id: string
    ip: string
    note?: string | null
  }

  export type IPWhitelistUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    ip?: StringFieldUpdateOperationsInput | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type IPWhitelistUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    ip?: StringFieldUpdateOperationsInput | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type IPWhitelistCreateManyInput = {
    id: string
    ip: string
    note?: string | null
  }

  export type IPWhitelistUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    ip?: StringFieldUpdateOperationsInput | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type IPWhitelistUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    ip?: StringFieldUpdateOperationsInput | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SettingCreateInput = {
    id: string
    key: string
    value: string
    description?: string | null
    isSecret?: boolean
    type?: $Enums.SETTING_DATA_TYPE
  }

  export type SettingUncheckedCreateInput = {
    id: string
    key: string
    value: string
    description?: string | null
    isSecret?: boolean
    type?: $Enums.SETTING_DATA_TYPE
  }

  export type SettingUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isSecret?: BoolFieldUpdateOperationsInput | boolean
    type?: EnumSETTING_DATA_TYPEFieldUpdateOperationsInput | $Enums.SETTING_DATA_TYPE
  }

  export type SettingUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isSecret?: BoolFieldUpdateOperationsInput | boolean
    type?: EnumSETTING_DATA_TYPEFieldUpdateOperationsInput | $Enums.SETTING_DATA_TYPE
  }

  export type SettingCreateManyInput = {
    id: string
    key: string
    value: string
    description?: string | null
    isSecret?: boolean
    type?: $Enums.SETTING_DATA_TYPE
  }

  export type SettingUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isSecret?: BoolFieldUpdateOperationsInput | boolean
    type?: EnumSETTING_DATA_TYPEFieldUpdateOperationsInput | $Enums.SETTING_DATA_TYPE
  }

  export type SettingUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isSecret?: BoolFieldUpdateOperationsInput | boolean
    type?: EnumSETTING_DATA_TYPEFieldUpdateOperationsInput | $Enums.SETTING_DATA_TYPE
  }

  export type ProxyCreateInput = {
    id: string
    protocol: $Enums.ProxyProtocol
    host: string
    port: number
    username: string
    password: string
    enabled?: boolean
    modified?: Date | string
    created?: Date | string
  }

  export type ProxyUncheckedCreateInput = {
    id: string
    protocol: $Enums.ProxyProtocol
    host: string
    port: number
    username: string
    password: string
    enabled?: boolean
    modified?: Date | string
    created?: Date | string
  }

  export type ProxyUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    protocol?: EnumProxyProtocolFieldUpdateOperationsInput | $Enums.ProxyProtocol
    host?: StringFieldUpdateOperationsInput | string
    port?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    enabled?: BoolFieldUpdateOperationsInput | boolean
    modified?: DateTimeFieldUpdateOperationsInput | Date | string
    created?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProxyUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    protocol?: EnumProxyProtocolFieldUpdateOperationsInput | $Enums.ProxyProtocol
    host?: StringFieldUpdateOperationsInput | string
    port?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    enabled?: BoolFieldUpdateOperationsInput | boolean
    modified?: DateTimeFieldUpdateOperationsInput | Date | string
    created?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProxyCreateManyInput = {
    id: string
    protocol: $Enums.ProxyProtocol
    host: string
    port: number
    username: string
    password: string
    enabled?: boolean
    modified?: Date | string
    created?: Date | string
  }

  export type ProxyUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    protocol?: EnumProxyProtocolFieldUpdateOperationsInput | $Enums.ProxyProtocol
    host?: StringFieldUpdateOperationsInput | string
    port?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    enabled?: BoolFieldUpdateOperationsInput | boolean
    modified?: DateTimeFieldUpdateOperationsInput | Date | string
    created?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProxyUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    protocol?: EnumProxyProtocolFieldUpdateOperationsInput | $Enums.ProxyProtocol
    host?: StringFieldUpdateOperationsInput | string
    port?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    enabled?: BoolFieldUpdateOperationsInput | boolean
    modified?: DateTimeFieldUpdateOperationsInput | Date | string
    created?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TelegramTemplateCreateInput = {
    id: string
    name: string
    description?: string | null
    message?: string | null
    photos?: TelegramTemplateCreatephotosInput | string[]
    videos?: TelegramTemplateCreatevideosInput | string[]
    buttons?: NullableJsonNullValueInput | InputJsonValue
    created?: Date | string
    modified?: Date | string
  }

  export type TelegramTemplateUncheckedCreateInput = {
    id: string
    name: string
    description?: string | null
    message?: string | null
    photos?: TelegramTemplateCreatephotosInput | string[]
    videos?: TelegramTemplateCreatevideosInput | string[]
    buttons?: NullableJsonNullValueInput | InputJsonValue
    created?: Date | string
    modified?: Date | string
  }

  export type TelegramTemplateUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    photos?: TelegramTemplateUpdatephotosInput | string[]
    videos?: TelegramTemplateUpdatevideosInput | string[]
    buttons?: NullableJsonNullValueInput | InputJsonValue
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    modified?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TelegramTemplateUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    photos?: TelegramTemplateUpdatephotosInput | string[]
    videos?: TelegramTemplateUpdatevideosInput | string[]
    buttons?: NullableJsonNullValueInput | InputJsonValue
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    modified?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TelegramTemplateCreateManyInput = {
    id: string
    name: string
    description?: string | null
    message?: string | null
    photos?: TelegramTemplateCreatephotosInput | string[]
    videos?: TelegramTemplateCreatevideosInput | string[]
    buttons?: NullableJsonNullValueInput | InputJsonValue
    created?: Date | string
    modified?: Date | string
  }

  export type TelegramTemplateUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    photos?: TelegramTemplateUpdatephotosInput | string[]
    videos?: TelegramTemplateUpdatevideosInput | string[]
    buttons?: NullableJsonNullValueInput | InputJsonValue
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    modified?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TelegramTemplateUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    photos?: TelegramTemplateUpdatephotosInput | string[]
    videos?: TelegramTemplateUpdatevideosInput | string[]
    buttons?: NullableJsonNullValueInput | InputJsonValue
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    modified?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TelegramChatCreateInput = {
    id: string
    name: string
    type?: $Enums.TELEGRAM_CHAT_TYPE
    description?: string | null
    chatId: string
    created?: Date | string
    modified?: Date | string
  }

  export type TelegramChatUncheckedCreateInput = {
    id: string
    name: string
    type?: $Enums.TELEGRAM_CHAT_TYPE
    description?: string | null
    chatId: string
    created?: Date | string
    modified?: Date | string
  }

  export type TelegramChatUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumTELEGRAM_CHAT_TYPEFieldUpdateOperationsInput | $Enums.TELEGRAM_CHAT_TYPE
    description?: NullableStringFieldUpdateOperationsInput | string | null
    chatId?: StringFieldUpdateOperationsInput | string
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    modified?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TelegramChatUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumTELEGRAM_CHAT_TYPEFieldUpdateOperationsInput | $Enums.TELEGRAM_CHAT_TYPE
    description?: NullableStringFieldUpdateOperationsInput | string | null
    chatId?: StringFieldUpdateOperationsInput | string
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    modified?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TelegramChatCreateManyInput = {
    id: string
    name: string
    type?: $Enums.TELEGRAM_CHAT_TYPE
    description?: string | null
    chatId: string
    created?: Date | string
    modified?: Date | string
  }

  export type TelegramChatUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumTELEGRAM_CHAT_TYPEFieldUpdateOperationsInput | $Enums.TELEGRAM_CHAT_TYPE
    description?: NullableStringFieldUpdateOperationsInput | string | null
    chatId?: StringFieldUpdateOperationsInput | string
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    modified?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TelegramChatUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumTELEGRAM_CHAT_TYPEFieldUpdateOperationsInput | $Enums.TELEGRAM_CHAT_TYPE
    description?: NullableStringFieldUpdateOperationsInput | string | null
    chatId?: StringFieldUpdateOperationsInput | string
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    modified?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TelegramBotCreateInput = {
    id: string
    name: string
    description?: string | null
    enabled?: boolean
    token: string
    created?: Date | string
    modified?: Date | string
  }

  export type TelegramBotUncheckedCreateInput = {
    id: string
    name: string
    description?: string | null
    enabled?: boolean
    token: string
    created?: Date | string
    modified?: Date | string
  }

  export type TelegramBotUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    enabled?: BoolFieldUpdateOperationsInput | boolean
    token?: StringFieldUpdateOperationsInput | string
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    modified?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TelegramBotUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    enabled?: BoolFieldUpdateOperationsInput | boolean
    token?: StringFieldUpdateOperationsInput | string
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    modified?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TelegramBotCreateManyInput = {
    id: string
    name: string
    description?: string | null
    enabled?: boolean
    token: string
    created?: Date | string
    modified?: Date | string
  }

  export type TelegramBotUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    enabled?: BoolFieldUpdateOperationsInput | boolean
    token?: StringFieldUpdateOperationsInput | string
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    modified?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TelegramBotUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    enabled?: BoolFieldUpdateOperationsInput | boolean
    token?: StringFieldUpdateOperationsInput | string
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    modified?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type ActivityListRelationFilter = {
    every?: ActivityWhereInput
    some?: ActivityWhereInput
    none?: ActivityWhereInput
  }

  export type ApiKeyListRelationFilter = {
    every?: ApiKeyWhereInput
    some?: ApiKeyWhereInput
    none?: ApiKeyWhereInput
  }

  export type RolePlayerListRelationFilter = {
    every?: RolePlayerWhereInput
    some?: RolePlayerWhereInput
    none?: RolePlayerWhereInput
  }

  export type SessionListRelationFilter = {
    every?: SessionWhereInput
    some?: SessionWhereInput
    none?: SessionWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ActivityOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ApiKeyOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RolePlayerOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SessionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    emailUser?: SortOrder
    inviteBy?: SortOrder
    passwordExpired?: SortOrder
    passwordCreated?: SortOrder
    passwordAttempt?: SortOrder
    is_owner?: SortOrder
    mfaTelegramEnabled?: SortOrder
    mfaTotpEnabled?: SortOrder
    telegramUsername?: SortOrder
    totpSecret?: SortOrder
    enabled?: SortOrder
    modified?: SortOrder
    created?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    passwordAttempt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    emailUser?: SortOrder
    inviteBy?: SortOrder
    passwordExpired?: SortOrder
    passwordCreated?: SortOrder
    passwordAttempt?: SortOrder
    is_owner?: SortOrder
    mfaTelegramEnabled?: SortOrder
    mfaTotpEnabled?: SortOrder
    telegramUsername?: SortOrder
    totpSecret?: SortOrder
    enabled?: SortOrder
    modified?: SortOrder
    created?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    emailUser?: SortOrder
    inviteBy?: SortOrder
    passwordExpired?: SortOrder
    passwordCreated?: SortOrder
    passwordAttempt?: SortOrder
    is_owner?: SortOrder
    mfaTelegramEnabled?: SortOrder
    mfaTotpEnabled?: SortOrder
    telegramUsername?: SortOrder
    totpSecret?: SortOrder
    enabled?: SortOrder
    modified?: SortOrder
    created?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    passwordAttempt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type RolePermissionListRelationFilter = {
    every?: RolePermissionWhereInput
    some?: RolePermissionWhereInput
    none?: RolePermissionWhereInput
  }

  export type RolePermissionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PermissionCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
  }

  export type PermissionMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
  }

  export type PermissionMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
  }

  export type RoleCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    enabled?: SortOrder
    modified?: SortOrder
    created?: SortOrder
  }

  export type RoleMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    enabled?: SortOrder
    modified?: SortOrder
    created?: SortOrder
  }

  export type RoleMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    enabled?: SortOrder
    modified?: SortOrder
    created?: SortOrder
  }

  export type PermissionScalarRelationFilter = {
    is?: PermissionWhereInput
    isNot?: PermissionWhereInput
  }

  export type RoleScalarRelationFilter = {
    is?: RoleWhereInput
    isNot?: RoleWhereInput
  }

  export type RolePermissionRoleIdPermissionIdCompoundUniqueInput = {
    roleId: string
    permissionId: string
  }

  export type RolePermissionCountOrderByAggregateInput = {
    id?: SortOrder
    roleId?: SortOrder
    permissionId?: SortOrder
    modified?: SortOrder
    created?: SortOrder
  }

  export type RolePermissionMaxOrderByAggregateInput = {
    id?: SortOrder
    roleId?: SortOrder
    permissionId?: SortOrder
    modified?: SortOrder
    created?: SortOrder
  }

  export type RolePermissionMinOrderByAggregateInput = {
    id?: SortOrder
    roleId?: SortOrder
    permissionId?: SortOrder
    modified?: SortOrder
    created?: SortOrder
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type RolePlayerRoleIdPlayerIdCompoundUniqueInput = {
    roleId: string
    playerId: string
  }

  export type RolePlayerCountOrderByAggregateInput = {
    id?: SortOrder
    playerId?: SortOrder
    roleId?: SortOrder
    modified?: SortOrder
    created?: SortOrder
  }

  export type RolePlayerMaxOrderByAggregateInput = {
    id?: SortOrder
    playerId?: SortOrder
    roleId?: SortOrder
    modified?: SortOrder
    created?: SortOrder
  }

  export type RolePlayerMinOrderByAggregateInput = {
    id?: SortOrder
    playerId?: SortOrder
    roleId?: SortOrder
    modified?: SortOrder
    created?: SortOrder
  }

  export type SessionCountOrderByAggregateInput = {
    id?: SortOrder
    device?: SortOrder
    ip?: SortOrder
    token?: SortOrder
    createdById?: SortOrder
    expired?: SortOrder
    revoked?: SortOrder
    modified?: SortOrder
    created?: SortOrder
  }

  export type SessionMaxOrderByAggregateInput = {
    id?: SortOrder
    device?: SortOrder
    ip?: SortOrder
    token?: SortOrder
    createdById?: SortOrder
    expired?: SortOrder
    revoked?: SortOrder
    modified?: SortOrder
    created?: SortOrder
  }

  export type SessionMinOrderByAggregateInput = {
    id?: SortOrder
    device?: SortOrder
    ip?: SortOrder
    token?: SortOrder
    createdById?: SortOrder
    expired?: SortOrder
    revoked?: SortOrder
    modified?: SortOrder
    created?: SortOrder
  }

  export type EnumAPI_KEY_TYPEFilter<$PrismaModel = never> = {
    equals?: $Enums.API_KEY_TYPE | EnumAPI_KEY_TYPEFieldRefInput<$PrismaModel>
    in?: $Enums.API_KEY_TYPE[] | ListEnumAPI_KEY_TYPEFieldRefInput<$PrismaModel>
    notIn?: $Enums.API_KEY_TYPE[] | ListEnumAPI_KEY_TYPEFieldRefInput<$PrismaModel>
    not?: NestedEnumAPI_KEY_TYPEFilter<$PrismaModel> | $Enums.API_KEY_TYPE
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type ApiKeyCountOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    name?: SortOrder
    key?: SortOrder
    hash?: SortOrder
    enabled?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    created?: SortOrder
    userId?: SortOrder
  }

  export type ApiKeyMaxOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    name?: SortOrder
    key?: SortOrder
    hash?: SortOrder
    enabled?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    created?: SortOrder
    userId?: SortOrder
  }

  export type ApiKeyMinOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    name?: SortOrder
    key?: SortOrder
    hash?: SortOrder
    enabled?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    created?: SortOrder
    userId?: SortOrder
  }

  export type EnumAPI_KEY_TYPEWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.API_KEY_TYPE | EnumAPI_KEY_TYPEFieldRefInput<$PrismaModel>
    in?: $Enums.API_KEY_TYPE[] | ListEnumAPI_KEY_TYPEFieldRefInput<$PrismaModel>
    notIn?: $Enums.API_KEY_TYPE[] | ListEnumAPI_KEY_TYPEFieldRefInput<$PrismaModel>
    not?: NestedEnumAPI_KEY_TYPEWithAggregatesFilter<$PrismaModel> | $Enums.API_KEY_TYPE
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAPI_KEY_TYPEFilter<$PrismaModel>
    _max?: NestedEnumAPI_KEY_TYPEFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type SessionNullableScalarRelationFilter = {
    is?: SessionWhereInput | null
    isNot?: SessionWhereInput | null
  }

  export type ActivityCountOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    description?: SortOrder
    device?: SortOrder
    ip?: SortOrder
    sessionId?: SortOrder
    reference?: SortOrder
    createdById?: SortOrder
    modified?: SortOrder
    created?: SortOrder
  }

  export type ActivityMaxOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    description?: SortOrder
    device?: SortOrder
    ip?: SortOrder
    sessionId?: SortOrder
    createdById?: SortOrder
    modified?: SortOrder
    created?: SortOrder
  }

  export type ActivityMinOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    description?: SortOrder
    device?: SortOrder
    ip?: SortOrder
    sessionId?: SortOrder
    createdById?: SortOrder
    modified?: SortOrder
    created?: SortOrder
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type I18nCountOrderByAggregateInput = {
    id?: SortOrder
    key?: SortOrder
    en?: SortOrder
    zh?: SortOrder
    vi?: SortOrder
    ko?: SortOrder
  }

  export type I18nMaxOrderByAggregateInput = {
    id?: SortOrder
    key?: SortOrder
    en?: SortOrder
    zh?: SortOrder
    vi?: SortOrder
    ko?: SortOrder
  }

  export type I18nMinOrderByAggregateInput = {
    id?: SortOrder
    key?: SortOrder
    en?: SortOrder
    zh?: SortOrder
    vi?: SortOrder
    ko?: SortOrder
  }

  export type IPWhitelistCountOrderByAggregateInput = {
    id?: SortOrder
    ip?: SortOrder
    note?: SortOrder
  }

  export type IPWhitelistMaxOrderByAggregateInput = {
    id?: SortOrder
    ip?: SortOrder
    note?: SortOrder
  }

  export type IPWhitelistMinOrderByAggregateInput = {
    id?: SortOrder
    ip?: SortOrder
    note?: SortOrder
  }

  export type EnumSETTING_DATA_TYPEFilter<$PrismaModel = never> = {
    equals?: $Enums.SETTING_DATA_TYPE | EnumSETTING_DATA_TYPEFieldRefInput<$PrismaModel>
    in?: $Enums.SETTING_DATA_TYPE[] | ListEnumSETTING_DATA_TYPEFieldRefInput<$PrismaModel>
    notIn?: $Enums.SETTING_DATA_TYPE[] | ListEnumSETTING_DATA_TYPEFieldRefInput<$PrismaModel>
    not?: NestedEnumSETTING_DATA_TYPEFilter<$PrismaModel> | $Enums.SETTING_DATA_TYPE
  }

  export type SettingCountOrderByAggregateInput = {
    id?: SortOrder
    key?: SortOrder
    value?: SortOrder
    description?: SortOrder
    isSecret?: SortOrder
    type?: SortOrder
  }

  export type SettingMaxOrderByAggregateInput = {
    id?: SortOrder
    key?: SortOrder
    value?: SortOrder
    description?: SortOrder
    isSecret?: SortOrder
    type?: SortOrder
  }

  export type SettingMinOrderByAggregateInput = {
    id?: SortOrder
    key?: SortOrder
    value?: SortOrder
    description?: SortOrder
    isSecret?: SortOrder
    type?: SortOrder
  }

  export type EnumSETTING_DATA_TYPEWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SETTING_DATA_TYPE | EnumSETTING_DATA_TYPEFieldRefInput<$PrismaModel>
    in?: $Enums.SETTING_DATA_TYPE[] | ListEnumSETTING_DATA_TYPEFieldRefInput<$PrismaModel>
    notIn?: $Enums.SETTING_DATA_TYPE[] | ListEnumSETTING_DATA_TYPEFieldRefInput<$PrismaModel>
    not?: NestedEnumSETTING_DATA_TYPEWithAggregatesFilter<$PrismaModel> | $Enums.SETTING_DATA_TYPE
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSETTING_DATA_TYPEFilter<$PrismaModel>
    _max?: NestedEnumSETTING_DATA_TYPEFilter<$PrismaModel>
  }

  export type EnumProxyProtocolFilter<$PrismaModel = never> = {
    equals?: $Enums.ProxyProtocol | EnumProxyProtocolFieldRefInput<$PrismaModel>
    in?: $Enums.ProxyProtocol[] | ListEnumProxyProtocolFieldRefInput<$PrismaModel>
    notIn?: $Enums.ProxyProtocol[] | ListEnumProxyProtocolFieldRefInput<$PrismaModel>
    not?: NestedEnumProxyProtocolFilter<$PrismaModel> | $Enums.ProxyProtocol
  }

  export type ProxyHostPortProtocolUsernamePasswordCompoundUniqueInput = {
    host: string
    port: number
    protocol: $Enums.ProxyProtocol
    username: string
    password: string
  }

  export type ProxyCountOrderByAggregateInput = {
    id?: SortOrder
    protocol?: SortOrder
    host?: SortOrder
    port?: SortOrder
    username?: SortOrder
    password?: SortOrder
    enabled?: SortOrder
    modified?: SortOrder
    created?: SortOrder
  }

  export type ProxyAvgOrderByAggregateInput = {
    port?: SortOrder
  }

  export type ProxyMaxOrderByAggregateInput = {
    id?: SortOrder
    protocol?: SortOrder
    host?: SortOrder
    port?: SortOrder
    username?: SortOrder
    password?: SortOrder
    enabled?: SortOrder
    modified?: SortOrder
    created?: SortOrder
  }

  export type ProxyMinOrderByAggregateInput = {
    id?: SortOrder
    protocol?: SortOrder
    host?: SortOrder
    port?: SortOrder
    username?: SortOrder
    password?: SortOrder
    enabled?: SortOrder
    modified?: SortOrder
    created?: SortOrder
  }

  export type ProxySumOrderByAggregateInput = {
    port?: SortOrder
  }

  export type EnumProxyProtocolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ProxyProtocol | EnumProxyProtocolFieldRefInput<$PrismaModel>
    in?: $Enums.ProxyProtocol[] | ListEnumProxyProtocolFieldRefInput<$PrismaModel>
    notIn?: $Enums.ProxyProtocol[] | ListEnumProxyProtocolFieldRefInput<$PrismaModel>
    not?: NestedEnumProxyProtocolWithAggregatesFilter<$PrismaModel> | $Enums.ProxyProtocol
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumProxyProtocolFilter<$PrismaModel>
    _max?: NestedEnumProxyProtocolFilter<$PrismaModel>
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type TelegramTemplateCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    message?: SortOrder
    photos?: SortOrder
    videos?: SortOrder
    buttons?: SortOrder
    created?: SortOrder
    modified?: SortOrder
  }

  export type TelegramTemplateMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    message?: SortOrder
    created?: SortOrder
    modified?: SortOrder
  }

  export type TelegramTemplateMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    message?: SortOrder
    created?: SortOrder
    modified?: SortOrder
  }

  export type EnumTELEGRAM_CHAT_TYPEFilter<$PrismaModel = never> = {
    equals?: $Enums.TELEGRAM_CHAT_TYPE | EnumTELEGRAM_CHAT_TYPEFieldRefInput<$PrismaModel>
    in?: $Enums.TELEGRAM_CHAT_TYPE[] | ListEnumTELEGRAM_CHAT_TYPEFieldRefInput<$PrismaModel>
    notIn?: $Enums.TELEGRAM_CHAT_TYPE[] | ListEnumTELEGRAM_CHAT_TYPEFieldRefInput<$PrismaModel>
    not?: NestedEnumTELEGRAM_CHAT_TYPEFilter<$PrismaModel> | $Enums.TELEGRAM_CHAT_TYPE
  }

  export type TelegramChatCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    description?: SortOrder
    chatId?: SortOrder
    created?: SortOrder
    modified?: SortOrder
  }

  export type TelegramChatMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    description?: SortOrder
    chatId?: SortOrder
    created?: SortOrder
    modified?: SortOrder
  }

  export type TelegramChatMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    description?: SortOrder
    chatId?: SortOrder
    created?: SortOrder
    modified?: SortOrder
  }

  export type EnumTELEGRAM_CHAT_TYPEWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TELEGRAM_CHAT_TYPE | EnumTELEGRAM_CHAT_TYPEFieldRefInput<$PrismaModel>
    in?: $Enums.TELEGRAM_CHAT_TYPE[] | ListEnumTELEGRAM_CHAT_TYPEFieldRefInput<$PrismaModel>
    notIn?: $Enums.TELEGRAM_CHAT_TYPE[] | ListEnumTELEGRAM_CHAT_TYPEFieldRefInput<$PrismaModel>
    not?: NestedEnumTELEGRAM_CHAT_TYPEWithAggregatesFilter<$PrismaModel> | $Enums.TELEGRAM_CHAT_TYPE
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTELEGRAM_CHAT_TYPEFilter<$PrismaModel>
    _max?: NestedEnumTELEGRAM_CHAT_TYPEFilter<$PrismaModel>
  }

  export type TelegramBotCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    enabled?: SortOrder
    token?: SortOrder
    created?: SortOrder
    modified?: SortOrder
  }

  export type TelegramBotMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    enabled?: SortOrder
    token?: SortOrder
    created?: SortOrder
    modified?: SortOrder
  }

  export type TelegramBotMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    enabled?: SortOrder
    token?: SortOrder
    created?: SortOrder
    modified?: SortOrder
  }

  export type ActivityCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<ActivityCreateWithoutCreatedByInput, ActivityUncheckedCreateWithoutCreatedByInput> | ActivityCreateWithoutCreatedByInput[] | ActivityUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: ActivityCreateOrConnectWithoutCreatedByInput | ActivityCreateOrConnectWithoutCreatedByInput[]
    createMany?: ActivityCreateManyCreatedByInputEnvelope
    connect?: ActivityWhereUniqueInput | ActivityWhereUniqueInput[]
  }

  export type ApiKeyCreateNestedManyWithoutUserInput = {
    create?: XOR<ApiKeyCreateWithoutUserInput, ApiKeyUncheckedCreateWithoutUserInput> | ApiKeyCreateWithoutUserInput[] | ApiKeyUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ApiKeyCreateOrConnectWithoutUserInput | ApiKeyCreateOrConnectWithoutUserInput[]
    createMany?: ApiKeyCreateManyUserInputEnvelope
    connect?: ApiKeyWhereUniqueInput | ApiKeyWhereUniqueInput[]
  }

  export type RolePlayerCreateNestedManyWithoutPlayerInput = {
    create?: XOR<RolePlayerCreateWithoutPlayerInput, RolePlayerUncheckedCreateWithoutPlayerInput> | RolePlayerCreateWithoutPlayerInput[] | RolePlayerUncheckedCreateWithoutPlayerInput[]
    connectOrCreate?: RolePlayerCreateOrConnectWithoutPlayerInput | RolePlayerCreateOrConnectWithoutPlayerInput[]
    createMany?: RolePlayerCreateManyPlayerInputEnvelope
    connect?: RolePlayerWhereUniqueInput | RolePlayerWhereUniqueInput[]
  }

  export type SessionCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<SessionCreateWithoutCreatedByInput, SessionUncheckedCreateWithoutCreatedByInput> | SessionCreateWithoutCreatedByInput[] | SessionUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutCreatedByInput | SessionCreateOrConnectWithoutCreatedByInput[]
    createMany?: SessionCreateManyCreatedByInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type ActivityUncheckedCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<ActivityCreateWithoutCreatedByInput, ActivityUncheckedCreateWithoutCreatedByInput> | ActivityCreateWithoutCreatedByInput[] | ActivityUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: ActivityCreateOrConnectWithoutCreatedByInput | ActivityCreateOrConnectWithoutCreatedByInput[]
    createMany?: ActivityCreateManyCreatedByInputEnvelope
    connect?: ActivityWhereUniqueInput | ActivityWhereUniqueInput[]
  }

  export type ApiKeyUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ApiKeyCreateWithoutUserInput, ApiKeyUncheckedCreateWithoutUserInput> | ApiKeyCreateWithoutUserInput[] | ApiKeyUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ApiKeyCreateOrConnectWithoutUserInput | ApiKeyCreateOrConnectWithoutUserInput[]
    createMany?: ApiKeyCreateManyUserInputEnvelope
    connect?: ApiKeyWhereUniqueInput | ApiKeyWhereUniqueInput[]
  }

  export type RolePlayerUncheckedCreateNestedManyWithoutPlayerInput = {
    create?: XOR<RolePlayerCreateWithoutPlayerInput, RolePlayerUncheckedCreateWithoutPlayerInput> | RolePlayerCreateWithoutPlayerInput[] | RolePlayerUncheckedCreateWithoutPlayerInput[]
    connectOrCreate?: RolePlayerCreateOrConnectWithoutPlayerInput | RolePlayerCreateOrConnectWithoutPlayerInput[]
    createMany?: RolePlayerCreateManyPlayerInputEnvelope
    connect?: RolePlayerWhereUniqueInput | RolePlayerWhereUniqueInput[]
  }

  export type SessionUncheckedCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<SessionCreateWithoutCreatedByInput, SessionUncheckedCreateWithoutCreatedByInput> | SessionCreateWithoutCreatedByInput[] | SessionUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutCreatedByInput | SessionCreateOrConnectWithoutCreatedByInput[]
    createMany?: SessionCreateManyCreatedByInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type ActivityUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<ActivityCreateWithoutCreatedByInput, ActivityUncheckedCreateWithoutCreatedByInput> | ActivityCreateWithoutCreatedByInput[] | ActivityUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: ActivityCreateOrConnectWithoutCreatedByInput | ActivityCreateOrConnectWithoutCreatedByInput[]
    upsert?: ActivityUpsertWithWhereUniqueWithoutCreatedByInput | ActivityUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: ActivityCreateManyCreatedByInputEnvelope
    set?: ActivityWhereUniqueInput | ActivityWhereUniqueInput[]
    disconnect?: ActivityWhereUniqueInput | ActivityWhereUniqueInput[]
    delete?: ActivityWhereUniqueInput | ActivityWhereUniqueInput[]
    connect?: ActivityWhereUniqueInput | ActivityWhereUniqueInput[]
    update?: ActivityUpdateWithWhereUniqueWithoutCreatedByInput | ActivityUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: ActivityUpdateManyWithWhereWithoutCreatedByInput | ActivityUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: ActivityScalarWhereInput | ActivityScalarWhereInput[]
  }

  export type ApiKeyUpdateManyWithoutUserNestedInput = {
    create?: XOR<ApiKeyCreateWithoutUserInput, ApiKeyUncheckedCreateWithoutUserInput> | ApiKeyCreateWithoutUserInput[] | ApiKeyUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ApiKeyCreateOrConnectWithoutUserInput | ApiKeyCreateOrConnectWithoutUserInput[]
    upsert?: ApiKeyUpsertWithWhereUniqueWithoutUserInput | ApiKeyUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ApiKeyCreateManyUserInputEnvelope
    set?: ApiKeyWhereUniqueInput | ApiKeyWhereUniqueInput[]
    disconnect?: ApiKeyWhereUniqueInput | ApiKeyWhereUniqueInput[]
    delete?: ApiKeyWhereUniqueInput | ApiKeyWhereUniqueInput[]
    connect?: ApiKeyWhereUniqueInput | ApiKeyWhereUniqueInput[]
    update?: ApiKeyUpdateWithWhereUniqueWithoutUserInput | ApiKeyUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ApiKeyUpdateManyWithWhereWithoutUserInput | ApiKeyUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ApiKeyScalarWhereInput | ApiKeyScalarWhereInput[]
  }

  export type RolePlayerUpdateManyWithoutPlayerNestedInput = {
    create?: XOR<RolePlayerCreateWithoutPlayerInput, RolePlayerUncheckedCreateWithoutPlayerInput> | RolePlayerCreateWithoutPlayerInput[] | RolePlayerUncheckedCreateWithoutPlayerInput[]
    connectOrCreate?: RolePlayerCreateOrConnectWithoutPlayerInput | RolePlayerCreateOrConnectWithoutPlayerInput[]
    upsert?: RolePlayerUpsertWithWhereUniqueWithoutPlayerInput | RolePlayerUpsertWithWhereUniqueWithoutPlayerInput[]
    createMany?: RolePlayerCreateManyPlayerInputEnvelope
    set?: RolePlayerWhereUniqueInput | RolePlayerWhereUniqueInput[]
    disconnect?: RolePlayerWhereUniqueInput | RolePlayerWhereUniqueInput[]
    delete?: RolePlayerWhereUniqueInput | RolePlayerWhereUniqueInput[]
    connect?: RolePlayerWhereUniqueInput | RolePlayerWhereUniqueInput[]
    update?: RolePlayerUpdateWithWhereUniqueWithoutPlayerInput | RolePlayerUpdateWithWhereUniqueWithoutPlayerInput[]
    updateMany?: RolePlayerUpdateManyWithWhereWithoutPlayerInput | RolePlayerUpdateManyWithWhereWithoutPlayerInput[]
    deleteMany?: RolePlayerScalarWhereInput | RolePlayerScalarWhereInput[]
  }

  export type SessionUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<SessionCreateWithoutCreatedByInput, SessionUncheckedCreateWithoutCreatedByInput> | SessionCreateWithoutCreatedByInput[] | SessionUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutCreatedByInput | SessionCreateOrConnectWithoutCreatedByInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutCreatedByInput | SessionUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: SessionCreateManyCreatedByInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutCreatedByInput | SessionUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutCreatedByInput | SessionUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type ActivityUncheckedUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<ActivityCreateWithoutCreatedByInput, ActivityUncheckedCreateWithoutCreatedByInput> | ActivityCreateWithoutCreatedByInput[] | ActivityUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: ActivityCreateOrConnectWithoutCreatedByInput | ActivityCreateOrConnectWithoutCreatedByInput[]
    upsert?: ActivityUpsertWithWhereUniqueWithoutCreatedByInput | ActivityUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: ActivityCreateManyCreatedByInputEnvelope
    set?: ActivityWhereUniqueInput | ActivityWhereUniqueInput[]
    disconnect?: ActivityWhereUniqueInput | ActivityWhereUniqueInput[]
    delete?: ActivityWhereUniqueInput | ActivityWhereUniqueInput[]
    connect?: ActivityWhereUniqueInput | ActivityWhereUniqueInput[]
    update?: ActivityUpdateWithWhereUniqueWithoutCreatedByInput | ActivityUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: ActivityUpdateManyWithWhereWithoutCreatedByInput | ActivityUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: ActivityScalarWhereInput | ActivityScalarWhereInput[]
  }

  export type ApiKeyUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ApiKeyCreateWithoutUserInput, ApiKeyUncheckedCreateWithoutUserInput> | ApiKeyCreateWithoutUserInput[] | ApiKeyUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ApiKeyCreateOrConnectWithoutUserInput | ApiKeyCreateOrConnectWithoutUserInput[]
    upsert?: ApiKeyUpsertWithWhereUniqueWithoutUserInput | ApiKeyUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ApiKeyCreateManyUserInputEnvelope
    set?: ApiKeyWhereUniqueInput | ApiKeyWhereUniqueInput[]
    disconnect?: ApiKeyWhereUniqueInput | ApiKeyWhereUniqueInput[]
    delete?: ApiKeyWhereUniqueInput | ApiKeyWhereUniqueInput[]
    connect?: ApiKeyWhereUniqueInput | ApiKeyWhereUniqueInput[]
    update?: ApiKeyUpdateWithWhereUniqueWithoutUserInput | ApiKeyUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ApiKeyUpdateManyWithWhereWithoutUserInput | ApiKeyUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ApiKeyScalarWhereInput | ApiKeyScalarWhereInput[]
  }

  export type RolePlayerUncheckedUpdateManyWithoutPlayerNestedInput = {
    create?: XOR<RolePlayerCreateWithoutPlayerInput, RolePlayerUncheckedCreateWithoutPlayerInput> | RolePlayerCreateWithoutPlayerInput[] | RolePlayerUncheckedCreateWithoutPlayerInput[]
    connectOrCreate?: RolePlayerCreateOrConnectWithoutPlayerInput | RolePlayerCreateOrConnectWithoutPlayerInput[]
    upsert?: RolePlayerUpsertWithWhereUniqueWithoutPlayerInput | RolePlayerUpsertWithWhereUniqueWithoutPlayerInput[]
    createMany?: RolePlayerCreateManyPlayerInputEnvelope
    set?: RolePlayerWhereUniqueInput | RolePlayerWhereUniqueInput[]
    disconnect?: RolePlayerWhereUniqueInput | RolePlayerWhereUniqueInput[]
    delete?: RolePlayerWhereUniqueInput | RolePlayerWhereUniqueInput[]
    connect?: RolePlayerWhereUniqueInput | RolePlayerWhereUniqueInput[]
    update?: RolePlayerUpdateWithWhereUniqueWithoutPlayerInput | RolePlayerUpdateWithWhereUniqueWithoutPlayerInput[]
    updateMany?: RolePlayerUpdateManyWithWhereWithoutPlayerInput | RolePlayerUpdateManyWithWhereWithoutPlayerInput[]
    deleteMany?: RolePlayerScalarWhereInput | RolePlayerScalarWhereInput[]
  }

  export type SessionUncheckedUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<SessionCreateWithoutCreatedByInput, SessionUncheckedCreateWithoutCreatedByInput> | SessionCreateWithoutCreatedByInput[] | SessionUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutCreatedByInput | SessionCreateOrConnectWithoutCreatedByInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutCreatedByInput | SessionUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: SessionCreateManyCreatedByInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutCreatedByInput | SessionUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutCreatedByInput | SessionUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type RolePermissionCreateNestedManyWithoutPermissionInput = {
    create?: XOR<RolePermissionCreateWithoutPermissionInput, RolePermissionUncheckedCreateWithoutPermissionInput> | RolePermissionCreateWithoutPermissionInput[] | RolePermissionUncheckedCreateWithoutPermissionInput[]
    connectOrCreate?: RolePermissionCreateOrConnectWithoutPermissionInput | RolePermissionCreateOrConnectWithoutPermissionInput[]
    createMany?: RolePermissionCreateManyPermissionInputEnvelope
    connect?: RolePermissionWhereUniqueInput | RolePermissionWhereUniqueInput[]
  }

  export type RolePermissionUncheckedCreateNestedManyWithoutPermissionInput = {
    create?: XOR<RolePermissionCreateWithoutPermissionInput, RolePermissionUncheckedCreateWithoutPermissionInput> | RolePermissionCreateWithoutPermissionInput[] | RolePermissionUncheckedCreateWithoutPermissionInput[]
    connectOrCreate?: RolePermissionCreateOrConnectWithoutPermissionInput | RolePermissionCreateOrConnectWithoutPermissionInput[]
    createMany?: RolePermissionCreateManyPermissionInputEnvelope
    connect?: RolePermissionWhereUniqueInput | RolePermissionWhereUniqueInput[]
  }

  export type RolePermissionUpdateManyWithoutPermissionNestedInput = {
    create?: XOR<RolePermissionCreateWithoutPermissionInput, RolePermissionUncheckedCreateWithoutPermissionInput> | RolePermissionCreateWithoutPermissionInput[] | RolePermissionUncheckedCreateWithoutPermissionInput[]
    connectOrCreate?: RolePermissionCreateOrConnectWithoutPermissionInput | RolePermissionCreateOrConnectWithoutPermissionInput[]
    upsert?: RolePermissionUpsertWithWhereUniqueWithoutPermissionInput | RolePermissionUpsertWithWhereUniqueWithoutPermissionInput[]
    createMany?: RolePermissionCreateManyPermissionInputEnvelope
    set?: RolePermissionWhereUniqueInput | RolePermissionWhereUniqueInput[]
    disconnect?: RolePermissionWhereUniqueInput | RolePermissionWhereUniqueInput[]
    delete?: RolePermissionWhereUniqueInput | RolePermissionWhereUniqueInput[]
    connect?: RolePermissionWhereUniqueInput | RolePermissionWhereUniqueInput[]
    update?: RolePermissionUpdateWithWhereUniqueWithoutPermissionInput | RolePermissionUpdateWithWhereUniqueWithoutPermissionInput[]
    updateMany?: RolePermissionUpdateManyWithWhereWithoutPermissionInput | RolePermissionUpdateManyWithWhereWithoutPermissionInput[]
    deleteMany?: RolePermissionScalarWhereInput | RolePermissionScalarWhereInput[]
  }

  export type RolePermissionUncheckedUpdateManyWithoutPermissionNestedInput = {
    create?: XOR<RolePermissionCreateWithoutPermissionInput, RolePermissionUncheckedCreateWithoutPermissionInput> | RolePermissionCreateWithoutPermissionInput[] | RolePermissionUncheckedCreateWithoutPermissionInput[]
    connectOrCreate?: RolePermissionCreateOrConnectWithoutPermissionInput | RolePermissionCreateOrConnectWithoutPermissionInput[]
    upsert?: RolePermissionUpsertWithWhereUniqueWithoutPermissionInput | RolePermissionUpsertWithWhereUniqueWithoutPermissionInput[]
    createMany?: RolePermissionCreateManyPermissionInputEnvelope
    set?: RolePermissionWhereUniqueInput | RolePermissionWhereUniqueInput[]
    disconnect?: RolePermissionWhereUniqueInput | RolePermissionWhereUniqueInput[]
    delete?: RolePermissionWhereUniqueInput | RolePermissionWhereUniqueInput[]
    connect?: RolePermissionWhereUniqueInput | RolePermissionWhereUniqueInput[]
    update?: RolePermissionUpdateWithWhereUniqueWithoutPermissionInput | RolePermissionUpdateWithWhereUniqueWithoutPermissionInput[]
    updateMany?: RolePermissionUpdateManyWithWhereWithoutPermissionInput | RolePermissionUpdateManyWithWhereWithoutPermissionInput[]
    deleteMany?: RolePermissionScalarWhereInput | RolePermissionScalarWhereInput[]
  }

  export type RolePermissionCreateNestedManyWithoutRoleInput = {
    create?: XOR<RolePermissionCreateWithoutRoleInput, RolePermissionUncheckedCreateWithoutRoleInput> | RolePermissionCreateWithoutRoleInput[] | RolePermissionUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: RolePermissionCreateOrConnectWithoutRoleInput | RolePermissionCreateOrConnectWithoutRoleInput[]
    createMany?: RolePermissionCreateManyRoleInputEnvelope
    connect?: RolePermissionWhereUniqueInput | RolePermissionWhereUniqueInput[]
  }

  export type RolePlayerCreateNestedManyWithoutRoleInput = {
    create?: XOR<RolePlayerCreateWithoutRoleInput, RolePlayerUncheckedCreateWithoutRoleInput> | RolePlayerCreateWithoutRoleInput[] | RolePlayerUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: RolePlayerCreateOrConnectWithoutRoleInput | RolePlayerCreateOrConnectWithoutRoleInput[]
    createMany?: RolePlayerCreateManyRoleInputEnvelope
    connect?: RolePlayerWhereUniqueInput | RolePlayerWhereUniqueInput[]
  }

  export type RolePermissionUncheckedCreateNestedManyWithoutRoleInput = {
    create?: XOR<RolePermissionCreateWithoutRoleInput, RolePermissionUncheckedCreateWithoutRoleInput> | RolePermissionCreateWithoutRoleInput[] | RolePermissionUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: RolePermissionCreateOrConnectWithoutRoleInput | RolePermissionCreateOrConnectWithoutRoleInput[]
    createMany?: RolePermissionCreateManyRoleInputEnvelope
    connect?: RolePermissionWhereUniqueInput | RolePermissionWhereUniqueInput[]
  }

  export type RolePlayerUncheckedCreateNestedManyWithoutRoleInput = {
    create?: XOR<RolePlayerCreateWithoutRoleInput, RolePlayerUncheckedCreateWithoutRoleInput> | RolePlayerCreateWithoutRoleInput[] | RolePlayerUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: RolePlayerCreateOrConnectWithoutRoleInput | RolePlayerCreateOrConnectWithoutRoleInput[]
    createMany?: RolePlayerCreateManyRoleInputEnvelope
    connect?: RolePlayerWhereUniqueInput | RolePlayerWhereUniqueInput[]
  }

  export type RolePermissionUpdateManyWithoutRoleNestedInput = {
    create?: XOR<RolePermissionCreateWithoutRoleInput, RolePermissionUncheckedCreateWithoutRoleInput> | RolePermissionCreateWithoutRoleInput[] | RolePermissionUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: RolePermissionCreateOrConnectWithoutRoleInput | RolePermissionCreateOrConnectWithoutRoleInput[]
    upsert?: RolePermissionUpsertWithWhereUniqueWithoutRoleInput | RolePermissionUpsertWithWhereUniqueWithoutRoleInput[]
    createMany?: RolePermissionCreateManyRoleInputEnvelope
    set?: RolePermissionWhereUniqueInput | RolePermissionWhereUniqueInput[]
    disconnect?: RolePermissionWhereUniqueInput | RolePermissionWhereUniqueInput[]
    delete?: RolePermissionWhereUniqueInput | RolePermissionWhereUniqueInput[]
    connect?: RolePermissionWhereUniqueInput | RolePermissionWhereUniqueInput[]
    update?: RolePermissionUpdateWithWhereUniqueWithoutRoleInput | RolePermissionUpdateWithWhereUniqueWithoutRoleInput[]
    updateMany?: RolePermissionUpdateManyWithWhereWithoutRoleInput | RolePermissionUpdateManyWithWhereWithoutRoleInput[]
    deleteMany?: RolePermissionScalarWhereInput | RolePermissionScalarWhereInput[]
  }

  export type RolePlayerUpdateManyWithoutRoleNestedInput = {
    create?: XOR<RolePlayerCreateWithoutRoleInput, RolePlayerUncheckedCreateWithoutRoleInput> | RolePlayerCreateWithoutRoleInput[] | RolePlayerUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: RolePlayerCreateOrConnectWithoutRoleInput | RolePlayerCreateOrConnectWithoutRoleInput[]
    upsert?: RolePlayerUpsertWithWhereUniqueWithoutRoleInput | RolePlayerUpsertWithWhereUniqueWithoutRoleInput[]
    createMany?: RolePlayerCreateManyRoleInputEnvelope
    set?: RolePlayerWhereUniqueInput | RolePlayerWhereUniqueInput[]
    disconnect?: RolePlayerWhereUniqueInput | RolePlayerWhereUniqueInput[]
    delete?: RolePlayerWhereUniqueInput | RolePlayerWhereUniqueInput[]
    connect?: RolePlayerWhereUniqueInput | RolePlayerWhereUniqueInput[]
    update?: RolePlayerUpdateWithWhereUniqueWithoutRoleInput | RolePlayerUpdateWithWhereUniqueWithoutRoleInput[]
    updateMany?: RolePlayerUpdateManyWithWhereWithoutRoleInput | RolePlayerUpdateManyWithWhereWithoutRoleInput[]
    deleteMany?: RolePlayerScalarWhereInput | RolePlayerScalarWhereInput[]
  }

  export type RolePermissionUncheckedUpdateManyWithoutRoleNestedInput = {
    create?: XOR<RolePermissionCreateWithoutRoleInput, RolePermissionUncheckedCreateWithoutRoleInput> | RolePermissionCreateWithoutRoleInput[] | RolePermissionUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: RolePermissionCreateOrConnectWithoutRoleInput | RolePermissionCreateOrConnectWithoutRoleInput[]
    upsert?: RolePermissionUpsertWithWhereUniqueWithoutRoleInput | RolePermissionUpsertWithWhereUniqueWithoutRoleInput[]
    createMany?: RolePermissionCreateManyRoleInputEnvelope
    set?: RolePermissionWhereUniqueInput | RolePermissionWhereUniqueInput[]
    disconnect?: RolePermissionWhereUniqueInput | RolePermissionWhereUniqueInput[]
    delete?: RolePermissionWhereUniqueInput | RolePermissionWhereUniqueInput[]
    connect?: RolePermissionWhereUniqueInput | RolePermissionWhereUniqueInput[]
    update?: RolePermissionUpdateWithWhereUniqueWithoutRoleInput | RolePermissionUpdateWithWhereUniqueWithoutRoleInput[]
    updateMany?: RolePermissionUpdateManyWithWhereWithoutRoleInput | RolePermissionUpdateManyWithWhereWithoutRoleInput[]
    deleteMany?: RolePermissionScalarWhereInput | RolePermissionScalarWhereInput[]
  }

  export type RolePlayerUncheckedUpdateManyWithoutRoleNestedInput = {
    create?: XOR<RolePlayerCreateWithoutRoleInput, RolePlayerUncheckedCreateWithoutRoleInput> | RolePlayerCreateWithoutRoleInput[] | RolePlayerUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: RolePlayerCreateOrConnectWithoutRoleInput | RolePlayerCreateOrConnectWithoutRoleInput[]
    upsert?: RolePlayerUpsertWithWhereUniqueWithoutRoleInput | RolePlayerUpsertWithWhereUniqueWithoutRoleInput[]
    createMany?: RolePlayerCreateManyRoleInputEnvelope
    set?: RolePlayerWhereUniqueInput | RolePlayerWhereUniqueInput[]
    disconnect?: RolePlayerWhereUniqueInput | RolePlayerWhereUniqueInput[]
    delete?: RolePlayerWhereUniqueInput | RolePlayerWhereUniqueInput[]
    connect?: RolePlayerWhereUniqueInput | RolePlayerWhereUniqueInput[]
    update?: RolePlayerUpdateWithWhereUniqueWithoutRoleInput | RolePlayerUpdateWithWhereUniqueWithoutRoleInput[]
    updateMany?: RolePlayerUpdateManyWithWhereWithoutRoleInput | RolePlayerUpdateManyWithWhereWithoutRoleInput[]
    deleteMany?: RolePlayerScalarWhereInput | RolePlayerScalarWhereInput[]
  }

  export type PermissionCreateNestedOneWithoutRolesInput = {
    create?: XOR<PermissionCreateWithoutRolesInput, PermissionUncheckedCreateWithoutRolesInput>
    connectOrCreate?: PermissionCreateOrConnectWithoutRolesInput
    connect?: PermissionWhereUniqueInput
  }

  export type RoleCreateNestedOneWithoutPermissionsInput = {
    create?: XOR<RoleCreateWithoutPermissionsInput, RoleUncheckedCreateWithoutPermissionsInput>
    connectOrCreate?: RoleCreateOrConnectWithoutPermissionsInput
    connect?: RoleWhereUniqueInput
  }

  export type PermissionUpdateOneRequiredWithoutRolesNestedInput = {
    create?: XOR<PermissionCreateWithoutRolesInput, PermissionUncheckedCreateWithoutRolesInput>
    connectOrCreate?: PermissionCreateOrConnectWithoutRolesInput
    upsert?: PermissionUpsertWithoutRolesInput
    connect?: PermissionWhereUniqueInput
    update?: XOR<XOR<PermissionUpdateToOneWithWhereWithoutRolesInput, PermissionUpdateWithoutRolesInput>, PermissionUncheckedUpdateWithoutRolesInput>
  }

  export type RoleUpdateOneRequiredWithoutPermissionsNestedInput = {
    create?: XOR<RoleCreateWithoutPermissionsInput, RoleUncheckedCreateWithoutPermissionsInput>
    connectOrCreate?: RoleCreateOrConnectWithoutPermissionsInput
    upsert?: RoleUpsertWithoutPermissionsInput
    connect?: RoleWhereUniqueInput
    update?: XOR<XOR<RoleUpdateToOneWithWhereWithoutPermissionsInput, RoleUpdateWithoutPermissionsInput>, RoleUncheckedUpdateWithoutPermissionsInput>
  }

  export type UserCreateNestedOneWithoutRolesInput = {
    create?: XOR<UserCreateWithoutRolesInput, UserUncheckedCreateWithoutRolesInput>
    connectOrCreate?: UserCreateOrConnectWithoutRolesInput
    connect?: UserWhereUniqueInput
  }

  export type RoleCreateNestedOneWithoutPlayersInput = {
    create?: XOR<RoleCreateWithoutPlayersInput, RoleUncheckedCreateWithoutPlayersInput>
    connectOrCreate?: RoleCreateOrConnectWithoutPlayersInput
    connect?: RoleWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutRolesNestedInput = {
    create?: XOR<UserCreateWithoutRolesInput, UserUncheckedCreateWithoutRolesInput>
    connectOrCreate?: UserCreateOrConnectWithoutRolesInput
    upsert?: UserUpsertWithoutRolesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutRolesInput, UserUpdateWithoutRolesInput>, UserUncheckedUpdateWithoutRolesInput>
  }

  export type RoleUpdateOneRequiredWithoutPlayersNestedInput = {
    create?: XOR<RoleCreateWithoutPlayersInput, RoleUncheckedCreateWithoutPlayersInput>
    connectOrCreate?: RoleCreateOrConnectWithoutPlayersInput
    upsert?: RoleUpsertWithoutPlayersInput
    connect?: RoleWhereUniqueInput
    update?: XOR<XOR<RoleUpdateToOneWithWhereWithoutPlayersInput, RoleUpdateWithoutPlayersInput>, RoleUncheckedUpdateWithoutPlayersInput>
  }

  export type ActivityCreateNestedManyWithoutSessionInput = {
    create?: XOR<ActivityCreateWithoutSessionInput, ActivityUncheckedCreateWithoutSessionInput> | ActivityCreateWithoutSessionInput[] | ActivityUncheckedCreateWithoutSessionInput[]
    connectOrCreate?: ActivityCreateOrConnectWithoutSessionInput | ActivityCreateOrConnectWithoutSessionInput[]
    createMany?: ActivityCreateManySessionInputEnvelope
    connect?: ActivityWhereUniqueInput | ActivityWhereUniqueInput[]
  }

  export type UserCreateNestedOneWithoutSessionsInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    connect?: UserWhereUniqueInput
  }

  export type ActivityUncheckedCreateNestedManyWithoutSessionInput = {
    create?: XOR<ActivityCreateWithoutSessionInput, ActivityUncheckedCreateWithoutSessionInput> | ActivityCreateWithoutSessionInput[] | ActivityUncheckedCreateWithoutSessionInput[]
    connectOrCreate?: ActivityCreateOrConnectWithoutSessionInput | ActivityCreateOrConnectWithoutSessionInput[]
    createMany?: ActivityCreateManySessionInputEnvelope
    connect?: ActivityWhereUniqueInput | ActivityWhereUniqueInput[]
  }

  export type ActivityUpdateManyWithoutSessionNestedInput = {
    create?: XOR<ActivityCreateWithoutSessionInput, ActivityUncheckedCreateWithoutSessionInput> | ActivityCreateWithoutSessionInput[] | ActivityUncheckedCreateWithoutSessionInput[]
    connectOrCreate?: ActivityCreateOrConnectWithoutSessionInput | ActivityCreateOrConnectWithoutSessionInput[]
    upsert?: ActivityUpsertWithWhereUniqueWithoutSessionInput | ActivityUpsertWithWhereUniqueWithoutSessionInput[]
    createMany?: ActivityCreateManySessionInputEnvelope
    set?: ActivityWhereUniqueInput | ActivityWhereUniqueInput[]
    disconnect?: ActivityWhereUniqueInput | ActivityWhereUniqueInput[]
    delete?: ActivityWhereUniqueInput | ActivityWhereUniqueInput[]
    connect?: ActivityWhereUniqueInput | ActivityWhereUniqueInput[]
    update?: ActivityUpdateWithWhereUniqueWithoutSessionInput | ActivityUpdateWithWhereUniqueWithoutSessionInput[]
    updateMany?: ActivityUpdateManyWithWhereWithoutSessionInput | ActivityUpdateManyWithWhereWithoutSessionInput[]
    deleteMany?: ActivityScalarWhereInput | ActivityScalarWhereInput[]
  }

  export type UserUpdateOneRequiredWithoutSessionsNestedInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    upsert?: UserUpsertWithoutSessionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSessionsInput, UserUpdateWithoutSessionsInput>, UserUncheckedUpdateWithoutSessionsInput>
  }

  export type ActivityUncheckedUpdateManyWithoutSessionNestedInput = {
    create?: XOR<ActivityCreateWithoutSessionInput, ActivityUncheckedCreateWithoutSessionInput> | ActivityCreateWithoutSessionInput[] | ActivityUncheckedCreateWithoutSessionInput[]
    connectOrCreate?: ActivityCreateOrConnectWithoutSessionInput | ActivityCreateOrConnectWithoutSessionInput[]
    upsert?: ActivityUpsertWithWhereUniqueWithoutSessionInput | ActivityUpsertWithWhereUniqueWithoutSessionInput[]
    createMany?: ActivityCreateManySessionInputEnvelope
    set?: ActivityWhereUniqueInput | ActivityWhereUniqueInput[]
    disconnect?: ActivityWhereUniqueInput | ActivityWhereUniqueInput[]
    delete?: ActivityWhereUniqueInput | ActivityWhereUniqueInput[]
    connect?: ActivityWhereUniqueInput | ActivityWhereUniqueInput[]
    update?: ActivityUpdateWithWhereUniqueWithoutSessionInput | ActivityUpdateWithWhereUniqueWithoutSessionInput[]
    updateMany?: ActivityUpdateManyWithWhereWithoutSessionInput | ActivityUpdateManyWithWhereWithoutSessionInput[]
    deleteMany?: ActivityScalarWhereInput | ActivityScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutApiKeysInput = {
    create?: XOR<UserCreateWithoutApiKeysInput, UserUncheckedCreateWithoutApiKeysInput>
    connectOrCreate?: UserCreateOrConnectWithoutApiKeysInput
    connect?: UserWhereUniqueInput
  }

  export type EnumAPI_KEY_TYPEFieldUpdateOperationsInput = {
    set?: $Enums.API_KEY_TYPE
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type UserUpdateOneRequiredWithoutApiKeysNestedInput = {
    create?: XOR<UserCreateWithoutApiKeysInput, UserUncheckedCreateWithoutApiKeysInput>
    connectOrCreate?: UserCreateOrConnectWithoutApiKeysInput
    upsert?: UserUpsertWithoutApiKeysInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutApiKeysInput, UserUpdateWithoutApiKeysInput>, UserUncheckedUpdateWithoutApiKeysInput>
  }

  export type UserCreateNestedOneWithoutActivitiesInput = {
    create?: XOR<UserCreateWithoutActivitiesInput, UserUncheckedCreateWithoutActivitiesInput>
    connectOrCreate?: UserCreateOrConnectWithoutActivitiesInput
    connect?: UserWhereUniqueInput
  }

  export type SessionCreateNestedOneWithoutActivitiesInput = {
    create?: XOR<SessionCreateWithoutActivitiesInput, SessionUncheckedCreateWithoutActivitiesInput>
    connectOrCreate?: SessionCreateOrConnectWithoutActivitiesInput
    connect?: SessionWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutActivitiesNestedInput = {
    create?: XOR<UserCreateWithoutActivitiesInput, UserUncheckedCreateWithoutActivitiesInput>
    connectOrCreate?: UserCreateOrConnectWithoutActivitiesInput
    upsert?: UserUpsertWithoutActivitiesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutActivitiesInput, UserUpdateWithoutActivitiesInput>, UserUncheckedUpdateWithoutActivitiesInput>
  }

  export type SessionUpdateOneWithoutActivitiesNestedInput = {
    create?: XOR<SessionCreateWithoutActivitiesInput, SessionUncheckedCreateWithoutActivitiesInput>
    connectOrCreate?: SessionCreateOrConnectWithoutActivitiesInput
    upsert?: SessionUpsertWithoutActivitiesInput
    disconnect?: SessionWhereInput | boolean
    delete?: SessionWhereInput | boolean
    connect?: SessionWhereUniqueInput
    update?: XOR<XOR<SessionUpdateToOneWithWhereWithoutActivitiesInput, SessionUpdateWithoutActivitiesInput>, SessionUncheckedUpdateWithoutActivitiesInput>
  }

  export type EnumSETTING_DATA_TYPEFieldUpdateOperationsInput = {
    set?: $Enums.SETTING_DATA_TYPE
  }

  export type EnumProxyProtocolFieldUpdateOperationsInput = {
    set?: $Enums.ProxyProtocol
  }

  export type TelegramTemplateCreatephotosInput = {
    set: string[]
  }

  export type TelegramTemplateCreatevideosInput = {
    set: string[]
  }

  export type TelegramTemplateUpdatephotosInput = {
    set?: string[]
    push?: string | string[]
  }

  export type TelegramTemplateUpdatevideosInput = {
    set?: string[]
    push?: string | string[]
  }

  export type EnumTELEGRAM_CHAT_TYPEFieldUpdateOperationsInput = {
    set?: $Enums.TELEGRAM_CHAT_TYPE
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumAPI_KEY_TYPEFilter<$PrismaModel = never> = {
    equals?: $Enums.API_KEY_TYPE | EnumAPI_KEY_TYPEFieldRefInput<$PrismaModel>
    in?: $Enums.API_KEY_TYPE[] | ListEnumAPI_KEY_TYPEFieldRefInput<$PrismaModel>
    notIn?: $Enums.API_KEY_TYPE[] | ListEnumAPI_KEY_TYPEFieldRefInput<$PrismaModel>
    not?: NestedEnumAPI_KEY_TYPEFilter<$PrismaModel> | $Enums.API_KEY_TYPE
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedEnumAPI_KEY_TYPEWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.API_KEY_TYPE | EnumAPI_KEY_TYPEFieldRefInput<$PrismaModel>
    in?: $Enums.API_KEY_TYPE[] | ListEnumAPI_KEY_TYPEFieldRefInput<$PrismaModel>
    notIn?: $Enums.API_KEY_TYPE[] | ListEnumAPI_KEY_TYPEFieldRefInput<$PrismaModel>
    not?: NestedEnumAPI_KEY_TYPEWithAggregatesFilter<$PrismaModel> | $Enums.API_KEY_TYPE
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAPI_KEY_TYPEFilter<$PrismaModel>
    _max?: NestedEnumAPI_KEY_TYPEFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedEnumSETTING_DATA_TYPEFilter<$PrismaModel = never> = {
    equals?: $Enums.SETTING_DATA_TYPE | EnumSETTING_DATA_TYPEFieldRefInput<$PrismaModel>
    in?: $Enums.SETTING_DATA_TYPE[] | ListEnumSETTING_DATA_TYPEFieldRefInput<$PrismaModel>
    notIn?: $Enums.SETTING_DATA_TYPE[] | ListEnumSETTING_DATA_TYPEFieldRefInput<$PrismaModel>
    not?: NestedEnumSETTING_DATA_TYPEFilter<$PrismaModel> | $Enums.SETTING_DATA_TYPE
  }

  export type NestedEnumSETTING_DATA_TYPEWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SETTING_DATA_TYPE | EnumSETTING_DATA_TYPEFieldRefInput<$PrismaModel>
    in?: $Enums.SETTING_DATA_TYPE[] | ListEnumSETTING_DATA_TYPEFieldRefInput<$PrismaModel>
    notIn?: $Enums.SETTING_DATA_TYPE[] | ListEnumSETTING_DATA_TYPEFieldRefInput<$PrismaModel>
    not?: NestedEnumSETTING_DATA_TYPEWithAggregatesFilter<$PrismaModel> | $Enums.SETTING_DATA_TYPE
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSETTING_DATA_TYPEFilter<$PrismaModel>
    _max?: NestedEnumSETTING_DATA_TYPEFilter<$PrismaModel>
  }

  export type NestedEnumProxyProtocolFilter<$PrismaModel = never> = {
    equals?: $Enums.ProxyProtocol | EnumProxyProtocolFieldRefInput<$PrismaModel>
    in?: $Enums.ProxyProtocol[] | ListEnumProxyProtocolFieldRefInput<$PrismaModel>
    notIn?: $Enums.ProxyProtocol[] | ListEnumProxyProtocolFieldRefInput<$PrismaModel>
    not?: NestedEnumProxyProtocolFilter<$PrismaModel> | $Enums.ProxyProtocol
  }

  export type NestedEnumProxyProtocolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ProxyProtocol | EnumProxyProtocolFieldRefInput<$PrismaModel>
    in?: $Enums.ProxyProtocol[] | ListEnumProxyProtocolFieldRefInput<$PrismaModel>
    notIn?: $Enums.ProxyProtocol[] | ListEnumProxyProtocolFieldRefInput<$PrismaModel>
    not?: NestedEnumProxyProtocolWithAggregatesFilter<$PrismaModel> | $Enums.ProxyProtocol
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumProxyProtocolFilter<$PrismaModel>
    _max?: NestedEnumProxyProtocolFilter<$PrismaModel>
  }

  export type NestedEnumTELEGRAM_CHAT_TYPEFilter<$PrismaModel = never> = {
    equals?: $Enums.TELEGRAM_CHAT_TYPE | EnumTELEGRAM_CHAT_TYPEFieldRefInput<$PrismaModel>
    in?: $Enums.TELEGRAM_CHAT_TYPE[] | ListEnumTELEGRAM_CHAT_TYPEFieldRefInput<$PrismaModel>
    notIn?: $Enums.TELEGRAM_CHAT_TYPE[] | ListEnumTELEGRAM_CHAT_TYPEFieldRefInput<$PrismaModel>
    not?: NestedEnumTELEGRAM_CHAT_TYPEFilter<$PrismaModel> | $Enums.TELEGRAM_CHAT_TYPE
  }

  export type NestedEnumTELEGRAM_CHAT_TYPEWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TELEGRAM_CHAT_TYPE | EnumTELEGRAM_CHAT_TYPEFieldRefInput<$PrismaModel>
    in?: $Enums.TELEGRAM_CHAT_TYPE[] | ListEnumTELEGRAM_CHAT_TYPEFieldRefInput<$PrismaModel>
    notIn?: $Enums.TELEGRAM_CHAT_TYPE[] | ListEnumTELEGRAM_CHAT_TYPEFieldRefInput<$PrismaModel>
    not?: NestedEnumTELEGRAM_CHAT_TYPEWithAggregatesFilter<$PrismaModel> | $Enums.TELEGRAM_CHAT_TYPE
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTELEGRAM_CHAT_TYPEFilter<$PrismaModel>
    _max?: NestedEnumTELEGRAM_CHAT_TYPEFilter<$PrismaModel>
  }

  export type ActivityCreateWithoutCreatedByInput = {
    id: string
    type: string
    description?: string | null
    device: string
    ip: string
    reference?: NullableJsonNullValueInput | InputJsonValue
    modified?: Date | string
    created?: Date | string
    session?: SessionCreateNestedOneWithoutActivitiesInput
  }

  export type ActivityUncheckedCreateWithoutCreatedByInput = {
    id: string
    type: string
    description?: string | null
    device: string
    ip: string
    sessionId?: string | null
    reference?: NullableJsonNullValueInput | InputJsonValue
    modified?: Date | string
    created?: Date | string
  }

  export type ActivityCreateOrConnectWithoutCreatedByInput = {
    where: ActivityWhereUniqueInput
    create: XOR<ActivityCreateWithoutCreatedByInput, ActivityUncheckedCreateWithoutCreatedByInput>
  }

  export type ActivityCreateManyCreatedByInputEnvelope = {
    data: ActivityCreateManyCreatedByInput | ActivityCreateManyCreatedByInput[]
    skipDuplicates?: boolean
  }

  export type ApiKeyCreateWithoutUserInput = {
    id: string
    type?: $Enums.API_KEY_TYPE
    name: string
    key: string
    hash: string
    enabled?: boolean
    startDate?: Date | string
    endDate?: Date | string | null
    created?: Date | string
  }

  export type ApiKeyUncheckedCreateWithoutUserInput = {
    id: string
    type?: $Enums.API_KEY_TYPE
    name: string
    key: string
    hash: string
    enabled?: boolean
    startDate?: Date | string
    endDate?: Date | string | null
    created?: Date | string
  }

  export type ApiKeyCreateOrConnectWithoutUserInput = {
    where: ApiKeyWhereUniqueInput
    create: XOR<ApiKeyCreateWithoutUserInput, ApiKeyUncheckedCreateWithoutUserInput>
  }

  export type ApiKeyCreateManyUserInputEnvelope = {
    data: ApiKeyCreateManyUserInput | ApiKeyCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type RolePlayerCreateWithoutPlayerInput = {
    id: string
    modified?: Date | string
    created?: Date | string
    role: RoleCreateNestedOneWithoutPlayersInput
  }

  export type RolePlayerUncheckedCreateWithoutPlayerInput = {
    id: string
    roleId: string
    modified?: Date | string
    created?: Date | string
  }

  export type RolePlayerCreateOrConnectWithoutPlayerInput = {
    where: RolePlayerWhereUniqueInput
    create: XOR<RolePlayerCreateWithoutPlayerInput, RolePlayerUncheckedCreateWithoutPlayerInput>
  }

  export type RolePlayerCreateManyPlayerInputEnvelope = {
    data: RolePlayerCreateManyPlayerInput | RolePlayerCreateManyPlayerInput[]
    skipDuplicates?: boolean
  }

  export type SessionCreateWithoutCreatedByInput = {
    id: string
    device: string
    ip: string
    token: string
    expired: Date | string
    revoked?: boolean
    modified?: Date | string
    created?: Date | string
    activities?: ActivityCreateNestedManyWithoutSessionInput
  }

  export type SessionUncheckedCreateWithoutCreatedByInput = {
    id: string
    device: string
    ip: string
    token: string
    expired: Date | string
    revoked?: boolean
    modified?: Date | string
    created?: Date | string
    activities?: ActivityUncheckedCreateNestedManyWithoutSessionInput
  }

  export type SessionCreateOrConnectWithoutCreatedByInput = {
    where: SessionWhereUniqueInput
    create: XOR<SessionCreateWithoutCreatedByInput, SessionUncheckedCreateWithoutCreatedByInput>
  }

  export type SessionCreateManyCreatedByInputEnvelope = {
    data: SessionCreateManyCreatedByInput | SessionCreateManyCreatedByInput[]
    skipDuplicates?: boolean
  }

  export type ActivityUpsertWithWhereUniqueWithoutCreatedByInput = {
    where: ActivityWhereUniqueInput
    update: XOR<ActivityUpdateWithoutCreatedByInput, ActivityUncheckedUpdateWithoutCreatedByInput>
    create: XOR<ActivityCreateWithoutCreatedByInput, ActivityUncheckedCreateWithoutCreatedByInput>
  }

  export type ActivityUpdateWithWhereUniqueWithoutCreatedByInput = {
    where: ActivityWhereUniqueInput
    data: XOR<ActivityUpdateWithoutCreatedByInput, ActivityUncheckedUpdateWithoutCreatedByInput>
  }

  export type ActivityUpdateManyWithWhereWithoutCreatedByInput = {
    where: ActivityScalarWhereInput
    data: XOR<ActivityUpdateManyMutationInput, ActivityUncheckedUpdateManyWithoutCreatedByInput>
  }

  export type ActivityScalarWhereInput = {
    AND?: ActivityScalarWhereInput | ActivityScalarWhereInput[]
    OR?: ActivityScalarWhereInput[]
    NOT?: ActivityScalarWhereInput | ActivityScalarWhereInput[]
    id?: StringFilter<"Activity"> | string
    type?: StringFilter<"Activity"> | string
    description?: StringNullableFilter<"Activity"> | string | null
    device?: StringFilter<"Activity"> | string
    ip?: StringFilter<"Activity"> | string
    sessionId?: StringNullableFilter<"Activity"> | string | null
    reference?: JsonNullableFilter<"Activity">
    createdById?: StringFilter<"Activity"> | string
    modified?: DateTimeFilter<"Activity"> | Date | string
    created?: DateTimeFilter<"Activity"> | Date | string
  }

  export type ApiKeyUpsertWithWhereUniqueWithoutUserInput = {
    where: ApiKeyWhereUniqueInput
    update: XOR<ApiKeyUpdateWithoutUserInput, ApiKeyUncheckedUpdateWithoutUserInput>
    create: XOR<ApiKeyCreateWithoutUserInput, ApiKeyUncheckedCreateWithoutUserInput>
  }

  export type ApiKeyUpdateWithWhereUniqueWithoutUserInput = {
    where: ApiKeyWhereUniqueInput
    data: XOR<ApiKeyUpdateWithoutUserInput, ApiKeyUncheckedUpdateWithoutUserInput>
  }

  export type ApiKeyUpdateManyWithWhereWithoutUserInput = {
    where: ApiKeyScalarWhereInput
    data: XOR<ApiKeyUpdateManyMutationInput, ApiKeyUncheckedUpdateManyWithoutUserInput>
  }

  export type ApiKeyScalarWhereInput = {
    AND?: ApiKeyScalarWhereInput | ApiKeyScalarWhereInput[]
    OR?: ApiKeyScalarWhereInput[]
    NOT?: ApiKeyScalarWhereInput | ApiKeyScalarWhereInput[]
    id?: StringFilter<"ApiKey"> | string
    type?: EnumAPI_KEY_TYPEFilter<"ApiKey"> | $Enums.API_KEY_TYPE
    name?: StringFilter<"ApiKey"> | string
    key?: StringFilter<"ApiKey"> | string
    hash?: StringFilter<"ApiKey"> | string
    enabled?: BoolFilter<"ApiKey"> | boolean
    startDate?: DateTimeFilter<"ApiKey"> | Date | string
    endDate?: DateTimeNullableFilter<"ApiKey"> | Date | string | null
    created?: DateTimeFilter<"ApiKey"> | Date | string
    userId?: StringFilter<"ApiKey"> | string
  }

  export type RolePlayerUpsertWithWhereUniqueWithoutPlayerInput = {
    where: RolePlayerWhereUniqueInput
    update: XOR<RolePlayerUpdateWithoutPlayerInput, RolePlayerUncheckedUpdateWithoutPlayerInput>
    create: XOR<RolePlayerCreateWithoutPlayerInput, RolePlayerUncheckedCreateWithoutPlayerInput>
  }

  export type RolePlayerUpdateWithWhereUniqueWithoutPlayerInput = {
    where: RolePlayerWhereUniqueInput
    data: XOR<RolePlayerUpdateWithoutPlayerInput, RolePlayerUncheckedUpdateWithoutPlayerInput>
  }

  export type RolePlayerUpdateManyWithWhereWithoutPlayerInput = {
    where: RolePlayerScalarWhereInput
    data: XOR<RolePlayerUpdateManyMutationInput, RolePlayerUncheckedUpdateManyWithoutPlayerInput>
  }

  export type RolePlayerScalarWhereInput = {
    AND?: RolePlayerScalarWhereInput | RolePlayerScalarWhereInput[]
    OR?: RolePlayerScalarWhereInput[]
    NOT?: RolePlayerScalarWhereInput | RolePlayerScalarWhereInput[]
    id?: StringFilter<"RolePlayer"> | string
    playerId?: StringFilter<"RolePlayer"> | string
    roleId?: StringFilter<"RolePlayer"> | string
    modified?: DateTimeFilter<"RolePlayer"> | Date | string
    created?: DateTimeFilter<"RolePlayer"> | Date | string
  }

  export type SessionUpsertWithWhereUniqueWithoutCreatedByInput = {
    where: SessionWhereUniqueInput
    update: XOR<SessionUpdateWithoutCreatedByInput, SessionUncheckedUpdateWithoutCreatedByInput>
    create: XOR<SessionCreateWithoutCreatedByInput, SessionUncheckedCreateWithoutCreatedByInput>
  }

  export type SessionUpdateWithWhereUniqueWithoutCreatedByInput = {
    where: SessionWhereUniqueInput
    data: XOR<SessionUpdateWithoutCreatedByInput, SessionUncheckedUpdateWithoutCreatedByInput>
  }

  export type SessionUpdateManyWithWhereWithoutCreatedByInput = {
    where: SessionScalarWhereInput
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyWithoutCreatedByInput>
  }

  export type SessionScalarWhereInput = {
    AND?: SessionScalarWhereInput | SessionScalarWhereInput[]
    OR?: SessionScalarWhereInput[]
    NOT?: SessionScalarWhereInput | SessionScalarWhereInput[]
    id?: StringFilter<"Session"> | string
    device?: StringFilter<"Session"> | string
    ip?: StringFilter<"Session"> | string
    token?: StringFilter<"Session"> | string
    createdById?: StringFilter<"Session"> | string
    expired?: DateTimeFilter<"Session"> | Date | string
    revoked?: BoolFilter<"Session"> | boolean
    modified?: DateTimeFilter<"Session"> | Date | string
    created?: DateTimeFilter<"Session"> | Date | string
  }

  export type RolePermissionCreateWithoutPermissionInput = {
    id: string
    modified?: Date | string
    created?: Date | string
    role: RoleCreateNestedOneWithoutPermissionsInput
  }

  export type RolePermissionUncheckedCreateWithoutPermissionInput = {
    id: string
    roleId: string
    modified?: Date | string
    created?: Date | string
  }

  export type RolePermissionCreateOrConnectWithoutPermissionInput = {
    where: RolePermissionWhereUniqueInput
    create: XOR<RolePermissionCreateWithoutPermissionInput, RolePermissionUncheckedCreateWithoutPermissionInput>
  }

  export type RolePermissionCreateManyPermissionInputEnvelope = {
    data: RolePermissionCreateManyPermissionInput | RolePermissionCreateManyPermissionInput[]
    skipDuplicates?: boolean
  }

  export type RolePermissionUpsertWithWhereUniqueWithoutPermissionInput = {
    where: RolePermissionWhereUniqueInput
    update: XOR<RolePermissionUpdateWithoutPermissionInput, RolePermissionUncheckedUpdateWithoutPermissionInput>
    create: XOR<RolePermissionCreateWithoutPermissionInput, RolePermissionUncheckedCreateWithoutPermissionInput>
  }

  export type RolePermissionUpdateWithWhereUniqueWithoutPermissionInput = {
    where: RolePermissionWhereUniqueInput
    data: XOR<RolePermissionUpdateWithoutPermissionInput, RolePermissionUncheckedUpdateWithoutPermissionInput>
  }

  export type RolePermissionUpdateManyWithWhereWithoutPermissionInput = {
    where: RolePermissionScalarWhereInput
    data: XOR<RolePermissionUpdateManyMutationInput, RolePermissionUncheckedUpdateManyWithoutPermissionInput>
  }

  export type RolePermissionScalarWhereInput = {
    AND?: RolePermissionScalarWhereInput | RolePermissionScalarWhereInput[]
    OR?: RolePermissionScalarWhereInput[]
    NOT?: RolePermissionScalarWhereInput | RolePermissionScalarWhereInput[]
    id?: StringFilter<"RolePermission"> | string
    roleId?: StringFilter<"RolePermission"> | string
    permissionId?: StringFilter<"RolePermission"> | string
    modified?: DateTimeFilter<"RolePermission"> | Date | string
    created?: DateTimeFilter<"RolePermission"> | Date | string
  }

  export type RolePermissionCreateWithoutRoleInput = {
    id: string
    modified?: Date | string
    created?: Date | string
    permission: PermissionCreateNestedOneWithoutRolesInput
  }

  export type RolePermissionUncheckedCreateWithoutRoleInput = {
    id: string
    permissionId: string
    modified?: Date | string
    created?: Date | string
  }

  export type RolePermissionCreateOrConnectWithoutRoleInput = {
    where: RolePermissionWhereUniqueInput
    create: XOR<RolePermissionCreateWithoutRoleInput, RolePermissionUncheckedCreateWithoutRoleInput>
  }

  export type RolePermissionCreateManyRoleInputEnvelope = {
    data: RolePermissionCreateManyRoleInput | RolePermissionCreateManyRoleInput[]
    skipDuplicates?: boolean
  }

  export type RolePlayerCreateWithoutRoleInput = {
    id: string
    modified?: Date | string
    created?: Date | string
    player: UserCreateNestedOneWithoutRolesInput
  }

  export type RolePlayerUncheckedCreateWithoutRoleInput = {
    id: string
    playerId: string
    modified?: Date | string
    created?: Date | string
  }

  export type RolePlayerCreateOrConnectWithoutRoleInput = {
    where: RolePlayerWhereUniqueInput
    create: XOR<RolePlayerCreateWithoutRoleInput, RolePlayerUncheckedCreateWithoutRoleInput>
  }

  export type RolePlayerCreateManyRoleInputEnvelope = {
    data: RolePlayerCreateManyRoleInput | RolePlayerCreateManyRoleInput[]
    skipDuplicates?: boolean
  }

  export type RolePermissionUpsertWithWhereUniqueWithoutRoleInput = {
    where: RolePermissionWhereUniqueInput
    update: XOR<RolePermissionUpdateWithoutRoleInput, RolePermissionUncheckedUpdateWithoutRoleInput>
    create: XOR<RolePermissionCreateWithoutRoleInput, RolePermissionUncheckedCreateWithoutRoleInput>
  }

  export type RolePermissionUpdateWithWhereUniqueWithoutRoleInput = {
    where: RolePermissionWhereUniqueInput
    data: XOR<RolePermissionUpdateWithoutRoleInput, RolePermissionUncheckedUpdateWithoutRoleInput>
  }

  export type RolePermissionUpdateManyWithWhereWithoutRoleInput = {
    where: RolePermissionScalarWhereInput
    data: XOR<RolePermissionUpdateManyMutationInput, RolePermissionUncheckedUpdateManyWithoutRoleInput>
  }

  export type RolePlayerUpsertWithWhereUniqueWithoutRoleInput = {
    where: RolePlayerWhereUniqueInput
    update: XOR<RolePlayerUpdateWithoutRoleInput, RolePlayerUncheckedUpdateWithoutRoleInput>
    create: XOR<RolePlayerCreateWithoutRoleInput, RolePlayerUncheckedCreateWithoutRoleInput>
  }

  export type RolePlayerUpdateWithWhereUniqueWithoutRoleInput = {
    where: RolePlayerWhereUniqueInput
    data: XOR<RolePlayerUpdateWithoutRoleInput, RolePlayerUncheckedUpdateWithoutRoleInput>
  }

  export type RolePlayerUpdateManyWithWhereWithoutRoleInput = {
    where: RolePlayerScalarWhereInput
    data: XOR<RolePlayerUpdateManyMutationInput, RolePlayerUncheckedUpdateManyWithoutRoleInput>
  }

  export type PermissionCreateWithoutRolesInput = {
    id: string
    title: string
    description?: string | null
  }

  export type PermissionUncheckedCreateWithoutRolesInput = {
    id: string
    title: string
    description?: string | null
  }

  export type PermissionCreateOrConnectWithoutRolesInput = {
    where: PermissionWhereUniqueInput
    create: XOR<PermissionCreateWithoutRolesInput, PermissionUncheckedCreateWithoutRolesInput>
  }

  export type RoleCreateWithoutPermissionsInput = {
    id: string
    title: string
    description?: string | null
    enabled?: boolean
    modified?: Date | string
    created?: Date | string
    players?: RolePlayerCreateNestedManyWithoutRoleInput
  }

  export type RoleUncheckedCreateWithoutPermissionsInput = {
    id: string
    title: string
    description?: string | null
    enabled?: boolean
    modified?: Date | string
    created?: Date | string
    players?: RolePlayerUncheckedCreateNestedManyWithoutRoleInput
  }

  export type RoleCreateOrConnectWithoutPermissionsInput = {
    where: RoleWhereUniqueInput
    create: XOR<RoleCreateWithoutPermissionsInput, RoleUncheckedCreateWithoutPermissionsInput>
  }

  export type PermissionUpsertWithoutRolesInput = {
    update: XOR<PermissionUpdateWithoutRolesInput, PermissionUncheckedUpdateWithoutRolesInput>
    create: XOR<PermissionCreateWithoutRolesInput, PermissionUncheckedCreateWithoutRolesInput>
    where?: PermissionWhereInput
  }

  export type PermissionUpdateToOneWithWhereWithoutRolesInput = {
    where?: PermissionWhereInput
    data: XOR<PermissionUpdateWithoutRolesInput, PermissionUncheckedUpdateWithoutRolesInput>
  }

  export type PermissionUpdateWithoutRolesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PermissionUncheckedUpdateWithoutRolesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RoleUpsertWithoutPermissionsInput = {
    update: XOR<RoleUpdateWithoutPermissionsInput, RoleUncheckedUpdateWithoutPermissionsInput>
    create: XOR<RoleCreateWithoutPermissionsInput, RoleUncheckedCreateWithoutPermissionsInput>
    where?: RoleWhereInput
  }

  export type RoleUpdateToOneWithWhereWithoutPermissionsInput = {
    where?: RoleWhereInput
    data: XOR<RoleUpdateWithoutPermissionsInput, RoleUncheckedUpdateWithoutPermissionsInput>
  }

  export type RoleUpdateWithoutPermissionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    enabled?: BoolFieldUpdateOperationsInput | boolean
    modified?: DateTimeFieldUpdateOperationsInput | Date | string
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    players?: RolePlayerUpdateManyWithoutRoleNestedInput
  }

  export type RoleUncheckedUpdateWithoutPermissionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    enabled?: BoolFieldUpdateOperationsInput | boolean
    modified?: DateTimeFieldUpdateOperationsInput | Date | string
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    players?: RolePlayerUncheckedUpdateManyWithoutRoleNestedInput
  }

  export type UserCreateWithoutRolesInput = {
    id: string
    username: string
    password: string
    emailUser?: string
    inviteBy?: string
    passwordExpired?: Date | string
    passwordCreated?: Date | string
    passwordAttempt?: number
    is_owner?: boolean
    mfaTelegramEnabled?: boolean
    mfaTotpEnabled?: boolean
    telegramUsername?: string | null
    totpSecret?: string | null
    enabled?: boolean
    modified?: Date | string
    created?: Date | string
    activities?: ActivityCreateNestedManyWithoutCreatedByInput
    apiKeys?: ApiKeyCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutCreatedByInput
  }

  export type UserUncheckedCreateWithoutRolesInput = {
    id: string
    username: string
    password: string
    emailUser?: string
    inviteBy?: string
    passwordExpired?: Date | string
    passwordCreated?: Date | string
    passwordAttempt?: number
    is_owner?: boolean
    mfaTelegramEnabled?: boolean
    mfaTotpEnabled?: boolean
    telegramUsername?: string | null
    totpSecret?: string | null
    enabled?: boolean
    modified?: Date | string
    created?: Date | string
    activities?: ActivityUncheckedCreateNestedManyWithoutCreatedByInput
    apiKeys?: ApiKeyUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutCreatedByInput
  }

  export type UserCreateOrConnectWithoutRolesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutRolesInput, UserUncheckedCreateWithoutRolesInput>
  }

  export type RoleCreateWithoutPlayersInput = {
    id: string
    title: string
    description?: string | null
    enabled?: boolean
    modified?: Date | string
    created?: Date | string
    permissions?: RolePermissionCreateNestedManyWithoutRoleInput
  }

  export type RoleUncheckedCreateWithoutPlayersInput = {
    id: string
    title: string
    description?: string | null
    enabled?: boolean
    modified?: Date | string
    created?: Date | string
    permissions?: RolePermissionUncheckedCreateNestedManyWithoutRoleInput
  }

  export type RoleCreateOrConnectWithoutPlayersInput = {
    where: RoleWhereUniqueInput
    create: XOR<RoleCreateWithoutPlayersInput, RoleUncheckedCreateWithoutPlayersInput>
  }

  export type UserUpsertWithoutRolesInput = {
    update: XOR<UserUpdateWithoutRolesInput, UserUncheckedUpdateWithoutRolesInput>
    create: XOR<UserCreateWithoutRolesInput, UserUncheckedCreateWithoutRolesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutRolesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutRolesInput, UserUncheckedUpdateWithoutRolesInput>
  }

  export type UserUpdateWithoutRolesInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    emailUser?: StringFieldUpdateOperationsInput | string
    inviteBy?: StringFieldUpdateOperationsInput | string
    passwordExpired?: DateTimeFieldUpdateOperationsInput | Date | string
    passwordCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    passwordAttempt?: IntFieldUpdateOperationsInput | number
    is_owner?: BoolFieldUpdateOperationsInput | boolean
    mfaTelegramEnabled?: BoolFieldUpdateOperationsInput | boolean
    mfaTotpEnabled?: BoolFieldUpdateOperationsInput | boolean
    telegramUsername?: NullableStringFieldUpdateOperationsInput | string | null
    totpSecret?: NullableStringFieldUpdateOperationsInput | string | null
    enabled?: BoolFieldUpdateOperationsInput | boolean
    modified?: DateTimeFieldUpdateOperationsInput | Date | string
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    activities?: ActivityUpdateManyWithoutCreatedByNestedInput
    apiKeys?: ApiKeyUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutCreatedByNestedInput
  }

  export type UserUncheckedUpdateWithoutRolesInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    emailUser?: StringFieldUpdateOperationsInput | string
    inviteBy?: StringFieldUpdateOperationsInput | string
    passwordExpired?: DateTimeFieldUpdateOperationsInput | Date | string
    passwordCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    passwordAttempt?: IntFieldUpdateOperationsInput | number
    is_owner?: BoolFieldUpdateOperationsInput | boolean
    mfaTelegramEnabled?: BoolFieldUpdateOperationsInput | boolean
    mfaTotpEnabled?: BoolFieldUpdateOperationsInput | boolean
    telegramUsername?: NullableStringFieldUpdateOperationsInput | string | null
    totpSecret?: NullableStringFieldUpdateOperationsInput | string | null
    enabled?: BoolFieldUpdateOperationsInput | boolean
    modified?: DateTimeFieldUpdateOperationsInput | Date | string
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    activities?: ActivityUncheckedUpdateManyWithoutCreatedByNestedInput
    apiKeys?: ApiKeyUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutCreatedByNestedInput
  }

  export type RoleUpsertWithoutPlayersInput = {
    update: XOR<RoleUpdateWithoutPlayersInput, RoleUncheckedUpdateWithoutPlayersInput>
    create: XOR<RoleCreateWithoutPlayersInput, RoleUncheckedCreateWithoutPlayersInput>
    where?: RoleWhereInput
  }

  export type RoleUpdateToOneWithWhereWithoutPlayersInput = {
    where?: RoleWhereInput
    data: XOR<RoleUpdateWithoutPlayersInput, RoleUncheckedUpdateWithoutPlayersInput>
  }

  export type RoleUpdateWithoutPlayersInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    enabled?: BoolFieldUpdateOperationsInput | boolean
    modified?: DateTimeFieldUpdateOperationsInput | Date | string
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    permissions?: RolePermissionUpdateManyWithoutRoleNestedInput
  }

  export type RoleUncheckedUpdateWithoutPlayersInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    enabled?: BoolFieldUpdateOperationsInput | boolean
    modified?: DateTimeFieldUpdateOperationsInput | Date | string
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    permissions?: RolePermissionUncheckedUpdateManyWithoutRoleNestedInput
  }

  export type ActivityCreateWithoutSessionInput = {
    id: string
    type: string
    description?: string | null
    device: string
    ip: string
    reference?: NullableJsonNullValueInput | InputJsonValue
    modified?: Date | string
    created?: Date | string
    createdBy: UserCreateNestedOneWithoutActivitiesInput
  }

  export type ActivityUncheckedCreateWithoutSessionInput = {
    id: string
    type: string
    description?: string | null
    device: string
    ip: string
    reference?: NullableJsonNullValueInput | InputJsonValue
    createdById: string
    modified?: Date | string
    created?: Date | string
  }

  export type ActivityCreateOrConnectWithoutSessionInput = {
    where: ActivityWhereUniqueInput
    create: XOR<ActivityCreateWithoutSessionInput, ActivityUncheckedCreateWithoutSessionInput>
  }

  export type ActivityCreateManySessionInputEnvelope = {
    data: ActivityCreateManySessionInput | ActivityCreateManySessionInput[]
    skipDuplicates?: boolean
  }

  export type UserCreateWithoutSessionsInput = {
    id: string
    username: string
    password: string
    emailUser?: string
    inviteBy?: string
    passwordExpired?: Date | string
    passwordCreated?: Date | string
    passwordAttempt?: number
    is_owner?: boolean
    mfaTelegramEnabled?: boolean
    mfaTotpEnabled?: boolean
    telegramUsername?: string | null
    totpSecret?: string | null
    enabled?: boolean
    modified?: Date | string
    created?: Date | string
    activities?: ActivityCreateNestedManyWithoutCreatedByInput
    apiKeys?: ApiKeyCreateNestedManyWithoutUserInput
    roles?: RolePlayerCreateNestedManyWithoutPlayerInput
  }

  export type UserUncheckedCreateWithoutSessionsInput = {
    id: string
    username: string
    password: string
    emailUser?: string
    inviteBy?: string
    passwordExpired?: Date | string
    passwordCreated?: Date | string
    passwordAttempt?: number
    is_owner?: boolean
    mfaTelegramEnabled?: boolean
    mfaTotpEnabled?: boolean
    telegramUsername?: string | null
    totpSecret?: string | null
    enabled?: boolean
    modified?: Date | string
    created?: Date | string
    activities?: ActivityUncheckedCreateNestedManyWithoutCreatedByInput
    apiKeys?: ApiKeyUncheckedCreateNestedManyWithoutUserInput
    roles?: RolePlayerUncheckedCreateNestedManyWithoutPlayerInput
  }

  export type UserCreateOrConnectWithoutSessionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
  }

  export type ActivityUpsertWithWhereUniqueWithoutSessionInput = {
    where: ActivityWhereUniqueInput
    update: XOR<ActivityUpdateWithoutSessionInput, ActivityUncheckedUpdateWithoutSessionInput>
    create: XOR<ActivityCreateWithoutSessionInput, ActivityUncheckedCreateWithoutSessionInput>
  }

  export type ActivityUpdateWithWhereUniqueWithoutSessionInput = {
    where: ActivityWhereUniqueInput
    data: XOR<ActivityUpdateWithoutSessionInput, ActivityUncheckedUpdateWithoutSessionInput>
  }

  export type ActivityUpdateManyWithWhereWithoutSessionInput = {
    where: ActivityScalarWhereInput
    data: XOR<ActivityUpdateManyMutationInput, ActivityUncheckedUpdateManyWithoutSessionInput>
  }

  export type UserUpsertWithoutSessionsInput = {
    update: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSessionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
  }

  export type UserUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    emailUser?: StringFieldUpdateOperationsInput | string
    inviteBy?: StringFieldUpdateOperationsInput | string
    passwordExpired?: DateTimeFieldUpdateOperationsInput | Date | string
    passwordCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    passwordAttempt?: IntFieldUpdateOperationsInput | number
    is_owner?: BoolFieldUpdateOperationsInput | boolean
    mfaTelegramEnabled?: BoolFieldUpdateOperationsInput | boolean
    mfaTotpEnabled?: BoolFieldUpdateOperationsInput | boolean
    telegramUsername?: NullableStringFieldUpdateOperationsInput | string | null
    totpSecret?: NullableStringFieldUpdateOperationsInput | string | null
    enabled?: BoolFieldUpdateOperationsInput | boolean
    modified?: DateTimeFieldUpdateOperationsInput | Date | string
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    activities?: ActivityUpdateManyWithoutCreatedByNestedInput
    apiKeys?: ApiKeyUpdateManyWithoutUserNestedInput
    roles?: RolePlayerUpdateManyWithoutPlayerNestedInput
  }

  export type UserUncheckedUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    emailUser?: StringFieldUpdateOperationsInput | string
    inviteBy?: StringFieldUpdateOperationsInput | string
    passwordExpired?: DateTimeFieldUpdateOperationsInput | Date | string
    passwordCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    passwordAttempt?: IntFieldUpdateOperationsInput | number
    is_owner?: BoolFieldUpdateOperationsInput | boolean
    mfaTelegramEnabled?: BoolFieldUpdateOperationsInput | boolean
    mfaTotpEnabled?: BoolFieldUpdateOperationsInput | boolean
    telegramUsername?: NullableStringFieldUpdateOperationsInput | string | null
    totpSecret?: NullableStringFieldUpdateOperationsInput | string | null
    enabled?: BoolFieldUpdateOperationsInput | boolean
    modified?: DateTimeFieldUpdateOperationsInput | Date | string
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    activities?: ActivityUncheckedUpdateManyWithoutCreatedByNestedInput
    apiKeys?: ApiKeyUncheckedUpdateManyWithoutUserNestedInput
    roles?: RolePlayerUncheckedUpdateManyWithoutPlayerNestedInput
  }

  export type UserCreateWithoutApiKeysInput = {
    id: string
    username: string
    password: string
    emailUser?: string
    inviteBy?: string
    passwordExpired?: Date | string
    passwordCreated?: Date | string
    passwordAttempt?: number
    is_owner?: boolean
    mfaTelegramEnabled?: boolean
    mfaTotpEnabled?: boolean
    telegramUsername?: string | null
    totpSecret?: string | null
    enabled?: boolean
    modified?: Date | string
    created?: Date | string
    activities?: ActivityCreateNestedManyWithoutCreatedByInput
    roles?: RolePlayerCreateNestedManyWithoutPlayerInput
    sessions?: SessionCreateNestedManyWithoutCreatedByInput
  }

  export type UserUncheckedCreateWithoutApiKeysInput = {
    id: string
    username: string
    password: string
    emailUser?: string
    inviteBy?: string
    passwordExpired?: Date | string
    passwordCreated?: Date | string
    passwordAttempt?: number
    is_owner?: boolean
    mfaTelegramEnabled?: boolean
    mfaTotpEnabled?: boolean
    telegramUsername?: string | null
    totpSecret?: string | null
    enabled?: boolean
    modified?: Date | string
    created?: Date | string
    activities?: ActivityUncheckedCreateNestedManyWithoutCreatedByInput
    roles?: RolePlayerUncheckedCreateNestedManyWithoutPlayerInput
    sessions?: SessionUncheckedCreateNestedManyWithoutCreatedByInput
  }

  export type UserCreateOrConnectWithoutApiKeysInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutApiKeysInput, UserUncheckedCreateWithoutApiKeysInput>
  }

  export type UserUpsertWithoutApiKeysInput = {
    update: XOR<UserUpdateWithoutApiKeysInput, UserUncheckedUpdateWithoutApiKeysInput>
    create: XOR<UserCreateWithoutApiKeysInput, UserUncheckedCreateWithoutApiKeysInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutApiKeysInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutApiKeysInput, UserUncheckedUpdateWithoutApiKeysInput>
  }

  export type UserUpdateWithoutApiKeysInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    emailUser?: StringFieldUpdateOperationsInput | string
    inviteBy?: StringFieldUpdateOperationsInput | string
    passwordExpired?: DateTimeFieldUpdateOperationsInput | Date | string
    passwordCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    passwordAttempt?: IntFieldUpdateOperationsInput | number
    is_owner?: BoolFieldUpdateOperationsInput | boolean
    mfaTelegramEnabled?: BoolFieldUpdateOperationsInput | boolean
    mfaTotpEnabled?: BoolFieldUpdateOperationsInput | boolean
    telegramUsername?: NullableStringFieldUpdateOperationsInput | string | null
    totpSecret?: NullableStringFieldUpdateOperationsInput | string | null
    enabled?: BoolFieldUpdateOperationsInput | boolean
    modified?: DateTimeFieldUpdateOperationsInput | Date | string
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    activities?: ActivityUpdateManyWithoutCreatedByNestedInput
    roles?: RolePlayerUpdateManyWithoutPlayerNestedInput
    sessions?: SessionUpdateManyWithoutCreatedByNestedInput
  }

  export type UserUncheckedUpdateWithoutApiKeysInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    emailUser?: StringFieldUpdateOperationsInput | string
    inviteBy?: StringFieldUpdateOperationsInput | string
    passwordExpired?: DateTimeFieldUpdateOperationsInput | Date | string
    passwordCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    passwordAttempt?: IntFieldUpdateOperationsInput | number
    is_owner?: BoolFieldUpdateOperationsInput | boolean
    mfaTelegramEnabled?: BoolFieldUpdateOperationsInput | boolean
    mfaTotpEnabled?: BoolFieldUpdateOperationsInput | boolean
    telegramUsername?: NullableStringFieldUpdateOperationsInput | string | null
    totpSecret?: NullableStringFieldUpdateOperationsInput | string | null
    enabled?: BoolFieldUpdateOperationsInput | boolean
    modified?: DateTimeFieldUpdateOperationsInput | Date | string
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    activities?: ActivityUncheckedUpdateManyWithoutCreatedByNestedInput
    roles?: RolePlayerUncheckedUpdateManyWithoutPlayerNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutCreatedByNestedInput
  }

  export type UserCreateWithoutActivitiesInput = {
    id: string
    username: string
    password: string
    emailUser?: string
    inviteBy?: string
    passwordExpired?: Date | string
    passwordCreated?: Date | string
    passwordAttempt?: number
    is_owner?: boolean
    mfaTelegramEnabled?: boolean
    mfaTotpEnabled?: boolean
    telegramUsername?: string | null
    totpSecret?: string | null
    enabled?: boolean
    modified?: Date | string
    created?: Date | string
    apiKeys?: ApiKeyCreateNestedManyWithoutUserInput
    roles?: RolePlayerCreateNestedManyWithoutPlayerInput
    sessions?: SessionCreateNestedManyWithoutCreatedByInput
  }

  export type UserUncheckedCreateWithoutActivitiesInput = {
    id: string
    username: string
    password: string
    emailUser?: string
    inviteBy?: string
    passwordExpired?: Date | string
    passwordCreated?: Date | string
    passwordAttempt?: number
    is_owner?: boolean
    mfaTelegramEnabled?: boolean
    mfaTotpEnabled?: boolean
    telegramUsername?: string | null
    totpSecret?: string | null
    enabled?: boolean
    modified?: Date | string
    created?: Date | string
    apiKeys?: ApiKeyUncheckedCreateNestedManyWithoutUserInput
    roles?: RolePlayerUncheckedCreateNestedManyWithoutPlayerInput
    sessions?: SessionUncheckedCreateNestedManyWithoutCreatedByInput
  }

  export type UserCreateOrConnectWithoutActivitiesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutActivitiesInput, UserUncheckedCreateWithoutActivitiesInput>
  }

  export type SessionCreateWithoutActivitiesInput = {
    id: string
    device: string
    ip: string
    token: string
    expired: Date | string
    revoked?: boolean
    modified?: Date | string
    created?: Date | string
    createdBy: UserCreateNestedOneWithoutSessionsInput
  }

  export type SessionUncheckedCreateWithoutActivitiesInput = {
    id: string
    device: string
    ip: string
    token: string
    createdById: string
    expired: Date | string
    revoked?: boolean
    modified?: Date | string
    created?: Date | string
  }

  export type SessionCreateOrConnectWithoutActivitiesInput = {
    where: SessionWhereUniqueInput
    create: XOR<SessionCreateWithoutActivitiesInput, SessionUncheckedCreateWithoutActivitiesInput>
  }

  export type UserUpsertWithoutActivitiesInput = {
    update: XOR<UserUpdateWithoutActivitiesInput, UserUncheckedUpdateWithoutActivitiesInput>
    create: XOR<UserCreateWithoutActivitiesInput, UserUncheckedCreateWithoutActivitiesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutActivitiesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutActivitiesInput, UserUncheckedUpdateWithoutActivitiesInput>
  }

  export type UserUpdateWithoutActivitiesInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    emailUser?: StringFieldUpdateOperationsInput | string
    inviteBy?: StringFieldUpdateOperationsInput | string
    passwordExpired?: DateTimeFieldUpdateOperationsInput | Date | string
    passwordCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    passwordAttempt?: IntFieldUpdateOperationsInput | number
    is_owner?: BoolFieldUpdateOperationsInput | boolean
    mfaTelegramEnabled?: BoolFieldUpdateOperationsInput | boolean
    mfaTotpEnabled?: BoolFieldUpdateOperationsInput | boolean
    telegramUsername?: NullableStringFieldUpdateOperationsInput | string | null
    totpSecret?: NullableStringFieldUpdateOperationsInput | string | null
    enabled?: BoolFieldUpdateOperationsInput | boolean
    modified?: DateTimeFieldUpdateOperationsInput | Date | string
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    apiKeys?: ApiKeyUpdateManyWithoutUserNestedInput
    roles?: RolePlayerUpdateManyWithoutPlayerNestedInput
    sessions?: SessionUpdateManyWithoutCreatedByNestedInput
  }

  export type UserUncheckedUpdateWithoutActivitiesInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    emailUser?: StringFieldUpdateOperationsInput | string
    inviteBy?: StringFieldUpdateOperationsInput | string
    passwordExpired?: DateTimeFieldUpdateOperationsInput | Date | string
    passwordCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    passwordAttempt?: IntFieldUpdateOperationsInput | number
    is_owner?: BoolFieldUpdateOperationsInput | boolean
    mfaTelegramEnabled?: BoolFieldUpdateOperationsInput | boolean
    mfaTotpEnabled?: BoolFieldUpdateOperationsInput | boolean
    telegramUsername?: NullableStringFieldUpdateOperationsInput | string | null
    totpSecret?: NullableStringFieldUpdateOperationsInput | string | null
    enabled?: BoolFieldUpdateOperationsInput | boolean
    modified?: DateTimeFieldUpdateOperationsInput | Date | string
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    apiKeys?: ApiKeyUncheckedUpdateManyWithoutUserNestedInput
    roles?: RolePlayerUncheckedUpdateManyWithoutPlayerNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutCreatedByNestedInput
  }

  export type SessionUpsertWithoutActivitiesInput = {
    update: XOR<SessionUpdateWithoutActivitiesInput, SessionUncheckedUpdateWithoutActivitiesInput>
    create: XOR<SessionCreateWithoutActivitiesInput, SessionUncheckedCreateWithoutActivitiesInput>
    where?: SessionWhereInput
  }

  export type SessionUpdateToOneWithWhereWithoutActivitiesInput = {
    where?: SessionWhereInput
    data: XOR<SessionUpdateWithoutActivitiesInput, SessionUncheckedUpdateWithoutActivitiesInput>
  }

  export type SessionUpdateWithoutActivitiesInput = {
    id?: StringFieldUpdateOperationsInput | string
    device?: StringFieldUpdateOperationsInput | string
    ip?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expired?: DateTimeFieldUpdateOperationsInput | Date | string
    revoked?: BoolFieldUpdateOperationsInput | boolean
    modified?: DateTimeFieldUpdateOperationsInput | Date | string
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: UserUpdateOneRequiredWithoutSessionsNestedInput
  }

  export type SessionUncheckedUpdateWithoutActivitiesInput = {
    id?: StringFieldUpdateOperationsInput | string
    device?: StringFieldUpdateOperationsInput | string
    ip?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    createdById?: StringFieldUpdateOperationsInput | string
    expired?: DateTimeFieldUpdateOperationsInput | Date | string
    revoked?: BoolFieldUpdateOperationsInput | boolean
    modified?: DateTimeFieldUpdateOperationsInput | Date | string
    created?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ActivityCreateManyCreatedByInput = {
    id: string
    type: string
    description?: string | null
    device: string
    ip: string
    sessionId?: string | null
    reference?: NullableJsonNullValueInput | InputJsonValue
    modified?: Date | string
    created?: Date | string
  }

  export type ApiKeyCreateManyUserInput = {
    id: string
    type?: $Enums.API_KEY_TYPE
    name: string
    key: string
    hash: string
    enabled?: boolean
    startDate?: Date | string
    endDate?: Date | string | null
    created?: Date | string
  }

  export type RolePlayerCreateManyPlayerInput = {
    id: string
    roleId: string
    modified?: Date | string
    created?: Date | string
  }

  export type SessionCreateManyCreatedByInput = {
    id: string
    device: string
    ip: string
    token: string
    expired: Date | string
    revoked?: boolean
    modified?: Date | string
    created?: Date | string
  }

  export type ActivityUpdateWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    device?: StringFieldUpdateOperationsInput | string
    ip?: StringFieldUpdateOperationsInput | string
    reference?: NullableJsonNullValueInput | InputJsonValue
    modified?: DateTimeFieldUpdateOperationsInput | Date | string
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    session?: SessionUpdateOneWithoutActivitiesNestedInput
  }

  export type ActivityUncheckedUpdateWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    device?: StringFieldUpdateOperationsInput | string
    ip?: StringFieldUpdateOperationsInput | string
    sessionId?: NullableStringFieldUpdateOperationsInput | string | null
    reference?: NullableJsonNullValueInput | InputJsonValue
    modified?: DateTimeFieldUpdateOperationsInput | Date | string
    created?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ActivityUncheckedUpdateManyWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    device?: StringFieldUpdateOperationsInput | string
    ip?: StringFieldUpdateOperationsInput | string
    sessionId?: NullableStringFieldUpdateOperationsInput | string | null
    reference?: NullableJsonNullValueInput | InputJsonValue
    modified?: DateTimeFieldUpdateOperationsInput | Date | string
    created?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApiKeyUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumAPI_KEY_TYPEFieldUpdateOperationsInput | $Enums.API_KEY_TYPE
    name?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    hash?: StringFieldUpdateOperationsInput | string
    enabled?: BoolFieldUpdateOperationsInput | boolean
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApiKeyUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumAPI_KEY_TYPEFieldUpdateOperationsInput | $Enums.API_KEY_TYPE
    name?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    hash?: StringFieldUpdateOperationsInput | string
    enabled?: BoolFieldUpdateOperationsInput | boolean
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApiKeyUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumAPI_KEY_TYPEFieldUpdateOperationsInput | $Enums.API_KEY_TYPE
    name?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    hash?: StringFieldUpdateOperationsInput | string
    enabled?: BoolFieldUpdateOperationsInput | boolean
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RolePlayerUpdateWithoutPlayerInput = {
    id?: StringFieldUpdateOperationsInput | string
    modified?: DateTimeFieldUpdateOperationsInput | Date | string
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: RoleUpdateOneRequiredWithoutPlayersNestedInput
  }

  export type RolePlayerUncheckedUpdateWithoutPlayerInput = {
    id?: StringFieldUpdateOperationsInput | string
    roleId?: StringFieldUpdateOperationsInput | string
    modified?: DateTimeFieldUpdateOperationsInput | Date | string
    created?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RolePlayerUncheckedUpdateManyWithoutPlayerInput = {
    id?: StringFieldUpdateOperationsInput | string
    roleId?: StringFieldUpdateOperationsInput | string
    modified?: DateTimeFieldUpdateOperationsInput | Date | string
    created?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUpdateWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    device?: StringFieldUpdateOperationsInput | string
    ip?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expired?: DateTimeFieldUpdateOperationsInput | Date | string
    revoked?: BoolFieldUpdateOperationsInput | boolean
    modified?: DateTimeFieldUpdateOperationsInput | Date | string
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    activities?: ActivityUpdateManyWithoutSessionNestedInput
  }

  export type SessionUncheckedUpdateWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    device?: StringFieldUpdateOperationsInput | string
    ip?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expired?: DateTimeFieldUpdateOperationsInput | Date | string
    revoked?: BoolFieldUpdateOperationsInput | boolean
    modified?: DateTimeFieldUpdateOperationsInput | Date | string
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    activities?: ActivityUncheckedUpdateManyWithoutSessionNestedInput
  }

  export type SessionUncheckedUpdateManyWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    device?: StringFieldUpdateOperationsInput | string
    ip?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expired?: DateTimeFieldUpdateOperationsInput | Date | string
    revoked?: BoolFieldUpdateOperationsInput | boolean
    modified?: DateTimeFieldUpdateOperationsInput | Date | string
    created?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RolePermissionCreateManyPermissionInput = {
    id: string
    roleId: string
    modified?: Date | string
    created?: Date | string
  }

  export type RolePermissionUpdateWithoutPermissionInput = {
    id?: StringFieldUpdateOperationsInput | string
    modified?: DateTimeFieldUpdateOperationsInput | Date | string
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: RoleUpdateOneRequiredWithoutPermissionsNestedInput
  }

  export type RolePermissionUncheckedUpdateWithoutPermissionInput = {
    id?: StringFieldUpdateOperationsInput | string
    roleId?: StringFieldUpdateOperationsInput | string
    modified?: DateTimeFieldUpdateOperationsInput | Date | string
    created?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RolePermissionUncheckedUpdateManyWithoutPermissionInput = {
    id?: StringFieldUpdateOperationsInput | string
    roleId?: StringFieldUpdateOperationsInput | string
    modified?: DateTimeFieldUpdateOperationsInput | Date | string
    created?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RolePermissionCreateManyRoleInput = {
    id: string
    permissionId: string
    modified?: Date | string
    created?: Date | string
  }

  export type RolePlayerCreateManyRoleInput = {
    id: string
    playerId: string
    modified?: Date | string
    created?: Date | string
  }

  export type RolePermissionUpdateWithoutRoleInput = {
    id?: StringFieldUpdateOperationsInput | string
    modified?: DateTimeFieldUpdateOperationsInput | Date | string
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    permission?: PermissionUpdateOneRequiredWithoutRolesNestedInput
  }

  export type RolePermissionUncheckedUpdateWithoutRoleInput = {
    id?: StringFieldUpdateOperationsInput | string
    permissionId?: StringFieldUpdateOperationsInput | string
    modified?: DateTimeFieldUpdateOperationsInput | Date | string
    created?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RolePermissionUncheckedUpdateManyWithoutRoleInput = {
    id?: StringFieldUpdateOperationsInput | string
    permissionId?: StringFieldUpdateOperationsInput | string
    modified?: DateTimeFieldUpdateOperationsInput | Date | string
    created?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RolePlayerUpdateWithoutRoleInput = {
    id?: StringFieldUpdateOperationsInput | string
    modified?: DateTimeFieldUpdateOperationsInput | Date | string
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    player?: UserUpdateOneRequiredWithoutRolesNestedInput
  }

  export type RolePlayerUncheckedUpdateWithoutRoleInput = {
    id?: StringFieldUpdateOperationsInput | string
    playerId?: StringFieldUpdateOperationsInput | string
    modified?: DateTimeFieldUpdateOperationsInput | Date | string
    created?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RolePlayerUncheckedUpdateManyWithoutRoleInput = {
    id?: StringFieldUpdateOperationsInput | string
    playerId?: StringFieldUpdateOperationsInput | string
    modified?: DateTimeFieldUpdateOperationsInput | Date | string
    created?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ActivityCreateManySessionInput = {
    id: string
    type: string
    description?: string | null
    device: string
    ip: string
    reference?: NullableJsonNullValueInput | InputJsonValue
    createdById: string
    modified?: Date | string
    created?: Date | string
  }

  export type ActivityUpdateWithoutSessionInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    device?: StringFieldUpdateOperationsInput | string
    ip?: StringFieldUpdateOperationsInput | string
    reference?: NullableJsonNullValueInput | InputJsonValue
    modified?: DateTimeFieldUpdateOperationsInput | Date | string
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: UserUpdateOneRequiredWithoutActivitiesNestedInput
  }

  export type ActivityUncheckedUpdateWithoutSessionInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    device?: StringFieldUpdateOperationsInput | string
    ip?: StringFieldUpdateOperationsInput | string
    reference?: NullableJsonNullValueInput | InputJsonValue
    createdById?: StringFieldUpdateOperationsInput | string
    modified?: DateTimeFieldUpdateOperationsInput | Date | string
    created?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ActivityUncheckedUpdateManyWithoutSessionInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    device?: StringFieldUpdateOperationsInput | string
    ip?: StringFieldUpdateOperationsInput | string
    reference?: NullableJsonNullValueInput | InputJsonValue
    createdById?: StringFieldUpdateOperationsInput | string
    modified?: DateTimeFieldUpdateOperationsInput | Date | string
    created?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}