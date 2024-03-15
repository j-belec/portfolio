import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const form = useRef();
  const sendBtn = useRef();
  const inputName = useRef();
  const inputEmail = useRef();
  const inputMessage = useRef();

  const [btnText, setBtnText] = useState("Enviar");

  const sendEmail = (e) => {
    e.preventDefault();

    setBtnText("...");

    emailjs
      .sendForm("service_hc3kjo8", "template_9qfott6", form.current, {
        publicKey: "m3-4PfQVki7NtA2Pe",
      })
      .then(() => {
        sendBtn.current.style.backgroundColor = "#37b24d";
        sendBtn.current.style.animation = "sendBtnCorrect 1s 3";
        setBtnText("Enviado!");
        setInterval(() => {
          sendBtn.current.style.backgroundColor = "#0096c7";
          setBtnText("Enviar");
          inputName.current.value = "";
          inputEmail.current.value = "";
          inputMessage.current.value = "";
        }, 8000);
      })
      .catch((err) => {
        sendBtn.current.style.backgroundColor = "#f03e3e";
        sendBtn.current.style.animation = "sendBtnIncorrect 1s 3";
        setBtnText("Error, intente nuevamente");
      });
  };

  return (
    <section className="contact" id="contact">
      <h2 className="section-title">CONTACTO</h2>
      <div className="title-bar"></div>
      <form
        action="POST"
        ref={form}
        onSubmit={sendEmail}
        className="contact__form"
      >
        <label htmlFor="" className="contact__label">
          Nombre
        </label>
        <input
          ref={inputName}
          type="text"
          name="user_name"
          className="contact__input"
          required
        />
        <label htmlFor="" className="contact__label">
          Email
        </label>
        <input
          ref={inputEmail}
          type="email"
          name="user_email"
          className="contact__input"
          required
        />
        <label htmlFor="" className="contact__label">
          Mensaje
        </label>
        <textarea
          ref={inputMessage}
          name="message"
          cols="30"
          rows="10"
          className="contact__textarea"
          required
        ></textarea>

        <button ref={sendBtn} className="contact__btn">
          {btnText}
        </button>
      </form>
    </section>
  );
}

export default Contact;
