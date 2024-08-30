import React from "react";
import "./Footer.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy } from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();

  const footer = t("footer", { returnObjects: true });
  const aboutMe = t("aboutMe", { returnObjects: true });
  const navigation = t("navigation", { returnObjects: true });
  const { email, socialLinks } = aboutMe;

  // Función para copiar el email al portapapeles
  const copyToClipboard = () => {
    navigator.clipboard
      .writeText(email || "")
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
              {footer.email}:{" "}
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
            {navigation.links.map((link) => (
              <a href={`#/${link.href}`}>{link.name}</a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
