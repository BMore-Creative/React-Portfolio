import React from "react";
import { Link as RouterLink } from "react-router-dom";
import "../../App.css";
import logo from "../../assets/branding/Portfolio Logo.png";

const menuNavEl = document.querySelector("#navbarMenu");
const burgerNavEl = document.querySelector("#navbarBurger");

let toggleMenu = (event) => {
  if (event.target === burgerNavEl) {
    event.preventDefault();
  }
  //   menuNavEl.classList.toggle("is-active");
};

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
          <a
            role="button"
            className="navbar-burger"
            id="navbarBurger"
            onClick={toggleMenu}
          >
            <span></span>
            <span></span>
            <span></span>
          </a>
        </div>
        <div id="navbarMenu" className="navbar-menu">
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
