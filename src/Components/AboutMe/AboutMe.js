import React, { useState } from "react";
import "./AboutMe.scss";
import Modal from "../Modal/Modal";
import { useTranslation } from "react-i18next";

const AboutMe = () => {
  const { t } = useTranslation();
  const aboutMe = t("aboutMe", { returnObjects: true });
  const { introduction, passion, modal } = aboutMe;
  const { AboutMe, Leadership, Personal_Interests } = modal;

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const openModal = () => setModalIsOpen(true);
  const closeModal = () => setModalIsOpen(false);

  return (
    <div className="AboutMe">
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
      <span onClick={openModal}>More AboutMe</span>
      <Modal
        isOpen={modalIsOpen}
        onClose={closeModal}
        nameClass="aboutMe-section"
      >
        <h3>{AboutMe.title}</h3>
        <p className="">{AboutMe.description}</p>
        <h3>{Leadership.title}</h3>
        <p className="">{Leadership.description}</p>
        <h3>{Personal_Interests.title}</h3>
        <p className="">{Personal_Interests.description}</p>
      </Modal>
    </div>
  );
};

export default AboutMe;
