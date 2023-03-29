import React from "react";
import MovieCard from "./MovieCard";
import { useEffect, useState, useRef } from "react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

const MovieRow = ({ genre, MovieEndpoints }) => {
  const rowRef = useRef(null);
  const [movies, setMovies] = useState([]);
  const [isMoved, setIsMoved] = useState(false);

  const img =
    "https://occ-0-3266-444.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABfRI824w4jsVd7kOlnfHwXPVEctZsKwGau1Woe2i8AHf5hD0w1eJntsonedM7rltdy44hXQHKtdE_0w7rX9iVJLkIJrrXQPxXWPG.webp?r=8d0";

  useEffect(() => {
    const fetchVideos = async () => {
      const response = await fetch(MovieEndpoints);
      const data = await response.json();
      setMovies(data.results);
      //   console.log(data.results);
    };

    fetchVideos();
  }, []);

  const handleClick = (direction) => {
    setIsMoved(true);
    // console.log(rowRef.current.scrollLeft);
    if (rowRef.current) {
      const { scrollLeft, clientWidth } = rowRef.current;

      const scrollTo =
        direction === "left"
          ? scrollLeft - clientWidth
          : scrollLeft + clientWidth;
      rowRef.current.scrollTo({
        left: scrollTo,
        behavior: "smooth",
        // transition: "all 5s ease-in-out",
      });
    }
  };
  return (
    //     <div className="h-[12vw] w-full flex flex-col border justify-center items-start">
    //       {/* <h2 className="">Row Header</h2> */}
    //       <div className="w-full h-full row border-[#fd0202] border mt-5"></div>
    //     </div>
    //
    // <div className="border">
    //   <h4 className="text-[20px] font-poppins">{genre}</h4>
    //   <div className="relative flex items-center ml-[3%] ">
    //     <div
    //       id={"slider"}
    //       className="flex overflow-x-scroll whitespace-nowrap scroll-smooth items-center space-x-0.5 border border-red-500"
    //     >
    //       {movies.map((movie) => (
    //         <MovieCard movie={movie} />
    //       ))}
    //     </div>
    //   </div>
    // </div>

    // <div className=" mt-4 space-x-8 ml-[4vw] relative ">
    //   <div>
    //     <p className="text-white text-md md:text-xl lg:text-2xl font-semibold">
    //       Title
    //     </p>
    //     <div
    //       id={"slider"}
    //       className="flex items-center overflow-x-scroll w-full gap-1 scroll-smooth"
    //     >
    //       {movies.map((movie) => (
    //         <MovieCard movie={movie} />
    //       ))}
    //     </div>
    //   </div>
    // </div>

    <div className="flex justify-center ml-[4%] overflow-visible ">
      <div
        onClick={() => handleClick("left")}
        className="border-none rounded-md bg-[rgb(0,0,0,.25)] z-20 mt-[.25rem] mb-[.25rem] flex-grow-0 cursor-pointer hover:bg-[rgb(0,0,0,.5)] flex justify-center items-center"
      >
        <AiOutlineLeft size={30} />
      </div>
      {/* <div className="w-[5rem] h-full absolute left-0 flex justify-center items-center  top-0">
        <AiOutlineLeft color="black" size={50}  />
      </div> */}
      <div>
        {/* <p className="text-white text-md md:text-xl lg:text-2xl font-semibold">
          Title
        </p> */}
        {/* <div className="w-[5rem] bg-white z-20 h-full"></div> */}
        <div
          id={"slider"}
          className="flex flex-grow-1 overflow-x-scroll scroll-smooth  transition ease-in-out duration-250"
          ref={rowRef}
        >
          {movies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      </div>
      <div
        onClick={() => handleClick("right")}
        className=" border-none rounded-md bg-[rgb(0,0,0,.25)] z-20 mt-[.25rem] mb-[.25rem] flex-grow-0 cursor-pointer hover:bg-[rgb(0,0,0,.5)] flex justify-center items-center"
      >
        <AiOutlineRight size={30} />
      </div>
    </div>
  );
};

export default MovieRow;
