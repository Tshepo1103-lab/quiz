import { createAction } from "redux-actions";

export const AuthActionEnums = {
    login: "LOGIN",
    setId: "SET__ID",
    updateUserDetails: "SET_NAME_SURNAME",
}

export const loginAction = createAction(
    AuthActionEnums.login,
    ({username, password}) => { /** the payload creator takes in one param */
        return {
            username,
            password
        }
    }
);

export const setIdAction = createAction(
    AuthActionEnums.setId,
    (id) => { /** the payload creator takes in one param */
        return {
            id: id
        }
    }
);

export const updateDetailsAction = createAction(
    AuthActionEnums.updateUserDetails,
    ({name, surname}) => { /** the payload creator takes in one param */
        return {
            name,
            surname
        }
    }
);