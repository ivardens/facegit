import {
  fetchUserRequest,
  fetchUserSuccess,
  fetchUserFailure
} from '../actions/users';
<<<<<<< HEAD
import { handleActions } from 'redux-actions';

export default handleActions(
  {
    [fetchUserRequest]: (state, action) => ({
=======
import {handleActions} from 'redux-actions';

export default handleActions(
  {
    [fetchUserRequest]: state => ({
>>>>>>> 4247adee3a1190cec0f7bd992c43981dd351e4de
      ...state,
      isFetching: true
    }),
    [fetchUserSuccess]: (state, action) => ({
      ...state,
<<<<<<< HEAD
      data: action.payload.data,
      isFetching: false,
      isFetched: true
    }),
    [fetchUserFailure]: (state, action) => ({ ...state, error: action.payload })
=======
      data: action.payload,
      isFetching: false,
      isFetched: true,
      error: null
    }),
    [fetchUserFailure]: (state, action) => ({...state, error: action.payload})
>>>>>>> 4247adee3a1190cec0f7bd992c43981dd351e4de
  },
  {
    isFetched: false,
    isFetching: false,
    data: null,
    error: null
  }
);

<<<<<<< HEAD
export const getUsers = state => state.users.data;
export const getIsFetching = state => state.users.isFetching;
=======
export const getIsAuthorized = state => state.users.isFetched;
//
export const getData = state => state.users.data;
export const getIsFetched = state => state.users.isFetched;
export const getIsFetching = state => state.users.isFetching;
export const getIsError = state => state.users.error;
>>>>>>> 4247adee3a1190cec0f7bd992c43981dd351e4de
