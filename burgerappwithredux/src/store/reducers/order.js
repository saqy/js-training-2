import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';

const initState = {
    orders : [],
    loading: false,
    purchased: false
}

const purchaseBurgerStart = (state) => {
    return updateObject ( state, {loading: true});
}
const purchaseBurgerSuccess = (state, action) => {
    const newOrder = {
        ...action.orderData,
        id: action.orderID
    }
    return updateObject (state, {
        loading: false,
        purchased: true,
        orders: state.orders.concat(newOrder)
    })
}
const purchaseBurgerFail = (state) => {
    return updateObject(state, {loading: false});
}
const purchaseInit = (state) => {
    return updateObject( state, {purchased: false});
}
const fetchOrdersStart = (state) => {
    return updateObject(state, {loading: true});
}

const fetchOrdersSuccess = (state, action) => {
    return updateObject(state, {
        orders: action.orders,
        loading: false
    })
}

const reducer = (state=initState, action) => {
    switch (action.type){
        case actionTypes.PURCHASE_BURGER_START: return purchaseBurgerStart(state);
        case actionTypes.PURCHASE_BURGER_SUCCESS: return purchaseBurgerSuccess(state, action);    
        case actionTypes.PURCHASE_BURGER_FAIL: return purchaseBurgerFail(state);
        case actionTypes.PURCHASE_INIT: return purchaseInit (state); 
        case actionTypes.FETCH_ORDERS_START: return fetchOrdersStart (state);
        case actionTypes.FETCH_ORDERS_SUCCESS: return fetchOrdersSuccess (state, action);
        default: return state;
    }
};

export default reducer