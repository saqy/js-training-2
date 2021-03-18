import React, { useState } from "react";
import Aux from "../aux/Aux";
import SideDrawer from "../../components/navigation/sideDrawer/SideDrawer";
import Toolbar from "../../components/navigation/toolbar/Toolbar";
import classes from "./Layout.module.css";
const Layout = (props) => {
  const [sideDrawer, setSideDrawer] = useState(false);

  const sideDrawerCloseHandler = () => {
    setSideDrawer(false);
  };
  const sideDrawerToggleHandler = () => {
    setSideDrawer(!sideDrawer);
  };

  return (
    <Aux>
      <Toolbar sideDrawerToggle={sideDrawerToggleHandler} />
      <SideDrawer sideDrawer={sideDrawer} closed={sideDrawerCloseHandler} />
      <main className={classes.content}>{props.children}</main>
    </Aux>
  );
};
export default Layout;
// const Layout = (props) => {
//   return (
//     <Aux>
//       <Toolbar />
//       <SideDrawer />
//       <main className={classes.content}>{props.children}</main>
//     </Aux>
//   );
// };

// export default Layout;
