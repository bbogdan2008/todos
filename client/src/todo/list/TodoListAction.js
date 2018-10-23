import { ADD_TODO, TOGGLE_TODO, SET_VISIBILITY_FILTER, LIST_TODOS_REQUEST } from "../../constants/action-types";

export const addTodo = text => ({
  type: ADD_TODO,
  payload: text
});

export const toggleTodo = id => ({
  type: TOGGLE_TODO,
  payload: id
});

export const setVisibilityFilter = filter => ({
  type: SET_VISIBILITY_FILTER,
  payload: filter
});

export const fetchTodoList = () => ({
  type: LIST_TODOS_REQUEST
});

