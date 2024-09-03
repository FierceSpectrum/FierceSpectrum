import React from "react";
import "./Footer.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy } from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const footer = t("footer", { returnObjects: true });
  const aboutMe = t("aboutMe", { returnObjects: true });
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

  const handleClick = (href, id) => {
    if (href === "Home") {
      const scrollTo = id ? { state: { scrollTo: id } } : {};
      navigate("/", scrollTo);
    } else {
      navigate(`/${href}`);
    }
  };

  return (
    <div className="Footer">
      <footer className="footer">
        <div className="footer-content">
          <div className="contact-info">
            <p>
              <a href={`mailto:${email}`} className="email-link">
                {footer.email}
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
            {footer.links.map((link) => (
              <button onClick={() => handleClick(link.href, link.id)}>
                {link.name}
              </button>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
