import {put, takeEvery} from 'redux-saga/effects';
import {REQUEST_ALL_DATA} from '../constant';
import {successAllData} from '../action';

//saga watcher function
function* homeSagaData() {
  yield takeEvery(REQUEST_ALL_DATA, getDataList);
}

function* getDataList() {
  const url = 'https://lbp8api.enactweb.com/public/apphome';
  let data = yield fetch(url);
  if (data.ok == true) {
    let dataJson = yield data.json();
    yield put(successAllData(dataJson.data));
  } else {
    yield put(failedAllData());
  }
}
export default homeSagaData;
