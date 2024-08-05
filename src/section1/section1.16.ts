// 16. 클래스의 새로운 기능들

// 기본
class A16 {
  a: string;
  b: number;
  constructor(a: string, b: number = 123) {
    this.a = a;
    this.b = b;
  }
  method() {}
}
const a16: A16 = new A16("123");

// class 이름은 그 자체로 type이 될 수 있다. 그러나 class를 가리키는 것이 아닌 new A(instance)를 가리킴
type AA16 = A16;

// class 자체를 가리키는 type
typeof A16;
const b16: typeof A16 = A16;

// ts와 js의 private
// js보다 ts의 private 사용 권장. 이유: ts는 protected 사용가능, js는 불가능이기 때문
class AAA16 {
  private a: string = "123"; // ts private => 실제 코드에서는 public으로 바뀜
  //   protected
  #b: number = 123; // js private

  method() {
    console.log(this.a, this.#b);
  }
}

// class에 private, protected, implements
// implements: interface를 구현하는 것. 해당 interface를 따라야 함

interface AAAA16 {
  readonly a: string;
  b: string;
}
class BBBB16 implements AAAA16 {
  //   private a: string = "123";
  //   protected b: string = "world";
  a: string = "123";
  b: string = "world";
  c: string = "wow";
}
class C extends BBBB16 {}
// new C().a; //private: instance에서 접근 불가. class BBBB16안에서만 사용 가능
// new C().b; //protected: class 내에서 사용 가능, instance에서 사용 불가. private와의 차이는 상속 받은 클래스 내부에서는 접근 가능
new C().c; //public: instance에서 접근되는 속성

//추상 클래스: 클래스 모양만 미리 만들어 두고 실제 구현은 이후에 함. 꼭 구현을 해줘야 에러가 발생하지 않는다.
abstract class X {
  private readonly a: string = "123";
  b: string = "world";
  c: string = "wow";

  abstract method(): void;
  method2() {
    return "3";
  }
}

class Y extends X {
  // abstract이기 때문에 꼭 구현을 해줘야 함ㅋ
  method() {
    // console.log(this.a)
    console.log(this.b);
    console.log(this.c);
  }
}
new Y().c;
