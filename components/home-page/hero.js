import React from "react";
import Image from "next/image";
import classes from "./hero.module.css";
const Hero = () => {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/site/myImage.jpg"
          alt="An Image showing Steven"
          width={300}
          height={300}
        />
      </div>
      <h1 className={classes.h1}>Hi, I am Steven</h1>
      <p className={classes.p}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero odit modi
        consectetur nulla aliquid debitis aliquam eum est, aperiam voluptatum
        dolorem in explicabo vitae ut nam! Earum amet rerum autem.
      </p>
    </section>
  );
};

export default Hero;
