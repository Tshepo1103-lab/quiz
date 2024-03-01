import { useContext, useReducer, useMemo } from "react";
import { AuthActionContext, AuthStateContext } from './context';
import { authReducer } from './reducer';
import { loginAction, createUserAction } from './actions';
import { message } from "antd";


const AuthProvider = (props) => {
  const [state, dispatch] = useReducer(authReducer, {
    user: null,
    isAuthenticated: false,
  });

  const authConfig = useMemo(
    () => ({ user: state.user, isAuthenticated: state.isAuthenticated }),
    [state]
  );

  const loginUserHttp = async (payload) => {
    try {
      const response = await fetch("https://localhost:44311/api/TokenAuth/Authenticate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      const data = await response.json();
      return data;
    } catch (error) {
      throw new Error(`Error during HTTP request: ${error.message}`);
    }
  };
  
  const loginUser = async (payload) => {
    try {
      const response = await loginUserHttp(payload);
  
      if (response.success) {
        localStorage.setItem("token", response.result.accessToken);
        dispatch(loginAction(response.result));
        console.log("User ID:", response.result);
        window.location.href = "/Deshboard";
      } else {
        message.error("Invalid username or password");
      }
    } catch (error) {
      console.error("Error during login:", error);
      message.error("Login failed");
    }
  };
  const createUser = async (userRegInfo) => {
    try {
      const token = localStorage.getItem("token");
      const response = await fetch(
        "https://localhost:44311/api/services/app/Person/Create",
        {
          method: "POST",
          cache: "no-cache",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(userRegInfo),
        }
      );

      if (response.ok) {
        const data = await response.json();
        dispatch(createUserAction(userRegInfo));
        message.success("User registration successful", data);
        window.location.href = "/Login";
      } else {
        const errorData = await response.json();
        message.error("User registration failed", errorData);
      }
    } catch (error) {
      console.error("Error during user registration:", error);
      message.error("User registration failed");
    }
  };
  return (
    <AuthStateContext.Provider value={authConfig}>
      <AuthActionContext.Provider value={{ loginUser, createUser }}>
        {props.children}
      </AuthActionContext.Provider>
    </AuthStateContext.Provider>
  );
};

function useAuthState() {
  const context = useContext(AuthStateContext);
  if (context === undefined) {
    throw new Error("useAuthState must be used within an AuthProvider");
  }
  return context;
}

function useAuthAction() {
  const context = useContext(AuthActionContext);
  if (context === undefined) {
    throw new Error("useAuthAction must be used within an AuthProvider");
  }
  return context;
}

function useAuth() {
  return [useAuthState(), useAuthAction()];
}

export { AuthProvider, useAuthState, useAuthAction, useAuth };
