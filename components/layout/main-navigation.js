import React from "react";
import Link from "next/link";

import classes from "./main-navigation.module.css";
import Logo from "./logo";

const MainNavigation = () => {
  return (
    <header className={classes.header} data-testid="main-navigation">
      <Link href={"/"}>
        <Logo />
      </Link>
      <nav>
        <ul data-testid="navigation-list">
          <li>
            <Link href={"/posts"} data-testid="posts-link">Publicaciones</Link>
          </li>
          <li>
            <Link href={"/contact"} data-testid="contact-link">Contáctanos</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
