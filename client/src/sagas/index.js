import { takeLatest, call, put } from "redux-saga/effects";
import axios from "axios";

// watcher saga: watches for actions dispatched to the store, starts worker saga
export function* watcherSaga() {
    yield takeLatest("LIST_TODOS_REQUEST", workerSaga);
  }

  // function that makes the api request and returns a Promise for response
function fetchTodoList() {
    return axios({
      method: "GET",
      url: "/api/todos"
    });
  }

// worker saga: makes the api call when watcher saga sees the action
function* workerSaga() {
    try {
      const response = yield call(fetchTodoList);
      console.log(response);
      const todoList = response.data.todos;
  
      // dispatch a success action to the store with the new dog
      yield put({ type: "LIST_TODOS_SUCCESS", list: todoList });
    
    } catch (error) {
      // dispatch a failure action to the store with the error
      yield put({ type: "LIST_TODOS_FAILURE", error });
    }
  }