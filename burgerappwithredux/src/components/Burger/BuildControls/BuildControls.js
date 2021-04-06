import React from 'react';
import { Redirect } from 'react-router-dom';
import BuildControl from './BuildControl/BuildControl';
import classes from './BuildControls.css';


const controls =[
    {label: 'Romanie Lettuce', type: 'romanieLettuce'},
    {label: 'Mushroom', type: 'mushroom'},
    {label: 'Tomato', type: 'tomato'},
    {label: 'Cheese', type: 'cheese'},
    {label: 'Beef Patie', type: 'beef'}
]


const buildControls = (props) => {
    return(
    <div className={classes.BuildControls}>
        {controls.map(ctrl => (
            <BuildControl  key={ctrl.label} label={ctrl.label}
            added={()=> props.ingredientAdded(ctrl.type)}
            removed ={()=> props.ingredientRemoved(ctrl.type)}
            disabled = {props.disabled[ctrl.type]}
            />
            ))}
            <button 
            className={classes.OrderBtn} 
            disabled={!props.purchaseable} 
            onClick={props.ordered}>{props.isAuth ? "Order Now" : "SIGN UP TO ORDER"}</button>
    </div>
);
};

export default buildControls;