// 10. 앰비언트 선언, 선언 병합, 값과 타입

// 엠비언트 선언 = declare
// 특징: 구현부를 구현하지 않아도 됨.
// 언제 사용? : 외부에 js 파일이 있고, 그거에 대한 타입 정의(d.ts)

// 선언 병합. 표 참고
function Ex() {
  return "hello";
}
namespace Ex {
  export const a = "world";
  export type B = number;
}

Ex(); //hello
Ex.a; //world
const b310: Ex.B = 123;

// JS에서 interface 사라짐 -> namespace 내부에 아무것도 없음 -> namespace도 사라짐.
namespace Example2 {
  interface Inner {
    test: string;
  }
  type Test2 = number;
  export const a = "hi"; // 사라지지 않고, Example2 = {a: 'hi'}로 객체 형식이 됨.
}
