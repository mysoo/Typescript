// 15. readonly, 인덴스드 시그니처, 맵드 타입스

// readonly
interface A15 {
  readonly a: string;
  b: string;
}
const a15: A15 = { a: "hello", b: "world" };
// a15.a = "123"; //error

// 인덱스드 시그니처
type B15 = { a: string; b: string; c: string; d: string; e: string };
type BB15 = { [key: string]: string }; // 어떤 키도 문자열이고, 그 값도 문자열. B15와 같의 의미

// 맵드 타입스
// key가 C15 내 세개 중 하나
type C15 = "Human" | "Mammal" | "Animal";
type CC15 = { [key in C15]: C15 };
const c15: CC15 = { Human: "Mammal", Mammal: "Mammal", Animal: "Animal" };
