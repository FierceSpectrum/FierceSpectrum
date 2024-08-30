import React from "react";
import "./Portafolio.scss";
import Skills from "../Skills/Skills";
import FeaturedProjects from "../FeaturedProjects/FeaturedProjects";
import AboutMeData from "../../Jsons/AboutMe.json";

const WelcomeSection = () => (
  <div className="section welcome">
    <div className="welcome-content">
      <h1>¡Bienvenido!<br/> Soy Benjamín Sandí</h1>
      <p>Desarrollador Full Stack con un enfoque en Backend</p>
    </div>
  </div>
);

const AboutMeSection = () => {
  const { introduction, passion, socialLinks } = AboutMeData.aboutMe;
  return (
    <div className="section about-me">
      <h2>Sobre Mí</h2>
      <p dangerouslySetInnerHTML={{ __html: introduction }} />
      <p dangerouslySetInnerHTML={{ __html: passion }} />
      <ul className="social-links">
        {socialLinks.map((link) => (
          <li key={link.name} className={`social-item ${link.name}`}>
            <a href={link.url} target="_blank" rel="noopener noreferrer">
              <img
                src={link.logo}
                alt={`${link.name} logo`}
                className="social-logo"
              />
              <span className="social-name">{link.name}</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

const Portafolio = () => {
  return (
    <div className="Portafolio">
      <div className="portfolio-container">
        <WelcomeSection />
        <Skills />
        <FeaturedProjects />
        <AboutMeSection />
      </div>
    </div>
  );
};

export default Portafolio;
