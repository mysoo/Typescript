// 6. 공변성과 반공변성

// return 값
function a26(x: string): number {
  return +x;
}

type B26 = (x: string) => number | string;
let b26: B26 = a26; //서로 타입이 다른데, 대입이 됨.

//불가능한 예시: return 값은 넓은 type에서 좁은 type으로 대입 불가능.
// function a26(x: string): number | string {
//   return 0;
// }
// type B26 = (x: string) => number;
// let b26: B26 = a26;

// 매개변수는 return값과 반대이다. 매개변수는 좁은 type으로 대입 가능, 넓은 type으로 대입 불가능.
function aa26(x: string | number): number {
  return 0;
}
type BB26 = (x: string) => number;
let bb26: BB26 = aa26;

//불가능한 예시: 매개변수는 넓은 타입으로 대입 불가능.
// function aa26(x: string): number {
//   return 0;
// }
// type BB26 = (x: string | number) => number;
// let bb26: BB26 = aa26;

//최종 return, 매개변수 대입 가능 예시
function aaa(x: string | number): number {
  return 0;
}

type BBB = (x: string) => number | string;
let bbb: BBB = aaa;
