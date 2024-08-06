// 8. 타입스크립트는 건망증이 심하다(+에러 처리법)

interface Axios {
  get(): void;
}
interface CustomError extends Error {
  response?: {
    data: any;
  };
}
declare const axios: Axios;

async () => {
  try {
    await axios.get();
  } catch (err: unknown) {
    // console.error((err as CustomError).response?.data); //as 직접 사용하는 것 말고, 아래처럼 변수를 두는 방법도 존재함.
    const customError = err as CustomError; // as는 unknown일 때에는 어쩔 수 없이 사용해야 함.
    customError.response?.data;
  }

  //as의 문제? as는 사람이 붙이는 일. 사람이 붙이다보면 실수가 따라옴.
};

// as 제거 방식: class를 타입가드로 사용
class CustomError2 extends Error {
  response?: {
    data: any;
  };
}
async () => {
  try {
    await axios.get();
  } catch (err) {
    if (err instanceof CustomError2) {
      err.response?.data;
    }
  }
};
