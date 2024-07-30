// 18. 기본값 타이핑

// 기본값 b, c을 통해 자동으로 type을 추론함
const a18 = (b: number = 3, c: number = 5) => {
  return "3";
};

// 기본값이 객체인 경우
const aa18 = (b: { children: string } = { children: "zerocho" }) => {};

// 제네릭에 기본값을 넣어주는 경우
const addfunction = <T = unknown>(x: T, y: T) => ({ x, y }); //jsx에서는 헷갈릴 수 있기 때문에 기본값을 넣어줌
const addfunction2 = <T extends unknown>(x: T, y: T) => ({ x, y });

const result18 = addfunction2(1, 2); //기본값이 있다고 해도 타입 추론을 잘해줌. 추론을 잘 하고나면 기본값을 덮어 씌워서 T가 number가 됨.
