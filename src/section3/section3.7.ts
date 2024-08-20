// 7. 완전 복잡한 타입 분석하기(bind 편)

function a7(this: Window | typeof obj7, param: string) {
  console.log(this.name);
}

const obj7 = { name: "zero" };

const b7 = a7.bind(obj7);
b7("hello");

//ThisParameterType
type T7 = ThisParameterType<typeof a7>; // Window | { name: string }

//OmitThisParameter -> 타입추론 실패했을 경우 함수 타입 그대로, 성공했을 경우 매개변수와 return 값 그대로 함수 생성
type NoThis = OmitThisParameter<typeof a7>;

function add7(
  a: number,
  b: number,
  c: number,
  d: number,
  e: number,
  f: number
) {
  return a + b + c + d + e + f;
}

// ts는 bind 매개변수 개수를 정확하게 알고 있음. 개수가 다르면 에러 발생
const add31 = add7.bind(null);
add31(1, 2, 3, 4, 5, 6);

const add32 = add7.bind(null, 1); // 1이 a자리에 들어감.
add32(2, 3, 4, 5, 6);

const add33 = add7.bind(null, 1, 2);
add33(3, 4, 5, 6);

const add34 = add7.bind(null, 1, 2, 3);
add34(4, 5, 6);

const add35 = add7.bind(null, 1, 2, 3, 4);
add35(5, 6);

const add36 = add7.bind(null, 1, 2, 3, 4, 5);
add36(6);
