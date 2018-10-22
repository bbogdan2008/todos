import { USERS_LOGIN_REQUEST, USERS_LOGIN_SUCCES, USERS_LOGIN_FAILURE } from "../constants/action-types";

export const login = (email, pswd) => ({
  type: USERS_LOGIN_REQUEST,
  payload: {
    email: email, 
    pswd: pswd
  }
});
