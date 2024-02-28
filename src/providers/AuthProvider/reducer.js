
import { handleActions } from 'redux-actions';
import { AuthActionEnums } from './actions';

export const authReducer = handleActions(
  {
    [AuthActionEnums.login]: (state, action) => {
      return { ...state, user: action.payload.username, isAuthenticated: true };
    },
    [AuthActionEnums.createUser]: (state, action) => {
      return { ...state, user: action.payload.username, isAuthenticated: true };
    },
  },
  { user: null, isAuthenticated: false }
);
