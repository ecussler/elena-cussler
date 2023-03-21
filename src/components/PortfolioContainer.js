import React, { useState } from "react";
import NavBar from "./NavBar";
import AboutMe from "./pages/AboutMe";
import Projects from "./pages/Projects";
import ContactMe from "./pages/ContactMe";
import Footer from "./Footer";
import Watercolor from '../assets/home.png'

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState("AboutMe");

  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
  const renderPage = () => {
    if (currentPage === "AboutMe") {
      return <AboutMe />;
    }
    if (currentPage === "Projects") {
      return <Projects />;
    }
    return <ContactMe />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <img src={Watercolor} className="w-full h-full object cover absolute" />
      {/* We are passing the currentPage from state and the function to update it */}
      <NavBar currentPage={currentPage} handlePageChange={handlePageChange} />
      {/* Here we are calling the renderPage method which will return a component  */}
      {renderPage()}
      {/* <Footer /> */}
    </div>
  );
}
