import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import "../../App.css";

function Contact() {
  return (
    <div>
      <Header />
      <article className="section is-brand-grey">
        <h3 className="title is-size-3 is-font-light-grey">Contact Me</h3>
        <hr />
        <form id="contactForm">
          <div className="field">
            <label htmlFor="name" className="label is-font-light-grey">
              Name
            </label>
            <input
              className="input"
              type="text"
              name="name"
              placeholder="Enter Name..."
              required
            />
          </div>
          <div className="field">
            <label htmlFor="email" className="label is-font-light-grey">
              Email
            </label>
            <input
              className="input"
              type="email"
              name="email"
              placeholder="Enter Email..."
              required
            />
          </div>
          <div className="field">
            <label htmlFor="emailMessage" className="label is-font-light-grey">
              Message
            </label>
            <p className="control">
              <textarea
                className="textarea"
                name="emailMessage"
                placeholder="How can I help you?"
                required
              ></textarea>
            </p>
          </div>
          <div className="field">
            <div className="control">
              <button className="button is-brand-dark-grey is-font-light-grey" type="submit">
                Send Email
              </button>
            </div>
          </div>
        </form>
      </article>
      <Footer />
    </div>
  );
}

export default Contact;
