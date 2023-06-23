import {configureStore} from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import homeSagaData from './saga/homeSaga';
import rootReducer from './rootReducer';

const sagaMiddleware = createSagaMiddleware();
const store = configureStore({
  reducer: rootReducer,
  middleware: () => [sagaMiddleware],
});

sagaMiddleware.run(homeSagaData);

export default store;
