import {authorize, logout} from '../actions/auth';
import {handleActions} from 'redux-actions';

export default handleActions(
  {
    [authorize]: (state, action) => ({
      ...state,
      token: action.payload
    }),
    [logout]: state => ({...state, token: null})
  },
  {
    token: null
  }
);

export const getIsAuthorized = state => state.auth.token;
export const getToken = state => state.auth.token;
// export const getIsAuthorized = state => state.auth.authorize;
