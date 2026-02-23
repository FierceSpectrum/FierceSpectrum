import React, { useEffect, useState } from "react";
import "./ToggleTheme.scss";
import { FiSun, FiMoon } from "react-icons/fi";

const ToggleTheme = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };
  return (
    <div className="ToggleTheme">
      <button
        onClick={toggleTheme}
        aria-label="Toggle theme"
        className="theme-button"
      >
        {theme === "light" ? <FiMoon className="icon" /> : <FiSun className="icon" />}
      </button>
    </div>
  );
};

export default ToggleTheme;
