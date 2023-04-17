import React from "react";
import { useSelector } from "react-redux";
import MovieCard from "../components/MovieCard";
import { MovieEndpoints } from "../util/keys.js";
import { useState, useEffect } from "react";
import VideoHoverCard from "../components/VideoHoverCard.jsx";
import NavBar from "../components/navbar";
const MyListPage = () => {
  const profile = useSelector((state) => state.auth.profile);
  const [movies, setMovies] = useState([]);
  const showVideoModal = useSelector((state) => state.videoModal.showCard);
  const [isModalShown, setIsModalShown] = useState(false);

  useEffect(() => {
    const fetchVideos = async () => {
      const response = await fetch(MovieEndpoints.Animations);
      const data = await response.json();
      setMovies(data.results);
    };

    fetchVideos();
  }, []);

  const handleModalShown = () => {
    setIsModalShown(!isModalShown);
  };
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
              <MovieCard key={movie.id} movie={movie} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default MyListPage;

// import React from "react";
// import { useSelector } from "react-redux";
// import MovieCard from "../components/MovieCard";
// import { MovieEndpoints } from "../util/keys.js";
// import { useState, useEffect } from "react";
// const MyListPage = () => {
//   const profile = useSelector((state) => state.auth.profile);
//   const [movies, setMovies] = useState([]);

//   useEffect(() => {
//     const fetchVideos = async () => {
//       const response = await fetch(MovieEndpoints.Animations);
//       const data = await response.json();
//       setMovies(data.results);
//     };

//     fetchVideos();
//   }, []);

//   return (
//     <div className="grid grid-cols-6 gap-2">
//       <h1 className="text-6xl font-bold underline m-0">My List</h1>
//       {movies.map((movie) => (
//         <MovieCard key={movie.id} movie={movie} />
//       ))}
//     </div>
//   );
// };

// export default MyListPage;
