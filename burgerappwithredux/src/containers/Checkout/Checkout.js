import React, {Component} from 'react';
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import ContactData from '../../containers/Checkout/ContactData/ContactData';
import { Redirect, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';

class Checkout extends Component {
    state={
        // ingredients: null,
        price: 0
    }
    
    
  
    checkoutCancelHandler = () => {
        this.props.history.goBack()
    }

    checkoutContinueHandler = () => {
        this.props.history.replace('/checkout/contact-data')
    }
    

    render(){
        let summary = <Redirect to="/" />

        if(this.props.ings){
            const purchasedRedirect = this.props.purchased? <Redirect to="/" /> : null;
            summary = (
                <div>
                    {purchasedRedirect}
                    <CheckoutSummary 
                    ingredients={this.props.ings} 
                    checkoutCancelHandler = {this.checkoutCancelHandler}
                    checkoutContinueHandler = {this.checkoutContinueHandler}
                    />
                    <Route path={this.props.match.path + '/contact-data'} 
                    component={ContactData}
                    />
                </div>
            );
        }
        return summary;
    }
}

const mapStateToProps = state => {
    return{
        ings: state.burgerBuilder.ingredients,
        purchased: state.order.purchased,
        isAuthenticated: state.auth.token !== null,
        authRedirectPath: state.auth.authRedirectPath,
        buildingBurger: state.burgerBuilder.building
    }
};


export default connect(mapStateToProps)(Checkout)