import React from "react";
import { useState, useEffect, useRef } from "react";
import {
  Link,
  useNavigate,
  useNavigation,
  useLocation,
} from "react-router-dom";
import SearchNavBar from "../components/SearchNavBar";
import MovieCard from "../components/MovieCard";
import VideoHoverCard from "../components/VideoHoverCard";
import { useSelector } from "react-redux";
import { MovieApiKeys } from "../util/keys";

const SearchPage = () => {
  const location = useLocation();
  const [searchTerm, setSearchTerm] = useState(location.state?.searchTerm);
  const [vidoes, setVideos] = useState([]);
  const showVideoModal = useSelector((state) => state.videoModal.showCard);
  const [isModalShown, setIsModalShown] = useState(false);
  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/search/multi?api_key=${MovieApiKeys}&query=${searchTerm}`
        );
        const data = await response.json();

        setVideos(data.results);
      } catch (error) {
        console.log(error);
      }
    };

    fetchVideos();
  }, [searchTerm]);

  const updateSearchTerm = (e) => {
    setSearchTerm(e.target.value);
  };
  const handleModalShown = () => {
    setIsModalShown(!isModalShown);
  };

  return (
    <div>
      <SearchNavBar
        searchQuery={searchTerm}
        updateSearchTerm={updateSearchTerm}
      />
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
        <div className="ml-[4%] mr-[4%] mt-[10vh]">
          <h1 className="text-2xl font-poppins mb-[5%] ">Search Results</h1>
          <h1 className="text-2xl font-poppins mb-[5%] ">{searchTerm}</h1>
          <div>
            <ul>
              <div className="flex flex-wrap mb-4">
                {vidoes.map((movie) => {
                  if (movie) {
                    if (movie.backdrop_path) {
                      return (
                        <MovieCard
                          key={movie.id}
                          movie={movie}
                          tag={movie.media_type}
                        />
                      );
                    }
                  }
                })}
              </div>
            </ul>
          </div>
          <div>
            <div className="flex flex-wrap mb-4"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
