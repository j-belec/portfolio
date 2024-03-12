function AboutMe() {
  return (
    <section className="about-me" id="about-me">
      <h2 className="section-title">SOBRE MÍ</h2>
      <div className="title-bar"></div>
      <p className="about-me__text">
        Soy desarrollador Full Stack, mis conocimientos los adquirí mediante un
        curso de Digital House y a través de diversos cursos en línea de Udemy.
        Actualmente estoy estudiando en la UTN (Universidad Tecnologica
        Nacional) la Tecnicatura Universitaria en Programación. Además, junto a
        dos compañeros, tenemos un proyecto donde desarrollamos y hacemos
        mantenimiento de páginas web.
      </p>
      <h2 className="section-title">HABILIDADES</h2>
      <div className="title-bar"></div>
      <div className="about-me__slider">
        <div className="about-me__slider-track about-me__slider-track-top">
          <div>
            <p className="about-me__slide">HTML</p>
          </div>
          <div>
            <p className="about-me__slide">CSS</p>
          </div>
          <div>
            <p className="about-me__slide">JavaScript</p>
          </div>
          <div>
            <p className="about-me__slide">NodeJS</p>
          </div>
          <div>
            <p className="about-me__slide">Express</p>
          </div>
          <div>
            <p className="about-me__slide">ReactJS</p>
          </div>
          <div>
            <p className="about-me__slide">SASS</p>
          </div>
          {/* same slides  */}
          <div>
            <p className="about-me__slide">HTML</p>
          </div>
          <div>
            <p className="about-me__slide">CSS</p>
          </div>
          <div>
            <p className="about-me__slide">JavaScript</p>
          </div>
          <div>
            <p className="about-me__slide">NodeJS</p>
          </div>
          <div>
            <p className="about-me__slide">Express</p>
          </div>
          <div>
            <p className="about-me__slide">ReactJS</p>
          </div>
          <div>
            <p className="about-me__slide">SASS</p>
          </div>
        </div>
      </div>
      <div className="about-me__slider">
        <div className="about-me__slider-track about-me__slider-track-bottom">
          <p className="about-me__slide">SQL</p>
          <p className="about-me__slide">MongoDB</p>
          <div className="about-me__slide">
            <p>REST</p>
            <p>API</p>
          </div>
          <p className="about-me__slide">GIT</p>
          <p className="about-me__slide">Github</p>
          <p className="about-me__slide">Scrum</p>
          <p className="about-me__slide">EJS</p>
          <p className="about-me__slide">Pug</p>
          {/* same slides  */}
          <p className="about-me__slide">SQL</p>
          <p className="about-me__slide">MongoDB</p>
          <div className="about-me__slide">
            <p>REST</p>
            <p>API</p>
          </div>
          <p className="about-me__slide">GIT</p>
          <p className="about-me__slide">Github</p>
          <p className="about-me__slide">Scrum</p>
          <p className="about-me__slide">EJS</p>
          <p className="about-me__slide">Pug</p>
        </div>
      </div>
      <div></div>
    </section>
  );
}

export default AboutMe;
