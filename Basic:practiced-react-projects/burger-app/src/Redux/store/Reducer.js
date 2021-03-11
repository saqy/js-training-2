import * as actions from "./Actions";
const initialState = {
  counter: 1,
  result: [],
};
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.INCREMENT:
      return {
        ...state,
        counter: state.counter + 1,
      };
    case actions.DECREMENT:
      return {
        ...state,
        counter: state.counter - 1,
      };
    case actions.ADD:
      return {
        ...state,
        counter: state.counter + action.value,
      };
    case actions.SUB:
      return {
        ...state,
        counter: state.counter - action.value,
      };
    case actions.RESULT:
      return {
        ...state,
        result: state.result.concat({ id: new Date(), value: state.counter }),
      };
    case actions.DELETE:
      //   const newArray = [...state.result];
      //   newArray.splice(action.id, 1);
      const newArray = state.result.filter((result) => result.id !== action.id);
      return {
        ...state,
        result: newArray,
      };
    default:
      return state;
  }
};
export default rootReducer;
