import React from "react";
import "./Home.scss";
import AboutMe from "../AboutMe/AboutMe";
import Skills from "../Skills/Skills";
import FeaturedProjects from "../FeaturedProjects/FeaturedProjects";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

const WelcomeSection = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const welcome = t("welcome", { returnObjects: true });
  const { download } = t("curriculum", { returnObjects: true });

  const handleViewProjects = () => {
    navigate("/Projects");
  };

  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = download.pdfFile.url;
    link.download = download.pdfFile.name;
    link.click();
  };

  return (
    <section className="hero">
      {/* Animated background blobs */}
      <div className="hero-blob hero-blob--1" />
      <div className="hero-blob hero-blob--2" />
      <div className="hero-gradient" />

      <div className="hero-content">
        <h1 className="hero-title">{welcome.title}</h1>
        <p className="hero-subtitle">{welcome.description}</p>

        <div className="hero-ctas">
          <button className="btn btn--primary" onClick={handleViewProjects}>
            {t("navigation.links.3.name", "Projects")}
            <span className="btn-arrow">→</span>
          </button>
          <button className="btn btn--outline" onClick={handleDownloadCV}>
            <span className="btn-icon">↓</span>
            {download.title}
          </button>
        </div>

        {/* Scroll indicator */}
        <div className="scroll-indicator">
          <div className="scroll-indicator__mouse">
            <div className="scroll-indicator__dot" />
          </div>
        </div>
      </div>
    </section>
  );
};

const Home = () => {
  return (
    <div className="Home">
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
  );
};

export default Home;
