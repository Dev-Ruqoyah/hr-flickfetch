import React from "react";
import NavBar from "../../component/NavBar/NavBar";
import HeroSection from "./Hero";
import Hero from "../../assets/images/hero.jpg";
import Swiper from "../../component/Swipers/Swiper";
import SubNavBar from "../../component/NavBar/SubNavBar";
import Why from "./Why";
const Home = () => {
  return (
    <>
      <div
        style={{
          backgroundImage: `url(${Hero})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        className="h-[100vh] relative "
      >
        <div className="absolute inset-0 bg-black bg-opacity-70"></div>
        <NavBar />
        <HeroSection />
      </div>
      <div className="bg-black h-[80vh] py-20 container">
        <SubNavBar subNav={"Trending Now"} />
        <Swiper />
      </div>
      <div className="bg-black h-[80vh]">
        <SubNavBar subNav={"Why flickfetch"} />
        <div className="">
          <Why />
        </div>
      </div>
    </>
  );
};

export default Home;
