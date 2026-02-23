import React from "react";
import "./Curriculum.scss";
import { useTranslation } from "react-i18next";

import PdfDownloadButton from "../PdfDownloadButton/PdfDownloadButton";

const Curriculum = () => {
  const { t } = useTranslation();

  const {
    header,
    profile,
    experience,
    skills,
    education
  } = t("curriculum", { returnObjects: true });

  return (
    <div className="Curriculum">
      <div className="cv-download-top">
        <PdfDownloadButton />
      </div>
      <div className="cv-container">
        {/* Header section */}
        <header className="cv-header">
          <h1 className="name">{header.name}</h1>
          <h2 className="title">{header.title}</h2>
          <div className="contact-info">
            {header.contact.split('\n').map((line, index) => (
              <p key={index}>{line}</p>
            ))}
          </div>
        </header>

        {/* Body section */}
        <div className="cv-body">
          {/* Profile */}
          <section className="cv-section">
            <h3 className="section-title">{profile.title}</h3>
            <div className="section-content">
              {profile.description.split('\n').map((para, index) => (
                <p key={index}>{para}</p>
              ))}
            </div>
          </section>

          {/* Experience */}
          <section className="cv-section">
            <h3 className="section-title">{experience.title}</h3>
            <div className="section-content">
              {experience.items.map((exp, index) => (
                <div key={index} className="experience-item">
                  <h4 className="item-title">{exp.title}</h4>
                  <ul>
                    {exp.details.map((detail, idx) => (
                      <li key={idx}>{detail}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Skills */}
          <section className="cv-section">
            <h3 className="section-title">{skills.title}</h3>
            <div className="section-content">
              <ul className="skills-list">
                {skills.items.map((skill, index) => (
                  <li key={index}>
                    <strong>{skill.category}:</strong> {skill.details}
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* Education */}
          <section className="cv-section">
            <h3 className="section-title">{education.title}</h3>
            <div className="section-content">
              {education.items.map((edu, index) => (
                <div key={index} className="education-item">
                  <h4 className="item-title">{edu.degree}</h4>
                  <p>{edu.institution}</p>
                  <p className="year">{edu.year}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Curriculum;
