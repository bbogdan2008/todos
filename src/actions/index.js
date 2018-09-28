import { ADD_TODO } from "../constants/action-types";

export const addTodo = text => ({
  type: ADD_TODO,
  payload: text
});

