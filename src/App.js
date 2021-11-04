import React from "react";
import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";

function App() {
  return (
      <Routes>
        <Route path="/React-Portfolio/" element={<Home />} />
        <Route path="/React-Portfolio/about-me/" element={<About />} />
        <Route path="/React-Portfolio/portfolio/" element={<Portfolio />} />
        <Route path="/React-Portfolio/contact/" element={<Contact />} />
        <Route path="*" element={<Home />} />
      </Routes>
  );
}

export default App;
