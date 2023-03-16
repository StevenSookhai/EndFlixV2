import React from "react";
import styles from "../../style";
const Section2 = () => {
  return (
    <div
      className={`flex md:flex-row flex-col-reverse items-center justify-center ${styles.padding} bg-black w-full h-[550px] max-w-full border-5 border-b-8 border-[rgb(52,52,52)]`}
    >
      <div className="relative flex justify-center items-center md:mr-[50px] md:min-w-[700px] md:max-h-[700px] xs:min-w-[450px] xs:min-h-[350px]">
        <img
          className="absolute md:mt-0"
          src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile.png"
          alt=""
        />
        <video
          className=" md:w-[400px] md:mb-[150px] xs:mb-[100px] xs:w-[280px] md:mt-0 "
          src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices.m4v"
          autoPlay
          loop
          muted
        ></video>
      </div>

      <div className="flex flex-col md:items-start md:text-start text-center ">
        <h2 className="text-white md:text-start text-center xs:text-3xl sm:text-4xl md:text-5xl  text-8xl font-bold font-poppins leading-none">
          Watch everywhere.
        </h2>
        <p className="text-white max-w-[600px] md:min-w-[500px] font-poppins leading-tight xs:text-lg sm:text-base md:text-2xl text-8xl mt-5 font-bold">
          Stream unlimited movies and TV shows on your phone, tablet, laptop,
          and TV without paying more.
        </p>
      </div>
    </div>
  );
};

export default Section2;
