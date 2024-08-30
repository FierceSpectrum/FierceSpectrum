import React, { useState } from "react";
import "./FeaturedProjects.scss";
import Modal from "../Modal/Modal";
import { useTranslation } from "react-i18next";

const FeaturedProjects = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const { t } = useTranslation();
  const { featured } = t("projects", { returnObjects: true });
  const { projects } = featured;

  const openModal = (project) => {
    setSelectedProject(project);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedProject(null);
  };

  // Función para evitar la propagación del evento de clic
  const handleLinkClick = (event) => {
    event.stopPropagation();
  };

  return (
    <div className="FeaturedProjects">
      <h2>{featured.title}</h2>
      <div className="card-container">
        {projects.map((project, index) => (
          <div className="card" key={index} onClick={() => openModal(project)}>
            <img
              src={project.image}
              alt={`Imagen de ${project.title}`}
              className="card-image"
            />
            <div className="card-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="links">
                <>
                  {(project.morelinks
                    ? project.githubLinks
                    : [project.githubLink]
                  ).map((link) => (
                    <a
                      key={link.text}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={handleLinkClick}
                    >
                      {link.text}
                    </a>
                  ))}
                </>
              </div>
            </div>
          </div>
        ))}
      </div>
      {selectedProject && (
        <Modal
          isOpen={modalIsOpen}
          onClose={closeModal}
          nameClass="project-details"
        >
          <h3>{selectedProject.title}</h3>
          <p>{selectedProject.longDescription}</p>
          <div className="technologies">
            <h4>{featured.modal.title1}:</h4>
            <ul>
              {selectedProject.technologies.map((tech, idx) => (
                <li key={idx}>{tech}</li>
              ))}
            </ul>
          </div>
          {selectedProject.additionalLinks && (
            <div className="additional-links">
              <h4>{featured.modal.title2}:</h4>
              <ul>
                {(selectedProject.morelinks
                  ? selectedProject.githubLinks
                  : [selectedProject.githubLink]
                ).map((link, idx) => (
                  <li key={idx}>
                    <a
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {link.text}
                    </a>
                  </li>
                ))}
                {selectedProject.additionalLinks.map((link, idx) => (
                  <li key={idx}>
                    <a
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {link.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </Modal>
      )}
    </div>
  );
};

export default FeaturedProjects;
