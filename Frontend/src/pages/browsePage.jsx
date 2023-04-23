import React from "react";
import HeroVideo from "../components/HeroVideo";

import Navbar from "../components/navbar.jsx";
import MovieRow from "../components/MovieRow";
import { useEffect, useState } from "react";
import { MovieEndpoints } from "../util/keys.js";
import VideoHoverCard from "../components/VideoHoverCard.jsx";
import VideoShowModal from "../components/VideoShowModal";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../store/authSlice";

const browsePage = () => {
  const profile = useSelector((state) => state.auth.profile);
  const list = useSelector((state) => state.auth.list);
  const heroVideo = useSelector((state) => state.auth.heroVideo);
  const showVideoModal = useSelector((state) => state.videoModal.showCard);
  const [isModalShown, setIsModalShown] = useState(false);

  // useEffect(() => {
  //   if (heroVideo) {
  //     return;
  //   } else {

  //   }
  // }, [heroVideo]);

  const handleModalShown = () => {
    setIsModalShown(!isModalShown);
  };
  return (
    <>
      <div
        className={` top-0 left-0 w-full z-30  flex justify-center items-center  ${
          isModalShown
            ? "bg-[rgb(0,0,0,.9)] h-[100vh] fixed"
            : "absolute bg-none"
        }`}
      >
        {showVideoModal && (
          <VideoHoverCard handleModalShown={handleModalShown} />
        )}
      </div>

      <div className="w-full h-full flex justify-center flex-col relative">
        <Navbar />
        <HeroVideo />
        <div className=" w-full z-10  top-[78%] absolute space-y-4 ">
          <MovieRow
            genre="Action"
            MovieEndpoints={MovieEndpoints.NetFlixOriginals}
            tag={"tv"}
          />
          <MovieRow
            genre="Action"
            MovieEndpoints={MovieEndpoints.Animations}
            tag={"tv"}
          />
          <MovieRow
            genre="Action"
            MovieEndpoints={MovieEndpoints.upcoming}
            tag={"movie"}
          />

          <MovieRow
            genre="Action"
            MovieEndpoints={MovieEndpoints.top_rated}
            tag={"tv"}
          />
          <MovieRow
            genre="Action"
            MovieEndpoints={MovieEndpoints.now_playing}
            tag={"movie"}
          />
          <MovieRow
            genre="Action"
            MovieEndpoints={MovieEndpoints.popular}
            tag={"tv"}
          />
          <MovieRow
            genre="Action"
            MovieEndpoints={MovieEndpoints.Animations}
            tag={"tv"}
          />
          <MovieRow
            genre="Action"
            MovieEndpoints={MovieEndpoints.upcoming}
            tag={"movie"}
          />
          <MovieRow
            genre="Action"
            MovieEndpoints={MovieEndpoints.top_rated}
            tag={"tv"}
          />
          <MovieRow
            genre="Action"
            MovieEndpoints={MovieEndpoints.now_playing}
            tag={"movie"}
          />
        </div>
      </div>
    </>
  );
};

export default browsePage;
