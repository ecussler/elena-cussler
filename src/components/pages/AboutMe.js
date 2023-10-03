import React from "react";
import flowers from "../../assets/flowers.jpg";
import hike from "../../assets/hike.jpg";
import hilde from "../../assets/hilde.jpg";
import lake from "../../assets/lake.jpg";
import p1 from "../../assets/p1.jpg";
import pie from "../../assets/pie.jpg";
import tartine from "../../assets/tartine.jpg";
import rainbow from "../../assets/rainbow.jpg";
import { Link } from "react-router-dom";

function AboutMe() {
  return (
    // <div className="hero min-h-screen" >
    //   <div className="hero-content flex-col lg:flex-row">
    //     <img
    //       src={Avatar}
    //       className="max-w-sm rounded-full shadow-2xl relative"
    //       alt='Avatar of Elena'
    //     />
    //     <div className="p-6 relative">
    //       <h1 className="text-5xl font-bold">Hi, I'm Elena.</h1>
    //       <p className="py-6">
    //        I am a hard-working professional looking for a new career in web development. Check out the site to see what I've learned so far.
    //       </p>
    //       <Link to='/contact-me' className="btn btn-lg">Let's Connect</Link>
    //     </div>
    //   </div>
    // </div>
    <div className="hero min-h-screen">
      <div className="text-base-content glass xl:rounded-box -mt-48 grid max-w-screen-xl gap-4 bg-opacity-60 xl:pb-0 mx-10">
        <div className="px-2 pt-2">
          <h1 className="text-3xl font-bold px-3 py-2">About Me</h1>
          <p className="p-3">
            Whether it is language, baking, or front-end coding, I have always
            enjoyed working with systems that are equal parts creative and
            logical. My experience using logical systems to create something new
            has strengthened my ability to think outside of the box and find
            creative solutions to logical problems.{" "}
          </p>

          {/* <div className="carousel rounded-box max-w-md carousel-center space-x-4 bg-neutral max-w-md">
            <div id="item1" className="carousel-item w-1/2">
              <img src={rainbow} className="w-full" />
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide4" className="btn btn-circle">
                  ❮
                </a>
                <a href="#slide2" className="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>
            <div id="item2" className="carousel-item w-1/2">
              <img src={p1} className="w-full" />
            </div>
            <div id="item3" className="carousel-item w-1/2">
              <img src={tartine} className="w-full" />
            </div>
            <div id="item4" className="carousel-item w-1/2">
              <img src={flowers} className="w-full" />
            </div>
            <div id="item5" className="carousel-item w-1/2">
              <img src={pie} className="w-full" />
            </div>
            <div id="item6" className="carousel-item w-1/2">
              <img src={hilde} className="w-full" />
            </div>
            <div id="item7" className="carousel-item w-1/2">
              <img src={lake} className="w-full" />
            </div>
            <div id="item8" className="carousel-item w-1/2">
              <img src={hike} className="w-full" />
            </div>
          </div> */}

          <p className="p-3">
            Throughout my professional career, I have frequently worked in small
            teams and strengthened my communication and problem-solving skills
            in the process. Both personally and professionally, I believe that
            pooling teammates' unique knowledge sets to find solutions can only
            strengthen the program, and team, as a whole.{" "}
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
