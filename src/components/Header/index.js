import React from "react";
import { Link as RouterLink } from "react-router-dom";

import logo from "../../assets/branding/Portfolio Logo.png"

function Header(props) {
  return (
    <header>
      <nav className="navbar has-shadow is-brand-dark-grey is-fixed-top is-spaced">
        <div className="navbar-brand">
          <RouterLink to="/">
            <img
              src={logo}
              alt="B More Creative name with light green geometric icon"
            />
          </RouterLink>
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <a role="button" className="navbar-burger" id="navbarBurger">
            <span></span>
            <span></span>
            <span></span>
          </a>
        </div>
        <div id="navbarMenu" className="navbar-menu">
          <div className="navbar-end">
            <a href="#home" className="navbar-item">
              -Home-
            </a>
            <a href="#about-me" className="navbar-item" id="about-link">
              -About Me-
            </a>
            <a href="#portfolio" className="navbar-item" id="portfolio-link">
              -Portfolio-
            </a>
            <a href="#contact-me" className="navbar-item" id="contact-link">
              -Contact Me-
            </a>
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
