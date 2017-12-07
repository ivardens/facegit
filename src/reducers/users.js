import {
  fetchUserRequest,
  fetchUserSuccess,
  fetchUserFailure
} from '../actions/users';

import {handleActions} from 'redux-actions';

export default handleActions(
  {
    [fetchUserRequest]: (state, action) => ({
      ...state,
      isFetching: true
    }),
    [fetchUserSuccess]: (state, action) => ({
      ...state,
      data: action.payload.data,
      isFetching: false,
      isFetched: true
    }),
    [fetchUserFailure]: (state, action) => ({...state, error: action.payload})
  },
  {
    isFetched: false,
    isFetching: false,
    data: null,
    error: null
  }
);

export const getUsers = state => state.users.data;
export const getIsFetching = state => state.users.isFetching;
