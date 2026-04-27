import React, { useState } from "react";
import defaultImage from "../images/profile.jpg";
import hoverImage from "../images/earth.jpg";
import { Element } from "react-scroll";

const Hero = () => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <Element name="home">
      <div className="w-full max-w-4xl mt-10 sm:mt-16 md:mt-20 mb-10 flex items-center justify-center cursor-pointer px-4 mx-auto">
        <div className="w-full flex flex-col md:flex-row items-center">
          
          <div className="w-full md:w-[65%] text-center md:text-left">
            <div className="inline-block">
              <span className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-l from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Hi, I'm Pankaj Hamal
              </span>

              <div className="flex items-center gap-2 mt-2 justify-center md:justify-start">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                <div className="h-px bg-blue-300 flex-1" />
                <div className="flex gap-1">
                  <div className="w-1 h-1 rounded-full bg-blue-400" />
                  <div className="w-1 h-1 rounded-full bg-blue-400" />
                  <div className="w-1 h-1 rounded-full bg-blue-400" />
                </div>
                <div className="h-px bg-blue-300 flex-1" />
                <div className="w-1.5 h-1.5 rounded-full bg-blue-400" />
              </div>
            </div>

            <br />

            <p className="text-lg sm:text-xl md:text-2xl mt-2 mb-3 bg-gradient-to-l from-green-500 via-blue-500 to-green-500 bg-clip-text text-transparent">
              Aspiring Full-Stack Developer
            </p>

            <p className="text-gray-600 text-sm sm:text-base md:text-lg text-center md:text-justify">
              Computer Engineering student from Nepal with a passion for web development. Skilled in React, JavaScript, and Node.js, with a focus on building real-world projects and continuously improving through hands-on learning.
            </p>
          </div>

          <div className="w-full md:w-[35%] flex justify-center items-center mt-6 md:mt-0">
            <div
              className="w-28 h-28 sm:w-32 sm:h-32 md:w-40 md:h-40 perspective"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <div
                className={`relative w-full h-full rounded-full cursor-pointer transition-transform duration-700 ease-in-out transform-style-preserve-3d ${
                  isHovered ? "rotate-y-180" : ""
                }`}
              >
                <img
                  src={defaultImage}
                  alt="Profile"
                  className="absolute inset-0 w-full h-full rounded-full backface-hidden object-cover object-center"
                />
                <img
                  src={hoverImage}
                  alt="Profile Hover"
                  className="absolute inset-0 w-full h-full rounded-full rotate-y-180 backface-hidden object-cover object-center"
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </Element>
  );
};

export default Hero;