//ts->js로 변환 시 사라지는 타입 정의 방법 4가지

//방법1: 콜론
const val:true=true;

//방법2: type
type Add1 = ()=> number;

//방법3: interface
interface Minus1{}

//방법4: generic
Array<string>


//방법5: body없는 function (심화)
//타입 정의
function add3(x:number, y:number):number
//함수 선언
function add3(x:number,y:number){
    return x+y;
}
add3(4,5)

//방법6: as라는 특별한 키워드. 앞에 타입을 강제로 바꿈. 해당 부분도 js에서는 사라지는 부분!
let aa=123;
aa='hello'as unknown as number;