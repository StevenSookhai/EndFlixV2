import React from "react";
import { BsFillPlayFill } from "react-icons/bs";

const MovieCard = ({ movie }) => {
  return (
    // <div className="relative h-28 min-w-[180px] cursor-pointer transition duration-200 ease-out md:h-36 md:min-w-[260px]  ">
    //   <img
    //     className="absolute inset-0 z-10 rounded-md w-full h-full object-cover"
    //     src={`https://image.tmdb.org/t/p/w500/${movie?.backdrop_path}`}
    //     alt=""
    //   />{" "}
    // </div>
    // <div className="group bg-zinc-900 min-w-[180px] cursor-pointer transition duration-200 ease-out md:min-w-[260px] w-[30%] max-w-[25%]   ">
    //   <img
    //     className=" flex-shrink-0 flex-grow-0 cursor-pointer object-cover transition duration shadow-xl rounded-md group-hover:opacity-90 sm:group-hover:opacity-0 delay-300 w-full h-full"
    //     src={`https://image.tmdb.org/t/p/w500/${movie?.backdrop_path}`}
    //   />
    //   <div className="opacity-0 absolute top-0 transition duration-200 z-10 invisible sm:visible delay-300 scale-0 group-hover:scale-110 group-hover:-translate-y-[6vw]   group-hover:opacity-100">
    //     <img
    //       className="cursor-pointer object-cover transition duration shadow-xl rounded-t-md w-full h-[12vw]"
    //       src={`https://image.tmdb.org/t/p/w500/${movie?.backdrop_path}`}
    //     />
    //     <div className="z-10 bg-zinc-800 p-2 lg:p-4 absolute w-full transition shadow-md rounded-b-md">
    //       <div className="flex flex-row items-center gap-3">
    //         <div className="cursor-pointer w-6 h-6 lg:w-10 lg:h-10 bg-white rounded-full flex justify-center items-center transition hover:bg-neutral-300">
    //           <BsFillPlayFill size={30} className="text-neutral-900" />
    //         </div>
    //       </div>
    //       <p className="text-green-400 font-semibold mt-4">
    //         New <span className="text-white"> 2030</span>
    //       </p>

    //       <div className="flex flex-row mt-4 gap-2 items-center">
    //         <p className="text-white text-[10px] lg:text-sm">Duration</p>
    //       </div>

    //       <div className="flex flex-row mt-4 gap-2 items-center">
    //         <p className="text-white text-[10px] lg:text-sm">Genre</p>
    //       </div>
    //     </div>
    //   </div>
    // </div>

    <div className="sm:w-[calc(100%/4)] md:w-[calc(100%/5)] xl:md:w-[calc(100%/6)] xs:md:w-[calc(100%/3)] flex-shrink-0 flex-grow-0 aspect-video w-[calc(100%/3)] p-[.25rem] rounded-md">
      <img
        className="object-cover rounded-md overflow-hidden"
        src={`https://image.tmdb.org/t/p/w500/${movie?.backdrop_path}`}
        alt=""
      />{" "}
    </div>
  );
};

export default MovieCard;
