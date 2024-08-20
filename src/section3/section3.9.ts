// 9. never, intersection, 지연평가

// never - never 때문에 type에서 error가 발생하는 경우가 많다.
type IsNever1<T> = T extends never ? true : false;
type IsNever2<T> = [T] extends [never] ? true : false; // 대괄호를 넣으면 분배법칙이 일어나지 않음.
type A39 = IsNever1<never>; // 공집합이기 때문에 대괄호 없어도 분배법칙 발생 x. never extends never는 never다.
type A399 = IsNever1<boolean>;

interface V0 {
  value: any;
}

// extends에서 T를 잘못 사용한 사례들
// const returnV0 = <T extends V0>(): T => {
//   // T === VO라고 생각하면 안됨. T가 V0의 부분집합임!
//   return { value: "test" };
// };

// function onlyBoolean<T extends boolean>(arg: T = false): T {
//   return arg;
// }

// intersection type을 만드는 또 다른 방법. 매개변수에 같은 타입 매개변수.
type Intersection<T> = T extends {
  a: (pa: infer U) => void;
  b: (pb: infer U) => void;
}
  ? U
  : never;

// union type을 만드는 또 다른 방법. 반환값으로 매개변수로 변경해도 동일하게 합집합이 됨.
type Union<T> = T extends { a: infer U; b: infer U } ? U : never;

type Result2 = Intersection<{ a(pa: 1 | 2): void; b(pb: 2 | 3): void }>; // 교집합:2, 합집합: 1,2,3

// ts 컴파일러는 T를 나중에 결정함.(지연평가)
// 따라서 type이 "string ? string : number"로 고정이 되어버림. 사람처럼 바로 판단 불가하기 때문에 에러 발생. 분배법칙 사용하면 가능.
// function double<T extends string | number>(
//   x: T
// ): T extends string ? string : number {
//   return x;
// }

// double("hi"); // 'hi'
// double(123); // 123

// 분배법칙 사용하여 해결.
function double<T extends [T] extends [string] ? string : number>(
  x: T
): [T] extends [string] ? string : number {
  return x;
}
