import React from "react";
import { useEffect, useState, useRef } from "react";
import { MovieEndpoints } from "../util/keys";
import { FaPlay } from "react-icons/fa";
import { GrCircleInformation } from "react-icons/gr";
import { MdOutlineReplay } from "react-icons/md";
import { MovieUrls } from "../util/constants";
import ReactPlayer from "react-player";
import { CSSTransition } from "react-transition-group";
import VideoShowModal from "./VideoShowModal";
import { MovieApiKeys } from "../util/keys";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../store/authSlice";
import { videoModalActions } from "../store/videoModal";

import { VscUnmute } from "react-icons/vsc";
import { IoVolumeMuteOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const HeroVideo = ({ video, handleModalShown }) => {
  const [movie, setMovie] = useState({});
  const [tmdbVideo, setTmdbVideo] = useState({});

  const randomMovie = MovieUrls[Math.floor(Math.random() * MovieUrls.length)];
  const list = useSelector((state) => state.auth.list);
  const profile = useSelector((state) => state.auth.profile);
  const heroVideo = useSelector((state) => state.auth.heroVideo);
  const showVideoModal = useSelector(
    (state) => state.videoModal.showVideoModal
  );
  const showCard = useSelector((state) => state.videoModal.showCard);
  const [videoCurrentTime, setVideoCurrentTime] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isInList, setIsInList] = useState(false);
  const videoRef = useRef(null);
  const modalRef = useRef(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const img =
    "https://occ-0-3266-444.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABfRI824w4jsVd7kOlnfHwXPVEctZsKwGau1Woe2i8AHf5hD0w1eJntsonedM7rltdy44hXQHKtdE_0w7rX9iVJLkIJrrXQPxXWPG.webp?r=8d0";

  useEffect(() => {
    const fetchVideos = async () => {
      if (video.tag === "tv") {
        const resquest = await fetch(
          `https://api.themoviedb.org/3/tv/${video.tmdb_id}?api_key=${MovieApiKeys}&language=en-US`
        );
        const response = await resquest.json();
        setTmdbVideo(response);
      } else if (video.tag === "movie") {
        const resquest = await fetch(
          `https://api.themoviedb.org/3/movie/${video.tmdb_id}?api_key=${MovieApiKeys}&language=en-US`
        );
        const response = await resquest.json();
        setTmdbVideo(response);
      }
    };

    fetchVideos();
    setIsInList(checkIfInList());

    document.documentElement.style.setProperty("--modal-origin-x", " 25vw  ");
    document.documentElement.style.setProperty("--modal-origin-y", " 25vh ");
  }, []);

  useEffect(() => {
    document.documentElement.style.setProperty("--modal-origin-x", " 25vw  ");
    document.documentElement.style.setProperty("--modal-origin-y", " 25vh ");
  }, [showModal]);

  const handleMute = () => {
    setIsMuted(!isMuted);
  };

  const handlePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const handleReplay = () => {
    setIsPlaying(true);
    setIsMuted(isMuted);
    videoRef.current.seekTo(0);
    videoRef.current.play();
  };

  const handleShowModal = () => {
    setShowModal(true);
    handleModalShown();
    dispatch(videoModalActions.showModal());
    document.body.classList.add("overflow-hidden");
  };
  const handleHideModal = () => {
    setShowModal(false);
    handleModalShown();
    document.body.classList.remove("overflow-hidden");
    dispatch(videoModalActions.hideModal());
  };

  const handleAddToList = (flag) => {
    handleAddAndDeleteFromList(flag);
    setIsInList(!isInList);
  };

  const checkIfInList = () => {
    const result = Object.keys(list.videos).includes(tmdbVideo.id?.toString());
    return result;
  };

  const handlePlayVideo = () => {
    navigate(`/watch/${tmdbVideo.id}`, { state: { tag: video.tag } });
  };

  const handleAddAndDeleteFromList = async (flag) => {
    try {
      const response = await fetch(
        `https://endflix.onrender.com/${profile.id}`,
        {
          method: flag ? "PATCH" : "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            video_id: tmdbVideo.id,
            tag: video.tag,
          }),
        }
      );
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message || "Something went wrong!");
      }
      dispatch(authActions.setList(data));
    } catch (error) {
      // console.log(error);
      // Will handle later
      alert("Something went wrong! Please try again later.")
    }
  };

  return (
    <>
      <div className="w-full h-[80%] ">
        <div style={{ transition: "opacity .7s " }} className="relative">
          <img
            className={` w-full object-cover absolute top-0 bottom-0 z-10 transition-all ${
              isPlaying ? "opacity-0" : "opacity-100"
            }`}
            src={video?.video_backdrop}
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
              url={video?.video_url}
              controls={false}
              playing={showVideoModal || showCard ? false : true}
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
            <img className="" src={video?.tite_url}></img>
            <div className="text-white text-[1.2vw] font-poppins font-normal  max-w-[50vw] w-full leading-normal mt-[1vw]">
              {tmdbVideo?.overview}
            </div>
            <div className="flex w-full mt-5 space-x-3 ">
              <button
                onClick={handlePlayVideo}
                className="bannerButton bg-white text-black "
              >
                <FaPlay className="h-4 w-4 text-black md:h-7 md:w-7" />
                Play
              </button>
              <button
                onClick={handleShowModal}
                className="bannerButton bg-[rgb(109,109,110,.7)] text-white "
              >
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
          video={tmdbVideo}
          videos={video.video_url}
          videoCurrentTime={videoCurrentTime}
          isMuted={isMuted}
          handleAddToList={handleAddToList}
          isInList={isInList}
          tag={video.tag}
          handleMute={handleMute}
        />
      </CSSTransition>
    </>
  );
};

export default HeroVideo;
