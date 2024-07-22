const a: string='5';
const b: number=5;
const c:boolean=true;
const d: undefined=undefined;
const e:null=null;

const f:true = true; // true로 고정
const g:5=5; //숫자 5로 고정

// 매개변수 및 return에 타입핑 => return값 타입은 매개변수 바로 뒤!! 
function add(x:number, y:number):number {return x+y}; 

//화살표 함수 타입 정의
const addarrow: (x:number, y:number)=>number=(x,y)=>x+y; 

//타입별칭을 이렇게 빼낼 수 있음.
type Add = (x:number, y:number)=>number; 
const addRefactor1: Add=(x,y)=>x+y;

//인터페이스를 통해 함수를 만드는 방법
interface AddInterface{ 
    (x:number, y:number):number;
}
const addRefactor2: AddInterface=(x,y)=>x+y;

//객체 타입 정의
const obj:{lat:number, lon:number}={lat:37.5, lon:127.5};

//배열 타입 정의
const arr:string[]=['123','456'];

//또다른 배열 타입 정의. < > 사용하는 것: 제네릭
const arr2:Array<number>=[123,456];

//튜플 타입 정의. 길이가 고정된 배열
const tuple:[number, number, string]=[123,456,'789'];
