import { handleActions } from "redux-actions"; 
import { AuthActionEnums } from "./actions"; 

export const registerReducer = handleActions(
    {
        [AuthActionEnums.register]: (state, action) => ({
            ...state,
            username: action.payload.username,
            password: action.payload.password,
            name: action.payload.name,
            surname: action.payload.surname,
            email: action.payload.email,
        })
    },
    { username: "", password: "", name: "", surname: "",email:"" }
);