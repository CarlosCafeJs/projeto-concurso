
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
 * Model Questao
 * 
 */
export type Questao = $Result.DefaultSelection<Prisma.$QuestaoPayload>
/**
 * Model Alternativa
 * 
 */
export type Alternativa = $Result.DefaultSelection<Prisma.$AlternativaPayload>
/**
 * Model Comentario
 * 
 */
export type Comentario = $Result.DefaultSelection<Prisma.$ComentarioPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Questaos
 * const questaos = await prisma.questao.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Questaos
   * const questaos = await prisma.questao.findMany()
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
   * `prisma.questao`: Exposes CRUD operations for the **Questao** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Questaos
    * const questaos = await prisma.questao.findMany()
    * ```
    */
  get questao(): Prisma.QuestaoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.alternativa`: Exposes CRUD operations for the **Alternativa** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Alternativas
    * const alternativas = await prisma.alternativa.findMany()
    * ```
    */
  get alternativa(): Prisma.AlternativaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.comentario`: Exposes CRUD operations for the **Comentario** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Comentarios
    * const comentarios = await prisma.comentario.findMany()
    * ```
    */
  get comentario(): Prisma.ComentarioDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
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
    Questao: 'Questao',
    Alternativa: 'Alternativa',
    Comentario: 'Comentario'
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
      modelProps: "questao" | "alternativa" | "comentario"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Questao: {
        payload: Prisma.$QuestaoPayload<ExtArgs>
        fields: Prisma.QuestaoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.QuestaoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestaoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.QuestaoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestaoPayload>
          }
          findFirst: {
            args: Prisma.QuestaoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestaoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.QuestaoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestaoPayload>
          }
          findMany: {
            args: Prisma.QuestaoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestaoPayload>[]
          }
          create: {
            args: Prisma.QuestaoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestaoPayload>
          }
          createMany: {
            args: Prisma.QuestaoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.QuestaoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestaoPayload>[]
          }
          delete: {
            args: Prisma.QuestaoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestaoPayload>
          }
          update: {
            args: Prisma.QuestaoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestaoPayload>
          }
          deleteMany: {
            args: Prisma.QuestaoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.QuestaoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.QuestaoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestaoPayload>[]
          }
          upsert: {
            args: Prisma.QuestaoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestaoPayload>
          }
          aggregate: {
            args: Prisma.QuestaoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateQuestao>
          }
          groupBy: {
            args: Prisma.QuestaoGroupByArgs<ExtArgs>
            result: $Utils.Optional<QuestaoGroupByOutputType>[]
          }
          count: {
            args: Prisma.QuestaoCountArgs<ExtArgs>
            result: $Utils.Optional<QuestaoCountAggregateOutputType> | number
          }
        }
      }
      Alternativa: {
        payload: Prisma.$AlternativaPayload<ExtArgs>
        fields: Prisma.AlternativaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AlternativaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlternativaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AlternativaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlternativaPayload>
          }
          findFirst: {
            args: Prisma.AlternativaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlternativaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AlternativaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlternativaPayload>
          }
          findMany: {
            args: Prisma.AlternativaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlternativaPayload>[]
          }
          create: {
            args: Prisma.AlternativaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlternativaPayload>
          }
          createMany: {
            args: Prisma.AlternativaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AlternativaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlternativaPayload>[]
          }
          delete: {
            args: Prisma.AlternativaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlternativaPayload>
          }
          update: {
            args: Prisma.AlternativaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlternativaPayload>
          }
          deleteMany: {
            args: Prisma.AlternativaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AlternativaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AlternativaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlternativaPayload>[]
          }
          upsert: {
            args: Prisma.AlternativaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlternativaPayload>
          }
          aggregate: {
            args: Prisma.AlternativaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAlternativa>
          }
          groupBy: {
            args: Prisma.AlternativaGroupByArgs<ExtArgs>
            result: $Utils.Optional<AlternativaGroupByOutputType>[]
          }
          count: {
            args: Prisma.AlternativaCountArgs<ExtArgs>
            result: $Utils.Optional<AlternativaCountAggregateOutputType> | number
          }
        }
      }
      Comentario: {
        payload: Prisma.$ComentarioPayload<ExtArgs>
        fields: Prisma.ComentarioFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ComentarioFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComentarioPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ComentarioFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComentarioPayload>
          }
          findFirst: {
            args: Prisma.ComentarioFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComentarioPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ComentarioFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComentarioPayload>
          }
          findMany: {
            args: Prisma.ComentarioFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComentarioPayload>[]
          }
          create: {
            args: Prisma.ComentarioCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComentarioPayload>
          }
          createMany: {
            args: Prisma.ComentarioCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ComentarioCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComentarioPayload>[]
          }
          delete: {
            args: Prisma.ComentarioDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComentarioPayload>
          }
          update: {
            args: Prisma.ComentarioUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComentarioPayload>
          }
          deleteMany: {
            args: Prisma.ComentarioDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ComentarioUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ComentarioUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComentarioPayload>[]
          }
          upsert: {
            args: Prisma.ComentarioUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComentarioPayload>
          }
          aggregate: {
            args: Prisma.ComentarioAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateComentario>
          }
          groupBy: {
            args: Prisma.ComentarioGroupByArgs<ExtArgs>
            result: $Utils.Optional<ComentarioGroupByOutputType>[]
          }
          count: {
            args: Prisma.ComentarioCountArgs<ExtArgs>
            result: $Utils.Optional<ComentarioCountAggregateOutputType> | number
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
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
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
    questao?: QuestaoOmit
    alternativa?: AlternativaOmit
    comentario?: ComentarioOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

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
   * Count Type QuestaoCountOutputType
   */

  export type QuestaoCountOutputType = {
    alternativas: number
    comentarios: number
  }

  export type QuestaoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    alternativas?: boolean | QuestaoCountOutputTypeCountAlternativasArgs
    comentarios?: boolean | QuestaoCountOutputTypeCountComentariosArgs
  }

  // Custom InputTypes
  /**
   * QuestaoCountOutputType without action
   */
  export type QuestaoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestaoCountOutputType
     */
    select?: QuestaoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * QuestaoCountOutputType without action
   */
  export type QuestaoCountOutputTypeCountAlternativasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AlternativaWhereInput
  }

  /**
   * QuestaoCountOutputType without action
   */
  export type QuestaoCountOutputTypeCountComentariosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ComentarioWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Questao
   */

  export type AggregateQuestao = {
    _count: QuestaoCountAggregateOutputType | null
    _avg: QuestaoAvgAggregateOutputType | null
    _sum: QuestaoSumAggregateOutputType | null
    _min: QuestaoMinAggregateOutputType | null
    _max: QuestaoMaxAggregateOutputType | null
  }

  export type QuestaoAvgAggregateOutputType = {
    id: number | null
    peso: number | null
  }

  export type QuestaoSumAggregateOutputType = {
    id: number | null
    peso: number | null
  }

  export type QuestaoMinAggregateOutputType = {
    id: number | null
    enunciado: string | null
    assunto: string | null
    nivel_dificuldade: string | null
    referencia: string | null
    explicacao: string | null
    data_criacao: Date | null
    origem: string | null
    categoria_concurso: string | null
    peso: number | null
    categoria_assunto: string | null
    tempo_resposta_estipulado: string | null
  }

  export type QuestaoMaxAggregateOutputType = {
    id: number | null
    enunciado: string | null
    assunto: string | null
    nivel_dificuldade: string | null
    referencia: string | null
    explicacao: string | null
    data_criacao: Date | null
    origem: string | null
    categoria_concurso: string | null
    peso: number | null
    categoria_assunto: string | null
    tempo_resposta_estipulado: string | null
  }

  export type QuestaoCountAggregateOutputType = {
    id: number
    enunciado: number
    assunto: number
    nivel_dificuldade: number
    referencia: number
    explicacao: number
    tags: number
    data_criacao: number
    origem: number
    categoria_concurso: number
    peso: number
    categoria_assunto: number
    tempo_resposta_estipulado: number
    _all: number
  }


  export type QuestaoAvgAggregateInputType = {
    id?: true
    peso?: true
  }

  export type QuestaoSumAggregateInputType = {
    id?: true
    peso?: true
  }

  export type QuestaoMinAggregateInputType = {
    id?: true
    enunciado?: true
    assunto?: true
    nivel_dificuldade?: true
    referencia?: true
    explicacao?: true
    data_criacao?: true
    origem?: true
    categoria_concurso?: true
    peso?: true
    categoria_assunto?: true
    tempo_resposta_estipulado?: true
  }

  export type QuestaoMaxAggregateInputType = {
    id?: true
    enunciado?: true
    assunto?: true
    nivel_dificuldade?: true
    referencia?: true
    explicacao?: true
    data_criacao?: true
    origem?: true
    categoria_concurso?: true
    peso?: true
    categoria_assunto?: true
    tempo_resposta_estipulado?: true
  }

  export type QuestaoCountAggregateInputType = {
    id?: true
    enunciado?: true
    assunto?: true
    nivel_dificuldade?: true
    referencia?: true
    explicacao?: true
    tags?: true
    data_criacao?: true
    origem?: true
    categoria_concurso?: true
    peso?: true
    categoria_assunto?: true
    tempo_resposta_estipulado?: true
    _all?: true
  }

  export type QuestaoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Questao to aggregate.
     */
    where?: QuestaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Questaos to fetch.
     */
    orderBy?: QuestaoOrderByWithRelationInput | QuestaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: QuestaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Questaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Questaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Questaos
    **/
    _count?: true | QuestaoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: QuestaoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: QuestaoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: QuestaoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: QuestaoMaxAggregateInputType
  }

  export type GetQuestaoAggregateType<T extends QuestaoAggregateArgs> = {
        [P in keyof T & keyof AggregateQuestao]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateQuestao[P]>
      : GetScalarType<T[P], AggregateQuestao[P]>
  }




  export type QuestaoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuestaoWhereInput
    orderBy?: QuestaoOrderByWithAggregationInput | QuestaoOrderByWithAggregationInput[]
    by: QuestaoScalarFieldEnum[] | QuestaoScalarFieldEnum
    having?: QuestaoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: QuestaoCountAggregateInputType | true
    _avg?: QuestaoAvgAggregateInputType
    _sum?: QuestaoSumAggregateInputType
    _min?: QuestaoMinAggregateInputType
    _max?: QuestaoMaxAggregateInputType
  }

  export type QuestaoGroupByOutputType = {
    id: number
    enunciado: string
    assunto: string
    nivel_dificuldade: string
    referencia: string
    explicacao: string
    tags: string[]
    data_criacao: Date
    origem: string
    categoria_concurso: string
    peso: number
    categoria_assunto: string
    tempo_resposta_estipulado: string
    _count: QuestaoCountAggregateOutputType | null
    _avg: QuestaoAvgAggregateOutputType | null
    _sum: QuestaoSumAggregateOutputType | null
    _min: QuestaoMinAggregateOutputType | null
    _max: QuestaoMaxAggregateOutputType | null
  }

  type GetQuestaoGroupByPayload<T extends QuestaoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<QuestaoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof QuestaoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], QuestaoGroupByOutputType[P]>
            : GetScalarType<T[P], QuestaoGroupByOutputType[P]>
        }
      >
    >


  export type QuestaoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    enunciado?: boolean
    assunto?: boolean
    nivel_dificuldade?: boolean
    referencia?: boolean
    explicacao?: boolean
    tags?: boolean
    data_criacao?: boolean
    origem?: boolean
    categoria_concurso?: boolean
    peso?: boolean
    categoria_assunto?: boolean
    tempo_resposta_estipulado?: boolean
    alternativas?: boolean | Questao$alternativasArgs<ExtArgs>
    comentarios?: boolean | Questao$comentariosArgs<ExtArgs>
    _count?: boolean | QuestaoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["questao"]>

  export type QuestaoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    enunciado?: boolean
    assunto?: boolean
    nivel_dificuldade?: boolean
    referencia?: boolean
    explicacao?: boolean
    tags?: boolean
    data_criacao?: boolean
    origem?: boolean
    categoria_concurso?: boolean
    peso?: boolean
    categoria_assunto?: boolean
    tempo_resposta_estipulado?: boolean
  }, ExtArgs["result"]["questao"]>

  export type QuestaoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    enunciado?: boolean
    assunto?: boolean
    nivel_dificuldade?: boolean
    referencia?: boolean
    explicacao?: boolean
    tags?: boolean
    data_criacao?: boolean
    origem?: boolean
    categoria_concurso?: boolean
    peso?: boolean
    categoria_assunto?: boolean
    tempo_resposta_estipulado?: boolean
  }, ExtArgs["result"]["questao"]>

  export type QuestaoSelectScalar = {
    id?: boolean
    enunciado?: boolean
    assunto?: boolean
    nivel_dificuldade?: boolean
    referencia?: boolean
    explicacao?: boolean
    tags?: boolean
    data_criacao?: boolean
    origem?: boolean
    categoria_concurso?: boolean
    peso?: boolean
    categoria_assunto?: boolean
    tempo_resposta_estipulado?: boolean
  }

  export type QuestaoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "enunciado" | "assunto" | "nivel_dificuldade" | "referencia" | "explicacao" | "tags" | "data_criacao" | "origem" | "categoria_concurso" | "peso" | "categoria_assunto" | "tempo_resposta_estipulado", ExtArgs["result"]["questao"]>
  export type QuestaoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    alternativas?: boolean | Questao$alternativasArgs<ExtArgs>
    comentarios?: boolean | Questao$comentariosArgs<ExtArgs>
    _count?: boolean | QuestaoCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type QuestaoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type QuestaoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $QuestaoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Questao"
    objects: {
      alternativas: Prisma.$AlternativaPayload<ExtArgs>[]
      comentarios: Prisma.$ComentarioPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      enunciado: string
      assunto: string
      nivel_dificuldade: string
      referencia: string
      explicacao: string
      tags: string[]
      data_criacao: Date
      origem: string
      categoria_concurso: string
      peso: number
      categoria_assunto: string
      tempo_resposta_estipulado: string
    }, ExtArgs["result"]["questao"]>
    composites: {}
  }

  type QuestaoGetPayload<S extends boolean | null | undefined | QuestaoDefaultArgs> = $Result.GetResult<Prisma.$QuestaoPayload, S>

  type QuestaoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<QuestaoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: QuestaoCountAggregateInputType | true
    }

  export interface QuestaoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Questao'], meta: { name: 'Questao' } }
    /**
     * Find zero or one Questao that matches the filter.
     * @param {QuestaoFindUniqueArgs} args - Arguments to find a Questao
     * @example
     * // Get one Questao
     * const questao = await prisma.questao.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends QuestaoFindUniqueArgs>(args: SelectSubset<T, QuestaoFindUniqueArgs<ExtArgs>>): Prisma__QuestaoClient<$Result.GetResult<Prisma.$QuestaoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Questao that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {QuestaoFindUniqueOrThrowArgs} args - Arguments to find a Questao
     * @example
     * // Get one Questao
     * const questao = await prisma.questao.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends QuestaoFindUniqueOrThrowArgs>(args: SelectSubset<T, QuestaoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__QuestaoClient<$Result.GetResult<Prisma.$QuestaoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Questao that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestaoFindFirstArgs} args - Arguments to find a Questao
     * @example
     * // Get one Questao
     * const questao = await prisma.questao.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends QuestaoFindFirstArgs>(args?: SelectSubset<T, QuestaoFindFirstArgs<ExtArgs>>): Prisma__QuestaoClient<$Result.GetResult<Prisma.$QuestaoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Questao that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestaoFindFirstOrThrowArgs} args - Arguments to find a Questao
     * @example
     * // Get one Questao
     * const questao = await prisma.questao.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends QuestaoFindFirstOrThrowArgs>(args?: SelectSubset<T, QuestaoFindFirstOrThrowArgs<ExtArgs>>): Prisma__QuestaoClient<$Result.GetResult<Prisma.$QuestaoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Questaos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestaoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Questaos
     * const questaos = await prisma.questao.findMany()
     * 
     * // Get first 10 Questaos
     * const questaos = await prisma.questao.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const questaoWithIdOnly = await prisma.questao.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends QuestaoFindManyArgs>(args?: SelectSubset<T, QuestaoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuestaoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Questao.
     * @param {QuestaoCreateArgs} args - Arguments to create a Questao.
     * @example
     * // Create one Questao
     * const Questao = await prisma.questao.create({
     *   data: {
     *     // ... data to create a Questao
     *   }
     * })
     * 
     */
    create<T extends QuestaoCreateArgs>(args: SelectSubset<T, QuestaoCreateArgs<ExtArgs>>): Prisma__QuestaoClient<$Result.GetResult<Prisma.$QuestaoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Questaos.
     * @param {QuestaoCreateManyArgs} args - Arguments to create many Questaos.
     * @example
     * // Create many Questaos
     * const questao = await prisma.questao.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends QuestaoCreateManyArgs>(args?: SelectSubset<T, QuestaoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Questaos and returns the data saved in the database.
     * @param {QuestaoCreateManyAndReturnArgs} args - Arguments to create many Questaos.
     * @example
     * // Create many Questaos
     * const questao = await prisma.questao.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Questaos and only return the `id`
     * const questaoWithIdOnly = await prisma.questao.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends QuestaoCreateManyAndReturnArgs>(args?: SelectSubset<T, QuestaoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuestaoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Questao.
     * @param {QuestaoDeleteArgs} args - Arguments to delete one Questao.
     * @example
     * // Delete one Questao
     * const Questao = await prisma.questao.delete({
     *   where: {
     *     // ... filter to delete one Questao
     *   }
     * })
     * 
     */
    delete<T extends QuestaoDeleteArgs>(args: SelectSubset<T, QuestaoDeleteArgs<ExtArgs>>): Prisma__QuestaoClient<$Result.GetResult<Prisma.$QuestaoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Questao.
     * @param {QuestaoUpdateArgs} args - Arguments to update one Questao.
     * @example
     * // Update one Questao
     * const questao = await prisma.questao.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends QuestaoUpdateArgs>(args: SelectSubset<T, QuestaoUpdateArgs<ExtArgs>>): Prisma__QuestaoClient<$Result.GetResult<Prisma.$QuestaoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Questaos.
     * @param {QuestaoDeleteManyArgs} args - Arguments to filter Questaos to delete.
     * @example
     * // Delete a few Questaos
     * const { count } = await prisma.questao.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends QuestaoDeleteManyArgs>(args?: SelectSubset<T, QuestaoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Questaos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestaoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Questaos
     * const questao = await prisma.questao.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends QuestaoUpdateManyArgs>(args: SelectSubset<T, QuestaoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Questaos and returns the data updated in the database.
     * @param {QuestaoUpdateManyAndReturnArgs} args - Arguments to update many Questaos.
     * @example
     * // Update many Questaos
     * const questao = await prisma.questao.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Questaos and only return the `id`
     * const questaoWithIdOnly = await prisma.questao.updateManyAndReturn({
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
    updateManyAndReturn<T extends QuestaoUpdateManyAndReturnArgs>(args: SelectSubset<T, QuestaoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuestaoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Questao.
     * @param {QuestaoUpsertArgs} args - Arguments to update or create a Questao.
     * @example
     * // Update or create a Questao
     * const questao = await prisma.questao.upsert({
     *   create: {
     *     // ... data to create a Questao
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Questao we want to update
     *   }
     * })
     */
    upsert<T extends QuestaoUpsertArgs>(args: SelectSubset<T, QuestaoUpsertArgs<ExtArgs>>): Prisma__QuestaoClient<$Result.GetResult<Prisma.$QuestaoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Questaos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestaoCountArgs} args - Arguments to filter Questaos to count.
     * @example
     * // Count the number of Questaos
     * const count = await prisma.questao.count({
     *   where: {
     *     // ... the filter for the Questaos we want to count
     *   }
     * })
    **/
    count<T extends QuestaoCountArgs>(
      args?: Subset<T, QuestaoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], QuestaoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Questao.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestaoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends QuestaoAggregateArgs>(args: Subset<T, QuestaoAggregateArgs>): Prisma.PrismaPromise<GetQuestaoAggregateType<T>>

    /**
     * Group by Questao.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestaoGroupByArgs} args - Group by arguments.
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
      T extends QuestaoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: QuestaoGroupByArgs['orderBy'] }
        : { orderBy?: QuestaoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, QuestaoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetQuestaoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Questao model
   */
  readonly fields: QuestaoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Questao.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__QuestaoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    alternativas<T extends Questao$alternativasArgs<ExtArgs> = {}>(args?: Subset<T, Questao$alternativasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AlternativaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    comentarios<T extends Questao$comentariosArgs<ExtArgs> = {}>(args?: Subset<T, Questao$comentariosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ComentarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Questao model
   */
  interface QuestaoFieldRefs {
    readonly id: FieldRef<"Questao", 'Int'>
    readonly enunciado: FieldRef<"Questao", 'String'>
    readonly assunto: FieldRef<"Questao", 'String'>
    readonly nivel_dificuldade: FieldRef<"Questao", 'String'>
    readonly referencia: FieldRef<"Questao", 'String'>
    readonly explicacao: FieldRef<"Questao", 'String'>
    readonly tags: FieldRef<"Questao", 'String[]'>
    readonly data_criacao: FieldRef<"Questao", 'DateTime'>
    readonly origem: FieldRef<"Questao", 'String'>
    readonly categoria_concurso: FieldRef<"Questao", 'String'>
    readonly peso: FieldRef<"Questao", 'Int'>
    readonly categoria_assunto: FieldRef<"Questao", 'String'>
    readonly tempo_resposta_estipulado: FieldRef<"Questao", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Questao findUnique
   */
  export type QuestaoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Questao
     */
    select?: QuestaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Questao
     */
    omit?: QuestaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestaoInclude<ExtArgs> | null
    /**
     * Filter, which Questao to fetch.
     */
    where: QuestaoWhereUniqueInput
  }

  /**
   * Questao findUniqueOrThrow
   */
  export type QuestaoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Questao
     */
    select?: QuestaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Questao
     */
    omit?: QuestaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestaoInclude<ExtArgs> | null
    /**
     * Filter, which Questao to fetch.
     */
    where: QuestaoWhereUniqueInput
  }

  /**
   * Questao findFirst
   */
  export type QuestaoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Questao
     */
    select?: QuestaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Questao
     */
    omit?: QuestaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestaoInclude<ExtArgs> | null
    /**
     * Filter, which Questao to fetch.
     */
    where?: QuestaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Questaos to fetch.
     */
    orderBy?: QuestaoOrderByWithRelationInput | QuestaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Questaos.
     */
    cursor?: QuestaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Questaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Questaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Questaos.
     */
    distinct?: QuestaoScalarFieldEnum | QuestaoScalarFieldEnum[]
  }

  /**
   * Questao findFirstOrThrow
   */
  export type QuestaoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Questao
     */
    select?: QuestaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Questao
     */
    omit?: QuestaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestaoInclude<ExtArgs> | null
    /**
     * Filter, which Questao to fetch.
     */
    where?: QuestaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Questaos to fetch.
     */
    orderBy?: QuestaoOrderByWithRelationInput | QuestaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Questaos.
     */
    cursor?: QuestaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Questaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Questaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Questaos.
     */
    distinct?: QuestaoScalarFieldEnum | QuestaoScalarFieldEnum[]
  }

  /**
   * Questao findMany
   */
  export type QuestaoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Questao
     */
    select?: QuestaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Questao
     */
    omit?: QuestaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestaoInclude<ExtArgs> | null
    /**
     * Filter, which Questaos to fetch.
     */
    where?: QuestaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Questaos to fetch.
     */
    orderBy?: QuestaoOrderByWithRelationInput | QuestaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Questaos.
     */
    cursor?: QuestaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Questaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Questaos.
     */
    skip?: number
    distinct?: QuestaoScalarFieldEnum | QuestaoScalarFieldEnum[]
  }

  /**
   * Questao create
   */
  export type QuestaoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Questao
     */
    select?: QuestaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Questao
     */
    omit?: QuestaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestaoInclude<ExtArgs> | null
    /**
     * The data needed to create a Questao.
     */
    data: XOR<QuestaoCreateInput, QuestaoUncheckedCreateInput>
  }

  /**
   * Questao createMany
   */
  export type QuestaoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Questaos.
     */
    data: QuestaoCreateManyInput | QuestaoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Questao createManyAndReturn
   */
  export type QuestaoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Questao
     */
    select?: QuestaoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Questao
     */
    omit?: QuestaoOmit<ExtArgs> | null
    /**
     * The data used to create many Questaos.
     */
    data: QuestaoCreateManyInput | QuestaoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Questao update
   */
  export type QuestaoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Questao
     */
    select?: QuestaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Questao
     */
    omit?: QuestaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestaoInclude<ExtArgs> | null
    /**
     * The data needed to update a Questao.
     */
    data: XOR<QuestaoUpdateInput, QuestaoUncheckedUpdateInput>
    /**
     * Choose, which Questao to update.
     */
    where: QuestaoWhereUniqueInput
  }

  /**
   * Questao updateMany
   */
  export type QuestaoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Questaos.
     */
    data: XOR<QuestaoUpdateManyMutationInput, QuestaoUncheckedUpdateManyInput>
    /**
     * Filter which Questaos to update
     */
    where?: QuestaoWhereInput
    /**
     * Limit how many Questaos to update.
     */
    limit?: number
  }

  /**
   * Questao updateManyAndReturn
   */
  export type QuestaoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Questao
     */
    select?: QuestaoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Questao
     */
    omit?: QuestaoOmit<ExtArgs> | null
    /**
     * The data used to update Questaos.
     */
    data: XOR<QuestaoUpdateManyMutationInput, QuestaoUncheckedUpdateManyInput>
    /**
     * Filter which Questaos to update
     */
    where?: QuestaoWhereInput
    /**
     * Limit how many Questaos to update.
     */
    limit?: number
  }

  /**
   * Questao upsert
   */
  export type QuestaoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Questao
     */
    select?: QuestaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Questao
     */
    omit?: QuestaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestaoInclude<ExtArgs> | null
    /**
     * The filter to search for the Questao to update in case it exists.
     */
    where: QuestaoWhereUniqueInput
    /**
     * In case the Questao found by the `where` argument doesn't exist, create a new Questao with this data.
     */
    create: XOR<QuestaoCreateInput, QuestaoUncheckedCreateInput>
    /**
     * In case the Questao was found with the provided `where` argument, update it with this data.
     */
    update: XOR<QuestaoUpdateInput, QuestaoUncheckedUpdateInput>
  }

  /**
   * Questao delete
   */
  export type QuestaoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Questao
     */
    select?: QuestaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Questao
     */
    omit?: QuestaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestaoInclude<ExtArgs> | null
    /**
     * Filter which Questao to delete.
     */
    where: QuestaoWhereUniqueInput
  }

  /**
   * Questao deleteMany
   */
  export type QuestaoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Questaos to delete
     */
    where?: QuestaoWhereInput
    /**
     * Limit how many Questaos to delete.
     */
    limit?: number
  }

  /**
   * Questao.alternativas
   */
  export type Questao$alternativasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alternativa
     */
    select?: AlternativaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alternativa
     */
    omit?: AlternativaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlternativaInclude<ExtArgs> | null
    where?: AlternativaWhereInput
    orderBy?: AlternativaOrderByWithRelationInput | AlternativaOrderByWithRelationInput[]
    cursor?: AlternativaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AlternativaScalarFieldEnum | AlternativaScalarFieldEnum[]
  }

  /**
   * Questao.comentarios
   */
  export type Questao$comentariosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comentario
     */
    select?: ComentarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comentario
     */
    omit?: ComentarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComentarioInclude<ExtArgs> | null
    where?: ComentarioWhereInput
    orderBy?: ComentarioOrderByWithRelationInput | ComentarioOrderByWithRelationInput[]
    cursor?: ComentarioWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ComentarioScalarFieldEnum | ComentarioScalarFieldEnum[]
  }

  /**
   * Questao without action
   */
  export type QuestaoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Questao
     */
    select?: QuestaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Questao
     */
    omit?: QuestaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestaoInclude<ExtArgs> | null
  }


  /**
   * Model Alternativa
   */

  export type AggregateAlternativa = {
    _count: AlternativaCountAggregateOutputType | null
    _avg: AlternativaAvgAggregateOutputType | null
    _sum: AlternativaSumAggregateOutputType | null
    _min: AlternativaMinAggregateOutputType | null
    _max: AlternativaMaxAggregateOutputType | null
  }

  export type AlternativaAvgAggregateOutputType = {
    id: number | null
    questaoId: number | null
  }

  export type AlternativaSumAggregateOutputType = {
    id: number | null
    questaoId: number | null
  }

  export type AlternativaMinAggregateOutputType = {
    id: number | null
    resposta: string | null
    correta: boolean | null
    questaoId: number | null
  }

  export type AlternativaMaxAggregateOutputType = {
    id: number | null
    resposta: string | null
    correta: boolean | null
    questaoId: number | null
  }

  export type AlternativaCountAggregateOutputType = {
    id: number
    resposta: number
    correta: number
    questaoId: number
    _all: number
  }


  export type AlternativaAvgAggregateInputType = {
    id?: true
    questaoId?: true
  }

  export type AlternativaSumAggregateInputType = {
    id?: true
    questaoId?: true
  }

  export type AlternativaMinAggregateInputType = {
    id?: true
    resposta?: true
    correta?: true
    questaoId?: true
  }

  export type AlternativaMaxAggregateInputType = {
    id?: true
    resposta?: true
    correta?: true
    questaoId?: true
  }

  export type AlternativaCountAggregateInputType = {
    id?: true
    resposta?: true
    correta?: true
    questaoId?: true
    _all?: true
  }

  export type AlternativaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Alternativa to aggregate.
     */
    where?: AlternativaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Alternativas to fetch.
     */
    orderBy?: AlternativaOrderByWithRelationInput | AlternativaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AlternativaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Alternativas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Alternativas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Alternativas
    **/
    _count?: true | AlternativaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AlternativaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AlternativaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AlternativaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AlternativaMaxAggregateInputType
  }

  export type GetAlternativaAggregateType<T extends AlternativaAggregateArgs> = {
        [P in keyof T & keyof AggregateAlternativa]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAlternativa[P]>
      : GetScalarType<T[P], AggregateAlternativa[P]>
  }




  export type AlternativaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AlternativaWhereInput
    orderBy?: AlternativaOrderByWithAggregationInput | AlternativaOrderByWithAggregationInput[]
    by: AlternativaScalarFieldEnum[] | AlternativaScalarFieldEnum
    having?: AlternativaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AlternativaCountAggregateInputType | true
    _avg?: AlternativaAvgAggregateInputType
    _sum?: AlternativaSumAggregateInputType
    _min?: AlternativaMinAggregateInputType
    _max?: AlternativaMaxAggregateInputType
  }

  export type AlternativaGroupByOutputType = {
    id: number
    resposta: string
    correta: boolean
    questaoId: number
    _count: AlternativaCountAggregateOutputType | null
    _avg: AlternativaAvgAggregateOutputType | null
    _sum: AlternativaSumAggregateOutputType | null
    _min: AlternativaMinAggregateOutputType | null
    _max: AlternativaMaxAggregateOutputType | null
  }

  type GetAlternativaGroupByPayload<T extends AlternativaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AlternativaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AlternativaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AlternativaGroupByOutputType[P]>
            : GetScalarType<T[P], AlternativaGroupByOutputType[P]>
        }
      >
    >


  export type AlternativaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    resposta?: boolean
    correta?: boolean
    questaoId?: boolean
    questao?: boolean | QuestaoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["alternativa"]>

  export type AlternativaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    resposta?: boolean
    correta?: boolean
    questaoId?: boolean
    questao?: boolean | QuestaoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["alternativa"]>

  export type AlternativaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    resposta?: boolean
    correta?: boolean
    questaoId?: boolean
    questao?: boolean | QuestaoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["alternativa"]>

  export type AlternativaSelectScalar = {
    id?: boolean
    resposta?: boolean
    correta?: boolean
    questaoId?: boolean
  }

  export type AlternativaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "resposta" | "correta" | "questaoId", ExtArgs["result"]["alternativa"]>
  export type AlternativaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    questao?: boolean | QuestaoDefaultArgs<ExtArgs>
  }
  export type AlternativaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    questao?: boolean | QuestaoDefaultArgs<ExtArgs>
  }
  export type AlternativaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    questao?: boolean | QuestaoDefaultArgs<ExtArgs>
  }

  export type $AlternativaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Alternativa"
    objects: {
      questao: Prisma.$QuestaoPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      resposta: string
      correta: boolean
      questaoId: number
    }, ExtArgs["result"]["alternativa"]>
    composites: {}
  }

  type AlternativaGetPayload<S extends boolean | null | undefined | AlternativaDefaultArgs> = $Result.GetResult<Prisma.$AlternativaPayload, S>

  type AlternativaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AlternativaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AlternativaCountAggregateInputType | true
    }

  export interface AlternativaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Alternativa'], meta: { name: 'Alternativa' } }
    /**
     * Find zero or one Alternativa that matches the filter.
     * @param {AlternativaFindUniqueArgs} args - Arguments to find a Alternativa
     * @example
     * // Get one Alternativa
     * const alternativa = await prisma.alternativa.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AlternativaFindUniqueArgs>(args: SelectSubset<T, AlternativaFindUniqueArgs<ExtArgs>>): Prisma__AlternativaClient<$Result.GetResult<Prisma.$AlternativaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Alternativa that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AlternativaFindUniqueOrThrowArgs} args - Arguments to find a Alternativa
     * @example
     * // Get one Alternativa
     * const alternativa = await prisma.alternativa.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AlternativaFindUniqueOrThrowArgs>(args: SelectSubset<T, AlternativaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AlternativaClient<$Result.GetResult<Prisma.$AlternativaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Alternativa that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlternativaFindFirstArgs} args - Arguments to find a Alternativa
     * @example
     * // Get one Alternativa
     * const alternativa = await prisma.alternativa.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AlternativaFindFirstArgs>(args?: SelectSubset<T, AlternativaFindFirstArgs<ExtArgs>>): Prisma__AlternativaClient<$Result.GetResult<Prisma.$AlternativaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Alternativa that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlternativaFindFirstOrThrowArgs} args - Arguments to find a Alternativa
     * @example
     * // Get one Alternativa
     * const alternativa = await prisma.alternativa.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AlternativaFindFirstOrThrowArgs>(args?: SelectSubset<T, AlternativaFindFirstOrThrowArgs<ExtArgs>>): Prisma__AlternativaClient<$Result.GetResult<Prisma.$AlternativaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Alternativas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlternativaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Alternativas
     * const alternativas = await prisma.alternativa.findMany()
     * 
     * // Get first 10 Alternativas
     * const alternativas = await prisma.alternativa.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const alternativaWithIdOnly = await prisma.alternativa.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AlternativaFindManyArgs>(args?: SelectSubset<T, AlternativaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AlternativaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Alternativa.
     * @param {AlternativaCreateArgs} args - Arguments to create a Alternativa.
     * @example
     * // Create one Alternativa
     * const Alternativa = await prisma.alternativa.create({
     *   data: {
     *     // ... data to create a Alternativa
     *   }
     * })
     * 
     */
    create<T extends AlternativaCreateArgs>(args: SelectSubset<T, AlternativaCreateArgs<ExtArgs>>): Prisma__AlternativaClient<$Result.GetResult<Prisma.$AlternativaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Alternativas.
     * @param {AlternativaCreateManyArgs} args - Arguments to create many Alternativas.
     * @example
     * // Create many Alternativas
     * const alternativa = await prisma.alternativa.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AlternativaCreateManyArgs>(args?: SelectSubset<T, AlternativaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Alternativas and returns the data saved in the database.
     * @param {AlternativaCreateManyAndReturnArgs} args - Arguments to create many Alternativas.
     * @example
     * // Create many Alternativas
     * const alternativa = await prisma.alternativa.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Alternativas and only return the `id`
     * const alternativaWithIdOnly = await prisma.alternativa.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AlternativaCreateManyAndReturnArgs>(args?: SelectSubset<T, AlternativaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AlternativaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Alternativa.
     * @param {AlternativaDeleteArgs} args - Arguments to delete one Alternativa.
     * @example
     * // Delete one Alternativa
     * const Alternativa = await prisma.alternativa.delete({
     *   where: {
     *     // ... filter to delete one Alternativa
     *   }
     * })
     * 
     */
    delete<T extends AlternativaDeleteArgs>(args: SelectSubset<T, AlternativaDeleteArgs<ExtArgs>>): Prisma__AlternativaClient<$Result.GetResult<Prisma.$AlternativaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Alternativa.
     * @param {AlternativaUpdateArgs} args - Arguments to update one Alternativa.
     * @example
     * // Update one Alternativa
     * const alternativa = await prisma.alternativa.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AlternativaUpdateArgs>(args: SelectSubset<T, AlternativaUpdateArgs<ExtArgs>>): Prisma__AlternativaClient<$Result.GetResult<Prisma.$AlternativaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Alternativas.
     * @param {AlternativaDeleteManyArgs} args - Arguments to filter Alternativas to delete.
     * @example
     * // Delete a few Alternativas
     * const { count } = await prisma.alternativa.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AlternativaDeleteManyArgs>(args?: SelectSubset<T, AlternativaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Alternativas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlternativaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Alternativas
     * const alternativa = await prisma.alternativa.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AlternativaUpdateManyArgs>(args: SelectSubset<T, AlternativaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Alternativas and returns the data updated in the database.
     * @param {AlternativaUpdateManyAndReturnArgs} args - Arguments to update many Alternativas.
     * @example
     * // Update many Alternativas
     * const alternativa = await prisma.alternativa.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Alternativas and only return the `id`
     * const alternativaWithIdOnly = await prisma.alternativa.updateManyAndReturn({
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
    updateManyAndReturn<T extends AlternativaUpdateManyAndReturnArgs>(args: SelectSubset<T, AlternativaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AlternativaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Alternativa.
     * @param {AlternativaUpsertArgs} args - Arguments to update or create a Alternativa.
     * @example
     * // Update or create a Alternativa
     * const alternativa = await prisma.alternativa.upsert({
     *   create: {
     *     // ... data to create a Alternativa
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Alternativa we want to update
     *   }
     * })
     */
    upsert<T extends AlternativaUpsertArgs>(args: SelectSubset<T, AlternativaUpsertArgs<ExtArgs>>): Prisma__AlternativaClient<$Result.GetResult<Prisma.$AlternativaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Alternativas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlternativaCountArgs} args - Arguments to filter Alternativas to count.
     * @example
     * // Count the number of Alternativas
     * const count = await prisma.alternativa.count({
     *   where: {
     *     // ... the filter for the Alternativas we want to count
     *   }
     * })
    **/
    count<T extends AlternativaCountArgs>(
      args?: Subset<T, AlternativaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AlternativaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Alternativa.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlternativaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AlternativaAggregateArgs>(args: Subset<T, AlternativaAggregateArgs>): Prisma.PrismaPromise<GetAlternativaAggregateType<T>>

    /**
     * Group by Alternativa.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlternativaGroupByArgs} args - Group by arguments.
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
      T extends AlternativaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AlternativaGroupByArgs['orderBy'] }
        : { orderBy?: AlternativaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AlternativaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAlternativaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Alternativa model
   */
  readonly fields: AlternativaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Alternativa.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AlternativaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    questao<T extends QuestaoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, QuestaoDefaultArgs<ExtArgs>>): Prisma__QuestaoClient<$Result.GetResult<Prisma.$QuestaoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Alternativa model
   */
  interface AlternativaFieldRefs {
    readonly id: FieldRef<"Alternativa", 'Int'>
    readonly resposta: FieldRef<"Alternativa", 'String'>
    readonly correta: FieldRef<"Alternativa", 'Boolean'>
    readonly questaoId: FieldRef<"Alternativa", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Alternativa findUnique
   */
  export type AlternativaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alternativa
     */
    select?: AlternativaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alternativa
     */
    omit?: AlternativaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlternativaInclude<ExtArgs> | null
    /**
     * Filter, which Alternativa to fetch.
     */
    where: AlternativaWhereUniqueInput
  }

  /**
   * Alternativa findUniqueOrThrow
   */
  export type AlternativaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alternativa
     */
    select?: AlternativaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alternativa
     */
    omit?: AlternativaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlternativaInclude<ExtArgs> | null
    /**
     * Filter, which Alternativa to fetch.
     */
    where: AlternativaWhereUniqueInput
  }

  /**
   * Alternativa findFirst
   */
  export type AlternativaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alternativa
     */
    select?: AlternativaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alternativa
     */
    omit?: AlternativaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlternativaInclude<ExtArgs> | null
    /**
     * Filter, which Alternativa to fetch.
     */
    where?: AlternativaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Alternativas to fetch.
     */
    orderBy?: AlternativaOrderByWithRelationInput | AlternativaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Alternativas.
     */
    cursor?: AlternativaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Alternativas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Alternativas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Alternativas.
     */
    distinct?: AlternativaScalarFieldEnum | AlternativaScalarFieldEnum[]
  }

  /**
   * Alternativa findFirstOrThrow
   */
  export type AlternativaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alternativa
     */
    select?: AlternativaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alternativa
     */
    omit?: AlternativaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlternativaInclude<ExtArgs> | null
    /**
     * Filter, which Alternativa to fetch.
     */
    where?: AlternativaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Alternativas to fetch.
     */
    orderBy?: AlternativaOrderByWithRelationInput | AlternativaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Alternativas.
     */
    cursor?: AlternativaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Alternativas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Alternativas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Alternativas.
     */
    distinct?: AlternativaScalarFieldEnum | AlternativaScalarFieldEnum[]
  }

  /**
   * Alternativa findMany
   */
  export type AlternativaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alternativa
     */
    select?: AlternativaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alternativa
     */
    omit?: AlternativaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlternativaInclude<ExtArgs> | null
    /**
     * Filter, which Alternativas to fetch.
     */
    where?: AlternativaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Alternativas to fetch.
     */
    orderBy?: AlternativaOrderByWithRelationInput | AlternativaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Alternativas.
     */
    cursor?: AlternativaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Alternativas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Alternativas.
     */
    skip?: number
    distinct?: AlternativaScalarFieldEnum | AlternativaScalarFieldEnum[]
  }

  /**
   * Alternativa create
   */
  export type AlternativaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alternativa
     */
    select?: AlternativaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alternativa
     */
    omit?: AlternativaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlternativaInclude<ExtArgs> | null
    /**
     * The data needed to create a Alternativa.
     */
    data: XOR<AlternativaCreateInput, AlternativaUncheckedCreateInput>
  }

  /**
   * Alternativa createMany
   */
  export type AlternativaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Alternativas.
     */
    data: AlternativaCreateManyInput | AlternativaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Alternativa createManyAndReturn
   */
  export type AlternativaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alternativa
     */
    select?: AlternativaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Alternativa
     */
    omit?: AlternativaOmit<ExtArgs> | null
    /**
     * The data used to create many Alternativas.
     */
    data: AlternativaCreateManyInput | AlternativaCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlternativaIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Alternativa update
   */
  export type AlternativaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alternativa
     */
    select?: AlternativaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alternativa
     */
    omit?: AlternativaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlternativaInclude<ExtArgs> | null
    /**
     * The data needed to update a Alternativa.
     */
    data: XOR<AlternativaUpdateInput, AlternativaUncheckedUpdateInput>
    /**
     * Choose, which Alternativa to update.
     */
    where: AlternativaWhereUniqueInput
  }

  /**
   * Alternativa updateMany
   */
  export type AlternativaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Alternativas.
     */
    data: XOR<AlternativaUpdateManyMutationInput, AlternativaUncheckedUpdateManyInput>
    /**
     * Filter which Alternativas to update
     */
    where?: AlternativaWhereInput
    /**
     * Limit how many Alternativas to update.
     */
    limit?: number
  }

  /**
   * Alternativa updateManyAndReturn
   */
  export type AlternativaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alternativa
     */
    select?: AlternativaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Alternativa
     */
    omit?: AlternativaOmit<ExtArgs> | null
    /**
     * The data used to update Alternativas.
     */
    data: XOR<AlternativaUpdateManyMutationInput, AlternativaUncheckedUpdateManyInput>
    /**
     * Filter which Alternativas to update
     */
    where?: AlternativaWhereInput
    /**
     * Limit how many Alternativas to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlternativaIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Alternativa upsert
   */
  export type AlternativaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alternativa
     */
    select?: AlternativaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alternativa
     */
    omit?: AlternativaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlternativaInclude<ExtArgs> | null
    /**
     * The filter to search for the Alternativa to update in case it exists.
     */
    where: AlternativaWhereUniqueInput
    /**
     * In case the Alternativa found by the `where` argument doesn't exist, create a new Alternativa with this data.
     */
    create: XOR<AlternativaCreateInput, AlternativaUncheckedCreateInput>
    /**
     * In case the Alternativa was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AlternativaUpdateInput, AlternativaUncheckedUpdateInput>
  }

  /**
   * Alternativa delete
   */
  export type AlternativaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alternativa
     */
    select?: AlternativaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alternativa
     */
    omit?: AlternativaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlternativaInclude<ExtArgs> | null
    /**
     * Filter which Alternativa to delete.
     */
    where: AlternativaWhereUniqueInput
  }

  /**
   * Alternativa deleteMany
   */
  export type AlternativaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Alternativas to delete
     */
    where?: AlternativaWhereInput
    /**
     * Limit how many Alternativas to delete.
     */
    limit?: number
  }

  /**
   * Alternativa without action
   */
  export type AlternativaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alternativa
     */
    select?: AlternativaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alternativa
     */
    omit?: AlternativaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlternativaInclude<ExtArgs> | null
  }


  /**
   * Model Comentario
   */

  export type AggregateComentario = {
    _count: ComentarioCountAggregateOutputType | null
    _avg: ComentarioAvgAggregateOutputType | null
    _sum: ComentarioSumAggregateOutputType | null
    _min: ComentarioMinAggregateOutputType | null
    _max: ComentarioMaxAggregateOutputType | null
  }

  export type ComentarioAvgAggregateOutputType = {
    id: number | null
    questaoId: number | null
  }

  export type ComentarioSumAggregateOutputType = {
    id: number | null
    questaoId: number | null
  }

  export type ComentarioMinAggregateOutputType = {
    id: number | null
    usuario: string | null
    data_comentario: Date | null
    comentario: string | null
    questaoId: number | null
  }

  export type ComentarioMaxAggregateOutputType = {
    id: number | null
    usuario: string | null
    data_comentario: Date | null
    comentario: string | null
    questaoId: number | null
  }

  export type ComentarioCountAggregateOutputType = {
    id: number
    usuario: number
    data_comentario: number
    comentario: number
    questaoId: number
    _all: number
  }


  export type ComentarioAvgAggregateInputType = {
    id?: true
    questaoId?: true
  }

  export type ComentarioSumAggregateInputType = {
    id?: true
    questaoId?: true
  }

  export type ComentarioMinAggregateInputType = {
    id?: true
    usuario?: true
    data_comentario?: true
    comentario?: true
    questaoId?: true
  }

  export type ComentarioMaxAggregateInputType = {
    id?: true
    usuario?: true
    data_comentario?: true
    comentario?: true
    questaoId?: true
  }

  export type ComentarioCountAggregateInputType = {
    id?: true
    usuario?: true
    data_comentario?: true
    comentario?: true
    questaoId?: true
    _all?: true
  }

  export type ComentarioAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Comentario to aggregate.
     */
    where?: ComentarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comentarios to fetch.
     */
    orderBy?: ComentarioOrderByWithRelationInput | ComentarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ComentarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comentarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comentarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Comentarios
    **/
    _count?: true | ComentarioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ComentarioAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ComentarioSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ComentarioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ComentarioMaxAggregateInputType
  }

  export type GetComentarioAggregateType<T extends ComentarioAggregateArgs> = {
        [P in keyof T & keyof AggregateComentario]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateComentario[P]>
      : GetScalarType<T[P], AggregateComentario[P]>
  }




  export type ComentarioGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ComentarioWhereInput
    orderBy?: ComentarioOrderByWithAggregationInput | ComentarioOrderByWithAggregationInput[]
    by: ComentarioScalarFieldEnum[] | ComentarioScalarFieldEnum
    having?: ComentarioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ComentarioCountAggregateInputType | true
    _avg?: ComentarioAvgAggregateInputType
    _sum?: ComentarioSumAggregateInputType
    _min?: ComentarioMinAggregateInputType
    _max?: ComentarioMaxAggregateInputType
  }

  export type ComentarioGroupByOutputType = {
    id: number
    usuario: string
    data_comentario: Date
    comentario: string
    questaoId: number
    _count: ComentarioCountAggregateOutputType | null
    _avg: ComentarioAvgAggregateOutputType | null
    _sum: ComentarioSumAggregateOutputType | null
    _min: ComentarioMinAggregateOutputType | null
    _max: ComentarioMaxAggregateOutputType | null
  }

  type GetComentarioGroupByPayload<T extends ComentarioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ComentarioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ComentarioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ComentarioGroupByOutputType[P]>
            : GetScalarType<T[P], ComentarioGroupByOutputType[P]>
        }
      >
    >


  export type ComentarioSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    usuario?: boolean
    data_comentario?: boolean
    comentario?: boolean
    questaoId?: boolean
    questao?: boolean | QuestaoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["comentario"]>

  export type ComentarioSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    usuario?: boolean
    data_comentario?: boolean
    comentario?: boolean
    questaoId?: boolean
    questao?: boolean | QuestaoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["comentario"]>

  export type ComentarioSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    usuario?: boolean
    data_comentario?: boolean
    comentario?: boolean
    questaoId?: boolean
    questao?: boolean | QuestaoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["comentario"]>

  export type ComentarioSelectScalar = {
    id?: boolean
    usuario?: boolean
    data_comentario?: boolean
    comentario?: boolean
    questaoId?: boolean
  }

  export type ComentarioOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "usuario" | "data_comentario" | "comentario" | "questaoId", ExtArgs["result"]["comentario"]>
  export type ComentarioInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    questao?: boolean | QuestaoDefaultArgs<ExtArgs>
  }
  export type ComentarioIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    questao?: boolean | QuestaoDefaultArgs<ExtArgs>
  }
  export type ComentarioIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    questao?: boolean | QuestaoDefaultArgs<ExtArgs>
  }

  export type $ComentarioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Comentario"
    objects: {
      questao: Prisma.$QuestaoPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      usuario: string
      data_comentario: Date
      comentario: string
      questaoId: number
    }, ExtArgs["result"]["comentario"]>
    composites: {}
  }

  type ComentarioGetPayload<S extends boolean | null | undefined | ComentarioDefaultArgs> = $Result.GetResult<Prisma.$ComentarioPayload, S>

  type ComentarioCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ComentarioFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ComentarioCountAggregateInputType | true
    }

  export interface ComentarioDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Comentario'], meta: { name: 'Comentario' } }
    /**
     * Find zero or one Comentario that matches the filter.
     * @param {ComentarioFindUniqueArgs} args - Arguments to find a Comentario
     * @example
     * // Get one Comentario
     * const comentario = await prisma.comentario.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ComentarioFindUniqueArgs>(args: SelectSubset<T, ComentarioFindUniqueArgs<ExtArgs>>): Prisma__ComentarioClient<$Result.GetResult<Prisma.$ComentarioPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Comentario that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ComentarioFindUniqueOrThrowArgs} args - Arguments to find a Comentario
     * @example
     * // Get one Comentario
     * const comentario = await prisma.comentario.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ComentarioFindUniqueOrThrowArgs>(args: SelectSubset<T, ComentarioFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ComentarioClient<$Result.GetResult<Prisma.$ComentarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Comentario that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComentarioFindFirstArgs} args - Arguments to find a Comentario
     * @example
     * // Get one Comentario
     * const comentario = await prisma.comentario.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ComentarioFindFirstArgs>(args?: SelectSubset<T, ComentarioFindFirstArgs<ExtArgs>>): Prisma__ComentarioClient<$Result.GetResult<Prisma.$ComentarioPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Comentario that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComentarioFindFirstOrThrowArgs} args - Arguments to find a Comentario
     * @example
     * // Get one Comentario
     * const comentario = await prisma.comentario.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ComentarioFindFirstOrThrowArgs>(args?: SelectSubset<T, ComentarioFindFirstOrThrowArgs<ExtArgs>>): Prisma__ComentarioClient<$Result.GetResult<Prisma.$ComentarioPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Comentarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComentarioFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Comentarios
     * const comentarios = await prisma.comentario.findMany()
     * 
     * // Get first 10 Comentarios
     * const comentarios = await prisma.comentario.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const comentarioWithIdOnly = await prisma.comentario.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ComentarioFindManyArgs>(args?: SelectSubset<T, ComentarioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ComentarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Comentario.
     * @param {ComentarioCreateArgs} args - Arguments to create a Comentario.
     * @example
     * // Create one Comentario
     * const Comentario = await prisma.comentario.create({
     *   data: {
     *     // ... data to create a Comentario
     *   }
     * })
     * 
     */
    create<T extends ComentarioCreateArgs>(args: SelectSubset<T, ComentarioCreateArgs<ExtArgs>>): Prisma__ComentarioClient<$Result.GetResult<Prisma.$ComentarioPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Comentarios.
     * @param {ComentarioCreateManyArgs} args - Arguments to create many Comentarios.
     * @example
     * // Create many Comentarios
     * const comentario = await prisma.comentario.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ComentarioCreateManyArgs>(args?: SelectSubset<T, ComentarioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Comentarios and returns the data saved in the database.
     * @param {ComentarioCreateManyAndReturnArgs} args - Arguments to create many Comentarios.
     * @example
     * // Create many Comentarios
     * const comentario = await prisma.comentario.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Comentarios and only return the `id`
     * const comentarioWithIdOnly = await prisma.comentario.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ComentarioCreateManyAndReturnArgs>(args?: SelectSubset<T, ComentarioCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ComentarioPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Comentario.
     * @param {ComentarioDeleteArgs} args - Arguments to delete one Comentario.
     * @example
     * // Delete one Comentario
     * const Comentario = await prisma.comentario.delete({
     *   where: {
     *     // ... filter to delete one Comentario
     *   }
     * })
     * 
     */
    delete<T extends ComentarioDeleteArgs>(args: SelectSubset<T, ComentarioDeleteArgs<ExtArgs>>): Prisma__ComentarioClient<$Result.GetResult<Prisma.$ComentarioPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Comentario.
     * @param {ComentarioUpdateArgs} args - Arguments to update one Comentario.
     * @example
     * // Update one Comentario
     * const comentario = await prisma.comentario.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ComentarioUpdateArgs>(args: SelectSubset<T, ComentarioUpdateArgs<ExtArgs>>): Prisma__ComentarioClient<$Result.GetResult<Prisma.$ComentarioPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Comentarios.
     * @param {ComentarioDeleteManyArgs} args - Arguments to filter Comentarios to delete.
     * @example
     * // Delete a few Comentarios
     * const { count } = await prisma.comentario.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ComentarioDeleteManyArgs>(args?: SelectSubset<T, ComentarioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Comentarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComentarioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Comentarios
     * const comentario = await prisma.comentario.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ComentarioUpdateManyArgs>(args: SelectSubset<T, ComentarioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Comentarios and returns the data updated in the database.
     * @param {ComentarioUpdateManyAndReturnArgs} args - Arguments to update many Comentarios.
     * @example
     * // Update many Comentarios
     * const comentario = await prisma.comentario.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Comentarios and only return the `id`
     * const comentarioWithIdOnly = await prisma.comentario.updateManyAndReturn({
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
    updateManyAndReturn<T extends ComentarioUpdateManyAndReturnArgs>(args: SelectSubset<T, ComentarioUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ComentarioPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Comentario.
     * @param {ComentarioUpsertArgs} args - Arguments to update or create a Comentario.
     * @example
     * // Update or create a Comentario
     * const comentario = await prisma.comentario.upsert({
     *   create: {
     *     // ... data to create a Comentario
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Comentario we want to update
     *   }
     * })
     */
    upsert<T extends ComentarioUpsertArgs>(args: SelectSubset<T, ComentarioUpsertArgs<ExtArgs>>): Prisma__ComentarioClient<$Result.GetResult<Prisma.$ComentarioPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Comentarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComentarioCountArgs} args - Arguments to filter Comentarios to count.
     * @example
     * // Count the number of Comentarios
     * const count = await prisma.comentario.count({
     *   where: {
     *     // ... the filter for the Comentarios we want to count
     *   }
     * })
    **/
    count<T extends ComentarioCountArgs>(
      args?: Subset<T, ComentarioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ComentarioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Comentario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComentarioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ComentarioAggregateArgs>(args: Subset<T, ComentarioAggregateArgs>): Prisma.PrismaPromise<GetComentarioAggregateType<T>>

    /**
     * Group by Comentario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComentarioGroupByArgs} args - Group by arguments.
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
      T extends ComentarioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ComentarioGroupByArgs['orderBy'] }
        : { orderBy?: ComentarioGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ComentarioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetComentarioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Comentario model
   */
  readonly fields: ComentarioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Comentario.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ComentarioClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    questao<T extends QuestaoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, QuestaoDefaultArgs<ExtArgs>>): Prisma__QuestaoClient<$Result.GetResult<Prisma.$QuestaoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Comentario model
   */
  interface ComentarioFieldRefs {
    readonly id: FieldRef<"Comentario", 'Int'>
    readonly usuario: FieldRef<"Comentario", 'String'>
    readonly data_comentario: FieldRef<"Comentario", 'DateTime'>
    readonly comentario: FieldRef<"Comentario", 'String'>
    readonly questaoId: FieldRef<"Comentario", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Comentario findUnique
   */
  export type ComentarioFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comentario
     */
    select?: ComentarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comentario
     */
    omit?: ComentarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComentarioInclude<ExtArgs> | null
    /**
     * Filter, which Comentario to fetch.
     */
    where: ComentarioWhereUniqueInput
  }

  /**
   * Comentario findUniqueOrThrow
   */
  export type ComentarioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comentario
     */
    select?: ComentarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comentario
     */
    omit?: ComentarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComentarioInclude<ExtArgs> | null
    /**
     * Filter, which Comentario to fetch.
     */
    where: ComentarioWhereUniqueInput
  }

  /**
   * Comentario findFirst
   */
  export type ComentarioFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comentario
     */
    select?: ComentarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comentario
     */
    omit?: ComentarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComentarioInclude<ExtArgs> | null
    /**
     * Filter, which Comentario to fetch.
     */
    where?: ComentarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comentarios to fetch.
     */
    orderBy?: ComentarioOrderByWithRelationInput | ComentarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Comentarios.
     */
    cursor?: ComentarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comentarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comentarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Comentarios.
     */
    distinct?: ComentarioScalarFieldEnum | ComentarioScalarFieldEnum[]
  }

  /**
   * Comentario findFirstOrThrow
   */
  export type ComentarioFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comentario
     */
    select?: ComentarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comentario
     */
    omit?: ComentarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComentarioInclude<ExtArgs> | null
    /**
     * Filter, which Comentario to fetch.
     */
    where?: ComentarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comentarios to fetch.
     */
    orderBy?: ComentarioOrderByWithRelationInput | ComentarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Comentarios.
     */
    cursor?: ComentarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comentarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comentarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Comentarios.
     */
    distinct?: ComentarioScalarFieldEnum | ComentarioScalarFieldEnum[]
  }

  /**
   * Comentario findMany
   */
  export type ComentarioFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comentario
     */
    select?: ComentarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comentario
     */
    omit?: ComentarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComentarioInclude<ExtArgs> | null
    /**
     * Filter, which Comentarios to fetch.
     */
    where?: ComentarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comentarios to fetch.
     */
    orderBy?: ComentarioOrderByWithRelationInput | ComentarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Comentarios.
     */
    cursor?: ComentarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comentarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comentarios.
     */
    skip?: number
    distinct?: ComentarioScalarFieldEnum | ComentarioScalarFieldEnum[]
  }

  /**
   * Comentario create
   */
  export type ComentarioCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comentario
     */
    select?: ComentarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comentario
     */
    omit?: ComentarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComentarioInclude<ExtArgs> | null
    /**
     * The data needed to create a Comentario.
     */
    data: XOR<ComentarioCreateInput, ComentarioUncheckedCreateInput>
  }

  /**
   * Comentario createMany
   */
  export type ComentarioCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Comentarios.
     */
    data: ComentarioCreateManyInput | ComentarioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Comentario createManyAndReturn
   */
  export type ComentarioCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comentario
     */
    select?: ComentarioSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Comentario
     */
    omit?: ComentarioOmit<ExtArgs> | null
    /**
     * The data used to create many Comentarios.
     */
    data: ComentarioCreateManyInput | ComentarioCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComentarioIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Comentario update
   */
  export type ComentarioUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comentario
     */
    select?: ComentarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comentario
     */
    omit?: ComentarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComentarioInclude<ExtArgs> | null
    /**
     * The data needed to update a Comentario.
     */
    data: XOR<ComentarioUpdateInput, ComentarioUncheckedUpdateInput>
    /**
     * Choose, which Comentario to update.
     */
    where: ComentarioWhereUniqueInput
  }

  /**
   * Comentario updateMany
   */
  export type ComentarioUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Comentarios.
     */
    data: XOR<ComentarioUpdateManyMutationInput, ComentarioUncheckedUpdateManyInput>
    /**
     * Filter which Comentarios to update
     */
    where?: ComentarioWhereInput
    /**
     * Limit how many Comentarios to update.
     */
    limit?: number
  }

  /**
   * Comentario updateManyAndReturn
   */
  export type ComentarioUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comentario
     */
    select?: ComentarioSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Comentario
     */
    omit?: ComentarioOmit<ExtArgs> | null
    /**
     * The data used to update Comentarios.
     */
    data: XOR<ComentarioUpdateManyMutationInput, ComentarioUncheckedUpdateManyInput>
    /**
     * Filter which Comentarios to update
     */
    where?: ComentarioWhereInput
    /**
     * Limit how many Comentarios to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComentarioIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Comentario upsert
   */
  export type ComentarioUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comentario
     */
    select?: ComentarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comentario
     */
    omit?: ComentarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComentarioInclude<ExtArgs> | null
    /**
     * The filter to search for the Comentario to update in case it exists.
     */
    where: ComentarioWhereUniqueInput
    /**
     * In case the Comentario found by the `where` argument doesn't exist, create a new Comentario with this data.
     */
    create: XOR<ComentarioCreateInput, ComentarioUncheckedCreateInput>
    /**
     * In case the Comentario was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ComentarioUpdateInput, ComentarioUncheckedUpdateInput>
  }

  /**
   * Comentario delete
   */
  export type ComentarioDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comentario
     */
    select?: ComentarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comentario
     */
    omit?: ComentarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComentarioInclude<ExtArgs> | null
    /**
     * Filter which Comentario to delete.
     */
    where: ComentarioWhereUniqueInput
  }

  /**
   * Comentario deleteMany
   */
  export type ComentarioDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Comentarios to delete
     */
    where?: ComentarioWhereInput
    /**
     * Limit how many Comentarios to delete.
     */
    limit?: number
  }

  /**
   * Comentario without action
   */
  export type ComentarioDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comentario
     */
    select?: ComentarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comentario
     */
    omit?: ComentarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComentarioInclude<ExtArgs> | null
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


  export const QuestaoScalarFieldEnum: {
    id: 'id',
    enunciado: 'enunciado',
    assunto: 'assunto',
    nivel_dificuldade: 'nivel_dificuldade',
    referencia: 'referencia',
    explicacao: 'explicacao',
    tags: 'tags',
    data_criacao: 'data_criacao',
    origem: 'origem',
    categoria_concurso: 'categoria_concurso',
    peso: 'peso',
    categoria_assunto: 'categoria_assunto',
    tempo_resposta_estipulado: 'tempo_resposta_estipulado'
  };

  export type QuestaoScalarFieldEnum = (typeof QuestaoScalarFieldEnum)[keyof typeof QuestaoScalarFieldEnum]


  export const AlternativaScalarFieldEnum: {
    id: 'id',
    resposta: 'resposta',
    correta: 'correta',
    questaoId: 'questaoId'
  };

  export type AlternativaScalarFieldEnum = (typeof AlternativaScalarFieldEnum)[keyof typeof AlternativaScalarFieldEnum]


  export const ComentarioScalarFieldEnum: {
    id: 'id',
    usuario: 'usuario',
    data_comentario: 'data_comentario',
    comentario: 'comentario',
    questaoId: 'questaoId'
  };

  export type ComentarioScalarFieldEnum = (typeof ComentarioScalarFieldEnum)[keyof typeof ComentarioScalarFieldEnum]


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
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


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
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


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


  export type QuestaoWhereInput = {
    AND?: QuestaoWhereInput | QuestaoWhereInput[]
    OR?: QuestaoWhereInput[]
    NOT?: QuestaoWhereInput | QuestaoWhereInput[]
    id?: IntFilter<"Questao"> | number
    enunciado?: StringFilter<"Questao"> | string
    assunto?: StringFilter<"Questao"> | string
    nivel_dificuldade?: StringFilter<"Questao"> | string
    referencia?: StringFilter<"Questao"> | string
    explicacao?: StringFilter<"Questao"> | string
    tags?: StringNullableListFilter<"Questao">
    data_criacao?: DateTimeFilter<"Questao"> | Date | string
    origem?: StringFilter<"Questao"> | string
    categoria_concurso?: StringFilter<"Questao"> | string
    peso?: IntFilter<"Questao"> | number
    categoria_assunto?: StringFilter<"Questao"> | string
    tempo_resposta_estipulado?: StringFilter<"Questao"> | string
    alternativas?: AlternativaListRelationFilter
    comentarios?: ComentarioListRelationFilter
  }

  export type QuestaoOrderByWithRelationInput = {
    id?: SortOrder
    enunciado?: SortOrder
    assunto?: SortOrder
    nivel_dificuldade?: SortOrder
    referencia?: SortOrder
    explicacao?: SortOrder
    tags?: SortOrder
    data_criacao?: SortOrder
    origem?: SortOrder
    categoria_concurso?: SortOrder
    peso?: SortOrder
    categoria_assunto?: SortOrder
    tempo_resposta_estipulado?: SortOrder
    alternativas?: AlternativaOrderByRelationAggregateInput
    comentarios?: ComentarioOrderByRelationAggregateInput
  }

  export type QuestaoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: QuestaoWhereInput | QuestaoWhereInput[]
    OR?: QuestaoWhereInput[]
    NOT?: QuestaoWhereInput | QuestaoWhereInput[]
    enunciado?: StringFilter<"Questao"> | string
    assunto?: StringFilter<"Questao"> | string
    nivel_dificuldade?: StringFilter<"Questao"> | string
    referencia?: StringFilter<"Questao"> | string
    explicacao?: StringFilter<"Questao"> | string
    tags?: StringNullableListFilter<"Questao">
    data_criacao?: DateTimeFilter<"Questao"> | Date | string
    origem?: StringFilter<"Questao"> | string
    categoria_concurso?: StringFilter<"Questao"> | string
    peso?: IntFilter<"Questao"> | number
    categoria_assunto?: StringFilter<"Questao"> | string
    tempo_resposta_estipulado?: StringFilter<"Questao"> | string
    alternativas?: AlternativaListRelationFilter
    comentarios?: ComentarioListRelationFilter
  }, "id">

  export type QuestaoOrderByWithAggregationInput = {
    id?: SortOrder
    enunciado?: SortOrder
    assunto?: SortOrder
    nivel_dificuldade?: SortOrder
    referencia?: SortOrder
    explicacao?: SortOrder
    tags?: SortOrder
    data_criacao?: SortOrder
    origem?: SortOrder
    categoria_concurso?: SortOrder
    peso?: SortOrder
    categoria_assunto?: SortOrder
    tempo_resposta_estipulado?: SortOrder
    _count?: QuestaoCountOrderByAggregateInput
    _avg?: QuestaoAvgOrderByAggregateInput
    _max?: QuestaoMaxOrderByAggregateInput
    _min?: QuestaoMinOrderByAggregateInput
    _sum?: QuestaoSumOrderByAggregateInput
  }

  export type QuestaoScalarWhereWithAggregatesInput = {
    AND?: QuestaoScalarWhereWithAggregatesInput | QuestaoScalarWhereWithAggregatesInput[]
    OR?: QuestaoScalarWhereWithAggregatesInput[]
    NOT?: QuestaoScalarWhereWithAggregatesInput | QuestaoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Questao"> | number
    enunciado?: StringWithAggregatesFilter<"Questao"> | string
    assunto?: StringWithAggregatesFilter<"Questao"> | string
    nivel_dificuldade?: StringWithAggregatesFilter<"Questao"> | string
    referencia?: StringWithAggregatesFilter<"Questao"> | string
    explicacao?: StringWithAggregatesFilter<"Questao"> | string
    tags?: StringNullableListFilter<"Questao">
    data_criacao?: DateTimeWithAggregatesFilter<"Questao"> | Date | string
    origem?: StringWithAggregatesFilter<"Questao"> | string
    categoria_concurso?: StringWithAggregatesFilter<"Questao"> | string
    peso?: IntWithAggregatesFilter<"Questao"> | number
    categoria_assunto?: StringWithAggregatesFilter<"Questao"> | string
    tempo_resposta_estipulado?: StringWithAggregatesFilter<"Questao"> | string
  }

  export type AlternativaWhereInput = {
    AND?: AlternativaWhereInput | AlternativaWhereInput[]
    OR?: AlternativaWhereInput[]
    NOT?: AlternativaWhereInput | AlternativaWhereInput[]
    id?: IntFilter<"Alternativa"> | number
    resposta?: StringFilter<"Alternativa"> | string
    correta?: BoolFilter<"Alternativa"> | boolean
    questaoId?: IntFilter<"Alternativa"> | number
    questao?: XOR<QuestaoScalarRelationFilter, QuestaoWhereInput>
  }

  export type AlternativaOrderByWithRelationInput = {
    id?: SortOrder
    resposta?: SortOrder
    correta?: SortOrder
    questaoId?: SortOrder
    questao?: QuestaoOrderByWithRelationInput
  }

  export type AlternativaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: AlternativaWhereInput | AlternativaWhereInput[]
    OR?: AlternativaWhereInput[]
    NOT?: AlternativaWhereInput | AlternativaWhereInput[]
    resposta?: StringFilter<"Alternativa"> | string
    correta?: BoolFilter<"Alternativa"> | boolean
    questaoId?: IntFilter<"Alternativa"> | number
    questao?: XOR<QuestaoScalarRelationFilter, QuestaoWhereInput>
  }, "id">

  export type AlternativaOrderByWithAggregationInput = {
    id?: SortOrder
    resposta?: SortOrder
    correta?: SortOrder
    questaoId?: SortOrder
    _count?: AlternativaCountOrderByAggregateInput
    _avg?: AlternativaAvgOrderByAggregateInput
    _max?: AlternativaMaxOrderByAggregateInput
    _min?: AlternativaMinOrderByAggregateInput
    _sum?: AlternativaSumOrderByAggregateInput
  }

  export type AlternativaScalarWhereWithAggregatesInput = {
    AND?: AlternativaScalarWhereWithAggregatesInput | AlternativaScalarWhereWithAggregatesInput[]
    OR?: AlternativaScalarWhereWithAggregatesInput[]
    NOT?: AlternativaScalarWhereWithAggregatesInput | AlternativaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Alternativa"> | number
    resposta?: StringWithAggregatesFilter<"Alternativa"> | string
    correta?: BoolWithAggregatesFilter<"Alternativa"> | boolean
    questaoId?: IntWithAggregatesFilter<"Alternativa"> | number
  }

  export type ComentarioWhereInput = {
    AND?: ComentarioWhereInput | ComentarioWhereInput[]
    OR?: ComentarioWhereInput[]
    NOT?: ComentarioWhereInput | ComentarioWhereInput[]
    id?: IntFilter<"Comentario"> | number
    usuario?: StringFilter<"Comentario"> | string
    data_comentario?: DateTimeFilter<"Comentario"> | Date | string
    comentario?: StringFilter<"Comentario"> | string
    questaoId?: IntFilter<"Comentario"> | number
    questao?: XOR<QuestaoScalarRelationFilter, QuestaoWhereInput>
  }

  export type ComentarioOrderByWithRelationInput = {
    id?: SortOrder
    usuario?: SortOrder
    data_comentario?: SortOrder
    comentario?: SortOrder
    questaoId?: SortOrder
    questao?: QuestaoOrderByWithRelationInput
  }

  export type ComentarioWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ComentarioWhereInput | ComentarioWhereInput[]
    OR?: ComentarioWhereInput[]
    NOT?: ComentarioWhereInput | ComentarioWhereInput[]
    usuario?: StringFilter<"Comentario"> | string
    data_comentario?: DateTimeFilter<"Comentario"> | Date | string
    comentario?: StringFilter<"Comentario"> | string
    questaoId?: IntFilter<"Comentario"> | number
    questao?: XOR<QuestaoScalarRelationFilter, QuestaoWhereInput>
  }, "id">

  export type ComentarioOrderByWithAggregationInput = {
    id?: SortOrder
    usuario?: SortOrder
    data_comentario?: SortOrder
    comentario?: SortOrder
    questaoId?: SortOrder
    _count?: ComentarioCountOrderByAggregateInput
    _avg?: ComentarioAvgOrderByAggregateInput
    _max?: ComentarioMaxOrderByAggregateInput
    _min?: ComentarioMinOrderByAggregateInput
    _sum?: ComentarioSumOrderByAggregateInput
  }

  export type ComentarioScalarWhereWithAggregatesInput = {
    AND?: ComentarioScalarWhereWithAggregatesInput | ComentarioScalarWhereWithAggregatesInput[]
    OR?: ComentarioScalarWhereWithAggregatesInput[]
    NOT?: ComentarioScalarWhereWithAggregatesInput | ComentarioScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Comentario"> | number
    usuario?: StringWithAggregatesFilter<"Comentario"> | string
    data_comentario?: DateTimeWithAggregatesFilter<"Comentario"> | Date | string
    comentario?: StringWithAggregatesFilter<"Comentario"> | string
    questaoId?: IntWithAggregatesFilter<"Comentario"> | number
  }

  export type QuestaoCreateInput = {
    enunciado: string
    assunto: string
    nivel_dificuldade: string
    referencia: string
    explicacao: string
    tags?: QuestaoCreatetagsInput | string[]
    data_criacao: Date | string
    origem: string
    categoria_concurso: string
    peso: number
    categoria_assunto: string
    tempo_resposta_estipulado: string
    alternativas?: AlternativaCreateNestedManyWithoutQuestaoInput
    comentarios?: ComentarioCreateNestedManyWithoutQuestaoInput
  }

  export type QuestaoUncheckedCreateInput = {
    id?: number
    enunciado: string
    assunto: string
    nivel_dificuldade: string
    referencia: string
    explicacao: string
    tags?: QuestaoCreatetagsInput | string[]
    data_criacao: Date | string
    origem: string
    categoria_concurso: string
    peso: number
    categoria_assunto: string
    tempo_resposta_estipulado: string
    alternativas?: AlternativaUncheckedCreateNestedManyWithoutQuestaoInput
    comentarios?: ComentarioUncheckedCreateNestedManyWithoutQuestaoInput
  }

  export type QuestaoUpdateInput = {
    enunciado?: StringFieldUpdateOperationsInput | string
    assunto?: StringFieldUpdateOperationsInput | string
    nivel_dificuldade?: StringFieldUpdateOperationsInput | string
    referencia?: StringFieldUpdateOperationsInput | string
    explicacao?: StringFieldUpdateOperationsInput | string
    tags?: QuestaoUpdatetagsInput | string[]
    data_criacao?: DateTimeFieldUpdateOperationsInput | Date | string
    origem?: StringFieldUpdateOperationsInput | string
    categoria_concurso?: StringFieldUpdateOperationsInput | string
    peso?: IntFieldUpdateOperationsInput | number
    categoria_assunto?: StringFieldUpdateOperationsInput | string
    tempo_resposta_estipulado?: StringFieldUpdateOperationsInput | string
    alternativas?: AlternativaUpdateManyWithoutQuestaoNestedInput
    comentarios?: ComentarioUpdateManyWithoutQuestaoNestedInput
  }

  export type QuestaoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    enunciado?: StringFieldUpdateOperationsInput | string
    assunto?: StringFieldUpdateOperationsInput | string
    nivel_dificuldade?: StringFieldUpdateOperationsInput | string
    referencia?: StringFieldUpdateOperationsInput | string
    explicacao?: StringFieldUpdateOperationsInput | string
    tags?: QuestaoUpdatetagsInput | string[]
    data_criacao?: DateTimeFieldUpdateOperationsInput | Date | string
    origem?: StringFieldUpdateOperationsInput | string
    categoria_concurso?: StringFieldUpdateOperationsInput | string
    peso?: IntFieldUpdateOperationsInput | number
    categoria_assunto?: StringFieldUpdateOperationsInput | string
    tempo_resposta_estipulado?: StringFieldUpdateOperationsInput | string
    alternativas?: AlternativaUncheckedUpdateManyWithoutQuestaoNestedInput
    comentarios?: ComentarioUncheckedUpdateManyWithoutQuestaoNestedInput
  }

  export type QuestaoCreateManyInput = {
    id?: number
    enunciado: string
    assunto: string
    nivel_dificuldade: string
    referencia: string
    explicacao: string
    tags?: QuestaoCreatetagsInput | string[]
    data_criacao: Date | string
    origem: string
    categoria_concurso: string
    peso: number
    categoria_assunto: string
    tempo_resposta_estipulado: string
  }

  export type QuestaoUpdateManyMutationInput = {
    enunciado?: StringFieldUpdateOperationsInput | string
    assunto?: StringFieldUpdateOperationsInput | string
    nivel_dificuldade?: StringFieldUpdateOperationsInput | string
    referencia?: StringFieldUpdateOperationsInput | string
    explicacao?: StringFieldUpdateOperationsInput | string
    tags?: QuestaoUpdatetagsInput | string[]
    data_criacao?: DateTimeFieldUpdateOperationsInput | Date | string
    origem?: StringFieldUpdateOperationsInput | string
    categoria_concurso?: StringFieldUpdateOperationsInput | string
    peso?: IntFieldUpdateOperationsInput | number
    categoria_assunto?: StringFieldUpdateOperationsInput | string
    tempo_resposta_estipulado?: StringFieldUpdateOperationsInput | string
  }

  export type QuestaoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    enunciado?: StringFieldUpdateOperationsInput | string
    assunto?: StringFieldUpdateOperationsInput | string
    nivel_dificuldade?: StringFieldUpdateOperationsInput | string
    referencia?: StringFieldUpdateOperationsInput | string
    explicacao?: StringFieldUpdateOperationsInput | string
    tags?: QuestaoUpdatetagsInput | string[]
    data_criacao?: DateTimeFieldUpdateOperationsInput | Date | string
    origem?: StringFieldUpdateOperationsInput | string
    categoria_concurso?: StringFieldUpdateOperationsInput | string
    peso?: IntFieldUpdateOperationsInput | number
    categoria_assunto?: StringFieldUpdateOperationsInput | string
    tempo_resposta_estipulado?: StringFieldUpdateOperationsInput | string
  }

  export type AlternativaCreateInput = {
    resposta: string
    correta: boolean
    questao: QuestaoCreateNestedOneWithoutAlternativasInput
  }

  export type AlternativaUncheckedCreateInput = {
    id?: number
    resposta: string
    correta: boolean
    questaoId: number
  }

  export type AlternativaUpdateInput = {
    resposta?: StringFieldUpdateOperationsInput | string
    correta?: BoolFieldUpdateOperationsInput | boolean
    questao?: QuestaoUpdateOneRequiredWithoutAlternativasNestedInput
  }

  export type AlternativaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    resposta?: StringFieldUpdateOperationsInput | string
    correta?: BoolFieldUpdateOperationsInput | boolean
    questaoId?: IntFieldUpdateOperationsInput | number
  }

  export type AlternativaCreateManyInput = {
    id?: number
    resposta: string
    correta: boolean
    questaoId: number
  }

  export type AlternativaUpdateManyMutationInput = {
    resposta?: StringFieldUpdateOperationsInput | string
    correta?: BoolFieldUpdateOperationsInput | boolean
  }

  export type AlternativaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    resposta?: StringFieldUpdateOperationsInput | string
    correta?: BoolFieldUpdateOperationsInput | boolean
    questaoId?: IntFieldUpdateOperationsInput | number
  }

  export type ComentarioCreateInput = {
    usuario: string
    data_comentario: Date | string
    comentario: string
    questao: QuestaoCreateNestedOneWithoutComentariosInput
  }

  export type ComentarioUncheckedCreateInput = {
    id?: number
    usuario: string
    data_comentario: Date | string
    comentario: string
    questaoId: number
  }

  export type ComentarioUpdateInput = {
    usuario?: StringFieldUpdateOperationsInput | string
    data_comentario?: DateTimeFieldUpdateOperationsInput | Date | string
    comentario?: StringFieldUpdateOperationsInput | string
    questao?: QuestaoUpdateOneRequiredWithoutComentariosNestedInput
  }

  export type ComentarioUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    usuario?: StringFieldUpdateOperationsInput | string
    data_comentario?: DateTimeFieldUpdateOperationsInput | Date | string
    comentario?: StringFieldUpdateOperationsInput | string
    questaoId?: IntFieldUpdateOperationsInput | number
  }

  export type ComentarioCreateManyInput = {
    id?: number
    usuario: string
    data_comentario: Date | string
    comentario: string
    questaoId: number
  }

  export type ComentarioUpdateManyMutationInput = {
    usuario?: StringFieldUpdateOperationsInput | string
    data_comentario?: DateTimeFieldUpdateOperationsInput | Date | string
    comentario?: StringFieldUpdateOperationsInput | string
  }

  export type ComentarioUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    usuario?: StringFieldUpdateOperationsInput | string
    data_comentario?: DateTimeFieldUpdateOperationsInput | Date | string
    comentario?: StringFieldUpdateOperationsInput | string
    questaoId?: IntFieldUpdateOperationsInput | number
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

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
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

  export type AlternativaListRelationFilter = {
    every?: AlternativaWhereInput
    some?: AlternativaWhereInput
    none?: AlternativaWhereInput
  }

  export type ComentarioListRelationFilter = {
    every?: ComentarioWhereInput
    some?: ComentarioWhereInput
    none?: ComentarioWhereInput
  }

  export type AlternativaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ComentarioOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type QuestaoCountOrderByAggregateInput = {
    id?: SortOrder
    enunciado?: SortOrder
    assunto?: SortOrder
    nivel_dificuldade?: SortOrder
    referencia?: SortOrder
    explicacao?: SortOrder
    tags?: SortOrder
    data_criacao?: SortOrder
    origem?: SortOrder
    categoria_concurso?: SortOrder
    peso?: SortOrder
    categoria_assunto?: SortOrder
    tempo_resposta_estipulado?: SortOrder
  }

  export type QuestaoAvgOrderByAggregateInput = {
    id?: SortOrder
    peso?: SortOrder
  }

  export type QuestaoMaxOrderByAggregateInput = {
    id?: SortOrder
    enunciado?: SortOrder
    assunto?: SortOrder
    nivel_dificuldade?: SortOrder
    referencia?: SortOrder
    explicacao?: SortOrder
    data_criacao?: SortOrder
    origem?: SortOrder
    categoria_concurso?: SortOrder
    peso?: SortOrder
    categoria_assunto?: SortOrder
    tempo_resposta_estipulado?: SortOrder
  }

  export type QuestaoMinOrderByAggregateInput = {
    id?: SortOrder
    enunciado?: SortOrder
    assunto?: SortOrder
    nivel_dificuldade?: SortOrder
    referencia?: SortOrder
    explicacao?: SortOrder
    data_criacao?: SortOrder
    origem?: SortOrder
    categoria_concurso?: SortOrder
    peso?: SortOrder
    categoria_assunto?: SortOrder
    tempo_resposta_estipulado?: SortOrder
  }

  export type QuestaoSumOrderByAggregateInput = {
    id?: SortOrder
    peso?: SortOrder
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type QuestaoScalarRelationFilter = {
    is?: QuestaoWhereInput
    isNot?: QuestaoWhereInput
  }

  export type AlternativaCountOrderByAggregateInput = {
    id?: SortOrder
    resposta?: SortOrder
    correta?: SortOrder
    questaoId?: SortOrder
  }

  export type AlternativaAvgOrderByAggregateInput = {
    id?: SortOrder
    questaoId?: SortOrder
  }

  export type AlternativaMaxOrderByAggregateInput = {
    id?: SortOrder
    resposta?: SortOrder
    correta?: SortOrder
    questaoId?: SortOrder
  }

  export type AlternativaMinOrderByAggregateInput = {
    id?: SortOrder
    resposta?: SortOrder
    correta?: SortOrder
    questaoId?: SortOrder
  }

  export type AlternativaSumOrderByAggregateInput = {
    id?: SortOrder
    questaoId?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type ComentarioCountOrderByAggregateInput = {
    id?: SortOrder
    usuario?: SortOrder
    data_comentario?: SortOrder
    comentario?: SortOrder
    questaoId?: SortOrder
  }

  export type ComentarioAvgOrderByAggregateInput = {
    id?: SortOrder
    questaoId?: SortOrder
  }

  export type ComentarioMaxOrderByAggregateInput = {
    id?: SortOrder
    usuario?: SortOrder
    data_comentario?: SortOrder
    comentario?: SortOrder
    questaoId?: SortOrder
  }

  export type ComentarioMinOrderByAggregateInput = {
    id?: SortOrder
    usuario?: SortOrder
    data_comentario?: SortOrder
    comentario?: SortOrder
    questaoId?: SortOrder
  }

  export type ComentarioSumOrderByAggregateInput = {
    id?: SortOrder
    questaoId?: SortOrder
  }

  export type QuestaoCreatetagsInput = {
    set: string[]
  }

  export type AlternativaCreateNestedManyWithoutQuestaoInput = {
    create?: XOR<AlternativaCreateWithoutQuestaoInput, AlternativaUncheckedCreateWithoutQuestaoInput> | AlternativaCreateWithoutQuestaoInput[] | AlternativaUncheckedCreateWithoutQuestaoInput[]
    connectOrCreate?: AlternativaCreateOrConnectWithoutQuestaoInput | AlternativaCreateOrConnectWithoutQuestaoInput[]
    createMany?: AlternativaCreateManyQuestaoInputEnvelope
    connect?: AlternativaWhereUniqueInput | AlternativaWhereUniqueInput[]
  }

  export type ComentarioCreateNestedManyWithoutQuestaoInput = {
    create?: XOR<ComentarioCreateWithoutQuestaoInput, ComentarioUncheckedCreateWithoutQuestaoInput> | ComentarioCreateWithoutQuestaoInput[] | ComentarioUncheckedCreateWithoutQuestaoInput[]
    connectOrCreate?: ComentarioCreateOrConnectWithoutQuestaoInput | ComentarioCreateOrConnectWithoutQuestaoInput[]
    createMany?: ComentarioCreateManyQuestaoInputEnvelope
    connect?: ComentarioWhereUniqueInput | ComentarioWhereUniqueInput[]
  }

  export type AlternativaUncheckedCreateNestedManyWithoutQuestaoInput = {
    create?: XOR<AlternativaCreateWithoutQuestaoInput, AlternativaUncheckedCreateWithoutQuestaoInput> | AlternativaCreateWithoutQuestaoInput[] | AlternativaUncheckedCreateWithoutQuestaoInput[]
    connectOrCreate?: AlternativaCreateOrConnectWithoutQuestaoInput | AlternativaCreateOrConnectWithoutQuestaoInput[]
    createMany?: AlternativaCreateManyQuestaoInputEnvelope
    connect?: AlternativaWhereUniqueInput | AlternativaWhereUniqueInput[]
  }

  export type ComentarioUncheckedCreateNestedManyWithoutQuestaoInput = {
    create?: XOR<ComentarioCreateWithoutQuestaoInput, ComentarioUncheckedCreateWithoutQuestaoInput> | ComentarioCreateWithoutQuestaoInput[] | ComentarioUncheckedCreateWithoutQuestaoInput[]
    connectOrCreate?: ComentarioCreateOrConnectWithoutQuestaoInput | ComentarioCreateOrConnectWithoutQuestaoInput[]
    createMany?: ComentarioCreateManyQuestaoInputEnvelope
    connect?: ComentarioWhereUniqueInput | ComentarioWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type QuestaoUpdatetagsInput = {
    set?: string[]
    push?: string | string[]
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

  export type AlternativaUpdateManyWithoutQuestaoNestedInput = {
    create?: XOR<AlternativaCreateWithoutQuestaoInput, AlternativaUncheckedCreateWithoutQuestaoInput> | AlternativaCreateWithoutQuestaoInput[] | AlternativaUncheckedCreateWithoutQuestaoInput[]
    connectOrCreate?: AlternativaCreateOrConnectWithoutQuestaoInput | AlternativaCreateOrConnectWithoutQuestaoInput[]
    upsert?: AlternativaUpsertWithWhereUniqueWithoutQuestaoInput | AlternativaUpsertWithWhereUniqueWithoutQuestaoInput[]
    createMany?: AlternativaCreateManyQuestaoInputEnvelope
    set?: AlternativaWhereUniqueInput | AlternativaWhereUniqueInput[]
    disconnect?: AlternativaWhereUniqueInput | AlternativaWhereUniqueInput[]
    delete?: AlternativaWhereUniqueInput | AlternativaWhereUniqueInput[]
    connect?: AlternativaWhereUniqueInput | AlternativaWhereUniqueInput[]
    update?: AlternativaUpdateWithWhereUniqueWithoutQuestaoInput | AlternativaUpdateWithWhereUniqueWithoutQuestaoInput[]
    updateMany?: AlternativaUpdateManyWithWhereWithoutQuestaoInput | AlternativaUpdateManyWithWhereWithoutQuestaoInput[]
    deleteMany?: AlternativaScalarWhereInput | AlternativaScalarWhereInput[]
  }

  export type ComentarioUpdateManyWithoutQuestaoNestedInput = {
    create?: XOR<ComentarioCreateWithoutQuestaoInput, ComentarioUncheckedCreateWithoutQuestaoInput> | ComentarioCreateWithoutQuestaoInput[] | ComentarioUncheckedCreateWithoutQuestaoInput[]
    connectOrCreate?: ComentarioCreateOrConnectWithoutQuestaoInput | ComentarioCreateOrConnectWithoutQuestaoInput[]
    upsert?: ComentarioUpsertWithWhereUniqueWithoutQuestaoInput | ComentarioUpsertWithWhereUniqueWithoutQuestaoInput[]
    createMany?: ComentarioCreateManyQuestaoInputEnvelope
    set?: ComentarioWhereUniqueInput | ComentarioWhereUniqueInput[]
    disconnect?: ComentarioWhereUniqueInput | ComentarioWhereUniqueInput[]
    delete?: ComentarioWhereUniqueInput | ComentarioWhereUniqueInput[]
    connect?: ComentarioWhereUniqueInput | ComentarioWhereUniqueInput[]
    update?: ComentarioUpdateWithWhereUniqueWithoutQuestaoInput | ComentarioUpdateWithWhereUniqueWithoutQuestaoInput[]
    updateMany?: ComentarioUpdateManyWithWhereWithoutQuestaoInput | ComentarioUpdateManyWithWhereWithoutQuestaoInput[]
    deleteMany?: ComentarioScalarWhereInput | ComentarioScalarWhereInput[]
  }

  export type AlternativaUncheckedUpdateManyWithoutQuestaoNestedInput = {
    create?: XOR<AlternativaCreateWithoutQuestaoInput, AlternativaUncheckedCreateWithoutQuestaoInput> | AlternativaCreateWithoutQuestaoInput[] | AlternativaUncheckedCreateWithoutQuestaoInput[]
    connectOrCreate?: AlternativaCreateOrConnectWithoutQuestaoInput | AlternativaCreateOrConnectWithoutQuestaoInput[]
    upsert?: AlternativaUpsertWithWhereUniqueWithoutQuestaoInput | AlternativaUpsertWithWhereUniqueWithoutQuestaoInput[]
    createMany?: AlternativaCreateManyQuestaoInputEnvelope
    set?: AlternativaWhereUniqueInput | AlternativaWhereUniqueInput[]
    disconnect?: AlternativaWhereUniqueInput | AlternativaWhereUniqueInput[]
    delete?: AlternativaWhereUniqueInput | AlternativaWhereUniqueInput[]
    connect?: AlternativaWhereUniqueInput | AlternativaWhereUniqueInput[]
    update?: AlternativaUpdateWithWhereUniqueWithoutQuestaoInput | AlternativaUpdateWithWhereUniqueWithoutQuestaoInput[]
    updateMany?: AlternativaUpdateManyWithWhereWithoutQuestaoInput | AlternativaUpdateManyWithWhereWithoutQuestaoInput[]
    deleteMany?: AlternativaScalarWhereInput | AlternativaScalarWhereInput[]
  }

  export type ComentarioUncheckedUpdateManyWithoutQuestaoNestedInput = {
    create?: XOR<ComentarioCreateWithoutQuestaoInput, ComentarioUncheckedCreateWithoutQuestaoInput> | ComentarioCreateWithoutQuestaoInput[] | ComentarioUncheckedCreateWithoutQuestaoInput[]
    connectOrCreate?: ComentarioCreateOrConnectWithoutQuestaoInput | ComentarioCreateOrConnectWithoutQuestaoInput[]
    upsert?: ComentarioUpsertWithWhereUniqueWithoutQuestaoInput | ComentarioUpsertWithWhereUniqueWithoutQuestaoInput[]
    createMany?: ComentarioCreateManyQuestaoInputEnvelope
    set?: ComentarioWhereUniqueInput | ComentarioWhereUniqueInput[]
    disconnect?: ComentarioWhereUniqueInput | ComentarioWhereUniqueInput[]
    delete?: ComentarioWhereUniqueInput | ComentarioWhereUniqueInput[]
    connect?: ComentarioWhereUniqueInput | ComentarioWhereUniqueInput[]
    update?: ComentarioUpdateWithWhereUniqueWithoutQuestaoInput | ComentarioUpdateWithWhereUniqueWithoutQuestaoInput[]
    updateMany?: ComentarioUpdateManyWithWhereWithoutQuestaoInput | ComentarioUpdateManyWithWhereWithoutQuestaoInput[]
    deleteMany?: ComentarioScalarWhereInput | ComentarioScalarWhereInput[]
  }

  export type QuestaoCreateNestedOneWithoutAlternativasInput = {
    create?: XOR<QuestaoCreateWithoutAlternativasInput, QuestaoUncheckedCreateWithoutAlternativasInput>
    connectOrCreate?: QuestaoCreateOrConnectWithoutAlternativasInput
    connect?: QuestaoWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type QuestaoUpdateOneRequiredWithoutAlternativasNestedInput = {
    create?: XOR<QuestaoCreateWithoutAlternativasInput, QuestaoUncheckedCreateWithoutAlternativasInput>
    connectOrCreate?: QuestaoCreateOrConnectWithoutAlternativasInput
    upsert?: QuestaoUpsertWithoutAlternativasInput
    connect?: QuestaoWhereUniqueInput
    update?: XOR<XOR<QuestaoUpdateToOneWithWhereWithoutAlternativasInput, QuestaoUpdateWithoutAlternativasInput>, QuestaoUncheckedUpdateWithoutAlternativasInput>
  }

  export type QuestaoCreateNestedOneWithoutComentariosInput = {
    create?: XOR<QuestaoCreateWithoutComentariosInput, QuestaoUncheckedCreateWithoutComentariosInput>
    connectOrCreate?: QuestaoCreateOrConnectWithoutComentariosInput
    connect?: QuestaoWhereUniqueInput
  }

  export type QuestaoUpdateOneRequiredWithoutComentariosNestedInput = {
    create?: XOR<QuestaoCreateWithoutComentariosInput, QuestaoUncheckedCreateWithoutComentariosInput>
    connectOrCreate?: QuestaoCreateOrConnectWithoutComentariosInput
    upsert?: QuestaoUpsertWithoutComentariosInput
    connect?: QuestaoWhereUniqueInput
    update?: XOR<XOR<QuestaoUpdateToOneWithWhereWithoutComentariosInput, QuestaoUpdateWithoutComentariosInput>, QuestaoUncheckedUpdateWithoutComentariosInput>
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type AlternativaCreateWithoutQuestaoInput = {
    resposta: string
    correta: boolean
  }

  export type AlternativaUncheckedCreateWithoutQuestaoInput = {
    id?: number
    resposta: string
    correta: boolean
  }

  export type AlternativaCreateOrConnectWithoutQuestaoInput = {
    where: AlternativaWhereUniqueInput
    create: XOR<AlternativaCreateWithoutQuestaoInput, AlternativaUncheckedCreateWithoutQuestaoInput>
  }

  export type AlternativaCreateManyQuestaoInputEnvelope = {
    data: AlternativaCreateManyQuestaoInput | AlternativaCreateManyQuestaoInput[]
    skipDuplicates?: boolean
  }

  export type ComentarioCreateWithoutQuestaoInput = {
    usuario: string
    data_comentario: Date | string
    comentario: string
  }

  export type ComentarioUncheckedCreateWithoutQuestaoInput = {
    id?: number
    usuario: string
    data_comentario: Date | string
    comentario: string
  }

  export type ComentarioCreateOrConnectWithoutQuestaoInput = {
    where: ComentarioWhereUniqueInput
    create: XOR<ComentarioCreateWithoutQuestaoInput, ComentarioUncheckedCreateWithoutQuestaoInput>
  }

  export type ComentarioCreateManyQuestaoInputEnvelope = {
    data: ComentarioCreateManyQuestaoInput | ComentarioCreateManyQuestaoInput[]
    skipDuplicates?: boolean
  }

  export type AlternativaUpsertWithWhereUniqueWithoutQuestaoInput = {
    where: AlternativaWhereUniqueInput
    update: XOR<AlternativaUpdateWithoutQuestaoInput, AlternativaUncheckedUpdateWithoutQuestaoInput>
    create: XOR<AlternativaCreateWithoutQuestaoInput, AlternativaUncheckedCreateWithoutQuestaoInput>
  }

  export type AlternativaUpdateWithWhereUniqueWithoutQuestaoInput = {
    where: AlternativaWhereUniqueInput
    data: XOR<AlternativaUpdateWithoutQuestaoInput, AlternativaUncheckedUpdateWithoutQuestaoInput>
  }

  export type AlternativaUpdateManyWithWhereWithoutQuestaoInput = {
    where: AlternativaScalarWhereInput
    data: XOR<AlternativaUpdateManyMutationInput, AlternativaUncheckedUpdateManyWithoutQuestaoInput>
  }

  export type AlternativaScalarWhereInput = {
    AND?: AlternativaScalarWhereInput | AlternativaScalarWhereInput[]
    OR?: AlternativaScalarWhereInput[]
    NOT?: AlternativaScalarWhereInput | AlternativaScalarWhereInput[]
    id?: IntFilter<"Alternativa"> | number
    resposta?: StringFilter<"Alternativa"> | string
    correta?: BoolFilter<"Alternativa"> | boolean
    questaoId?: IntFilter<"Alternativa"> | number
  }

  export type ComentarioUpsertWithWhereUniqueWithoutQuestaoInput = {
    where: ComentarioWhereUniqueInput
    update: XOR<ComentarioUpdateWithoutQuestaoInput, ComentarioUncheckedUpdateWithoutQuestaoInput>
    create: XOR<ComentarioCreateWithoutQuestaoInput, ComentarioUncheckedCreateWithoutQuestaoInput>
  }

  export type ComentarioUpdateWithWhereUniqueWithoutQuestaoInput = {
    where: ComentarioWhereUniqueInput
    data: XOR<ComentarioUpdateWithoutQuestaoInput, ComentarioUncheckedUpdateWithoutQuestaoInput>
  }

  export type ComentarioUpdateManyWithWhereWithoutQuestaoInput = {
    where: ComentarioScalarWhereInput
    data: XOR<ComentarioUpdateManyMutationInput, ComentarioUncheckedUpdateManyWithoutQuestaoInput>
  }

  export type ComentarioScalarWhereInput = {
    AND?: ComentarioScalarWhereInput | ComentarioScalarWhereInput[]
    OR?: ComentarioScalarWhereInput[]
    NOT?: ComentarioScalarWhereInput | ComentarioScalarWhereInput[]
    id?: IntFilter<"Comentario"> | number
    usuario?: StringFilter<"Comentario"> | string
    data_comentario?: DateTimeFilter<"Comentario"> | Date | string
    comentario?: StringFilter<"Comentario"> | string
    questaoId?: IntFilter<"Comentario"> | number
  }

  export type QuestaoCreateWithoutAlternativasInput = {
    enunciado: string
    assunto: string
    nivel_dificuldade: string
    referencia: string
    explicacao: string
    tags?: QuestaoCreatetagsInput | string[]
    data_criacao: Date | string
    origem: string
    categoria_concurso: string
    peso: number
    categoria_assunto: string
    tempo_resposta_estipulado: string
    comentarios?: ComentarioCreateNestedManyWithoutQuestaoInput
  }

  export type QuestaoUncheckedCreateWithoutAlternativasInput = {
    id?: number
    enunciado: string
    assunto: string
    nivel_dificuldade: string
    referencia: string
    explicacao: string
    tags?: QuestaoCreatetagsInput | string[]
    data_criacao: Date | string
    origem: string
    categoria_concurso: string
    peso: number
    categoria_assunto: string
    tempo_resposta_estipulado: string
    comentarios?: ComentarioUncheckedCreateNestedManyWithoutQuestaoInput
  }

  export type QuestaoCreateOrConnectWithoutAlternativasInput = {
    where: QuestaoWhereUniqueInput
    create: XOR<QuestaoCreateWithoutAlternativasInput, QuestaoUncheckedCreateWithoutAlternativasInput>
  }

  export type QuestaoUpsertWithoutAlternativasInput = {
    update: XOR<QuestaoUpdateWithoutAlternativasInput, QuestaoUncheckedUpdateWithoutAlternativasInput>
    create: XOR<QuestaoCreateWithoutAlternativasInput, QuestaoUncheckedCreateWithoutAlternativasInput>
    where?: QuestaoWhereInput
  }

  export type QuestaoUpdateToOneWithWhereWithoutAlternativasInput = {
    where?: QuestaoWhereInput
    data: XOR<QuestaoUpdateWithoutAlternativasInput, QuestaoUncheckedUpdateWithoutAlternativasInput>
  }

  export type QuestaoUpdateWithoutAlternativasInput = {
    enunciado?: StringFieldUpdateOperationsInput | string
    assunto?: StringFieldUpdateOperationsInput | string
    nivel_dificuldade?: StringFieldUpdateOperationsInput | string
    referencia?: StringFieldUpdateOperationsInput | string
    explicacao?: StringFieldUpdateOperationsInput | string
    tags?: QuestaoUpdatetagsInput | string[]
    data_criacao?: DateTimeFieldUpdateOperationsInput | Date | string
    origem?: StringFieldUpdateOperationsInput | string
    categoria_concurso?: StringFieldUpdateOperationsInput | string
    peso?: IntFieldUpdateOperationsInput | number
    categoria_assunto?: StringFieldUpdateOperationsInput | string
    tempo_resposta_estipulado?: StringFieldUpdateOperationsInput | string
    comentarios?: ComentarioUpdateManyWithoutQuestaoNestedInput
  }

  export type QuestaoUncheckedUpdateWithoutAlternativasInput = {
    id?: IntFieldUpdateOperationsInput | number
    enunciado?: StringFieldUpdateOperationsInput | string
    assunto?: StringFieldUpdateOperationsInput | string
    nivel_dificuldade?: StringFieldUpdateOperationsInput | string
    referencia?: StringFieldUpdateOperationsInput | string
    explicacao?: StringFieldUpdateOperationsInput | string
    tags?: QuestaoUpdatetagsInput | string[]
    data_criacao?: DateTimeFieldUpdateOperationsInput | Date | string
    origem?: StringFieldUpdateOperationsInput | string
    categoria_concurso?: StringFieldUpdateOperationsInput | string
    peso?: IntFieldUpdateOperationsInput | number
    categoria_assunto?: StringFieldUpdateOperationsInput | string
    tempo_resposta_estipulado?: StringFieldUpdateOperationsInput | string
    comentarios?: ComentarioUncheckedUpdateManyWithoutQuestaoNestedInput
  }

  export type QuestaoCreateWithoutComentariosInput = {
    enunciado: string
    assunto: string
    nivel_dificuldade: string
    referencia: string
    explicacao: string
    tags?: QuestaoCreatetagsInput | string[]
    data_criacao: Date | string
    origem: string
    categoria_concurso: string
    peso: number
    categoria_assunto: string
    tempo_resposta_estipulado: string
    alternativas?: AlternativaCreateNestedManyWithoutQuestaoInput
  }

  export type QuestaoUncheckedCreateWithoutComentariosInput = {
    id?: number
    enunciado: string
    assunto: string
    nivel_dificuldade: string
    referencia: string
    explicacao: string
    tags?: QuestaoCreatetagsInput | string[]
    data_criacao: Date | string
    origem: string
    categoria_concurso: string
    peso: number
    categoria_assunto: string
    tempo_resposta_estipulado: string
    alternativas?: AlternativaUncheckedCreateNestedManyWithoutQuestaoInput
  }

  export type QuestaoCreateOrConnectWithoutComentariosInput = {
    where: QuestaoWhereUniqueInput
    create: XOR<QuestaoCreateWithoutComentariosInput, QuestaoUncheckedCreateWithoutComentariosInput>
  }

  export type QuestaoUpsertWithoutComentariosInput = {
    update: XOR<QuestaoUpdateWithoutComentariosInput, QuestaoUncheckedUpdateWithoutComentariosInput>
    create: XOR<QuestaoCreateWithoutComentariosInput, QuestaoUncheckedCreateWithoutComentariosInput>
    where?: QuestaoWhereInput
  }

  export type QuestaoUpdateToOneWithWhereWithoutComentariosInput = {
    where?: QuestaoWhereInput
    data: XOR<QuestaoUpdateWithoutComentariosInput, QuestaoUncheckedUpdateWithoutComentariosInput>
  }

  export type QuestaoUpdateWithoutComentariosInput = {
    enunciado?: StringFieldUpdateOperationsInput | string
    assunto?: StringFieldUpdateOperationsInput | string
    nivel_dificuldade?: StringFieldUpdateOperationsInput | string
    referencia?: StringFieldUpdateOperationsInput | string
    explicacao?: StringFieldUpdateOperationsInput | string
    tags?: QuestaoUpdatetagsInput | string[]
    data_criacao?: DateTimeFieldUpdateOperationsInput | Date | string
    origem?: StringFieldUpdateOperationsInput | string
    categoria_concurso?: StringFieldUpdateOperationsInput | string
    peso?: IntFieldUpdateOperationsInput | number
    categoria_assunto?: StringFieldUpdateOperationsInput | string
    tempo_resposta_estipulado?: StringFieldUpdateOperationsInput | string
    alternativas?: AlternativaUpdateManyWithoutQuestaoNestedInput
  }

  export type QuestaoUncheckedUpdateWithoutComentariosInput = {
    id?: IntFieldUpdateOperationsInput | number
    enunciado?: StringFieldUpdateOperationsInput | string
    assunto?: StringFieldUpdateOperationsInput | string
    nivel_dificuldade?: StringFieldUpdateOperationsInput | string
    referencia?: StringFieldUpdateOperationsInput | string
    explicacao?: StringFieldUpdateOperationsInput | string
    tags?: QuestaoUpdatetagsInput | string[]
    data_criacao?: DateTimeFieldUpdateOperationsInput | Date | string
    origem?: StringFieldUpdateOperationsInput | string
    categoria_concurso?: StringFieldUpdateOperationsInput | string
    peso?: IntFieldUpdateOperationsInput | number
    categoria_assunto?: StringFieldUpdateOperationsInput | string
    tempo_resposta_estipulado?: StringFieldUpdateOperationsInput | string
    alternativas?: AlternativaUncheckedUpdateManyWithoutQuestaoNestedInput
  }

  export type AlternativaCreateManyQuestaoInput = {
    id?: number
    resposta: string
    correta: boolean
  }

  export type ComentarioCreateManyQuestaoInput = {
    id?: number
    usuario: string
    data_comentario: Date | string
    comentario: string
  }

  export type AlternativaUpdateWithoutQuestaoInput = {
    resposta?: StringFieldUpdateOperationsInput | string
    correta?: BoolFieldUpdateOperationsInput | boolean
  }

  export type AlternativaUncheckedUpdateWithoutQuestaoInput = {
    id?: IntFieldUpdateOperationsInput | number
    resposta?: StringFieldUpdateOperationsInput | string
    correta?: BoolFieldUpdateOperationsInput | boolean
  }

  export type AlternativaUncheckedUpdateManyWithoutQuestaoInput = {
    id?: IntFieldUpdateOperationsInput | number
    resposta?: StringFieldUpdateOperationsInput | string
    correta?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ComentarioUpdateWithoutQuestaoInput = {
    usuario?: StringFieldUpdateOperationsInput | string
    data_comentario?: DateTimeFieldUpdateOperationsInput | Date | string
    comentario?: StringFieldUpdateOperationsInput | string
  }

  export type ComentarioUncheckedUpdateWithoutQuestaoInput = {
    id?: IntFieldUpdateOperationsInput | number
    usuario?: StringFieldUpdateOperationsInput | string
    data_comentario?: DateTimeFieldUpdateOperationsInput | Date | string
    comentario?: StringFieldUpdateOperationsInput | string
  }

  export type ComentarioUncheckedUpdateManyWithoutQuestaoInput = {
    id?: IntFieldUpdateOperationsInput | number
    usuario?: StringFieldUpdateOperationsInput | string
    data_comentario?: DateTimeFieldUpdateOperationsInput | Date | string
    comentario?: StringFieldUpdateOperationsInput | string
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