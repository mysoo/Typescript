// 17. 옵셔널, 제네릭 기본

// 옵셔널: 있어도 되고 없어도 된다. 물음표
function abc(a: number, b?: number, c?: number) {}
abc(1);
abc(1, 2);
abc(1, 2, 3);
// abc(1, 2, 3, 4); // 에러 발생

// 전부 다 받고 싶은 경우
function abc16(...args: number[]) {}
abc16(1);
abc16(1, 2);
abc16(1, 2, 3);
abc16(1, 2, 3, 4);

let obj16: { a: string; b?: string } = { a: "hello", b: "world" };
obj16 = { a: "hello" };

// 제네릭: 타입을 변수처럼 만드는 것. 나중에 타입을 정해줌.
// function add<T>(x: T, y: T): T {
//   //일단 같은 타입(T)이라고 둠
//   return x + y; //ts는 T를 인지하지 못함
// }

// add<number>(1, 2);
// add(1, 2);
// add<string>("1", "2");
// add("1", "2");
// add(1, "2");

// T 제한하기
function add<T extends string | number>(x: T): T {
  return x;
}
add(1);

function add2<T extends string[]>(x: T): T {
  return x;
}
add2(["1", "2", "3"]);
// <T extends {...}> // 특정 객체
// <T extends any[]> // 모든 배열
// <T extends (...args: any) => any> // 모든 함수 => 모든 함수를 넣고 싶을 경우 any 사용
// <T extends abstract new (...args: any) => any> // 생성자 타입
// <T extends keyof any> // string | number | symbol
