import React, { useReducer } from "react";
import { AuthContext } from './context'; 
import { registerReducer } from './reducer';
import { registerAction } from "./actions";

export const AuthProvider = (props) => {
    
    const [user, dispatch] = useReducer(registerReducer, { username: "", password: "", id: 0, name: "", surname: "" });

    function register(newUser) {
        const url = 'https://localhost:44311/api/services/app/User/Create';
        const body = {
            userNameOrEmailAddress: newUser.username,
            password: newUser.password,
            name: newUser.name,
            surname: newUser.surname,
            emailAddress: newUser.email,
            isActive: true,
            roleNames: ["admin"]               
        };
        const headers = {
            'Content-Type': 'application/json',
        };

        return fetch(url, {
            headers,
            body: JSON.stringify(body),
            method: "POST",
            mode: 'cors'
        })
        .then(response => {
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            return response.json();
        })
        .then(json => {
            if (!json.success) {
                throw new Error(json.error.message);
            }
            return json.result;
        })
        .catch(err => {
            console.error("Registration error:", err.message);
            throw err;
        })
        .finally(() => {
            // You might want to do some cleanup or logging here
        });
    }

    return (
        <AuthContext.Provider
            value={{ register }}
        >
            {props.children}
        </AuthContext.Provider>
    );
}
