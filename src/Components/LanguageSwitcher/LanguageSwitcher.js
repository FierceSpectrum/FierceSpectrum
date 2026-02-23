import React, { useState } from "react";
import "./LanguageSwitcher.scss";
import { useTranslation } from "react-i18next";
import { FiGlobe } from "react-icons/fi";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const baseLang = i18n.language ? i18n.language.substring(0, 2) : "en";
  const [activeLanguage, setActiveLanguage] = useState(baseLang);

  const toggleLanguage = () => {
    const nextLang = activeLanguage === "en" ? "es" : "en";
    i18n.changeLanguage(nextLang);
    sessionStorage.setItem("language", nextLang);
    setActiveLanguage(nextLang);
  };

  const langText = activeLanguage === "en" ? "EN" : "ES";

  return (
    <div className="LanguageSwitcher">
      <button onClick={toggleLanguage} className="lang-toggle-btn">
        <FiGlobe className="icon" />
        <span className="lang-text">{langText}</span>
      </button>
    </div>
  );
};

export default LanguageSwitcher;
