import React from "react";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import "../../App.css";
import avatar from "../../assets/branding/Avatar.png";

function About() {
  return (
    <div className="flex-wrapper">
      <Header />
      <section className="is-page-content is-flex is-align-items-center is-brand-grey">
        <article className="section is-brand-grey">
          <div className="message-header">
            <p className="title is-font-light-grey">-About Me-</p>
          </div>
          <div className="message-body">
            <article className="tile is-ancestor is-vertical">
              <section className="tile is-child">
                <div className="columns level">
                  <div className="column is-three-quarters level-item">
                    <div className="box">
                      <p className="is-font-grey content">
                        For as long as I could remember, I've always had the
                        questions of 'How?' and 'Why?'. Time passed, and a
                        passive appreciation for the internet slowly grew and
                        turned those questions into a desire to know the
                        innerworkings of web pages, applications, and the
                        servers/databases behind them.
                      </p>
                      <p className="is-font-grey content">
                        Cut to mid-2021, when I began my journey into web
                        development, learning Javascript, Node.js, and more,
                        through a full stack bootcamp through the University of
                        Califonia, Riverside. I'm always looking for
                        opportunities to expand my knowledge and continue to
                        develop my skills as a Full Stack Developer.
                      </p>
                    </div>
                  </div>
                  <div className="column is-flex is-justify-content-center">
                    <figure className="image is-185x185 level-item">
                      <img
                        className="is-rounded"
                        src={avatar}
                        alt="Geometric intersecting tetrahedra folded from paper using origami"
                      />
                    </figure>
                  </div>
                </div>
              </section>
              <section className="tile is-flex is-justify-content-center">
                <div className="is-brand-light-grey">
                  <p className="title is-font-grey">Skills</p>
                </div>
              </section>
              <section className="tile">
                <div className="tile is-parent">
                  <div className="tile is-child box">
                    <p className="title has-text-centered is-font-grey">
                      Front-end
                    </p>
                    <div className="tags is-justify-content-center are-medium">
                      <span className="tag is-primary">HTML</span>
                      <span className="tag is-primary">CSS</span>
                      <span className="tag is-primary">Bulma CSS</span>
                      <span className="tag is-primary">Bootstrap</span>
                      <span className="tag is-primary">Javascript</span>
                      <span className="tag is-primary">Handlebars</span>
                      <span className="tag is-primary">React</span>
                    </div>
                  </div>
                </div>
                <div className="tile is-parent">
                  <div className="tile is-child box">
                    <p className="title has-text-centered is-font-grey">
                      Back-end
                    </p>
                    <div className="tags is-justify-content-center are-medium">
                      <span className="tag is-info">Node</span>
                      <span className="tag is-info">Express</span>
                      <span className="tag is-info">Sequelize</span>
                      <span className="tag is-info">Bcrypt</span>
                      <span className="tag is-info">SQL/MySQL</span>
                      <span className="tag is-info">MongoDB/Mongoose</span>
                      <span className="tag is-info">REST API</span>
                    </div>
                  </div>
                </div>
                <div className="tile is-parent">
                  <div className="tile is-child box">
                    <p className="title has-text-centered is-font-grey">
                      Tools/Tech
                    </p>
                    <div className="tags is-justify-content-center are-medium">
                      <span className="tag is-warning">Git</span>
                      <span className="tag is-warning">Agile</span>
                      <span className="tag is-warning">Heroku</span>
                      <span className="tag is-warning">Kanban</span>
                      <span className="tag is-warning">Microsoft Office</span>
                      <span className="tag is-warning">Inquirer</span>
                      <span className="tag is-warning">Markdown</span>
                    </div>
                  </div>
                </div>
              </section>
            </article>
          </div>
        </article>
      </section>
      <Footer />
    </div>
  );
}

export default About;
