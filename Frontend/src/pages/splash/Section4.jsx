import React from "react";
import { layout } from "../../style";
import styles from "../../style";

const Section4 = () => {
  return (
    <div
      className={`flex md:flex-row flex-col-reverse items-center justify-center ${styles.padding} bg-black w-full h-[550px] max-w-full border-5 border-b-8 border-[rgb(52,52,52)]`}
    >
      <div className="relative flex justify-center items-center  md:min-w-[700px] md:max-h-[700px] xs:min-w-[450px] xs:min-h-[350px]">
        <img
          className=" xs:w-[480px] xs:h-[350x] md:w-full  md:mt-0 mt-5"
          src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg"
          alt=""
        />
      </div>

      <div className="flex flex-col md:items-start md:text-start text-center">
        <h2 className="text-white md:text-start text-center xs:text-3xl sm:text-4xl md:text-5xl text-8xl font-bold font-poppins leading-none">
          Download your shows <br className="hidden md:block"></br>to watch
          offline.
        </h2>
        <p className="text-white max-w-[500px] md:min-w-[500px] font-bold font-poppins leading-tight xs:text-lg sm:text-base md:text-2xl text-8xl mt-5">
          Only available on ad-free plans.
        </p>
      </div>
    </div>
  );
};

export default Section4;
