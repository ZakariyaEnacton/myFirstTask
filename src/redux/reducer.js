import {DATA_LIST} from './constant';

const initialState = [];

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return {...state, ...(action.payload || {})};
  }
};
