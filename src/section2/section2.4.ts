// 4. map 타입 직접 만들기

interface Arr4<T> {
  forEach(callback: (item: T, index: number) => void): void;
  map<S>(callback: (v: T) => S): S[]; //새로운 제네릭 S추가
}
const a4: Arr4<number> = [1, 2, 3];
const b4 = a4.map((v) => v + 1); // [2, 3, 4]
const c4 = a4.map((v) => (v + 1).toString()); // string[]이어야 하는데 number[]로 잘못 추론하고 있음. => 새로운 제네릭 S추가
const d4 = a4.map((v) => v % 2 === 0); //[false, true, false] boolean[]
