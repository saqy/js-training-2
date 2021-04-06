import React from 'react';
import classes from './Order.css'

const Order = (props)=> {

    // console.log(props.ingredients)

    const ingredients = [];

    for (let ingredientName in props.ingredients){
        // console.log([ingredientName]);
        ingredients.push(
            {
                name: ingredientName,
                amount: props.ingredients[ingredientName]
            })   
    }

return(
    <div className={classes.Order}>
        <h3>Ingredients: </h3>
        {
            ingredients.map(ingredient => {
                
                return <span key={ingredient.name}> {ingredient.name}: {ingredient.amount}</span>
            })
        }
        {/* <p>{ingredients}</p> */}
        <p><strong>Price: </strong> Rs.{props.price} </p>
    </div>
)
}

export default Order