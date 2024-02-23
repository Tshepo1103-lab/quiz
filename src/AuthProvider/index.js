import { AuthActionContext,AuthStateContext } from "./context";
import { authLoginAction,authLogoutAction} from "./actions";
import { reducer } from './reducer';
import { useContext, useReducer} from "react";

export const AuthProvider=(props)=>{
    const [state,dispatch]=useReducer(reducer,{authenticated:false})

    const getState=()=>{
        return {...state};
    }
    const login=(username,password)=>{
        // console.log(username,password)
        dispatch(authLoginAction({username,password}));
    }

    const logout=()=>{
        // console.log(username,password)
        dispatch(authLogoutAction());
    }
    
    return (
        <AuthStateContext.Provider value={getState()}>
            <AuthActionContext.Provider value={{login,logout}}>
                 {props.children}
            </AuthActionContext.Provider>
        </AuthStateContext.Provider>
    )
}
export const useAuthStateContext=()=>{
    const context=useContext(AuthStateContext);
    return (context?context:()=>alert('Error: Cannot access out AuthProvider'));
}
export const useAuthActionContext=()=>{
    const context=useContext(AuthActionContext);
    return (context?context:()=>alert('Error: Cannot access out AuthProvider'));
}

export const useAuth=()=>([useAuthStateContext(),useAuthActionContext]);