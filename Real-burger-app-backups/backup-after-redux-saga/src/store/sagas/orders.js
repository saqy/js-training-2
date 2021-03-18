import { put } from "redux-saga/effects";
import * as dispatchers from "../actions/Index";
import axios from "../../axiosOrders";
import delay from "redux-saga";

export function* orderSaga(action) {
  yield put(dispatchers.loading_order());
  try {
    const response = yield axios.post(
      "/orders.json?auth=" + action.token,
      action.order
    );
    yield put(dispatchers.order_success(response.data.name, action.order));
  } catch (error) {
    yield put(dispatchers.order_fail());
  }
  yield put(dispatchers.order_purchased_true());
}
export function* order_purchased_falseSaga(action) {
  yield delay();
  yield put(dispatchers.order_purchased_false_spinner());
}
export function* order_fetchSaga(action) {
  yield put(dispatchers.loading_order());
  try {
    const response = yield axios.get("/orders.json?auth=" + action.token);

    const orders = [];
    for (let key in response.data) {
      if (response.data[key].userId === action.userId) {
        orders.push({ id: key, ...response.data[key] });
      }
    }
    yield put(dispatchers.order_fetch_success(orders));
  } catch (error) {
    yield put(dispatchers.order_fetch_fail());
  }
}
