import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import "../../App.css";

import project2 from "../../assets/projects/Coffee-Tin.png";
import project3 from "../../assets/projects/Whats-Cookin.png";
import project4 from "../../assets/projects/Note-Taker.png";
import project5 from "../../assets/projects/Professional README Generator Example.webm";
import project6 from "../../assets/projects/Weather-Dashboard.png";
import project1 from "../../assets/projects/Tech-Blog.png";

function Portfolio() {
  return (
    <div>
      <Header />
      <section className="is-brand-grey">
        <article className="section">
          <header className="message-header">
            <p className="title is-font-light-grey">-Portfolio-</p>
          </header>
          <div className="message-body">
            <div className="tile is-ancestor is-vertical">
              {/* <!-- PROJECTS 1 & 2 --> */}
              <section className="tile">
                {/* <!-- PROJECT 1 --> */}
                <div className="tile is-parent">
                  <div className="tile is-child box">
                    <p className="title has-text-centered mb-2 is-font-grey">
                      Tech Blog
                    </p>
                    <div className="has-text-centered pb-2">
                      <p className="is-font-grey">
                        Full-stack application that allows authenticated users
                        to view and comment on other users blog posts, as well
                        as create posts of their own
                      </p>
                    </div>
                    <div>
                      <figure className="image">
                        <img
                          src={project1}
                          alt="Tech blog application showing two posts made by users"
                        />
                      </figure>
                    </div>
                    <div className="tags pt-3 is-justify-content-center">
                      <span className="tag is-primary">Handlebars</span>
                      <span className="tag is-primary">CSS/Bulma CSS</span>
                      <span className="tag is-primary">Javascript</span>
                      <span className="tag is-info">Node</span>
                      <span className="tag is-info">Express</span>
                      <span className="tag is-info">Sequelize</span>
                      <span className="tag is-info">Bcrypt</span>
                      <span className="tag is-info">SQL/MySQL</span>
                      <span className="tag is-warning">Heroku</span>
                    </div>
                    <div className="has-text-centered pt-2">
                      <a
                        href="https://github.com/BMore-Creative/Tech-Blog"
                        target="_blank"
                        className="button"
                        rel="noreferrer"
                      >
                        <span className="icon-text has-text-grey">
                          <span className="icon">
                            <i className="fab fa-github"></i>
                          </span>
                          <span>GitHub</span>
                        </span>
                      </a>
                      <a
                        href="https://immense-wave-95005.herokuapp.com/"
                        target="_blank"
                        className="button"
                        rel="noreferrer"
                      >
                        <span className="icon-text has-text-grey">
                          <span className="icon">
                            <i className="far fa-eye"></i>
                          </span>
                          <span>Live App</span>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
                {/* <!-- PROJECT 2 --> */}
                <div className="tile is-parent">
                  <div className="tile is-child box">
                    <p className="title has-text-centered mb-2 is-font-grey">
                      Coffee Tin
                    </p>
                    <div className="has-text-centered pb-2">
                      <p className="is-font-grey">
                        Full Stack application mock-up allowing authenticated
                        users to contribute funds to existing projects and
                        create their own
                      </p>
                    </div>
                    <figure className="image">
                      <img
                        src={project2}
                        alt="Crowdfunding application, showing two user created projects asking for funding"
                      />
                    </figure>
                    <div className="tags pt-3 is-justify-content-center">
                      <span className="tag is-primary">Handlebars</span>
                      <span className="tag is-primary">CSS/Bulma CSS</span>
                      <span className="tag is-primary">Javascript</span>
                      <span className="tag is-info">Node</span>
                      <span className="tag is-info">Express</span>
                      <span className="tag is-info">Sequelize</span>
                      <span className="tag is-info">Bcrypt</span>
                      <span className="tag is-info">SQL/MySQL</span>
                      <span className="tag is-warning">Heroku</span>
                      <span className="tag is-warning">Stripe</span>
                    </div>
                    <div className="has-text-centered">
                      <a
                        href="https://github.com/BMore-Creative/Coffee-Tin"
                        target="_blank"
                        className="button"
                        rel="noreferrer"
                      >
                        <span className="icon-text has-text-grey">
                          <span className="icon">
                            <i className="fab fa-github"></i>
                          </span>
                          <span>GitHub</span>
                        </span>
                      </a>
                      <a
                        href="http://coffee-tin.herokuapp.com/"
                        target="_blank"
                        className="button"
                        rel="noreferrer"
                      >
                        <span className="icon-text has-text-grey">
                          <span className="icon">
                            <i className="far fa-eye"></i>
                          </span>
                          <span>Live App</span>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </section>
              {/* <!-- PROJECTS 3 & 4 --> */}
              <section className="tile">
                {/* <!-- PROJECT 3 --> */}
                <div className="tile is-parent">
                  <div className="tile is-child box">
                    <p className="title has-text-centered mb-2 is-font-grey">
                      What's Cookin
                    </p>
                    <div className="has-text-centered pb-2">
                      <p className="is-font-grey">
                        Front-end web application that provides the user food
                        and drink recipes based on their responses to questions
                      </p>
                    </div>
                    <div>
                      <figure className="image">
                        <img
                          src={project3}
                          alt="Recipe Recommendation application, showing quiz options"
                        />
                      </figure>
                    </div>
                    <div className="tags pt-3 is-justify-content-center">
                      <span className="tag is-primary">HTML</span>
                      <span className="tag is-primary">CSS/Bulma CSS</span>
                      <span className="tag is-primary">Javascript</span>
                      <span className="tag is-warning">TheMealDB API</span>
                      <span className="tag is-warning">TheCocktailDB API</span>
                    </div>
                    <div className="has-text-centered">
                      <a
                        href="https://github.com/BMore-Creative/Whats-Cookin"
                        target="_blank"
                        className="button"
                        rel="noreferrer"
                      >
                        <span className="icon-text has-text-grey">
                          <span className="icon">
                            <i className="fab fa-github"></i>
                          </span>
                          <span>GitHub</span>
                        </span>
                      </a>
                      <a
                        href="https://bmore-creative.github.io/Whats-Cookin/"
                        target="_blank"
                        className="button"
                        rel="noreferrer"
                      >
                        <span className="icon-text has-text-grey">
                          <span className="icon">
                            <i className="far fa-eye"></i>
                          </span>
                          <span>Live App</span>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
                {/* <!-- PROJECT 4 --> */}
                <div className="tile is-parent">
                  <div className="tile is-child box">
                    <p className="title has-text-centered mb-2 is-font-grey">
                      Note Taker
                    </p>
                    <div className="has-text-centered pb-2">
                      <p className="is-font-grey">
                        Full Stack application that allows users to create notes
                        for personal use. Previous notes may be viewed and
                        deleted
                      </p>
                    </div>
                    <figure className="image">
                      <img
                        src={project4}
                        alt="Note taking app, shows two saved notes in a sidebar and a currently active note on the main section of the page"
                      />
                    </figure>
                    <div className="tags pt-3 is-justify-content-center">
                      <span className="tag is-primary">HTML</span>
                      <span className="tag is-primary">CSS</span>
                      <span className="tag is-primary">Javascript</span>
                      <span className="tag is-info">Node</span>
                      <span className="tag is-info">Express</span>
                      <span className="tag is-warning">Heroku</span>
                    </div>
                    <div className="has-text-centered pt-2">
                      <a
                        href="https://github.com/BMore-Creative/Note-Taker/"
                        target="_blank"
                        className="button"
                        rel="noreferrer"
                      >
                        <span className="icon-text has-text-grey">
                          <span className="icon">
                            <i className="fab fa-github"></i>
                          </span>
                          <span>GitHub</span>
                        </span>
                      </a>
                      <a
                        href="https://ancient-bastion-94462.herokuapp.com/"
                        target="_blank"
                        className="button"
                        rel="noreferrer"
                      >
                        <span className="icon-text has-text-grey">
                          <span className="icon">
                            <i className="far fa-eye"></i>
                          </span>
                          <span>Live App</span>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </section>
              {/* <!-- PROJECTS 5 & 6 --> */}
              <section className="tile">
                {/* <!-- PROJECT 5 --> */}
                <div className="tile is-parent">
                  <div className="tile is-child box">
                    <p className="title has-text-centered mb-2 is-font-grey">
                      Professional README Generator
                    </p>
                    <div className="has-text-centered pb-2">
                      <p className="is-font-grey">
                        Node CLI that allows a user to generate a README based
                        on their input, formatting it in a clean and
                        professional manner
                      </p>
                    </div>
                    <div>
                      <figure className="has-text-centered">
                        <video src={project5} controls>
                          Your browser does not support the video tag.
                        </video>
                      </figure>
                    </div>
                    <div className="tags pt-3 is-justify-content-center">
                      <span className="tag is-info">Node</span>
                      <span className="tag is-warning">Inquirer</span>
                      <span className="tag is-warning">Markdown</span>
                    </div>
                    <div className="has-text-centered pt-2">
                      <a
                        href="https://github.com/BMore-Creative/Professional-README-Generator/"
                        target="_blank"
                        className="button"
                        rel="noreferrer"
                      >
                        <span className="icon-text has-text-grey">
                          <span className="icon">
                            <i className="fab fa-github"></i>
                          </span>
                          <span>GitHub</span>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
                {/* <!-- PROJECT 6 --> */}
                <div className="tile is-parent">
                  <div className="tile is-child box">
                    <p className="title has-text-centered mb-2 is-font-grey">
                      Weather Dashboard
                    </p>
                    <div className="has-text-centered pb-2">
                      <p className="is-font-grey">
                        Front-end application that provides the user with
                        weather information for cities of their choice. Uses
                        OpenWeatherAPI
                      </p>
                    </div>
                    <figure className="image">
                      <img
                        src={project6}
                        alt="Weather information app, showing current weather info for a searched city, along with a five day forecast"
                      />
                    </figure>
                    <div className="tags pt-3 is-justify-content-center">
                      <span className="tag is-primary">HTML</span>
                      <span className="tag is-primary">CSS</span>
                      <span className="tag is-primary">Javascript</span>
                      <span className="tag is-warning">OpenWeatherAPI</span>
                    </div>
                    <div className="has-text-centered pt-2">
                      <a
                        href="https://github.com/BMore-Creative/Weather-Dashboard/"
                        target="_blank"
                        className="button"
                        rel="noreferrer"
                      >
                        <span className="icon-text has-text-grey">
                          <span className="icon">
                            <i className="fab fa-github"></i>
                          </span>
                          <span>GitHub</span>
                        </span>
                      </a>
                      <a
                        href="https://bmore-creative.github.io/Weather-Dashboard/"
                        target="_blank"
                        className="button"
                        rel="noreferrer"
                      >
                        <span className="icon-text has-text-grey">
                          <span className="icon">
                            <i className="far fa-eye"></i>
                          </span>
                          <span>Live App</span>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </article>
      </section>
      <Footer />
    </div>
  );
}

export default Portfolio;
