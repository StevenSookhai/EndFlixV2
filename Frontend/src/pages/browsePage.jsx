import React from "react";
import HeroVideo from "../components/HeroVideo";
import { useSelector } from "react-redux";
import Navbar from "../components/NavBar.jsx";
import MovieRow from "../components/MovieRow";
import { useEffect, useState } from "react";
import { MovieEndpoints } from "../util/keys.js";

const browsePage = () => {
  const profile = useSelector((state) => state.auth.profile);

  return (
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
        <MovieRow genre="Action" MovieEndpoints={MovieEndpoints.now_playing} />
        <MovieRow genre="Action" MovieEndpoints={MovieEndpoints.popular} />
        <MovieRow genre="Action" MovieEndpoints={MovieEndpoints.Animations} />
        <MovieRow genre="Action" MovieEndpoints={MovieEndpoints.upcoming} />
        <MovieRow genre="Action" MovieEndpoints={MovieEndpoints.top_rated} />
        <MovieRow genre="Action" MovieEndpoints={MovieEndpoints.now_playing} />
        {/* </div> */}
      </div>
    </div>
  );
};

export default browsePage;
