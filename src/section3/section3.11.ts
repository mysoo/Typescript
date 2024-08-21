// 11. 데코레이터: 장식자
// 함수, 클래스, 클래스 내 속성들을 장식함. (기능을 추가하거나 변형)

class A11 {
  eat() {
    console.log("start"); //함수의 시작
    console.log("Eat");
    console.log("end"); //함수의 끝
  }

  work() {
    console.log("start");
    console.log("Work");
    console.log("end");
  }

  sleep() {
    console.log("start");
    console.log("Sleep");
    console.log("end");
  }
}

// 위에서 console.log("start");와 console.log("end");가 중복됨. => 데코레이터를 통해 쉽게 해결 가능.
// 데코레이터도 함수임. 데코레이터를 함수 윗줄이나 함수 앞에 붙이면 됨.
// 데코레이터를 여러개 붙이는 것도 가능함.
// 데코레이터의 한가지 제약사항: 새로운 함수를 return해야 함.

//데코레이터를 사용하여 중복함수를 제거한 예시
//originalMethod: eat(), work(), sleep()
function startAndEnd(originalMethod: any) {
  return function () {
    console.log("start");
    originalMethod();
    console.log("end");
  };
}

class AA11 {
  @startAndEnd
  eat() {
    console.log("Eat");
  }
  @startAndEnd
  work() {
    console.log("Work");
  }
  @startAndEnd sleep() {
    console.log("Sleep");
  }
}

//데코레이터를 사용하여 중복함수를 제거한 예시 - 매개변수가 있는 경우
function startAndEnd2(originalMethod: any) {
  return function (this: any, ...args: any[]) {
    console.log("start");
    originalMethod.call(this, ...args);
    console.log("end");
  };
}

class AAA11 {
  @startAndEnd2
  eat() {
    console.log("Eat");
  }
  @startAndEnd2
  work() {
    console.log("Work");
  }
  @startAndEnd2
  sleep() {
    console.log("Sleep");
  }
}

//데코레이터를 사용하여 중복함수를 제거한 예시 - return값이 있는 경우
function startAndEnd3(
  originalMethod: any,
  context: ClassMethodDecoratorContext
) {
  return function (this: any, ...args: any[]) {
    console.log("start");
    const result = originalMethod.call(this, ...args);
    console.log("end");
    return result;
  };
}

class AAAA11 {
  @startAndEnd3
  eat() {
    console.log("Eat");
  }
  @startAndEnd3
  work() {
    console.log("Work");
  }
  @startAndEnd3
  sleep() {
    console.log("Sleep");
  }
}

// type에 무엇이 들어올 지 모르기 때문에, 최대한 넓게 잡아주는 것이 좋음.
// This, Args, Return도 무엇이 올 지 모르기 때문에 generic으로.
function startAndEnd4<This, Args extends any[], Return>(
  originalMethod: (this: This, ...args: Args) => Return,
  context: ClassMethodDecoratorContext<
    This,
    (this: This, ...args: Args) => Return
  >
) {
  return function (this: This, ...args: Args) {
    console.log("start");
    const result = originalMethod.call(this, ...args);
    console.log("end");
    return result;
  };
}

class AAAAA11 {
  @startAndEnd4
  eat() {
    console.log("Eat");
  }
  @startAndEnd4
  work() {
    console.log("Work");
  }
  @startAndEnd4
  sleep() {
    console.log("Sleep");
  }
}

// class 데코레이터: 새로운 class를 return해야 함.
// method 데코레이터: 새로운 method를 return해야 함.

// type Context
// kind: 데코레이터의 종류
// name: 데코레이터의 대상. ex) 위에서 eat(), work(), sleep()의 이름.
// access, private, static: class의 멤버나 getter, setter, accessor만 있음.
// addInitializer: class나 method가 초기화될 때 실행되는 메서드. ex) class 선언 후, new를 붙여 instance를 만드는 것.

//class 데코레이터
function log<Input extends new (...args: any[]) => any>(
  value: Input,
  context: ClassDecoratorContext
) {
  if (context.kind === "class") {
    return class extends value {
      //원본 class를 상속하는 대체 class를 return
      constructor(...args: any[]) {
        super(args);
      }
      log(msg: string): void {
        console.log(msg);
      }
    };
  }
  return value; //class 데코레이터인데, method 앞에 쓸 경우 그냥 원본을 return 하겠다는 뜻
}

export
@log
class AAAAAA11 {
  @startAndEnd4
  eat() {
    console.log("Eat");
  }
  @startAndEnd4
  work() {
    console.log("Work");
  }
  @startAndEnd4
  sleep() {
    console.log("Sleep");
  }
}
