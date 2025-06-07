import React, { useRef } from "react";
import attorny from "../assets/images/png/attorny.png";
import grocry from "../assets/images/png/grocry.png";
import trends from "../assets/images/png/trends.png";
import sign from "../assets/images/png/sign-path.png";
import zebria from "../assets/images/png/zebria.png";

import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, } from "swiper/modules";
const Blog = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <>
      <div className="min-h-screen py-[120px]">
        <div className="max-w-[1320px] mx-auto px-4">
          <div className="pb-[70px]">
            <p className="font-semibold text-[48px] leading-[56px] ff-poppins text-center ">
              Blog
            </p>
            <p className="text-[18px] leading-[26px] text-center mx-auto max-w-[558px] pt-6 text-[#87909D]">
              Read my latest articles on design trends, tips, and insights to
              stay updated and inspired.
            </p>
          </div>
          <div>
            <Swiper
              spaceBetween={0}
              loop={true}
              autoplay={{
                delay: 800,
              }}
              breakpoints={{
                320: { slidesPerView: 1 },
                668: { slidesPerView: 2 },
                992: { slidesPerView: 3 },
                1024: { slidesPerView: 4 },
              }}
              modules={[Navigation, Autoplay]}
            >
              <SwiperSlide>
                <div className="bg-white border hover:shadow-2xl transition-all border-[#F0F1F3] max-w-[312px] w-full">
                  <img
                    className="max-w-[312px] w-full"
                    src={attorny}
                    alt="img"
                  />
                  <div className="p-6">
                    <p className="text-sm leading-[20px] text-[#87909D] m-0">
                      06 March, 2025 / 02 Comments
                    </p>
                    <p className="m-0 text-[18px] leading-[24px] font-semibold pt-2">
                      Bold & Responsive Email Template for Communication
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="bg-white border hover:shadow-2xl transition-all border-[#F0F1F3] max-w-[312px] w-full">
                  <img
                    className="max-w-[312px] w-full"
                    src={grocry}
                    alt="img"
                  />
                  <div className="p-6">
                    <p className="text-sm leading-[20px] text-[#87909D] m-0">
                      08 March, 2025 / 14 Comments
                    </p>
                    <p className="m-0 text-[18px] leading-[24px] font-semibold pt-2">
                      User-Friendly Mobile App Simplifying Grocery Shopping
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="bg-white border hover:shadow-2xl transition-all border-[#F0F1F3] max-w-[312px] w-full">
                  <img
                    className="max-w-[312px] w-full"
                    src={trends}
                    alt="img"
                  />
                  <div className="p-6">
                    <p className="text-sm leading-[20px] text-[#87909D] m-0">
                      26 March, 2025 / 06 Comments
                    </p>
                    <p className="m-0 text-[18px] leading-[24px] font-semibold pt-2">
                      Top UI/UX Trends Shaping Digital Experiences in 2025
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="bg-white border hover:shadow-2xl transition-all border-[#F0F1F3] max-w-[312px] w-full">
                  <img className="max-w-[312px] w-full" src={sign} alt="img" />
                  <div className="p-6">
                    <p className="text-sm leading-[20px] text-[#87909D] m-0">
                      31 March, 2025 / 10 Comments
                    </p>
                    <p className="m-0 text-[18px] leading-[24px] font-semibold pt-2">
                      Secure Code Signing for Software Authenticity,Safety
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="bg-white border hover:shadow-2xl transition-all border-[#F0F1F3] max-w-[312px] w-full">
                  <img
                    className="max-w-[312px] h-[180px] w-full"
                    src={zebria}
                    alt="img"
                  />
                  <div className="p-6">
                    <p className="text-sm leading-[20px] text-[#87909D] m-0">
                      10 April, 2025 / 6 Comments
                    </p>
                    <p className="m-0 text-[18px] leading-[24px] font-semibold pt-2">
                      A modern dashboard for tracking data and insights.
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
