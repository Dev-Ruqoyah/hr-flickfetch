import React from "react";
import NavBar from "../../component/NavBar/NavBar";
import HeroSection from "./Hero";
import Hero from "../../assets/images/hero.jpg";
import Swiper from "../../component/Swipers/Swiper";
import SubNavBar from "../../component/NavBar/SubNavBar";
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
      <div className="bg-black h-[80vh] py-20">
        <SubNavBar subNav={"Trending Now"} />
        <Swiper />
      </div>
    </>
  );
};

export default Home;
