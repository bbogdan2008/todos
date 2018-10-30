import { takeLatest, call, put } from "redux-saga/effects";
import { LIST_PLANS_REQUEST } from "../constants/action-types";
import { fetchPlansListRequest } from "./PlanService";

// watcher saga: watches for actions dispatched to the store, starts worker saga
export function* planSaga() {
    yield takeLatest(LIST_PLANS_REQUEST, plansListSaga);
  }
  
  // worker saga: makes the api call when watcher saga sees the action
function* plansListSaga() {
    try {
      const response = yield call(fetchPlansListRequest);
      const plansList = response.data.plans;
  
      // dispatch a success action to the store with the new dog
      yield put({ type: "LIST_PLANS_SUCCESS", list: plansList });
  
    } catch (error) {
      // dispatch a failure action to the store with the error
      yield put({ type: "LIST_PLANS_FAILURE", error });
    }
  }