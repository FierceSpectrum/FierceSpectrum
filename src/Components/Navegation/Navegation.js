import "./Navegation.scss";
import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

import { useTranslation } from "react-i18next";
import LenguageSwitcher from "../LenguageSwitcher/LenguageSwitcher";
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

const HamburgerMenu = () => (
  <div className="nav-cell">
    <div className="menu-hamburger">
      <input className="checkbox" type="checkbox" />
      <div className="menu-icon">
        <span className="line line1"></span>
        <span className="line line2"></span>
        <span className="line line3"></span>
      </div>
      <div className="nav-items-wrapper">
        <NavigationItems />
      </div>
    </div>
  </div>
);

const Navegation = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <div className="navigation-bar">
        <header className="navigation-header">
          <div className="navigation-container">
            <nav className="navigation-content">
              <div>{isMobile ? <HamburgerMenu /> : <NavigationItems />}</div>
            </nav>
            <div className="actions">
              <ToggleTheme />
              <LenguageSwitcher />
            </div>
          </div>
        </header>
      </div>
      {/* <Outlet /> */}
    </>
  );
};

export default Navegation;
