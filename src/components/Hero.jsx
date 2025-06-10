import React from "react";
import Navbar from "./NavBar";
import HeroImg from "../assets/images/Webp/hero-img.webp";
import TopLeftLayer from "../assets/images/png/top-green-layer.png";
import TopRightLayer from "../assets/images/png/top-pink-layer.png";
import UserImg from "../assets/images/Webp/user-img.webp";

const Hero = () => {
  return (
    <>
      <div className="relative">
        <img
          className="absolute top-0 left-0 pointer-events-none w-full max-w-[300px] sm:max-w-[400px] md:max-w-[500px] lg:max-w-[600px]"
          src={TopLeftLayer}
          alt="top-left-layer"
        />
        <img
          className="absolute top-0 right-0 pointer-events-none w-full max-w-[300px] sm:max-w-[400px] md:max-w-[500px] lg:max-w-[600px]"
          src={TopRightLayer}
          alt="top-right-layer"
        />
        <Navbar />
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 z-[1] relative">
          <div className="flex flex-col lg:flex-row lg:flex-wrap lg:-mx-3 mt-16 sm:mt-20 md:mt-24 lg:mt-[60px] lg:mb-[-400px]">
            <div className="w-full lg:w-1/2 lg:px-3 mb-6 lg:mb-0">
              <div className="mt-8 sm:mt-12 md:mt-16 lg:mt-[100px] text-center lg:text-left">
                <h1 className="font-semibold text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[72px] leading-tight sm:leading-tight md:leading-tight lg:leading-[84px] max-w-none lg:max-w-[376px] mx-auto lg:mx-0">
                  Hello, I'm Nancy Mor
                </h1>
                <p className="max-w-none sm:max-w-[500px] lg:max-w-[648px] text-base sm:text-lg lg:text-[18px] leading-relaxed lg:leading-[24px] text-gray-600 tracking-[-0.5px] lg:tracking-[-1px] m-0 pt-4 sm:pt-6 lg:pt-[24px] mx-auto lg:mx-0">
                  I design easy to use and beautiful websites and apps that
                  solve real problems. My goal is to make digital experiences
                  simple, clear, and enjoyable for everyone.
                </p>
                <div className="mt-6 sm:mt-8 lg:mt-[32px]">
                  <button
                    className="relative inline-block px-6 py-3 sm:px-8 sm:py-3 bg-[#A53DFF] text-white font-semibold 
                    shadow-[0_0_15px_#A53DFF] transition-all duration-500 ease-in-out 
                    overflow-hidden group hover:scale-110 hover:shadow-[0_0_25px_#A53DFF] rounded-[4px] text-sm sm:text-base"
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
            </div>
            <div className="w-full lg:w-1/2 lg:px-3 mb-6 lg:mb-0">
              <div className="flex justify-center lg:justify-end items-center lg:items-end mt-8 sm:mt-12 lg:mt-[20px]">
                <div className="relative group w-full max-w-[280px] sm:max-w-[350px] md:max-w-[400px] lg:max-w-[450px] rounded-[20px] sm:rounded-[25px] overflow-hidden mx-auto lg:mx-0">
                  <img
                    src={HeroImg}
                    alt="hero-img"
                    className="w-full rounded-[20px] sm:rounded-[25px] shadow-[0px_12px_48px_0px_#2B384C17] sm:shadow-[0px_18px_72px_0px_#2B384C17] lg:shadow-[0px_24px_116px_0px_#2B384C17]
                    transition-all duration-700 ease-in-out transform group-hover:scale-105 group-hover:shadow-[0px_20px_80px_0px_#2B384C17] lg:group-hover:shadow-[0px_32px_130px_0px_#2B384C17]"
                  />
                  <div
                    className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 
                    translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out"
                  ></div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-16 sm:mt-20 md:mt-32 lg:mt-48 xl:transform min-[1022px]:translate-y-[300px]">
            <div className="shadow-lg sm:shadow-xl lg:shadow-2xl bg-white p-6 sm:p-8 md:p-12 lg:p-16 xl:p-[112px] rounded-[12px] sm:rounded-[16px]">
              <div className="flex flex-col lg:flex-row lg:flex-wrap lg:-mx-3">
                <div className="w-full lg:w-1/2 lg:px-3 mb-8 lg:mb-6">
                  <div className="relative flex justify-center lg:justify-start">
                    <img
                      className="w-full max-w-[280px] sm:max-w-[320px] md:max-w-[380px] lg:max-w-[424px]"
                      src={UserImg}
                      alt="user-img"
                    />
                    <div className="max-w-[100px] sm:max-w-[120px] p-2 sm:p-[12px] rounded-[4px] bg-white shadow-[0px_8px_32px_0px_#1C19191F] sm:shadow-[0px_12px_64px_0px_#1C19191F] flex absolute bottom-[-20px] sm:bottom-[-35px] left-1/2 lg:left-[26%] transform -translate-x-1/2 lg:translate-x-0 items-center justify-center gap-1 sm:gap-0">
                      <a
                        className="w-8 h-8 sm:w-[48px] sm:h-[48px] bg-white hover:bg-[#A53DFF] flex items-center justify-center rounded-[4px] group transition-colors duration-300 text-[#A53DFF] hover:text-white"
                        href="2002nancymor@gmail.com"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <svg
                          width="18"
                          height="18"
                          viewBox="0 0 18 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M16.5 5.25L9.75675 9.54525C9.52792 9.67816 9.268 9.74817 9.00338 9.74817C8.73875 9.74817 8.47883 9.67816 8.25 9.54525L1.5 5.25"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M15 3H3C2.17157 3 1.5 3.67157 1.5 4.5V13.5C1.5 14.3284 2.17157 15 3 15H15C15.8284 15 16.5 14.3284 16.5 13.5V4.5C16.5 3.67157 15.8284 3 15 3Z"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </a>

                      <a
                        className="w-8 h-8 sm:w-[48px] sm:h-[48px] bg-white hover:bg-[#A53DFF] flex items-center justify-center rounded-[4px] group transition-colors duration-300"
                        href="https://www.linkedin.com/in/mornancy12345678/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <svg
                          width="14"
                          height="14"
                          className="sm:w-[18px] sm:h-[18px]"
                          viewBox="0 0 18 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clipPath="url(#clip0_2002_183)">
                            <path
                              d="M0 2.09066C0 1.48459 0.202708 0.98459 0.608108 0.590664C1.01351 0.196719 1.54055 -0.000244141 2.18919 -0.000244141C2.82626 -0.000244141 3.34169 0.193683 3.73552 0.581573C4.14092 0.981572 4.34363 1.50277 4.34363 2.14521C4.34363 2.72702 4.14672 3.21186 3.7529 3.59975C3.3475 3.99975 2.81467 4.19975 2.15444 4.19975H2.13707C1.49999 4.19975 0.984562 3.99975 0.590734 3.59975C0.196905 3.19975 0 2.69671 0 2.09066ZM0.225869 17.9997V5.85429H4.08301V17.9997H0.225869ZM6.22008 17.9997H10.0772V11.2179C10.0772 10.7937 10.1236 10.4664 10.2162 10.2361C10.3784 9.82397 10.6245 9.47548 10.9546 9.19065C11.2847 8.90579 11.6988 8.76338 12.1969 8.76338C13.4942 8.76338 14.1429 9.67852 14.1429 11.5088V17.9997H18V11.0361C18 9.24216 17.5946 7.88156 16.7838 6.95429C15.973 6.02702 14.9016 5.56338 13.5695 5.56338C12.0753 5.56338 10.9112 6.23611 10.0772 7.58156V7.61792H10.0598L10.0772 7.58156V5.85429H6.22008C6.24324 6.24216 6.25483 7.44822 6.25483 9.47247C6.25483 11.4967 6.24324 14.3391 6.22008 17.9997Z"
                              className="fill-[#A53DFF] group-hover:fill-white transition-colors duration-300"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_2002_183">
                              <rect width="18" height="18" fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="w-full lg:w-1/2 lg:px-3 mb-6 lg:mb-0">
                  <div className="mt-8 sm:mt-12 lg:mt-[54px] text-center lg:text-left">
                    <h2 className="font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-[38px] leading-tight sm:leading-tight md:leading-tight lg:leading-[50px] max-w-none lg:max-w-[536px] m-0 mx-auto lg:mx-0">
                      I am Professional User Experience Designer
                    </h2>
                    <p className="m-0 text-base sm:text-lg lg:text-[18px] leading-relaxed lg:leading-[24px] max-w-none sm:max-w-[500px] lg:max-w-[536px] text-[#556070] pt-6 sm:pt-8 lg:pt-[32px] mx-auto lg:mx-0">
                      I design clean and user-friendly websites, mobile apps,
                      and dashboards that make complex tasks simple and easy to
                      use. My focus is on creating smooth, engaging experiences
                      that work well for real users. <br />
                      <br />
                      As a designer, I turn ideas into clear, functional designs
                      that users love. I believe good design is simple, smart,
                      and solves real problems.
                    </p>
                    <div className="mt-6 sm:mt-8 lg:mt-[32px]">
                      <button
                        className="relative inline-block px-6 py-3 sm:px-8 sm:py-3 bg-[#A53DFF] text-white font-semibold 
                        shadow-[0_0_15px_#A53DFF] transition-all duration-500 ease-in-out 
                        overflow-hidden group hover:scale-110 hover:shadow-[0_0_25px_#A53DFF] rounded-[4px] text-sm sm:text-base"
                      >
                        <span
                          className="absolute inset-0 w-full h-full bg-white opacity-0 
                          scale-x-0 origin-left transition-transform duration-500 ease-in-out 
                          group-hover:scale-x-100 group-hover:opacity-10 z-0"
                        ></span>
                        <span className="relative z-10">My Project</span>
                      </button>
                    </div>
                  </div>
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
