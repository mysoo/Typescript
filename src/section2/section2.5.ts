// 5. filter 타입 직접 만들기

interface Arr25<T> {
  filter<S extends T>(callback: (v: T) => v is S): S[];
}

const a25: Arr25<number> = [1, 2, 3];
const b25 = a25.filter((v): v is number => v % 2 === 0); //[2]
const c25: Arr25<number | string> = [1, "2", 3, "4", 5]; //S는 T의 부분집합
const d25 = c25.filter((v): v is string => typeof v === "string"); // ['2', '4'] d25가 string[]만 나오는 것이 아닌, (string|number)[]로 추론함. => 새로운 제네릭 추가

const predicate5 = (v: string | number): v is number => typeof v === "number";
const e25 = c25.filter(predicate5); // [1, 3, 5]
