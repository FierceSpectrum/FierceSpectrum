import React, { useState } from "react";
import "./Projects.scss";
import { useTranslation } from "react-i18next";
import Project from "../Project/Project";
import Modal from "../Modal/Modal";

const Projects = () => {
  const { t } = useTranslation();
  const all = t("projects.all", { returnObjects: true });
  const { title, projects } = all;
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (project) => {
    setSelectedProject(project);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedProject(null);
  };

  return (
    <div className="Projects">
      <h2>{title}</h2>
      <div className="Projects-container">
        {projects.map((project, index) => (
          <Project key={index} project={project} openModal={openModal} />
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
            <h4>{all.modal.title1}:</h4>
            <ul>
              {selectedProject.technologies.map((tech, idx) => (
                <li key={idx}>{tech}</li>
              ))}
            </ul>
          </div>
          {selectedProject.additionalLinks && (
            <div className="additional-links">
              <h4>{all.modal.title2}:</h4>
              <ul>
                {[
                  ...(selectedProject.morelinks
                    ? selectedProject.githubLinks
                    : [selectedProject.githubLink]),
                  ...(selectedProject.additionalLinks || []),
                ].map((link, idx) => (
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

export default Projects;
