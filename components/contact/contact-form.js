import React, { useState } from "react";
import classes from "./contact-form.module.css";

const ContactForm = () => {
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
    <section className={classes.contact} data-testid="contact-form">
      <h1>Queremos escucharte</h1>
      <form onSubmit={sendMessageHandler} className={classes.form}>
        <div className={classes.controls}>
          <div className={classes.control}>
            <label htmlFor="email">Correo electrónico</label>
            <input
              type="email"
              id="email"
              required
              onChange={(e) => {
                setEnteredEmail(e.target.value);
              }}
              data-testid="email-input"
            />
          </div>
          <div className={classes.control}>
            <label htmlFor="name">Nombre completo</label>
            <input
              type="text"
              id="name"
              required
              onChange={(e) => setEnteredName(e.target.value)}
              data-testid="name-input"
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
            data-testid="message-textarea"
          ></textarea>
        </div>
        <div className={classes.actions}>
          <button data-testid="submit-button">Enviar</button>
        </div>
      </form>
    </section>
  );
};

export default ContactForm;
