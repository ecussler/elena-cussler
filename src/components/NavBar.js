import React from "react";
import Logo from "../assets/Cussler.png";


function NavBar() {
  return (
    <div className="navbar bg-base-100 fixed">
      <div className="flex-1">
        <img className='w-10' src={Logo} alt='Letters EC in orange'/>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a href="/">About Me</a>
          </li>
          <li>
            <a href="/">Portfolio</a>
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
