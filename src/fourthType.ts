// 추가적인 타입 never
// any를 최대한 쓰지 않는 것을 목표로 할 것.
// never, unknown, any 타입 주의하기. any는 최대한 피하고 쓰더라도 나중에 꼭 제대로 타이핑하기

// 빈 배열 선언 시 never 타입이 뜸. never타입에는 일반적인 타입이 올 수 없음. 

// 따라서 빈 배열 선언 시 반드시 타입 선업하기!!
try{
    // const array=[];//강의에서는 never type이지만 내 local에서는 any type. 이유는 tsconfig 설정 때문. !noImplicitAny && strictNullChecks일 때, never type이 됨.
    const array:number[]=[];
    array[0];
    array.push(1);
}catch(error){
    error;
}

// 최대한 ! 대신 if를 쓸 것
// ! 역할: 없어서 발생하는 에러는 내가 다 책임진다!. head1이 무조건 존재하여 null이나 undefined가 아님을 보증하는 방식. => 비추함. 아무도 책임질 수 없을 수 있음.
const head1 = document.querySelector('#head')!;
// const head1: Element = document.querySelector('#head')!; //이렇게 선언도 가능. Element는 글로벌이기 때문에 아무때나 가져다가 쓸 수 있음.
console.log(head1);

const head2 = document.querySelector('#head');
if (head2) {
  console.log(head2);
};