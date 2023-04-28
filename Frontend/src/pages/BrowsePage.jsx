import React from "react";
import HeroVideo from "../components/HeroVideo";

import Navbar from "../components/NavBar.jsx";
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
        <HeroVideo video={heroVideo} handleModalShown={handleModalShown} />
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
          <div
            className={`flex md:flex-row flex-col items-center justify-center text-center before: w-full h-[250px]     border-5 border-b-8 border-[rgb(52,52,52)] text-white`}
          >
            <div className="w-[80%] text-gray-300">
              Disclaimer: This website is not affiliated with or endorsed by
              Netflix Inc. It is a clone created solely for the purpose of
              showcasing technical skills. All images, videos, and logos used on
              this website belong to their rightful owners and are used solely
              for educational and non-commercial purposes. I do not claim any
              ownership or copyright over these materials.{" "}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default browsePage;
