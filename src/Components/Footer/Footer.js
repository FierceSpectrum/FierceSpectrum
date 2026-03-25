import React, { useState } from "react";
import "./Footer.scss";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { FiMail, FiGithub, FiLinkedin, FiTwitter, FiArrowUp, FiCheck, FiExternalLink } from "react-icons/fi";

const Footer = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const footerData = t("footer", { returnObjects: true });
  const [emailCopied, setEmailCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(footerData.email);
      setEmailCopied(true);
      setTimeout(() => setEmailCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy email:", err);
    }
  };

  const openEmailClient = () => {
    window.location.href = `mailto:${footerData.email}`;
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const socialLinks = [
    { icon: FiGithub, href: "https://github.com/FierceSpectrum", label: "GitHub", className: "GitHub" },
    { icon: FiLinkedin, href: "https://www.linkedin.com/in/benjamin-sandi-salas-440159324/", label: "LinkedIn", className: "LinkedIn" },
    { icon: FiTwitter, href: "https://x.com/BenjaminSandiS1", label: "Twitter", className: "Twitter" },
  ];

  const handleLinkClick = (href, id) => {
    if (href === "Home") {
      const scrollTo = id ? { state: { scrollTo: id } } : {};
      navigate("/", scrollTo);
    } else {
      navigate(`/${href}`);
    }
  };

  return (
    <footer className="Footer">
      <div className="footer-container">
        <div className="footer-grid">
          {/* Contact Section */}
          <div className="footer-section">
            <h3 className="section-title">{footerData.contactTitle}</h3>
            <div className="contact-actions">
              <div className="email-display">
                <FiMail className="icon-sm" />
                <span>{footerData.email}</span>
              </div>
              <div className="action-buttons">
                <button className="btn-outline" onClick={copyEmail}>
                  {emailCopied ? (
                    <>
                      <FiCheck className="icon-sm" /> {footerData.emailCopied}
                    </>
                  ) : (
                    <>
                      <FiMail className="icon-sm" /> {footerData.copyEmail}
                    </>
                  )}
                </button>
                <button className="btn-outline" onClick={openEmailClient}>
                  <FiExternalLink className="icon-sm" /> {footerData.openEmail}
                </button>
              </div>
            </div>
          </div>

          {/* Social Media Section */}
          <div className="footer-section">
            <h3 className="section-title">{footerData.socialTitle}</h3>
            <div className="social-links-grid">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className={`social-item ${social.className}`}
                >
                  <social.icon className="icon-md" />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation Section */}
          <div className="footer-section">
            <h3 className="section-title">{footerData.navTitle}</h3>
            <nav className="quick-links">
              {footerData.links.map((link, index) => (
                <button
                  key={index}
                  onClick={() => handleLinkClick(link.href, link.id)}
                  className="nav-link"
                >
                  {link.name}
                </button>
              ))}
            </nav>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="footer-bottom">
          <p className="rights-text">
            © {new Date().getFullYear()} Developer Portfolio. {footerData.rights}
          </p>
          <button className="btn-outline btn-top" onClick={scrollToTop}>
            {footerData.backToTop} <FiArrowUp className="icon-sm" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
