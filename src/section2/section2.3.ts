// 3. forEach 타입 직접 만들기

interface Arr {
  forEach(callback: (item: number | string) => void): void;
}

const a23: Arr = [1, 2, 3];
a23.forEach((item) => {
  console.log(item);
  //   item.toFixed(1); // error 발생
  return "3";
});

const b23: Arr = ["1", "2", "3"];

b23.forEach((item) => {
  console.log(item);
  return "3";
});

// 제네릭 사용으로 수정
interface Arr2<T> {
  forEach(callback: (item: T) => void): void; // 만든 forEach 타입
  forEach(
    callbackfn: (value: T, index: number, array: readonly T[]) => void,
    thisArg?: any
  ): void; // 기존 정의된 forEach 타입
}

const aa23: Arr2<number> = [1, 2, 3];
aa23.forEach((item) => {
  console.log(item);
  item.toFixed(1); // unknown 발생 => 제네릭 위치를 forEach에서 Arr2로 이동
  return "3";
});

const bb23: Arr2<string> = ["1", "2", "3"];

bb23.forEach((item) => {
  console.log(item);
  return "3";
});
