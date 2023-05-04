import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import { FaPlay } from "react-icons/fa";
import { MdAdd } from "react-icons/md";
import { BsCheck } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { videoModalActions } from "../store/videoModal";
import { useRef, useState, useEffect } from "react";
import { MovieApiKeys } from "../../src/util/keys";
import ReactPlayer from "react-player";
import { VscUnmute } from "react-icons/vsc";
import { IoVolumeMuteOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { MdOutlineHighQuality } from "react-icons/md";

const VideoShowModal = ({
  video,
  videos,
  handleHideModal,
  forwaredRef,
  videoCurrentTime,
  handleAddToList,
  isInList,
  isMuted,
  handleMute,
  tag,
}) => {
  const dispatch = useDispatch();
  const [isVideoPlaying, setIsVideoPlaying] = useState(false); // turn this to true to play the video
  const [casts, setCasts] = useState([]);
  const [contentRating, setContentRating] = useState("1300px");
  const [bgImage, setBgImage] = useState([]);
  const [divHeight, setDivHeight] = useState(0);
  const videoRef = useRef(null);
  const navigate = useNavigate();
  const listOneStyle = "text-sm md:text-md font-poppins truncate ";
  const listTwoStyle = "sm:text-lg font-poppins truncate";
  const spanStyle = "sm:text-xl font-poppins";
  // const apiKey = process.env.REACT_APP_TMDBAPIKEY;
  const img =
    "https://occ-0-3266-444.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABUeuoA1khfzqaYFyd0_HVrA_ePvgLNPDH12DEwsA3nFCAH4bNbTH4Uh0RODjAZDN25_4Bqal2Vk3ub2IGBhYnyg3LtLIDlkL44rL.webp?r=db0";

  useEffect(() => {
    const getCast = async () => {
      if (tag === "movie") {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${video.id}/credits?api_key=${MovieApiKeys}&language=en-US`
        );
        const data = await response.json();
        setCasts(data.cast);

        const response2 = await fetch(
          `https://image.tmdb.org/t/p/original${video.backdrop_path}`
        );
        const data2 = await response2;
        console.log(data2.url);

        const image = data2.url;
        setBgImage(image);

        const response3 = await fetch(
          `https://api.themoviedb.org/3/movie/${video.id}/content_ratings?api_key=${MovieApiKeys}&language=en-US`
        );
        const data3 = await response3.json();
        // const rating = data3.results[0].release_dates[0].certification;
        const res = data3.results.filter((item) => item.iso_3166_1 === "US");
        setContentRating(res[0]);
      } else {
        const response = await fetch(
          `https://api.themoviedb.org/3/tv/${video.id}/credits?api_key=${MovieApiKeys}&language=en-US`
        );
        const data = await response.json();
        setCasts(data.cast);

        const response2 = await fetch(
          `https://image.tmdb.org/t/p/original${video?.backdrop_path}`
        );
        const data2 = await response2;

        const image = data2.url;
        setBgImage(image);

        const response3 = await fetch(
          `https://api.themoviedb.org/3/tv/${video.id}/content_ratings?api_key=${MovieApiKeys}&language=en-US`
        );
        const data3 = await response3.json();

        const res = data3.results.filter((item) => item.iso_3166_1 === "US");
        setContentRating(res[0]);
      }
    };
    getCast();
    handleBuffer();

    window.addEventListener("resize", setDynamicDivHeight); // Update the div height on window resize

    return () => {
      window.removeEventListener("resize", setDynamicDivHeight); // Clean up the event listener
    };
    // videoRef.current.currentTime = videoCurrentTime; // this to play the video from the time it was paused
    // videoRef.current?.seekTo(parseFloat(videoCurrentTime));
  }, []);
  const handleCloseModal = ({ handleHideModal }) => {
    dispatch(videoModalActions.hideModal());
  };

  const handleBuffer = () => {
    setIsVideoPlaying(true);
  };

  const handleVideoEnded = () => {
    setIsVideoPlaying(false);
  };
  const handlePlayVideo = () => {
    navigate(`/watch/${video.id}`, { state: { tag } });
    handleHideModal();
  };

  const setDynamicDivHeight = () => {
    const viewportHeight = window.innerHeight;

    let newDivHeight;
    if (viewportHeight <= 900) {
      newDivHeight = "1000px";
    } else {
      newDivHeight = "1300px";
    }

    setDivHeight(newDivHeight);
  };
  return (
    <div className=" border-white h-[100vh] w-[100vw] z-50 overflow-y-scroll relative">
      <div
        ref={forwaredRef}
        className={`absolute mx-auto inset-x-0 xs:w-[90vw] md:w-[85vh] max-w-[1200px] bg-[#181818] md:min-w-[850px] top-10 mb-[2rem] h-[${
          window.innerHeight > 900 ? "1260px" : "1000px"
        }]  min-h-[1000px] rounded-lg z-50   `}
      >
        <div className="relative h-[10vh] sm:h-[40vh] md:h-[48vh] min-h-[400px] rounded-md ">
          <div className="h-full w-full rounded-lg relative">
            <div
              onClick={() => handleHideModal()}
              className=" absolute sm:right-6 right-2 sm:top-5 xs:top-3 sm:w-[35px] w-[20px] bg-[#181818] sm:h-[35px] h-[20px] rounded-full flex justify-center items-center   hover:cursor-pointer z-50"
            >
              <AiOutlineClose size={18} color={"white"} />
            </div>
            {videos ? (
              <div className="w-[99.9%] h-[100%] rounded-lg overflow-hidden pointer-events-none">
                {!isVideoPlaying && (
                  <img
                    className="object-cover rounded-t-lg w-full overflow-hidden "
                    src={bgImage}
                    alt=""
                  />
                )}

                {isVideoPlaying && (
                  <div className="w-full h-full player-wrapper">
                    <ReactPlayer
                      className="react-player"
                      url={
                        videos.key
                          ? `https://www.youtube.com/watch?v=${videos?.key}`
                          : videos
                      }
                      width={"100%"}
                      height={"100%"}
                      style={{
                        objectFit: "cover",
                      }}
                      muted={isMuted ? true : false}
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
            ) : (
              <div className="w-[99.9%] h-[100%] rounded-lg overflow-hidden pointer-events-none">
                <img
                  className="object-cover rounded-t-lg w-full overflow-hidden "
                  // src={img}
                  src={`https://image.tmdb.org/t/p/w500/${video?.backdrop_path}`}
                  alt=""
                />
              </div>
            )}
          </div>
          <div className="absolute w-[40%] left-[3rem] h-[40%] top-[35%] sm:top-[45%] flex flex-col z-10  ">
            <div className="w-full h-full relative">
              <div className="flex gap-2 flex-row h-[20%] absolute w-full bottom-0  items-center">
                <div onClick={handlePlayVideo} className="">
                  <button className="bannerButton bg-white text-black ">
                    <FaPlay className="h-4 w-4 text-black md:h-7 md:w-7" />
                    Play
                  </button>
                </div>
                <div className=" sm:w-[50px] w-[30px] bg-zinc-900 sm:h-[50px] h-[30px] rounded-full flex justify-center items-center border-[2px] border-[rgb(187,187,187)] hover:border-white hover:cursor-pointer">
                  {!isInList && (
                    <div>
                      <MdAdd
                        onClick={() => handleAddToList(true)}
                        size={25}
                        color={"white"}
                      />
                    </div>
                  )}
                  {isInList && (
                    <div>
                      <BsCheck
                        onClick={() => handleAddToList(false)}
                        size={25}
                        color={"white"}
                      />
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="w-full h-[70%] bg-gradient-to-t from-[#181818] absolute bottom-0  "></div>
          <div
            onClick={handleMute}
            className="border absolute  bottom-24 sm:right-[10%] right-2 bg-zinc-900 rounded-full sm:w-[40px] w-[30px]  sm:h-[40px] h-[30px]  justify-center items-center flex -rotate-180 scale-y-[-1] cursor-pointer z-50"
          >
            <div className=" rotate-180  flex justify-center items-center  ">
              {!isMuted && (
                <VscUnmute
                  color="white"
                  size={25}
                  style={{ fontWeight: "bold" }}
                />
              )}
            </div>
            <div className=" rotate-180  flex justify-center items-center">
              {isMuted && (
                <IoVolumeMuteOutline
                  size={25}
                  color="white"
                  style={{ fontWeight: "bold" }}
                />
              )}
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2 w-full h-[40%] p-4  ">
          <div className="relative h-[100%]  ">
            <div className="max-w-[56%] h-full ">
              <div>
                {" "}
                <p
                  className=" text-[1.8rem] font-bold
                overflow-hidden font-poppins mb-5  tems-center content-start bg-gradient-to-br from-yellow-500 to-purple-700 text-transparent bg-clip-text "
                >
                  {video?.title}
                  {video?.name}
                </p>
              </div>
              <div className="flex gap-1 ">
                <span
                  className={`${spanStyle} outline outline-2 text-white font-semibold bg-black pl-1 pr-1`}
                >
                  {contentRating?.rating ? contentRating.rating : "TV-MA"}
                </span>
                <br />
                <span
                  className={`${spanStyle}  text-green-500 font-poppins font-semibold`}
                >
                  {video && video.first_air_date
                    ? video?.first_air_date?.slice(0, 4)
                    : video?.release_date?.slice(0, 4)}
                </span>
                {video.runtime && (
                  <span className={spanStyle}>duration {video.runtime}</span>
                )}
                {video.number_of_episodes && (
                  <span className={spanStyle}>
                    {video.number_of_episodes} Episodes
                  </span>
                )}
                <div className="flex items-center justify-center  text-center">
                  <MdOutlineHighQuality size={30} />
                </div>
              </div>
              <div id="overview" className="flex h-full ">
                <p className="sm:text-xl font-poppins mt-2 flex-grow-1  h-full w-full">
                  {video?.overview}
                </p>
              </div>
            </div>
            <div className="absolute right-6 md:right-10 top-0 max-w-[40%] flex flex-col justify-start items-start ">
              <div className="flex md:text-md text-gray-500 font-poppins  justify-center items-center ">
                <ul className="flex md:flex-row flex-col gap-1 mb-5 overflow-hidden justify-center items-center mt-1">
                  Cast:&nbsp;
                  {casts.slice(0, 3).map((cast, index) => {
                    return (
                      <li
                        key={cast.id}
                        className={`${listOneStyle} text-white font-bold`}
                      >
                        {cast.name}
                      </li>
                    );
                  })}
                </ul>
              </div>
              <div className="flex md:text-md text-gray-500 font-poppins  justify-center items-center">
                <ul className="flex md:flex-row flex-col gap-1 mb-5 overflow-hidden justify-center items-center mt-1">
                  Genres:&nbsp;
                  {video.genres.slice(0, 3).map((genre, index) => {
                    return (
                      <li
                        key={genre.id}
                        className={`${listOneStyle} text-white font-bold`}
                      >
                        {genre.name}
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoShowModal;
