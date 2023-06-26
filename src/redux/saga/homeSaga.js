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
  console.log('data -- >', data);
  if (Response.ok === 'true') {
    console.log('true');
  } else {
    console.log('false');
  }
  data = yield data.json();
  // console.log('Saga Function called -- >', data);
  yield put(successAllData(data.data));
}
export default homeSagaData;
