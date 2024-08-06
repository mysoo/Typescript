// 2. Pick 타입 분석

// 이 전에 배운 Partial이 좋은 건 아님. 이유: 모두 옵셔널되어서 아무것도 안 넣어도 되기 때문. 이런 경우를 원하는 경우는 거의 없음.
// 따라서 Pick이나 Omit을 사용. Partial보다 타입이 더 명확하기 때문.

interface Profile {
  name: string;
  age: number;
  married: boolean;
}

// Pick: Profile 중 'name'과 'age'만 가져오겠다.
const newZero2: Pick<Profile, "name" | "age"> = {
  name: "zero",
  age: 29,
};

//Omit: Pick과 반대. Profile에서 'married'만 제외하겠다.
const newZero3: Omit<Profile, "married"> = {
  name: "zero",
  age: 29,
};

// Pick type 만들기
type PickCustom<T, S extends keyof T> = {
  [Key in S]: T[Key];
};
