// Custom Type Guard (is)

interface Cat {
  meow: number;
}
interface Dog {
  bow: number;
}
// return 값의 is도 type guard 중 하나
// 타입을 구분해주는 커스텀 함수를 우리가 직접 만들 수 있음. '커스텀 타입 가드'라고 부름
function catOrDog(a: Cat | Dog): a is Dog {
  //타입 판별을 우리가 직접 만들기
  if ((a as Cat).meow) {
    return false;
  }
  return true;
}
// 타입을 구분해주는 커스텀 함수를 우리가 직접 만들 수 있음.
const cat: Cat | Dog = { meow: 3 };
if (catOrDog(cat)) {
  console.log(cat.meow);
}
if ("meow" in cat) {
  console.log(cat.meow);
}

// 타입 가드 방법
const isRejected = (
  input: PromiseSettledResult<unknown>
): input is PromiseRejectedResult => input.status === "rejected";

const isFulfilled = <T>(
  input: PromiseSettledResult<T>
): input is PromiseFulfilledResult<T> => input.status === "fulfilled";

// Promise를 실행하면 Pending 상태에서 Settled(Resolved, Rejected) 상태가 됨.

const promises = await Promise.allSettled([
  Promise.resolve("a"),
  Promise.resolve("b"),
]);

// 에러들만 구분하는 방법: isRejected라는 Custom Type Guard 사용
// TS는 아래에서 Rejected인지 Fulfiled인지 모름. 따라서 모든 가능성으로 고려해서 에러 타입을 PromiseSettledResult라고 넓게 추론함.
// const errors1 = promises.filter((a) => true);
// const errors2 = promises.filter((promise) => promise.status === "rejected"); // 여전히 타입을 PromiseSettledResult라고 넓게 추론함
const errors = promises.filter(isRejected);

// 성공들만 구분하는 방법: isFulfilled라는 Custom Type Guard 사용
const pass = promises.filter(isFulfilled);
export {};
