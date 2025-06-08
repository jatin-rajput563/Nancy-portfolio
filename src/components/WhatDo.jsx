import React from "react";

const WhatDo = () => {
  return (
    <>
      <div className="bg-[#F0F1F3] py-[80px] md:py-[120px] px-4">
        <div className="max-w-[1320px] mx-auto">
          <div className="flex flex-col md:flex-row md:-mx-3">
            {/* Left Section */}
            <div className="w-full md:w-1/2 md:px-3">
              <div className="mt-[60px] md:mt-[142px] max-w-full md:max-w-[529px] mx-auto md:mx-0">
                <p className="text-[32px] sm:text-[40px] md:text-[48px] font-semibold leading-tight text-[#333333]">
                  What I do?
                </p>
                <p className="text-[16px] sm:text-[18px] leading-[24px] text-[#87909D] mt-6 md:mt-6">
                  I design intuitive websites, mobile apps, and dashboards that
                  solve problems and deliver great user experiences.
                </p>
                <p className="text-[16px] sm:text-[18px] leading-[24px] text-[#87909D] mt-4 md:mt-4">
                  Combining creativity and strategy, I turn complex ideas into
                  simple, user-friendly solutions.
                </p>
                <button
                  className="relative inline-block px-6 py-2 bg-[#A53DFF] mt-8 text-white font-semibold
                    shadow-[0_0_15px_#A53DFF] transition-all duration-500 ease-in-out
                    overflow-hidden group hover:scale-110 hover:shadow-[0_0_25px_#A53DFF] rounded-[4px]
                    mx-auto md:mx-0"
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

            {/* Right Section */}
            <div className="w-full md:w-1/2 md:px-3 mt-10 md:mt-0 flex flex-col gap-6 max-w-full md:max-w-[648px] mx-auto md:mx-0">
              {[
                {
                  title: "User Experience (UX)",
                  description:
                    "User Experience (UX) focuses on making products easy and enjoyable to use by understanding users’ needs and behaviors. Good UX design improves satisfaction, efficiency,",
                },
                {
                  title: "User Interface (UI)",
                  description:
                    "User Interface (UI) is the visual part of a product that users interact with, including buttons, menus, and layouts. Good UI design makes digital experiences attractive, clear, and easy to navigate.",
                },
                {
                  title: "Web Designing",
                  description:
                    "Web designing is creating the layout, look, and feel of websites, ensuring they are both visually appealing and easy to use. It focuses on making sites attractive, user-friendly, and easy to navigate.",
                },
              ].map(({ title, description }, i) => (
                <div
                  key={i}
                  className="hover:shadow-2xl bg-white w-full p-8 rounded-[6px] relative group"
                >
                  <div
                    className="w-[5px] bg-[#A53DFF] h-[176px] absolute top-0 left-0 rounded-tl-[6px] rounded-bl-[6px]
                      opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  ></div>
                  <p className="text-[24px] font-semibold leading-[100%] m-0">
                    {title}
                  </p>
                  <p className="m-0 text-base leading-[24px] text-[#424E60] pt-[16px] max-w-full">
                    {description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhatDo;
