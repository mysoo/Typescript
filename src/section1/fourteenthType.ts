// 14. {}와 Object

// ts 4.8버전부터 추가된 내용들
const x14: {} = "hello";
const y14: Object = "hi"; // {}, Object : 모든 타입(null, undefined 제외)
// const xy14: Object = null; // error

// 실제 객체 타입! 그러나 object 타입 사용을 지양하고, interface, type, class 사용하기.
// const xx14: object = "hi";
const yy14: object = { hello: "world" };
const z14: unknown = "hi";

// unknown = {} | null | undefined 라는 공식이 ts 4.8버전부터 추가됨
if (z14) {
  z14; // if문 안에 들어가는 순간 null과 undefined가 아님. 따라서 {}가 됨
}
