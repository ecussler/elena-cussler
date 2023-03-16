import React from "react";
import Avatar from '../assets/ec-avatar-blue.png'; 
import Watercolor from '../assets/home.png'; 

function AboutMe() {
  return (
    <div className="hero min-h-screen bg-white" >
      <div className="hero-content flex-col lg:flex-row">
        <img 
          src={Watercolor}
          className='w-full h-full object cover absolute'
        />
        <img
          src={Avatar}
          className="max-w-sm rounded-full shadow-2xl relative"
          alt='Avatar of Elena'
        />
        <div className="p-6 relative">
          <h1 className="text-5xl font-bold">Hi, I'm Elena.</h1>
          <p className="py-6">
           I am a hard-working professional looking for a new career in web development. Take a scroll down to see what I've learned so far. 
          </p>
          <button href='/contact-me' className="btn btn-sm">Let's Connect</button>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
