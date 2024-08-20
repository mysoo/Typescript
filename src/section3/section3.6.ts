// 6. 완전 복잡한 타입 분석하기(Promise와 Awaited 편)

const p1 = Promise.resolve(1)
  .then((a) => a + 1)
  .then((a) => a + 1)
  .then((a) => a.toString());

const p2 = Promise.resolve(2);

const p3 = new Promise((res, rej) => {
  setTimeout(res, 1000); //unknown type인 이유: 타입 문제
});

Promise.all([p1, p2, p3]).then((result) => {
  console.log(result); // ['3', 2, unknown]
}); // result에 정확하게 타입이 추론되고 있음.

//T - [p1, p2, p3]
//keyof T = '0' | '1' | '2' | length  => T를 객체로 나타네면 {'0': p1, '1': p2, '2': p3, length: 3}

// Awaited Type
// type Awaited<T> = T extends null | undefined ? T : // special case for `null | undefined` when not in `--strictNullChecks` mode
//     T extends object & { then(onfulfilled: infer F, ...args: infer _): any; } ? // `await` only unwraps object types with a callable `then`. Non-object types are not unwrapped
//         F extends ((value: infer V, ...args: infer _) => any) ? // if the argument to `then` is callable, extracts the first argument
//             Awaited<V> : // recursively unwrap the value
//         never : // the argument to `then` was not callable
//     T; // non-object or non-thenable

type Result = Awaited<Promise<Promise<Promise<number>>>>; //Awaited는 Promise가 중첩된 형태일 수 있음. Promise가 아닌 최종 타입으로 풀어내줌.
