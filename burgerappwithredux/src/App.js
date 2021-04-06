import React, {Component} from 'react';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from './store/actions/index';
import Layout from './hoc/Layout/Layout';
import asyncComponent from './hoc/asyncComponent/asyncComponent';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import Checkout from './containers/Checkout/Checkout';
import Orders from './containers/Checkout/Orders/Orders';
import Auth from './containers/Auth/Auth';
import Logout from './containers/Auth/Logout/Logout';
// import BurgerIngredient from './components/Burger/BurgerIngredients/BurgerIngredients';

const asyncCheckout = asyncComponent(()=>{
  return import('./containers/Checkout/Checkout')
})

const asyncOrders = asyncComponent(()=>{
  return import('./containers/Checkout/Orders/Orders');
})

const asyncAuth = asyncComponent(()=>{
  return import('./containers/Auth/Auth');
})

class App extends Component {

  componentDidMount() {
    this.props.onTryAutoSignup();
  }

  render(){
    let routes = (
      <Switch>
            <Route path='/auth' component={asyncAuth} />
            <Route path='/' exact component={BurgerBuilder} />
            <Redirect to='/' />
          </Switch>
    );

    if(this.props.isAuthenticated){
      routes = (
        <Switch>
              <Route path='/checkout' component={asyncCheckout} />
              <Route path='/orders' component={asyncOrders} />
              <Route path='/logout' component={Logout} />
              <Route path='/auth' component={asyncAuth} />
              <Route path='/' exact component={BurgerBuilder} />
              <Redirect to='/' />
            </Switch>
      );  
    }

    return (
      <div>
        <Layout>
          {routes}
        </Layout>
      </div>
    );
}
}

// const App = () => {
//   return(
//   <div>
//     <Layout>
//       <BurgerBuilder />
//       <Checkout />
//     </Layout>
//   </div>
//   );
// }

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.token !== null
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onTryAutoSignup: () => dispatch(actions.authCheckState())
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
