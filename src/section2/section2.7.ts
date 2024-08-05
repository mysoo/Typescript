// 오버로딩: 같은 타입을 여러번 선언하는 것

declare function add27(x: number, y: number): number;
declare function add27(x: number, y: number, z: number): number;

//오버로딩
add27(1, 2);
add27(2, 3, 4);

// interface 내에서도 overloading 가능
interface Add7 {
  (x: number, y: number): number;
  (x: string, y: string): string;
}

//overloading 해놨을 경우, 실제 구현부에서는 any를 사용해도 된다.
const add4: Add7 = (x: any, y: any) => x + y;

// class 내에서도 overloading 가능
class Add77 {
  add27(x: number, y: number): number;
  add27(x: string, y: string): string;

  add27(x: any, y: any) {
    return x + y;
  }
}
const result1 = new Add77().add27(1, 2);
const result2 = new Add77().add27("1", "2");
