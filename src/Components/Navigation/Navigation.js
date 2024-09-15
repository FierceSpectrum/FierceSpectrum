import "./Navigation.scss";
import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

import { useTranslation } from "react-i18next";
import LanguageSwitcher from "../LanguageSwitcher/LanguageSwitcher";
import ToggleTheme from "../ToggleTheme/ToggleTheme";

const NavigationItems = () => {
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
  };

  return (
    <ul className="Items">
      {links.map((link) => (
        <li key={link.href}>
          <button onClick={() => handleClick(link.href, link.id)}>
            {link.name}
          </button>
        </li>
      ))}
    </ul>
  );
};

const HamburgerMenu = ({ isOpen, onClose, onToggle }) => {
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  return (
    <div className="nav-cell" ref={menuRef}>
      <div className="menu-hamburger">
        <input
          className="checkbox"
          checked={isOpen}
          type="checkbox"
          onChange={onToggle}
        />
        <div className="menu-icon" onClick={onToggle}>
          <span className="line line1"></span>
          <span className="line line2"></span>
          <span className="line line3"></span>
        </div>
        <div className={`nav-items-wrapper ${isOpen ? "open" : ""}`}>
          <NavigationItems />
        </div>
      </div>
    </div>
  );
};

const Navigation = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleMenuToggle = () => setIsMenuOpen((prev) => !prev);
  const handleMenuClose = () => setIsMenuOpen(false);

  return (
    <div className="navigation-bar">
      <header className="navigation-header">
        <div className="navigation-container">
          <nav className="navigation-content">
            <div>
              {isMobile ? (
                <HamburgerMenu
                  isOpen={isMenuOpen}
                  onToggle={handleMenuToggle}
                  onClose={handleMenuClose}
                />
              ) : (
                <NavigationItems />
              )}
            </div>
          </nav>
          <div className="actions">
            <ToggleTheme />
            <LanguageSwitcher />
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navigation;
