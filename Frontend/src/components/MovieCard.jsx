import React from "react";
import { BsFillPlayFill } from "react-icons/bs";
import { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { videoModalActions } from "../store/videoModal";

const MovieCard = ({ movie, sliderPos, scrollLeft, clientWidth }) => {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef(null);
  const dispatch = useDispatch();
  const videoPos = useSelector((state) => state.videoModal.videoPos);
  const video = useSelector((state) => state.videoModal.video);
  const showVideoModal = useSelector((state) => state.videoModal.showCard);

  const handleHover = (event) => {
    handlePosition();
  };

  const handlePosition = () => {
    if (showVideoModal) {
      return;
    }
    const element = cardRef.current.getBoundingClientRect();
    // console.log(element.right);
    const ScreenWidth = window.innerWidth;
    // console.log(ScreenWidth);
    const nearRightEdge = ScreenWidth - element.right < 100;
    console.log(nearRightEdge);
    const pos = {
      x: element.left,
      y: element.top,
      height: element.height,
      width: element.width,
      nearRightEdge: nearRightEdge,
    };
    dispatch(videoModalActions.showCard({ movie: movie, pos: pos }));
  };

  const handleLeave = () => {
    setIsHovered(false);
    // dispatch(videoModalActions.hideCard());
  };

  // console.log("sliderPosition", sliderPos);
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

    // <div className="group border border-red-500 group sm:w-[calc(100%/4)] md:w-[calc(100%/5)] xl:md:w-[calc(100%/6)] xs:md:w-[calc(100%/3)] flex-shrink-0 flex-grow-0 aspect-video w-[calc(100%/3)] p-[.25rem] rounded-md bg-zinc-900 cursor-pointer ">
    //   <img
    //     className="object-cover rounded-md overflow-hidden group-hover:opacity-0"
    //     src={`https://image.tmdb.org/t/p/w500/${movie?.backdrop_path}`}
    //     alt=""
    //   />
    //   <div
    //     ref={cardRef}
    //     className={`opacity-0 absolute top-0 flex-shrink-0  transition duration-200 z-10 invisible sm:visible delay-300 scale-0 group-hover:scale-110 group-hover:-translate-y-[6vw]   group-hover:opacity-100`}
    //   >
    //     <img
    //       className="cursor-pointer object-cover transition duration shadow-xl rounded-t-md w-full h-[12vw]"
    //       src={`https://image.tmdb.org/t/p/w500/${movie?.backdrop_path}`}
    //     />
    //     <div className="z-10 bg-zinc-800 p-2 lg:p-4 absolute w-full transition shadow-md rounded-b-md">
    //       <div className="flex flex-row items-center gap-3">
    //         <div className="cursor-pointer w-6 h-6 lg:w-10 lg:h-10 bg-white rounded-full flex justify-center items-center transition hover:bg-neutral-300">
    //           <BsFillPlayFill size={30} className="text-neutral-900" />{" "}
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
    <>
      <div
        onMouseEnter={handleHover}
        onMouseLeave={handleLeave}
        ref={cardRef}
        className={` relative  sm:w-[calc(100%/4)] md:w-[calc(100%/5)] xl:md:w-[calc(100%/6)] xs:md:w-[calc(100%/3)] w-[calc(100%/3)] p-[.25rem] rounded-md bg-zinc-900 cursor-pointer  flex-shrink-0 ${
          showVideoModal ? "pointer-events-none" : "pointer-events-auto"
        }`}
      >
        <img
          className="object-cover rounded-md w-full h-full hover:opacity-0"
          src={`https://image.tmdb.org/t/p/w500/${movie?.backdrop_path}`}
          alt=""
        />
        {/* {isHovered && (
        <div className="z-30 absolute w-full h-[20vh] left-0 top-0 mb-10 transition duration-500 ease-in-out scale-125 -translate-y-6">
          <div className="relative h-[10vh]">
            <img
              className="object-cover rounded-md w-[100%] absolute z-10  "
              src={`https://image.tmdb.org/t/p/w500/${movie?.backdrop_path}`}
              alt=""
            />
          </div>
        </div>
      )} */}
      </div>
    </>
  );
};

export default MovieCard;
