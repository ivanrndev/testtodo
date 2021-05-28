import {put, takeEvery, all, delay} from 'redux-saga/effects';
import ActionTypes from './index';
import {useDispatch} from 'react-redux';

const dispatch = useDispatch;

function* autorization(log, pas) {
  try {
    let response = yield fetch(
      'https://dev.campanile.com.ua/api/v1/courier/login',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          phone: `${log}`,
          password: `${pas}`,
        }),
      },
    );
    let json = yield response.json();
    dispatch(json);
  } catch (error) {
    console.error(error);
  }
}

function* watchAutorization() {
  yield takeEvery(ActionTypes.AUTORIZATION, autorization);
}

export function* rootSagas() {
  yield all([watchAutorization()]);
}

export default rootSagas;
