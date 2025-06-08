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
    <div className="py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24 2xl:py-[120px] bg-white">
      <div className="max-w-[1320px] mx-auto px-3 sm:px-4 md:px-6 lg:px-8 text-center">
        <h2 className="font-semibold text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-[48px] leading-tight m-0">
          Happy Clients
        </h2>
        <p className="text-sm sm:text-base md:text-lg xl:text-[18px] leading-relaxed text-gray-500 mx-auto max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-[486px] pt-3 sm:pt-4 md:pt-5 lg:pt-6">
          Trusted by clients who value quality, creativity, and timely delivery.
        </p>

        <Marquee
          speed={30}
          gradient={false}
          className="mt-6 sm:mt-8 md:mt-10 lg:mt-12 flex items-center"
        >
          {clients.concat(clients).map((client, index) => (
            <div
              key={index}
              className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-32 lg:h-32 xl:w-40 xl:h-40 2xl:w-[160px] 2xl:h-[160px] flex items-center justify-center mx-2 sm:mx-3 md:mx-4 lg:mx-6"
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
  );
};

export default Clients;
