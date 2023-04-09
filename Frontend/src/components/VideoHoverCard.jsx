import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { videoModalActions } from "../store/videoModal";
import { GrPlayFill } from "react-icons/gr";
import { MdAdd } from "react-icons/md";
import { AiOutlineLike } from "react-icons/ai";
import { BsChevronCompactDown } from "react-icons/bs";
import { useEffect, useState } from "react";

const VideoHoverCard = () => {
  const video = useSelector((state) => state.videoModal.video);
  const videoPos = useSelector((state) => state.videoModal.videoPos);

  const dispatch = useDispatch();
  const [scaleCard, setScaleCard] = useState(false);
  const [hasCardCreated, setHasCardCreated] = useState(false);
  const [windowYOffset, setWindowYOffset] = useState(window.pageYOffset);
  const [videoTop, setVideoTop] = useState(videoPos.y);
  const [nearRightEdge, setNearRightEdge] = useState(false);

  useEffect(() => {
    setScaleCard(true);
    setHasCardCreated(true);
    setWindowYOffset(window.pageYOffset);
    setVideoTop(videoPos.y);
    setNearRightEdge(videoPos.nearRightEdge);
  }, []);

  const closeVideoModal = () => {
    setScaleCard(false);
    const timeOutId = setTimeout(() => {
      dispatch(videoModalActions.hideCard());
    }, 300);
    return () => clearTimeout(timeOutId);
  };

  return (
    <div
      onMouseLeave={closeVideoModal}
      className={`absolute top-0 left-0   bg-none z-20 `}
    >
      <div
        onMouseLeave={closeVideoModal}
        style={{
          top: videoTop + windowYOffset,
          left: videoPos.x,
          width: videoPos.width,
          className: "card",
        }}
        className={` w-[${
          videoPos.width
        }px] z-30 absolute hover:scale-125  transition transform delay-200 ease-in-out duration-200 hover:-translate-y-[5rem] scale-100 ${
          nearRightEdge ? "hover:-translate-x-[1.3rem]" : "translate-x-0"
        }
        ${
          videoPos.nearLeftEdge ? "hover:translate-x-[1.3rem]" : "translate-x-0"
        }`}
      >
        <div className="bg-black relative cursor-pointer h-full  z-30 ">
          <div className="absolute w-full h-full z-30 ">
            <div className="relative w-full overflow-hidden z-30 ">
              <img
                className="object-cover rounded-t-md w-full h-full  z-30"
                src={`https://image.tmdb.org/t/p/w500/${video?.backdrop_path}`}
                alt=""
              />
              {/* {!scaleCard && (
                <img
                  className="object-cover rounded-t-md w-full h-full  z-30"
                  src={`https://image.tmdb.org/t/p/w500/${video?.backdrop_path}`}
                  alt=""
                />
              )} */}
              {/* {scaleCard && (
                <video
                  className="object-cover rounded-t-md w-full h-full  z-30"
                  autoPlay
                  loop
                  muted
                  src="https://endflix-seeds.s3.amazonaws.com/HathAway.mp4"
                />
              )} */}
            </div>
            <div className=" z-30 bg-zinc-900 rounded-b-md mb-3  ">
              <div className="  flex  gap-2   sm:ml-5 ml-2 relative top-3 min-h-[2rem]">
                <div className="sm:w-[30px] w-[20px] sm:h-[30px] h-[20px] bg-white rounded-full flex justify-center items-center hover:bg-[rgb(200,200,200,.9)]">
                  <GrPlayFill size={15} />
                </div>
                <div className="sm:w-[30px] w-[20px] bg-zinc-900 sm:h-[30px] h-[20px] rounded-full flex justify-center items-center border-[1px] border-[rgb(100,100,100)] hover:border-white">
                  <MdAdd size={20} color={"white"} />
                </div>
                <div className="sm:w-[30px] w-[20px] bg-zinc-900 sm:h-[30px] h-[20px] rounded-full flex justify-center items-center border-[1px] border-[rgb(100,100,100)] hover:border-white">
                  <AiOutlineLike size={18} color={"white"} />
                </div>
                <div className=" absolute sm:right-6 right-2 sm:w-[30px] w-[20px] bg-zinc-900 sm:h-[30px] h-[20px] rounded-full flex justify-center items-center border-[1px] border-[rgb(100,100,100)] hover:border-white">
                  <BsChevronCompactDown size={18} color={"white"} />
                </div>
              </div>
              <div className="top-5 mt-6 sm:ml-5 ml-2">
                <ul className="flex sm:gap-3 gap-1 flex-wrap sm:flex-row items-center content-start ">
                  <li className="text-xs sm:text-base">Rating</li>
                  <li className="text-xs sm:text-base">Episodes</li>
                  <li className="text-xs sm:text-base">match?</li>
                </ul>
              </div>
              <div className="top-5 mt-1 pb-2 rounded-b-md sm:ml-5 ml-2">
                <ul className="flex sm:gap-3 gap-1 flex-wrap sm:flex-row items-center content-start">
                  <li className="text-xs sm:text-base"> genre1</li>
                  <li className="text-xs sm:text-base">&#x2022; genre2</li>
                  <li className="text-xs sm:text-base">&#x2022; genre3</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoHoverCard;
