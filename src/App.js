import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/">
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
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
