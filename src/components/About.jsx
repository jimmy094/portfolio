import React from "react";
import me2 from '../assets/me2.png'

const About = () => {
  return (
    <div
    name="about"
    className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
  >
    <div className="max-w-screen-lg p-4 mx-auto flex flex-row items-center justify-around w-full h-3/4">
  
      <div className="flex flex-col items-center">
        
        <h2 className="text-4xl font-bold">
          About
        </h2>
        <div className="max-w-sm ml-5">
          <p className="text-lg break-words pl-5" >
          Highly motivated engineer with a strong background in web development and over 8 years of customer facing support experience. Quick learner with a passion for problem solving and ensuring the best possible experience for customers.
          </p>
        </div>
        
  
      </div>
      <img className="rounded-2xl h-40 w-30" src={me2} alt="me" />
        
      
    </div>
  </div>
  );
};

export default About;
