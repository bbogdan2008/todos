import { combineReducers } from 'redux';

import { todosReducer } from "./todosReducer";
import { visibilityFilterReducer } from "./visibilityFilterReducer";
import { authentication } from "./authentication";

export default combineReducers({
  todos: todosReducer,
  visibilityFilter: visibilityFilterReducer,
  authentication: authentication
});



