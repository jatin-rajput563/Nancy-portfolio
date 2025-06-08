import React, { useState } from "react";
import logo from "../assets/images/svg/logo.svg";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleToggle = () => {
    setMenuOpen(!menuOpen);
    document.body.classList.toggle("overflow-hidden");
  };

  return (
    <nav className="bg-white shadow-2xl w-full z-10 relative">
      <div className="max-w-[1320px] mx-auto flex justify-between items-center py-4 px-6">
        <a
          href="#"
          className="text-black text-[20px] sm:text-[24px] md:text-[28px] lg:text-[32px] font-semibold flex items-center gap-[8px] sm:gap-[10px] md:gap-[12px]"
        >
          <img
            src={logo}
            alt="logo"
            className="w-[32px] sm:w-[36px] md:w-[40px] lg:w-[44px]"
          />
          Nancy Mor
        </a>
        <div
          onClick={handleToggle}
          className="lg:hidden z-50 flex flex-col justify-center gap-[5px] cursor-pointer"
        >
          <span
            className={`w-[30px] h-[4px] bg-black rounded transition-transform duration-300 origin-left ${
              menuOpen ? "rotate-34" : ""
            }`}
          ></span>
          <span
            className={`w-[30px] h-[4px] bg-black rounded transition-all duration-300 ${
              menuOpen ? "opacity-0" : "opacity-100"
            }`}
          ></span>
          <span
            className={`w-[30px] h-[4px] bg-black rounded transition-transform duration-300 origin-left ${
              menuOpen ? "-rotate-39" : ""
            }`}
          ></span>
        </div>
        <ul
          className={`fixed inset-0 bg-white flex flex-col justify-center items-center gap-[48px] text-black text-lg font-medium transition-transform duration-300 z-40
            ${menuOpen ? "translate-x-0" : "translate-x-full"} 
            lg:static lg:flex lg:flex-row lg:translate-x-0 lg:bg-transparent lg:h-auto`}
        >
          <li className="cursor-pointer group">
            <a
              href="#home"
              className="relative text-black hover:text-[#A53DFF] transition-colors duration-300 font-medium text-base "
            >
              Home
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#A53DFF] transition-all duration-300 group-hover:w-full"></span>
            </a>
          </li>
          <li className="cursor-pointer group">
            <a
              href="#about"
              className="relative text-black hover:text-[#A53DFF] transition-colors duration-300 font-medium text-base "
            >
              About
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#A53DFF] transition-all duration-300 group-hover:w-full"></span>
            </a>
          </li>
          <li className="cursor-pointer group">
            <a
              href="#process"
              className="relative text-black hover:text-[#A53DFF] transition-colors duration-300 font-medium text-base "
            >
              Process
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#A53DFF] transition-all duration-300 group-hover:w-full"></span>
            </a>
          </li>
          <li className="cursor-pointer group">
            <a
              href="#portfolio"
              className="relative text-black hover:text-[#A53DFF] transition-colors duration-300 font-medium text-base "
            >
              Portfolio
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#A53DFF] transition-all duration-300 group-hover:w-full"></span>
            </a>
          </li>
          <li className="cursor-pointer group">
            <a
              href="#blog"
              className="relative text-black hover:text-[#A53DFF] transition-colors duration-300 font-medium text-base "
            >
              Blog
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#A53DFF] transition-all duration-300 group-hover:w-full"></span>
            </a>
          </li>

          <li>
            <button
              className="relative inline-block px-6 py-2 bg-[#A53DFF] text-white font-semibold 
  shadow-[0_0_15px_#A53DFF] transition-all duration-500 ease-in-out 
  overflow-hidden group hover:scale-110 hover:shadow-[0_0_25px_#A53DFF] rounded-[4px]"
            >
              <span
                className="absolute inset-0 w-full h-full bg-white opacity-0 
    scale-x-0 origin-left transition-transform duration-500 ease-in-out 
    group-hover:scale-x-100 group-hover:opacity-10 z-0"
              ></span>
              <span className="relative z-10">Sign In</span>
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
