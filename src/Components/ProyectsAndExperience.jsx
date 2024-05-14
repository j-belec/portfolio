import PECard from "../Subcomponents/PECard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Pagination } from "swiper/modules";

function ProyectsAndExperience() {
  return (
    <section className="pe" id="pe">
      <div className="pe__proyects">
        <h2 className="section-title">PROYECTOS</h2>
        <div className="title-bar title-bar-pe"></div>
        <div className="pe__proyects-container">
          <Swiper
            breakpoints={{
              924: {
                slidesPerView: 2,
              },
              0: {
                slidesPerView: 1,
              },
            }}
            spaceBetween={0}
            modules={[Navigation, Pagination]}
            navigation={true}
            pagination={{
              clickable: true,
            }}
            className="mySwiper"
          >
            <SwiperSlide>
              <PECard
                img="pe-jsj.jpg"
                title="JSJ Web Solutions"
                txt="Página elaborada con dos compañeros para ofrecer nuestros servicios
            de desarrollo de páginas web. Las tecnologías usadas fueron
            ReactJS y SASS."
                linkGit="https://github.com/j-leklere/jsj-websolutions"
                linkPage="https://jsjsolutions.net/"
              />
            </SwiperSlide>
            <SwiperSlide>
              <PECard
                img="pe-tst.jpg"
                title="Typing Speed Test"
                txt="Página web elaborada para  poner en práctica mis conocimientos. Las tecnologías usadas fueron JS, Express, SASS, MySQL y EJS. (La página puede tardar hasta 50s en cargar). "
                linkGit="https://github.com/j-belec/typing-test"
                linkPage="https://typing-speed-test-aysp.onrender.com/"
              />
            </SwiperSlide>
            <SwiperSlide>
              <PECard
                img="pe-dh.jpg"
                title="Proyecto Digital House"
                txt="Página web elaborada como proyecto final de Digital House. Tiene el CRUD completo, login y register de usurios. (La página puede tardar hasta 50s en cargar)."
                linkGit="https://github.com/j-belec/ProyectoIntDH"
                linkPage="https://strong-step.onrender.com/"
              />
            </SwiperSlide>
            <SwiperSlide>
              <PECard
                img="pe-log-reg-app.jpg"
                title="Log/Reg App"
                txt="Página web para login y register de usuarios. Las tecnologías usadas fueron React, Express, SASS, MySQL. (La página puede tardar hasta 50s en cargar)."
                linkGit="https://github.com/j-belec/log-reg-front"
                linkPage="https://log-reg-app.onrender.com/"
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      <div className="pe__experience">
        <h2 className="section-title">EXPERIENCIA</h2>
        <div className="title-bar title-bar-pe"></div>
        <div className="pe__proyects-container">
          <Swiper
            breakpoints={{
              924: {
                slidesPerView: 2,
              },
              0: {
                slidesPerView: 1,
              },
            }}
            spaceBetween={0}
            modules={[Navigation, Pagination]}
            navigation={true}
            pagination={{
              clickable: true,
            }}
            className="mySwiper"
          >
            <SwiperSlide>
              <PECard
                img="pe-adeip.jpg"
                title="ADEIP"
                txt="Página web elaborada con JSJ Web Solutions para la Asociación de Estudio e Investigación en Psicodiagnóstico. Las tecnologías usadas fueron ReactJS y CSS."
                linkGit="https://github.com/sleklere/adeip"
                linkPage="https://adeip.org.ar/"
              />
            </SwiperSlide>
            <SwiperSlide>
              <PECard
                img="pe-trento.jpg"
                title="TRENTO"
                txt="Página web elaborada con JSJ Web Solutions para la empresa Trento Insumos Médicos. Las tecnologías usadas fueron ReactJS y SASS."
                linkGit="https://github.com/j-belec/trento"
                linkPage="https://trentoinsumos.com/"
              />
            </SwiperSlide>
            <SwiperSlide>
              <PECard
                img="pe-mm.jpg"
                title="MM"
                txt="Página web elaborada con JSJ Web Solutions para Miguel Murciano. Las tecnologías usadas fueron ReactJS y SASS."
                linkGit="https://github.com/JSJ-Web-Solutions/miguel-murciano"
                linkPage="https://miguelmurciano.com/"
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
}

export default ProyectsAndExperience;
