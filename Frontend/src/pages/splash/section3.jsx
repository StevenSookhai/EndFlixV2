import React from "react";
import { layout } from "../../style";

const Section3 = () => {
  return (
    <div
      className={`${layout.section} bg-black w-full h-[550px] max-w-full border-5 border-b-8 border-[rgb(52,52,52)]`}
    >
      <div className="flex flex-col md:items-start ">
        <h2 className="text-white text-center xs:text-3xl sm:text-4xl md:text-5xl  text-8xl font-bold font-poppins leading-tight">
          Create profiles for kids.
        </h2>
        <p className="text-white md:text-start text-center max-w-[600px] md:min-w-[500px] font-poppins leading-tight xs:text-lg sm:text-base md:text-2xl text-8xl mt-5 font-bold">
          Send kids on adventures with their favorite characters in a space made
          just for them—free with your membership.
        </p>
      </div>
      <div className="relative">
        <img
          className="xs:w-[480px] xs:h-[350x] md:w-full  md:mt-0 mt-5"
          src="https://occ-0-3266-1001.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABfpnX3dbgjZ-Je8Ax3xn0kXehZm_5L6-xe6YSTq_ucht9TI5jwDMqusWZKNYT8DfGudD0_wWVVTFLiN2_kaQJumz2iivUWbIbAtF.png?r=11f"
          alt=""
        />
      </div>
    </div>
  );
};

export default Section3;
