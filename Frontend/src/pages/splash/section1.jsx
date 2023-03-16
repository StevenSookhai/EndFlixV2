import { layout } from "../../style";

import React from "react";

const Section1 = () => {
  return (
    <div
      className={`${layout.section} bg-black w-full h-[550px] max-w-full border-5 border-b-8 border-[rgb(52,52,52)]`}
    >
      <div className="flex flex-col md:items-start md:mr-[50px]">
        <h2 className="text-white text-center xs:text-3xl sm:text-4xl md:text-5xl  text-8xl font-bold font-poppins leading-tight">
          {" "}
          Enjoy on your TV.
        </h2>
        <p className="text-white md:text-start text-center max-w-[600px] md:min-w-[500px] font-poppins leading-tight xs:text-base sm:text-base md:text-[22px] text-8xl mt-5 font-bold">
          Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray
          players, and more.
        </p>
      </div>
      <div className="relative flex justify-center items-center md:min-w-[600px] md:max-h-[600px] xs:min-w-[450px] xs:min-h-[350px] md:mb-[50px]">
        <img
          className="absolute md:mt-0 mt-5"
          src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png"
          alt=""
        />
        <video
          className="w-[480px] h-[350px] md:mt-0 mt-5 "
          src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v"
          autoPlay
          loop
          muted
        ></video>
      </div>
    </div>
  );
};

export default Section1;
