import React from "react";

const MyListPage = () => {
  return (
    <div>
      <h1 className="text-6xl font-bold underline m-0">M asd</h1>
    </div>
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
