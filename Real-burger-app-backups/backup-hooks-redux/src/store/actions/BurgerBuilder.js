import * as actionTypes from "./ActionTypes";

export const add_ingredient = (item) => {
  return {
    type: actionTypes.ADD_INGREDIENT,
    item,
  };
};
export const remove_ingredient = (item) => {
  return {
    type: actionTypes.REMOVE_INGREDIENT,
    item,
  };
};
export const fetching_ingredients_error = () => {
  return {
    type: actionTypes.FETCHING_INGREDIENTS_ERROR,
  };
};
export const set_ingredients = (ingredients) => {
  return {
    type: actionTypes.SET_INGREDIENTS,
    ingredients,
  };
};
export const fetching_ingredients = () => {
  return {
    type: actionTypes.FETCHING_INGREDIENTS,
  };
};
