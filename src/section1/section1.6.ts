// enum, keyof, typeof

//enum: 여러개의 변수를 하나의 그룹으로 묶고 싶을 때 사용함.
// 위에서부터 순서대로 0,1,2,3이라는 값이 부여됨.
const enum EDirection {
  Up,
  Down,
  Left,
  Right,
}

// 그러나 불규칙하게 직접 값을 부여할 수도 있음
const enum EDirection1 {
  Up = 3,
  Down = 4,
  Left = 5,
  Right = 6,
}
// 문자열도 가능함
const enum EDirection2 {
  Up = "123",
  Down = "456",
  Left = "hello",
  Right = "hi",
}
const up = EDirection.Up;
const left = EDirection1.Left;

// 위 enum EDirection을 객체로 변경할 경우(두 경우 같음)
// JS에서 EDirection은 날아가고, ODirection에서는 as const 부분만 날아감.
// as const를 제거하면, 타입 추른을 number로만 할 수 있음. 추가하면 이 값들을 상수로 쓰겠다는 뜻. readonly도 고정되어 있음.
const ODirection = {
  Up: 0,
  Down: 1,
  Left: 2,
  Right: 3,
} as const;

// enum과 동일한 방법
// It requires an extra line to pull out the keys

type DirectionKey = keyof typeof ODirection; // key들만 가져오는 방법
type DirectionValue = (typeof ODirection)[keyof typeof ODirection]; // value들만 가져오는 방법

const obj2 = { a: "123", b: "hello", c: "world" } as const;
type Key = keyof typeof obj2; // key들만 가져오는 방법
type Value = (typeof obj2)[keyof typeof obj2]; // value들만 가져오는 방법

// Using the enum as a parameter
function walk(dir: EDirection) {}
function run(dir: DirectionValue) {}

walk(EDirection.Left);
run(ODirection.Right);
