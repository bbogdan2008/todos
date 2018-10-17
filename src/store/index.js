import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from '../reducers/index';

import createSagaMiddleware from "redux-saga";
import { watcherSaga } from "../sagas/index";

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();

const reduxDevTools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const store = createStore(
  rootReducer,
  compose(applyMiddleware(sagaMiddleware), reduxDevTools)
);

// run the saga
sagaMiddleware.run(watcherSaga);

export default store;