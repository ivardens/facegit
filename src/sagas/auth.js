<<<<<<< HEAD
import { authorize, logout } from '../actions/auth';
import { take, put, call, select } from 'redux-saga/effects';
import { setTokenApi, clearTokenApi } from '../api';
import { getIsAuthorized } from '../reducers/auth';
=======
import {authorize, logout} from '../actions/auth';
import {take, takeLatest, put, call, select} from 'redux-saga/effects';
import {setTokenApi, clearTokenApi} from '../api';
import {getIsAuthorized} from '../reducers/auth';
>>>>>>> 4247adee3a1190cec0f7bd992c43981dd351e4de
import {
  getTokenFromLocalStorage,
  setTokenToLocalStorage,
  removeTokenFromLocalStorage
} from '../localStorage';

export function* authFlow(action) {
  while (true) {
    const isAuthorized = yield select(getIsAuthorized);
    const localStorageToken = yield call(getTokenFromLocalStorage);
    let token;

    if (!isAuthorized) {
      if (localStorageToken) {
        token = localStorageToken;
        yield put(authorize());
      } else {
        const action = yield take(authorize);
        token = action.payload;
      }
    }

    yield call(setTokenApi, action.payload);
    yield call(setTokenToLocalStorage, token);
    yield take(logout);
    yield call(removeTokenFromLocalStorage);
    yield call(clearTokenApi);
  }
}
<<<<<<< HEAD
=======

// export const setTokenWatch = () => null;

export function* setTokenWatch() {
  yield takeLatest(authorize, authFlow);
}
>>>>>>> 4247adee3a1190cec0f7bd992c43981dd351e4de
