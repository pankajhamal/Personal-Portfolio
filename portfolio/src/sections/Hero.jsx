import React, { useState } from "react";
import defaultImage from "../images/profile.jpg";
import hoverImage from "../images/earth.jpg";

const Hero = () => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div className="w-4xl mt-20 mb-10 flex items-center justify-center cursor-pointer">
      <div className="w-full flex items-center">
        <div className="w-140">
          <span className="text-4xl font-bold bg-gradient-to-l from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Hi, I'm Pankaj Hamal
          </span>
          <br />
          <p className="text-[18px] mt-2 mb-3 bg-gradient-to-l from-green-500 via-blue-500 to-green-500 bg-clip-text text-transparent">
            Aspiring Full-Stack Developer 
          </p>
          <p className="text-gray-600 font-stretch-110%">
          I am a Computer Engineering student from Nepal with a strong interest
          in web development. I enjoy building real-world projects using React,
          JavaScript, Node.js and continuously improving my skills
          through hands-on practice.
          </p>
        </div>
        <div className="w-70 flex justify-center items-center">
          <div
            className="w-40 h-40 perspective"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div
              className={`relative w-40 h-40 rounded-full cursor-pointer transition-transform duration-700 ease-in-out transform-style-preserve-3d
      ${isHovered ? "rotate-y-180" : ""}`}
            >
              <img
                src={defaultImage}
                alt="Profile"
                className="absolute inset-0 w-40 h-40 rounded-full backface-hidden object-cover object-center"
              />
              <img
                src={hoverImage}
                alt="Profile Hover"
                className="absolute inset-0 w-40 h-40 mask-auto rounded-full rotate-y-180 backface-hidden object-cover object-center"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
