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
    <div className="navbar fixed relative">
      <div className="flex-1">
        <img className='w-10' src={Logo} alt='Letters EC in orange'/>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1" styles={styles.body}>
          <li>
            <a href="/">About Me</a>
          </li>
          <li>
            <a href="/">Projects</a>
          </li>
          <li>
            <a href="/">Contact Me</a>
          </li>
          <li>
            <a href="/">Resume</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default NavBar;
