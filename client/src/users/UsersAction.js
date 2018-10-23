import { USERS_LOGIN_REQUEST, USERS_LOGIN_SUCCESS, USERS_LOGIN_FAILURE } from "../constants/action-types";

export const login = (email, pswd) => ({
  type: USERS_LOGIN_REQUEST,
  payload: {
    email: email, 
    pswd: pswd
  }
});

export const loginSuccess = (token) => ({
  type: USERS_LOGIN_SUCCESS,
  payload: {
    token: token
  }
});

export const loginFailure = (err) => ({
  type: USERS_LOGIN_FAILURE,
  payload: {
    err: err
  }
});
