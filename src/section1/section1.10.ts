// void의 두 가지 사용법

// 객체 리터럴은 잉여 속성 검사가 있음.
type A10 = { hello: string };
// const a10: A10 = { hello: "world", why: "error" };

//아래와 같이 변수로 빼내면 에러 사라짐. 타입을 붙여준 곳에 직접 객체 리터럴을 붙여주면 검사함.
const b10 = { hello: "world", why: "error" };
const c10: A10 = b10;

// void 타입은 return값을 사용하지 안 겠다는 뜻(메서드나 매개변수에서는 리턴값 사용 가능, but 조심해야 함)

//void 타입의 경우 return값이 있으면 에러 발생. 대신 return undefined는 가능. null 불가능
// function aa10(): void {
//   return "3";
// }

// void의 3가지 종류
//종류 1: return값이 void
function aaa10(): void {}
//종류 2: 매개변수가 void함수
function aaaa10(callback: () => () => void): void {}
//종류 3: 매서드가 void함수
interface aaaa10 {
  talk: () => void;
}
const a10: aaaa10 = {
  talk() {
    return 3;
  },
};
//예시
//아래와 같이 함수도 선언 가능.
//declare 선언 시, JS 변환 시 코드 사라짐.
declare function forEach1<T>(
  arr: number[],
  callback: (el: number) => undefined
): void;

declare function forEach2<T>(
  arr: number[],
  callback: (el: number) => number
): void;

declare function forEach3<T>(
  arr: number[],
  callback: (el: number) => void
): void;

let target: number[] = [];
// forEach1([1, 2, 3], (el) => target.push(el)); //당연히 number는 undefined와 다르기 때문에 에러 발생
forEach2([1, 2, 3], (el) => target.push(el)); //정상 동작
forEach3([1, 2, 3], (el) => target.push(el)); //정상 동작. number=>void인데 에러 아님. 이 상황이 매개변수에서 쓰인 void는 실제 return값이 무엇이든 상관하지 않겠다를 보여주는 예시
