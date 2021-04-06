import React from 'react';
import classes from './Input.css';

const input = (props) => {
    let inputclasses = [classes.InputElement]
    if(props.invalid && props.shouldValidate && props.touched){
        inputclasses.push(classes.Invalid)
    }
    let inputElement = null;
    switch(props.elementType){
        case('input'):
        inputElement = <input className={inputclasses.join(' ')} 
        {...props.elementConfig}
        onChange={props.changed}
        value={props.value}/>;
        break;
        case('textarea'):
        inputElement = <textarea className={inputclasses} 
        {...props.elementConfig}
        onChange={props.changed}
        value={props.value}/>
        break;
        case('select'):
        inputElement = (
            <select
            className={classes.InputElement}
            onChange={props.changed}
            value={props.value}>
                {props.elementConfig.options.map(option => (
                    <option 
                    key={option.value} 
                    value={option.value}>
                    {option.displayValue}
                    </option>
                ))}
            </select>
        );
        break;
        default: 
        inputElement = <input className={inputclasses} 
        {...props.elementConfig}
        value={props.value}/>
    }
    // console.log('input working');

    return(
    <div className={classes.Input}>
        <label className={classes.Label}>{props.label}</label>
        {inputElement}
    </div>
    );
}

export default input;