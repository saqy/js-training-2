import React from "react";
import CheckoutSummary from "../../components/order/checkoutSummary/CheckoutSummary";
import { Route, Redirect } from "react-router-dom";
import ContactData from "./contactData/ContactData";
import { connect } from "react-redux";
const Checkout = (props) => {
  const checkoutCancelledHandler = () => {
    props.history.goBack();
  };
  const checkoutContinuedHandler = () => {
    props.history.replace("/checkout/contactData");
  };

  return (
    <div>
      {props.ings.length === 0 ? (
        <Redirect to="/" />
      ) : props.purchased ? (
        <Redirect to="/" />
      ) : (
        <CheckoutSummary
          ingredients={props.ings}
          checkoutCancelled={checkoutCancelledHandler}
          checkoutContinued={checkoutContinuedHandler}
        />
      )}
      <Route path={props.match.path + "/contactData"} component={ContactData} />
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    ings: state.burgerBuilder.ingredients,
    purchased: state.order.purchased,
  };
};

export default connect(mapStateToProps, null)(Checkout);
