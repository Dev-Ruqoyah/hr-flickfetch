import React from "react";
import HeroButton from "../../component/Buttons/HeroButton";
import { Link } from "react-router-dom";
const HeroSection = () => {
  return (
    <>
      <div className="opacity-90 h-[90%]">
        <div className="container mx-auto h-full ">
          <div className="flex flex-col justify-center items-center h-full">
            <h3 className="md:text-6xl text-4xl text-center font-bold text-white">
            Dive into the  <br />
            World of Cinema
            </h3>
            <p className="text-white font-semibold text-xl text-center">Search, explore, and let us take you to the official pages of your favorite films!</p>
            <div className="email mt-4 ">
              
                <Link to={"/movies"}>
                <HeroButton text={"Get Started"}/></Link>

              </div>
            </div>
          </div>
        </div>
      
    </>
  );
};

export default HeroSection;
