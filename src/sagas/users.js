<<<<<<< HEAD
import { call, put, takeLatest } from 'redux-saga/effects';
=======
import {call, put, takeLatest} from 'redux-saga/effects';
>>>>>>> 4247adee3a1190cec0f7bd992c43981dd351e4de
import {
  fetchUserRequest,
  fetchUserSuccess,
  fetchUserFailure
} from '../actions/users';
<<<<<<< HEAD
import { getUserInformation } from '../api';
=======
import {getUserInformation} from '../api';
>>>>>>> 4247adee3a1190cec0f7bd992c43981dd351e4de

export function* fetchUserSaga(action) {
  try {
    const userResult = yield call(getUserInformation, action.payload);
    yield put(fetchUserSuccess(userResult));
  } catch (error) {
    yield put(fetchUserFailure(error));
  }
}

export function* fetchUserWatch() {
  yield takeLatest(fetchUserRequest, fetchUserSaga);
}
