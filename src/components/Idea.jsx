import React from "react";

const Idea = () => {
  return (
    <>
      <div className="py-[60px] sm:py-[80px] md:py-[100px] lg:py-[120px] bg-[#132238]">
        <div className="max-w-[1320px] mx-auto px-4">
          <div>
            <p className="m-0 text-[32px] sm:text-[40px] md:text-[48px] lg:text-[56px] text-white font-semibold text-center leading-tight">
              Your next big idea deserves attention
            </p>
            <p className="m-0 text-[16px] sm:text-[17px] md:text-[18px] leading-[24px] text-[#A5ACB5] text-center mx-auto max-w-[90%] sm:max-w-[600px] md:max-w-[682px] pt-6 sm:pt-6 md:pt-8">
              Share your project with us — we’ll help you shape it, design it,
              and bring it to life with creativity and care.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Idea;
