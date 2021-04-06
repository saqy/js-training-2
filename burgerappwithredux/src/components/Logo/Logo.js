import React from 'react';
import Logo from '../../assets/images/logo.png';
import classes from './Logo.css'

const logo = (props) => (
    <img className={classes.Logo} src={Logo} alt="Logo" style={{height: props.height}}></img>
);

export default logo;