import React from "react";

import google from "../assets/images/svg/google.svg";
import dribble from "../assets/images/svg/dribbble.svg";
import linkdin from "../assets/images/svg/linkdin.svg";
import amazon from "../assets/images/svg/amazon.svg";
import medium from "../assets/images/svg/medium.svg";
import spotify from "../assets/images/svg/spotify.svg";
import Marquee from "react-fast-marquee";

const clients = [
  { src: google, alt: "Google" },
  { src: dribble, alt: "Dribbble" },
  { src: linkdin, alt: "LinkedIn" },
  { src: amazon, alt: "Amazon" },
  { src: medium, alt: "Medium" },
  { src: spotify, alt: "Spotify" },
];

const Clients = () => {
  return (
    <div className="bg-white">
      <div className="py-6 sm:py-8 md:py-12 lg:py-16 xl:py-20 2xl:py-[120px]  lg:mb-[-200px]">
        <div className="max-w-[1320px] mx-auto px-3 sm:px-4 md:px-6 lg:px-8 text-center">
          <h2 className="font-semibold text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-[48px] leading-tight m-0">
            Happy Clients
          </h2>
          <p className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-[18px] leading-relaxed text-gray-500 mx-auto max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-[486px] pt-2 sm:pt-3 md:pt-4 lg:pt-5 xl:pt-6">
            Trusted by clients who value quality, creativity, and timely
            delivery.
          </p>
          <Marquee
            speed={30}
            gradient={false}
            className="mt-4 sm:mt-6 md:mt-8 lg:mt-10 xl:mt-12 flex items-center"
          >
            {clients.concat(clients).map((client, index) => (
              <div
                key={index}
                className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-28 lg:h-28 xl:w-36 xl:h-36 2xl:w-[160px] 2xl:h-[160px] flex items-center justify-center mx-1 sm:mx-2 md:mx-3 lg:mx-4 xl:mx-6"
              >
                <img
                  src={client.src}
                  alt={`${client.alt} logo`}
                  className="max-w-full max-h-full object-contain filter grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition duration-300"
                />
              </div>
            ))}
          </Marquee>
        </div>
      </div>
      <div className="px-3 sm:px-4 md:px-6 lg:px-8 pb-6 sm:pb-8 md:pb-12 lg:pb-16 xl:pb-20 transform lg:translate-y-[140px]">
        <div className="max-w-[1320px] mx-auto">
          <div className="shadow-xl sm:shadow-2xl bg-white p-3 sm:p-4 md:p-8 lg:p-12 xl:p-16 2xl:p-[88px] rounded-lg">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 xl:gap-12 2xl:gap-16">
              <div className="space-y-4 sm:space-y-6 lg:space-y-8">
                <div>
                  <h2 className="font-semibold text-xl sm:text-2xl md:text-3xl lg:text-[32px] xl:text-[36px] 2xl:text-[38px] leading-tight md:leading-[44px] xl:leading-[48px] 2xl:leading-[50px] m-0 text-left">
                    Contact Me
                  </h2>
                  <p className="m-0 text-sm sm:text-base md:text-lg xl:text-[18px] leading-5 sm:leading-6 md:leading-[24px] text-[#87909D] text-left mt-1 sm:mt-2">
                    Get in touch to discuss your project or ask any questions.
                  </p>
                </div>
                <div className="space-y-2 sm:space-y-3 md:space-y-[12px]">
                  <div className="bg-white gap-2 sm:gap-3 md:gap-[13px] flex cursor-pointer p-3 sm:p-4 md:p-5 lg:p-6 rounded-[8px] sm:rounded-[10px] hover:shadow-lg sm:hover:shadow-xl md:hover:shadow-2xl group hover:bg-white transition-all duration-300 w-full">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-[48px] lg:h-[48px] bg-[#F2E7FC] flex items-center justify-center rounded-md transition-colors duration-300 group-hover:bg-[#A53DFF] flex-shrink-0">
                      <svg
                        width="16"
                        height="16"
                        className="sm:w-5 sm:h-5 md:w-6 md:h-6"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M21 10C21 17 12 23 12 23S3 17 3 10C3 7.61305 3.94821 5.32387 5.63604 3.63604C7.32387 1.94821 9.61305 1 12 1C14.3869 1 16.6761 1.94821 18.364 3.63604C20.0518 5.32387 21 7.61305 21 10Z"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-[#A53DFF] group-hover:text-white transition-colors duration-300"
                        />
                        <circle
                          cx="12"
                          cy="10"
                          r="3"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-[#A53DFF] group-hover:text-white transition-colors duration-300"
                        />
                      </svg>
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs sm:text-sm text-left leading-5 sm:leading-[24px] text-[#424E60]">
                        Address:
                      </p>
                      <h3 className="font-semibold text-left text-sm sm:text-base leading-5 sm:leading-[24px] text-[#132238] mt-1">
                        Hisar, Haryana
                      </h3>
                    </div>
                  </div>
                  <div className="bg-white gap-2 sm:gap-3 md:gap-[13px] flex cursor-pointer p-3 sm:p-4 md:p-5 lg:p-6 rounded-[8px] sm:rounded-[10px] hover:shadow-lg sm:hover:shadow-xl md:hover:shadow-2xl group hover:bg-white transition-all duration-300 w-full">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-[48px] lg:h-[48px] bg-[#F2E7FC] flex items-center justify-center rounded-md transition-colors duration-300 group-hover:bg-[#A53DFF] flex-shrink-0">
                      <svg
                        width="16"
                        height="16"
                        className="sm:w-5 sm:h-5 md:w-6 md:h-6"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect
                          x="2"
                          y="4"
                          width="20"
                          height="16"
                          rx="2"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-[#A53DFF] group-hover:text-white transition-colors duration-300"
                        />
                        <path
                          d="m22 7-10 5L2 7"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-[#A53DFF] group-hover:text-white transition-colors duration-300"
                        />
                      </svg>
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs sm:text-sm text-left leading-5 sm:leading-[24px] text-[#424E60]">
                        My Email:
                      </p>
                      <a
                        href="mailto:2002nancymor@gmail.com"
                        className="font-semibold text-left text-sm sm:text-base leading-5 sm:leading-[24px] text-[#132238] mt-1 hover:text-[#A53DFF] transition-colors break-all"
                      >
                        2002nancymor@gmail.com
                      </a>
                    </div>
                  </div>
                  <div className="bg-white gap-2 sm:gap-3 md:gap-[13px] flex cursor-pointer p-3 sm:p-4 md:p-5 lg:p-6 rounded-[8px] sm:rounded-[10px] hover:shadow-lg sm:hover:shadow-xl md:hover:shadow-2xl group hover:bg-white transition-all duration-300 w-full">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-[48px] lg:h-[48px] bg-[#F2E7FC] flex items-center justify-center rounded-md transition-colors duration-300 group-hover:bg-[#A53DFF] flex-shrink-0">
                      <svg
                        width="16"
                        height="16"
                        className="sm:w-5 sm:h-5 md:w-6 md:h-6"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M22 16.92V19.92C22.0011 20.1985 21.9441 20.4742 21.8325 20.7293C21.7209 20.9845 21.5573 21.2136 21.3521 21.4019C21.1468 21.5901 20.9046 21.7335 20.6407 21.8227C20.3769 21.9119 20.0974 21.9451 19.82 21.92C16.7428 21.5856 13.787 20.5341 11.19 18.85C8.77382 17.3147 6.72533 15.2662 5.18999 12.85C3.49997 10.2412 2.44824 7.27099 2.11999 4.18C2.095 3.90347 2.12787 3.62476 2.21649 3.36162C2.30512 3.09849 2.44756 2.85669 2.63476 2.65162C2.82196 2.44655 3.0498 2.28271 3.30379 2.17052C3.55777 2.05833 3.83233 2.00026 4.10999 2H7.10999C7.5953 1.99522 8.06579 2.16708 8.43376 2.48353C8.80173 2.79999 9.04207 3.23945 9.10999 3.72C9.23662 4.68007 9.47144 5.62273 9.80999 6.53C9.94454 6.88792 9.97366 7.27691 9.8939 7.65088C9.81415 8.02485 9.62886 8.36811 9.35999 8.64L8.08999 9.91C9.51355 12.4135 11.5865 14.4864 14.09 15.91L15.36 14.64C15.6319 14.3711 15.9751 14.1858 16.3491 14.1061C16.7231 14.0263 17.1121 14.0555 17.47 14.19C18.3773 14.5286 19.3199 14.7634 20.28 14.89C20.7658 14.9585 21.2094 15.2032 21.5265 15.5775C21.8437 15.9518 22.0122 16.4296 22 16.92Z"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-[#A53DFF] group-hover:text-white transition-colors duration-300"
                        />
                      </svg>
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs sm:text-sm text-left leading-5 sm:leading-[24px] text-[#424E60]">
                        Call Me Now:
                      </p>
                      <a
                        href="tel:+917206502701"
                        className="font-semibold text-left text-sm sm:text-base leading-5 sm:leading-[24px] text-[#132238] mt-1 hover:text-[#A53DFF] transition-colors"
                      >
                        +91 7206502701
                      </a>
                    </div>
                  </div>
                </div>
                <div className="flex flex-wrap gap-1 sm:gap-2 md:gap-3 mt-4 sm:mt-6 lg:mt-[35px]">
                  
                  <a
                    className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 bg-white hover:bg-[#A53DFF] border border-gray-200 flex items-center justify-center rounded-[4px] group transition-colors duration-300"
                    href="https://www.linkedin.com/in/mornancy12345678/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg
                      width="12"
                      height="12"
                      className="sm:w-3 sm:h-3 md:w-4 md:h-4 lg:w-[18px] lg:h-[18px]"
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
                  <a
                    className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 bg-white hover:bg-[#A53DFF] border border-gray-200 flex items-center justify-center rounded-[4px] group transition-colors duration-300"
                    href="https://www.behance.net/onboarding"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg
                      width="14"
                      height="14"
                      className="sm:w-4 sm:h-4 md:w-5 md:h-5 lg:w-[18px] lg:h-[18px]"
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7.26331 8.02956C7.26331 8.02956 8.9664 7.90476 8.9664 5.93349C8.9664 3.96208 7.57305 3 5.80808 3H0.000244141V14.0165H5.80808C5.80808 14.0165 9.35355 14.127 9.35355 10.7649C9.35355 10.765 9.50813 8.02956 7.26331 8.02956ZM5.39004 4.95806H5.80808C5.80808 4.95806 6.59754 4.95806 6.59754 6.10428C6.59754 7.25036 6.13325 7.41652 5.60663 7.41652H2.55925V4.95806H5.39004ZM5.64396 12.0585H2.55925V9.11449H5.80808C5.80808 9.11449 6.98473 9.09926 6.98473 10.6274C6.98473 11.916 6.10589 12.0488 5.64396 12.0585ZM14.0821 5.80292C9.78988 5.80292 9.79368 10.0358 9.79368 10.0358C9.79368 10.0358 9.49918 14.2469 14.0821 14.2469C14.0821 14.2469 17.9011 14.4623 17.9011 11.3175H15.937C15.937 11.3175 16.0025 12.5018 14.1476 12.5018C14.1476 12.5018 12.1832 12.6317 12.1832 10.5851H17.9666C17.9666 10.5851 18.5994 5.80292 14.0821 5.80292ZM12.1616 9.11449C12.1616 9.11449 12.4014 7.41649 14.1257 7.41649C15.8496 7.41649 15.828 9.11449 15.828 9.11449H12.1616ZM16.2855 5.00561H11.6808V3.64901H16.2855V5.00561Z"
                        className="fill-[#A53DFF] group-hover:fill-white transition-colors duration-300"
                      />
                    </svg>
                  </a>
                </div>
              </div>
              <div className="space-y-3 sm:space-y-4 md:space-y-6">
                <p className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-[18px] leading-5 sm:leading-6 md:leading-[24px] text-[#87909D] text-left m-0 max-w-[560px]">
                  Reach out anytime to start a project or ask questions—I'm here
                  to help!
                </p>
                <form className="space-y-4 sm:space-y-6 md:space-y-8 mt-6 sm:mt-8 md:mt-[50px]">
                  <div className="relative w-full">
                    <input
                      type="text"
                      id="name"
                      required
                      className="peer w-full border-0 border-b-2 pt-3 sm:pt-4 pb-1 sm:pb-2 border-[#697484] text-black placeholder-transparent focus:outline-none focus:border-[#a259ff] bg-transparent text-sm sm:text-base"
                      placeholder="Name"
                    />
                    <label
                      htmlFor="name"
                      className="absolute left-0 -top-2 sm:-top-3.5 text-[#697484] text-xs sm:text-sm md:text-base lg:text-[18px] transition-all peer-placeholder-shown:text-sm sm:peer-placeholder-shown:text-base peer-placeholder-shown:text-[#697484] peer-placeholder-shown:top-1 sm:peer-placeholder-shown:top-2 peer-focus:-top-2 sm:peer-focus:-top-3.5 peer-focus:text-[#a259ff] peer-focus:text-xs sm:peer-focus:text-sm"
                    >
                      Name*
                    </label>
                  </div>
                  <div className="relative w-full">
                    <input
                      type="email"
                      id="email"
                      required
                      className="peer w-full border-0 border-b-2 pt-3 sm:pt-4 pb-1 sm:pb-2 border-[#697484] text-[#1E1E1E] placeholder-transparent bg-transparent focus:outline-none focus:border-[#a259ff] text-sm sm:text-base"
                      placeholder="Email"
                    />
                    <label
                      htmlFor="email"
                      className="absolute left-0 -top-2 sm:-top-3.5 text-[#697484] text-xs sm:text-sm md:text-base lg:text-[18px] transition-all peer-placeholder-shown:text-sm sm:peer-placeholder-shown:text-base peer-placeholder-shown:top-1 sm:peer-placeholder-shown:top-2 peer-focus:-top-2 sm:peer-focus:-top-3.5 peer-focus:text-[#a259ff] peer-focus:text-xs sm:peer-focus:text-sm"
                    >
                      Email*
                    </label>
                  </div>
                  <div className="relative w-full">
                    <input
                      type="text"
                      id="location"
                      required
                      className="peer w-full border-0 border-b-2 pt-3 sm:pt-4 pb-1 sm:pb-2 border-[#697484] text-[#1E1E1E] placeholder-transparent bg-transparent focus:outline-none focus:border-[#a259ff] text-sm sm:text-base"
                      placeholder="Location"
                    />
                    <label
                      htmlFor="location"
                      className="absolute left-0 -top-2 sm:-top-3.5 text-[#697484] text-xs sm:text-sm md:text-base lg:text-[18px] transition-all peer-placeholder-shown:text-sm sm:peer-placeholder-shown:text-base peer-placeholder-shown:top-1 sm:peer-placeholder-shown:top-2 peer-focus:-top-2 sm:peer-focus:-top-3.5 peer-focus:text-[#a259ff] peer-focus:text-xs sm:peer-focus:text-sm"
                    >
                      Location*
                    </label>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-[24px]">
                    <div className="relative">
                      <input
                        type="number"
                        id="budget"
                        required
                        className="peer w-full border-0 border-b-2 pt-3 sm:pt-4 pb-1 sm:pb-2 border-[#697484] text-[#1E1E1E] placeholder-transparent bg-transparent focus:outline-none focus:border-[#a259ff] text-sm sm:text-base"
                        placeholder="Budget"
                      />
                      <label
                        htmlFor="budget"
                        className="absolute left-0 -top-2 sm:-top-3.5 text-[#697484] text-xs sm:text-sm md:text-base lg:text-[18px] transition-all peer-placeholder-shown:text-sm sm:peer-placeholder-shown:text-base peer-placeholder-shown:top-1 sm:peer-placeholder-shown:top-2 peer-focus:-top-2 sm:peer-focus:-top-3.5 peer-focus:text-[#a259ff] peer-focus:text-xs sm:peer-focus:text-sm"
                      >
                        Budget*
                      </label>
                    </div>
                    <div className="relative">
                      <input
                        type="text"
                        id="subject"
                        required
                        className="peer w-full border-0 border-b-2 pt-3 sm:pt-4 pb-1 sm:pb-2 border-[#697484] text-[#1E1E1E] placeholder-transparent bg-transparent focus:outline-none focus:border-[#a259ff] text-sm sm:text-base"
                        placeholder="Subject"
                      />
                      <label
                        htmlFor="subject"
                        className="absolute left-0 -top-2 sm:-top-3.5 text-[#697484] text-xs sm:text-sm md:text-base lg:text-[18px] transition-all peer-placeholder-shown:text-sm sm:peer-placeholder-shown:text-base peer-placeholder-shown:top-1 sm:peer-placeholder-shown:top-2 peer-focus:-top-2 sm:peer-focus:-top-3.5 peer-focus:text-[#a259ff] peer-focus:text-xs sm:peer-focus:text-sm"
                      >
                        Subject*
                      </label>
                    </div>
                  </div>
                  <div className="relative w-full">
                    <textarea
                      id="message"
                      required
                      rows={1}
                      className="peer w-full border-0 border-b-2 pt-3 sm:pt-4 pb-1 sm:pb-2 resize-none border-[#697484] text-[#1E1E1E] placeholder-transparent bg-transparent focus:outline-none focus:border-[#a259ff] text-sm sm:text-base"
                      placeholder="Message"
                    />
                    <label
                      htmlFor="message"
                      className="absolute left-0 -top-2 sm:-top-3.5 text-[#697484] text-xs sm:text-sm md:text-base lg:text-[18px] transition-all peer-placeholder-shown:text-sm sm:peer-placeholder-shown:text-base peer-placeholder-shown:top-3 sm:peer-placeholder-shown:top-4 peer-focus:-top-2 sm:peer-focus:-top-3.5 peer-focus:text-[#a259ff] peer-focus:text-xs sm:peer-focus:text-sm"
                    >
                      Message*
                    </label>
                  </div>
                  <button
                    type="submit"
                    className="inline-flex cursor-pointer items-center gap-2 sm:gap-3 md:gap-[18px] px-3 sm:px-4 md:px-6 py-1.5 sm:py-2 md:py-3 text-xs sm:text-sm md:text-base leading-5 sm:leading-6 text-[#A53DFF] border border-[#A53DFF] rounded font-semibold shadow-[0_0_0px_#A53DFF] transition-all duration-500 ease-in-out overflow-hidden group hover:scale-105 md:hover:scale-110 hover:shadow-[0_0_25px_#A53DFF] bg-white hover:bg-[#A53DFF] hover:text-white mt-6 sm:mt-8 md:mt-[50px]"
                  >
                    Submit
                    <svg
                      width="12"
                      height="12"
                      className="sm:w-4 sm:h-4 md:w-5 md:h-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M18.34 7.32013L4.34 0.320128C3.78749 0.0451374 3.16362 -0.0527612 2.55344 0.03978C1.94326 0.132321 1.37646 0.410798 0.930335 0.837244C0.484207 1.26369 0.180456 1.81735 0.060496 2.42274C-0.059464 3.02813 0.0102046 3.65578 0.260003 4.22013L2.66 9.59013C2.71446 9.71996 2.74251 9.85934 2.74251 10.0001C2.74251 10.1409 2.71446 10.2803 2.66 10.4101L0.260003 15.7801C0.0567034 16.2368 -0.029241 16.7371 0.00998036 17.2355C0.0492018 17.7339 0.212345 18.2145 0.484585 18.6338C0.756825 19.0531 1.12953 19.3977 1.56883 19.6363C2.00812 19.875 2.50009 20 3 20.0001C3.46823 19.9955 3.92949 19.8861 4.35 19.6801L18.35 12.6801C18.8466 12.4303 19.264 12.0474 19.5557 11.5742C19.8474 11.101 20.0018 10.556 20.0018 10.0001C20.0018 9.44424 19.8474 8.89928 19.5557 8.42605C19.264 7.95282 18.8466 7.56994 18.35 7.32013H18.34ZM17.45 10.8901L3.45 17.8901C3.26617 17.9784 3.05973 18.0084 2.85839 17.976C2.65705 17.9436 2.47041 17.8504 2.32352 17.709C2.17662 17.5675 2.07648 17.3845 2.03653 17.1846C1.99658 16.9846 2.01873 16.7772 2.1 16.5901L4.49 11.2201C4.52094 11.1484 4.54766 11.075 4.57 11.0001H11.46C11.7252 11.0001 11.9796 10.8948 12.1671 10.7072C12.3546 10.5197 12.46 10.2653 12.46 10.0001C12.46 9.73491 12.3546 9.48056 12.1671 9.29302C11.9796 9.10549 11.7252 9.00013 11.46 9.00013H4.57C4.54766 8.9253 4.52094 8.85184 4.49 8.78013L2.1 3.41013C2.01873 3.22309 1.99658 3.01568 2.03653 2.8157C2.07648 2.61572 2.17662 2.43273 2.32352 2.29128C2.47041 2.14982 2.65705 2.05666 2.85839 2.02428C3.05973 1.9919 3.26617 2.02186 3.45 2.11013L17.45 9.11013C17.6138 9.19405 17.7513 9.32154 17.8473 9.47857C17.9433 9.63561 17.994 9.81608 17.994 10.0001C17.994 10.1842 17.9433 10.3647 17.8473 10.5217C17.7513 10.6787 17.6138 10.8062 17.45 10.8901Z" />
                    </svg>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Clients;
