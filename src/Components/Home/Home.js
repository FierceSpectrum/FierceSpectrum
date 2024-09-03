import React from "react";
import "./Home.scss";
import AboutMe from "../AboutMe/AboutMe";
import Skills from "../Skills/Skills";
import FeaturedProjects from "../FeaturedProjects/FeaturedProjects";
import { useTranslation } from "react-i18next";

const WelcomeSection = () => {
  const { t } = useTranslation();
  const welcome = t("welcome", { returnObjects: true });

  return (
    <div className="welcome">
      <div className="welcome-content">
        <h1>{welcome.title}</h1>
        <p>{welcome.description}</p>
      </div>
    </div>
  );
};

const Home = () => {
  return (
    <div className="Home">
      <div className="home-container">
        <WelcomeSection />
        <section id="AboutMe" className="section">
        <AboutMe />
        </section>
        <section id="Skills" className="section">
        <Skills />
        </section>
        <section id="Projects" className="section">
        <FeaturedProjects />
        </section>
      </div>
    </div>
  );
};

export default Home;
