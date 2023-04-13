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
  const [isModalShown, setIsModalShown] = useState(false);

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
          />
          <MovieRow genre="Action" MovieEndpoints={MovieEndpoints.Animations} />
          <MovieRow genre="Action" MovieEndpoints={MovieEndpoints.upcoming} />
          {/* <MovieRow genre="My List" MovieEndpoints={[]} /> */}
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
