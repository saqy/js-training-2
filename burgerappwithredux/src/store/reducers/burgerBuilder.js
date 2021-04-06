import * as actionType from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';
 
const initialState = {
    // ingredients: {
    //     romanieLettuce: 0,
    //     mushroom: 0,
    //     tomato: 0,
    //     cheese: 0,
    //     beef: 0
    // }, 
    ingredients:null,
    totalPrice: 60,
    error: false,
    building: false
}

const  ingredientPrices = {
    romanieLettuce: 45,
    mushroom: 50,
    tomato: 35,
    cheese: 60,
    beef: 350
}

const addIngredients = (state, action) => {
    const updatedIngredient = { [action.ingredientName]: state.ingredients[action.ingredientName] + 1 }
    const updatedIngredients = updateObject(state.ingredients, updatedIngredient);
    const updatedState = {
        ingredients: updatedIngredients,
        totalPrice: state.totalPrice + ingredientPrices[action.ingredientName],
        building: true
    }
    return updateObject(state, updatedState);
}

const removeIngredients = (state, action) => {
    const updatedIng = { [action.ingredientName]: state.ingredients[action.ingredientName] - 1 }
    const updatedIngs = updateObject(state.ingredients, updatedIng);
    const updatedSt = {
        ingredients: updatedIngs,
        totalPrice: state.totalPrice - ingredientPrices[action.ingredientName],
        building: true
    }
    return updateObject(state, updatedSt);
}

const setIngredients = (state, action) => {
    return updateObject(state, {
        ingredients: {
            romanieLettuce: action.ingredients.romanieLettuce,
            mushroom: action.ingredients.mushroom,
            tomato: action.ingredients.tomato,
            cheese: action.ingredients.cheese,
            beef: action.ingredients.beef
        },
        totalPrice: 60,
        building: false
    }
) 
}

const fetchIngredientsFailed = (state, action) => {
    return updateObject(state, {error: true});
}

const reducer =  (state=initialState, action) => {
    switch (action.type) {
        case actionType.ADD_INGREDIENTS: return addIngredients (state, action);
        case actionType.REMOVE_INGREDIENTS: return removeIngredients (state, action);
        case actionType.SET_INGREDIENTS: return setIngredients (state, action);
        case actionType.FETCH_INGREDIENTS_FAILED: return fetchIngredientsFailed (state, action)  
        default: return state;
    }
};

export default reducer;

 