import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Resume from "./pages/Resume";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/about-me/">
            <About />
          </Route>
          <Route exact path="/portfolio/">
            <Portfolio />
          </Route>
          <Route exact path="/contact/">
            <Contact />
          </Route>
          <Route exact path="/resume/">
            <Resume />
          </Route>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
