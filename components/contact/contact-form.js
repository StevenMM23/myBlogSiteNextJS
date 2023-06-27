import React, { use, useState } from "react";
import classes from "./contact-form.module.css";
const ContactFrom = () => {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredName, setEnteredName] = useState("");
  const [enteredMessage, setEnteredMessage] = useState("");
  function sendMessageHandler(e) {
    e.preventDefault();

    fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify({
        email: enteredEmail,
        name: enteredName,
        message: enteredMessage,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
  return (
    <section className={classes.contact}>
      <h1>Queremos escuchaste</h1>
      <form onSubmit={sendMessageHandler} className={classes.form}>
        <div className={classes.controls}>
          <div className={classes.control}>
            <label htmlFor="email">Correo electronico</label>
            <input
              type="email"
              id="email"
              required
              onChange={(e) => {
                setEnteredEmail(e.target.value);
              }}
            />
          </div>
          <div className={classes.control}>
            <label htmlFor="name">Nombre completo</label>
            <input
              type="text"
              id="name"
              required
              onChange={(e) => setEnteredName(e.target.value)}
            />
          </div>
        </div>
        <div className={classes.control}>
          <label htmlFor="message">Deja un comentario sobre el Blog</label>
          <textarea
            id="message"
            rows={5}
            required
            onChange={(e) => setEnteredMessage(e.target.value)}
          ></textarea>
        </div>
        <div className={classes.actions}>
          <button>Enviar</button>
        </div>
      </form>
    </section>
  );
};

export default ContactFrom;
