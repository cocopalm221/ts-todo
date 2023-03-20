//call: 함수를 실행한다. Promise 관련 함수
//put: 특정 액션을 dispatch 한다.
//takeEvery: 모든 Request에 대해서 액션처리한다.
import { call, put, takeEvery } from "redux-saga/effects";
import { getCatsSuccess } from "./catSlice";

function* workGetCatsFetch() {
  console.log("4. 목록API호출:fetch 사용");
  //결과가 return 될때까지 대기(yield)
  const cats = yield call(() =>
    fetch(
      "https://api.thecatapi.com/v1/breeds?api_key=live_Z9dx0VtiK2f0qbMsh1fhE7Z3Sw21vaP79MAhtKChl3XFPpWKvoBDSa6OSqZHYNSJ"
    )
  );
  //리턴 값이 있으면 next()자동실행
  console.log("5. call:", cats);
  //리턴 값이 있을때까지 대기(함수실행 멈춤)
  const result = yield cats.json();

  //리턴 값이 있으면 next() 자동 실행
  console.log("6. 최종 출력 결과", result);

  //json의 image가 없는 경우도 있다.
  const resultSlice = result.slice(0, 10);
  //호출에 의해서 내용이 전달되면 화면갱신(state업데이트)

  //dispatch(getCatsSuccess(result))
  yield put(getCatsSuccess(resultSlice));
  //더이상 yield가 없으므로 next()는 종료
}
function* catSaga() {
  //index.js에서 sata.run(catSaga)
  console.log("1.catSaga");
  //모든 Request에 대해서 액션처리한다.
  //catsSlice의 getCatsFetch를 감시한다.
  yield takeEvery("cats/getCatsFetch", workGetCatsFetch);
}
export default catSaga;
