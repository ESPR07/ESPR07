import { NavLink } from "react-router";
import { useTheme } from "../../context/themeContext";
import { useEffect, useRef, useState } from "react";
import style from "./Navbar.module.css";

function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [underlineLeft, setUnderlineLeft] = useState(0);
  const [underlineWidth, setUnderlineWidth] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const refs = {
    home: useRef<HTMLAnchorElement>(null),
    projects: useRef<HTMLAnchorElement>(null),
    about: useRef<HTMLAnchorElement>(null),
  };

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
    else if (location.pathname.startsWith("/about")) updateUnderline("about");
  }, [location.pathname]);

  // Close menu on outside clicks
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        mobileMenuOpen &&
        navRef.current &&
        !navRef.current.contains(event.target as Node)
      ) {
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [mobileMenuOpen]);

  const handleNavClick = (key: keyof typeof refs) => {
    updateUnderline(key);
    setMobileMenuOpen(false);
  };

  return (
    <header className={style.header}>
      <nav className={style.navbar}>
        {/* Moving underline bar - desktop only */}
        <div
          className={style.underline}
          style={{ left: underlineLeft, width: underlineWidth }}
        />
        
        <NavLink
          to="/"
          ref={refs.home}
          className={({ isActive }) =>
            `${style.pageLink} ${isActive ? style.active : ""}`
          }
          onClick={() => handleNavClick("home")}
        >
          Home
        </NavLink>

        {/* Hamburger button */}
        <button
          className={`${style.hamburger} ${mobileMenuOpen ? style.open : ""}`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Navigation links */}
        <ul className={`${style.pageLinks} ${mobileMenuOpen ? style.open : ""}`}>
          <NavLink
            to="/projects"
            ref={refs.projects}
            className={({ isActive }) =>
              `${style.pageLink} ${isActive ? style.active : ""}`
            }
            onClick={() => handleNavClick("projects")}
          >
            Projects
          </NavLink>
          <NavLink
            to="/about"
            ref={refs.about}
            className={({ isActive }) =>
              `${style.pageLink} ${isActive ? style.active : ""}`
            }
            onClick={() => handleNavClick("about")}
          >
            About Me
          </NavLink>
        </ul>

        <div className={style.infoInteractions}>
          <ul className={style.socials}>
            <li>
              <a
                href="https://github.com/ESPR07"
                id={style.github}
                aria-label="Github"
              ></a>
            </li>
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
        </div>
      </nav>
    </header>
  );
}

export default Navbar;