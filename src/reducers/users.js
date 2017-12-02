import {isFetched, isFetching, data, error} from '../actions/users';
import {handleActions} from 'redux-actions';

export default handleActions(
  {
    [isFetched]: (state, action) => ({
      ...state,
      isFetched: true
    }),
    [isFetching]: (state, action) => ({...state, isFetching: false}),
    [data]: (state, action) => ({...state, data: action.payload}),
    [error]: (state, action) => ({...state, error: action.payload})
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
