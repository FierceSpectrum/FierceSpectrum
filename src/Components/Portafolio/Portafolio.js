import React from "react";
import "./Portafolio.scss";
import Skills from "../Skills/Skills";
import FeaturedProjects from "../FeaturedProjects/FeaturedProjects";

// import imgenesdfa from "/images/WebSocialHub.png"



// Componente para la Sección de Bienvenida con imagen de fondo y título reubicado
const WelcomeSection = () => (
  <div className="section welcome">
    <div className="welcome-content">
      <h1>¡Bienvenido a mi Portafolio!</h1>
      <p>Desarrollador Full Stack con un enfoque en Backend</p>
    </div>
  </div>
);

// Otros componentes permanecen iguales

// const SkillsSection = () => {};


const AboutMeSection = () => (
  <div className="section about-me">
    <h2>Sobre Mí</h2>
    <p>
      Soy un desarrollador apasionado por crear aplicaciones eficientes y
      escalables. Me especializo en desarrollo backend y disfruto construyendo
      APIs y sistemas complejos. Conecta conmigo en mis redes sociales.
    </p>
    <ul className="social-links">
      <li>
        <a href="#">LinkedIn</a>
      </li>
      <li>
        <a href="#">GitHub</a>
      </li>
      <li>
        <a href="#">Twitter</a>
      </li>
    </ul>
  </div>
);

const ContactSection = () => (
  <div className="section contact">
    <h2>Contacto</h2>
    <p>¿Interesado en colaborar conmigo? ¡Contáctame!</p>
    <form>
      <input type="text" placeholder="Nombre" />
      <input type="email" placeholder="Correo Electrónico" />
      <textarea placeholder="Mensaje"></textarea>
      <button type="submit">Enviar</button>
    </form>
  </div>
);

const Portafolio = () => {
  return (
    <div className="Portafolio">
      <div className="portfolio-container">
        <WelcomeSection />
        <Skills />
        <FeaturedProjects />
        <AboutMeSection />
        <ContactSection />
      </div>
    </div>
  );
};

export default Portafolio;
