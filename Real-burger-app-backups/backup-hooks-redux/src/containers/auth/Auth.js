import React, { useState } from "react";
import Button from "../../components/UI/button/Button";
import Input from "../../components/UI/input/Input";
import classes from "./Auth.module.css";
import { connect } from "react-redux";
import * as actionsCreator from "../../store/actions/Index";
import Spinner from "../../components/UI/spinner/Spinner";
import { Redirect } from "react-router-dom";
const Auth = (props) => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [showErrorMsg, setShowErrorMsg] = useState(false);
  const [isSignup, setIsSignup] = useState(true);

  const formHandler = (event) => {
    event.preventDefault();
    props.onAuth(user.email, user.password, isSignup);
  };
  const SwitchHandle = () => {
    setIsSignup(!isSignup);
  };

  const dis = user.password.length >= 6 ? false : true;
  return (
    <div className={classes.Auth}>
      <h3>{isSignup ? "Sign up form" : "Sign in"}</h3>
      {props.error ? (
        <p style={{ color: "red" }}>{props.error.message}</p>
      ) : null}
      <form onSubmit={formHandler}>
        {props.loading ? (
          <Spinner />
        ) : (
          <div className={classes.InputDiv}>
            <Input
              label="Email"
              inputtype="input"
              type="email"
              name="email"
              value={user.email}
              required={true}
              placeholder="Your Email"
              onChange={(e) => {
                const updateUser = { ...user };
                updateUser.email = e.target.value;
                setUser(updateUser);
              }}
            />
            <Input
              label="Password"
              inputtype="input"
              type="password"
              name="password"
              value={user.password}
              required={true}
              placeholder="Your Password"
              onChange={(e) => {
                const updateUser = { ...user };
                updateUser.password = e.target.value;
                setUser(updateUser);
                setShowErrorMsg(true);
              }}
            />
            {showErrorMsg ? (
              user.password.length < 6 ? (
                <p style={{ color: "red" }}>
                  password's min length should be 6 characters.
                </p>
              ) : (
                <p style={{ color: "green" }}>password strong enough.</p>
              )
            ) : null}
            <Button dis={dis} btnType="Success">
              {isSignup ? "Sign up" : "Sign in"}
            </Button>
          </div>
        )}
      </form>
      <Button clicked={SwitchHandle} btnType="Danger">
        {isSignup ? "Switch to Sign in" : "Switch to Sign up"}
      </Button>

      {props.ings.length > 0 ? (
        props.isAuth ? (
          <Redirect to="/checkout" />
        ) : null
      ) : props.isAuth ? (
        <Redirect to="/" />
      ) : null}
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    loading: state.auth.loading,
    error: state.auth.error,
    isAuth: state.auth.token !== null,
    ings: state.burgerBuilder.ingredients,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    onAuth: (email, password, isSignup) =>
      dispatch(actionsCreator.auth(email, password, isSignup)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Auth);
