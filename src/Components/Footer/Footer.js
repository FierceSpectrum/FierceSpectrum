import React from "react";
import "./Footer.scss";

const Footer = () => {
  return (
    <div className="Footer">
      <footer className="footer">
        <div className="footer-content">
          <div className="contact-info">
            <p>© 2024 [Tu Nombre]. Todos los derechos reservados.</p>
            <p>
              Email:{" "}
              <a href="mailto:tuemail@example.com">tuemail@example.com</a>
            </p>
          </div>
          <div className="social-links">
            <a
              href="https://www.linkedin.com/in/tu-perfil/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/tu-usuario/"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            <a
              href="https://twitter.com/tu-usuario/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Twitter
            </a>
          </div>
          <div className="quick-links">
            <a href="#inicio">Inicio</a>
            <a href="#proyectos">Proyectos</a>
            <a href="#sobre-mi">Sobre Mí</a>
            <a href="#contacto">Contacto</a>
          </div>
          <div className="privacy-terms">
            <a href="#">Política de Privacidad</a>
            <a href="#">Términos de Uso</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
