import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { videoModalActions } from "../store/videoModal";
import MovieCard from "./MovieCard";
import { useEffect, useState } from "react";

const VideoHoverCard = () => {
  const video = useSelector((state) => state.videoModal.video);
  const videoPos = useSelector((state) => state.videoModal.videoPos);
  const showVideoModal = useSelector((state) => state.videoModal.showCard);
  const dispatch = useDispatch();
  const [pos, setPos] = useState({ x: 0, y: 0, height: 0 });

  const [totalHeight, setTotalHeight] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      //   console.log(document.documentElement.scrollHeight);
      //   console.log(window.innerHeight);
      //   console.log(window.pageYOffset);
      //   const documentHeight = document.documentElement.scrollHeight;
      // Get the current vertical scroll position of the page
      //   const scrollTop =
      // window.pageYOffset || document.documentElement.scrollTop;
      //   console.log(scrollTop);
      // Calculate how much scrollable area is left on the page
      //   const scrollableAreaLeft =
      //     documentHeight - (scrollTop + window.innerHeight);
      // Log the result
      //   console.log(`Scrollable area left: ${scrollableAreaLeft}px`);
      //   const height = window.innerHeight + window.scrollY;
      //   setTotalHeight(height);
      //   calculatePos();
    };

    // handleResize();

    // window.addEventListener("resize", handleResize);

    // return () => {
    //   window.removeEventListener("resize", handleResize);
    // };
  }, []);

  const closeVideoModal = () => {
    dispatch(videoModalActions.hideCard());
  };

  const calculatePos = () => {
    // console.log(videoPos);
    // const x = videoPos.x + window.scrollX;
    // const y = videoPos.y + videoPos.height + window.scrollY;
    // const modalX = x - document.documentElement.scrollLeft;
    // const modalY = y - document.documentElement.scrollTop;
    // const pos = { x: modalX, y: modalY, height: videoPos.height };
    // console.log(pos);
    // setPos(pos);
  };
  console.log(videoPos);
  return (
    <div
      onMouseLeave={closeVideoModal}
      className={`absolute top-0 left-0 border border-red-500 bg-none z-30 `}
      //   style={{ height: `${totalHeight}px`, minHeight: "100%" }}
    >
      <div
        onMouseLeave={closeVideoModal}
        style={{
          top: videoPos.y + window.pageYOffset - 50,
          left: videoPos.x,
          width: videoPos.width,
        }}
        className={`w-[${videoPos.width}px] z-30 absolute transition delay-200 ease-in-out duration-500 transform hover:scale-150 origin-center`}
      >
        <div className="bg-black relative cursor-pointer h-full  z-30 ">
          <div className="absolute w-full h-full  z-50 ">
            <div className="relative w-full overflow-hidden z-50 ">
              <img
                className="object-cover rounded-t-md w-full h-full  z-50"
                src={`https://image.tmdb.org/t/p/w500/${video?.backdrop_path}`}
                alt=""
              />
            </div>
            <div className="text-green-500  z-50 bg-zinc-900 rounded-b-md">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam,
              quisquam dignissimos, dolore debitis animi nisi fugit cupiditate
              deserunt molestiae veniam sunt labore beatae quia voluptate eum
              consequatur officia repellat obcaecati?
            </div>
          </div>
        </div>
      </div>
    </div>

    // <div
    //   className="absolute top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50 z-50 flex items-center justify-center h-[100vh] min-h-[100%]"
    //   onMouseLeave={closeVideoModal}
    // >
    //   <div
    //     className="bg-white rounded-lg p-4 max-w-sm shadow-lg"
    //     style={{
    //       position: "absolute",
    //       top: videoPos.y,
    //       left: videoPos.x,
    //     }}
    //   >
    //     <h2 className="text-xl font-semibold mb-4"> title </h2>
    //     <p className="text-gray-700"> description </p>
    //     <p className="mt-4 text-gray-700">
    //       <span className="font-semibold">Genre:</span>
    //     </p>
    //   </div>
    // </div>
  );
};

export default VideoHoverCard;
