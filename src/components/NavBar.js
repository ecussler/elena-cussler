// import { url } from "inspector";
import React from "react";
import Logo from "../assets/Cussler.png";

const styles = {
  body: {
      color: 'navy'
  }
}



function NavBar() {
  return (
    <div className="navbar fixed relative bg-transparent">
      <div className="flex-1">
        <img className='w-10' src={Logo} alt='Letters EC in orange'/>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1" styles={styles.body}>
          <li>
            <a href="/">About Me</a>
          </li>
          <li>
            <a href="/Projects">Projects</a>
          </li>
          <li>
            <a href="/ContactMe">Contact Me</a>
          </li>
          <li>
            <a href="/Resume">Resume</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default NavBar;
