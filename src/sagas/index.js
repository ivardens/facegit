import {fork} from 'redux-saga/effects';
import {fetchUserWatch} from './users';
// import {fetchUserReposWatch} from './repos';
import {fetchFollowersWatch} from './followers';
<<<<<<< HEAD
import {authFlow} from './auth';

export default function*() {
  yield fork(authFlow);
=======
import {setTokenWatch} from './auth';

export default function*() {
  yield fork(setTokenWatch);
>>>>>>> 4247adee3a1190cec0f7bd992c43981dd351e4de
  yield fork(fetchUserWatch);
  // yield fork(fetchUserReposWatch);
  yield fork(fetchFollowersWatch);
}
