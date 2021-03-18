import React, { useState } from "react";
import Button from "../../../components/UI/button/Button";
import classes from "./ContactData.module.css";
import axios from "../../../axiosOrders";
import Spinner from "../../../components/UI/spinner/Spinner";
import Input from "../../../components/UI/input/Input";
import WithErrorHandler from "../../../hoc/withErrorHandler/WithErrorHandler";
import { connect } from "react-redux";
import * as actionsCreator from "../../../store/actions/Index";
const ContactData = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState({
    street: "",
    postalcode: "",
  });
  const [deliveryMethod, setDeliveryMethod] = useState("");
  const contactDataHandler = (event) => {
    event.preventDefault();
    const order = {
      ingredients: props.ings,
      price: props.totalPrice.toFixed(2),
      customer: {
        name: name,
        email: email,
        address: {
          street: address.street,
          postalcode: address.postalcode,
        },
        deliveryMethod: deliveryMethod,
      },
      userId: props.userId,
    };
    props.onOrder(order, props.token);
  };

  return (
    <div className={classes.ContactData}>
      <h3>Enter your contact details</h3>
      {props.loading ? (
        <Spinner />
      ) : (
        <form onSubmit={contactDataHandler}>
          <div className={classes.InputDiv}>
            <Input
              label="Name"
              inputtype="input"
              type="text"
              name="name"
              required={true}
              placeholder="Your Name"
              onChange={(e) => setName(e.target.value)}
            />
            <Input
              label="Email"
              inputtype="input"
              type="email"
              name="email"
              required={true}
              placeholder="Your Mail"
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              label="Street"
              inputtype="input"
              type="text"
              name="street"
              required={true}
              placeholder="Your Street"
              onChange={(e) => {
                const updateAddress = { ...address };
                updateAddress.street = e.target.value;
                setAddress(updateAddress);
              }}
            />
            <Input
              label="PostalCode"
              inputtype="input"
              required={true}
              type="text"
              name="postalcode"
              placeholder="Your Postalcode"
              onChange={(e) => {
                const updateAddress = { ...address };
                updateAddress.postalcode = e.target.value;
                setAddress(updateAddress);
              }}
            />
            <Input
              label="Select delivery method"
              inputtype="select"
              required={true}
              onChange={(event) => setDeliveryMethod(event.target.value)}
            >
              <option value="" defaultValue>
                Please select delivery method
              </option>
              <option value="cheapest">Cheapest</option>
              <option value="fastest">Fastest</option>
            </Input>
          </div>
          <Button btnType="Success">ORDER</Button>
        </form>
      )}
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    ings: state.burgerBuilder.ingredients,
    totalPrice: state.burgerBuilder.totalPrice,
    loading: state.order.loading,
    token: state.auth.token,
    userId: state.auth.userId,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    onOrder: (order, token) => dispatch(actionsCreator.order(order, token)),
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WithErrorHandler(ContactData, axios));
