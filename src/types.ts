import { Then, ElseIf, Else } from './constructs';

export type ConditionalConstruct<A> = Then<A> | ElseIf<A> | Else<A>;

// export type Answer<T> = T extends () => unknown ? ReturnType<T> : T;
// export type Answer<T> = T extends (...args: any[]) => any ? ReturnType<T> : T;
// export type Answer<T> = T extends () => infer R ? R : T;
// export type Answer<T> = T extends (...args: any[]) => infer R ? R : T;
// export type Answer<T> = T extends (infer U)[]
//   ? U
//   : T extends (...args: any[]) => infer U
//   ? U
//   : T extends Promise<infer U>
//   ? U
//   : T;
type AnyFunction = (...args: any[]) => any;
export type Answer<T> = T extends AnyFunction ? ReturnType<T> : T;

export type Nullable<A> = A | null;
