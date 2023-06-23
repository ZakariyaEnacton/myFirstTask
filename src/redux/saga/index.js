import {all} from 'redux-saga/effects';
import homeSagaData from './homeSaga';

function* rootSaga() {
  [yield all([homeSagaData()])];
}

export default rootSaga;
