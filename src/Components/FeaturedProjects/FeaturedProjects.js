import React, { useState } from "react";
import "./FeaturedProjects.scss";
import Modal from "../Modal/Modal";
import featuredProjectsData from "../../FeaturedProjects.json";

const FeaturedProjects = () => {
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

  // Función para evitar la propagación del evento de clic
  const handleLinkClick = (event) => {
    event.stopPropagation();
  };

  return (
    <div className="FeaturedProjects">
      <h2>Proyectos Destacados</h2>
      <div className="card-container">
        {featuredProjectsData.map((project, index) => (
          <div className="card" key={index} onClick={() => openModal(project)}>
            <img
              src={project.image}
              alt={`Imagen de ${project.title}`}
              className="card-image"
            />
            <div className="card-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              {project.status === "in-progress" && (
                <p className="status">🚧 En desarrollo</p>
              )}
              <div className="links">
                {project.title === "Social Hub" ? (
                  <>
                    <a
                      href={project.FrontEndLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={handleLinkClick}
                    >
                      Ver en GitHub el Frontend
                    </a>
                    <a
                      href={project.BackEndLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={handleLinkClick}
                    >
                      Ver en GitHub el Backend
                    </a>
                  </>
                ) : (
                  <>
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={handleLinkClick}
                    >
                      Ver en GitHub
                    </a>
                  </>
                )}
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
            <h4>Tecnologías utilizadas:</h4>
            <ul>
              {selectedProject.technologies.map((tech, idx) => (
                <li key={idx}>{tech}</li>
              ))}
            </ul>
          </div>
          {selectedProject.additionalLinks && (
            <div className="additional-links">
              <h4>Enlaces adicionales:</h4>
              <ul>
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
