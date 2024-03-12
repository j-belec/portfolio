import PECard from "../Subcomponents/PECard";

function ProyectsAndExperience() {
  return (
    <section className="pe" id="pe">
      <div className="pe__proyects">
        <h2 className="section-title">PROYECTOS</h2>
        <div className="title-bar"></div>
        <div className="pe__proyects-container">
          <PECard
            img="pe-jsj.jpg"
            title="JSJ Web Solutions"
            txt="Página elaborada con dos compañeros para ofrecer nuestros servicios
            de desarrollo de páginas web. Las tecnologías usadas fueron
            ReactJS y SASS."
            linkGit="https://github.com/j-leklere/jsj-websolutions"
            linkPage="https://jsjsolutions.net/"
          />
          <PECard
            img="pe-tst.jpg"
            title="Typing Speed Test"
            txt="Página web elaborada para  poner en práctica mis conocimientos. Las tecnologías usadas fueron JS, Express, SASS, MySQL y EJS "
            linkGit="https://github.com/j-belec/typing-test"
            linkPage="https://typing-speed-test.fly.dev/"
          />
        </div>
      </div>
      <div className="pe__experience">
        <h2 className="section-title">EXPERIENCIA</h2>
        <div className="title-bar"></div>
        <div className="pe__experience-container">
          <PECard
            img="pe-adeip.jpg"
            title="ADEIP"
            txt="Página web elaborada con JSJ Web Solutions para la Asociación de Estudio e Investigación en Psicodiagnóstico. Las tecnologías usadas fueron ReactJS y CSS."
            linkGit="https://github.com/sleklere/adeip"
            linkPage="https://adeip.org.ar/"
          />
          <PECard
            img="pe-trento.jpg"
            title="TRENTO"
            txt="Página web elaborada con JSJ Web Solutions para la empresa Trento Insumos Médicos. Las tecnologías usadas fueron ReactJS y SASS."
            linkGit="https://github.com/j-belec/trento"
            linkPage="https://trentoinsumos.com/"
          />
        </div>
      </div>
    </section>
  );
}

export default ProyectsAndExperience;
