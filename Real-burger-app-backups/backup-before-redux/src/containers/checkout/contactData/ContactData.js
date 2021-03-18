import React, { Component } from "react";
import Button from "../../../components/UI/button/Button";
import classes from "./ContactData.module.css";
import axios from "../../../axiosOrders";
import Spinner from "../../../components/UI/spinner/Spinner";
import Input from "../../../components/UI/input/Input";
class ContactData extends Component {
  state = {
    name: "",
    email: "",
    address: {
      street: "",
      postalcode: "",
    },
    deliveryMethod: "",
    loading: false,
  };
  contactDataHandler = (event) => {
    event.preventDefault();
    this.setState({ loading: true });
    const order = {
      ingredients: this.props.ingredients,
      price: this.props.price,
      customer: {
        name: this.state.name,
        email: this.state.email,
        address: {
          street: this.state.address.street,
          postalcode: this.state.address.postalcode,
        },
        deliveryMethod: this.state.deliveryMethod,
      },
    };
    //alert("You Continue");
    axios
      .post("/orders.json", order)
      .then((response) => {
        this.setState({ loading: false });
        this.props.history.push("/");
      })
      .catch((error) => {
        this.setState({ loading: false });
      });
    console.log(this.props.ingredients);
    console.log(this.props.price);
  };
  render() {
    return (
      <div className={classes.ContactData}>
        <h3>Enter your contact details</h3>
        {this.state.loading ? (
          <Spinner />
        ) : (
          <form onSubmit={this.contactDataHandler}>
            <div className={classes.InputDiv}>
              <Input
                label="Name"
                inputtype="input"
                type="text"
                name="name"
                required={true}
                placeholder="Your Name"
                onChange={(e) => this.setState({ name: e.target.value })}
              />
              <Input
                label="Email"
                inputtype="input"
                type="email"
                name="email"
                required={true}
                placeholder="Your Mail"
                onChange={(e) => this.setState({ email: e.target.value })}
              />
              <Input
                label="Street"
                inputtype="input"
                type="text"
                name="street"
                required={true}
                placeholder="Your Street"
                onChange={(e) => {
                  const address = { ...this.state.address };
                  address.street = e.target.value;
                  this.setState({ address });
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
                  const address = { ...this.state.address };
                  address.postalcode = e.target.value;
                  this.setState({ address });
                }}
              />
              <Input
                label="Select delivery method"
                inputtype="select"
                required={true}
                onChange={(event) =>
                  this.setState({ deliveryMethod: event.target.value })
                }
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
  }
}

export default ContactData;
