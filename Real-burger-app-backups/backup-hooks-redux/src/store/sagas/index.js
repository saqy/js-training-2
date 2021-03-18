import { takeEvery } from "redux-saga/effects";
import * as actions from "../actions/ActionTypes";
import { logoutSaga, auth_timeoutSaga, authSaga } from "./auth";
import { fetch_ingredientsSaga } from "./burgerBuilder";
import {
  orderSaga,
  order_purchased_falseSaga,
  order_fetchSaga,
} from "./orders";

export function* checkAuth() {
  yield takeEvery(actions.AUTH_LOGOUT_INIT, logoutSaga);
  yield takeEvery(actions.AUTH_TIMEOUT_INIT, auth_timeoutSaga);
  yield takeEvery(actions.AUTH_INIT, authSaga);
}
export function* checkBurgerBuilder() {
  yield takeEvery(actions.FETCHING_INGREDIENTS, fetch_ingredientsSaga);
}
export function* orders() {
  yield takeEvery(actions.ORDER_INIT, orderSaga);
  yield takeEvery(
    actions.ORDER_PURCHASED_FALSE_INIT,
    order_purchased_falseSaga
  );
  yield takeEvery(actions.ORDER_FETCH_INIT, order_fetchSaga);
}
