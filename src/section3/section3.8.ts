// 8. 완전 복잡한 타입 분석하기(flat 편)

// flat: 1차원은 그대로 두고, 그 이상의 차원들은 하나씩 낮춤
const a8 = [1, 2, 3, [1, 2], [[1], [2]]].flat(); // 1, 2, 3, 1, 2, [1], [2];

//flat
// flat<A, D extends number = 1>(
//     this: A,
//     depth?: D,
// ): FlatArray<A, D>[];

//FlatArray
// type FlatArray<Arr, Depth extends number> = {
//     done: Arr;
//     recur: Arr extends ReadonlyArray<infer InnerArr> ? FlatArray<InnerArr, [-1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20][Depth]>
//         : Arr;
// }[Depth extends -1 ? "done" : "recur"];

//FlatArray 내 문법 확인
type A8 = {
  name: string;
  age: number;
};

type B8 = A8[1 extends number ? "age" : "name"];

// type에서는 더하기 뺴기가 불가능하므로 -1은 위에서 배열[Depth]로 표현됨.
