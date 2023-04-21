import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import { FaPlay } from "react-icons/fa";
import { MdAdd } from "react-icons/md";
import { useDispatch } from "react-redux";
import { videoModalActions } from "../store/videoModal";
import { useRef, useState, useEffect } from "react";
import { MovieApiKeys } from "../../src/util/keys";
import ReactPlayer from "react-player";

const VideoShowModal = ({
  video,
  handleHideModal,
  forwaredRef,
  videoCurrentTime,
}) => {
  const dispatch = useDispatch();
  const [isVideoPlaying, setIsVideoPlaying] = useState(false); // turn this to true to play the video
  const videoRef = useRef(null);
  const listOneStyle = "text-sm md:text-md font-poppins truncate ";
  const listTwoStyle = "sm:text-lg font-poppins truncate";
  const spanStyle = "sm:text-xl font-poppins";
  // const apiKey = process.env.REACT_APP_TMDBAPIKEY;
  const img =
    "https://occ-0-3266-444.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABUeuoA1khfzqaYFyd0_HVrA_ePvgLNPDH12DEwsA3nFCAH4bNbTH4Uh0RODjAZDN25_4Bqal2Vk3ub2IGBhYnyg3LtLIDlkL44rL.webp?r=db0";

  useEffect(() => {
    const getVideo = async () => {
      const res = await fetch(
        `https://api.themoviedb.org/3/movie/${video?.id}/videos?api_key=057e037396b3e44f631f913549e9891d&language=en-US`
      );
      // console.log(video.id);
      // console.log(MovieApiKeys);
      const data = await res.json();
      // console.log(data);
      // setVideo(data);
    };
    getVideo();
    handleBuffer();
    // videoRef.current.currentTime = videoCurrentTime; // this to play the video from the time it was paused
    console.log(videoCurrentTime);
    videoRef.current?.seekTo(parseFloat(videoCurrentTime));
  }, []);
  const handleCloseModal = ({ handleHideModal }) => {
    dispatch(videoModalActions.hideModal());
  };
  // console.log(video);

  const handleBuffer = () => {
    setIsVideoPlaying(true);
  };

  const handleVideoEnded = () => {
    setIsVideoPlaying(false);
  };

  return (
    <div
      ref={forwaredRef}
      className="fixed left-auto xs:w-[90vw] md:w-[85vh] max-w-[1200px] bg-[#181818] md:min-w-[850px] top-10 mb-[2rem] h-[60vh] sm:h-[80vh] md:h-[100vh] rounded-lg z-50   "
    >
      <div className="relative h-[20vh] sm:h-[40vh] md:h-[48vh] min-h-[500px] ">
        <div className="h-full w-full rounded-lg relative">
          <div
            onClick={() => handleHideModal()}
            className=" absolute sm:right-6 right-2 sm:top-5 xs:top-3 sm:w-[35px] w-[20px] bg-[#181818] sm:h-[35px] h-[20px] rounded-full flex justify-center items-center   hover:cursor-pointer z-50"
          >
            <AiOutlineClose size={18} color={"white"} />
          </div>
          <div className="w-[99.9%] h-[100%] rounded-lg overflow-hidden">
            {!isVideoPlaying && (
              <img
                className="object-cover rounded-t-lg w-full overflow-hidden "
                // src={img}
                src={`https://image.tmdb.org/t/p/w500/${video?.backdrop_path}`}
                alt=""
              />
            )}
            {isVideoPlaying && (
              <div className="w-full h-full">
                <ReactPlayer
                  url={
                    "https://www.youtube.com/watch?v=PdnaR-jyMPo&ab_channel=ShingekiNoANIME"
                  }
                  width={"100%"}
                  height={"100%"}
                  style={{
                    objectFit: "cover",
                  }}
                  muted={true}
                  playing={true}
                  onBufferEnd={handleBuffer}
                  loop={false}
                  onEnded={handleVideoEnded}
                  startTime={videoCurrentTime}
                  ref={videoRef}
                />
              </div>
            )}
          </div>
        </div>
        <div className="absolute w-[40%] left-[3rem] h-[40%] top-[45%] flex flex-col z-10  ">
          <div className="w-full h-full relative">
            <div>
              <h1 className="w-full text-white text-1xl sm:text-5xl md:text-6xl font-bold max-h-[60%] h-full overflow-hidden ">
                {video?.title}
                {video?.name}
              </h1>
            </div>
            <div className="flex gap-2 flex-row h-[20%] absolute w-full bottom-0  items-center">
              <div className="">
                <button className="bannerButton bg-white text-black ">
                  <FaPlay className="h-4 w-4 text-black md:h-7 md:w-7" />
                  Play
                </button>
              </div>
              <div className=" sm:w-[50px] w-[30px] bg-zinc-900 sm:h-[50px] h-[30px] rounded-full flex justify-center items-center border-[2px] border-[rgb(187,187,187)] hover:border-white hover:cursor-pointer">
                <MdAdd size={30} color={"white"} />
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-[70%] bg-gradient-to-t from-[#181818] absolute bottom-0  "></div>
      </div>
      <div className="flex flex-col gap-2 w-full h-[40%]  p-4">
        <div className="relative">
          <div className="max-w-[60%]">
            <div className="flex gap-1">
              <span className={spanStyle}>rating</span>
              <span className={spanStyle}>year</span>
              <span className={spanStyle}>duration</span>
              <span className={spanStyle}>episodes</span>
            </div>
            <p className="sm:text-xlfont-poppins mt-2">{video?.overview}</p>
          </div>
          <div className="absolute right-0 top-0 max-w-[40%]">
            <div className="flex md:text-md ">
              Cast:&nbsp;
              <ul className="flex sm:flex-row flex-col gap-1 mb-5 overflow-hidden items-center mt-1">
                <li className={`${listOneStyle}`}>Song Joong-ki</li>
                <li className={listOneStyle}>Jeon Yeo-been</li>
                <li className={listOneStyle}>OK Taec-yeon</li>
                <li className={listOneStyle}>more</li>
              </ul>
            </div>
            <div className="flex ">
              Genres:&nbsp;
              <ul className="flex sm:flex-row flex-col gap-1 overflow-hidden ">
                <li className={listTwoStyle}>genre</li>
                <li className={listTwoStyle}>genre</li>
                <li className={listTwoStyle}>genre</li>
                <li className={listTwoStyle}>genre</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoShowModal;
