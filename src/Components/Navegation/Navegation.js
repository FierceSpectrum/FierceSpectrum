import "./Navegation.scss";
import { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";

import { useTranslation } from "react-i18next";
import LenguageSwitcher from "../LenguageSwitcher/LenguageSwitcher";
import Footer from "../Footer/Footer";

const NavigationItems = () => {
  const { t } = useTranslation();
  const links = t("navigation.links", { returnObjects: true });
  return (
    <ul className="Items">
      {links.map((link) => (
        <li>
          <Link to={`/${link.href}`}>{link.name}</Link>
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
              <LenguageSwitcher />
            </div>
          </div>
        </header>
      </div>
      <Outlet />
      <Footer />
    </>
  );
};

export default Navegation;
