import {handleActions} from 'redux-actions';
import {
  fetchFollowersRequest,
  fetchFollowersSuccess,
  fetchFollowersFailure
} from '../actions/followers';

export default handleActions(
  {
    [fetchFollowersRequest]: (state, action) => ({
      ...state,
      isFetched: true,
      isFetching: true
    }),
    [fetchFollowersSuccess]: (state, action) => ({
      ...state,
      ids: action.payload,
      isFetched: true,
      isFetching: false
    }),
    [fetchFollowersFailure]: (state, action) => ({
      ...state,
      error: action.payload,
      isFetched: false,
      isFetching: false
    })
  },
  {
    ids: [],
    error: null,
    isFetched: false,
    isFetching: false
  }
);

export const getFollowersIds = state => state.followers.ids;
export const getFollowersError = state => state.followers.error;
export const getFollowersIsFetched = state => state.followers.isFetched;
export const getFollowersIsFetching = state => state.followers.isFetching;
