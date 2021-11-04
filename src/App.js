import React from "react";
import { Route, Routes } from "react-router-dom";

import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-me/" element={<About />} />
        <Route path="/portfolio/" element={<Portfolio />} />
        <Route path="/contact/" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
