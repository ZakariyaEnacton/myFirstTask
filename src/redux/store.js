import createSagaMiddleware from 'redux-saga';
import {createStore, applyMiddleware} from 'redux';
import rootSaga from './saga';
import rootReducer from './rootReducer';
import logger from 'redux-logger';

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];

const store = createStore(rootReducer, applyMiddleware(...middlewares, logger));

sagaMiddleware.run(rootSaga);

export default store;

// import {configureStore} from '@reduxjs/toolkit';
// import createSagaMiddleware from 'redux-saga';
// import homeSagaData from './saga/homeSaga';
// import rootReducer from './rootReducer';

// const sagaMiddleware = createSagaMiddleware();
// const middlewares = [sagaMiddleware,];
// const store = configureStore({
//   reducer: rootReducer,
//   middleware: () => [sagaMiddleware],
// });

// sagaMiddleware.run(homeSagaData);

// export default store;
