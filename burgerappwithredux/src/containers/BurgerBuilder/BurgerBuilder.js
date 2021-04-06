import React, {Component} from 'react'
import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls.js';
import classes from './BurgerBuilder.css';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import axios from '../../axios-orders';
// import Spinner from '../../components/UI/Spinner/Spinner';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';

import * as actions from '../../store/actions/index';
import {connect} from 'react-redux';


class BurgerBuilder extends Component {
    state={
        purchasing: false,
        // background: false,
        // loading: false
    }
    componentWillMount(){
        this.props.initIngs();
    }
    
    updatePurchaseState (x) {
        const ingredients = x;
        const sum = Object.keys(ingredients).map(igKey => {
            return ingredients[igKey]
        })
        .reduce((sum, el)=>{
            return sum + el;
        }, 0);

        return sum>0
    }
    
    purshaseHandler = () => { 
        if (this.props.isAuthenticated) {
            this.setState({purchasing: true, background: true})
        }
        else{
            this.props.onSetAuthRedirectPath('/checkout');
            this.props.history.push('/auth');
        }
    };
    
    backdropHandler = () => {
        this.setState({purchasing: false, background: false})
    }
    
    purchaseContinueHandler = () => {
            
        this.props.onInitPurchase();
        this.props.history.push('/checkout')
        }
        
        render(){
            const disabledInfo ={
                ...this.props.ings
            }
            for(let key in disabledInfo){
                disabledInfo[key] = disabledInfo[key] <= 0;
            };
            
            let orderSummary = <OrderSummary 
        ingredients={this.props.ings}
        orderContinue={this.purchaseContinueHandler}
        orderCancel={this.backdropHandler}
        price={this.state.totalPrice}
        />
        

        return(
            <>
            {this.props.ings && 
            <Aux>
               
                <Modal 
                show={this.state.purchasing} 
                showBackDrop={this.state.background} 
                loading = {this.state.loading}
                backDropClicked={this.backdropHandler}
                >
                    {orderSummary}
                </Modal>
        
                <Burger ingredients={this.props.ings} />
                <div className={classes.Price}><p>Total Price: Rs.{this.props.price}</p></div>
                <BuildControls
                ingredientAdded={this.props.onIngredientAdded}
                ingredientRemoved = {this.props.onIngredientSub}
                disabled = {disabledInfo}
                purchaseable = {this.updatePurchaseState(this.props.ings)}
                isAuth = {this.props.isAuthenticated}
                ordered = {this.purshaseHandler}
                />
        
            </Aux>
            }
            </>
        )
    }
}

const mapStateToProps = state => {
    return {
        ings: state.burgerBuilder.ingredients,
        price: state.burgerBuilder.totalPrice,
        isAuthenticated: state.auth.token !== null
    }
}

const mapDispatchToProps = dispatch => {
    return {
        initIngs:()=>dispatch(actions.initIngredients()),
        onIngredientAdded: (ingredientName)=>dispatch(actions.addIngredient(ingredientName)),
        onIngredientSub: (ingredientName) =>dispatch(actions.removeIngredient(ingredientName)),
        onInitPurchase: ()=> dispatch(actions.purchaseInit()),
        onSetAuthRedirectPath: (path)=> dispatch(actions.setAuthRedirectPath(path))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(BurgerBuilder, axios));