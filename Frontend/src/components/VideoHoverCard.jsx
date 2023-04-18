import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { videoModalActions } from "../store/videoModal";
import { GrPlayFill } from "react-icons/gr";
import { MdAdd } from "react-icons/md";
import { AiOutlineLike } from "react-icons/ai";
import { BsChevronCompactDown } from "react-icons/bs";
import { useEffect, useState, useRef } from "react";
import { CSSTransition } from "react-transition-group";
import VideoShowModal from "./VideoShowModal";

const VideoHoverCard = ({ handleModalShown }) => {
  const video = useSelector((state) => state.videoModal.video);
  const videoPos = useSelector((state) => state.videoModal.videoPos);
  const [videoCurrentTime, setVideoCurrentTime] = useState(0);
  const modalRef = useRef(null);
  const videoRef = useRef(null);

  const dispatch = useDispatch();
  const [scaleCard, setScaleCard] = useState(false);
  const [windowYOffset, setWindowYOffset] = useState(window.pageYOffset);
  const [videoTop, setVideoTop] = useState(videoPos.y);
  const [nearRightEdge, setNearRightEdge] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    setScaleCard(true);
    setWindowYOffset(window.pageYOffset);
    setVideoTop(videoPos.y);
    setNearRightEdge(videoPos.nearRightEdge);

    document.documentElement.style.setProperty(
      "--modal-origin-x",
      videoPos.x + "px"
    );
    document.documentElement.style.setProperty(
      "--modal-origin-y",
      videoPos.y + "px"
    );
  }, []);

  const closeVideoModal = () => {
    setScaleCard(false);
    const timeOutId = setTimeout(() => {
      dispatch(videoModalActions.hideCard());
    }, 300);
    return () => clearTimeout(timeOutId);
  };

  const handleShowModal = () => {
    const timeOutId = setTimeout(() => {
      const videoCurrentTime = videoRef.current.currentTime;
      setVideoCurrentTime(videoCurrentTime);
      setShowModal(true);
      handleModalShown();
      document.body.classList.add("overflow-hidden");
    }, 0);
    return () => clearTimeout(timeOutId);
  };

  const handleHideModal = () => {
    closeVideoModal();
    setShowModal(false);
    handleModalShown();
    document.body.classList.remove("overflow-hidden");
    dispatch(videoModalActions.hideModal());
  };

  return (
    <>
      {!showModal && (
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
          }px] z-30 absolute hover:scale-125  transition transform delay-100  ease-in-out duration-200 hover:-translate-y-[5rem] scale-100 ${
            nearRightEdge ? "hover:-translate-x-[1.3rem]" : "translate-x-0"
          }
        ${
          videoPos.nearLeftEdge ? "hover:translate-x-[1.3rem]" : "translate-x-0"
        }`}
        >
          <div className="bg-black relative cursor-pointer   z-30 ">
            <div className="absolute w-full h-full z-30 ">
              <div className="relative w-full overflow-hidden z-30  ">
                {/* <img
                  className="object-cover rounded-t-md w-full h-full  z-30"
                  src={`https://image.tmdb.org/t/p/w500/${video?.backdrop_path}`}
                  alt=""
                /> */}
                <div
                  className="relative z-40 cursor-pointer"
                  style={{ transition: "opacity 0.7s ease" }}
                >
                  <img
                    className={`object-cover rounded-t-md w-full h-full ${
                      scaleCard ? "opacity-0" : "opacity-100"
                    }`}
                    src={`https://image.tmdb.org/t/p/w500/${video?.backdrop_path}`}
                    alt=""
                  />
                </div>
                <div
                  className={`absolute top-0 left-0 right-0 bottom-0 rounded-t-md overflow-hidden ease-in-out  ${
                    scaleCard ? "opacity-100" : "opacity-0"
                  }`}
                  style={{ transition: "opacity .7s " }}
                >
                  <video
                    ref={videoRef}
                    className="object-cover w-full h-full"
                    autoPlay
                    loop
                    muted
                    src="https://endflix-seeds.s3.amazonaws.com/HathAway.mp4"
                  />
                </div>
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
                  <div
                    onClick={handleShowModal}
                    className=" absolute sm:right-6 right-2 sm:w-[30px] w-[20px] bg-zinc-900 sm:h-[30px] h-[20px] rounded-full flex justify-center items-center border-[1px] border-[rgb(100,100,100)] hover:border-white"
                  >
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
      )}
      {showModal && (
        <div
          // onMouseLeave={closeVideoModal}

          className={` w-[${
            videoPos.width
          }px] z-0 absolute transition transform delay-200 ease-in-out duration-200  scale-100 ${
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
              </div>
            </div>
          </div>
        </div>
      )}
      <CSSTransition
        mountOnEnter
        unmountOnExit
        in={showModal}
        timeout={400}
        classNames="fade-slide"
        nodeRef={modalRef}
      >
        <VideoShowModal
          handleHideModal={handleHideModal}
          forwaredRef={modalRef}
          video={video}
          videoCurrentTime={videoCurrentTime}
        />
      </CSSTransition>
    </>
  );
};

export default VideoHoverCard;
