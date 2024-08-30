import React, { useState } from "react";
import "./LenguageSwitcher.scss";
import { useTranslation } from "react-i18next";

const LenguageSwitcher = () => {
  const { t, i18n } = useTranslation();
  const navigation = t("navigation", { returnObjects: true });

  const [activeLanguage, setActiveLanguage] = useState(i18n.language);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    sessionStorage.setItem("language", lng);
    setActiveLanguage(lng);
  };

  return (
    <div className="LenguageSwitcher">
      <button
        onClick={() => changeLanguage("en")}
        className={activeLanguage === "en" ? "active" : ""}
      >
        {navigation.english}
      </button>
      <button
        onClick={() => changeLanguage("es")}
        className={activeLanguage === "es" ? "active" : ""}
      >
        {navigation.espanish}
      </button>
    </div>
  );
};

export default LenguageSwitcher;
