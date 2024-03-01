import { handleAction, handleActions } from "redux-actions"; 
import { AuthActionEnums } from "./actions"; 

export const loginReducer = handleActions(
    {
        [AuthActionEnums.login]: (state, action) => ({
            ...state,
            username: action.payload.username,
            password: action.payload.password,
        }),
        [AuthActionEnums.setId]: (state, action) => ({
            ...state,
            id: action.payload.id
        }),
        [AuthActionEnums.updateUserDetails]: (state, action) => ({
            ...state,
            name: action.payload.name,
            surname: action.payload.surname,
        })
    },
    { username: "", password: "", id: 0, name: "", surname: "" }
);