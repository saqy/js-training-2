import React, { Component } from "react";
import CheckoutSummary from "../../components/order/checkoutSummary/CheckoutSummary";
import { Route } from "react-router-dom";
import ContactData from "./contactData/ContactData";
class Checkout extends Component {
  state = {
    ingredients: [],
    totalPrice: 0,
  };
  componentDidMount() {
    const query = new URLSearchParams(this.props.location.search);
    //console.log("checkout query", query.entries());
    const a = [];
    let price = 0;
    for (let param of query.entries()) {
      if (!isNaN(param[0])) {
        price = param[0];
      } else {
        a.push({ item: param[0] });
      }
    }
    this.setState({ ingredients: a, totalPrice: price });
    console.log(a);
  }
  checkoutCancelledHandler = () => {
    this.props.history.goBack();
  };
  checkoutContinuedHandler = () => {
    this.props.history.replace("/checkout/contactData");
  };
  render() {
    return (
      <div>
        <CheckoutSummary
          ingredients={this.state.ingredients}
          checkoutCancelled={this.checkoutCancelledHandler}
          checkoutContinued={this.checkoutContinuedHandler}
        />
        <Route
          path={this.props.match.path + "/contactData"}
          render={(props) => (
            <ContactData
              ingredients={this.state.ingredients}
              price={this.state.totalPrice}
              {...props}
            />
          )}
        />
      </div>
    );
  }
}

export default Checkout;
