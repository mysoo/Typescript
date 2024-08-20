// 5. infer 타입 분석

function zip(
  x: number,
  y: string,
  z: boolean
): { x: number; y: string; z: boolean } {
  return { x, y, z };
}

type Params = Parameters<typeof zip>;
type First = Params[2];

// Parameters 타입 만들어보기
type ParamsTypeCustom<T extends (...args: any) => any> = T extends (
  ...args: infer A
) => any
  ? A
  : never;
type Params35 = ParamsTypeCustom<typeof zip>;
// infer는 extends에서만 사용 가능!
// 추론 조건? 추론 성공 시의 값 : 추론 실패 시의 값

//return type 만들어보기
type ReturnTypeCustom<T extends (...args: any) => any> = T extends (
  ...args: any
) => infer A
  ? A
  : never;

//존재하는 return type
type Return = ReturnType<typeof zip>;

// infer 위치를 바꿈으로 typescript가 알아서 return 값 위치를 가져올 수 있게 할 수 있음.

// 어떤 함수가 있으면 매개변수 타입을 하나 하나 적어줄 필요 없음
// type Params = [number, string, boolean] // 하드코딩
type ParamsReturn = ReturnType<typeof zip>; // 자동으로 읽어오도록 함

// ConstructorParameters
class A5 {
  a: string;
  b: number;
  c: boolean;
  constructor(a: string, b: number, c: boolean) {
    this.a = a;
    this.b = b;
    this.c = c;
  }
}
const c5 = new A5("123", 456, true);
type C5 = ConstructorParameters<typeof A5>; // 생성자의 타입 가져오기. typeof class가 생성자.
type I5 = InstanceType<typeof A5>; // 인스턴스 타입 가져오기

const aa5: A5 = new A5("123", 456, true); //여기서 A5는 클래스가 아닌 인스턴스(new 붙여서 실제 객체로 만들어 낸 것).

//Utility Type 중 LowerCase(모두 소문자)
//LowerCase의 intrinsic: 타입스크립트 코드로 구현이 불가하여 따로 처리해두었다는 뜻
const aaa5 = "Hello World";
const bbb5: Lowercase<typeof aaa5> = aaa5.toLowerCase(); //error 발생?
