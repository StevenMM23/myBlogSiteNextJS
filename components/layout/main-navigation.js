import React from "react";
import Link from "next/link";

import classes from "./main-navigation.module.css";
import Logo from "./logo";
const MainNavegation = () => {
  return (
    <header className={classes.header}>
      <Link href={"/"}>
        <Logo />
      </Link>
      <nav>
        <ul>
          <li>
            <Link href={"/posts"}>Publicaciones</Link>
          </li>
          <li>
            <Link href={"/contact"}>Contactanos</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavegation;
