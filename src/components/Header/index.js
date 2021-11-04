import React, { useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import "../../App.css";
import logo from "../../assets/branding/Portfolio Logo.png";

function Header() {
  const [isActive, setActive] = useState("true");

    const toggleMenu = () => {
        setActive(!isActive);
    };

  return (
    <header>
      <nav className="navbar has-shadow is-brand-dark-grey is-spaced">
        <div className="navbar-brand">
          <RouterLink to="/">
            <img
              src={logo}
              alt="B More Creative name with light green geometric icon"
            />
          </RouterLink>
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <a
            role="button"
            className={`navbar-burger ${isActive ? "" : "is-active"}`}
            id="navbarBurger"
            onClick={toggleMenu}
          >
            <span></span>
            <span></span>
            <span></span>
          </a>
        </div>
        <div id="navbarMenu" className={`navbar-menu ${isActive ? "" : "is-active"}`} onClick={toggleMenu}>
          <div className="navbar-end">
            <RouterLink to="/" className="navbar-item">
              -Home-
            </RouterLink>
            <RouterLink to="/about-me/" className="navbar-item">
              -About Me-
            </RouterLink>
            <RouterLink to="/portfolio/" className="navbar-item">
              -Portfolio-
            </RouterLink>
            <RouterLink to="/contact/" className="navbar-item">
              -Contact-
            </RouterLink>
            <a
              href="https://drive.google.com/file/d/1i6sxhPKSE-ML0MUnlMxQ3gQsfsa_LXda/view?usp=sharing"
              target="_blank"
              className="navbar-item"
              rel="noreferrer"
            >
              -Resume-
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
