import React from "react";
import classes from "./Modal.module.css";
import Aux from "../../../hoc/aux/Aux";
import Backdrop from "../backdrop/Backdrop";

const Modal = (props) => {
  // shouldComponentUpdate(nextProps, nextState) {
  //   return (
  // nextProps.show !== this.props.show ||
  // nextProps.children !== this.props.children
  //   );
  // }
  const { show, children, modalClosed } = props;
  return (
    <Aux>
      <Backdrop show={show} clicked={modalClosed} />
      <div
        className={classes.Modal}
        style={{
          transform: show ? "translateY(0vh)" : "translateY(-100vh)",
          opacity: show ? "1" : "0",
        }}
      >
        {children}
      </div>
    </Aux>
  );
};

export default React.memo(
  Modal,
  (prevProps, nextProps) =>
    nextProps.show === prevProps.show &&
    nextProps.children === prevProps.children
);
