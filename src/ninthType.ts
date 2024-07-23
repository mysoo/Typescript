// 타입을 집합으로 생각하자(좁은 타입과 넓은 타입)
//좁은 타입을 넓은 타입에 넣을 수는 있지만, 넓은 타입을 좁은 타입에 넣는 것을 불가능!!

type A9 = string | number; //넓은 타입(집합 개념)
type B9 = string; //좁은 타입
type C9 = string & number; //더 좁은 타입

//비슷한 원리로 any는 전체집합, never는 공집합으로 볼 수 있음.

//객체 타입의 크기 비교하기. 구체적일수록 좁읍 타입.
type AA9 = { name: string }; //넓은 타입
type BB9 = { age: number }; //넒은 타입
type CC9 = { name: string; age: number }; //좁은 타입 Type CC9 = AA9 & BB9와 동일함
type DD9 = AA9 | BB9;

const c9: CC9 = { name: "zerocho", age: 29 };
const d9: DD9 = { name: "zerocho" };
// const e9: CC9 = { name: "zerocho", age: 29, married: false }; //error. 더 넓은 타입에 좁은 타입을 넣었는데 에러 발생함!! 특수한 상황이기 때문. 객체 리터럴 검사(잉여 속성 검사) 때문.
