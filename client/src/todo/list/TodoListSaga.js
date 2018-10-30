import { takeLatest, call, put } from "redux-saga/effects";
import { fetchTodoListRequest } from "./TodoListService";

// watcher saga: watches for actions dispatched to the store, starts worker saga
export function* todoSaga() {
  yield takeLatest("LIST_TODOS_REQUEST", todoListSaga);
}

// worker saga: makes the api call when watcher saga sees the action
function* todoListSaga() {
  try {
    const response = yield call(fetchTodoListRequest);
    const todoList = response.data.todos;

    // dispatch a success action to the store with the new dog
    yield put({ type: "LIST_TODOS_SUCCESS", list: todoList });

  } catch (error) {
    // dispatch a failure action to the store with the error
    yield put({ type: "LIST_TODOS_FAILURE", error });
  }
}