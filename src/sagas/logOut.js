import {put, takeEvery} from 'redux-saga/effects';
import ActionTypes from '../utils/constants';
import {loading} from '../actions/userActions';

function* logOut() {
  try {
     yield fetch(
      'https://dev.campanile.com.ua/api/v1/courier/logout',
    );
  } catch (error) {
    yield put(loading());
    console.error(error);
  }
}

export function* watchLogOut() {
  yield takeEvery(ActionTypes.LOG_OUT, logOut);
}
