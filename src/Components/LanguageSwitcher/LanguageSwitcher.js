import React, { useState } from "react";
import "./LanguageSwitcher.scss";
import { useTranslation } from "react-i18next";

const LanguageSwitcher = () => {
  const { t, i18n } = useTranslation();
  const navigation = t("navigation", { returnObjects: true });

  const [activeLanguage, setActiveLanguage] = useState(i18n.language);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    sessionStorage.setItem("language", lng);
    setActiveLanguage(lng);
  };

  return (
    <div className="LanguageSwitcher">
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
        {navigation.spanish}
      </button>
    </div>
  );
};

export default LanguageSwitcher;
