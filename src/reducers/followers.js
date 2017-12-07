import {handleActions} from 'redux-actions';
import {
  fetchFollowersRequest,
  fetchFollowersSuccess,
  fetchFollowersFailure
} from '../actions/followers';

<<<<<<< HEAD
const initialState = {
  ids: [],
  error: null,
  isFetched: false,
  isFetching: false
};

=======
>>>>>>> 4247adee3a1190cec0f7bd992c43981dd351e4de
export default handleActions(
  {
    [fetchFollowersRequest]: (state, action) => ({
      ...state,
<<<<<<< HEAD
      isFetching: true,
      ids: [],
      error: null
    }),

=======
      isFetched: true,
      isFetching: true
    }),
>>>>>>> 4247adee3a1190cec0f7bd992c43981dd351e4de
    [fetchFollowersSuccess]: (state, action) => ({
      ...state,
      ids: action.payload,
      isFetched: true,
<<<<<<< HEAD
      isFetching: false,
      error: null
    }),

    [fetchFollowersFailure]: (state, action) => ({
      ...state,
      error: action.payload
    })
  },
  initialState
);

export const getIds = state => state.followers.ids;
export const getIsFetched = state => state.followers.isFetched;
export const getIsFetching = state => state.followers.isFetching;
export const getError = state => state.followers.error;
=======
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
>>>>>>> 4247adee3a1190cec0f7bd992c43981dd351e4de
