import React from "react";
import HeroButton from "../../component/Buttons/HeroButton";
const HeroSection = () => {
  return (
    <>
      <div className="opacity-90 h-[90%]">
        <div className="container mx-auto h-full ">
          <div className="flex flex-col justify-center items-center h-full">
            <h3 className="md:text-6xl text-4xl font-bold text-white">
              Unlimited movies, <br />
              TV shows, and more
            </h3>
            <p className="text-white font-semibold text-xl">Starts at ₦2,200. Cancel anytime.</p>
            <div className="email mt-4 ">
              <p className="text-white text-center">Ready to watch? Enter your email to create or restart your membership.</p>
              <div className="flex md:flex-row flex-col gap-4 container mx-auto mt-3 justify-center items-center">
                <input type="email" className="w-[360px] h-[50px] border rounded-md bg-black opacity-60 px-4 " placeholder="Email Address" name="" id="" />
                <HeroButton text={"Get Started"}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
