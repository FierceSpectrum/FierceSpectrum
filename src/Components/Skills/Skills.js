import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import "./Skills.scss";
import Modal from "../Modal/Modal";
import { useTranslation } from "react-i18next";

// Skill item component
const SkillItem = ({ skill, angle, distance }) => (
  <li style={{ "--angle": `${angle}deg`, "--distance": `${distance}px` }}>
    <img src={skill.icon} alt={skill.name} />
    <span>{skill.name}</span>
  </li>
);

SkillItem.propTypes = {
  skill: PropTypes.shape({
    icon: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
  angle: PropTypes.number.isRequired,
  distance: PropTypes.number.isRequired,
};

// Skills component
const Skills = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [allSkills, setAllSkills] = useState([]);
  const { t } = useTranslation();
  const { fullstack, all } = t("skills", { returnObjects: true });
  const { skills } = fullstack;

  useEffect(() => {
    if (modalIsOpen) {
      setAllSkills(all);
    }
  }, [modalIsOpen]);

  const openModal = () => setModalIsOpen(true);
  const closeModal = () => setModalIsOpen(false);

  return (
    <div className="Skills">
      <h2 onClick={openModal}>{fullstack.button}</h2>
      {skills.map((category) => (
        <div key={category.type} className={`circle ${category.type}`}>
          <ul>
            {category.skills.map((skill, index) => {
              const angle = index * (360 / category.skills.length);
              const distance = 50 + index * 20;
              return (
                <SkillItem
                  key={skill.name}
                  skill={skill}
                  angle={angle}
                  distance={distance}
                />
              );
            })}
          </ul>
        </div>
      ))}
      <Modal
        isOpen={modalIsOpen}
        onClose={closeModal}
        nameClass="skills-section"
      >
        <h3>{fullstack.modal.title1}</h3>
        <div className="skills-list">
          {allSkills.map((category) => (
            <div key={category.type} className="skills-category">
              <h4>
                {category.icon} {category.type}
              </h4>
              <div>
                {category.items.map((skill) => (
                  <div className="skill">
                    <img className="img-modal"
                      key={skill.name}
                      src={skill.icon}
                      alt={skill.name}
                    />
                    <span className="span-modal">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Modal>
    </div>
  );
};

export default Skills;
