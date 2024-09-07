import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

// Importar los archivos de traducción
import en from "./Languages/en.json";
import es from "./Languages/es.json";

i18n
  .use(LanguageDetector) // Detecta el idioma automáticamente
  .use(initReactI18next) // Pasar instancia de i18next al modulo de react-i18next
  .init({
    resources: {
      en: {
        translation: en,
      },
      es: {
        translation: es,
      },
    },
    fallbackLng: "es", // Idioma por defecto si no se encuentra nada
    lng: sessionStorage.getItem("language") || "es", // Cargar idioma desde sessionStorage
    interpolation: {
      escapeValue: false, // React ya hace escaping de valores
    },
    detection: {
      // Configuración para LanguageDetector
      order: ["sessionStorage", "navigator"], // Orden de detección de idioma
      caches: ["sessionStorage"], // Almacenar en sessionStorage
    },
  });

export default i18n;
