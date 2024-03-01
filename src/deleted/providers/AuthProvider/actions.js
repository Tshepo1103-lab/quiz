import {createAction} from 'redux-actions';

export const AuthActionEnums = {
  login: 'LOGIN',
  createUser: 'CREATE_USER',
};

// Define action creators
export const loginAction = createAction(AuthActionEnums.login, (username, password) => ({ payload: { username, password } }));
export const createUserAction = createAction(AuthActionEnums.createUser, (username, password) => ({ payload: { username, password } }));
