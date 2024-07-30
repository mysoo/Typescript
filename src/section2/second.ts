// 2. filter 제네릭 분석

// filter의 경우 두개가 선언되어 있음. 같은 함수가 다양한 방법으로 사용되는 경우에는 여러번 선언되어 있는 경우가 있음
interface Array<T> {
  //filter
  filter<S extends T>(
    predicate: (value: T, index: number, array: T[]) => value is S,
    thisArg?: any
  ): S[];

  //아래 1번 예시로 type 변경해서 보기. 이 경우가 아래 filter임을 알 수 있음
  filter<S extends number>(
    predicate: (value: number, index: number, array: number[]) => value is S,
    thisArg?: any
  ): S[];

  //아래 2번 예시로 type 변경해서 보기.
  filter<S extends number | string>(
    predicate: (
      value: number | string,
      index: number,
      array: number | string[]
    ) => value is S,
    thisArg?: any
  ): S[];

  //
  filter(
    predicate: (value: T, index: number, array: T[]) => unknown,
    thisArg?: any
  ): T[];

  //아래 1번 예시로 type 변경해서 보기
  filter(
    predicate: (value: number, index: number, array: number[]) => unknown,
    thisArg?: any
  ): number[];

  //아래 2번 예시로 type 변경해서 보기
  filter(
    predicate: (
      value: number | string,
      index: number,
      array: number | string[]
    ) => unknown,
    thisArg?: any
  ): number | string[];
}

const filtered = [1, 2, 3, 4, 5].filter((value) => value % 2);
const filtered2 = ["1", 2, "3", 4, "5"].filter(
  (value) => typeof value === "string"
); // ['1','3','5'] string[]. 강의에서 filtered2 타입을 (string|number)[]로 추론해서 잘 추론하지 못하는 것으로 나오는데, 내 코드에서는 string[]으로 잘 추론함. (4분 7초 강의) 그 이유는?

//첫번째 filter 제네릭은 S이기 때문에 변경될 가능성이 있는데, 두번째 filter 제네릭은 변경될 가능성이 없음. 따라서 두번째 제네릭은 타입을 제대로 추론해줄 수 없기에 첫번째 제네릭이 가능성이 있음.
const predicate = (value: string | number): value is string =>
  typeof value === "string";

const filtered3 = ["1", 2, "3", 4, "5"].filter(predicate); // ['1','3','5'] string[]. 가능한 이유: 제네릭 내에서 string extends string|number이기 때문
