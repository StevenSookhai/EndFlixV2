import React from "react";
import MovieCard from "./MovieCard";
import { useEffect, useState, useRef } from "react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

const MovieRow = ({ genre, MovieEndpoints }) => {
  const rowRef = useRef(null);
  const sliderRef = useRef(null);
  const [movies, setMovies] = useState([]);
  const [scrollLeft, setScrollLeft] = useState(0);

  const getScrollLeft = () => {
    if (rowRef.current) {
      const { scrollLeft, clientWidth } = rowRef.current;
      const pos = scrollLeft / clientWidth;
      setScrollLeft(pos);
    }
  };
  const img =
    "https://occ-0-3266-444.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABfRI824w4jsVd7kOlnfHwXPVEctZsKwGau1Woe2i8AHf5hD0w1eJntsonedM7rltdy44hXQHKtdE_0w7rX9iVJLkIJrrXQPxXWPG.webp?r=8d0";

  useEffect(() => {
    const fetchVideos = async () => {
      const response = await fetch(MovieEndpoints);
      const data = await response.json();
      setMovies(data.results);
    };

    fetchVideos();
  }, []);

  const handleClick = (direction) => {
    if (rowRef.current) {
      const { scrollLeft, clientWidth } = rowRef.current;

      const pos = scrollLeft / clientWidth;

      let scrollTo =
        direction === "left"
          ? scrollLeft - clientWidth * 0.96
          : scrollLeft + clientWidth * 0.96;

      if (scrollTo < 0) {
        scrollTo = 0;
      } else if (scrollTo > rowRef.current.scrollWidth - clientWidth) {
        scrollTo = rowRef.current.scrollWidth - clientWidth;
      }

      rowRef.current.scrollTo({
        left: scrollTo,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <div className="ml-[4%] relative group mr-1">
        <p className="text-white text-md md:text-xl lg:text-2xl font-semibold">
          Title
        </p>
        <div
          onClick={() => handleClick("left")}
          className="absolute h-[76%] sm:h-[82%] md:h-[78%] lg:h-[81%] xl:h-[80%] mt-1 p-1 sm:p-2 md:p-4 xl:p-4 border-none rounded-md bg-[rgb(0,0,0,.25)] z-20 cursor-pointer hover:bg-[rgb(0,0,0,.5)] flex justify-center items-center invisible group-hover:visible  "
        >
          <AiOutlineLeft size={30} />
        </div>
        <div ref={rowRef} id={"slider"} className="overflow-x-scroll ">
          <div ref={sliderRef} className="flex w-[96%] ">
            {movies.map((movie) => (
              <MovieCard
                key={movie.id}
                movie={movie}
                containerLeft={sliderRef.current.getBoundingClientRect().left}
                containerScrollLeft={scrollLeft}
                getScrollLeft={getScrollLeft}
              />
            ))}
          </div>
        </div>
        <div
          onClick={() => handleClick("right")}
          className=" absolute right-0 lg:top-7 md:top-6 top-5 sm: h-[76%] sm:h-[82%] md:h-[78%] lg:h-[81%] xl:h-[80%] mt-2 p-1 sm:p-2 md:p-4 xl:p-4 border-none rounded-md  bg-[rgb(0,0,0,.25)] z-20    cursor-pointer hover:bg-[rgb(0,0,0,.5)] flex justify-center items-center invisible group-hover:visible"
        >
          <AiOutlineRight size={30} />
        </div>
      </div>
    </>
  );
};

export default MovieRow;
