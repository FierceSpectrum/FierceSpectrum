import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import "./Skills.scss";
import skillsData from "../Jsons/Skills.json";
import skillsModal from "../Jsons/SkillsModal.json";
import Modal from "../Modal/Modal";

// Skill categories and icons
const categories = {
  Lenguajes: "💻",
  Frontend: "🎨",
  Backend: "🛠️",
  Database: "🗄️",
  DevOps: "🚀",
  Software: "🖥️",
  Other: "🌐",
};

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
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    if (modalIsOpen) {
      setSkills(skillsModal);
    }
  }, [modalIsOpen]);

  const openModal = () => setModalIsOpen(true);
  const closeModal = () => setModalIsOpen(false);

  const getCategoryIcon = (category) => categories[category] || "";

  return (
    <div className="Skills">
      <h2 onClick={openModal}>Habilidades</h2>
      {skillsData.map((category) => (
        <div key={category.type} className={`circle ${category.type}`}>
          <ul>
            {category.skills.map((skill, index) => {
              const angle = index * (360 / category.skills.length);
              const distance = 50 + index * 20; // Adjust distance as needed
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
        <h3>Lista de Habilidades</h3>
        <div className="skills-list">
          {skills.map((category) => (
            <div key={category.type} className="skills-category">
              <h4>
                {getCategoryIcon(category.type)} {category.type}
              </h4>
              <div>
                {category.items.map((skill) => (
                  <img
                    key={skill.name}
                    src={skill.icon}
                    alt={skill.name}
                    style={{ display: "inline-block", marginRight: "10px" }}
                  />
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
