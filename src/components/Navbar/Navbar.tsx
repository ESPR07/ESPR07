import { NavLink } from "react-router";
import style from "./Navbar.module.css";
import { useTheme } from "../../context/themeContext";
import { useEffect, useRef, useState } from "react";

function Navbar() {
  const { theme, toggleTheme } = useTheme();

  const [underlineLeft, setUnderlineLeft] = useState(0);
  const [underlineWidth, setUnderlineWidth] = useState(0);

  const refs = {
    home: useRef<HTMLAnchorElement>(null),
    projects: useRef<HTMLAnchorElement>(null),
    about: useRef<HTMLAnchorElement>(null),
  };

  // update underline position when route changes
  const updateUnderline = (key: keyof typeof refs) => {
    const element = refs[key].current;
    if (element) {
      const { offsetLeft, offsetWidth } = element;
      setUnderlineLeft(offsetLeft);
      setUnderlineWidth(offsetWidth);
    }
  };

  useEffect(() => {
    if (location.pathname === "/") updateUnderline("home");
    else if (location.pathname.startsWith("/projects"))
      updateUnderline("projects");
    else if (location.pathname.startsWith("/about"))
      updateUnderline("about");
  }, [location.pathname]);

  return (
    <header className={style.header}>
      <nav className={style.navbar}>
        {/* Moving underline bar */}
        <div
          className={style.underline}
          style={{ left: underlineLeft, width: underlineWidth }}
        />

        <NavLink
          to="/"
          ref={refs.home}
          className={({ isActive }) => `${style.pageLink} ${isActive ? style.active : ""}`}
          onClick={() => updateUnderline("home")}
        >
          Home
        </NavLink>

        <ul className={style.pageLinks}>
          <NavLink
          to="/projects"
          ref={refs.projects}
          className={({ isActive }) => `${style.pageLink} ${isActive ? style.active : ""}`}
          onClick={() => updateUnderline("projects")}
        >
          Projects
        </NavLink>

        <NavLink
          to="/about"
          ref={refs.about}
          className={({ isActive }) => `${style.pageLink} ${isActive ? style.active : ""}`}
          onClick={() => updateUnderline("about")}
        >
          About Me
        </NavLink>
        </ul>

        <button
          aria-label="Theme Toggle"
          className={style.toggleContainer}
          onClick={toggleTheme}
        >
          <span
            className={`${style.toggleBall} ${
              theme === "dark" ? style.dark : style.light
            }`}
          />
        </button>
      </nav>
    </header>
  );
}

export default Navbar;
