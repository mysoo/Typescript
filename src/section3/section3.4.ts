// 4. Required, Record, NonNullable 타입 분석

// Required: 옵셔널로 되어있는데, 필수로 만들고 싶을 경우 사용
interface Profile4 {
  name?: string;
  age?: number;
  married?: boolean;
}

const zero4: Required<Profile> = {
  name: "zero",
  age: 29,
  married: false,
};

// Required 타입 분석
//-?: modifier(옵셔널을 모두 제거)
type RequiredCustom<T> = {
  [Key in keyof T]-?: T[Key];
};

//Readonly: 수정하지 못하게 막기. readonly도 -를 붙일 수 있음!
const zero44: Readonly<Profile> = {
  name: "zero",
  age: 29,
  married: false,
};
type ReadonlyCustom<T> = {
  readonly [Key in keyof T]: T[Key];
};

//Record: 객체를 표현하는 한 가지 방법.
interface Obj {
  [key: string]: number;
}
const a34: Record<string, number> = { a: 3, b: 5, c: 7 };
type RecordCustom<T extends keyof any, S> = {
  [Key in T]: S;
};

// NonNullable 타입 분석: null과 undefined를 제외하고 싶을 때 사용
type AllType = string | null | undefined | boolean | number;
type NonNullableOnly = NonNullable<AllType>;
type NonNullableCustom<T> = T extends null | undefined ? never : T;
