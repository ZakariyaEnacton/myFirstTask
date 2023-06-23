import {DATA_LIST} from './constant';

const initialState = [];

export const reducerImp = (state = initialState, action) => {
  switch (action.type) {
    default:
      console.log('reducer log ', state, '*************', action);
      return {...state, ...(action.payload || {})};
  }
};
