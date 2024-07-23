// 타입 상속st
type Animal = { breath: true };
type Poyouru = Animal & { breed: true };
type Human = Poyouru & { think: true };

const zerocho: Human = { breath: true, breed: true, think: true };

// interface끼리는 서로 합쳐짐. 따라서 타 라이브러리 가능!!
interface Animal2 {
  breath: true;
}
interface Poyouru2 extends Animal2 {
  breed: true;
}
// interface Human2 extends Poyouru { // type 상속도 가능
//   think: true;
// }
interface Human2 extends Poyouru2 {
  think: true;
}

const zerocho2: Human2 = { breath: true, breed: true, think: true };

//Type, Interface Naming Rule: 아래처럼 붙이거나, 아예 안붙이는 것. 요즘은 안붙임
// interface I
// type T
// enum E
