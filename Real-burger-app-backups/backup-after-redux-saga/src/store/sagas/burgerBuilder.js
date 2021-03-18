import { put } from "redux-saga/effects";
import * as dispatchers from "../actions/Index";
import axios from "../../axiosOrders";

export function* fetch_ingredientsSaga(action) {
  try {
    const response = yield axios.get(
      "https://real-burger-app-fdc29-default-rtdb.firebaseio.com/ingredients.json"
    );
    yield response.data.shift();
    yield put(dispatchers.set_ingredients(response.data));
  } catch (error) {
    yield put(dispatchers.fetching_ingredients_error());
  }
}
