import React from 'react';
import BurgerIngredient from './BurgerIngredients/BurgerIngredients';
import classes from './Burger.css';
import { withRouter} from 'react-router-dom';


const burger = (props) => {

    let transformedIngredients = Object.keys(props.ingredients)
    .map( igkey => {
        return [...Array(props.ingredients[igkey])].map((_, i) => {
            return <BurgerIngredient key={igkey+i} type={igkey} />
        });
    })
    .reduce((arr, el)=>{
        return arr.concat(el)
    }, []);

    if (transformedIngredients.length===0){
        transformedIngredients=<p>Please Start Adding Ingredients!</p>
    }


    return(
        <div className={classes.Burger}>

            <BurgerIngredient type="bun-top" />
            {transformedIngredients}
        
            {/* <BurgerIngredient type="romanieLettuce" />
            <BurgerIngredient type="mushroom" />
            <BurgerIngredient type="tomato" />
            <BurgerIngredient type="cheese" />
            <BurgerIngredient type="beef" /> */}
            <BurgerIngredient type="bun-bottom" />
        </div>
    )
}

export default withRouter(burger);

