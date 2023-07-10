import React from "react";
import classes from "./footer.module.css";

const Footer = () => {
  return (
    <footer data-testid="footer">
      <div className={classes.footer}>
        Todos los artículos subidos son parte de{" "}
        <a
          href="https://eldinero.com.do"
          target="_blank"
          rel="noopener noreferrer"
        >
          https://eldinero.com.do
        </a>
      </div>
    </footer>
  );
};

export default Footer;
