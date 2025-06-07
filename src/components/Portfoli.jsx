import React from "react";
import sign from "../assets/images/png/sign-path.png";
import attorny from "../assets/images/png/attorny.png";
import grocery from "../assets/images/png/grocry.png";
import trends from "../assets/images/png/trends.png";
import zebria from "../assets/images/png/zebria.png";
const Portfoli = () => {
  return (
    <>
      <div className="py-[120px]">
        <div className="max-w-[1320px] mx-auto px-4">
          <div>
            <p className="m-0 text-[48px] font-semibold leading-[56px] text-center">
              Portfolio
            </p>
            <p className="m-0 text-[18px] leading-[24px] text-[#87909D] max-w-[976px] text-center mx-auto mt-6">
              Here are some of my favorite projects that show how I design
              easy-to-use websites, apps, and dashboards. Each one highlights my
              focus on great user experience and clean design.
            </p>
          </div>
          <div className="flex flex-row flex-wrap -mx-3 mt-[60px]">
            <div className="w-full md:w-1/2 lg:w-1/3">
              <div className="bg-white rounded-[8px] hover:shadow-2xl transition-all border border-[#E6E8EB] max-w-[424px] w-full">
                <img src={sign} alt="sign-img" />
                <div className="p-5">
                  <p className="font-medium text-xs leading-[16px] text-[#87909D] m-0">
                    UI-UX DESIGN
                  </p>
                  <p className="font-semibold text-[18px] leading-[24px] m-0 pt-[4px]">
                    NeuroLink Homepage
                  </p>
                  <p className="text-[14px] m-0 leading-[20px] text-[#556070] tracking-[-1px] pt-[12px] pb-[24px]">
                    Design a dark-mode website for NeuroLink with a neural
                    inspired logo, tech fonts, and glowing visuals.
                  </p>
                  <a href="#" target="_blank">
                    <div
                      className="relative inline-flex items-center gap-[18px] px-6 py-3 text-base leading-[24px] 
  text-[#A53DFF] border border-[#A53DFF] rounded-[4px] font-semibold 
  shadow-[0_0_0px_#A53DFF] transition-all duration-500 ease-in-out 
  overflow-hidden group hover:scale-110 hover:shadow-[0_0_25px_#A53DFF] 
  bg-white hover:bg-[#A53DFF]"
                    >
                      <span
                        className="absolute inset-0 w-full h-full bg-white opacity-0 
    scale-x-0 origin-left transition-transform duration-500 ease-in-out 
    group-hover:scale-x-100 group-hover:opacity-10 z-0"
                      ></span>
                      <span className="relative z-10 flex items-center gap-[18px] text-[#A53DFF] group-hover:text-white transition-colors duration-300">
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
              <div className="bg-white rounded-[8px] hover:shadow-2xl transition-all border border-[#E6E8EB] max-w-[424px] w-full mt-6">
                <img src={attorny} alt="sign-img" />
                <div className="p-5">
                  <p className="font-medium text-xs leading-[16px] text-[#87909D] m-0">
                    UI-UX DESIGN
                  </p>
                  <p className="font-semibold text-[18px] leading-[24px] m-0 pt-[4px]">
                    AttorneyAlert E-mail Template
                  </p>
                  <p className="text-[14px] m-0 leading-[20px] text-[#556070] tracking-[-1px] pt-[12px] pb-[24px]">
                    A bold, responsive email template built for clear and
                    impactful communication.
                  </p>
                  <a href="#" target="_blank">
                    <div
                      className="relative inline-flex items-center gap-[18px] px-6 py-3 text-base leading-[24px] 
  text-[#A53DFF] border border-[#A53DFF] rounded-[4px] font-semibold 
  shadow-[0_0_0px_#A53DFF] transition-all duration-500 ease-in-out 
  overflow-hidden group hover:scale-110 hover:shadow-[0_0_25px_#A53DFF] 
  bg-white hover:bg-[#A53DFF]"
                    >
                      <span
                        className="absolute inset-0 w-full h-full bg-white opacity-0 
    scale-x-0 origin-left transition-transform duration-500 ease-in-out 
    group-hover:scale-x-100 group-hover:opacity-10 z-0"
                      ></span>
                      <span className="relative z-10 flex items-center gap-[18px] text-[#A53DFF] group-hover:text-white transition-colors duration-300">
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
            <div className="w-full md:w-1/2 lg:w-1/3">
              <div className="bg-white rounded-[8px] hover:shadow-2xl transition-all border border-[#E6E8EB] max-w-[424px] w-full">
                <img src={sign} alt="sign-img" />
                <div className="p-5">
                  <p className="font-medium text-xs leading-[16px] text-[#87909D] m-0">
                    UI-UX DESIGN
                  </p>
                  <p className="font-semibold text-[18px] leading-[24px] m-0 pt-[4px]">
                    SignPath Homepage
                  </p>
                  <p className="text-[14px] m-0 leading-[20px] text-[#556070] tracking-[-1px] pt-[12px] pb-[24px]">
                    SignPath provides a secure code signing platform that
                    ensures software authenticity and malware.
                  </p>
                  <a href="#" target="_blank">
                    <div
                      className="relative inline-flex items-center gap-[18px] px-6 py-3 text-base leading-[24px] 
  text-[#A53DFF] border border-[#A53DFF] rounded-[4px] font-semibold 
  shadow-[0_0_0px_#A53DFF] transition-all duration-500 ease-in-out 
  overflow-hidden group hover:scale-110 hover:shadow-[0_0_25px_#A53DFF] 
  bg-white hover:bg-[#A53DFF]"
                    >
                      <span
                        className="absolute inset-0 w-full h-full bg-white opacity-0 
    scale-x-0 origin-left transition-transform duration-500 ease-in-out 
    group-hover:scale-x-100 group-hover:opacity-10 z-0"
                      ></span>
                      <span className="relative z-10 flex items-center gap-[18px] text-[#A53DFF] group-hover:text-white transition-colors duration-300">
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
              <div className="bg-white rounded-[8px] hover:shadow-2xl transition-all border border-[#E6E8EB] max-w-[424px] w-full mt-6">
                <img src={grocery} alt="sign-img" />
                <div className="p-5">
                  <p className="font-medium text-xs leading-[16px] text-[#87909D] m-0">
                    UI-UX DESIGN
                  </p>
                  <p className="font-semibold text-[18px] leading-[24px] m-0 pt-[4px]">
                    GroceryEase Mobile App
                  </p>
                  <p className="text-[14px] m-0 leading-[20px] text-[#556070] tracking-[-1px] pt-[12px] pb-[24px]">
                    A user-friendly mobile app that simplifies grocery shopping
                    with smart lists and easy navigation.
                  </p>
                  <a href="#" target="_blank">
                    <div
                      className="relative inline-flex items-center gap-[18px] px-6 py-3 text-base leading-[24px] 
  text-[#A53DFF] border border-[#A53DFF] rounded-[4px] font-semibold 
  shadow-[0_0_0px_#A53DFF] transition-all duration-500 ease-in-out 
  overflow-hidden group hover:scale-110 hover:shadow-[0_0_25px_#A53DFF] 
  bg-white hover:bg-[#A53DFF]"
                    >
                      <span
                        className="absolute inset-0 w-full h-full bg-white opacity-0 
    scale-x-0 origin-left transition-transform duration-500 ease-in-out 
    group-hover:scale-x-100 group-hover:opacity-10 z-0"
                      ></span>
                      <span className="relative z-10 flex items-center gap-[18px] text-[#A53DFF] group-hover:text-white transition-colors duration-300">
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
            <div className="w-full md:w-1/2 lg:w-1/3">
              <div className="bg-white rounded-[8px] hover:shadow-2xl transition-all border border-[#E6E8EB] max-w-[424px] w-full">
                <img src={trends} alt="sign-img" />
                <div className="p-5">
                  <p className="font-medium text-xs leading-[16px] text-[#87909D] m-0">
                    UI-UX DESIGN
                  </p>
                  <p className="font-semibold text-[18px] leading-[24px] m-0 pt-[4px]">
                    Blog Writing UI/UX Trends in 2025
                  </p>
                  <p className="text-[14px] m-0 leading-[20px] text-[#556070] tracking-[-1px] pt-[12px] pb-[24px]">
                    Discover the latest UI/UX trends shaping digital experiences
                    in 2025, from AI-driven design.
                  </p>
                  <a href="#" target="_blank">
                    <div
                      className="relative inline-flex items-center gap-[18px] px-6 py-3 text-base leading-[24px] 
  text-[#A53DFF] border border-[#A53DFF] rounded-[4px] font-semibold 
  shadow-[0_0_0px_#A53DFF] transition-all duration-500 ease-in-out 
  overflow-hidden group hover:scale-110 hover:shadow-[0_0_25px_#A53DFF] 
  bg-white hover:bg-[#A53DFF]"
                    >
                      <span
                        className="absolute inset-0 w-full h-full bg-white opacity-0 
    scale-x-0 origin-left transition-transform duration-500 ease-in-out 
    group-hover:scale-x-100 group-hover:opacity-10 z-0"
                      ></span>
                      <span className="relative z-10 flex items-center gap-[18px] text-[#A53DFF] group-hover:text-white transition-colors duration-300">
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
              <div className="bg-white rounded-[8px] hover:shadow-2xl transition-all border border-[#E6E8EB] max-w-[424px]  w-full mt-6">
                <img src={zebria} alt="sign-img" />
                <div className="p-5">
                  <p className="font-medium text-xs leading-[16px] text-[#87909D] m-0">
                    UI-UX DESIGN
                  </p>
                  <p className="font-semibold text-[18px] leading-[24px] m-0 pt-[4px]">
                    Zebira Dashboard
                  </p>
                  <p className="text-[14px] m-0 leading-[20px] text-[#556070] tracking-[-1px] pt-[12px] pb-[54px]">
                    A modern dashboard for tracking data and insights with ease.
                  </p>
                  <a href="#" target="_blank">
                    <div
                      className="relative inline-flex items-center gap-[18px] px-6 py-3 text-base leading-[24px] 
  text-[#A53DFF] border border-[#A53DFF] rounded-[4px] font-semibold 
  shadow-[0_0_0px_#A53DFF] transition-all duration-500 ease-in-out 
  overflow-hidden group hover:scale-110 hover:shadow-[0_0_25px_#A53DFF] 
  bg-white hover:bg-[#A53DFF]"
                    >
                      <span
                        className="absolute inset-0 w-full h-full bg-white opacity-0 
    scale-x-0 origin-left transition-transform duration-500 ease-in-out 
    group-hover:scale-x-100 group-hover:opacity-10 z-0"
                      ></span>
                      <span className="relative z-10 flex items-center gap-[18px] text-[#A53DFF] group-hover:text-white transition-colors duration-300">
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

export default Portfoli;
