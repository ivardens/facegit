import { createActions } from 'redux-actions';

export const {
  fetchUserRequest,
  fetchUserSuccess,
  fetchUserFailure
<<<<<<< HEAD
} = createActions({
  FETCH_USER_REQUEST: undefined,
  FETCH_USER_SUCCESS: undefined,
  FETCH_USER_FAILURE: undefined
});
=======
} = createActions(
  'FETCH_USER_REQUEST',
  'FETCH_USER_SUCCESS',
  'FETCH_USER_FAILURE'
);
>>>>>>> 4247adee3a1190cec0f7bd992c43981dd351e4de
