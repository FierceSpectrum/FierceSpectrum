import React from "react";
import "./Curriculum.scss";
import { useTranslation } from "react-i18next";

const Curriculum = () => {
  const { t } = useTranslation();

  const {
    header,
    personalInfo,
    profile,
    education,
    experience,
    skills,
    languages,
    projects,
    socialMedia,
  } = t("curriculum", { returnObjects: true });

  return (
    <div className="Curriculum">
      <div
        className="profile-header"
        // style={{
        //   backgroundImage: `url(${header.backgroundImage}.png)`,
        // }}
      >
        <div className="header">
          <img
            src={header.image}
            alt="Foto de perfil"
            className="profile-picture"
          />
          <h1 className="name">{header.name}</h1>
        </div>
      </div>
      <div className="parent">
        {/* Left section */}
        <div className="left-section">
          {/* Información Personal */}
          <section className="personal-info">
            <h2>Información Personal</h2>
            <p>
              <strong>Dirección:</strong> {personalInfo.address}
            </p>
            <p>
              <strong>Email:</strong>{" "}
              <a href={`mailto:${personalInfo.email}`}>{personalInfo.email}</a>
            </p>
            <p>
              <strong>Fecha de Nacimiento:</strong> {personalInfo.birthDate}
            </p>
            <p>
              <strong>Nacionalidad:</strong> {personalInfo.nationality}
            </p>
            <p>
              <strong>LinkedIn:</strong>{" "}
              <a href={personalInfo.linkedin}>LinkedIn</a>
            </p>
          </section>

          {/* Habilidades */}
          <section className="skills">
            <h2>Habilidades Técnicas</h2>
            <ul>
              {skills.technical.map((skill, index) => (
                <li key={index}>
                  <span>{skill.name}</span>
                  <span>{skill.level}</span>
                </li>
              ))}
            </ul>
            <h2>Habilidades Interpersonales</h2>
            <ul>
              {skills.interpersonal.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
          </section>

          {/* Idiomas */}
          <section className="languages">
            <h2>Idiomas</h2>
            <ul>
              {languages.map((lang, index) => (
                <li key={index}>
                  {lang.language} ({lang.level})
                </li>
              ))}
            </ul>
          </section>
        </div>

        {/* Right section */}
        <div className="right-section">
          {/* Perfil */}
          <section className="profile">
            <h2>Perfil Profesional</h2>
            <p>{profile.description}</p>
          </section>

          {/* Educación */}
          <section className="education">
            <h2>Educación</h2>
            <ul>
              {education.map((edu, index) => (
                <li key={index}>
                  <strong>{edu.year}</strong>: {edu.degree}, {edu.institution}
                </li>
              ))}
            </ul>
          </section>

          {/* Experiencia */}
          {/* <section className="experience">
            <h2>Experiencia Profesional</h2>
            {experience.map((exp, index) => (
              <p key={index}>
                <strong>{exp.title}</strong> - {exp.description}
              </p>
            ))}
          </section> */}

          {/* Proyectos */}
          <section className="projects">
            <h2>Proyectos</h2>
            {projects.map((proj, index) => (
              <p key={index}>
                <strong>{proj.title}</strong> - {proj.description}
              </p>
            ))}
          </section>
        </div>
      </div>
      {/* Redes Sociales */}
      <section className="social-media">
        <h2>Redes Sociales</h2>
        <ul>
          {socialMedia.map((social, index) => (
            <li key={index}>
              <a href={social.url} target="_blank" rel="noopener noreferrer">
                <img src={social.icon} alt={`${social.name} icon`} width="20" />{" "}
                {social.name}
              </a>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default Curriculum;
