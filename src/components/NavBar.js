// import { url } from "inspector";
import React from "react";
import Logo from "../assets/Cussler.png";
import { Link } from "react-router-dom";


const styles = {
  body: {
      color: 'navy'
  }
}



function NavBar() {
  return (
    <div className="navbar fixed relative bg-transparent pb-5">
      <div className="flex-1">
        <img className='w-10' src={Logo} alt='Letters EC in orange'/>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1" styles={styles.body}>
          <li>
            <Link to="/">About Me</Link>
          </li>
          <li>
            <Link to="projects">Projects</Link>
          </li>
          <li>
            <Link to="contact-me">Contact Me</Link>
          </li>
          <li>
            <Link to="resume">Resume</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default NavBar;
