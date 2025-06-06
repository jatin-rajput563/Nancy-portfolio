import React from "react";
import Navbar from "./NavBar";
import HeroImg from "../assets/images/Webp/hero-img.webp";
import TopLeftLayer from "../assets/images/png/top-green-layer.png";
import TopRightLayer from "../assets/images/png/top-pink-layer.png";
const Hero = () => {
  return (
    <>
      <div className="min-h-screen relative">
        <img
          className="absolute top-0 left-0 pointer-events-none w-full max-w-[600px]"
          src={TopLeftLayer}
          alt="top-left-layer"
        />
        <img
          className="absolute top-0 right-0 pointer-events-none w-full max-w-[600px] "
          src={TopRightLayer}
          alt="top-right-layer"
        />
        <Navbar />
        <div className="max-w-[1140px] mx-auto px-6 z-[1] relative">
          <div className="flex flex-row flex-wrap -mx-3 mt-[100px]">
            <div className="w-full lg:w-1/2 px-3 mb-6">
              <div className="mt-[100px] max-[1022px]:mt-[30px]">
                <h1 className="font-semibold text-[72px] leading-[84px] max-w-[376px] max-[1022px]:text-center max-[1022px]:mx-auto">
                  Hello, I’m Nancy Mor
                </h1>
                <p className="max-w-[648px] text-[18px] leading-[24px] text-gray-600 tracking-[-1px] m-0 pt-[24px] max-[1022px]:text-center max-[1022px]:mx-auto">
                  I design easy to use and beautiful websites and apps that
                  solve real problems. My goal is to make digital experiences
                  simple, clear, and enjoyable for everyone.
                </p>
                <button
                  className="relative max-[1022px]:flex max-[1022px]:mx-auto inline-block px-6 py-2 bg-[#A53DFF] mt-[32px] text-white font-semibold 
  shadow-[0_0_15px_#A53DFF] transition-all duration-500 ease-in-out 
  overflow-hidden group hover:scale-110 hover:shadow-[0_0_25px_#A53DFF] rounded-[4px]"
                >
                  <span
                    className="absolute inset-0 w-full h-full bg-white opacity-0 
    scale-x-0 origin-left transition-transform duration-500 ease-in-out 
    group-hover:scale-x-100 group-hover:opacity-10 z-0"
                  ></span>
                  <span className="relative z-10">Say Hello!</span>
                </button>
              </div>
            </div>
            <div className="w-full lg:w-1/2 px-3 mb-6">
              <div className="justify-end items-end flex max-[1022px]:mt-[20px]">
                <div className="relative max-[1022px]:flex max-[1022px]:mx-auto group w-full max-w-[450px] rounded-[25px] overflow-hidden">
                  <img
                    src={HeroImg}
                    alt="hero-img"
                    className="w-full rounded-[25px] shadow-[0px_24px_116px_0px_#2B384C17] 
    transition-all duration-700 ease-in-out transform group-hover:scale-105 group-hover:shadow-[0px_32px_130px_0px_#2B384C17]"
                  />
                  <div
                    className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 
    translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out"
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
