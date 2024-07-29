// 12. 타입 좁히기(타입 가드)

// 원시 타입 가드
function numOrStr(a: number | string) {
  if (typeof a === "string") {
    a.split(",");
  } else {
    a.toFixed(1);
  }
}

function numOrStr2(a: number | string) {
  //   a.tofixed(1); // 에러 발생: ts는 모든 가능성을 고려함. a가 number일 경우 에러가 발생하지 않지만 string일 경우 에러가 발생하기 때문에 ts는 에러를 발생시킴
  //   (a as number).toFixed(1); // ts에게 a가 number라는 것을 명시하면, 에러 발생 안함. 그러나 위험한 코드임. 사람이 실수할 수 있기 때문. 즉, unknown일 때를 제외하고 as를 사용하지 말자

  // 타입 가드 방식: if문 안에서 a가 number인것을 확인
  if (typeof a === "number") {
    a.toFixed(1);
  }
}

// 배열 타입 가드
function numOrNumArr(a: number | number[]) {
  if (Array.isArray(a)) {
    //배열인지 아닌지 구분하는 방법.
    // number[]
    a.slice(1);
  } else {
    //number
    a.toFixed(1);
  }
}

// 클래스 타입 가드
class AA12 {
  aaa() {}
}
class BB12 {
  bbb() {}
}

function aORB12(param: AA12 | BB12) {
  // param.aaa() // error
  if (param instanceof AA12) {
    param.aaa();
  }
}

aORB12(new AA12());
aORB12(new BB12());

// 안에 값과 속성 이름들로 구분
type B12 = { type: "b"; bbb: string };
type C12 = { type: "c"; ccc: string };
type D12 = { type: "d"; ddd: string };
type A12 = B12 | C12 | D12;
function typeCheck(a: A12) {
  if (a.type === "b") {
    a.bbb;
  } else if (a.type === "c") {
    a.ccc;
  } else {
    a.ddd;
  }
}
function typeCheck2(a: A12) {
  //유효한 js
  if ("bbb" in a) {
    a.type;
  } else if ("ccc" in a) {
    a.type;
  } else {
    a.type;
  }
}

// 보통 값으로 구분하는 경우가 많음. 따라서 객체를 여러개 생성할 경우 객체 안에 type이라는 속성을 하나씩 넣는 습관을 들이면 좋다! 객체에 라벨을 달아도는 것
const human = { type: "human" };
const dog = { type: "dog" };
const cat2 = { type: "cat" };
