import React, { Component } from 'react';
import Button from '../../../components/UI/Button/Button';
import classes from './ContactData.css';
import axios from '../../../axios-orders';
import Spinner from '../../../components/UI/Spinner/Spinner';
import Input from '../../../components/UI/Input/Input';
import {connect} from 'react-redux';
import withErrorHandler from '../../../hoc/withErrorHandler/withErrorHandler';
import * as actions from '../../../store/actions/index';
import {Redirect} from 'react-router-dom';
import { checkValidity } from '../../../shared/utility';

class contactData extends Component {

    state = {
        orderForm: {
            name: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Your Name'
                },
                value: '',
                validation: {
                    required: true,
                    minLength: 5
                },
                valid: false,
                touched: false,
            },
            street: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Street'
                },
                value: '',
                validation: {
                    required: true,
                    minLength: 10
                },
                valid: false,
                touched: false
            },
            city: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'City'
                },
                value: '',
                validation: {
                    required: true,
                    minLength: 3
                },
                valid: false,
                touched: false
            },
            contact: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Contact'
                },
                value: '',
                validation: {
                    required: true,
                    minLength: 10,
                },
                valid: false,
                touched: false
            },
            email: {
                elementType: 'input',
                elementConfig: {
                    type: 'email',
                    placeholder: 'Email'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            },
            deliveryMethod:  {
                elementType: 'select',
                elementConfig: {
                    options:[
                        { value: 'fastest', displayValue: 'Fastest'},
                        { value: 'cheapest', displayValue: 'Cheapest'}
                ]
                },
                value: 'Fastest',
                validation: {
                    required: true,
                },
                valid: true
            }
        },
       formValid: false
    }

    orderHandler = (event) => {
        event.preventDefault();
        const formData = {};
        for( let formElementIdentifier in this.state.orderForm) {
            formData[formElementIdentifier] = this.state.orderForm[formElementIdentifier].value;
        }
        const order = {
                ingredients: this.props.ings,
                price: this.props.price,
                orderData: formData,
                userId: this.props.userId
        }
        this.props.onOrderBurger(order, this.props.token);
        // this.props.history.push("/");

        
    }

    
    inputChangedHandler =(event, inputIdentifier)=>{
        const orderFormCopy= {...this.state.orderForm};
        const updatedForm = {
            ...orderFormCopy[inputIdentifier]
        }
        updatedForm.value = event.target.value;
        updatedForm.valid = checkValidity(updatedForm.value, updatedForm.validation);
        updatedForm.touched= true;
        orderFormCopy[inputIdentifier] = updatedForm;

        let formValidity = true;
        for(let key in orderFormCopy){
            formValidity= orderFormCopy[key].valid && formValidity
        }
        this.setState({orderForm: orderFormCopy, formValid: formValidity})

    }
    
    render() {
        

        const formElementsArray = [];
        for (let key in this.state.orderForm){
            formElementsArray.push({
                id: key,
                config: this.state.orderForm[key]
            });

        }
        let form = (
            <form onSubmit={this.orderHandler}>
                    {/* <Input elementType="..." elementConfig="..." value="..." /> */}
                    {formElementsArray.map(formElement => 
                        <Input 
                        key={formElement.id} 
                        elementType={formElement.config.elementType} 
                        elementConfig={formElement.config.elementConfig} 
                        value={formElement.config.value} 
                        invalid={!formElement.config.valid}
                        shouldValidate={formElement.config.validation}
                        touched={formElement.config.touched}
                        changed={(event)=>this.inputChangedHandler(event, formElement.id)}
                        />
                        )}
                    
                    <Button btnType="Success" disabled={!this.state.formValid} clicked={this.orderHandler}>Order</Button>
                </form>
        );
        if (this.props.loading){
            form=<Spinner />;
        }
        return(
            <div className={classes.ContactData}>
                <h1>Enter your Contact Data</h1>
                {form}
                {this.props.purchased && <Redirect to="/" />}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return{
        ings: state.burgerBuilder.ingredients,
        price: state.burgerBuilder.totalPrice,
        loading: state.order.loading,
        purchased: state.order.purchased,
        token: state.auth.token,
        userId: state.auth.userId
    }
}
const mapDispatchToProps = dispatch => {
    return {
        onOrderBurger: (orderData, token)=>dispatch(actions.purchaseBurger(orderData, token))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(contactData, axios))