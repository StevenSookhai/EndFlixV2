import React from "react";

const HeroVideo = ({ video }) => {
  return (
    <div className="absolute w-full">
      <div className="relative">
        <img
          className="w-full object-cover z-0 "
          src="https://occ-0-3266-444.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABfRI824w4jsVd7kOlnfHwXPVEctZsKwGau1Woe2i8AHf5hD0w1eJntsonedM7rltdy44hXQHKtdE_0w7rX9iVJLkIJrrXQPxXWPG.webp?r=8d0"
          alt="Hero Video"
        />
        <div className="w-full h-[20%] bg-gradient-to-t from-[#141414] absolute z-10 top-[80.1%]"></div>
        <div className="border absolute top-[60%] right-[10%] rounded-lg sm:w-[50px] sm:h-[50px] w-[25px] h-[25px] justify-center items-center flex">
          <button>RP</button>
        </div>
      </div>

      <div className="flex flex-col justify-end absolute left-[4%] w-[36%] z-10 top-[11vw]">
        <div className="flex flex-col justify-center items-center">
          <img
            className=""
            src="https://occ-0-3266-444.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABTP5VzM83PLOTW5IVg8Vfi_njim26XJlnCSlPvZxhTJpzbo8E0KL6BfKWRhFZWeWI9aTxrKVhhuGEd3Xc0V5we0aV3mP9Be6yq_Kz9STJyH9wGeJDx3nya7dhlUp3uPy8pzyvZko4qLWOneRTFwZFFFCqn9bTkcPZvlpvfQUaJKIBO-cyWrX-A.webp?r=af5"
          ></img>
          <div className="text-white text-[1.2vw] font-poppins font-normal  max-w-[50vw] w-full leading-normal mt-[1vw]">
            {" "}
            In a dystopia riddled with corruption and cybernetic implants, a
            talented but reckless street kid strives to become a mercenary
            outlaw — an edgerunner.{" "}
          </div>
          <div className="flex w-full mt-5">
            <button className="mr-[10px] bg-white text-black text-center md:w-[10rem] sm:w-[8rem] sm:h-[3rem] w-[5.5rem] h-[2.2rem] rounded-md font-bold flex justify-center items-center  cursor-pointer hover:bg-gray-200">
              <span className="md:text-[1.2rem] sm:text-[1rem] xs:text-[.5rem] font-bold">
                Play
              </span>
            </button>
            <button className="bg-[rgb(109,109,110,.7)] text-black text-center  md:w-[12rem] sm:w-[10rem] sm:h-[3rem] w-[7rem] h-[2.2rem]  rounded-md font-bold flex justify-center items-center  cursor-pointer hover:bg-[rgb(109,109,110,.5)]">
              <span className="md:text-[1.2rem] sm:text-[1rem] xs:text-[.5rem] font-bold text-white">
                More Info
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroVideo;
