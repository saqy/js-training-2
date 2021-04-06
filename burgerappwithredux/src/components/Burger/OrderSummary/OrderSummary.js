import React, {Component} from 'react';
import Button from '../../UI/Button/Button'
import Aux from '../../../hoc/Aux'

class OrderSummary extends Component {

    
    render(){
        const ingredientSummary = Object.keys(this.props.ingredients)
        .map(igKey=> {
        return(
            <li key={igKey}>
                <span>{igKey}</span>: {this.props.ingredients[igKey]}
            </li>
        )
    })
    
        return(
        <Aux>
            <h3>Your Order</h3>
            <p>A Delicious Burger with the following ingredients: </p>
            <ul>
                {ingredientSummary}
            </ul>
            <p><strong>Total Price: {this.props.price}</strong></p>
            <p>Continue to Checkout?</p>
            <Button clicked={this.props.orderContinue} btnType='Success'>Continue</Button>
            <Button clicked={this.props.orderCancel} btnType='Danger'>Cancel</Button>
        </Aux>
        )
    }
};

export default OrderSummary