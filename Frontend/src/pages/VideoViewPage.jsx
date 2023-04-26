import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useLocation, useParams } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
import { MovieApiKeys } from "../util/keys";
import ReactPlayer from "react-player";
import { useNavigate } from "react-router-dom";
const VideoViewPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { videoId } = useParams();
  const tag = location.state?.tag;
  const [showBackButton, setShowBackButton] = useState(true);
  const [video, setVideo] = useState([]);
  let timeoutId;
  useEffect(() => {
    const fetchVideo = async () => {
      try {
        if (tag === "tv") {
          const res = await fetch(
            `https://api.themoviedb.org/3/tv/${videoId}/videos?api_key=${MovieApiKeys}&language=en-US`
          );
          const data = await res.json();
          setVideo(
            data.results[Math.floor(Math.random() * data.results.length)]
          );
        } else if (tag === "movie") {
          const res = await fetch(
            `https://api.themoviedb.org/3/movie/${videoId}/videos?api_key=${MovieApiKeys}&language=en-US`
          );
          const data = await res.json();
          const result = data.results.filter(
            (video) => video.type !== "Behind the Scenes"
          );
          setVideo(result[Math.floor(Math.random() * result.length)]);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchVideo();
    handleBackButtonDisappear();
    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  const handleBackButtonAppear = () => {
    setShowBackButton(true);
  };

  const handleBackButtonDisappear = () => {
    timeoutId = setTimeout(() => {
      setShowBackButton(false);
    }, 5000);
  };

  const handleBackButton = () => {
    navigate(-1);
  };

  return (
    <div
      className={` w-[100vw] h-[100vh]  justify-center items-center overflow-x-hidden overflow-y-hidden  `}
    >
      <div
        onMouseLeave={handleBackButtonDisappear}
        onMouseEnter={handleBackButtonAppear}
        onClick={handleBackButton}
        className={`w-[200px] h-[200px] absolute sm:left-10 sm:top-10 z-20  transition-all ease-in-out duration-1000 ${
          showBackButton ? "opacity-100" : "opacity-0"
        }`}
      >
        <BiArrowBack
          className={` text-4xl sm:text-6xl text-white cursor-pointer`}
        />
      </div>

      <div className=" player-wrapper flex justify-center items-center  h-full ">
        <ReactPlayer
          className="react-player  "
          url={
            // "https://www.youtube.com/watch?v=PdnaR-jyMPo&ab_channel=ShingekiNoANIME"
            `https://www.youtube.com/watch?v=${video?.key}`
          }
          width="100%"
          height="100%"
          controls={true}
          muted={false}
          playing={true}
          loop={true}
        />
      </div>
    </div>
  );
};

export default VideoViewPage;
