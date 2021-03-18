import "./App.css";
import Layout from "./hoc/layout/Layout";
import BurgerBuilder from "./containers/burgerBuilder/BurgerBuilder";
import React, { Component } from "react";
import Checkout from "./containers/checkout/Checkout";
import { Route, Switch } from "react-router-dom";
import Orders from "./containers/orders/Orders";

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <Switch>
            <Route path="/checkout" component={Checkout} />
            <Route path="/orders" component={Orders} />
            <Route path="/" exact component={BurgerBuilder} />
          </Switch>
        </Layout>
      </div>
    );
  }
}

export default App;
