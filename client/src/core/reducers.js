import { combineReducers } from 'redux';

import { todosReducer } from "../todo/list/TodoListReducer";
import { visibilityFilterReducer } from "../todo/list/visibilityFilterReducer";
import { authentication } from "../users/UsersReducer";

export default combineReducers({
  todos: todosReducer,
  visibilityFilter: visibilityFilterReducer,
  authentication: authentication
});



