import React from "react";
import { useState, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { videoModalActions } from "../store/videoModal";

const MovieCard = ({ movie, tag, loading }) => {
  const [isHovered, setIsHovered] = useState(false);

  const cardRef = useRef(null);
  const dispatch = useDispatch();
  const showVideoModal = useSelector((state) => state.videoModal.showCard);

  useEffect(() => {
    if (isHovered) {
      const timeoutId = setTimeout(() => {
        handlePosition();
      }, 700);
      return () => clearTimeout(timeoutId);
    }
  }, [isHovered]);

  const handleHover = (event) => {
    // getScrollLeft();
    setIsHovered(true);
  };

  const handlePosition = () => {
    if (showVideoModal) {
      return;
    }
    const element = cardRef.current.getBoundingClientRect();
    if (element.right > window.innerWidth) return;
    const ScreenWidth = window.innerWidth;

    const nearRightEdge = ScreenWidth - element.right < 100;

    const nearLeftEdge = element.left < 100;

    const pos = {
      x: element.left,
      y: element.top,
      height: element.height,
      width: element.width,
      nearRightEdge: nearRightEdge,
      nearLeftEdge: nearLeftEdge,
      tag: tag,
    };
    dispatch(videoModalActions.showCard({ movie: movie, pos: pos }));
    
  };

  const handleLeave = () => {
    setIsHovered(false);
  };

  return (
    <>
      {!loading && (
        <div
          onMouseEnter={handleHover}
          onMouseLeave={handleLeave}
          ref={cardRef}
          className={` relative sm:w-[calc(100%/4)] md:w-[calc(100%/5)] xl:md:w-[calc(100%/6)] xs:md:w-[calc(100%/3)] w-[calc(100%/3)] p-[.25rem] rounded-md  cursor-pointer  flex-shrink-0   ${
            showVideoModal ? "pointer-events-none" : "pointer-events-auto"
          }`}
        >
          <img
            className="object-cover rounded-md w-full h-full "
            src={`https://image.tmdb.org/t/p/w500/${movie?.backdrop_path}`}
            alt=""
          />
        </div>
      )}
    </>
    // {loading && (
    //   <div className=" relative sm:w-[calc(100%/4)] md:w-[calc(100%/5)] xl:md:w-[calc(100%/6)] xs:md:w-[calc(100%/3)] w-[calc(100%/3)] p-[.25rem] rounded-md  cursor-pointer  flex-shrink-0 border bg-[#303030] space-y-8 animate-pulse md:space-y-0 md:space-x-8 md:flex md:items-center ">
    //     {/* <div class="flex items-center justify-center w-full h-full   dark:bg-gray-900"></div> */}
    //   </div>
    // )}
  );
};

export default MovieCard;
