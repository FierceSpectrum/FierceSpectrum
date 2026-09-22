import React, { useEffect, useState } from "react";
import "./Education.scss";
import { useTranslation } from "react-i18next";
import { useSearchParams, useParams, useNavigate } from "react-router-dom";
import Modal from "../Modal/Modal";

const getImagePath = (path) => {
  if (path && path.startsWith("./")) {
    return process.env.PUBLIC_URL + path.substring(1);
  }
  return path;
};

const Education = () => {
  const { t } = useTranslation();
  const [searchParams] = useSearchParams();
  const { certId: pathCertId } = useParams();
  const navigate = useNavigate();
  const gallery = t("educationGallery", { returnObjects: true });
  const { title, items } = gallery;
  const [selected, setSelected] = useState(null);

  // Deep link en dos formas (la de ruta es la robusta para compartir):
  //   #/Education/<id>   (preferida: sin ? ni =)
  //   #/Education?cert=<id>  (compatibilidad con links viejos)
  const certId = pathCertId || searchParams.get("cert");

  useEffect(() => {
    if (certId && items?.length) {
      const found = items.find((item) => item.id === certId);
      if (found) setSelected(found);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [certId]);

  const openItem = (item) => {
    setSelected(item);
    navigate(`/Education/${item.id}`, { replace: true });
  };

  const closeModal = () => {
    setSelected(null);
    navigate("/Education", { replace: true });
  };

  return (
    <div className="Education">
      <h2>{title}</h2>
      <div className="Education-container">
        {items.map((item) => (
          <article
            key={item.id}
            className="education-card"
            onClick={() => openItem(item)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === "Enter" && openItem(item)}
          >
            <img
              src={getImagePath(item.image)}
              alt={item.alt || item.title}
              className="education-image"
              loading="lazy"
            />
            <div className="education-content">
              <h3>{item.title}</h3>
              {item.institution && <p>{item.institution}</p>}
              {item.year && <p className="year">{item.year}</p>}
            </div>
          </article>
        ))}
      </div>
      {selected && (
        <Modal isOpen={!!selected} onClose={closeModal} nameClass="education-details">
          <h3>{selected.title}</h3>
          <img
            src={getImagePath(selected.image)}
            alt={selected.alt || selected.title}
            className="education-modal-image"
          />
        </Modal>
      )}
    </div>
  );
};

export default Education;
