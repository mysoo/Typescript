// 객체 타이핑: type과 interface 구분하기

// type과 interface 중 무엇을 선택해야 하는가?: 간단하게 하고 싶을 경우 type을 쓰고, interface는 상속, 구현 등이 포함되어 있기 때문에 객체지향프로그래밍을 하고 싶을 경우 사용.
type A = { a: string }; // 객체 타입 A를 정의(새롭게 생성)함.
const a5: A = { a: "hello" };

interface B {
  a: string;
}
const b5: B = { a: "hello" };

// union 타입
// function add3(x: string | number, y: string | number): string | number {
//   return x + y;
// } //error
// add3(1, 2);
// add3("1", "2");
// add3(1, "2");

// add3이 맞다면 아래가 타입적으로는 성립하게 됨
// const result2: string | number = add3(1, 2);

// intersection 타입
type IntersectionValue = string & boolean; //불가능.
type IntersectionObject = { hello: "world" } & { zero: "cho" }; //객체는 가능. 둘 다 만족하면 됨.

type A2 = {
  a: string;
};
type B2 = {
  b: string;
};

const aa1: A2 | B2 = { a: "hello", b: "world" }; //가능. type이 A2 혹은 B2를 만족. b:"world"를 지워도 됨. 여러개 중 하나만 있으면 된다!
const bb1: A2 & B2 = { a: "hello", b: "world" }; //가능. type이 A2 그리고 B2를 모두 만족. b:"world"를 지우면 안됨. 모든 속성이 다 있어야 한다!
