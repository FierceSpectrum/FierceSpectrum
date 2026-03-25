import "./Navigation.scss";
import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

import { useTranslation } from "react-i18next";
import LanguageSwitcher from "../LanguageSwitcher/LanguageSwitcher";
import ToggleTheme from "../ToggleTheme/ToggleTheme";

const NavigationItems = ({ onItemClick }) => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const links = t("navigation.links", { returnObjects: true });

  const handleClick = (href, id) => {
    if (href === "Home") {
      const scrollTo = id ? { state: { scrollTo: id } } : {};
      navigate("/", scrollTo);
    } else {
      navigate(`/${href}`);
    }
    if (onItemClick) onItemClick();
  };

  return (
    <ul className="nav-links">
      {links.map((link, index) => (
        <li key={`${link.href}-${index}`}>
          <button
            className="nav-link-btn"
            onClick={() => handleClick(link.href, link.id)}
          >
            {link.name}
          </button>
        </li>
      ))}
    </ul>
  );
};

const Navigation = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };
    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isMenuOpen]);

  const handleMenuToggle = () => setIsMenuOpen((prev) => !prev);
  const handleMenuClose = () => setIsMenuOpen(false);

  return (
    <nav className={`navigation-bar ${isScrolled ? "scrolled" : ""}`}>
      <div className="navigation-container">
        {/* Logo */}
        <div className="nav-logo">
          <div className="logo-icon">B</div>
          <span className="logo-text">Benjamín Sandí</span>
        </div>

        {/* Desktop Navigation */}
        {!isMobile && (
          <div className="nav-desktop">
            <NavigationItems />
          </div>
        )}

        {/* Actions */}
        <div className="nav-actions">
          <ToggleTheme />
          <LanguageSwitcher />

          {/* Mobile hamburger */}
          {isMobile && (
            <button
              className={`hamburger-btn ${isMenuOpen ? "open" : ""}`}
              onClick={handleMenuToggle}
              aria-label="Toggle menu"
            >
              <span className="hamburger-line"></span>
              <span className="hamburger-line"></span>
              <span className="hamburger-line"></span>
            </button>
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobile && (
        <div
          ref={menuRef}
          className={`nav-mobile-menu ${isMenuOpen ? "open" : ""}`}
        >
          <NavigationItems onItemClick={handleMenuClose} />
        </div>
      )}
    </nav>
  );
};

export default Navigation;
