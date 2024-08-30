import React from "react";
import "./Footer.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy } from "@fortawesome/free-solid-svg-icons";

import FooterDate from "../../Footer.json";

const Footer = () => {
  const { email, socialLinks, quicklinks } = FooterDate.footer;

  // Función para copiar el email al portapapeles
  const copyToClipboard = () => {
    navigator.clipboard
      .writeText(email)
      .then(() => {
        alert("Email copiado al portapapeles!");
      })
      .catch((err) => {
        console.error("Error al copiar el email: ", err);
      });
  };

  return (
    <div className="Footer">
      <footer className="footer">
        <div className="footer-content">
          <div className="contact-info">
            <p>
              Email:{" "}
              <a href={`mailto:${email}`} className="email-link">
                {email}
              </a>
              <button className="copy-button" onClick={copyToClipboard}>
                <FontAwesomeIcon icon={faCopy} />
              </button>
            </p>
          </div>
          <ul className="social-links">
            {socialLinks.map((link) => (
              <li key={link.name} className={`social-item ${link.name}`}>
                <a href={link.url} target="_blank" rel="noopener noreferrer">
                  <img
                    src={link.logo}
                    alt={`${link.name} logo`}
                    className="social-logo"
                  />
                </a>
              </li>
            ))}
          </ul>
          <div className="quick-links">
            {quicklinks.map((link) => (
              <a href={`#/${link.href}`}>{link.name}</a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
