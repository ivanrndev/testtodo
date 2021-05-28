import {all} from 'redux-saga/effects';
import {watchAutorization} from './userSagas';
import {watchLogOut} from './logOut';

export function* rootSagas() {
  yield all([watchAutorization(), watchLogOut()]);
}
