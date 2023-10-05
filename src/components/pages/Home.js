import React from "react";
import Avatar from "../../assets/ec-avatar-blue.png";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="hero min-h-screen">
      <div className="hero-content flex-col lg:flex-row">
        <img
          src={Avatar}
          className="max-w-sm rounded-full shadow-2xl relative"
          alt="Avatar of Elena"
        />
        <div className="p-6 relative">
          <h1 className="text-5xl font-bold py-2">Hi, I'm Elena.</h1>
          <h2 className="text-2xl">
            Thanks for dropping by! 
          </h2>
          <p className="py-3">I am a hard-working professional seeking new opportunities in front-end web development. My diverse work background, MERN stack training, and passion for learning give me the unique ability to relate with clients of all types and translate their vision into clean, efficient, and accessible products. </p>
          <p className='py-3'> Take a look around my profile and please feel free to reach out with any questions!</p>
          <Link to="/contact-me" className="btn btn-lg">
            Let's Connect!
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
