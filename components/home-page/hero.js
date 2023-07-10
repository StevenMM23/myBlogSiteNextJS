import React from "react";
import Image from "next/image";
import classes from "./hero.module.css";

const Hero = () => {
  return (
    <section className={classes.hero} data-testid="hero-section">
      <div className={classes.image} data-testid="hero-img">
        <Image data-testid="image-test"
          src="/images/site/myImage.png"
          alt="An Image showing Steven"
          width={800}
          height={800}
        />
      </div>
      <h1 className={classes.h1} data-cy="hero-title">
        Economía Blog
      </h1>
      <p className={classes.p} data-cy="hero-description">
        Bienvenido al blog de <b>Economía</b> que te llevará a conocer todas
        esas noticias sobre el mundo financiero. Aprende, crece y alcanza la
        libertad financiera en cada artículo. Únete a nuestra comunidad y
        comienza a transformar tu vida hoy mismo.
      </p>
    </section>
  );
};

export default Hero;
