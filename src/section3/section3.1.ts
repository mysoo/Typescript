// 1. Patial 타입 분석

// utility types로 알아보기 : 해당 타입들을 타입스크립트가 미리 만들어두어서, 우리는 가져다가 사용할 수 있음
// Partial: 필수값들을 모두 옵셔널로 만들어줌. 필드 하나 정도 차이나서 새로운 interface를 만들기 애매할 때 사용.

interface Profile {
  name: string;
  age: number;
  married: boolean;
}
const zero: Profile = {
  name: "zero",
  age: 29,
  married: false,
};
const newZero: Partial<Profile> = {
  name: "zero",
  age: 29,
};
// 인덱스 시그니처
type P<T> = {
  [key: string]: string;
};
// 맵드 타입
type P2<T> = {
  [key in keyof T]: string;
};

// 맵드 타입을 사용해서 Partial 만들어보기: P<Profile>{name}
type P3<T> = {
  [key in keyof T]?: T[key];
};
//해석하면 아래와 같음!
// P<Profile>{
//     name?:string;
//     age?:number;
//     married?:boolean
// }
