import delay from "redux-saga";
import { put } from "redux-saga/effects";
import * as dispatchers from "../actions/Index";
import axios from "axios";

export function* logoutSaga(action) {
  yield localStorage.removeItem("token");
  yield localStorage.removeItem("userId");
  yield put(dispatchers.logout_succeed());
}
export function* auth_timeoutSaga(action) {
  yield delay(action.timeout);
  put(dispatchers.auth_logout());
}
export function* authSaga(action) {
  yield put(dispatchers.auth_loading());
  const user = {
    email: action.email,
    password: action.password,
    returnSecureToken: true,
  };
  let url = "";
  if (action.isSignup) {
    url =
      "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCu4Ldr2t-KElVBu9L-dyN52csbGX58r4E";
  } else {
    url =
      "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCu4Ldr2t-KElVBu9L-dyN52csbGX58r4E";
  }
  try {
    const response = yield axios.post(url, user);
    yield localStorage.setItem("token", response.data.idToken);
    yield localStorage.setItem("userId", response.data.localId);
    yield put(
      dispatchers.auth_success(response.data.idToken, response.data.localId)
    );
    yield put(dispatchers.auth_timeout(response.data.expiresIn));
  } catch (error) {
    yield put(dispatchers.auth_fail(error.response.data.error));
  }
}
