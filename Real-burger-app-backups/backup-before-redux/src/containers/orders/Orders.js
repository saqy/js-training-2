import React, { Component } from "react";
import Order from "../../components/order/Order";
import axios from "../../axiosOrders";
import WithErrorHandler from "../../hoc/withErrorHandler/WithErrorHandler";
class Orders extends Component {
  state = {
    orders: [],
    laoding: true,
  };
  componentDidMount() {
    axios
      .get("/orders.json")
      .then((response) => {
        const orders = this.state.orders;
        for (let key in response.data) {
          orders.push({ id: key, ...response.data[key] });
        }
        this.setState({ orders: orders, laoding: false });
      })
      .catch((error) => {
        this.setState({ laoding: false });
      });
  }
  render() {
    console.log(this.state.orders);
    return (
      <div>
        {this.state.orders.map((order) => {
          return (
            <Order
              key={order.id}
              price={order.price}
              ingredients={order.ingredients}
            />
          );
        })}
      </div>
    );
  }
}

export default WithErrorHandler(Orders, axios);
