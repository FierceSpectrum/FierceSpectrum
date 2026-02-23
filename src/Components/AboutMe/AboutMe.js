import React, { useState } from "react";
import "./AboutMe.scss";
import Modal from "../Modal/Modal";
import { useTranslation } from "react-i18next";
import { FiServer, FiLayout, FiUser } from "react-icons/fi";

const AboutMe = () => {
  const { t } = useTranslation();
  const aboutMe = t("aboutMe", { returnObjects: true });
  const { introduction, passion, modal, highlights } = aboutMe;
  const { AboutMe: AboutMeModal, Leadership, Personal_Interests } = modal;

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const openModal = () => setModalIsOpen(true);
  const closeModal = () => setModalIsOpen(false);

  // Map icon names from JSON to actual React Icons
  const iconMap = {
    FiServer: FiServer,
    FiLayout: FiLayout,
    FiUser: FiUser,
  };

  return (
    <div className="AboutMe">
      <div className="about-me-header">
        <h2>{aboutMe.title}</h2>
      </div>

      <div className="about-container">
        {/* Content (Left column on desktop) */}
        <div className="about-content">
          <div className="about-text">
            <p dangerouslySetInnerHTML={{ __html: introduction }} />
            <p dangerouslySetInnerHTML={{ __html: passion }} />
          </div>

          <div className="highlights-cards">
            {highlights && highlights.map((item, index) => {
              const Icon = iconMap[item.icon] || FiUser;

              if (item.isButton) {
                return (
                  <button
                    key={index}
                    className="highlight-card highlight-btn"
                    onClick={openModal}
                  >
                    <div className="card-icon-wrapper">
                      <Icon className="card-icon" />
                    </div>
                    <div className="card-info">
                      <h4 className="card-title">{item.title}</h4>
                      <p className="card-desc">{item.description}</p>
                    </div>
                  </button>
                );
              }

              return (
                <div className="highlight-card" key={index}>
                  <div className="card-icon-wrapper">
                    <Icon className="card-icon" />
                  </div>
                  <div className="card-info">
                    <h4 className="card-title">{item.title}</h4>
                    <p className="card-desc">{item.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Image (Right column on desktop, top on mobile via CSS flex order) */}
        <div className="about-image-wrapper">
          <div className="image-decoration"></div>
          <div className="image-container">
            <img
              src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800"
              alt="Developer profile"
              className="profile-image"
            />
          </div>
        </div>
      </div>

      <Modal
        isOpen={modalIsOpen}
        onClose={closeModal}
        nameClass="aboutMe-section"
      >
        <h3>{AboutMeModal.title}</h3>
        <p className="">{AboutMeModal.description}</p>
        <h3>{Leadership.title}</h3>
        <p className="">{Leadership.description}</p>
        <h3>{Personal_Interests.title}</h3>
        <p className="">{Personal_Interests.description}</p>
      </Modal>
    </div>
  );
};

export default AboutMe;
