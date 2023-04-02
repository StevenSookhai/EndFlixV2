import React from "react";
import HeroVideo from "../components/HeroVideo";
import { useSelector } from "react-redux";
import Navbar from "../components/NavBar.jsx";
import MovieRow from "../components/MovieRow";
import { useEffect, useState } from "react";
import { MovieEndpoints } from "../util/keys.js";
import VideoHoverCard from "../components/VideoHoverCard.jsx";

const browsePage = () => {
  const profile = useSelector((state) => state.auth.profile);
  const showVideoModal = useSelector((state) => state.videoModal.showCard);
  // console.log(showVideoModal);
  // console.log(profile);
  return (
    <>
      {showVideoModal && <VideoHoverCard />}

      {/* {showVideoModal && (
        <div className="fixed flex justify-center left-0 top-0 will-change-scroll border z-20  ">
          {/* <div className="absolute w-full h-full z-20 border top-0 left-0 border-green-500"> */}
      {/* <VideoHoverCard /> */}
      {/* </div> */}
      {/* )} */}
      {/* </div> */}
      <div className="w-full h-full flex justify-center flex-col relative">
        <Navbar />
        <HeroVideo />
        <div className=" w-full z-10  top-[78%] absolute space-y-4 ">
          {/* <div className="relative"> */}
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
          {/* </div> */}
        </div>
      </div>
    </>
  );
};

export default browsePage;
