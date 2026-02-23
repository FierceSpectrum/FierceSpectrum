import React from "react";
import "./PdfDownloadButton.scss";
import { useTranslation } from "react-i18next";

const PdfDownloadButton = () => {
  const { t } = useTranslation();

  const { download } = t("curriculum", { returnObjects: true });
  const { pdfFile } = download;

  const getFilePath = (path) => {
    if (path && path.startsWith("./")) {
      return process.env.PUBLIC_URL + path.substring(1);
    }
    return path;
  };

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = getFilePath(pdfFile.url); // Ruta del archivo resolviendo el entorno
    link.download = pdfFile.name; // Nombre del archivo para descargar
    link.click();
  };

  return (
    <div className="PdfDownloadButton">
      <button onClick={handleDownload}>{download.title}</button>
    </div>
  );
};

export default PdfDownloadButton;
