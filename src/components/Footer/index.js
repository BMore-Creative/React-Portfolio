import React from "react";
import "../../App.css";

function Footer() {
  return (
    <footer className="footer is-brand-dark-grey">
      <div className="level">
        <div className="level-left">
          <div className="level-item has-text-centered">
            <p className="is-font-light-grey subtitle is-6 pr-2">
              Designed and Built by Brian Moreno
            </p>
          </div>
        </div>
        <div className="level-item">
          <a
            href="https://github.com/BMore-Creative"
            target="_blank"
            rel="noreferrer"
          >
            <span className="icon-text has-text-grey-lighter">
              <span className="icon">
                <i className="fab fa-github"></i>
              </span>
              <span className="link">GitHub</span>
            </span>
          </a>
          <a
            href="https://www.linkedin.com/in/bmore-creative"
            target="_blank"
            rel="noreferrer"
            className="pl-5 pr-2"
          >
            <span className="icon-text has-text-grey-lighter">
              <span className="icon">
                <i className="fab fa-linkedin"></i>
              </span>
              <span className="link">LinkedIn</span>
            </span>
          </a>
        </div>
        <div className="level-right">
          <div className="level-item has-text-centered">
              <p className="is-font-light-grey pr-2 subtitle is-6">
                'About Me' picture, site icon, and logo based on origami designs
                by Thomas Hull
              </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
