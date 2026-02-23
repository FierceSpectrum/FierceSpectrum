import React from "react";
import "./Project.scss";

const Project = ({ project, openModal }) => {
  // Función para evitar la propagación del evento de clic
  const handleLinkClick = (event) => {
    event.stopPropagation();
  };

  const statusAlert = ["En progreso", "In Progress"];

  // Obtener los enlaces a partir de la propiedad del proyecto
  const links = project.morelinks ? project.githubLinks : [project.githubLink];
  const allLinks = [...links, ...(project.additionalLinks || [])];

  const getImagePath = (path) => {
    if (path && path.startsWith("./")) {
      return process.env.PUBLIC_URL + path.substring(1);
    }
    return path;
  };

  return (
    <div className="Project" onClick={() => openModal(project)}>
      <img
        src={getImagePath(project.image)}
        alt={`Imagen de ${project.title}`}
        className="project-image"
      />
      <div className="project-content">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        {statusAlert.includes(project.status) && (
          <p style={{ color: "orange" }}>🚧 {project.status}</p>
        )}
        <div className="links">
          {allLinks.map((link, idx) => (
            <a
              key={idx}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleLinkClick}
            >
              {link.text}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;
