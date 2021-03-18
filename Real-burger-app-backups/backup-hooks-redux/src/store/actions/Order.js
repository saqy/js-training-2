import * as actionsType from "./ActionTypes";

export const order_success = (id, orderData) => {
  return {
    type: actionsType.ORDER_SUCCESS,
    id,
    orderData,
  };
};
export const order_fail = () => {
  return {
    type: actionsType.ORDER_FAIL,
  };
};
export const loading_order = () => {
  return {
    type: actionsType.LOADING_ORDER,
  };
};
export const order = (order, token) => {
  return {
    type: actionsType.ORDER_INIT,
    order,
    token,
  };
};
export const order_purchased_true = () => {
  return {
    type: actionsType.ORDER_PURCHASED_TRUE,
  };
};
export const order_purchased_false_spinner = () => {
  return {
    type: actionsType.ORDER_PURCHASED_FALSE,
  };
};
export const order_purchased_false = () => {
  return {
    type: actionsType.ORDER_PURCHASED_FALSE_INIT,
  };
};
export const order_fetch_success = (orders) => {
  return {
    type: actionsType.ORDER_FETCH_SUCCESS,
    orders,
  };
};
export const order_fetch_fail = () => {
  return {
    type: actionsType.ORDER_FETCH_FAIL,
  };
};
export const order_fetch = (token, userId) => {
  return {
    type: actionsType.ORDER_FETCH_INIT,
    token,
    userId,
  };
};
