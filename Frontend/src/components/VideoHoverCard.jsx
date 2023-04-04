import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { videoModalActions } from "../store/videoModal";

import { useEffect, useState } from "react";
import { CSSTransition } from "react-transition-group";

const VideoHoverCard = () => {
  const video = useSelector((state) => state.videoModal.video);
  const videoPos = useSelector((state) => state.videoModal.videoPos);

  const dispatch = useDispatch();
  const [scaleCard, setScaleCard] = useState(false);
  const [hasCardCreated, setHasCardCreated] = useState(false);
  const [windowYOffset, setWindowYOffset] = useState(window.pageYOffset);
  const [videoTop, setVideoTop] = useState(videoPos.y);
  useEffect(() => {
    setScaleCard(true);
    setHasCardCreated(true);
    setWindowYOffset(window.pageYOffset);
    setVideoTop(videoPos.y);
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
      className={`absolute top-0 left-0 border border-red-500 bg-none z-20 `}
    >
      <div
        onMouseLeave={closeVideoModal}
        style={{
          top: videoTop + windowYOffset,
          left: videoPos.x,
          width: videoPos.width,
          className: "card",
        }}
        className={` w-[${videoPos.width}px] z-30 absolute hover:scale-150  transition transform delay-200 ease-in-out duration-200 hover:-translate-y-[5rem] scale-100`}
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
  );
};

export default VideoHoverCard;
