import {createAction} from '@reduxjs/toolkit';

import {REQUEST_ALL_DATA, SUCCESS_ALL_DATA, FAILED_ALL_DATA} from './constant';

export const request_all_data = createAction(REQUEST_ALL_DATA, () => ({
  all_data_loading: true,
}));

export const successAllData = createAction(SUCCESS_ALL_DATA, data => ({
  all_data_loading: true,
  payload: data,
}));

export const failedAllData = createAction(FAILED_ALL_DATA, () => ({
  all_data_loading: false,
  payload: [],
}));
