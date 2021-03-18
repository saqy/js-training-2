import React, { useEffect, useState, useCallback } from "react";
import BuildControls from "../../components/burger/buildControls/BuildControls";
import Burger from "../../components/burger/Burger";
import OrderSummary from "../../components/burger/orderSummary/OrderSummary";
import Modal from "../../components/UI/modal/Modal";
import Aux from "../../hoc/aux/Aux";
import axios from "../../axiosOrders";
import Spinner from "../../components/UI/spinner/Spinner";
import WithErrorHandler from "../../hoc/withErrorHandler/WithErrorHandler";
import * as actionsCreator from "../../store/actions/Index";
import { useDispatch, useSelector } from "react-redux";
const BurgerBuilder = (props) => {
  const [purchasing, setPurchasing] = useState(false);

  const dispatch = useDispatch();
  const addIngs = (item) => dispatch(actionsCreator.add_ingredient(item));
  const removeIngs = (item) => dispatch(actionsCreator.remove_ingredient(item));
  const fetchingIngs = useCallback(
    () => dispatch(actionsCreator.fetching_ingredients()),
    [dispatch]
  );
  const resetPurchased = useCallback(
    () => dispatch(actionsCreator.order_purchased_false()),
    [dispatch]
  );

  const ings = useSelector((state) => state.burgerBuilder.ingredients);
  const totalPrice = useSelector((state) => state.burgerBuilder.totalPrice);
  const loading = useSelector((state) => state.burgerBuilder.loading);
  const error = useSelector((state) => state.burgerBuilder.error);
  const purchased = useSelector((state) => state.order.purchased);
  const isAuth = useSelector((state) => state.auth.token !== null);

  // const {
  //   fetchingIngs,
  //   resetPurchased,
  //   isAuth,
  //   loading,
  //   ings,
  //   totalPrice,
  //   error,
  //   purchased,
  //   addIngs,
  //   removeIngs,
  // } = props;
  useEffect(() => {
    fetchingIngs();
    resetPurchased();
  }, [fetchingIngs, resetPurchased]);

  const purchaseHandler = () => {
    if (isAuth) {
      setPurchasing(true);
    } else {
      props.history.push("/auth");
    }
  };
  const purchaseCancelHandler = () => {
    setPurchasing(false);
  };
  const purchaseContinueHandler = () => {
    props.history.push("/checkout");
  };
  const updatePurchasable = (ingredients) => {
    return ingredients.length > 0;
  };

  return (
    <Aux>
      <Modal show={purchasing} modalClosed={purchaseCancelHandler}>
        {" "}
        {loading ? (
          <Spinner />
        ) : (
          <OrderSummary
            ingredients={ings}
            purchaseCanceled={purchaseCancelHandler}
            purchaseContinued={purchaseContinueHandler}
            totalPrice={totalPrice}
          ></OrderSummary>
        )}
      </Modal>
      {loading && !purchasing ? (
        error ? (
          <p>Ingredients Not loaded!</p>
        ) : (
          <Spinner />
        )
      ) : (
        <Aux>
          {purchased ? <Spinner /> : <Burger ingredients={ings} />}
          <BuildControls
            isAuth={isAuth}
            addIngredient={addIngs}
            removeIngredient={removeIngs}
            ingredients={ings}
            price={totalPrice}
            purchasable={updatePurchasable(ings)}
            purchasing={purchaseHandler}
          />
        </Aux>
      )}
    </Aux>
  );
};

// const mapStateToProps = (state) => {
//   return {
//     ings: state.burgerBuilder.ingredients,
//     totalPrice: state.burgerBuilder.totalPrice,
//     loading: state.burgerBuilder.loading,
//     error: state.burgerBuilder.error,
//     purchased: state.order.purchased,
//     isAuth: state.auth.token !== null,
//   };
// };
// const mapdispatchToProps = (dispatch) => {
//   return {
//     addIngs: (item) => dispatch(actionsCreator.add_ingredient(item)),
//     removeIngs: (item) => dispatch(actionsCreator.remove_ingredient(item)),
//     fetchingIngs: () => dispatch(actionsCreator.fetching_ingredients()),
//     resetPurchased: () => dispatch(actionsCreator.order_purchased_false()),
//   };
// };

// export default connect(
//   mapStateToProps,
//   mapdispatchToProps
// )(WithErrorHandler(BurgerBuilder, axios));
export default WithErrorHandler(BurgerBuilder, axios);
