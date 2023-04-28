import React from "react";
import { useSelector } from "react-redux";
import MovieCard from "../components/MovieCard";
import { useState, useEffect } from "react";
import VideoHoverCard from "../components/VideoHoverCard.jsx";
import NavBar from "../components/NavBar";
import { MovieApiKeys } from "../util/keys.js";
const MyListPage = () => {
  const profile = useSelector((state) => state.auth.profile);
  const list = useSelector((state) => state.auth.list);
  const [movies, setMovies] = useState([]);
  const showVideoModal = useSelector((state) => state.videoModal.showCard);
  const [isModalShown, setIsModalShown] = useState(false);
  // console.log(list.videos);
  useEffect(() => {
    const fetchVideos = async () => {
      const res = [];
      for (let videoIs of Object.keys(list.videos)) {
        if (list.videos[videoIs] === "tv") {
          const response = await fetch(
            `https://api.themoviedb.org/3/tv/${videoIs}?api_key=${MovieApiKeys}&language=en-US`
          );
          if (response.ok) {
            const data = await response.json();
            res.push(data);
          }
        } else {
          const response = await fetch(
            `https://api.themoviedb.org/3/movie/${videoIs}?api_key=${MovieApiKeys}&language=en-US`
          );
          if (response.ok) {
            const data = await response.json();
            res.push(data);
          }
        }
      }
      console.log(res);
      setMovies(res);
    };

    fetchVideos();
  }, [list]);

  const handleModalShown = () => {
    setIsModalShown(!isModalShown);
  };
  console.log(movies);
  console.log(list);
  return (
    <>
      <NavBar />
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

      <div className="ml-[4%] mr-[4%] mt-[10vh]">
        <h1 className="text-2xl font-poppins mb-[5%] ">My List</h1>
        <div>
          <div className="flex flex-wrap mb-4">
            {movies.map((movie) => (
              <MovieCard
                key={movie.id}
                movie={movie}
                tag={movie.number_of_episodes ? "tv" : "movie"}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default MyListPage;
