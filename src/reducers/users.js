import {
  fetchUserRequest,
  fetchUserSuccess,
  fetchUserFailure
} from '../actions/users';
import {handleActions} from 'redux-actions';

export default handleActions(
  {
    [fetchUserRequest]: state => ({
      ...state,
      isFetching: true
    }),
    [fetchUserSuccess]: (state, action) => ({
      ...state,
      data: action.payload,
      isFetching: false,
      isFetched: true,
      error: null
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

export const getIsAuthorized = state => state.users.isFetched;
//
export const getData = state => state.users.data;
export const getIsFetched = state => state.users.isFetched;
export const getIsFetching = state => state.users.isFetching;
export const getIsError = state => state.users.error;
