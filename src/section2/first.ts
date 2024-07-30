// 1. forEach, map 제네릭 분석

// 제네릭 구현 예시: 인터페이스
interface Array<T> {
  //forEach
  forEach(
    callbackfn: (value: T, index: number, array: T[]) => void,
    thisArg?: any
  ): void;

  //map
  map<U>(
    callbackfn: (value: T, index: number, array: T[]) => U,
    thisArg?: any
  ): U[];

  // 아래 map 예시
  map<U>(
    callbackfn: (value: number, index: number, array: T[]) => U,
    thisArg?: any
  ): U[];
}

// 제네릭 구현 예시: forEach
[1, 2, 3].forEach((value) => {
  console.log(value);
}); //1, 2, 3. item이 number로 잘 추론됨.=> 제네릭 덕분에 가능

function add1<T>(x: T, y: T): T {
  return x;
}

// 하나의 T가 정해지면 다른 4개의 T도 정해짐
add1<number>(1, 2); //타입 파라미터로 직접 설정하는 경우: ts가 답답하게 추론을 못하는 경우
// <number>add(1, 2); //as 사용한 것과 동일. 강제로 타입을 변환시키는 것. 위와 다른 의미이기에 위치 조심하기
add1("1", "2");
add1(true, false);
// add("1", 2); //error

// 제네릭 구현 예시: map
const strings = [1, 2, 3].map((item) => item.toString()); //['1', '2', '3'] string[].
