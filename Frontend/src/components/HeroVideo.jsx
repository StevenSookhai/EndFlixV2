import React from "react";
import { useEffect, useState, useRef } from "react";
import { MovieEndpoints } from "../util/keys";
import { FaPlay } from "react-icons/fa";
import { GrCircleInformation } from "react-icons/gr";
import { MdOutlineReplay } from "react-icons/md";
import { MovieUrls } from "../util/constants";
import ReactPlayer from "react-player";
import { useSelector } from "react-redux";
import { CSSTransition } from "react-transition-group";
import VideoShowModal from "./VideoShowModal";

import { VscUnmute } from "react-icons/vsc";
import { IoVolumeMuteOutline } from "react-icons/io5";

const HeroVideo = ({ video }) => {
  const [movies, setMovies] = useState([]);
  const randomMovie = MovieUrls[Math.floor(Math.random() * MovieUrls.length)];
  const showVideoModal = useSelector((state) => state.videoModal.showCard);
  const [videoCurrentTime, setVideoCurrentTime] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(true);
  const videoRef = useRef(null);
  const modalRef = useRef(null);

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

  const handleMute = () => {
    setIsMuted(!isMuted);
  };

  const handlePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const handleReplay = () => {
    console.log(videoRef);
    setIsPlaying(true);
    setIsMuted(isMuted);
    videoRef.current.seekTo(0);
    videoRef.current.play();
  };

  const handleHideModal = () => {
    setShowModal(!showModal);
  };

  return (
    <>
      <div className="w-full h-[80%] ">
        <div style={{ transition: "opacity .7s " }} className="relative">
          <img
            className={` w-full object-cover absolute top-0 bottom-0 z-10 transition-all ${
              isPlaying ? "opacity-0" : "opacity-100"
            }`}
            // src={`https://image.tmdb.org/t/p/original/${randomMovie?.backdrop_path}`}
            src={img}
            alt="Hero Video"
          />

          <div
            style={{ transition: "opacity .2s " }}
            className={`player-wrapper pointer-events-none ${
              isPlaying ? "opacity-100" : "opacity-0"
            } `}
          >
            <ReactPlayer
              className="react-player"
              ref={videoRef}
              url="https://www.youtube.com/watch?v=ZRtdQ81jPUQ&ab_channel=Ayase%2FYOASOBI"
              // url={randomMovie}
              // url="https://endflix-seeds.s3.amazonaws.com/HathAway.mp4"
              controls={false}
              playing={showVideoModal ? false : true}
              muted={isMuted ? true : false}
              loop={false}
              width="100%"
              height="100%"
              onEnded={handlePlay}
            />
          </div>

          <div className="w-full h-[40%] bg-gradient-to-t from-[#141414] absolute z-10 bottom-0"></div>
          <div
            onClick={isPlaying ? handleMute : handleReplay}
            className="border absolute top-[60%] right-[10%] rounded-full sm:w-[50px] sm:h-[50px] w-[25px] h-[25px] justify-center items-center flex -rotate-180 scale-y-[-1] cursor-pointer z-10 "
          >
            {isPlaying && (
              <div>
                <div className=" rotate-180">{!isMuted && <VscUnmute />}</div>
                <div className=" rotate-180">
                  {isMuted && <IoVolumeMuteOutline />}
                </div>
              </div>
            )}

            {!isPlaying && (
              <div>
                <MdOutlineReplay size={25} />
              </div>
            )}
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
            <div className="flex w-full mt-5 space-x-3">
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

export default HeroVideo;
