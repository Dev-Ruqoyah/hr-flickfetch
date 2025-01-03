import React from "react";
import NavBar from "../../component/NavBar/NavBar";
import HeroSection from "./Hero";
import Hero from "../../assets/images/hero.jpg";
import Swiper from "../../component/Swipers/Swiper";
import SubNavBar from "../../component/NavBar/SubNavBar";
import Why from "./Why";
import Fetchmovie from "../../component/Fetcher/Fetch";
import FetchPopular from "../../component/Fetcher/PopularFetch";
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
      <div className="bg-black py-16">
        <div className="container mx-auto">
          <SubNavBar subNav={"Trending Now"} />
          <Fetchmovie />
        </div>
      </div>
      <div className="bg-black py-16">
        <div className="container mx-auto">
          <SubNavBar subNav={"Why flickfetch"} />

          <Why />
        </div>
      </div>

      <div className="bg-black py-16">
        <div className="container mx-auto">
          <SubNavBar subNav={"Top Rated"} />

          <FetchPopular />
        </div>
      </div>
    </>
  );
};

export default Home;
