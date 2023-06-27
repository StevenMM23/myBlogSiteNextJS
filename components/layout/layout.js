import { Fragment } from "react";
import MainNavegation from "./main-navigation";
import Footer from "../home-page/footer";

function Layout(props) {
  return (
    <Fragment>
      <MainNavegation />

      <main>{props.children}</main>
    </Fragment>
  );
}

export default Layout;
