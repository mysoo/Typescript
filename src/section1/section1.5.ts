// string과 String은 다름. 소문자로 하는 것 기억하기.
const a1: string = "hello";
const a2: String = "hell";

// 템플릿 리터럴 타입 존재(유니언 등 사용 가능)
type World = "world" | "hell";
const world: World = "world";

// type Greeting = "hello world"
type Greeting = `hello ${World}`;
const greet: Greeting = "hello hell"; // 정교하게 타입 추천을 받을 수 있음.

type Greeting2 = `hello ${string}`;
const greet2: Greeting2 = "hello hell"; // 타입 추천을 받을 수 없음.

// 배열 문법
let arr3: string[] = [];
let arr4: Array<string> = [];

// rest parameter: 매개변수를 받아옴
function rest(...args: number[]) {
  console.log(args); // [1, 2, 3]
}
// function rest(a: number, ...args: number[]) {
//   console.log(a, args); // 1, [2, 3]
// }

rest(1, 2, 3);

// 튜플 문법
const tuple3: [string, number] = ["1", 1];
// tuple3[2] = "hello"; //에러 발생. 두개 뿐인데 세번째 자리에 push하려고 하기 때문.
tuple3.push("hello"); //원래는 이것 또한 에러 발생해야 함. tuple은 수정 불가능한 배열이기 때문. ts가 바보라서 이거까지는 못막아줌.
