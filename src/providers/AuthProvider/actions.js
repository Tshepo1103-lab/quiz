import {createAction} from 'redux-actions';

export const AuthActionsEnum={
    login:'LOGIN',
    logout:'LOGOUT'
}

export const authLoginAction=createAction(AuthActionsEnum.login,(payload)=>payload);
export const authLogoutAction=createAction(AuthActionsEnum.logout)