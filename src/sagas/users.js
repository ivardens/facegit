import {call, put, takeLatest} from 'redux-saga/effects';
import {
  fetchUserRequest,
  fetchUserSuccess,
  fetchUserFailure
} from '../actions/users';
import {getUserInformation} from '../api';

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

// initial
// data: null
// error: null
// isFetching: false
// isFetched: false

// fetchUserRequest
// isFetching: true

// fetchUserSuccess
// data: userResult
// error: null
// isFetching: false
// isFetched: true
