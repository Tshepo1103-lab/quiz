import { createAction } from "redux-actions";

export const AuthActionEnums = {
  register: "REGISTER"
};

export const registerAction = createAction(
  AuthActionEnums.register,
  ({ username, password, name, surname, email }) => {
    return {
      username,
      password,
      name,
      surname,
      email
    };
  }
);
