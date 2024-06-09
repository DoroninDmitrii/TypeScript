export type Maybe<T> = T extends | null | undefined ? never : T;

type tests = [
  Maybe<null>,
  Maybe<undefined>,
  Maybe<string>,
  Maybe<false>,
  Maybe<0>,
  Maybe<"">,
];
