import {call, put, takeLatest} from 'redux-saga/effects';
import {
  fetchFollowersRequest,
  fetchFollowersSuccess,
  fetchFollowersFailure
} from '../actions/followers';
<<<<<<< HEAD
import {getUserFollowers} from '../api';

export function* fetchFollowersSaga(action) {
  console.log(action);
  try {
    const followers = yield call(getUserFollowers, action.payload);
    yield put(fetchFollowersSuccess(followers));
=======

import {getUserFollowers} from '../api';

export function* fetchFollowersSaga(action) {
  try {
    const followersResult = yield call(getUserFollowers, action.payload);
    yield put(fetchFollowersSuccess(followersResult));
>>>>>>> 4247adee3a1190cec0f7bd992c43981dd351e4de
  } catch (error) {
    yield put(fetchFollowersFailure(error));
  }
}

export function* fetchFollowersWatch() {
  yield takeLatest(fetchFollowersRequest, fetchFollowersSaga);
}
