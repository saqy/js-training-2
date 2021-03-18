import "./App.css";
import Layout from "./hoc/layout/Layout";
import BurgerBuilder from "./containers/burgerBuilder/BurgerBuilder";
import React, { useEffect, Suspense } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
// import Checkout from "./containers/checkout/Checkout";
// import Orders from "./containers/orders/Orders";
// import Auth from "./containers/auth/Auth";
// import Logout from "./containers/auth/logout/Logout";
import { connect } from "react-redux";
import * as actionsCreator from "./store/actions/Index";
const Checkout = React.lazy(() => {
  return import("./containers/checkout/Checkout");
});
const Orders = React.lazy(() => {
  return import("./containers/orders/Orders");
});
const Auth = React.lazy(() => {
  return import("./containers/auth/Auth");
});
const Logout = React.lazy(() => {
  return import("./containers/auth/logout/Logout");
});

const App = (props) => {
  useEffect(() => {
    const token = localStorage.getItem("token");
    const userId = localStorage.getItem("userId");
    props.checkAuth(token, userId);
  }, [props]);

  let routes = null;

  if (props.isAuth) {
    routes = (
      <Switch>
        <Route path="/checkout" component={Checkout} />
        <Route path="/orders" component={Orders} />
        <Route path="/logout" component={Logout} />
        <Route path="/auth" component={Auth} />
        <Route path="/" exact component={BurgerBuilder} />
        <Redirect to="/" />
      </Switch>
    );
  } else {
    routes = (
      <Switch>
        <Route path="/auth" component={Auth} />
        <Route path="/" exact component={BurgerBuilder} />
        <Redirect to="/" />
      </Switch>
    );
  }

  return (
    <div>
      <Layout>
        <Suspense fallback={<p>Loading...</p>}>{routes}</Suspense>
        {/* <Switch>
            <Route path="/checkout" component={Checkout} />
            <Route path="/orders" component={Orders} />
            <Route path="/auth" component={Auth} />
            <Route path="/logout" component={Logout} />
            <Route path="/" exact component={BurgerBuilder} />
          </Switch> */}
      </Layout>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    isAuth: state.auth.token !== null,
    ings: state.burgerBuilder.ingredients,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    checkAuth: (token, userId) =>
      dispatch(actionsCreator.auth_success(token, userId)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
