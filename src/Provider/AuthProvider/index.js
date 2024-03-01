import React, { useMemo, useReducer, } from "react";
import { AuthContext } from './context'; 
import { loginReducer } from './reducer';
import { loginAction, setIdAction, updateDetailsAction } from "./actions";


export const AuthProvider = (props) => {
    
    // we get our state from the reducer and we store it in the provider
    // then we can decide to pass it down to the descendants
    const [user, dispatch] = useReducer(loginReducer, {username: "", password: "", id: 0, name: "", surname: ""});

    const latestUser = useMemo(() => {
        console.log("memoized user", user);
        return {
            ...user
        };
    }, [user]);

    // we dispatch the action with the desired new state
    function login(newUser) {
        console.log("Dispatching", newUser);

        const url = 'https://localhost:44311/api/TokenAuth/Authenticate';
        const body = {
            userNameOrEmailAddress: newUser.username,
            password: newUser.password,
            rememberClient: true
        };
        const headers = {
            'Content-Type': 'application/json',
        };

        fetch(url, {
            headers,
            body: JSON.stringify(body),
            method: "POST",
            mode: 'cors'
        }).then(response => {
            console.log(response);
            //..
            return response.json();
        }).then(json => {
            if (json.success) {
                json = json.result;
                const accessToken = json.accessToken;
                const id = json.id;

                localStorage.setItem("accessToken", accessToken);
                dispatch(setIdAction(id));

                const token = localStorage.getItem("accessToken")
                // ask for profile              
                const url = 'https://localhost:44311/api/services/app/Session/GetCurrentLoginInformations';
                const headers= {
                    Authorization: `Bearer ${token}`
                };
                fetch(url, {
                    headers,
                    method: "GET"
                }).then(res => {
                    console.log(res);
                    return res.json();
                }).then(json => {
                    console.log(json.result.user);
                    dispatch(updateDetailsAction(json.result.user));
                }).catch(err => {
                    console.log("could get profile");
                })
            }
        })
        .catch(err => {
            console.log("there was an error");
        })

        dispatch(loginAction(newUser));
    }

    function logout() {
        console.log("Logging Out");
        dispatch(loginAction({username: "", password: "", id: 0}));
        localStorage.clear();
        console.log(user);
        
    }

    /**
     * Passing down the user object and the login function to the descendants
     */
    return (
        <AuthContext.Provider
            value={{user: latestUser, login, logout}} 
        >
            {props.children}
        </AuthContext.Provider>
    );
}