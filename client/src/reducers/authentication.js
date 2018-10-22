import { USERS_LOGIN_REQUEST, USERS_LOGIN_SUCCESS, USERS_LOGIN_FAILURE, USERS_LOGOUT } from '../constants/action-types';

const initialState = {

}

export function authentication(state = initialState, action) {
  switch (action.type) {
    case USERS_LOGIN_REQUEST:
      return {
        loggingIn: true,
        user: action.user
      };
    case USERS_LOGIN_SUCCESS:
      return {
        loggedIn: true,
        user: action.token
      };
    case USERS_LOGIN_FAILURE:
      return {};
    case USERS_LOGOUT:
      return {};
    default:
      return state
  }
}