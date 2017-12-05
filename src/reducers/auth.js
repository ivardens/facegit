import { authorize, logout } from '../actions/auth';
import { handleActions } from 'redux-actions';
import { combineReducers } from 'redux';

const isAuthorized = handleActions(
  {
    [authorize]: () => true,
    [logout]: () => false
  },
  false
);

export default combineReducers({
  isAuthorized
});

export const getIsAuthorized = state => state.auth.isAuthorized;
