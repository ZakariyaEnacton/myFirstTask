import {SUCCESS_ALL_DATA} from './constant';

const initialState = [];

export const reducerImp = (state = initialState, action) => {
  switch (action.type) {
    case SUCCESS_ALL_DATA:
    // return [...state, action.payload];
    // console.log('reducer log ', state, '*************', action);
    default:
      return {...state, ...(action.payload || {})};
  }
};
