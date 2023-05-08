import { Fragment } from "react";
import MainNavegation from "./main-navigation";

function Layout(props) {
  return (
    <Fragment>
      <MainNavegation />

      <main>{props.children}</main>
    </Fragment>
  );
}

export default Layout;
