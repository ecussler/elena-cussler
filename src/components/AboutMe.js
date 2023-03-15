import React from "react";

function AboutMe() {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        <img
          src="/IMG_2069.jpg"
          className="max-w-sm rounded-lg shadow-2xl"
        />
        <div>
          <h1 className="text-5xl font-bold">Hello, I'm Elena.</h1>
          <p className="py-6">
           I am a hard-working professional looking for a new career in web development. Take a scroll down to see what I've learned so far. 
          </p>
          <button href='/contact-me' className="btn btn-primary">Let's Connect</button>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
