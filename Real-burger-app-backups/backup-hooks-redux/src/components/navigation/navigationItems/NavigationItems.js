import React from "react";
import classes from "./NavigationItems.module.css";
import NavigationItem from "./navigationItem/NavigationItem";
import { connect } from "react-redux";
const NavigationItems = (props) => {
  return (
    <ul className={classes.NavigationItems}>
      <NavigationItem link="/">Burger Builder</NavigationItem>
      {props.isAuth ? (
        <NavigationItem link="/orders">Orders</NavigationItem>
      ) : null}
      {props.isAuth ? (
        <NavigationItem link="/logout">Logout</NavigationItem>
      ) : (
        <NavigationItem link="/auth">Authenticate</NavigationItem>
      )}
    </ul>
  );
};
const mapStateToProps = (state) => {
  return {
    isAuth: state.auth.token !== null,
  };
};
export default connect(mapStateToProps, null)(NavigationItems);
