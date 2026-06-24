
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Users
 * 
 */
export type Users = $Result.DefaultSelection<Prisma.$UsersPayload>
/**
 * Model Rooms
 * 
 */
export type Rooms = $Result.DefaultSelection<Prisma.$RoomsPayload>
/**
 * Model RoomParticipant
 * 
 */
export type RoomParticipant = $Result.DefaultSelection<Prisma.$RoomParticipantPayload>
/**
 * Model Messages
 * 
 */
export type Messages = $Result.DefaultSelection<Prisma.$MessagesPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Users
 * const users = await prisma.users.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
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
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Users
   * const users = await prisma.users.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
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
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.users`: Exposes CRUD operations for the **Users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.users.findMany()
    * ```
    */
  get users(): Prisma.UsersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.rooms`: Exposes CRUD operations for the **Rooms** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Rooms
    * const rooms = await prisma.rooms.findMany()
    * ```
    */
  get rooms(): Prisma.RoomsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.roomParticipant`: Exposes CRUD operations for the **RoomParticipant** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RoomParticipants
    * const roomParticipants = await prisma.roomParticipant.findMany()
    * ```
    */
  get roomParticipant(): Prisma.RoomParticipantDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.messages`: Exposes CRUD operations for the **Messages** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Messages
    * const messages = await prisma.messages.findMany()
    * ```
    */
  get messages(): Prisma.MessagesDelegate<ExtArgs, ClientOptions>;
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
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.8.0
   * Query Engine version: 3c6e192761c0362d496ed980de936e2f3cebcd3a
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
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
    Users: 'Users',
    Rooms: 'Rooms',
    RoomParticipant: 'RoomParticipant',
    Messages: 'Messages'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "users" | "rooms" | "roomParticipant" | "messages"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Users: {
        payload: Prisma.$UsersPayload<ExtArgs>
        fields: Prisma.UsersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UsersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UsersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          findFirst: {
            args: Prisma.UsersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UsersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          findMany: {
            args: Prisma.UsersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>[]
          }
          create: {
            args: Prisma.UsersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          createMany: {
            args: Prisma.UsersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UsersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>[]
          }
          delete: {
            args: Prisma.UsersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          update: {
            args: Prisma.UsersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          deleteMany: {
            args: Prisma.UsersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UsersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UsersUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>[]
          }
          upsert: {
            args: Prisma.UsersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          aggregate: {
            args: Prisma.UsersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsers>
          }
          groupBy: {
            args: Prisma.UsersGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsersGroupByOutputType>[]
          }
          count: {
            args: Prisma.UsersCountArgs<ExtArgs>
            result: $Utils.Optional<UsersCountAggregateOutputType> | number
          }
        }
      }
      Rooms: {
        payload: Prisma.$RoomsPayload<ExtArgs>
        fields: Prisma.RoomsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RoomsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RoomsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomsPayload>
          }
          findFirst: {
            args: Prisma.RoomsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RoomsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomsPayload>
          }
          findMany: {
            args: Prisma.RoomsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomsPayload>[]
          }
          create: {
            args: Prisma.RoomsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomsPayload>
          }
          createMany: {
            args: Prisma.RoomsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RoomsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomsPayload>[]
          }
          delete: {
            args: Prisma.RoomsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomsPayload>
          }
          update: {
            args: Prisma.RoomsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomsPayload>
          }
          deleteMany: {
            args: Prisma.RoomsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RoomsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RoomsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomsPayload>[]
          }
          upsert: {
            args: Prisma.RoomsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomsPayload>
          }
          aggregate: {
            args: Prisma.RoomsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRooms>
          }
          groupBy: {
            args: Prisma.RoomsGroupByArgs<ExtArgs>
            result: $Utils.Optional<RoomsGroupByOutputType>[]
          }
          count: {
            args: Prisma.RoomsCountArgs<ExtArgs>
            result: $Utils.Optional<RoomsCountAggregateOutputType> | number
          }
        }
      }
      RoomParticipant: {
        payload: Prisma.$RoomParticipantPayload<ExtArgs>
        fields: Prisma.RoomParticipantFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RoomParticipantFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomParticipantPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RoomParticipantFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomParticipantPayload>
          }
          findFirst: {
            args: Prisma.RoomParticipantFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomParticipantPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RoomParticipantFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomParticipantPayload>
          }
          findMany: {
            args: Prisma.RoomParticipantFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomParticipantPayload>[]
          }
          create: {
            args: Prisma.RoomParticipantCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomParticipantPayload>
          }
          createMany: {
            args: Prisma.RoomParticipantCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RoomParticipantCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomParticipantPayload>[]
          }
          delete: {
            args: Prisma.RoomParticipantDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomParticipantPayload>
          }
          update: {
            args: Prisma.RoomParticipantUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomParticipantPayload>
          }
          deleteMany: {
            args: Prisma.RoomParticipantDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RoomParticipantUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RoomParticipantUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomParticipantPayload>[]
          }
          upsert: {
            args: Prisma.RoomParticipantUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomParticipantPayload>
          }
          aggregate: {
            args: Prisma.RoomParticipantAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRoomParticipant>
          }
          groupBy: {
            args: Prisma.RoomParticipantGroupByArgs<ExtArgs>
            result: $Utils.Optional<RoomParticipantGroupByOutputType>[]
          }
          count: {
            args: Prisma.RoomParticipantCountArgs<ExtArgs>
            result: $Utils.Optional<RoomParticipantCountAggregateOutputType> | number
          }
        }
      }
      Messages: {
        payload: Prisma.$MessagesPayload<ExtArgs>
        fields: Prisma.MessagesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MessagesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MessagesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagesPayload>
          }
          findFirst: {
            args: Prisma.MessagesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MessagesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagesPayload>
          }
          findMany: {
            args: Prisma.MessagesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagesPayload>[]
          }
          create: {
            args: Prisma.MessagesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagesPayload>
          }
          createMany: {
            args: Prisma.MessagesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MessagesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagesPayload>[]
          }
          delete: {
            args: Prisma.MessagesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagesPayload>
          }
          update: {
            args: Prisma.MessagesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagesPayload>
          }
          deleteMany: {
            args: Prisma.MessagesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MessagesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MessagesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagesPayload>[]
          }
          upsert: {
            args: Prisma.MessagesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagesPayload>
          }
          aggregate: {
            args: Prisma.MessagesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMessages>
          }
          groupBy: {
            args: Prisma.MessagesGroupByArgs<ExtArgs>
            result: $Utils.Optional<MessagesGroupByOutputType>[]
          }
          count: {
            args: Prisma.MessagesCountArgs<ExtArgs>
            result: $Utils.Optional<MessagesCountAggregateOutputType> | number
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
     * Read more in our [docs](https://pris.ly/d/logging).
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
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
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
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    users?: UsersOmit
    rooms?: RoomsOmit
    roomParticipant?: RoomParticipantOmit
    messages?: MessagesOmit
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
   * Count Type UsersCountOutputType
   */

  export type UsersCountOutputType = {
    messages: number
    user: number
  }

  export type UsersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    messages?: boolean | UsersCountOutputTypeCountMessagesArgs
    user?: boolean | UsersCountOutputTypeCountUserArgs
  }

  // Custom InputTypes
  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersCountOutputType
     */
    select?: UsersCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MessagesWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountUserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoomParticipantWhereInput
  }


  /**
   * Count Type RoomsCountOutputType
   */

  export type RoomsCountOutputType = {
    messages: number
    participants: number
  }

  export type RoomsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    messages?: boolean | RoomsCountOutputTypeCountMessagesArgs
    participants?: boolean | RoomsCountOutputTypeCountParticipantsArgs
  }

  // Custom InputTypes
  /**
   * RoomsCountOutputType without action
   */
  export type RoomsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomsCountOutputType
     */
    select?: RoomsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RoomsCountOutputType without action
   */
  export type RoomsCountOutputTypeCountMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MessagesWhereInput
  }

  /**
   * RoomsCountOutputType without action
   */
  export type RoomsCountOutputTypeCountParticipantsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoomParticipantWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Users
   */

  export type AggregateUsers = {
    _count: UsersCountAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  export type UsersMinAggregateOutputType = {
    id: string | null
    first_name: string | null
    last_name: string | null
    phone: string | null
    email: string | null
    password_hash: string | null
    created_at: Date | null
  }

  export type UsersMaxAggregateOutputType = {
    id: string | null
    first_name: string | null
    last_name: string | null
    phone: string | null
    email: string | null
    password_hash: string | null
    created_at: Date | null
  }

  export type UsersCountAggregateOutputType = {
    id: number
    first_name: number
    last_name: number
    phone: number
    email: number
    password_hash: number
    created_at: number
    _all: number
  }


  export type UsersMinAggregateInputType = {
    id?: true
    first_name?: true
    last_name?: true
    phone?: true
    email?: true
    password_hash?: true
    created_at?: true
  }

  export type UsersMaxAggregateInputType = {
    id?: true
    first_name?: true
    last_name?: true
    phone?: true
    email?: true
    password_hash?: true
    created_at?: true
  }

  export type UsersCountAggregateInputType = {
    id?: true
    first_name?: true
    last_name?: true
    phone?: true
    email?: true
    password_hash?: true
    created_at?: true
    _all?: true
  }

  export type UsersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to aggregate.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UsersWhereUniqueInput
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
    _count?: true | UsersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsersMaxAggregateInputType
  }

  export type GetUsersAggregateType<T extends UsersAggregateArgs> = {
        [P in keyof T & keyof AggregateUsers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsers[P]>
      : GetScalarType<T[P], AggregateUsers[P]>
  }




  export type UsersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsersWhereInput
    orderBy?: UsersOrderByWithAggregationInput | UsersOrderByWithAggregationInput[]
    by: UsersScalarFieldEnum[] | UsersScalarFieldEnum
    having?: UsersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsersCountAggregateInputType | true
    _min?: UsersMinAggregateInputType
    _max?: UsersMaxAggregateInputType
  }

  export type UsersGroupByOutputType = {
    id: string
    first_name: string
    last_name: string
    phone: string
    email: string
    password_hash: string
    created_at: Date
    _count: UsersCountAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  type GetUsersGroupByPayload<T extends UsersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsersGroupByOutputType[P]>
            : GetScalarType<T[P], UsersGroupByOutputType[P]>
        }
      >
    >


  export type UsersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    first_name?: boolean
    last_name?: boolean
    phone?: boolean
    email?: boolean
    password_hash?: boolean
    created_at?: boolean
    messages?: boolean | Users$messagesArgs<ExtArgs>
    user?: boolean | Users$userArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["users"]>

  export type UsersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    first_name?: boolean
    last_name?: boolean
    phone?: boolean
    email?: boolean
    password_hash?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["users"]>

  export type UsersSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    first_name?: boolean
    last_name?: boolean
    phone?: boolean
    email?: boolean
    password_hash?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["users"]>

  export type UsersSelectScalar = {
    id?: boolean
    first_name?: boolean
    last_name?: boolean
    phone?: boolean
    email?: boolean
    password_hash?: boolean
    created_at?: boolean
  }

  export type UsersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "first_name" | "last_name" | "phone" | "email" | "password_hash" | "created_at", ExtArgs["result"]["users"]>
  export type UsersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    messages?: boolean | Users$messagesArgs<ExtArgs>
    user?: boolean | Users$userArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UsersIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UsersIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UsersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Users"
    objects: {
      messages: Prisma.$MessagesPayload<ExtArgs>[]
      user: Prisma.$RoomParticipantPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      first_name: string
      last_name: string
      phone: string
      email: string
      password_hash: string
      created_at: Date
    }, ExtArgs["result"]["users"]>
    composites: {}
  }

  type UsersGetPayload<S extends boolean | null | undefined | UsersDefaultArgs> = $Result.GetResult<Prisma.$UsersPayload, S>

  type UsersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UsersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsersCountAggregateInputType | true
    }

  export interface UsersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Users'], meta: { name: 'Users' } }
    /**
     * Find zero or one Users that matches the filter.
     * @param {UsersFindUniqueArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UsersFindUniqueArgs>(args: SelectSubset<T, UsersFindUniqueArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Users that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UsersFindUniqueOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UsersFindUniqueOrThrowArgs>(args: SelectSubset<T, UsersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindFirstArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UsersFindFirstArgs>(args?: SelectSubset<T, UsersFindFirstArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindFirstOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UsersFindFirstOrThrowArgs>(args?: SelectSubset<T, UsersFindFirstOrThrowArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.users.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.users.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usersWithIdOnly = await prisma.users.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UsersFindManyArgs>(args?: SelectSubset<T, UsersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Users.
     * @param {UsersCreateArgs} args - Arguments to create a Users.
     * @example
     * // Create one Users
     * const Users = await prisma.users.create({
     *   data: {
     *     // ... data to create a Users
     *   }
     * })
     * 
     */
    create<T extends UsersCreateArgs>(args: SelectSubset<T, UsersCreateArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UsersCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UsersCreateManyArgs>(args?: SelectSubset<T, UsersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UsersCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const usersWithIdOnly = await prisma.users.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UsersCreateManyAndReturnArgs>(args?: SelectSubset<T, UsersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Users.
     * @param {UsersDeleteArgs} args - Arguments to delete one Users.
     * @example
     * // Delete one Users
     * const Users = await prisma.users.delete({
     *   where: {
     *     // ... filter to delete one Users
     *   }
     * })
     * 
     */
    delete<T extends UsersDeleteArgs>(args: SelectSubset<T, UsersDeleteArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Users.
     * @param {UsersUpdateArgs} args - Arguments to update one Users.
     * @example
     * // Update one Users
     * const users = await prisma.users.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UsersUpdateArgs>(args: SelectSubset<T, UsersUpdateArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UsersDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UsersDeleteManyArgs>(args?: SelectSubset<T, UsersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UsersUpdateManyArgs>(args: SelectSubset<T, UsersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UsersUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const usersWithIdOnly = await prisma.users.updateManyAndReturn({
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
    updateManyAndReturn<T extends UsersUpdateManyAndReturnArgs>(args: SelectSubset<T, UsersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Users.
     * @param {UsersUpsertArgs} args - Arguments to update or create a Users.
     * @example
     * // Update or create a Users
     * const users = await prisma.users.upsert({
     *   create: {
     *     // ... data to create a Users
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Users we want to update
     *   }
     * })
     */
    upsert<T extends UsersUpsertArgs>(args: SelectSubset<T, UsersUpsertArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.users.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UsersCountArgs>(
      args?: Subset<T, UsersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UsersAggregateArgs>(args: Subset<T, UsersAggregateArgs>): Prisma.PrismaPromise<GetUsersAggregateType<T>>

    /**
     * Group by Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersGroupByArgs} args - Group by arguments.
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
      T extends UsersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UsersGroupByArgs['orderBy'] }
        : { orderBy?: UsersGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UsersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Users model
   */
  readonly fields: UsersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UsersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    messages<T extends Users$messagesArgs<ExtArgs> = {}>(args?: Subset<T, Users$messagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    user<T extends Users$userArgs<ExtArgs> = {}>(args?: Subset<T, Users$userArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoomParticipantPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Users model
   */
  interface UsersFieldRefs {
    readonly id: FieldRef<"Users", 'String'>
    readonly first_name: FieldRef<"Users", 'String'>
    readonly last_name: FieldRef<"Users", 'String'>
    readonly phone: FieldRef<"Users", 'String'>
    readonly email: FieldRef<"Users", 'String'>
    readonly password_hash: FieldRef<"Users", 'String'>
    readonly created_at: FieldRef<"Users", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Users findUnique
   */
  export type UsersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users findUniqueOrThrow
   */
  export type UsersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users findFirst
   */
  export type UsersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UsersWhereUniqueInput
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
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * Users findFirstOrThrow
   */
  export type UsersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UsersWhereUniqueInput
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
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * Users findMany
   */
  export type UsersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UsersWhereUniqueInput
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
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * Users create
   */
  export type UsersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * The data needed to create a Users.
     */
    data: XOR<UsersCreateInput, UsersUncheckedCreateInput>
  }

  /**
   * Users createMany
   */
  export type UsersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UsersCreateManyInput | UsersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Users createManyAndReturn
   */
  export type UsersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UsersCreateManyInput | UsersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Users update
   */
  export type UsersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * The data needed to update a Users.
     */
    data: XOR<UsersUpdateInput, UsersUncheckedUpdateInput>
    /**
     * Choose, which Users to update.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users updateMany
   */
  export type UsersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UsersUpdateManyMutationInput, UsersUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UsersWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * Users updateManyAndReturn
   */
  export type UsersUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UsersUpdateManyMutationInput, UsersUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UsersWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * Users upsert
   */
  export type UsersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * The filter to search for the Users to update in case it exists.
     */
    where: UsersWhereUniqueInput
    /**
     * In case the Users found by the `where` argument doesn't exist, create a new Users with this data.
     */
    create: XOR<UsersCreateInput, UsersUncheckedCreateInput>
    /**
     * In case the Users was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UsersUpdateInput, UsersUncheckedUpdateInput>
  }

  /**
   * Users delete
   */
  export type UsersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter which Users to delete.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users deleteMany
   */
  export type UsersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UsersWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * Users.messages
   */
  export type Users$messagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Messages
     */
    select?: MessagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Messages
     */
    omit?: MessagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessagesInclude<ExtArgs> | null
    where?: MessagesWhereInput
    orderBy?: MessagesOrderByWithRelationInput | MessagesOrderByWithRelationInput[]
    cursor?: MessagesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MessagesScalarFieldEnum | MessagesScalarFieldEnum[]
  }

  /**
   * Users.user
   */
  export type Users$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomParticipant
     */
    select?: RoomParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomParticipant
     */
    omit?: RoomParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomParticipantInclude<ExtArgs> | null
    where?: RoomParticipantWhereInput
    orderBy?: RoomParticipantOrderByWithRelationInput | RoomParticipantOrderByWithRelationInput[]
    cursor?: RoomParticipantWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RoomParticipantScalarFieldEnum | RoomParticipantScalarFieldEnum[]
  }

  /**
   * Users without action
   */
  export type UsersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
  }


  /**
   * Model Rooms
   */

  export type AggregateRooms = {
    _count: RoomsCountAggregateOutputType | null
    _min: RoomsMinAggregateOutputType | null
    _max: RoomsMaxAggregateOutputType | null
  }

  export type RoomsMinAggregateOutputType = {
    id: string | null
    name: string | null
    created_at: Date | null
  }

  export type RoomsMaxAggregateOutputType = {
    id: string | null
    name: string | null
    created_at: Date | null
  }

  export type RoomsCountAggregateOutputType = {
    id: number
    name: number
    created_at: number
    _all: number
  }


  export type RoomsMinAggregateInputType = {
    id?: true
    name?: true
    created_at?: true
  }

  export type RoomsMaxAggregateInputType = {
    id?: true
    name?: true
    created_at?: true
  }

  export type RoomsCountAggregateInputType = {
    id?: true
    name?: true
    created_at?: true
    _all?: true
  }

  export type RoomsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Rooms to aggregate.
     */
    where?: RoomsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rooms to fetch.
     */
    orderBy?: RoomsOrderByWithRelationInput | RoomsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RoomsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rooms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Rooms
    **/
    _count?: true | RoomsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RoomsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RoomsMaxAggregateInputType
  }

  export type GetRoomsAggregateType<T extends RoomsAggregateArgs> = {
        [P in keyof T & keyof AggregateRooms]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRooms[P]>
      : GetScalarType<T[P], AggregateRooms[P]>
  }




  export type RoomsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoomsWhereInput
    orderBy?: RoomsOrderByWithAggregationInput | RoomsOrderByWithAggregationInput[]
    by: RoomsScalarFieldEnum[] | RoomsScalarFieldEnum
    having?: RoomsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RoomsCountAggregateInputType | true
    _min?: RoomsMinAggregateInputType
    _max?: RoomsMaxAggregateInputType
  }

  export type RoomsGroupByOutputType = {
    id: string
    name: string
    created_at: Date
    _count: RoomsCountAggregateOutputType | null
    _min: RoomsMinAggregateOutputType | null
    _max: RoomsMaxAggregateOutputType | null
  }

  type GetRoomsGroupByPayload<T extends RoomsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RoomsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RoomsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RoomsGroupByOutputType[P]>
            : GetScalarType<T[P], RoomsGroupByOutputType[P]>
        }
      >
    >


  export type RoomsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    created_at?: boolean
    messages?: boolean | Rooms$messagesArgs<ExtArgs>
    participants?: boolean | Rooms$participantsArgs<ExtArgs>
    _count?: boolean | RoomsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rooms"]>

  export type RoomsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["rooms"]>

  export type RoomsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["rooms"]>

  export type RoomsSelectScalar = {
    id?: boolean
    name?: boolean
    created_at?: boolean
  }

  export type RoomsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "created_at", ExtArgs["result"]["rooms"]>
  export type RoomsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    messages?: boolean | Rooms$messagesArgs<ExtArgs>
    participants?: boolean | Rooms$participantsArgs<ExtArgs>
    _count?: boolean | RoomsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type RoomsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type RoomsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $RoomsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Rooms"
    objects: {
      messages: Prisma.$MessagesPayload<ExtArgs>[]
      participants: Prisma.$RoomParticipantPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      created_at: Date
    }, ExtArgs["result"]["rooms"]>
    composites: {}
  }

  type RoomsGetPayload<S extends boolean | null | undefined | RoomsDefaultArgs> = $Result.GetResult<Prisma.$RoomsPayload, S>

  type RoomsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RoomsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RoomsCountAggregateInputType | true
    }

  export interface RoomsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Rooms'], meta: { name: 'Rooms' } }
    /**
     * Find zero or one Rooms that matches the filter.
     * @param {RoomsFindUniqueArgs} args - Arguments to find a Rooms
     * @example
     * // Get one Rooms
     * const rooms = await prisma.rooms.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RoomsFindUniqueArgs>(args: SelectSubset<T, RoomsFindUniqueArgs<ExtArgs>>): Prisma__RoomsClient<$Result.GetResult<Prisma.$RoomsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Rooms that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RoomsFindUniqueOrThrowArgs} args - Arguments to find a Rooms
     * @example
     * // Get one Rooms
     * const rooms = await prisma.rooms.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RoomsFindUniqueOrThrowArgs>(args: SelectSubset<T, RoomsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RoomsClient<$Result.GetResult<Prisma.$RoomsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Rooms that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomsFindFirstArgs} args - Arguments to find a Rooms
     * @example
     * // Get one Rooms
     * const rooms = await prisma.rooms.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RoomsFindFirstArgs>(args?: SelectSubset<T, RoomsFindFirstArgs<ExtArgs>>): Prisma__RoomsClient<$Result.GetResult<Prisma.$RoomsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Rooms that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomsFindFirstOrThrowArgs} args - Arguments to find a Rooms
     * @example
     * // Get one Rooms
     * const rooms = await prisma.rooms.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RoomsFindFirstOrThrowArgs>(args?: SelectSubset<T, RoomsFindFirstOrThrowArgs<ExtArgs>>): Prisma__RoomsClient<$Result.GetResult<Prisma.$RoomsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Rooms that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Rooms
     * const rooms = await prisma.rooms.findMany()
     * 
     * // Get first 10 Rooms
     * const rooms = await prisma.rooms.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const roomsWithIdOnly = await prisma.rooms.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RoomsFindManyArgs>(args?: SelectSubset<T, RoomsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoomsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Rooms.
     * @param {RoomsCreateArgs} args - Arguments to create a Rooms.
     * @example
     * // Create one Rooms
     * const Rooms = await prisma.rooms.create({
     *   data: {
     *     // ... data to create a Rooms
     *   }
     * })
     * 
     */
    create<T extends RoomsCreateArgs>(args: SelectSubset<T, RoomsCreateArgs<ExtArgs>>): Prisma__RoomsClient<$Result.GetResult<Prisma.$RoomsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Rooms.
     * @param {RoomsCreateManyArgs} args - Arguments to create many Rooms.
     * @example
     * // Create many Rooms
     * const rooms = await prisma.rooms.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RoomsCreateManyArgs>(args?: SelectSubset<T, RoomsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Rooms and returns the data saved in the database.
     * @param {RoomsCreateManyAndReturnArgs} args - Arguments to create many Rooms.
     * @example
     * // Create many Rooms
     * const rooms = await prisma.rooms.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Rooms and only return the `id`
     * const roomsWithIdOnly = await prisma.rooms.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RoomsCreateManyAndReturnArgs>(args?: SelectSubset<T, RoomsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoomsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Rooms.
     * @param {RoomsDeleteArgs} args - Arguments to delete one Rooms.
     * @example
     * // Delete one Rooms
     * const Rooms = await prisma.rooms.delete({
     *   where: {
     *     // ... filter to delete one Rooms
     *   }
     * })
     * 
     */
    delete<T extends RoomsDeleteArgs>(args: SelectSubset<T, RoomsDeleteArgs<ExtArgs>>): Prisma__RoomsClient<$Result.GetResult<Prisma.$RoomsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Rooms.
     * @param {RoomsUpdateArgs} args - Arguments to update one Rooms.
     * @example
     * // Update one Rooms
     * const rooms = await prisma.rooms.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RoomsUpdateArgs>(args: SelectSubset<T, RoomsUpdateArgs<ExtArgs>>): Prisma__RoomsClient<$Result.GetResult<Prisma.$RoomsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Rooms.
     * @param {RoomsDeleteManyArgs} args - Arguments to filter Rooms to delete.
     * @example
     * // Delete a few Rooms
     * const { count } = await prisma.rooms.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RoomsDeleteManyArgs>(args?: SelectSubset<T, RoomsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Rooms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Rooms
     * const rooms = await prisma.rooms.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RoomsUpdateManyArgs>(args: SelectSubset<T, RoomsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Rooms and returns the data updated in the database.
     * @param {RoomsUpdateManyAndReturnArgs} args - Arguments to update many Rooms.
     * @example
     * // Update many Rooms
     * const rooms = await prisma.rooms.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Rooms and only return the `id`
     * const roomsWithIdOnly = await prisma.rooms.updateManyAndReturn({
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
    updateManyAndReturn<T extends RoomsUpdateManyAndReturnArgs>(args: SelectSubset<T, RoomsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoomsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Rooms.
     * @param {RoomsUpsertArgs} args - Arguments to update or create a Rooms.
     * @example
     * // Update or create a Rooms
     * const rooms = await prisma.rooms.upsert({
     *   create: {
     *     // ... data to create a Rooms
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Rooms we want to update
     *   }
     * })
     */
    upsert<T extends RoomsUpsertArgs>(args: SelectSubset<T, RoomsUpsertArgs<ExtArgs>>): Prisma__RoomsClient<$Result.GetResult<Prisma.$RoomsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Rooms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomsCountArgs} args - Arguments to filter Rooms to count.
     * @example
     * // Count the number of Rooms
     * const count = await prisma.rooms.count({
     *   where: {
     *     // ... the filter for the Rooms we want to count
     *   }
     * })
    **/
    count<T extends RoomsCountArgs>(
      args?: Subset<T, RoomsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RoomsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Rooms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RoomsAggregateArgs>(args: Subset<T, RoomsAggregateArgs>): Prisma.PrismaPromise<GetRoomsAggregateType<T>>

    /**
     * Group by Rooms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomsGroupByArgs} args - Group by arguments.
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
      T extends RoomsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RoomsGroupByArgs['orderBy'] }
        : { orderBy?: RoomsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RoomsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRoomsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Rooms model
   */
  readonly fields: RoomsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Rooms.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RoomsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    messages<T extends Rooms$messagesArgs<ExtArgs> = {}>(args?: Subset<T, Rooms$messagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    participants<T extends Rooms$participantsArgs<ExtArgs> = {}>(args?: Subset<T, Rooms$participantsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoomParticipantPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Rooms model
   */
  interface RoomsFieldRefs {
    readonly id: FieldRef<"Rooms", 'String'>
    readonly name: FieldRef<"Rooms", 'String'>
    readonly created_at: FieldRef<"Rooms", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Rooms findUnique
   */
  export type RoomsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rooms
     */
    select?: RoomsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rooms
     */
    omit?: RoomsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomsInclude<ExtArgs> | null
    /**
     * Filter, which Rooms to fetch.
     */
    where: RoomsWhereUniqueInput
  }

  /**
   * Rooms findUniqueOrThrow
   */
  export type RoomsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rooms
     */
    select?: RoomsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rooms
     */
    omit?: RoomsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomsInclude<ExtArgs> | null
    /**
     * Filter, which Rooms to fetch.
     */
    where: RoomsWhereUniqueInput
  }

  /**
   * Rooms findFirst
   */
  export type RoomsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rooms
     */
    select?: RoomsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rooms
     */
    omit?: RoomsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomsInclude<ExtArgs> | null
    /**
     * Filter, which Rooms to fetch.
     */
    where?: RoomsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rooms to fetch.
     */
    orderBy?: RoomsOrderByWithRelationInput | RoomsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Rooms.
     */
    cursor?: RoomsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rooms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Rooms.
     */
    distinct?: RoomsScalarFieldEnum | RoomsScalarFieldEnum[]
  }

  /**
   * Rooms findFirstOrThrow
   */
  export type RoomsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rooms
     */
    select?: RoomsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rooms
     */
    omit?: RoomsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomsInclude<ExtArgs> | null
    /**
     * Filter, which Rooms to fetch.
     */
    where?: RoomsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rooms to fetch.
     */
    orderBy?: RoomsOrderByWithRelationInput | RoomsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Rooms.
     */
    cursor?: RoomsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rooms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Rooms.
     */
    distinct?: RoomsScalarFieldEnum | RoomsScalarFieldEnum[]
  }

  /**
   * Rooms findMany
   */
  export type RoomsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rooms
     */
    select?: RoomsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rooms
     */
    omit?: RoomsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomsInclude<ExtArgs> | null
    /**
     * Filter, which Rooms to fetch.
     */
    where?: RoomsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rooms to fetch.
     */
    orderBy?: RoomsOrderByWithRelationInput | RoomsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Rooms.
     */
    cursor?: RoomsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rooms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Rooms.
     */
    distinct?: RoomsScalarFieldEnum | RoomsScalarFieldEnum[]
  }

  /**
   * Rooms create
   */
  export type RoomsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rooms
     */
    select?: RoomsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rooms
     */
    omit?: RoomsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomsInclude<ExtArgs> | null
    /**
     * The data needed to create a Rooms.
     */
    data: XOR<RoomsCreateInput, RoomsUncheckedCreateInput>
  }

  /**
   * Rooms createMany
   */
  export type RoomsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Rooms.
     */
    data: RoomsCreateManyInput | RoomsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Rooms createManyAndReturn
   */
  export type RoomsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rooms
     */
    select?: RoomsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Rooms
     */
    omit?: RoomsOmit<ExtArgs> | null
    /**
     * The data used to create many Rooms.
     */
    data: RoomsCreateManyInput | RoomsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Rooms update
   */
  export type RoomsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rooms
     */
    select?: RoomsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rooms
     */
    omit?: RoomsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomsInclude<ExtArgs> | null
    /**
     * The data needed to update a Rooms.
     */
    data: XOR<RoomsUpdateInput, RoomsUncheckedUpdateInput>
    /**
     * Choose, which Rooms to update.
     */
    where: RoomsWhereUniqueInput
  }

  /**
   * Rooms updateMany
   */
  export type RoomsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Rooms.
     */
    data: XOR<RoomsUpdateManyMutationInput, RoomsUncheckedUpdateManyInput>
    /**
     * Filter which Rooms to update
     */
    where?: RoomsWhereInput
    /**
     * Limit how many Rooms to update.
     */
    limit?: number
  }

  /**
   * Rooms updateManyAndReturn
   */
  export type RoomsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rooms
     */
    select?: RoomsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Rooms
     */
    omit?: RoomsOmit<ExtArgs> | null
    /**
     * The data used to update Rooms.
     */
    data: XOR<RoomsUpdateManyMutationInput, RoomsUncheckedUpdateManyInput>
    /**
     * Filter which Rooms to update
     */
    where?: RoomsWhereInput
    /**
     * Limit how many Rooms to update.
     */
    limit?: number
  }

  /**
   * Rooms upsert
   */
  export type RoomsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rooms
     */
    select?: RoomsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rooms
     */
    omit?: RoomsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomsInclude<ExtArgs> | null
    /**
     * The filter to search for the Rooms to update in case it exists.
     */
    where: RoomsWhereUniqueInput
    /**
     * In case the Rooms found by the `where` argument doesn't exist, create a new Rooms with this data.
     */
    create: XOR<RoomsCreateInput, RoomsUncheckedCreateInput>
    /**
     * In case the Rooms was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RoomsUpdateInput, RoomsUncheckedUpdateInput>
  }

  /**
   * Rooms delete
   */
  export type RoomsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rooms
     */
    select?: RoomsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rooms
     */
    omit?: RoomsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomsInclude<ExtArgs> | null
    /**
     * Filter which Rooms to delete.
     */
    where: RoomsWhereUniqueInput
  }

  /**
   * Rooms deleteMany
   */
  export type RoomsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Rooms to delete
     */
    where?: RoomsWhereInput
    /**
     * Limit how many Rooms to delete.
     */
    limit?: number
  }

  /**
   * Rooms.messages
   */
  export type Rooms$messagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Messages
     */
    select?: MessagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Messages
     */
    omit?: MessagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessagesInclude<ExtArgs> | null
    where?: MessagesWhereInput
    orderBy?: MessagesOrderByWithRelationInput | MessagesOrderByWithRelationInput[]
    cursor?: MessagesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MessagesScalarFieldEnum | MessagesScalarFieldEnum[]
  }

  /**
   * Rooms.participants
   */
  export type Rooms$participantsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomParticipant
     */
    select?: RoomParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomParticipant
     */
    omit?: RoomParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomParticipantInclude<ExtArgs> | null
    where?: RoomParticipantWhereInput
    orderBy?: RoomParticipantOrderByWithRelationInput | RoomParticipantOrderByWithRelationInput[]
    cursor?: RoomParticipantWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RoomParticipantScalarFieldEnum | RoomParticipantScalarFieldEnum[]
  }

  /**
   * Rooms without action
   */
  export type RoomsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rooms
     */
    select?: RoomsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rooms
     */
    omit?: RoomsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomsInclude<ExtArgs> | null
  }


  /**
   * Model RoomParticipant
   */

  export type AggregateRoomParticipant = {
    _count: RoomParticipantCountAggregateOutputType | null
    _min: RoomParticipantMinAggregateOutputType | null
    _max: RoomParticipantMaxAggregateOutputType | null
  }

  export type RoomParticipantMinAggregateOutputType = {
    id: string | null
    room_id: string | null
    user_id: string | null
  }

  export type RoomParticipantMaxAggregateOutputType = {
    id: string | null
    room_id: string | null
    user_id: string | null
  }

  export type RoomParticipantCountAggregateOutputType = {
    id: number
    room_id: number
    user_id: number
    _all: number
  }


  export type RoomParticipantMinAggregateInputType = {
    id?: true
    room_id?: true
    user_id?: true
  }

  export type RoomParticipantMaxAggregateInputType = {
    id?: true
    room_id?: true
    user_id?: true
  }

  export type RoomParticipantCountAggregateInputType = {
    id?: true
    room_id?: true
    user_id?: true
    _all?: true
  }

  export type RoomParticipantAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RoomParticipant to aggregate.
     */
    where?: RoomParticipantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RoomParticipants to fetch.
     */
    orderBy?: RoomParticipantOrderByWithRelationInput | RoomParticipantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RoomParticipantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RoomParticipants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RoomParticipants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RoomParticipants
    **/
    _count?: true | RoomParticipantCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RoomParticipantMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RoomParticipantMaxAggregateInputType
  }

  export type GetRoomParticipantAggregateType<T extends RoomParticipantAggregateArgs> = {
        [P in keyof T & keyof AggregateRoomParticipant]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRoomParticipant[P]>
      : GetScalarType<T[P], AggregateRoomParticipant[P]>
  }




  export type RoomParticipantGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoomParticipantWhereInput
    orderBy?: RoomParticipantOrderByWithAggregationInput | RoomParticipantOrderByWithAggregationInput[]
    by: RoomParticipantScalarFieldEnum[] | RoomParticipantScalarFieldEnum
    having?: RoomParticipantScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RoomParticipantCountAggregateInputType | true
    _min?: RoomParticipantMinAggregateInputType
    _max?: RoomParticipantMaxAggregateInputType
  }

  export type RoomParticipantGroupByOutputType = {
    id: string
    room_id: string
    user_id: string
    _count: RoomParticipantCountAggregateOutputType | null
    _min: RoomParticipantMinAggregateOutputType | null
    _max: RoomParticipantMaxAggregateOutputType | null
  }

  type GetRoomParticipantGroupByPayload<T extends RoomParticipantGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RoomParticipantGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RoomParticipantGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RoomParticipantGroupByOutputType[P]>
            : GetScalarType<T[P], RoomParticipantGroupByOutputType[P]>
        }
      >
    >


  export type RoomParticipantSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    room_id?: boolean
    user_id?: boolean
    room?: boolean | RoomsDefaultArgs<ExtArgs>
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["roomParticipant"]>

  export type RoomParticipantSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    room_id?: boolean
    user_id?: boolean
    room?: boolean | RoomsDefaultArgs<ExtArgs>
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["roomParticipant"]>

  export type RoomParticipantSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    room_id?: boolean
    user_id?: boolean
    room?: boolean | RoomsDefaultArgs<ExtArgs>
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["roomParticipant"]>

  export type RoomParticipantSelectScalar = {
    id?: boolean
    room_id?: boolean
    user_id?: boolean
  }

  export type RoomParticipantOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "room_id" | "user_id", ExtArgs["result"]["roomParticipant"]>
  export type RoomParticipantInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    room?: boolean | RoomsDefaultArgs<ExtArgs>
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }
  export type RoomParticipantIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    room?: boolean | RoomsDefaultArgs<ExtArgs>
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }
  export type RoomParticipantIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    room?: boolean | RoomsDefaultArgs<ExtArgs>
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }

  export type $RoomParticipantPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RoomParticipant"
    objects: {
      room: Prisma.$RoomsPayload<ExtArgs>
      user: Prisma.$UsersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      room_id: string
      user_id: string
    }, ExtArgs["result"]["roomParticipant"]>
    composites: {}
  }

  type RoomParticipantGetPayload<S extends boolean | null | undefined | RoomParticipantDefaultArgs> = $Result.GetResult<Prisma.$RoomParticipantPayload, S>

  type RoomParticipantCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RoomParticipantFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RoomParticipantCountAggregateInputType | true
    }

  export interface RoomParticipantDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RoomParticipant'], meta: { name: 'RoomParticipant' } }
    /**
     * Find zero or one RoomParticipant that matches the filter.
     * @param {RoomParticipantFindUniqueArgs} args - Arguments to find a RoomParticipant
     * @example
     * // Get one RoomParticipant
     * const roomParticipant = await prisma.roomParticipant.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RoomParticipantFindUniqueArgs>(args: SelectSubset<T, RoomParticipantFindUniqueArgs<ExtArgs>>): Prisma__RoomParticipantClient<$Result.GetResult<Prisma.$RoomParticipantPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one RoomParticipant that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RoomParticipantFindUniqueOrThrowArgs} args - Arguments to find a RoomParticipant
     * @example
     * // Get one RoomParticipant
     * const roomParticipant = await prisma.roomParticipant.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RoomParticipantFindUniqueOrThrowArgs>(args: SelectSubset<T, RoomParticipantFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RoomParticipantClient<$Result.GetResult<Prisma.$RoomParticipantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RoomParticipant that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomParticipantFindFirstArgs} args - Arguments to find a RoomParticipant
     * @example
     * // Get one RoomParticipant
     * const roomParticipant = await prisma.roomParticipant.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RoomParticipantFindFirstArgs>(args?: SelectSubset<T, RoomParticipantFindFirstArgs<ExtArgs>>): Prisma__RoomParticipantClient<$Result.GetResult<Prisma.$RoomParticipantPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RoomParticipant that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomParticipantFindFirstOrThrowArgs} args - Arguments to find a RoomParticipant
     * @example
     * // Get one RoomParticipant
     * const roomParticipant = await prisma.roomParticipant.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RoomParticipantFindFirstOrThrowArgs>(args?: SelectSubset<T, RoomParticipantFindFirstOrThrowArgs<ExtArgs>>): Prisma__RoomParticipantClient<$Result.GetResult<Prisma.$RoomParticipantPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more RoomParticipants that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomParticipantFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RoomParticipants
     * const roomParticipants = await prisma.roomParticipant.findMany()
     * 
     * // Get first 10 RoomParticipants
     * const roomParticipants = await prisma.roomParticipant.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const roomParticipantWithIdOnly = await prisma.roomParticipant.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RoomParticipantFindManyArgs>(args?: SelectSubset<T, RoomParticipantFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoomParticipantPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a RoomParticipant.
     * @param {RoomParticipantCreateArgs} args - Arguments to create a RoomParticipant.
     * @example
     * // Create one RoomParticipant
     * const RoomParticipant = await prisma.roomParticipant.create({
     *   data: {
     *     // ... data to create a RoomParticipant
     *   }
     * })
     * 
     */
    create<T extends RoomParticipantCreateArgs>(args: SelectSubset<T, RoomParticipantCreateArgs<ExtArgs>>): Prisma__RoomParticipantClient<$Result.GetResult<Prisma.$RoomParticipantPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many RoomParticipants.
     * @param {RoomParticipantCreateManyArgs} args - Arguments to create many RoomParticipants.
     * @example
     * // Create many RoomParticipants
     * const roomParticipant = await prisma.roomParticipant.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RoomParticipantCreateManyArgs>(args?: SelectSubset<T, RoomParticipantCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many RoomParticipants and returns the data saved in the database.
     * @param {RoomParticipantCreateManyAndReturnArgs} args - Arguments to create many RoomParticipants.
     * @example
     * // Create many RoomParticipants
     * const roomParticipant = await prisma.roomParticipant.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many RoomParticipants and only return the `id`
     * const roomParticipantWithIdOnly = await prisma.roomParticipant.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RoomParticipantCreateManyAndReturnArgs>(args?: SelectSubset<T, RoomParticipantCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoomParticipantPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a RoomParticipant.
     * @param {RoomParticipantDeleteArgs} args - Arguments to delete one RoomParticipant.
     * @example
     * // Delete one RoomParticipant
     * const RoomParticipant = await prisma.roomParticipant.delete({
     *   where: {
     *     // ... filter to delete one RoomParticipant
     *   }
     * })
     * 
     */
    delete<T extends RoomParticipantDeleteArgs>(args: SelectSubset<T, RoomParticipantDeleteArgs<ExtArgs>>): Prisma__RoomParticipantClient<$Result.GetResult<Prisma.$RoomParticipantPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one RoomParticipant.
     * @param {RoomParticipantUpdateArgs} args - Arguments to update one RoomParticipant.
     * @example
     * // Update one RoomParticipant
     * const roomParticipant = await prisma.roomParticipant.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RoomParticipantUpdateArgs>(args: SelectSubset<T, RoomParticipantUpdateArgs<ExtArgs>>): Prisma__RoomParticipantClient<$Result.GetResult<Prisma.$RoomParticipantPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more RoomParticipants.
     * @param {RoomParticipantDeleteManyArgs} args - Arguments to filter RoomParticipants to delete.
     * @example
     * // Delete a few RoomParticipants
     * const { count } = await prisma.roomParticipant.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RoomParticipantDeleteManyArgs>(args?: SelectSubset<T, RoomParticipantDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RoomParticipants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomParticipantUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RoomParticipants
     * const roomParticipant = await prisma.roomParticipant.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RoomParticipantUpdateManyArgs>(args: SelectSubset<T, RoomParticipantUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RoomParticipants and returns the data updated in the database.
     * @param {RoomParticipantUpdateManyAndReturnArgs} args - Arguments to update many RoomParticipants.
     * @example
     * // Update many RoomParticipants
     * const roomParticipant = await prisma.roomParticipant.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more RoomParticipants and only return the `id`
     * const roomParticipantWithIdOnly = await prisma.roomParticipant.updateManyAndReturn({
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
    updateManyAndReturn<T extends RoomParticipantUpdateManyAndReturnArgs>(args: SelectSubset<T, RoomParticipantUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoomParticipantPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one RoomParticipant.
     * @param {RoomParticipantUpsertArgs} args - Arguments to update or create a RoomParticipant.
     * @example
     * // Update or create a RoomParticipant
     * const roomParticipant = await prisma.roomParticipant.upsert({
     *   create: {
     *     // ... data to create a RoomParticipant
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RoomParticipant we want to update
     *   }
     * })
     */
    upsert<T extends RoomParticipantUpsertArgs>(args: SelectSubset<T, RoomParticipantUpsertArgs<ExtArgs>>): Prisma__RoomParticipantClient<$Result.GetResult<Prisma.$RoomParticipantPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of RoomParticipants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomParticipantCountArgs} args - Arguments to filter RoomParticipants to count.
     * @example
     * // Count the number of RoomParticipants
     * const count = await prisma.roomParticipant.count({
     *   where: {
     *     // ... the filter for the RoomParticipants we want to count
     *   }
     * })
    **/
    count<T extends RoomParticipantCountArgs>(
      args?: Subset<T, RoomParticipantCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RoomParticipantCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RoomParticipant.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomParticipantAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RoomParticipantAggregateArgs>(args: Subset<T, RoomParticipantAggregateArgs>): Prisma.PrismaPromise<GetRoomParticipantAggregateType<T>>

    /**
     * Group by RoomParticipant.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomParticipantGroupByArgs} args - Group by arguments.
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
      T extends RoomParticipantGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RoomParticipantGroupByArgs['orderBy'] }
        : { orderBy?: RoomParticipantGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RoomParticipantGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRoomParticipantGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RoomParticipant model
   */
  readonly fields: RoomParticipantFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RoomParticipant.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RoomParticipantClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    room<T extends RoomsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RoomsDefaultArgs<ExtArgs>>): Prisma__RoomsClient<$Result.GetResult<Prisma.$RoomsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UsersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsersDefaultArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the RoomParticipant model
   */
  interface RoomParticipantFieldRefs {
    readonly id: FieldRef<"RoomParticipant", 'String'>
    readonly room_id: FieldRef<"RoomParticipant", 'String'>
    readonly user_id: FieldRef<"RoomParticipant", 'String'>
  }
    

  // Custom InputTypes
  /**
   * RoomParticipant findUnique
   */
  export type RoomParticipantFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomParticipant
     */
    select?: RoomParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomParticipant
     */
    omit?: RoomParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomParticipantInclude<ExtArgs> | null
    /**
     * Filter, which RoomParticipant to fetch.
     */
    where: RoomParticipantWhereUniqueInput
  }

  /**
   * RoomParticipant findUniqueOrThrow
   */
  export type RoomParticipantFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomParticipant
     */
    select?: RoomParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomParticipant
     */
    omit?: RoomParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomParticipantInclude<ExtArgs> | null
    /**
     * Filter, which RoomParticipant to fetch.
     */
    where: RoomParticipantWhereUniqueInput
  }

  /**
   * RoomParticipant findFirst
   */
  export type RoomParticipantFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomParticipant
     */
    select?: RoomParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomParticipant
     */
    omit?: RoomParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomParticipantInclude<ExtArgs> | null
    /**
     * Filter, which RoomParticipant to fetch.
     */
    where?: RoomParticipantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RoomParticipants to fetch.
     */
    orderBy?: RoomParticipantOrderByWithRelationInput | RoomParticipantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RoomParticipants.
     */
    cursor?: RoomParticipantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RoomParticipants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RoomParticipants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RoomParticipants.
     */
    distinct?: RoomParticipantScalarFieldEnum | RoomParticipantScalarFieldEnum[]
  }

  /**
   * RoomParticipant findFirstOrThrow
   */
  export type RoomParticipantFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomParticipant
     */
    select?: RoomParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomParticipant
     */
    omit?: RoomParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomParticipantInclude<ExtArgs> | null
    /**
     * Filter, which RoomParticipant to fetch.
     */
    where?: RoomParticipantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RoomParticipants to fetch.
     */
    orderBy?: RoomParticipantOrderByWithRelationInput | RoomParticipantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RoomParticipants.
     */
    cursor?: RoomParticipantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RoomParticipants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RoomParticipants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RoomParticipants.
     */
    distinct?: RoomParticipantScalarFieldEnum | RoomParticipantScalarFieldEnum[]
  }

  /**
   * RoomParticipant findMany
   */
  export type RoomParticipantFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomParticipant
     */
    select?: RoomParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomParticipant
     */
    omit?: RoomParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomParticipantInclude<ExtArgs> | null
    /**
     * Filter, which RoomParticipants to fetch.
     */
    where?: RoomParticipantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RoomParticipants to fetch.
     */
    orderBy?: RoomParticipantOrderByWithRelationInput | RoomParticipantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RoomParticipants.
     */
    cursor?: RoomParticipantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RoomParticipants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RoomParticipants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RoomParticipants.
     */
    distinct?: RoomParticipantScalarFieldEnum | RoomParticipantScalarFieldEnum[]
  }

  /**
   * RoomParticipant create
   */
  export type RoomParticipantCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomParticipant
     */
    select?: RoomParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomParticipant
     */
    omit?: RoomParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomParticipantInclude<ExtArgs> | null
    /**
     * The data needed to create a RoomParticipant.
     */
    data: XOR<RoomParticipantCreateInput, RoomParticipantUncheckedCreateInput>
  }

  /**
   * RoomParticipant createMany
   */
  export type RoomParticipantCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RoomParticipants.
     */
    data: RoomParticipantCreateManyInput | RoomParticipantCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RoomParticipant createManyAndReturn
   */
  export type RoomParticipantCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomParticipant
     */
    select?: RoomParticipantSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RoomParticipant
     */
    omit?: RoomParticipantOmit<ExtArgs> | null
    /**
     * The data used to create many RoomParticipants.
     */
    data: RoomParticipantCreateManyInput | RoomParticipantCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomParticipantIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * RoomParticipant update
   */
  export type RoomParticipantUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomParticipant
     */
    select?: RoomParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomParticipant
     */
    omit?: RoomParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomParticipantInclude<ExtArgs> | null
    /**
     * The data needed to update a RoomParticipant.
     */
    data: XOR<RoomParticipantUpdateInput, RoomParticipantUncheckedUpdateInput>
    /**
     * Choose, which RoomParticipant to update.
     */
    where: RoomParticipantWhereUniqueInput
  }

  /**
   * RoomParticipant updateMany
   */
  export type RoomParticipantUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RoomParticipants.
     */
    data: XOR<RoomParticipantUpdateManyMutationInput, RoomParticipantUncheckedUpdateManyInput>
    /**
     * Filter which RoomParticipants to update
     */
    where?: RoomParticipantWhereInput
    /**
     * Limit how many RoomParticipants to update.
     */
    limit?: number
  }

  /**
   * RoomParticipant updateManyAndReturn
   */
  export type RoomParticipantUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomParticipant
     */
    select?: RoomParticipantSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RoomParticipant
     */
    omit?: RoomParticipantOmit<ExtArgs> | null
    /**
     * The data used to update RoomParticipants.
     */
    data: XOR<RoomParticipantUpdateManyMutationInput, RoomParticipantUncheckedUpdateManyInput>
    /**
     * Filter which RoomParticipants to update
     */
    where?: RoomParticipantWhereInput
    /**
     * Limit how many RoomParticipants to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomParticipantIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * RoomParticipant upsert
   */
  export type RoomParticipantUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomParticipant
     */
    select?: RoomParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomParticipant
     */
    omit?: RoomParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomParticipantInclude<ExtArgs> | null
    /**
     * The filter to search for the RoomParticipant to update in case it exists.
     */
    where: RoomParticipantWhereUniqueInput
    /**
     * In case the RoomParticipant found by the `where` argument doesn't exist, create a new RoomParticipant with this data.
     */
    create: XOR<RoomParticipantCreateInput, RoomParticipantUncheckedCreateInput>
    /**
     * In case the RoomParticipant was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RoomParticipantUpdateInput, RoomParticipantUncheckedUpdateInput>
  }

  /**
   * RoomParticipant delete
   */
  export type RoomParticipantDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomParticipant
     */
    select?: RoomParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomParticipant
     */
    omit?: RoomParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomParticipantInclude<ExtArgs> | null
    /**
     * Filter which RoomParticipant to delete.
     */
    where: RoomParticipantWhereUniqueInput
  }

  /**
   * RoomParticipant deleteMany
   */
  export type RoomParticipantDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RoomParticipants to delete
     */
    where?: RoomParticipantWhereInput
    /**
     * Limit how many RoomParticipants to delete.
     */
    limit?: number
  }

  /**
   * RoomParticipant without action
   */
  export type RoomParticipantDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomParticipant
     */
    select?: RoomParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomParticipant
     */
    omit?: RoomParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomParticipantInclude<ExtArgs> | null
  }


  /**
   * Model Messages
   */

  export type AggregateMessages = {
    _count: MessagesCountAggregateOutputType | null
    _min: MessagesMinAggregateOutputType | null
    _max: MessagesMaxAggregateOutputType | null
  }

  export type MessagesMinAggregateOutputType = {
    id: string | null
    text: string | null
    sender_id: string | null
    room_id: string | null
    created_at: Date | null
  }

  export type MessagesMaxAggregateOutputType = {
    id: string | null
    text: string | null
    sender_id: string | null
    room_id: string | null
    created_at: Date | null
  }

  export type MessagesCountAggregateOutputType = {
    id: number
    text: number
    sender_id: number
    room_id: number
    created_at: number
    _all: number
  }


  export type MessagesMinAggregateInputType = {
    id?: true
    text?: true
    sender_id?: true
    room_id?: true
    created_at?: true
  }

  export type MessagesMaxAggregateInputType = {
    id?: true
    text?: true
    sender_id?: true
    room_id?: true
    created_at?: true
  }

  export type MessagesCountAggregateInputType = {
    id?: true
    text?: true
    sender_id?: true
    room_id?: true
    created_at?: true
    _all?: true
  }

  export type MessagesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Messages to aggregate.
     */
    where?: MessagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessagesOrderByWithRelationInput | MessagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MessagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Messages
    **/
    _count?: true | MessagesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MessagesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MessagesMaxAggregateInputType
  }

  export type GetMessagesAggregateType<T extends MessagesAggregateArgs> = {
        [P in keyof T & keyof AggregateMessages]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMessages[P]>
      : GetScalarType<T[P], AggregateMessages[P]>
  }




  export type MessagesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MessagesWhereInput
    orderBy?: MessagesOrderByWithAggregationInput | MessagesOrderByWithAggregationInput[]
    by: MessagesScalarFieldEnum[] | MessagesScalarFieldEnum
    having?: MessagesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MessagesCountAggregateInputType | true
    _min?: MessagesMinAggregateInputType
    _max?: MessagesMaxAggregateInputType
  }

  export type MessagesGroupByOutputType = {
    id: string
    text: string
    sender_id: string
    room_id: string
    created_at: Date
    _count: MessagesCountAggregateOutputType | null
    _min: MessagesMinAggregateOutputType | null
    _max: MessagesMaxAggregateOutputType | null
  }

  type GetMessagesGroupByPayload<T extends MessagesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MessagesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MessagesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MessagesGroupByOutputType[P]>
            : GetScalarType<T[P], MessagesGroupByOutputType[P]>
        }
      >
    >


  export type MessagesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    text?: boolean
    sender_id?: boolean
    room_id?: boolean
    created_at?: boolean
    sender?: boolean | UsersDefaultArgs<ExtArgs>
    room?: boolean | RoomsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["messages"]>

  export type MessagesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    text?: boolean
    sender_id?: boolean
    room_id?: boolean
    created_at?: boolean
    sender?: boolean | UsersDefaultArgs<ExtArgs>
    room?: boolean | RoomsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["messages"]>

  export type MessagesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    text?: boolean
    sender_id?: boolean
    room_id?: boolean
    created_at?: boolean
    sender?: boolean | UsersDefaultArgs<ExtArgs>
    room?: boolean | RoomsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["messages"]>

  export type MessagesSelectScalar = {
    id?: boolean
    text?: boolean
    sender_id?: boolean
    room_id?: boolean
    created_at?: boolean
  }

  export type MessagesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "text" | "sender_id" | "room_id" | "created_at", ExtArgs["result"]["messages"]>
  export type MessagesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sender?: boolean | UsersDefaultArgs<ExtArgs>
    room?: boolean | RoomsDefaultArgs<ExtArgs>
  }
  export type MessagesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sender?: boolean | UsersDefaultArgs<ExtArgs>
    room?: boolean | RoomsDefaultArgs<ExtArgs>
  }
  export type MessagesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sender?: boolean | UsersDefaultArgs<ExtArgs>
    room?: boolean | RoomsDefaultArgs<ExtArgs>
  }

  export type $MessagesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Messages"
    objects: {
      sender: Prisma.$UsersPayload<ExtArgs>
      room: Prisma.$RoomsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      text: string
      sender_id: string
      room_id: string
      created_at: Date
    }, ExtArgs["result"]["messages"]>
    composites: {}
  }

  type MessagesGetPayload<S extends boolean | null | undefined | MessagesDefaultArgs> = $Result.GetResult<Prisma.$MessagesPayload, S>

  type MessagesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MessagesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MessagesCountAggregateInputType | true
    }

  export interface MessagesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Messages'], meta: { name: 'Messages' } }
    /**
     * Find zero or one Messages that matches the filter.
     * @param {MessagesFindUniqueArgs} args - Arguments to find a Messages
     * @example
     * // Get one Messages
     * const messages = await prisma.messages.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MessagesFindUniqueArgs>(args: SelectSubset<T, MessagesFindUniqueArgs<ExtArgs>>): Prisma__MessagesClient<$Result.GetResult<Prisma.$MessagesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Messages that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MessagesFindUniqueOrThrowArgs} args - Arguments to find a Messages
     * @example
     * // Get one Messages
     * const messages = await prisma.messages.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MessagesFindUniqueOrThrowArgs>(args: SelectSubset<T, MessagesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MessagesClient<$Result.GetResult<Prisma.$MessagesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Messages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessagesFindFirstArgs} args - Arguments to find a Messages
     * @example
     * // Get one Messages
     * const messages = await prisma.messages.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MessagesFindFirstArgs>(args?: SelectSubset<T, MessagesFindFirstArgs<ExtArgs>>): Prisma__MessagesClient<$Result.GetResult<Prisma.$MessagesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Messages that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessagesFindFirstOrThrowArgs} args - Arguments to find a Messages
     * @example
     * // Get one Messages
     * const messages = await prisma.messages.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MessagesFindFirstOrThrowArgs>(args?: SelectSubset<T, MessagesFindFirstOrThrowArgs<ExtArgs>>): Prisma__MessagesClient<$Result.GetResult<Prisma.$MessagesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Messages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessagesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Messages
     * const messages = await prisma.messages.findMany()
     * 
     * // Get first 10 Messages
     * const messages = await prisma.messages.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const messagesWithIdOnly = await prisma.messages.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MessagesFindManyArgs>(args?: SelectSubset<T, MessagesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Messages.
     * @param {MessagesCreateArgs} args - Arguments to create a Messages.
     * @example
     * // Create one Messages
     * const Messages = await prisma.messages.create({
     *   data: {
     *     // ... data to create a Messages
     *   }
     * })
     * 
     */
    create<T extends MessagesCreateArgs>(args: SelectSubset<T, MessagesCreateArgs<ExtArgs>>): Prisma__MessagesClient<$Result.GetResult<Prisma.$MessagesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Messages.
     * @param {MessagesCreateManyArgs} args - Arguments to create many Messages.
     * @example
     * // Create many Messages
     * const messages = await prisma.messages.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MessagesCreateManyArgs>(args?: SelectSubset<T, MessagesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Messages and returns the data saved in the database.
     * @param {MessagesCreateManyAndReturnArgs} args - Arguments to create many Messages.
     * @example
     * // Create many Messages
     * const messages = await prisma.messages.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Messages and only return the `id`
     * const messagesWithIdOnly = await prisma.messages.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MessagesCreateManyAndReturnArgs>(args?: SelectSubset<T, MessagesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Messages.
     * @param {MessagesDeleteArgs} args - Arguments to delete one Messages.
     * @example
     * // Delete one Messages
     * const Messages = await prisma.messages.delete({
     *   where: {
     *     // ... filter to delete one Messages
     *   }
     * })
     * 
     */
    delete<T extends MessagesDeleteArgs>(args: SelectSubset<T, MessagesDeleteArgs<ExtArgs>>): Prisma__MessagesClient<$Result.GetResult<Prisma.$MessagesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Messages.
     * @param {MessagesUpdateArgs} args - Arguments to update one Messages.
     * @example
     * // Update one Messages
     * const messages = await prisma.messages.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MessagesUpdateArgs>(args: SelectSubset<T, MessagesUpdateArgs<ExtArgs>>): Prisma__MessagesClient<$Result.GetResult<Prisma.$MessagesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Messages.
     * @param {MessagesDeleteManyArgs} args - Arguments to filter Messages to delete.
     * @example
     * // Delete a few Messages
     * const { count } = await prisma.messages.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MessagesDeleteManyArgs>(args?: SelectSubset<T, MessagesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Messages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessagesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Messages
     * const messages = await prisma.messages.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MessagesUpdateManyArgs>(args: SelectSubset<T, MessagesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Messages and returns the data updated in the database.
     * @param {MessagesUpdateManyAndReturnArgs} args - Arguments to update many Messages.
     * @example
     * // Update many Messages
     * const messages = await prisma.messages.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Messages and only return the `id`
     * const messagesWithIdOnly = await prisma.messages.updateManyAndReturn({
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
    updateManyAndReturn<T extends MessagesUpdateManyAndReturnArgs>(args: SelectSubset<T, MessagesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Messages.
     * @param {MessagesUpsertArgs} args - Arguments to update or create a Messages.
     * @example
     * // Update or create a Messages
     * const messages = await prisma.messages.upsert({
     *   create: {
     *     // ... data to create a Messages
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Messages we want to update
     *   }
     * })
     */
    upsert<T extends MessagesUpsertArgs>(args: SelectSubset<T, MessagesUpsertArgs<ExtArgs>>): Prisma__MessagesClient<$Result.GetResult<Prisma.$MessagesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Messages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessagesCountArgs} args - Arguments to filter Messages to count.
     * @example
     * // Count the number of Messages
     * const count = await prisma.messages.count({
     *   where: {
     *     // ... the filter for the Messages we want to count
     *   }
     * })
    **/
    count<T extends MessagesCountArgs>(
      args?: Subset<T, MessagesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MessagesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Messages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessagesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MessagesAggregateArgs>(args: Subset<T, MessagesAggregateArgs>): Prisma.PrismaPromise<GetMessagesAggregateType<T>>

    /**
     * Group by Messages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessagesGroupByArgs} args - Group by arguments.
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
      T extends MessagesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MessagesGroupByArgs['orderBy'] }
        : { orderBy?: MessagesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MessagesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMessagesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Messages model
   */
  readonly fields: MessagesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Messages.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MessagesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    sender<T extends UsersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsersDefaultArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    room<T extends RoomsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RoomsDefaultArgs<ExtArgs>>): Prisma__RoomsClient<$Result.GetResult<Prisma.$RoomsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Messages model
   */
  interface MessagesFieldRefs {
    readonly id: FieldRef<"Messages", 'String'>
    readonly text: FieldRef<"Messages", 'String'>
    readonly sender_id: FieldRef<"Messages", 'String'>
    readonly room_id: FieldRef<"Messages", 'String'>
    readonly created_at: FieldRef<"Messages", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Messages findUnique
   */
  export type MessagesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Messages
     */
    select?: MessagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Messages
     */
    omit?: MessagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessagesInclude<ExtArgs> | null
    /**
     * Filter, which Messages to fetch.
     */
    where: MessagesWhereUniqueInput
  }

  /**
   * Messages findUniqueOrThrow
   */
  export type MessagesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Messages
     */
    select?: MessagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Messages
     */
    omit?: MessagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessagesInclude<ExtArgs> | null
    /**
     * Filter, which Messages to fetch.
     */
    where: MessagesWhereUniqueInput
  }

  /**
   * Messages findFirst
   */
  export type MessagesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Messages
     */
    select?: MessagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Messages
     */
    omit?: MessagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessagesInclude<ExtArgs> | null
    /**
     * Filter, which Messages to fetch.
     */
    where?: MessagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessagesOrderByWithRelationInput | MessagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Messages.
     */
    cursor?: MessagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Messages.
     */
    distinct?: MessagesScalarFieldEnum | MessagesScalarFieldEnum[]
  }

  /**
   * Messages findFirstOrThrow
   */
  export type MessagesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Messages
     */
    select?: MessagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Messages
     */
    omit?: MessagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessagesInclude<ExtArgs> | null
    /**
     * Filter, which Messages to fetch.
     */
    where?: MessagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessagesOrderByWithRelationInput | MessagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Messages.
     */
    cursor?: MessagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Messages.
     */
    distinct?: MessagesScalarFieldEnum | MessagesScalarFieldEnum[]
  }

  /**
   * Messages findMany
   */
  export type MessagesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Messages
     */
    select?: MessagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Messages
     */
    omit?: MessagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessagesInclude<ExtArgs> | null
    /**
     * Filter, which Messages to fetch.
     */
    where?: MessagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessagesOrderByWithRelationInput | MessagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Messages.
     */
    cursor?: MessagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Messages.
     */
    distinct?: MessagesScalarFieldEnum | MessagesScalarFieldEnum[]
  }

  /**
   * Messages create
   */
  export type MessagesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Messages
     */
    select?: MessagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Messages
     */
    omit?: MessagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessagesInclude<ExtArgs> | null
    /**
     * The data needed to create a Messages.
     */
    data: XOR<MessagesCreateInput, MessagesUncheckedCreateInput>
  }

  /**
   * Messages createMany
   */
  export type MessagesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Messages.
     */
    data: MessagesCreateManyInput | MessagesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Messages createManyAndReturn
   */
  export type MessagesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Messages
     */
    select?: MessagesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Messages
     */
    omit?: MessagesOmit<ExtArgs> | null
    /**
     * The data used to create many Messages.
     */
    data: MessagesCreateManyInput | MessagesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessagesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Messages update
   */
  export type MessagesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Messages
     */
    select?: MessagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Messages
     */
    omit?: MessagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessagesInclude<ExtArgs> | null
    /**
     * The data needed to update a Messages.
     */
    data: XOR<MessagesUpdateInput, MessagesUncheckedUpdateInput>
    /**
     * Choose, which Messages to update.
     */
    where: MessagesWhereUniqueInput
  }

  /**
   * Messages updateMany
   */
  export type MessagesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Messages.
     */
    data: XOR<MessagesUpdateManyMutationInput, MessagesUncheckedUpdateManyInput>
    /**
     * Filter which Messages to update
     */
    where?: MessagesWhereInput
    /**
     * Limit how many Messages to update.
     */
    limit?: number
  }

  /**
   * Messages updateManyAndReturn
   */
  export type MessagesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Messages
     */
    select?: MessagesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Messages
     */
    omit?: MessagesOmit<ExtArgs> | null
    /**
     * The data used to update Messages.
     */
    data: XOR<MessagesUpdateManyMutationInput, MessagesUncheckedUpdateManyInput>
    /**
     * Filter which Messages to update
     */
    where?: MessagesWhereInput
    /**
     * Limit how many Messages to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessagesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Messages upsert
   */
  export type MessagesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Messages
     */
    select?: MessagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Messages
     */
    omit?: MessagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessagesInclude<ExtArgs> | null
    /**
     * The filter to search for the Messages to update in case it exists.
     */
    where: MessagesWhereUniqueInput
    /**
     * In case the Messages found by the `where` argument doesn't exist, create a new Messages with this data.
     */
    create: XOR<MessagesCreateInput, MessagesUncheckedCreateInput>
    /**
     * In case the Messages was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MessagesUpdateInput, MessagesUncheckedUpdateInput>
  }

  /**
   * Messages delete
   */
  export type MessagesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Messages
     */
    select?: MessagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Messages
     */
    omit?: MessagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessagesInclude<ExtArgs> | null
    /**
     * Filter which Messages to delete.
     */
    where: MessagesWhereUniqueInput
  }

  /**
   * Messages deleteMany
   */
  export type MessagesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Messages to delete
     */
    where?: MessagesWhereInput
    /**
     * Limit how many Messages to delete.
     */
    limit?: number
  }

  /**
   * Messages without action
   */
  export type MessagesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Messages
     */
    select?: MessagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Messages
     */
    omit?: MessagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessagesInclude<ExtArgs> | null
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


  export const UsersScalarFieldEnum: {
    id: 'id',
    first_name: 'first_name',
    last_name: 'last_name',
    phone: 'phone',
    email: 'email',
    password_hash: 'password_hash',
    created_at: 'created_at'
  };

  export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum]


  export const RoomsScalarFieldEnum: {
    id: 'id',
    name: 'name',
    created_at: 'created_at'
  };

  export type RoomsScalarFieldEnum = (typeof RoomsScalarFieldEnum)[keyof typeof RoomsScalarFieldEnum]


  export const RoomParticipantScalarFieldEnum: {
    id: 'id',
    room_id: 'room_id',
    user_id: 'user_id'
  };

  export type RoomParticipantScalarFieldEnum = (typeof RoomParticipantScalarFieldEnum)[keyof typeof RoomParticipantScalarFieldEnum]


  export const MessagesScalarFieldEnum: {
    id: 'id',
    text: 'text',
    sender_id: 'sender_id',
    room_id: 'room_id',
    created_at: 'created_at'
  };

  export type MessagesScalarFieldEnum = (typeof MessagesScalarFieldEnum)[keyof typeof MessagesScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


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
   * Deep Input Types
   */


  export type UsersWhereInput = {
    AND?: UsersWhereInput | UsersWhereInput[]
    OR?: UsersWhereInput[]
    NOT?: UsersWhereInput | UsersWhereInput[]
    id?: StringFilter<"Users"> | string
    first_name?: StringFilter<"Users"> | string
    last_name?: StringFilter<"Users"> | string
    phone?: StringFilter<"Users"> | string
    email?: StringFilter<"Users"> | string
    password_hash?: StringFilter<"Users"> | string
    created_at?: DateTimeFilter<"Users"> | Date | string
    messages?: MessagesListRelationFilter
    user?: RoomParticipantListRelationFilter
  }

  export type UsersOrderByWithRelationInput = {
    id?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    password_hash?: SortOrder
    created_at?: SortOrder
    messages?: MessagesOrderByRelationAggregateInput
    user?: RoomParticipantOrderByRelationAggregateInput
  }

  export type UsersWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    phone?: string
    email?: string
    AND?: UsersWhereInput | UsersWhereInput[]
    OR?: UsersWhereInput[]
    NOT?: UsersWhereInput | UsersWhereInput[]
    first_name?: StringFilter<"Users"> | string
    last_name?: StringFilter<"Users"> | string
    password_hash?: StringFilter<"Users"> | string
    created_at?: DateTimeFilter<"Users"> | Date | string
    messages?: MessagesListRelationFilter
    user?: RoomParticipantListRelationFilter
  }, "id" | "phone" | "email">

  export type UsersOrderByWithAggregationInput = {
    id?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    password_hash?: SortOrder
    created_at?: SortOrder
    _count?: UsersCountOrderByAggregateInput
    _max?: UsersMaxOrderByAggregateInput
    _min?: UsersMinOrderByAggregateInput
  }

  export type UsersScalarWhereWithAggregatesInput = {
    AND?: UsersScalarWhereWithAggregatesInput | UsersScalarWhereWithAggregatesInput[]
    OR?: UsersScalarWhereWithAggregatesInput[]
    NOT?: UsersScalarWhereWithAggregatesInput | UsersScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Users"> | string
    first_name?: StringWithAggregatesFilter<"Users"> | string
    last_name?: StringWithAggregatesFilter<"Users"> | string
    phone?: StringWithAggregatesFilter<"Users"> | string
    email?: StringWithAggregatesFilter<"Users"> | string
    password_hash?: StringWithAggregatesFilter<"Users"> | string
    created_at?: DateTimeWithAggregatesFilter<"Users"> | Date | string
  }

  export type RoomsWhereInput = {
    AND?: RoomsWhereInput | RoomsWhereInput[]
    OR?: RoomsWhereInput[]
    NOT?: RoomsWhereInput | RoomsWhereInput[]
    id?: StringFilter<"Rooms"> | string
    name?: StringFilter<"Rooms"> | string
    created_at?: DateTimeFilter<"Rooms"> | Date | string
    messages?: MessagesListRelationFilter
    participants?: RoomParticipantListRelationFilter
  }

  export type RoomsOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    created_at?: SortOrder
    messages?: MessagesOrderByRelationAggregateInput
    participants?: RoomParticipantOrderByRelationAggregateInput
  }

  export type RoomsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: RoomsWhereInput | RoomsWhereInput[]
    OR?: RoomsWhereInput[]
    NOT?: RoomsWhereInput | RoomsWhereInput[]
    name?: StringFilter<"Rooms"> | string
    created_at?: DateTimeFilter<"Rooms"> | Date | string
    messages?: MessagesListRelationFilter
    participants?: RoomParticipantListRelationFilter
  }, "id">

  export type RoomsOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    created_at?: SortOrder
    _count?: RoomsCountOrderByAggregateInput
    _max?: RoomsMaxOrderByAggregateInput
    _min?: RoomsMinOrderByAggregateInput
  }

  export type RoomsScalarWhereWithAggregatesInput = {
    AND?: RoomsScalarWhereWithAggregatesInput | RoomsScalarWhereWithAggregatesInput[]
    OR?: RoomsScalarWhereWithAggregatesInput[]
    NOT?: RoomsScalarWhereWithAggregatesInput | RoomsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Rooms"> | string
    name?: StringWithAggregatesFilter<"Rooms"> | string
    created_at?: DateTimeWithAggregatesFilter<"Rooms"> | Date | string
  }

  export type RoomParticipantWhereInput = {
    AND?: RoomParticipantWhereInput | RoomParticipantWhereInput[]
    OR?: RoomParticipantWhereInput[]
    NOT?: RoomParticipantWhereInput | RoomParticipantWhereInput[]
    id?: StringFilter<"RoomParticipant"> | string
    room_id?: StringFilter<"RoomParticipant"> | string
    user_id?: StringFilter<"RoomParticipant"> | string
    room?: XOR<RoomsScalarRelationFilter, RoomsWhereInput>
    user?: XOR<UsersScalarRelationFilter, UsersWhereInput>
  }

  export type RoomParticipantOrderByWithRelationInput = {
    id?: SortOrder
    room_id?: SortOrder
    user_id?: SortOrder
    room?: RoomsOrderByWithRelationInput
    user?: UsersOrderByWithRelationInput
  }

  export type RoomParticipantWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    room_id_user_id?: RoomParticipantRoom_idUser_idCompoundUniqueInput
    AND?: RoomParticipantWhereInput | RoomParticipantWhereInput[]
    OR?: RoomParticipantWhereInput[]
    NOT?: RoomParticipantWhereInput | RoomParticipantWhereInput[]
    room_id?: StringFilter<"RoomParticipant"> | string
    user_id?: StringFilter<"RoomParticipant"> | string
    room?: XOR<RoomsScalarRelationFilter, RoomsWhereInput>
    user?: XOR<UsersScalarRelationFilter, UsersWhereInput>
  }, "id" | "room_id_user_id">

  export type RoomParticipantOrderByWithAggregationInput = {
    id?: SortOrder
    room_id?: SortOrder
    user_id?: SortOrder
    _count?: RoomParticipantCountOrderByAggregateInput
    _max?: RoomParticipantMaxOrderByAggregateInput
    _min?: RoomParticipantMinOrderByAggregateInput
  }

  export type RoomParticipantScalarWhereWithAggregatesInput = {
    AND?: RoomParticipantScalarWhereWithAggregatesInput | RoomParticipantScalarWhereWithAggregatesInput[]
    OR?: RoomParticipantScalarWhereWithAggregatesInput[]
    NOT?: RoomParticipantScalarWhereWithAggregatesInput | RoomParticipantScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"RoomParticipant"> | string
    room_id?: StringWithAggregatesFilter<"RoomParticipant"> | string
    user_id?: StringWithAggregatesFilter<"RoomParticipant"> | string
  }

  export type MessagesWhereInput = {
    AND?: MessagesWhereInput | MessagesWhereInput[]
    OR?: MessagesWhereInput[]
    NOT?: MessagesWhereInput | MessagesWhereInput[]
    id?: StringFilter<"Messages"> | string
    text?: StringFilter<"Messages"> | string
    sender_id?: StringFilter<"Messages"> | string
    room_id?: StringFilter<"Messages"> | string
    created_at?: DateTimeFilter<"Messages"> | Date | string
    sender?: XOR<UsersScalarRelationFilter, UsersWhereInput>
    room?: XOR<RoomsScalarRelationFilter, RoomsWhereInput>
  }

  export type MessagesOrderByWithRelationInput = {
    id?: SortOrder
    text?: SortOrder
    sender_id?: SortOrder
    room_id?: SortOrder
    created_at?: SortOrder
    sender?: UsersOrderByWithRelationInput
    room?: RoomsOrderByWithRelationInput
  }

  export type MessagesWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MessagesWhereInput | MessagesWhereInput[]
    OR?: MessagesWhereInput[]
    NOT?: MessagesWhereInput | MessagesWhereInput[]
    text?: StringFilter<"Messages"> | string
    sender_id?: StringFilter<"Messages"> | string
    room_id?: StringFilter<"Messages"> | string
    created_at?: DateTimeFilter<"Messages"> | Date | string
    sender?: XOR<UsersScalarRelationFilter, UsersWhereInput>
    room?: XOR<RoomsScalarRelationFilter, RoomsWhereInput>
  }, "id">

  export type MessagesOrderByWithAggregationInput = {
    id?: SortOrder
    text?: SortOrder
    sender_id?: SortOrder
    room_id?: SortOrder
    created_at?: SortOrder
    _count?: MessagesCountOrderByAggregateInput
    _max?: MessagesMaxOrderByAggregateInput
    _min?: MessagesMinOrderByAggregateInput
  }

  export type MessagesScalarWhereWithAggregatesInput = {
    AND?: MessagesScalarWhereWithAggregatesInput | MessagesScalarWhereWithAggregatesInput[]
    OR?: MessagesScalarWhereWithAggregatesInput[]
    NOT?: MessagesScalarWhereWithAggregatesInput | MessagesScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Messages"> | string
    text?: StringWithAggregatesFilter<"Messages"> | string
    sender_id?: StringWithAggregatesFilter<"Messages"> | string
    room_id?: StringWithAggregatesFilter<"Messages"> | string
    created_at?: DateTimeWithAggregatesFilter<"Messages"> | Date | string
  }

  export type UsersCreateInput = {
    id?: string
    first_name: string
    last_name: string
    phone: string
    email: string
    password_hash: string
    created_at?: Date | string
    messages?: MessagesCreateNestedManyWithoutSenderInput
    user?: RoomParticipantCreateNestedManyWithoutUserInput
  }

  export type UsersUncheckedCreateInput = {
    id?: string
    first_name: string
    last_name: string
    phone: string
    email: string
    password_hash: string
    created_at?: Date | string
    messages?: MessagesUncheckedCreateNestedManyWithoutSenderInput
    user?: RoomParticipantUncheckedCreateNestedManyWithoutUserInput
  }

  export type UsersUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    messages?: MessagesUpdateManyWithoutSenderNestedInput
    user?: RoomParticipantUpdateManyWithoutUserNestedInput
  }

  export type UsersUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    messages?: MessagesUncheckedUpdateManyWithoutSenderNestedInput
    user?: RoomParticipantUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UsersCreateManyInput = {
    id?: string
    first_name: string
    last_name: string
    phone: string
    email: string
    password_hash: string
    created_at?: Date | string
  }

  export type UsersUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsersUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoomsCreateInput = {
    id?: string
    name: string
    created_at?: Date | string
    messages?: MessagesCreateNestedManyWithoutRoomInput
    participants?: RoomParticipantCreateNestedManyWithoutRoomInput
  }

  export type RoomsUncheckedCreateInput = {
    id?: string
    name: string
    created_at?: Date | string
    messages?: MessagesUncheckedCreateNestedManyWithoutRoomInput
    participants?: RoomParticipantUncheckedCreateNestedManyWithoutRoomInput
  }

  export type RoomsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    messages?: MessagesUpdateManyWithoutRoomNestedInput
    participants?: RoomParticipantUpdateManyWithoutRoomNestedInput
  }

  export type RoomsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    messages?: MessagesUncheckedUpdateManyWithoutRoomNestedInput
    participants?: RoomParticipantUncheckedUpdateManyWithoutRoomNestedInput
  }

  export type RoomsCreateManyInput = {
    id?: string
    name: string
    created_at?: Date | string
  }

  export type RoomsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoomsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoomParticipantCreateInput = {
    id?: string
    room: RoomsCreateNestedOneWithoutParticipantsInput
    user: UsersCreateNestedOneWithoutUserInput
  }

  export type RoomParticipantUncheckedCreateInput = {
    id?: string
    room_id: string
    user_id: string
  }

  export type RoomParticipantUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    room?: RoomsUpdateOneRequiredWithoutParticipantsNestedInput
    user?: UsersUpdateOneRequiredWithoutUserNestedInput
  }

  export type RoomParticipantUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    room_id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
  }

  export type RoomParticipantCreateManyInput = {
    id?: string
    room_id: string
    user_id: string
  }

  export type RoomParticipantUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
  }

  export type RoomParticipantUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    room_id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
  }

  export type MessagesCreateInput = {
    id?: string
    text: string
    created_at?: Date | string
    sender: UsersCreateNestedOneWithoutMessagesInput
    room: RoomsCreateNestedOneWithoutMessagesInput
  }

  export type MessagesUncheckedCreateInput = {
    id?: string
    text: string
    sender_id: string
    room_id: string
    created_at?: Date | string
  }

  export type MessagesUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    sender?: UsersUpdateOneRequiredWithoutMessagesNestedInput
    room?: RoomsUpdateOneRequiredWithoutMessagesNestedInput
  }

  export type MessagesUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    sender_id?: StringFieldUpdateOperationsInput | string
    room_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessagesCreateManyInput = {
    id?: string
    text: string
    sender_id: string
    room_id: string
    created_at?: Date | string
  }

  export type MessagesUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessagesUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    sender_id?: StringFieldUpdateOperationsInput | string
    room_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type MessagesListRelationFilter = {
    every?: MessagesWhereInput
    some?: MessagesWhereInput
    none?: MessagesWhereInput
  }

  export type RoomParticipantListRelationFilter = {
    every?: RoomParticipantWhereInput
    some?: RoomParticipantWhereInput
    none?: RoomParticipantWhereInput
  }

  export type MessagesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RoomParticipantOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UsersCountOrderByAggregateInput = {
    id?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    password_hash?: SortOrder
    created_at?: SortOrder
  }

  export type UsersMaxOrderByAggregateInput = {
    id?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    password_hash?: SortOrder
    created_at?: SortOrder
  }

  export type UsersMinOrderByAggregateInput = {
    id?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    password_hash?: SortOrder
    created_at?: SortOrder
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

  export type RoomsCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    created_at?: SortOrder
  }

  export type RoomsMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    created_at?: SortOrder
  }

  export type RoomsMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    created_at?: SortOrder
  }

  export type RoomsScalarRelationFilter = {
    is?: RoomsWhereInput
    isNot?: RoomsWhereInput
  }

  export type UsersScalarRelationFilter = {
    is?: UsersWhereInput
    isNot?: UsersWhereInput
  }

  export type RoomParticipantRoom_idUser_idCompoundUniqueInput = {
    room_id: string
    user_id: string
  }

  export type RoomParticipantCountOrderByAggregateInput = {
    id?: SortOrder
    room_id?: SortOrder
    user_id?: SortOrder
  }

  export type RoomParticipantMaxOrderByAggregateInput = {
    id?: SortOrder
    room_id?: SortOrder
    user_id?: SortOrder
  }

  export type RoomParticipantMinOrderByAggregateInput = {
    id?: SortOrder
    room_id?: SortOrder
    user_id?: SortOrder
  }

  export type MessagesCountOrderByAggregateInput = {
    id?: SortOrder
    text?: SortOrder
    sender_id?: SortOrder
    room_id?: SortOrder
    created_at?: SortOrder
  }

  export type MessagesMaxOrderByAggregateInput = {
    id?: SortOrder
    text?: SortOrder
    sender_id?: SortOrder
    room_id?: SortOrder
    created_at?: SortOrder
  }

  export type MessagesMinOrderByAggregateInput = {
    id?: SortOrder
    text?: SortOrder
    sender_id?: SortOrder
    room_id?: SortOrder
    created_at?: SortOrder
  }

  export type MessagesCreateNestedManyWithoutSenderInput = {
    create?: XOR<MessagesCreateWithoutSenderInput, MessagesUncheckedCreateWithoutSenderInput> | MessagesCreateWithoutSenderInput[] | MessagesUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: MessagesCreateOrConnectWithoutSenderInput | MessagesCreateOrConnectWithoutSenderInput[]
    createMany?: MessagesCreateManySenderInputEnvelope
    connect?: MessagesWhereUniqueInput | MessagesWhereUniqueInput[]
  }

  export type RoomParticipantCreateNestedManyWithoutUserInput = {
    create?: XOR<RoomParticipantCreateWithoutUserInput, RoomParticipantUncheckedCreateWithoutUserInput> | RoomParticipantCreateWithoutUserInput[] | RoomParticipantUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RoomParticipantCreateOrConnectWithoutUserInput | RoomParticipantCreateOrConnectWithoutUserInput[]
    createMany?: RoomParticipantCreateManyUserInputEnvelope
    connect?: RoomParticipantWhereUniqueInput | RoomParticipantWhereUniqueInput[]
  }

  export type MessagesUncheckedCreateNestedManyWithoutSenderInput = {
    create?: XOR<MessagesCreateWithoutSenderInput, MessagesUncheckedCreateWithoutSenderInput> | MessagesCreateWithoutSenderInput[] | MessagesUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: MessagesCreateOrConnectWithoutSenderInput | MessagesCreateOrConnectWithoutSenderInput[]
    createMany?: MessagesCreateManySenderInputEnvelope
    connect?: MessagesWhereUniqueInput | MessagesWhereUniqueInput[]
  }

  export type RoomParticipantUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<RoomParticipantCreateWithoutUserInput, RoomParticipantUncheckedCreateWithoutUserInput> | RoomParticipantCreateWithoutUserInput[] | RoomParticipantUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RoomParticipantCreateOrConnectWithoutUserInput | RoomParticipantCreateOrConnectWithoutUserInput[]
    createMany?: RoomParticipantCreateManyUserInputEnvelope
    connect?: RoomParticipantWhereUniqueInput | RoomParticipantWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type MessagesUpdateManyWithoutSenderNestedInput = {
    create?: XOR<MessagesCreateWithoutSenderInput, MessagesUncheckedCreateWithoutSenderInput> | MessagesCreateWithoutSenderInput[] | MessagesUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: MessagesCreateOrConnectWithoutSenderInput | MessagesCreateOrConnectWithoutSenderInput[]
    upsert?: MessagesUpsertWithWhereUniqueWithoutSenderInput | MessagesUpsertWithWhereUniqueWithoutSenderInput[]
    createMany?: MessagesCreateManySenderInputEnvelope
    set?: MessagesWhereUniqueInput | MessagesWhereUniqueInput[]
    disconnect?: MessagesWhereUniqueInput | MessagesWhereUniqueInput[]
    delete?: MessagesWhereUniqueInput | MessagesWhereUniqueInput[]
    connect?: MessagesWhereUniqueInput | MessagesWhereUniqueInput[]
    update?: MessagesUpdateWithWhereUniqueWithoutSenderInput | MessagesUpdateWithWhereUniqueWithoutSenderInput[]
    updateMany?: MessagesUpdateManyWithWhereWithoutSenderInput | MessagesUpdateManyWithWhereWithoutSenderInput[]
    deleteMany?: MessagesScalarWhereInput | MessagesScalarWhereInput[]
  }

  export type RoomParticipantUpdateManyWithoutUserNestedInput = {
    create?: XOR<RoomParticipantCreateWithoutUserInput, RoomParticipantUncheckedCreateWithoutUserInput> | RoomParticipantCreateWithoutUserInput[] | RoomParticipantUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RoomParticipantCreateOrConnectWithoutUserInput | RoomParticipantCreateOrConnectWithoutUserInput[]
    upsert?: RoomParticipantUpsertWithWhereUniqueWithoutUserInput | RoomParticipantUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: RoomParticipantCreateManyUserInputEnvelope
    set?: RoomParticipantWhereUniqueInput | RoomParticipantWhereUniqueInput[]
    disconnect?: RoomParticipantWhereUniqueInput | RoomParticipantWhereUniqueInput[]
    delete?: RoomParticipantWhereUniqueInput | RoomParticipantWhereUniqueInput[]
    connect?: RoomParticipantWhereUniqueInput | RoomParticipantWhereUniqueInput[]
    update?: RoomParticipantUpdateWithWhereUniqueWithoutUserInput | RoomParticipantUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: RoomParticipantUpdateManyWithWhereWithoutUserInput | RoomParticipantUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: RoomParticipantScalarWhereInput | RoomParticipantScalarWhereInput[]
  }

  export type MessagesUncheckedUpdateManyWithoutSenderNestedInput = {
    create?: XOR<MessagesCreateWithoutSenderInput, MessagesUncheckedCreateWithoutSenderInput> | MessagesCreateWithoutSenderInput[] | MessagesUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: MessagesCreateOrConnectWithoutSenderInput | MessagesCreateOrConnectWithoutSenderInput[]
    upsert?: MessagesUpsertWithWhereUniqueWithoutSenderInput | MessagesUpsertWithWhereUniqueWithoutSenderInput[]
    createMany?: MessagesCreateManySenderInputEnvelope
    set?: MessagesWhereUniqueInput | MessagesWhereUniqueInput[]
    disconnect?: MessagesWhereUniqueInput | MessagesWhereUniqueInput[]
    delete?: MessagesWhereUniqueInput | MessagesWhereUniqueInput[]
    connect?: MessagesWhereUniqueInput | MessagesWhereUniqueInput[]
    update?: MessagesUpdateWithWhereUniqueWithoutSenderInput | MessagesUpdateWithWhereUniqueWithoutSenderInput[]
    updateMany?: MessagesUpdateManyWithWhereWithoutSenderInput | MessagesUpdateManyWithWhereWithoutSenderInput[]
    deleteMany?: MessagesScalarWhereInput | MessagesScalarWhereInput[]
  }

  export type RoomParticipantUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<RoomParticipantCreateWithoutUserInput, RoomParticipantUncheckedCreateWithoutUserInput> | RoomParticipantCreateWithoutUserInput[] | RoomParticipantUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RoomParticipantCreateOrConnectWithoutUserInput | RoomParticipantCreateOrConnectWithoutUserInput[]
    upsert?: RoomParticipantUpsertWithWhereUniqueWithoutUserInput | RoomParticipantUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: RoomParticipantCreateManyUserInputEnvelope
    set?: RoomParticipantWhereUniqueInput | RoomParticipantWhereUniqueInput[]
    disconnect?: RoomParticipantWhereUniqueInput | RoomParticipantWhereUniqueInput[]
    delete?: RoomParticipantWhereUniqueInput | RoomParticipantWhereUniqueInput[]
    connect?: RoomParticipantWhereUniqueInput | RoomParticipantWhereUniqueInput[]
    update?: RoomParticipantUpdateWithWhereUniqueWithoutUserInput | RoomParticipantUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: RoomParticipantUpdateManyWithWhereWithoutUserInput | RoomParticipantUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: RoomParticipantScalarWhereInput | RoomParticipantScalarWhereInput[]
  }

  export type MessagesCreateNestedManyWithoutRoomInput = {
    create?: XOR<MessagesCreateWithoutRoomInput, MessagesUncheckedCreateWithoutRoomInput> | MessagesCreateWithoutRoomInput[] | MessagesUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: MessagesCreateOrConnectWithoutRoomInput | MessagesCreateOrConnectWithoutRoomInput[]
    createMany?: MessagesCreateManyRoomInputEnvelope
    connect?: MessagesWhereUniqueInput | MessagesWhereUniqueInput[]
  }

  export type RoomParticipantCreateNestedManyWithoutRoomInput = {
    create?: XOR<RoomParticipantCreateWithoutRoomInput, RoomParticipantUncheckedCreateWithoutRoomInput> | RoomParticipantCreateWithoutRoomInput[] | RoomParticipantUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: RoomParticipantCreateOrConnectWithoutRoomInput | RoomParticipantCreateOrConnectWithoutRoomInput[]
    createMany?: RoomParticipantCreateManyRoomInputEnvelope
    connect?: RoomParticipantWhereUniqueInput | RoomParticipantWhereUniqueInput[]
  }

  export type MessagesUncheckedCreateNestedManyWithoutRoomInput = {
    create?: XOR<MessagesCreateWithoutRoomInput, MessagesUncheckedCreateWithoutRoomInput> | MessagesCreateWithoutRoomInput[] | MessagesUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: MessagesCreateOrConnectWithoutRoomInput | MessagesCreateOrConnectWithoutRoomInput[]
    createMany?: MessagesCreateManyRoomInputEnvelope
    connect?: MessagesWhereUniqueInput | MessagesWhereUniqueInput[]
  }

  export type RoomParticipantUncheckedCreateNestedManyWithoutRoomInput = {
    create?: XOR<RoomParticipantCreateWithoutRoomInput, RoomParticipantUncheckedCreateWithoutRoomInput> | RoomParticipantCreateWithoutRoomInput[] | RoomParticipantUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: RoomParticipantCreateOrConnectWithoutRoomInput | RoomParticipantCreateOrConnectWithoutRoomInput[]
    createMany?: RoomParticipantCreateManyRoomInputEnvelope
    connect?: RoomParticipantWhereUniqueInput | RoomParticipantWhereUniqueInput[]
  }

  export type MessagesUpdateManyWithoutRoomNestedInput = {
    create?: XOR<MessagesCreateWithoutRoomInput, MessagesUncheckedCreateWithoutRoomInput> | MessagesCreateWithoutRoomInput[] | MessagesUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: MessagesCreateOrConnectWithoutRoomInput | MessagesCreateOrConnectWithoutRoomInput[]
    upsert?: MessagesUpsertWithWhereUniqueWithoutRoomInput | MessagesUpsertWithWhereUniqueWithoutRoomInput[]
    createMany?: MessagesCreateManyRoomInputEnvelope
    set?: MessagesWhereUniqueInput | MessagesWhereUniqueInput[]
    disconnect?: MessagesWhereUniqueInput | MessagesWhereUniqueInput[]
    delete?: MessagesWhereUniqueInput | MessagesWhereUniqueInput[]
    connect?: MessagesWhereUniqueInput | MessagesWhereUniqueInput[]
    update?: MessagesUpdateWithWhereUniqueWithoutRoomInput | MessagesUpdateWithWhereUniqueWithoutRoomInput[]
    updateMany?: MessagesUpdateManyWithWhereWithoutRoomInput | MessagesUpdateManyWithWhereWithoutRoomInput[]
    deleteMany?: MessagesScalarWhereInput | MessagesScalarWhereInput[]
  }

  export type RoomParticipantUpdateManyWithoutRoomNestedInput = {
    create?: XOR<RoomParticipantCreateWithoutRoomInput, RoomParticipantUncheckedCreateWithoutRoomInput> | RoomParticipantCreateWithoutRoomInput[] | RoomParticipantUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: RoomParticipantCreateOrConnectWithoutRoomInput | RoomParticipantCreateOrConnectWithoutRoomInput[]
    upsert?: RoomParticipantUpsertWithWhereUniqueWithoutRoomInput | RoomParticipantUpsertWithWhereUniqueWithoutRoomInput[]
    createMany?: RoomParticipantCreateManyRoomInputEnvelope
    set?: RoomParticipantWhereUniqueInput | RoomParticipantWhereUniqueInput[]
    disconnect?: RoomParticipantWhereUniqueInput | RoomParticipantWhereUniqueInput[]
    delete?: RoomParticipantWhereUniqueInput | RoomParticipantWhereUniqueInput[]
    connect?: RoomParticipantWhereUniqueInput | RoomParticipantWhereUniqueInput[]
    update?: RoomParticipantUpdateWithWhereUniqueWithoutRoomInput | RoomParticipantUpdateWithWhereUniqueWithoutRoomInput[]
    updateMany?: RoomParticipantUpdateManyWithWhereWithoutRoomInput | RoomParticipantUpdateManyWithWhereWithoutRoomInput[]
    deleteMany?: RoomParticipantScalarWhereInput | RoomParticipantScalarWhereInput[]
  }

  export type MessagesUncheckedUpdateManyWithoutRoomNestedInput = {
    create?: XOR<MessagesCreateWithoutRoomInput, MessagesUncheckedCreateWithoutRoomInput> | MessagesCreateWithoutRoomInput[] | MessagesUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: MessagesCreateOrConnectWithoutRoomInput | MessagesCreateOrConnectWithoutRoomInput[]
    upsert?: MessagesUpsertWithWhereUniqueWithoutRoomInput | MessagesUpsertWithWhereUniqueWithoutRoomInput[]
    createMany?: MessagesCreateManyRoomInputEnvelope
    set?: MessagesWhereUniqueInput | MessagesWhereUniqueInput[]
    disconnect?: MessagesWhereUniqueInput | MessagesWhereUniqueInput[]
    delete?: MessagesWhereUniqueInput | MessagesWhereUniqueInput[]
    connect?: MessagesWhereUniqueInput | MessagesWhereUniqueInput[]
    update?: MessagesUpdateWithWhereUniqueWithoutRoomInput | MessagesUpdateWithWhereUniqueWithoutRoomInput[]
    updateMany?: MessagesUpdateManyWithWhereWithoutRoomInput | MessagesUpdateManyWithWhereWithoutRoomInput[]
    deleteMany?: MessagesScalarWhereInput | MessagesScalarWhereInput[]
  }

  export type RoomParticipantUncheckedUpdateManyWithoutRoomNestedInput = {
    create?: XOR<RoomParticipantCreateWithoutRoomInput, RoomParticipantUncheckedCreateWithoutRoomInput> | RoomParticipantCreateWithoutRoomInput[] | RoomParticipantUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: RoomParticipantCreateOrConnectWithoutRoomInput | RoomParticipantCreateOrConnectWithoutRoomInput[]
    upsert?: RoomParticipantUpsertWithWhereUniqueWithoutRoomInput | RoomParticipantUpsertWithWhereUniqueWithoutRoomInput[]
    createMany?: RoomParticipantCreateManyRoomInputEnvelope
    set?: RoomParticipantWhereUniqueInput | RoomParticipantWhereUniqueInput[]
    disconnect?: RoomParticipantWhereUniqueInput | RoomParticipantWhereUniqueInput[]
    delete?: RoomParticipantWhereUniqueInput | RoomParticipantWhereUniqueInput[]
    connect?: RoomParticipantWhereUniqueInput | RoomParticipantWhereUniqueInput[]
    update?: RoomParticipantUpdateWithWhereUniqueWithoutRoomInput | RoomParticipantUpdateWithWhereUniqueWithoutRoomInput[]
    updateMany?: RoomParticipantUpdateManyWithWhereWithoutRoomInput | RoomParticipantUpdateManyWithWhereWithoutRoomInput[]
    deleteMany?: RoomParticipantScalarWhereInput | RoomParticipantScalarWhereInput[]
  }

  export type RoomsCreateNestedOneWithoutParticipantsInput = {
    create?: XOR<RoomsCreateWithoutParticipantsInput, RoomsUncheckedCreateWithoutParticipantsInput>
    connectOrCreate?: RoomsCreateOrConnectWithoutParticipantsInput
    connect?: RoomsWhereUniqueInput
  }

  export type UsersCreateNestedOneWithoutUserInput = {
    create?: XOR<UsersCreateWithoutUserInput, UsersUncheckedCreateWithoutUserInput>
    connectOrCreate?: UsersCreateOrConnectWithoutUserInput
    connect?: UsersWhereUniqueInput
  }

  export type RoomsUpdateOneRequiredWithoutParticipantsNestedInput = {
    create?: XOR<RoomsCreateWithoutParticipantsInput, RoomsUncheckedCreateWithoutParticipantsInput>
    connectOrCreate?: RoomsCreateOrConnectWithoutParticipantsInput
    upsert?: RoomsUpsertWithoutParticipantsInput
    connect?: RoomsWhereUniqueInput
    update?: XOR<XOR<RoomsUpdateToOneWithWhereWithoutParticipantsInput, RoomsUpdateWithoutParticipantsInput>, RoomsUncheckedUpdateWithoutParticipantsInput>
  }

  export type UsersUpdateOneRequiredWithoutUserNestedInput = {
    create?: XOR<UsersCreateWithoutUserInput, UsersUncheckedCreateWithoutUserInput>
    connectOrCreate?: UsersCreateOrConnectWithoutUserInput
    upsert?: UsersUpsertWithoutUserInput
    connect?: UsersWhereUniqueInput
    update?: XOR<XOR<UsersUpdateToOneWithWhereWithoutUserInput, UsersUpdateWithoutUserInput>, UsersUncheckedUpdateWithoutUserInput>
  }

  export type UsersCreateNestedOneWithoutMessagesInput = {
    create?: XOR<UsersCreateWithoutMessagesInput, UsersUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: UsersCreateOrConnectWithoutMessagesInput
    connect?: UsersWhereUniqueInput
  }

  export type RoomsCreateNestedOneWithoutMessagesInput = {
    create?: XOR<RoomsCreateWithoutMessagesInput, RoomsUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: RoomsCreateOrConnectWithoutMessagesInput
    connect?: RoomsWhereUniqueInput
  }

  export type UsersUpdateOneRequiredWithoutMessagesNestedInput = {
    create?: XOR<UsersCreateWithoutMessagesInput, UsersUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: UsersCreateOrConnectWithoutMessagesInput
    upsert?: UsersUpsertWithoutMessagesInput
    connect?: UsersWhereUniqueInput
    update?: XOR<XOR<UsersUpdateToOneWithWhereWithoutMessagesInput, UsersUpdateWithoutMessagesInput>, UsersUncheckedUpdateWithoutMessagesInput>
  }

  export type RoomsUpdateOneRequiredWithoutMessagesNestedInput = {
    create?: XOR<RoomsCreateWithoutMessagesInput, RoomsUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: RoomsCreateOrConnectWithoutMessagesInput
    upsert?: RoomsUpsertWithoutMessagesInput
    connect?: RoomsWhereUniqueInput
    update?: XOR<XOR<RoomsUpdateToOneWithWhereWithoutMessagesInput, RoomsUpdateWithoutMessagesInput>, RoomsUncheckedUpdateWithoutMessagesInput>
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

  export type MessagesCreateWithoutSenderInput = {
    id?: string
    text: string
    created_at?: Date | string
    room: RoomsCreateNestedOneWithoutMessagesInput
  }

  export type MessagesUncheckedCreateWithoutSenderInput = {
    id?: string
    text: string
    room_id: string
    created_at?: Date | string
  }

  export type MessagesCreateOrConnectWithoutSenderInput = {
    where: MessagesWhereUniqueInput
    create: XOR<MessagesCreateWithoutSenderInput, MessagesUncheckedCreateWithoutSenderInput>
  }

  export type MessagesCreateManySenderInputEnvelope = {
    data: MessagesCreateManySenderInput | MessagesCreateManySenderInput[]
    skipDuplicates?: boolean
  }

  export type RoomParticipantCreateWithoutUserInput = {
    id?: string
    room: RoomsCreateNestedOneWithoutParticipantsInput
  }

  export type RoomParticipantUncheckedCreateWithoutUserInput = {
    id?: string
    room_id: string
  }

  export type RoomParticipantCreateOrConnectWithoutUserInput = {
    where: RoomParticipantWhereUniqueInput
    create: XOR<RoomParticipantCreateWithoutUserInput, RoomParticipantUncheckedCreateWithoutUserInput>
  }

  export type RoomParticipantCreateManyUserInputEnvelope = {
    data: RoomParticipantCreateManyUserInput | RoomParticipantCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type MessagesUpsertWithWhereUniqueWithoutSenderInput = {
    where: MessagesWhereUniqueInput
    update: XOR<MessagesUpdateWithoutSenderInput, MessagesUncheckedUpdateWithoutSenderInput>
    create: XOR<MessagesCreateWithoutSenderInput, MessagesUncheckedCreateWithoutSenderInput>
  }

  export type MessagesUpdateWithWhereUniqueWithoutSenderInput = {
    where: MessagesWhereUniqueInput
    data: XOR<MessagesUpdateWithoutSenderInput, MessagesUncheckedUpdateWithoutSenderInput>
  }

  export type MessagesUpdateManyWithWhereWithoutSenderInput = {
    where: MessagesScalarWhereInput
    data: XOR<MessagesUpdateManyMutationInput, MessagesUncheckedUpdateManyWithoutSenderInput>
  }

  export type MessagesScalarWhereInput = {
    AND?: MessagesScalarWhereInput | MessagesScalarWhereInput[]
    OR?: MessagesScalarWhereInput[]
    NOT?: MessagesScalarWhereInput | MessagesScalarWhereInput[]
    id?: StringFilter<"Messages"> | string
    text?: StringFilter<"Messages"> | string
    sender_id?: StringFilter<"Messages"> | string
    room_id?: StringFilter<"Messages"> | string
    created_at?: DateTimeFilter<"Messages"> | Date | string
  }

  export type RoomParticipantUpsertWithWhereUniqueWithoutUserInput = {
    where: RoomParticipantWhereUniqueInput
    update: XOR<RoomParticipantUpdateWithoutUserInput, RoomParticipantUncheckedUpdateWithoutUserInput>
    create: XOR<RoomParticipantCreateWithoutUserInput, RoomParticipantUncheckedCreateWithoutUserInput>
  }

  export type RoomParticipantUpdateWithWhereUniqueWithoutUserInput = {
    where: RoomParticipantWhereUniqueInput
    data: XOR<RoomParticipantUpdateWithoutUserInput, RoomParticipantUncheckedUpdateWithoutUserInput>
  }

  export type RoomParticipantUpdateManyWithWhereWithoutUserInput = {
    where: RoomParticipantScalarWhereInput
    data: XOR<RoomParticipantUpdateManyMutationInput, RoomParticipantUncheckedUpdateManyWithoutUserInput>
  }

  export type RoomParticipantScalarWhereInput = {
    AND?: RoomParticipantScalarWhereInput | RoomParticipantScalarWhereInput[]
    OR?: RoomParticipantScalarWhereInput[]
    NOT?: RoomParticipantScalarWhereInput | RoomParticipantScalarWhereInput[]
    id?: StringFilter<"RoomParticipant"> | string
    room_id?: StringFilter<"RoomParticipant"> | string
    user_id?: StringFilter<"RoomParticipant"> | string
  }

  export type MessagesCreateWithoutRoomInput = {
    id?: string
    text: string
    created_at?: Date | string
    sender: UsersCreateNestedOneWithoutMessagesInput
  }

  export type MessagesUncheckedCreateWithoutRoomInput = {
    id?: string
    text: string
    sender_id: string
    created_at?: Date | string
  }

  export type MessagesCreateOrConnectWithoutRoomInput = {
    where: MessagesWhereUniqueInput
    create: XOR<MessagesCreateWithoutRoomInput, MessagesUncheckedCreateWithoutRoomInput>
  }

  export type MessagesCreateManyRoomInputEnvelope = {
    data: MessagesCreateManyRoomInput | MessagesCreateManyRoomInput[]
    skipDuplicates?: boolean
  }

  export type RoomParticipantCreateWithoutRoomInput = {
    id?: string
    user: UsersCreateNestedOneWithoutUserInput
  }

  export type RoomParticipantUncheckedCreateWithoutRoomInput = {
    id?: string
    user_id: string
  }

  export type RoomParticipantCreateOrConnectWithoutRoomInput = {
    where: RoomParticipantWhereUniqueInput
    create: XOR<RoomParticipantCreateWithoutRoomInput, RoomParticipantUncheckedCreateWithoutRoomInput>
  }

  export type RoomParticipantCreateManyRoomInputEnvelope = {
    data: RoomParticipantCreateManyRoomInput | RoomParticipantCreateManyRoomInput[]
    skipDuplicates?: boolean
  }

  export type MessagesUpsertWithWhereUniqueWithoutRoomInput = {
    where: MessagesWhereUniqueInput
    update: XOR<MessagesUpdateWithoutRoomInput, MessagesUncheckedUpdateWithoutRoomInput>
    create: XOR<MessagesCreateWithoutRoomInput, MessagesUncheckedCreateWithoutRoomInput>
  }

  export type MessagesUpdateWithWhereUniqueWithoutRoomInput = {
    where: MessagesWhereUniqueInput
    data: XOR<MessagesUpdateWithoutRoomInput, MessagesUncheckedUpdateWithoutRoomInput>
  }

  export type MessagesUpdateManyWithWhereWithoutRoomInput = {
    where: MessagesScalarWhereInput
    data: XOR<MessagesUpdateManyMutationInput, MessagesUncheckedUpdateManyWithoutRoomInput>
  }

  export type RoomParticipantUpsertWithWhereUniqueWithoutRoomInput = {
    where: RoomParticipantWhereUniqueInput
    update: XOR<RoomParticipantUpdateWithoutRoomInput, RoomParticipantUncheckedUpdateWithoutRoomInput>
    create: XOR<RoomParticipantCreateWithoutRoomInput, RoomParticipantUncheckedCreateWithoutRoomInput>
  }

  export type RoomParticipantUpdateWithWhereUniqueWithoutRoomInput = {
    where: RoomParticipantWhereUniqueInput
    data: XOR<RoomParticipantUpdateWithoutRoomInput, RoomParticipantUncheckedUpdateWithoutRoomInput>
  }

  export type RoomParticipantUpdateManyWithWhereWithoutRoomInput = {
    where: RoomParticipantScalarWhereInput
    data: XOR<RoomParticipantUpdateManyMutationInput, RoomParticipantUncheckedUpdateManyWithoutRoomInput>
  }

  export type RoomsCreateWithoutParticipantsInput = {
    id?: string
    name: string
    created_at?: Date | string
    messages?: MessagesCreateNestedManyWithoutRoomInput
  }

  export type RoomsUncheckedCreateWithoutParticipantsInput = {
    id?: string
    name: string
    created_at?: Date | string
    messages?: MessagesUncheckedCreateNestedManyWithoutRoomInput
  }

  export type RoomsCreateOrConnectWithoutParticipantsInput = {
    where: RoomsWhereUniqueInput
    create: XOR<RoomsCreateWithoutParticipantsInput, RoomsUncheckedCreateWithoutParticipantsInput>
  }

  export type UsersCreateWithoutUserInput = {
    id?: string
    first_name: string
    last_name: string
    phone: string
    email: string
    password_hash: string
    created_at?: Date | string
    messages?: MessagesCreateNestedManyWithoutSenderInput
  }

  export type UsersUncheckedCreateWithoutUserInput = {
    id?: string
    first_name: string
    last_name: string
    phone: string
    email: string
    password_hash: string
    created_at?: Date | string
    messages?: MessagesUncheckedCreateNestedManyWithoutSenderInput
  }

  export type UsersCreateOrConnectWithoutUserInput = {
    where: UsersWhereUniqueInput
    create: XOR<UsersCreateWithoutUserInput, UsersUncheckedCreateWithoutUserInput>
  }

  export type RoomsUpsertWithoutParticipantsInput = {
    update: XOR<RoomsUpdateWithoutParticipantsInput, RoomsUncheckedUpdateWithoutParticipantsInput>
    create: XOR<RoomsCreateWithoutParticipantsInput, RoomsUncheckedCreateWithoutParticipantsInput>
    where?: RoomsWhereInput
  }

  export type RoomsUpdateToOneWithWhereWithoutParticipantsInput = {
    where?: RoomsWhereInput
    data: XOR<RoomsUpdateWithoutParticipantsInput, RoomsUncheckedUpdateWithoutParticipantsInput>
  }

  export type RoomsUpdateWithoutParticipantsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    messages?: MessagesUpdateManyWithoutRoomNestedInput
  }

  export type RoomsUncheckedUpdateWithoutParticipantsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    messages?: MessagesUncheckedUpdateManyWithoutRoomNestedInput
  }

  export type UsersUpsertWithoutUserInput = {
    update: XOR<UsersUpdateWithoutUserInput, UsersUncheckedUpdateWithoutUserInput>
    create: XOR<UsersCreateWithoutUserInput, UsersUncheckedCreateWithoutUserInput>
    where?: UsersWhereInput
  }

  export type UsersUpdateToOneWithWhereWithoutUserInput = {
    where?: UsersWhereInput
    data: XOR<UsersUpdateWithoutUserInput, UsersUncheckedUpdateWithoutUserInput>
  }

  export type UsersUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    messages?: MessagesUpdateManyWithoutSenderNestedInput
  }

  export type UsersUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    messages?: MessagesUncheckedUpdateManyWithoutSenderNestedInput
  }

  export type UsersCreateWithoutMessagesInput = {
    id?: string
    first_name: string
    last_name: string
    phone: string
    email: string
    password_hash: string
    created_at?: Date | string
    user?: RoomParticipantCreateNestedManyWithoutUserInput
  }

  export type UsersUncheckedCreateWithoutMessagesInput = {
    id?: string
    first_name: string
    last_name: string
    phone: string
    email: string
    password_hash: string
    created_at?: Date | string
    user?: RoomParticipantUncheckedCreateNestedManyWithoutUserInput
  }

  export type UsersCreateOrConnectWithoutMessagesInput = {
    where: UsersWhereUniqueInput
    create: XOR<UsersCreateWithoutMessagesInput, UsersUncheckedCreateWithoutMessagesInput>
  }

  export type RoomsCreateWithoutMessagesInput = {
    id?: string
    name: string
    created_at?: Date | string
    participants?: RoomParticipantCreateNestedManyWithoutRoomInput
  }

  export type RoomsUncheckedCreateWithoutMessagesInput = {
    id?: string
    name: string
    created_at?: Date | string
    participants?: RoomParticipantUncheckedCreateNestedManyWithoutRoomInput
  }

  export type RoomsCreateOrConnectWithoutMessagesInput = {
    where: RoomsWhereUniqueInput
    create: XOR<RoomsCreateWithoutMessagesInput, RoomsUncheckedCreateWithoutMessagesInput>
  }

  export type UsersUpsertWithoutMessagesInput = {
    update: XOR<UsersUpdateWithoutMessagesInput, UsersUncheckedUpdateWithoutMessagesInput>
    create: XOR<UsersCreateWithoutMessagesInput, UsersUncheckedCreateWithoutMessagesInput>
    where?: UsersWhereInput
  }

  export type UsersUpdateToOneWithWhereWithoutMessagesInput = {
    where?: UsersWhereInput
    data: XOR<UsersUpdateWithoutMessagesInput, UsersUncheckedUpdateWithoutMessagesInput>
  }

  export type UsersUpdateWithoutMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: RoomParticipantUpdateManyWithoutUserNestedInput
  }

  export type UsersUncheckedUpdateWithoutMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: RoomParticipantUncheckedUpdateManyWithoutUserNestedInput
  }

  export type RoomsUpsertWithoutMessagesInput = {
    update: XOR<RoomsUpdateWithoutMessagesInput, RoomsUncheckedUpdateWithoutMessagesInput>
    create: XOR<RoomsCreateWithoutMessagesInput, RoomsUncheckedCreateWithoutMessagesInput>
    where?: RoomsWhereInput
  }

  export type RoomsUpdateToOneWithWhereWithoutMessagesInput = {
    where?: RoomsWhereInput
    data: XOR<RoomsUpdateWithoutMessagesInput, RoomsUncheckedUpdateWithoutMessagesInput>
  }

  export type RoomsUpdateWithoutMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    participants?: RoomParticipantUpdateManyWithoutRoomNestedInput
  }

  export type RoomsUncheckedUpdateWithoutMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    participants?: RoomParticipantUncheckedUpdateManyWithoutRoomNestedInput
  }

  export type MessagesCreateManySenderInput = {
    id?: string
    text: string
    room_id: string
    created_at?: Date | string
  }

  export type RoomParticipantCreateManyUserInput = {
    id?: string
    room_id: string
  }

  export type MessagesUpdateWithoutSenderInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    room?: RoomsUpdateOneRequiredWithoutMessagesNestedInput
  }

  export type MessagesUncheckedUpdateWithoutSenderInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    room_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessagesUncheckedUpdateManyWithoutSenderInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    room_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoomParticipantUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    room?: RoomsUpdateOneRequiredWithoutParticipantsNestedInput
  }

  export type RoomParticipantUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    room_id?: StringFieldUpdateOperationsInput | string
  }

  export type RoomParticipantUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    room_id?: StringFieldUpdateOperationsInput | string
  }

  export type MessagesCreateManyRoomInput = {
    id?: string
    text: string
    sender_id: string
    created_at?: Date | string
  }

  export type RoomParticipantCreateManyRoomInput = {
    id?: string
    user_id: string
  }

  export type MessagesUpdateWithoutRoomInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    sender?: UsersUpdateOneRequiredWithoutMessagesNestedInput
  }

  export type MessagesUncheckedUpdateWithoutRoomInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    sender_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessagesUncheckedUpdateManyWithoutRoomInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    sender_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoomParticipantUpdateWithoutRoomInput = {
    id?: StringFieldUpdateOperationsInput | string
    user?: UsersUpdateOneRequiredWithoutUserNestedInput
  }

  export type RoomParticipantUncheckedUpdateWithoutRoomInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
  }

  export type RoomParticipantUncheckedUpdateManyWithoutRoomInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
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