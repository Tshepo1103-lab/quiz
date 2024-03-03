import React, { useState,useMemo, useReducer, } from "react";
import { AuthContext } from './context'; 
import { loginReducer } from './reducer';
import { loginAction,logoutAction, setIdAction, updateDetailsAction } from "./actions";


export const AuthProvider = (props) => {
    const [user, dispatch] = useReducer(loginReducer, { username: "", password: "", id: 0, name: "", surname: "" });
    const[errorLogin,setErrorLogin]=useState('');

    
    const latestUser = useMemo(() => {
        console.log("memoized user", user);
        return { ...user };
    }, [user]);

    async function login(newUser) {
        try {
            const url = 'https://localhost:44311/api/TokenAuth/Authenticate';
            const body = {
                userNameOrEmailAddress: newUser.username,
                password: newUser.password,
                rememberClient: true,
            };
            const headers = {
                'Content-Type': 'application/json',
            };
    
            const response = await fetch(url, {
                headers,
                body: JSON.stringify(body),
                method: 'POST',
                mode: 'cors',
            });
    
            if (!response.ok) {
                throw new Error('Authentication failed');
            }
    
            const json = await response.json();
    
            if (json.success) {
                const accessToken = json.result.accessToken;
                const userId = json.result.id;
    
                localStorage.setItem('accessToken', accessToken);
                dispatch(setIdAction(userId));
    
                const token = localStorage.getItem('accessToken');
                localStorage.setItem('userId',userId)
                console.log(userId);
    
                const profileUrl = 'https://localhost:44311/api/services/app/Session/GetCurrentLoginInformations';
                const profileHeaders = {
                    Authorization: `Bearer ${token}`,
                };
                const profileResponse = await fetch(profileUrl, {
                    headers: profileHeaders,
                    method: 'GET',
                });
    
                if (profileResponse.ok) {
                    const profileJson = await profileResponse.json();
                    const profileUser = profileJson.result.user;
    
                    // Now, use the user ID from the profile
                    dispatch(setIdAction(profileUser.id));
    
                    dispatch(updateDetailsAction(profileUser));
                } else {
                    console.log('Could not get profile');
                }
            } else {
                console.log('Authentication failed');
            }
        } catch (error) {
            console.error('Error during authentication:', error.message);
            setErrorLogin(error.message);
        } finally {
            dispatch(loginAction(newUser));
        }
    }

    function logout() {
        console.log('Logging Out');
        dispatch(logoutAction());
        localStorage.clear();
        console.log(user);
    }

    return (
        <AuthContext.Provider value={{ user: latestUser, login, logout,error:{errorLogin} }}>
            {props.children}
        </AuthContext.Provider>
    );
};
