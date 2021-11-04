import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import "../../App.css";

function Home() {
  return (
    <section className="hero is-fullheight">
      <div className="hero-head is-brand-dark-grey">
        <Header />
      </div>
      <div className="hero-body is-brand-grey">
        <p className="is-font-light-grey is-hero-subtitle">Nice to meet you, I'm</p>
        <p className="title is-hero-heading mb-0">
          <span className="is-font-green">B</span>
          <span className="pr-2">rian</span>
          <span className="is-font-green">More</span>no
        </p>
        <p className="is-font-light-grey is-hero-subtitle">
          A <span className="is-font-green">creative</span> full stack developer
          with a constant desire to learn more
        </p>
        <div className="is-inline mt-2">
          <a href="mailto: bamore404@gmail.com">
            <span className="icon-text has-text-grey-lighter">
              <span className="icon">
                <i className="fas fa-envelope"></i>
              </span>
              <span className="link">bamore404@gmail.com</span>
            </span>
          </a>
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
          >
            <span className="icon-text has-text-grey-lighter">
              <span className="icon">
                <i className="fab fa-linkedin"></i>
              </span>
              <span className="link">LinkedIn</span>
            </span>
          </a>
          <a
            href="https://drive.google.com/file/d/1i6sxhPKSE-ML0MUnlMxQ3gQsfsa_LXda/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
          >
            <span className="icon-text has-text-grey-lighter">
              <span className="icon">
                <i className="fas fa-file"></i>
              </span>
              <span className="link">Resume</span>
            </span>
          </a>
        </div>
      </div>
      <div className="hero-foot">
        <Footer />
      </div>
    </section>
  );
}

export default Home;
