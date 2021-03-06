import { takeLatest, call, put } from "redux-saga/effects";
import axios from "axios";
import { history } from '../helpers/history';

// watcher saga: watches for actions dispatched to the store, starts worker saga
export function* userSaga() {
  yield takeLatest("USERS_LOGIN_REQUEST", workerSaga);
  yield takeLatest("USERS_LOGOUT", logout);
}

// function that makes the api request and returns a Promise for response
function fetchLogin(email, password) {

  return axios.post("api/users/login", {
      email: email,
      password: password
    }
  );
};

function logout() {
  // remove user from local storage to log user out
  localStorage.removeItem('user');
}

// worker saga: makes the api call when watcher saga sees the action
function* workerSaga({ payload: {email, pswd}}) {
  try {
    const response = yield call(fetchLogin, email, pswd);
    const token = response.data.token;

    localStorage.setItem('user', token);
    history.push("/");
    
    // dispatch a success action to the store with the new dog
    yield put({ type: "USERS_LOGIN_SUCCES", token: token });

  } catch (error) {
    // dispatch a failure action to the store with the error
    yield put({ type: "LOGIN_FAILURE", error });
  }
}