// 11. unknown과 any(그리고 타입 대입가능표)

// any를 쓸 바에는 unknown을 사용하자.
// any 타입의 문제: 타입스크립트가 타입 체크를 포기해버림. 따라서 타입스크립트를 쓰는 의미가 사라짐.

interface A11 {
  talk: () => void;
}

const a11: A11 = {
  talk() {
    return 3;
  },
};
// unknown을 사용할 경우 b의 타입을 정해줘서 정해진 타입만 사용할 수 있게 할 수 있음.
// unknown은 지금 당장 타입을 모르겠을 경우 사용. 나중에 사용할 때 타입을 지정할 수 있음.
const b11: unknown = a11.talk();
(b11 as A11).talk();

// unknown이 가장 흔하게 나오는 예시: try catch 문에서의 error - 어떠한 에러가 나올지 모르기 때문
try {
} catch (error) {
  // error.message // 에러 발생
  (error as Error).message; //Error 타입: TS가 제공하는 기본 Error Type
}
