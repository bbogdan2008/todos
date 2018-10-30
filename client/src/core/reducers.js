import { combineReducers } from 'redux';

import { todosReducer } from "../todo/list/TodoListReducer";
import { visibilityFilterReducer } from "../todo/list/visibilityFilterReducer";
import { authentication } from "../users/UsersReducer";
import { plansReducer } from "../plans/PlanReducer";

export default combineReducers({
  todos: todosReducer,
  plans: plansReducer,
  visibilityFilter: visibilityFilterReducer,
  authentication: authentication
});



