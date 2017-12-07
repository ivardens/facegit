import {authorize, logout} from '../actions/auth';
import {handleActions} from 'redux-actions';
import {combineReducers} from 'redux';

const isAuthorized = handleActions(
  {
    [authorize]: () => true,
    [logout]: () => false
  },
  false
);
// const token = handleActions(
//   {
//     [authorize]: (state, action) => action.payload
//   },
//   null
// );

export default combineReducers({
  // token,
  isAuthorized
});

<<<<<<< HEAD
// export const getToken = state => state.auth.token;
export const getIsAuthorized = state => state.auth.isAuthorized;
=======
export const getIsAuthorized = state => state.auth.token;
export const getToken = state => state.auth.token;
>>>>>>> 4247adee3a1190cec0f7bd992c43981dd351e4de
