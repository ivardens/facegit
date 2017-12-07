import {createActions} from 'redux-actions';

export const {
  fetchFollowersRequest,
  fetchFollowersSuccess,
  fetchFollowersFailure
<<<<<<< HEAD
} = createActions({
  FETCH_FOLLOWERS_REQUEST: undefined,
  FETCH_FOLLOWERS_SUCCESS: undefined,
  FETCH_FOLLOWERS_FAILURE: undefined
});
=======
} = createActions(
  'FETCH_FOLLOWERS_REQUEST',
  'FETCH_FOLLOWERS_SUCCESS',
  'FETCH_FOLLOWERS_FAILURE'
);
>>>>>>> 4247adee3a1190cec0f7bd992c43981dd351e4de
