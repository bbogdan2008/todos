import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './reducers';

import createSagaMiddleware from "redux-saga";

import { todoSaga } from "../todo/list/TodoListSaga";
import { userSaga } from "../users/UsersSaga";
import { planSaga } from "../plans/PlanSaga";

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();

const reduxDevTools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const store = createStore(
  rootReducer,
  compose(applyMiddleware(sagaMiddleware), reduxDevTools)
);

// run the sagas
sagaMiddleware.run(todoSaga);
sagaMiddleware.run(userSaga);
sagaMiddleware.run(planSaga);

export default store;