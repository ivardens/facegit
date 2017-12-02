// import {isFetched, isFetching, data, error} from '../actions/users';
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
      data: action.payload,
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

export const getData = state => state.users.data;
export const getIsAuthorized = state => state.users.error;
export const getIsFetched = state => state.users.isFetched;
