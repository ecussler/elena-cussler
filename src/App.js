import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PortfolioContainer from "./components/PortfolioContainer";
import Resume from "./components/pages/Resume";
import Projects from "./components/pages/Projects";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import AboutMe from "./components/pages/AboutMe";
import ContactMe from "./components/pages/ContactMe";
import Watercolor from './assets/home.png'; 

function App() {
  return (
    <div>
      <img src={Watercolor} className="w-full h-full object cover absolute" />
      <Router>
        <NavBar />
        <Routes>
          <Route path="/elena-cussler" element={<AboutMe />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact-me" element={<ContactMe />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
