function Contact() {
  return (
    <section className="contact" id="contact">
      <h2 className="section-title">CONTACTO</h2>
      <div className="title-bar"></div>
      <form action="POST" className="contact__form">
        <label htmlFor="" className="contact__label">
          Nombre
        </label>
        <input type="text" name="" id="" className="contact__input" />
        <label htmlFor="" className="contact__label">
          Email
        </label>
        <input type="email" name="" id="" className="contact__input" />
        <label htmlFor="" className="contact__label">
          Mensaje
        </label>
        <textarea
          name=""
          id=""
          cols="30"
          rows="10"
          className="contact__textarea"
        ></textarea>

        <button className="contact__btn">Enviar!</button>
      </form>
    </section>
  );
}

export default Contact;
