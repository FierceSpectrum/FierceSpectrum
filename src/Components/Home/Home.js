import React from "react";
import "./Home.scss";
import Skills from "../Skills/Skills";
import FeaturedProjects from "../FeaturedProjects/FeaturedProjects";
import { useTranslation } from "react-i18next";

const WelcomeSection = () => {
  const { t } = useTranslation();
  const welcome = t("welcome", { returnObjects: true });

  return (
    <div className="section welcome">
      <div className="welcome-content">
        <h1>{welcome.title}</h1>
        <p>{welcome.description}</p>
      </div>
    </div>
  );
};

const AboutMeSection = () => {
  const { t } = useTranslation();
  const aboutMe = t("aboutMe", { returnObjects: true });
  const { introduction, passion } = aboutMe;
  return (
    <div className="section about-me">
      <h2>{aboutMe.title}</h2>
      <p dangerouslySetInnerHTML={{ __html: introduction }} />
      <p dangerouslySetInnerHTML={{ __html: passion }} />
      <ul className="social-links">
        {aboutMe.socialLinks.map((link) => (
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

const Home = () => {
  return (
    <div className="Home">
      <div className="home-container">
        <WelcomeSection />
        <Skills />
        <FeaturedProjects />
        <AboutMeSection />
      </div>
    </div>
  );
};

export default Home;
