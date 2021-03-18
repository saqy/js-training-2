import * as actions from "./ActionTypes";
export const auth_success = (token, userId) => {
  return {
    type: actions.AUTH_SUCCESS,
    token,
    userId,
  };
};
export const auth_fail = (error) => {
  return {
    type: actions.AUTH_FAIL,
    error,
  };
};
export const auth_loading = () => {
  return {
    type: actions.AUTH_LOADING,
  };
};
export const auth_logout = () => {
  return {
    type: actions.AUTH_LOGOUT_INIT,
  };
};
export const logout_succeed = () => {
  return {
    type: actions.AUTH_LOGOUT,
  };
};
export const auth_timeout = (timeout) => {
  return {
    type: actions.AUTH_TIMEOUT_INIT,
    timeout,
  };
};
export const auth = (email, password, isSignup) => {
  return {
    type: actions.AUTH_INIT,
    email,
    password,
    isSignup,
  };
};
