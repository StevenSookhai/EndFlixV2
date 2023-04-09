import React from "react";
import { useEffect, useState } from "react";
import { MovieEndpoints } from "../util/keys";
import { FaPlay } from "react-icons/fa";
import { GrCircleInformation } from "react-icons/gr";
import { MdOutlineReplay } from "react-icons/md";

const HeroVideo = ({ video }) => {
  const [movies, setMovies] = useState([]);
  const randomMovie = movies[Math.floor(Math.random() * movies.length)];

  const img =
    "https://occ-0-3266-444.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABfRI824w4jsVd7kOlnfHwXPVEctZsKwGau1Woe2i8AHf5hD0w1eJntsonedM7rltdy44hXQHKtdE_0w7rX9iVJLkIJrrXQPxXWPG.webp?r=8d0";

  useEffect(() => {
    const fetchVideos = async () => {
      const response = await fetch(MovieEndpoints.top_rated);
      const data = await response.json();
      setMovies(data.results);
    };

    fetchVideos();
  }, []);

  return (
    <div className="w-full ">
      <div className="relative">
        <img
          className="w-full object-cover"
          // src={`https://image.tmdb.org/t/p/original/${randomMovie?.backdrop_path}`}
          src={img}
          alt="Hero Video"
        />
        <div className="w-full h-[20%] bg-gradient-to-t from-[#141414] absolute   top-[80.1%]"></div>
        <div className="border absolute top-[60%] right-[10%] rounded-full sm:w-[50px] sm:h-[50px] w-[25px] h-[25px] justify-center items-center flex -rotate-180 scale-y-[-1] ">
          <button>
            <MdOutlineReplay size={25} />
          </button>
        </div>
      </div>

      <div className="flex flex-col justify-end absolute left-[4%] w-[36%]  top-[11vw]">
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
          <div className="flex w-full mt-5 space-x-3">
            {/* <button className="mr-[10px] bg-white text-black text-center md:w-[10rem] sm:w-[8rem] sm:h-[3rem] w-[5.5rem] h-[2.2rem] rounded-md font-bold flex justify-center items-center  cursor-pointer hover:bg-gray-200">
              <span className="md:text-[1.2rem] sm:text-[1rem] xs:text-[.5rem] font-bold">
                Play
              </span>
            </button>
            <button className="bg-[rgb(109,109,110,.7)] text-black text-center  md:w-[12rem] sm:w-[10rem] sm:h-[3rem] w-[7rem] h-[2.2rem]  rounded-md font-bold flex justify-center items-center  cursor-pointer hover:bg-[rgb(109,109,110,.5)]">
              <span className="md:text-[1.2rem] sm:text-[1rem] xs:text-[.5rem] font-bold text-white">
                More Info
              </span>
            </button> */}
            <button className="bannerButton bg-white text-black ">
              <FaPlay className="h-4 w-4 text-black md:h-7 md:w-7" />
              Play
            </button>
            <button className="bannerButton bg-[rgb(109,109,110,.7)] text-white ">
              <GrCircleInformation className="  h-5 w-5 fill md:h-8 md:w-8" />
              More Info
            </button>
          </div>
        </div>
      </div>
    </div>

    // <div className="flex flex-col space-y-2 py-16 md:space-y-4 lg:h-[65vh] lg:justify-end lg:pb-12">
    //   <div className="absolute top-0 left-0 -z-10 h-[95vh] w-screen">
    //     <img
    //       className=" w-full h-full object-cover"
    //     //   src={`https://image.tmdb.org/t/p/original/${randomMovie?.backdrop_path}`} /
    //       src={img}
    //       alt="Hero Video"
    //     />
    //   </div>
    //   <h1 className="text-2xl font-bold md:text-4xl lg:text-7xl text-white">
    //     {randomMovie?.title || randomMovie?.name || randomMovie?.original_name}
    //   </h1>
    //   <p className="max-w-xs text-xs text-shadow-md md:max-w-lg md:text-lg lg:max-w-2xl lg:text-2xl text-white">
    //     {randomMovie?.overview}
    //   </p>
    //   <div className="flex space-x-3">
    //     <button className="bannerButton bg-white text-black">
    //       <FaPlay className="h-4 w-4 text-black md:h-7 md:w-7" />
    //       Play
    //     </button>

    //     <button
    //       className="bannerButton bg-[gray]/70"
    //       onClick={() => {
    //         setCurrentMovie(movie);
    //         setShowModal(true);
    //       }}
    //     >
    //       <GrCircleInformation className="h-5 w-5 md:h-8 md:w-8" /> More Info
    //     </button>
    //   </div>
    // </div>
  );
};

export default HeroVideo;
