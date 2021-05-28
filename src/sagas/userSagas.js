import {put, takeEvery} from 'redux-saga/effects';
import ActionTypes from '../utils/constants';
import {autorizate, loading, errorText} from '../actions/userActions';

function* autorization(action) {
  try {
    let response = yield fetch(
      'https://dev.campanile.com.ua/api/v1/courier/login',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          phone: `${action.data.logInput}`,
          password: `${action.data.pasInput}`,
        }),
      },
    );
    let json = yield response.json();
    console.log('111111111111111', json);
    if (json.data) yield put(autorizate());
    yield put({type: ActionTypes.ADD_USERS_INFO, data: json});
  } catch (error) {
    yield put(loading());
    yield put(errorText(error.message));
    console.error(error);
  }
}

export function* watchAutorization() {
  yield takeEvery(ActionTypes.AUTORIZATION, autorization);
}
