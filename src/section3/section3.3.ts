// 3. Omit, Exclude, Extract 타입 분석
// Omit type은 Pick, Exclude를 사용함. 여러 Utility 타입을 조합해서 만듦.

// Exclude 타입 사용법 : key들에서 뺴고 싶은 것 선택.
interface Profile {
  name: string;
  age: number;
  married: boolean;
}
type ExcludeMarried = Exclude<keyof Profile, "married">;

type Animal3 = "Cat" | "Dog" | "Human";
type Mammal3 = Exclude<Animal3, "Human">;

// Pick의 뒷부분을 Exclude로 배체 가능 => 이것이 Omit
const newZero33: Pick<Profile, ExcludeMarried> = {
  name: "zero",
  age: 29,
};

// Omit Type 만들기. extends keyof any 추가 이유: S가 아무값이나 되면 안되기 때문에 key값만 가능하다는 제한을 주기 위함.
// S extends keyof any : S는 string | number | symbol 이다.
// <T extends {...}> // 특정 객체
// <T extends any[]> // 모든 배열
// <T extends (...args: any) => any> // 모든 함수
// <T extends abstract new (...args: any) => any> // 생성자 타입
// <T extends keyof any> // string | number | symbol

type OmitCustom<T, S extends keyof any> = Pick<T, Exclude<keyof T, S>>;
const newZero333: OmitCustom<Profile, "married"> = {
  name: "zero",
  age: 29,
};

// type Exclue<T, U> = T extends U ? never : T; => T가 U의 부분집합이면 never(없애고), 아니면 남겨라
// type Extract<T, U> = T extends U ? T : never; => T가 U의 부분집합이면 남기고, 아니면 없애라
