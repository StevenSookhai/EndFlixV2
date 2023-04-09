import React from "react";
import HeroVideo from "../components/HeroVideo";
import { useSelector } from "react-redux";
import Navbar from "../components/NavBar.jsx";
import MovieRow from "../components/MovieRow";
import { useEffect, useState } from "react";
import { MovieEndpoints } from "../util/keys.js";
import VideoHoverCard from "../components/VideoHoverCard.jsx";
import VideoShowModal from "../components/VideoShowModal";

const browsePage = () => {
  const profile = useSelector((state) => state.auth.profile);
  const showVideoModal = useSelector((state) => state.videoModal.showCard);
  const showModal = useSelector((state) => state.videoModal.showVideoModal);

  return (
    <>
      <div
        className={`absolute top-0 left-0 w-full  bg-none z-30 flex justify-center items-center `}
      >
        {showVideoModal && <VideoHoverCard />}
        {showModal && <VideoShowModal />}
      </div>

      <div className="w-full h-full flex justify-center flex-col relative">
        <Navbar />
        <HeroVideo />
        <div className=" w-full z-10  top-[78%] absolute space-y-4 ">
          <MovieRow
            genre="Action"
            MovieEndpoints={MovieEndpoints.NetFlixOriginals}
          />
          <MovieRow genre="Action" MovieEndpoints={MovieEndpoints.Animations} />
          <MovieRow genre="Action" MovieEndpoints={MovieEndpoints.upcoming} />
          <MovieRow genre="Action" MovieEndpoints={MovieEndpoints.top_rated} />
          <MovieRow
            genre="Action"
            MovieEndpoints={MovieEndpoints.now_playing}
          />
          <MovieRow genre="Action" MovieEndpoints={MovieEndpoints.popular} />
          <MovieRow genre="Action" MovieEndpoints={MovieEndpoints.Animations} />
          <MovieRow genre="Action" MovieEndpoints={MovieEndpoints.upcoming} />
          <MovieRow genre="Action" MovieEndpoints={MovieEndpoints.top_rated} />
          <MovieRow
            genre="Action"
            MovieEndpoints={MovieEndpoints.now_playing}
          />
        </div>
      </div>
    </>
  );
};

export default browsePage;
