import {setToken, authorize, logout} from '../actions/auth';
import {handleActions} from 'redux-actions';

export default handleActions(
  {
    [setToken]: (state, action) => ({
      ...state,
      token: action.payload,
      authorize: true
    }),
    [authorize]: (state, action) => ({...state, authorize: true}),
    [logout]: (state, action) => ({...state, token: null, authorize: false})
  },
  {
    token: null,
    authorize: false
  }
);

export const getToken = state => state.auth.token;
export const getIsAuthorized = state => state.auth.authorize;
