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
    language,
    project,
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
            <h2>{personalInfo.title}</h2>
            <p>
              <strong>{personalInfo.address.title}:</strong>{" "}
              {personalInfo.address.data}
            </p>
            <p>
              <strong>{personalInfo.email.title}:</strong>{" "}
              <a href={`mailto:${personalInfo.email.data}`}>
                {personalInfo.email.data}
              </a>
            </p>
            <p>
              <strong>{personalInfo.birthDate.title}:</strong>{" "}
              {personalInfo.birthDate.data}
            </p>
            <p>
              <strong>{personalInfo.nationality.title}:</strong>{" "}
              {personalInfo.nationality.data}
            </p>
            <p>
              <strong>{personalInfo.linkedin.title}:</strong>{" "}
              <a href={personalInfo.linkedin.data}>LinkedIn</a>
            </p>
          </section>

          {/* Habilidades */}
          <section className="skills">
            <h2>{skills.title1}</h2>
            <ul className="skills-interpersonal">
              {skills.soft.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
            <h2>{skills.title2}</h2>
            <ul>
              {skills.technical.map((skill, index) => (
                <li key={index} className="skill-item">
                  <span>{skill.name}</span>
                  <div className="skill-level">
                    {Array(4)
                      .fill(0)
                      .map((_, i) => (
                        <span
                          key={i}
                          className={`circle ${
                            i < skill.level ? "filled" : ""
                          }`}
                        ></span>
                      ))}
                  </div>
                </li>
              ))}
            </ul>
          </section>

          {/* Idiomas */}
          <section className="languages">
            <h2>{language.title}</h2>
            <ul>
              {language.languages.map((lang, index) => (
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
            <h2>{profile.title}</h2>
            <p>{profile.description}</p>
          </section>

          {/* Educación */}
          <section className="education">
            <h2>{education.title}</h2>
            <ul>
              {education.education.map((edu, index) => (
                <li key={index}>
                  <strong>{edu.year}</strong>{" "}
                  <p>
                    {edu.degree}, {edu.institution}
                  </p>
                </li>
              ))}
            </ul>
          </section>

          {/* Experiencia */}
          {/* <section className="experience">
            <h2>{experience.title}</h2>
            {experience.experience.map((exp, index) => (
              <p key={index}>
                <strong>{exp.title}</strong> - {exp.description}
              </p>
            ))}
          </section> */}

          {/* Proyectos */}
          <section className="projects">
            <h2>{project.title}</h2>
            {project.projects.map((proj, index) => (
              <div key={index}>
                <p>
                  <strong>{proj.title}</strong> - {proj.description}
                </p>
                {proj.links && (
                  <ul className="links">
                    {proj.links.map((link, i) => (
                      <li key={i} className="link">
                        <a
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {link.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </section>
          {/* Redes Sociales */}
          <section className="social-media">
            <h2>{socialMedia.title}</h2>
            <ul>
              {socialMedia.socialMedia.map((social, index) => (
                <li key={index} className={`social-item ${social.name}`}>
                  <a
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={social.icon}
                      alt={`${social.name} icon`}
                      width="20"
                      className="social-logo"
                    />{" "}
                    {social.name}
                  </a>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Curriculum;
