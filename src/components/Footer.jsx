import React from "react";
import logo from "../assets/images/svg/logo.svg"
const Footer = () => {
  return (
    <div className="pt-12 sm:pt-16 md:pt-20 lg:pt-24 xl:pt-32 2xl:pt-[170px] pb-6 sm:pb-8 md:pb-10 lg:pb-[40px] bg-[#2B384C]">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-6 lg:gap-8">
          <div className="flex gap-3 items-center group">
           <img src={logo} alt="" />
            <p className="text-xl sm:text-2xl md:text-3xl lg:text-[32px] leading-tight lg:leading-[40px] font-semibold text-white transition-colors duration-300 group-hover:text-[#A53DFF]">
              Nancy Mor
            </p>
          </div>

          {/* Navigation Menu */}
          <nav className="order-3 lg:order-2">
            <ul className="flex flex-wrap justify-center gap-4 sm:gap-6 lg:gap-[24px]">
              {["Home", "About", "Process", "Portfolio", "Blog", "Contact"].map(
                (item) => (
                  <li key={item} className="relative group">
                    <a
                      className="text-white font-normal text-sm sm:text-base leading-[24px] transition-all duration-300 hover:text-[#A53DFF] relative"
                      href="#"
                    >
                      {item}
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#A53DFF] transition-all duration-300 group-hover:w-full"></span>
                    </a>
                  </li>
                )
              )}
            </ul>
          </nav>

          {/* Copyright */}
          <div className="order-2 lg:order-3">
            <p className="text-xs sm:text-sm md:text-base text-[#FFFFFF] leading-[24px] text-center lg:text-right opacity-80 hover:opacity-100 transition-opacity duration-300">
              Copyright © {new Date().getFullYear()} NancyMor.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
