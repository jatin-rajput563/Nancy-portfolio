import React from "react";
import sign from "../assets/images/png/sign-path.png";
import nurolink from "../assets/images/png/nurolink.png";
import attorny from "../assets/images/png/attorny.png";
import grocery from "../assets/images/png/grocry.png";
import trends from "../assets/images/png/trends.png";
import zebria from "../assets/images/png/zebria.png";

const Portfolio = () => {
  return (
    <>
      <div className="py-16 md:py-24 lg:py-[120px]">
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[48px] font-semibold leading-tight lg:leading-[56px] text-center text-[#132238]">
              Portfolio
            </h2>
            <p className="text-base sm:text-lg lg:text-[18px] leading-relaxed lg:leading-[24px] text-[#87909D] max-w-[976px] text-center mx-auto mt-4 md:mt-6">
              Here are some of my favorite projects that show how I design
              easy-to-use websites, apps, and dashboards. Each one highlights my
              focus on great user experience and clean design.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mt-12 md:mt-16 lg:mt-[60px]">
            {/* First Column - Mobile: 1 item, Tablet: 2 items, Desktop: 3 items */}
            <div className="flex flex-col gap-6">
              <div className="bg-white rounded-lg hover:shadow-2xl transition-all duration-300 border border-[#E6E8EB] w-full max-w-[424px] mx-auto lg:mx-0">
                <img
                  src={nurolink}
                  alt="NeuroLink Homepage"
                  className="w-full h-auto rounded-t-lg"
                />
                <div className="p-4 md:p-5">
                  <p className="font-medium text-xs leading-4 text-[#87909D] m-0">
                    UI-UX DESIGN
                  </p>
                  <h3 className="font-semibold text-lg leading-6 m-0 pt-1">
                    NeuroLink Homepage
                  </h3>
                  <p className="text-sm m-0 leading-5 text-[#556070] tracking-[-0.5px] pt-3 pb-6">
                    Design a dark-mode website for NeuroLink with a neural
                    inspired logo, tech fonts, and glowing visuals.
                  </p>
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    <div className="relative inline-flex items-center gap-4 px-4 md:px-6 py-2 md:py-3 text-sm md:text-base leading-6 text-[#A53DFF] border border-[#A53DFF] rounded font-semibold shadow-[0_0_0px_#A53DFF] transition-all duration-500 ease-in-out overflow-hidden group hover:scale-105 md:hover:scale-110 hover:shadow-[0_0_25px_#A53DFF] bg-white hover:bg-[#A53DFF]">
                      <span className="absolute inset-0 w-full h-full bg-white opacity-0 scale-x-0 origin-left transition-transform duration-500 ease-in-out group-hover:scale-x-100 group-hover:opacity-10 z-0"></span>
                      <span className="relative z-10 flex items-center gap-3 md:gap-[18px] text-[#A53DFF] group-hover:text-white transition-colors duration-300">
                        Case Study
                        <svg
                          width="12"
                          height="12"
                          viewBox="0 0 12 12"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M11.92 5.61994C11.8724 5.49719 11.801 5.38505 11.71 5.28994L6.71 0.289941C6.61676 0.196703 6.50607 0.122742 6.38425 0.0722818C6.26243 0.0218215 6.13186 -0.00415039 6 -0.00415039C5.7337 -0.00415039 5.4783 0.101638 5.29 0.289941C5.19676 0.38318 5.1228 0.49387 5.07234 0.615692C5.02188 0.737514 4.99591 0.868082 4.99591 0.999941C4.99591 1.26624 5.1017 1.52164 5.29 1.70994L8.59 4.99994H1C0.734784 4.99994 0.48043 5.1053 0.292893 5.29283C0.105357 5.48037 0 5.73472 0 5.99994C0 6.26516 0.105357 6.51951 0.292893 6.70705C0.48043 6.89458 0.734784 6.99994 1 6.99994H8.59L5.29 10.2899C5.19627 10.3829 5.12188 10.4935 5.07111 10.6154C5.02034 10.7372 4.9942 10.8679 4.9942 10.9999C4.9942 11.132 5.02034 11.2627 5.07111 11.3845C5.12188 11.5064 5.19627 11.617 5.29 11.7099C5.38296 11.8037 5.49356 11.8781 5.61542 11.9288C5.73728 11.9796 5.86799 12.0057 6 12.0057C6.13201 12.0057 6.26272 11.9796 6.38458 11.9288C6.50644 11.8781 6.61704 11.8037 6.71 11.7099L11.71 6.70994C11.801 6.61484 11.8724 6.50269 11.92 6.37994C12.02 6.13648 12.02 5.8634 11.92 5.61994Z"
                            fill="#A53DFF"
                            className="group-hover:fill-white transition-colors duration-300"
                          />
                        </svg>
                      </span>
                    </div>
                  </a>
                </div>
              </div>

              <div className="bg-white rounded-lg hover:shadow-2xl transition-all duration-300 border border-[#E6E8EB] w-full max-w-[424px] mx-auto lg:mx-0">
                <img
                  src={attorny}
                  alt="AttorneyAlert Email Template"
                  className="w-full h-auto rounded-t-lg"
                />
                <div className="p-4 md:p-5">
                  <p className="font-medium text-xs leading-4 text-[#87909D] m-0">
                    UI-UX DESIGN
                  </p>
                  <h3 className="font-semibold text-lg leading-6 m-0 pt-1">
                    AttorneyAlert E-mail Template
                  </h3>
                  <p className="text-sm m-0 leading-5 text-[#556070] tracking-[-0.5px] pt-3 pb-6">
                    A bold, responsive email template built for clear and
                    impactful communication.
                  </p>
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    <div className="relative inline-flex items-center gap-4 px-4 md:px-6 py-2 md:py-3 text-sm md:text-base leading-6 text-[#A53DFF] border border-[#A53DFF] rounded font-semibold shadow-[0_0_0px_#A53DFF] transition-all duration-500 ease-in-out overflow-hidden group hover:scale-105 md:hover:scale-110 hover:shadow-[0_0_25px_#A53DFF] bg-white hover:bg-[#A53DFF]">
                      <span className="absolute inset-0 w-full h-full bg-white opacity-0 scale-x-0 origin-left transition-transform duration-500 ease-in-out group-hover:scale-x-100 group-hover:opacity-10 z-0"></span>
                      <span className="relative z-10 flex items-center gap-3 md:gap-[18px] text-[#A53DFF] group-hover:text-white transition-colors duration-300">
                        Case Study
                        <svg
                          width="12"
                          height="12"
                          viewBox="0 0 12 12"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M11.92 5.61994C11.8724 5.49719 11.801 5.38505 11.71 5.28994L6.71 0.289941C6.61676 0.196703 6.50607 0.122742 6.38425 0.0722818C6.26243 0.0218215 6.13186 -0.00415039 6 -0.00415039C5.7337 -0.00415039 5.4783 0.101638 5.29 0.289941C5.19676 0.38318 5.1228 0.49387 5.07234 0.615692C5.02188 0.737514 4.99591 0.868082 4.99591 0.999941C4.99591 1.26624 5.1017 1.52164 5.29 1.70994L8.59 4.99994H1C0.734784 4.99994 0.48043 5.1053 0.292893 5.29283C0.105357 5.48037 0 5.73472 0 5.99994C0 6.26516 0.105357 6.51951 0.292893 6.70705C0.48043 6.89458 0.734784 6.99994 1 6.99994H8.59L5.29 10.2899C5.19627 10.3829 5.12188 10.4935 5.07111 10.6154C5.02034 10.7372 4.9942 10.8679 4.9942 10.9999C4.9942 11.132 5.02034 11.2627 5.07111 11.3845C5.12188 11.5064 5.19627 11.617 5.29 11.7099C5.38296 11.8037 5.49356 11.8781 5.61542 11.9288C5.73728 11.9796 5.86799 12.0057 6 12.0057C6.13201 12.0057 6.26272 11.9796 6.38458 11.9288C6.50644 11.8781 6.61704 11.8037 6.71 11.7099L11.71 6.70994C11.801 6.61484 11.8724 6.50269 11.92 6.37994C12.02 6.13648 12.02 5.8634 11.92 5.61994Z"
                            fill="#A53DFF"
                            className="group-hover:fill-white transition-colors duration-300"
                          />
                        </svg>
                      </span>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            {/* Second Column */}
            <div className="flex flex-col gap-6">
              <div className="bg-white rounded-lg hover:shadow-2xl transition-all duration-300 border border-[#E6E8EB] w-full max-w-[424px] mx-auto lg:mx-0">
                <img
                  src={sign}
                  alt="SignPath Homepage"
                  className="w-full h-auto rounded-t-lg"
                />
                <div className="p-4 md:p-5">
                  <p className="font-medium text-xs leading-4 text-[#87909D] m-0">
                    UI-UX DESIGN
                  </p>
                  <h3 className="font-semibold text-lg leading-6 m-0 pt-1">
                    SignPath Homepage
                  </h3>
                  <p className="text-sm m-0 leading-5 text-[#556070] tracking-[-0.5px] pt-3 pb-6">
                    SignPath provides a secure code signing platform that
                    ensures software authenticity and malware.
                  </p>
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    <div className="relative inline-flex items-center gap-4 px-4 md:px-6 py-2 md:py-3 text-sm md:text-base leading-6 text-[#A53DFF] border border-[#A53DFF] rounded font-semibold shadow-[0_0_0px_#A53DFF] transition-all duration-500 ease-in-out overflow-hidden group hover:scale-105 md:hover:scale-110 hover:shadow-[0_0_25px_#A53DFF] bg-white hover:bg-[#A53DFF]">
                      <span className="absolute inset-0 w-full h-full bg-white opacity-0 scale-x-0 origin-left transition-transform duration-500 ease-in-out group-hover:scale-x-100 group-hover:opacity-10 z-0"></span>
                      <span className="relative z-10 flex items-center gap-3 md:gap-[18px] text-[#A53DFF] group-hover:text-white transition-colors duration-300">
                        Case Study
                        <svg
                          width="12"
                          height="12"
                          viewBox="0 0 12 12"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M11.92 5.61994C11.8724 5.49719 11.801 5.38505 11.71 5.28994L6.71 0.289941C6.61676 0.196703 6.50607 0.122742 6.38425 0.0722818C6.26243 0.0218215 6.13186 -0.00415039 6 -0.00415039C5.7337 -0.00415039 5.4783 0.101638 5.29 0.289941C5.19676 0.38318 5.1228 0.49387 5.07234 0.615692C5.02188 0.737514 4.99591 0.868082 4.99591 0.999941C4.99591 1.26624 5.1017 1.52164 5.29 1.70994L8.59 4.99994H1C0.734784 4.99994 0.48043 5.1053 0.292893 5.29283C0.105357 5.48037 0 5.73472 0 5.99994C0 6.26516 0.105357 6.51951 0.292893 6.70705C0.48043 6.89458 0.734784 6.99994 1 6.99994H8.59L5.29 10.2899C5.19627 10.3829 5.12188 10.4935 5.07111 10.6154C5.02034 10.7372 4.9942 10.8679 4.9942 10.9999C4.9942 11.132 5.02034 11.2627 5.07111 11.3845C5.12188 11.5064 5.19627 11.617 5.29 11.7099C5.38296 11.8037 5.49356 11.8781 5.61542 11.9288C5.73728 11.9796 5.86799 12.0057 6 12.0057C6.13201 12.0057 6.26272 11.9796 6.38458 11.9288C6.50644 11.8781 6.61704 11.8037 6.71 11.7099L11.71 6.70994C11.801 6.61484 11.8724 6.50269 11.92 6.37994C12.02 6.13648 12.02 5.8634 11.92 5.61994Z"
                            fill="#A53DFF"
                            className="group-hover:fill-white transition-colors duration-300"
                          />
                        </svg>
                      </span>
                    </div>
                  </a>
                </div>
              </div>

              <div className="bg-white rounded-lg hover:shadow-2xl transition-all duration-300 border border-[#E6E8EB] w-full max-w-[424px] mx-auto lg:mx-0">
                <img
                  src={grocery}
                  alt="GroceryEase Mobile App"
                  className="w-full h-auto rounded-t-lg"
                />
                <div className="p-4 md:p-5">
                  <p className="font-medium text-xs leading-4 text-[#87909D] m-0">
                    UI-UX DESIGN
                  </p>
                  <h3 className="font-semibold text-lg leading-6 m-0 pt-1">
                    GroceryEase Mobile App
                  </h3>
                  <p className="text-sm m-0 leading-5 text-[#556070] tracking-[-0.5px] pt-3 pb-6">
                    A user-friendly mobile app that simplifies grocery shopping
                    with smart lists and easy navigation.
                  </p>
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    <div className="relative inline-flex items-center gap-4 px-4 md:px-6 py-2 md:py-3 text-sm md:text-base leading-6 text-[#A53DFF] border border-[#A53DFF] rounded font-semibold shadow-[0_0_0px_#A53DFF] transition-all duration-500 ease-in-out overflow-hidden group hover:scale-105 md:hover:scale-110 hover:shadow-[0_0_25px_#A53DFF] bg-white hover:bg-[#A53DFF]">
                      <span className="absolute inset-0 w-full h-full bg-white opacity-0 scale-x-0 origin-left transition-transform duration-500 ease-in-out group-hover:scale-x-100 group-hover:opacity-10 z-0"></span>
                      <span className="relative z-10 flex items-center gap-3 md:gap-[18px] text-[#A53DFF] group-hover:text-white transition-colors duration-300">
                        Case Study
                        <svg
                          width="12"
                          height="12"
                          viewBox="0 0 12 12"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M11.92 5.61994C11.8724 5.49719 11.801 5.38505 11.71 5.28994L6.71 0.289941C6.61676 0.196703 6.50607 0.122742 6.38425 0.0722818C6.26243 0.0218215 6.13186 -0.00415039 6 -0.00415039C5.7337 -0.00415039 5.4783 0.101638 5.29 0.289941C5.19676 0.38318 5.1228 0.49387 5.07234 0.615692C5.02188 0.737514 4.99591 0.868082 4.99591 0.999941C4.99591 1.26624 5.1017 1.52164 5.29 1.70994L8.59 4.99994H1C0.734784 4.99994 0.48043 5.1053 0.292893 5.29283C0.105357 5.48037 0 5.73472 0 5.99994C0 6.26516 0.105357 6.51951 0.292893 6.70705C0.48043 6.89458 0.734784 6.99994 1 6.99994H8.59L5.29 10.2899C5.19627 10.3829 5.12188 10.4935 5.07111 10.6154C5.02034 10.7372 4.9942 10.8679 4.9942 10.9999C4.9942 11.132 5.02034 11.2627 5.07111 11.3845C5.12188 11.5064 5.19627 11.617 5.29 11.7099C5.38296 11.8037 5.49356 11.8781 5.61542 11.9288C5.73728 11.9796 5.86799 12.0057 6 12.0057C6.13201 12.0057 6.26272 11.9796 6.38458 11.9288C6.50644 11.8781 6.61704 11.8037 6.71 11.7099L11.71 6.70994C11.801 6.61484 11.8724 6.50269 11.92 6.37994C12.02 6.13648 12.02 5.8634 11.92 5.61994Z"
                            fill="#A53DFF"
                            className="group-hover:fill-white transition-colors duration-300"
                          />
                        </svg>
                      </span>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            {/* Third Column */}
            <div className="flex flex-col gap-6 md:col-span-2 lg:col-span-1">
              <div className="bg-white rounded-lg hover:shadow-2xl transition-all duration-300 border border-[#E6E8EB] w-full max-w-[424px] mx-auto lg:mx-0">
                <img
                  src={trends}
                  alt="Blog Writing UI/UX Trends"
                  className="w-full h-auto rounded-t-lg"
                />
                <div className="p-4 md:p-5">
                  <p className="font-medium text-xs leading-4 text-[#87909D] m-0">
                    UI-UX DESIGN
                  </p>
                  <h3 className="font-semibold text-lg leading-6 m-0 pt-1">
                    Blog Writing UI/UX Trends in 2025
                  </h3>
                  <p className="text-sm m-0 leading-5 text-[#556070] tracking-[-0.5px] pt-3 pb-6">
                    Discover the latest UI/UX trends shaping digital experiences
                    in 2025, from AI-driven design.
                  </p>
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    <div className="relative inline-flex items-center gap-4 px-4 md:px-6 py-2 md:py-3 text-sm md:text-base leading-6 text-[#A53DFF] border border-[#A53DFF] rounded font-semibold shadow-[0_0_0px_#A53DFF] transition-all duration-500 ease-in-out overflow-hidden group hover:scale-105 md:hover:scale-110 hover:shadow-[0_0_25px_#A53DFF] bg-white hover:bg-[#A53DFF]">
                      <span className="absolute inset-0 w-full h-full bg-white opacity-0 scale-x-0 origin-left transition-transform duration-500 ease-in-out group-hover:scale-x-100 group-hover:opacity-10 z-0"></span>
                      <span className="relative z-10 flex items-center gap-3 md:gap-[18px] text-[#A53DFF] group-hover:text-white transition-colors duration-300">
                        Case Study
                        <svg
                          width="12"
                          height="12"
                          viewBox="0 0 12 12"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M11.92 5.61994C11.8724 5.49719 11.801 5.38505 11.71 5.28994L6.71 0.289941C6.61676 0.196703 6.50607 0.122742 6.38425 0.0722818C6.26243 0.0218215 6.13186 -0.00415039 6 -0.00415039C5.7337 -0.00415039 5.4783 0.101638 5.29 0.289941C5.19676 0.38318 5.1228 0.49387 5.07234 0.615692C5.02188 0.737514 4.99591 0.868082 4.99591 0.999941C4.99591 1.26624 5.1017 1.52164 5.29 1.70994L8.59 4.99994H1C0.734784 4.99994 0.48043 5.1053 0.292893 5.29283C0.105357 5.48037 0 5.73472 0 5.99994C0 6.26516 0.105357 6.51951 0.292893 6.70705C0.48043 6.89458 0.734784 6.99994 1 6.99994H8.59L5.29 10.2899C5.19627 10.3829 5.12188 10.4935 5.07111 10.6154C5.02034 10.7372 4.9942 10.8679 4.9942 10.9999C4.9942 11.132 5.02034 11.2627 5.07111 11.3845C5.12188 11.5064 5.19627 11.617 5.29 11.7099C5.38296 11.8037 5.49356 11.8781 5.61542 11.9288C5.73728 11.9796 5.86799 12.0057 6 12.0057C6.13201 12.0057 6.26272 11.9796 6.38458 11.9288C6.50644 11.8781 6.61704 11.8037 6.71 11.7099L11.71 6.70994C11.801 6.61484 11.8724 6.50269 11.92 6.37994C12.02 6.13648 12.02 5.8634 11.92 5.61994Z"
                            fill="#A53DFF"
                            className="group-hover:fill-white transition-colors duration-300"
                          />
                        </svg>
                      </span>
                    </div>
                  </a>
                </div>
              </div>

              <div className="bg-white rounded-lg hover:shadow-2xl transition-all duration-300 border border-[#E6E8EB] w-full max-w-[424px] mx-auto lg:mx-0">
                <img
                  src={zebria}
                  alt="Zebira Dashboard"
                  className="w-full lg:h-[237px] rounded-t-lg"
                />
                <div className="p-4 md:p-5">
                  <p className="font-medium text-xs leading-4 text-[#87909D] m-0">
                    UI-UX DESIGN
                  </p>
                  <h3 className="font-semibold text-lg leading-6 m-0 pt-1">
                    Zebira Dashboard
                  </h3>
                  <p className="text-sm m-0 leading-5 text-[#556070] tracking-[-0.5px] pt-3 pb-12 md:pb-[18px]">
                    A modern dashboard for tracking data and insights with ease.
                  </p>
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    <div className="relative inline-flex items-center gap-4 px-4 md:px-6 py-2 md:py-3 text-sm md:text-base leading-6 text-[#A53DFF] border border-[#A53DFF] rounded font-semibold shadow-[0_0_0px_#A53DFF] transition-all duration-500 ease-in-out overflow-hidden group hover:scale-105 md:hover:scale-110 hover:shadow-[0_0_25px_#A53DFF] bg-white hover:bg-[#A53DFF]">
                      <span className="absolute inset-0 w-full h-full bg-white opacity-0 scale-x-0 origin-left transition-transform duration-500 ease-in-out group-hover:scale-x-100 group-hover:opacity-10 z-0"></span>
                      <span className="relative z-10 flex items-center gap-3 md:gap-[18px] text-[#A53DFF] group-hover:text-white transition-colors duration-300">
                        Case Study
                        <svg
                          width="12"
                          height="12"
                          viewBox="0 0 12 12"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M11.92 5.61994C11.8724 5.49719 11.801 5.38505 11.71 5.28994L6.71 0.289941C6.61676 0.196703 6.50607 0.122742 6.38425 0.0722818C6.26243 0.0218215 6.13186 -0.00415039 6 -0.00415039C5.7337 -0.00415039 5.4783 0.101638 5.29 0.289941C5.19676 0.38318 5.1228 0.49387 5.07234 0.615692C5.02188 0.737514 4.99591 0.868082 4.99591 0.999941C4.99591 1.26624 5.1017 1.52164 5.29 1.70994L8.59 4.99994H1C0.734784 4.99994 0.48043 5.1053 0.292893 5.29283C0.105357 5.48037 0 5.73472 0 5.99994C0 6.26516 0.105357 6.51951 0.292893 6.70705C0.48043 6.89458 0.734784 6.99994 1 6.99994H8.59L5.29 10.2899C5.19627 10.3829 5.12188 10.4935 5.07111 10.6154C5.02034 10.7372 4.9942 10.8679 4.9942 10.9999C4.9942 11.132 5.02034 11.2627 5.07111 11.3845C5.12188 11.5064 5.19627 11.617 5.29 11.7099C5.38296 11.8037 5.49356 11.8781 5.61542 11.9288C5.73728 11.9796 5.86799 12.0057 6 12.0057C6.13201 12.0057 6.26272 11.9796 6.38458 11.9288C6.50644 11.8781 6.61704 11.8037 6.71 11.7099L11.71 6.70994C11.801 6.61484 11.8724 6.50269 11.92 6.37994C12.02 6.13648 12.02 5.8634 11.92 5.61994Z"
                            fill="#A53DFF"
                            className="group-hover:fill-white transition-colors duration-300"
                          />
                        </svg>
                      </span>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
