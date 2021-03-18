import React, { Component } from "react";
import BuildControls from "../../components/burger/buildControls/BuildControls";
import Burger from "../../components/burger/Burger";
import OrderSummary from "../../components/burger/orderSummary/OrderSummary";
import Modal from "../../components/UI/modal/Modal";
import Aux from "../../hoc/aux/Aux";
import axios from "../../axiosOrders";
import Spinner from "../../components/UI/spinner/Spinner";
import WithErrorHandler from "../../hoc/withErrorHandler/WithErrorHandler";
const INGREDIENTS_PRICES = {
  salad: 0.2,
  cheese: 0.5,
  meat: 1.3,
  bacon: 0.4,
};
class BurgerBuilder extends Component {
  state = {
    ingredients: [
      //   { item: "meat" },
      //   { item: "meat" },
      //   { item: "cheese" },
      //   { item: "cheese" },
      //   { item: "bacon" },
      //   { item: "salad" },
    ],
    totalPrice: 4,
    purchasable: false,
    purchasing: false,
    loading: true,
    error: false,
  };
  componentDidMount() {
    axios
      .get(
        "https://real-burger-app-fdc29-default-rtdb.firebaseio.com/ingredients.json"
      )
      .then((response) => {
        console.log(response.data);
        const data = response.data.shift();
        console.log(data);
        this.setState({ ingredients: response.data, loading: false });
      })
      .catch((error) => {
        console.log(error);
        this.setState({ error: true });
      });
  }
  purchaseHandler = () => {
    this.setState({ purchasing: true });
  };
  purchaseCancelHandler = () => {
    this.setState({ purchasing: false });
  };
  purchaseContinueHandler = () => {
    const a = [];
    for (let value of this.state.ingredients) {
      a.push(encodeURIComponent(value.item));
    }
    a.push(this.state.totalPrice.toFixed(2));
    const queryParams = a.join("&");
    console.log(a);
    this.props.history.push({
      pathname: "/checkout",
      search: "?" + queryParams,
    });
  };
  updatePurchasable = (ingredients) => {
    let purchasable = this.state.purchasable;
    ingredients.length > 0 ? (purchasable = true) : (purchasable = false);
    this.setState({ purchasable });
  };
  addIngredientHandler = (item) => {
    const ingredients = [...this.state.ingredients, { item }];
    //const ingredient = { item };
    //ingredients.push(ingredient);
    const oldPrice = this.state.totalPrice;
    const priceAddition = INGREDIENTS_PRICES[item];
    const newPrice = oldPrice + priceAddition;
    this.setState({
      ingredients,
      totalPrice: newPrice,
    });
    this.updatePurchasable(ingredients);
  };
  removeIngredientHandler = (item) => {
    const ingredients = [...this.state.ingredients];
    ingredients.reverse();
    const index = ingredients.findIndex((items) => items.item === item);
    if (index >= 0) {
      ingredients.splice(index, 1);
      const oldPrice = this.state.totalPrice;
      const priceDeduction = INGREDIENTS_PRICES[item];
      const newPrice = oldPrice - priceDeduction;
      ingredients.reverse();
      this.setState({ ingredients, totalPrice: newPrice });
      this.updatePurchasable(ingredients);
    }
  };
  render() {
    return (
      <Aux>
        <Modal
          show={this.state.purchasing}
          modalClosed={this.purchaseCancelHandler}
        >
          {" "}
          {this.state.loading ? (
            <Spinner />
          ) : (
            <OrderSummary
              ingredients={this.state.ingredients}
              purchaseCanceled={this.purchaseCancelHandler}
              purchaseContinued={this.purchaseContinueHandler}
              totalPrice={this.state.totalPrice}
            ></OrderSummary>
          )}
        </Modal>
        {this.state.loading && !this.state.purchasing ? (
          this.state.error ? (
            <p>Ingredients Not loaded!</p>
          ) : (
            <Spinner />
          )
        ) : (
          <Aux>
            <Burger ingredients={this.state.ingredients} />
            <BuildControls
              addIngredient={this.addIngredientHandler}
              removeIngredient={this.removeIngredientHandler}
              ingredients={this.state.ingredients}
              price={this.state.totalPrice}
              purchasable={this.state.purchasable}
              purchasing={this.purchaseHandler}
            />
          </Aux>
        )}
      </Aux>
    );
  }
}

export default WithErrorHandler(BurgerBuilder, axios);
