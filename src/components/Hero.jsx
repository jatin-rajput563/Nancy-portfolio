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
                        className="w-8 h-8 sm:w-[48px] sm:h-[48px] bg-white hover:bg-[#A53DFF] flex items-center justify-center rounded-[4px] group transition-colors duration-300"
                        href="https://www.instagram.com/n_mor39?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <svg
                          width="14"
                          height="14"
                          className="sm:w-[18px] sm:h-[18px]"
                          viewBox="0 0 18 18"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M6.00048 9C6.00048 7.34321 7.34322 5.99976 9 5.99976C10.6568 5.99976 12.0002 7.34321 12.0002 9C12.0002 10.6568 10.6568 12.0002 9 12.0002C7.34322 12.0002 6.00048 10.6568 6.00048 9ZM4.37859 9C4.37859 11.5524 6.44758 13.6214 9 13.6214C11.5524 13.6214 13.6214 11.5524 13.6214 9C13.6214 6.44758 11.5524 4.37859 9 4.37859C6.44758 4.37859 4.37859 6.44758 4.37859 9ZM12.7243 4.1954C12.7243 4.79152 13.2078 5.27569 13.8046 5.27569C14.4007 5.27569 14.8849 4.79152 14.8849 4.1954C14.8849 3.59927 14.4015 3.11583 13.8046 3.11583C13.2078 3.11583 12.7243 3.59927 12.7243 4.1954ZM5.36365 16.3258C4.48619 16.2858 4.00929 16.1397 3.69233 16.0161C3.27213 15.8525 2.97262 15.6577 2.65711 15.3429C2.34233 15.0281 2.14677 14.7286 1.98393 14.3084C1.86034 13.9914 1.71422 13.5145 1.67423 12.6371C1.63061 11.6884 1.62189 11.4034 1.62189 9C1.62189 6.59661 1.63134 6.31236 1.67423 5.36292C1.71422 4.48546 1.86107 4.00929 1.98393 3.6916C2.1475 3.27141 2.34233 2.97189 2.65711 2.65638C2.97189 2.3416 3.27141 2.14604 3.69233 1.9832C4.00929 1.85961 4.48619 1.71349 5.36365 1.67351C6.31236 1.62989 6.59733 1.62116 9 1.62116C11.4034 1.62116 11.6876 1.63061 12.6371 1.67351C13.5145 1.71349 13.9907 1.86034 14.3084 1.9832C14.7286 2.14604 15.0281 2.3416 15.3436 2.65638C15.6584 2.97116 15.8532 3.27141 16.0168 3.6916C16.1404 4.00856 16.2865 4.48546 16.3265 5.36292C16.3701 6.31236 16.3788 6.59661 16.3788 9C16.3788 11.4027 16.3701 11.6876 16.3265 12.6371C16.2865 13.5145 16.1397 13.9914 16.0168 14.3084C15.8532 14.7286 15.6584 15.0281 15.3436 15.3429C15.0288 15.6577 14.7286 15.8525 14.3084 16.0161C13.9914 16.1397 13.5145 16.2858 12.6371 16.3258C11.6884 16.3694 11.4034 16.3781 9 16.3781C6.59733 16.3781 6.31236 16.3694 5.36365 16.3258ZM5.2895 0.0545234C4.33134 0.0981422 3.67706 0.250081 3.10493 0.472536C2.51317 0.702262 2.01155 1.0105 1.51066 1.51066C1.0105 2.01082 0.702262 2.51244 0.472536 3.10493C0.250081 3.67706 0.0981422 4.33134 0.0545234 5.2895C0.0101777 6.24911 0 6.5559 0 9C0 11.4441 0.0101777 11.7509 0.0545234 12.7105C0.0981422 13.6687 0.250081 14.3229 0.472536 14.8951C0.702262 15.4868 1.00977 15.9892 1.51066 16.4893C2.01082 16.9895 2.51244 17.297 3.10493 17.5275C3.67779 17.7499 4.33134 17.9019 5.2895 17.9455C6.24984 17.9891 6.5559 18 9 18C11.4448 18 11.7509 17.9898 12.7105 17.9455C13.6687 17.9019 14.3229 17.7499 14.8951 17.5275C15.4868 17.297 15.9885 16.9895 16.4893 16.4893C16.9895 15.9892 17.297 15.4868 17.5275 14.8951C17.7499 14.3229 17.9026 13.6687 17.9455 12.7105C17.9891 11.7502 17.9993 11.4441 17.9993 9C17.9993 6.5559 17.9891 6.24911 17.9455 5.2895C17.9019 4.33134 17.7499 3.67706 17.5275 3.10493C17.297 2.51317 16.9895 2.01155 16.4893 1.51066C15.9892 1.0105 15.4868 0.702262 14.8958 0.472536C14.3229 0.250081 13.6687 0.0974152 12.7112 0.0545234C11.7516 0.0109047 11.4448 0 9.00073 0C6.5559 0 6.24984 0.0101777 5.2895 0.0545234Z"
                            className="fill-[#A53DFF] group-hover:fill-white transition-colors duration-300"
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
