import React from "react";
import { useState, useEffect, useRef } from "react";
import {
  Link,
  useNavigate,
  useNavigation,
  useLocation,
} from "react-router-dom";
import SearchNavBar from "../components/SearchNavBar";
const SearchPage = ({ searchQuery }) => {
  const location = useLocation();
  const [searchTerm, setSearchTerm] = useState(location.state?.searchTerm);
  const [vidoes, setVideos] = useState([]);
  const currentUrl = location.pathname;
  const doesSearchExist = location.state?.searchTerm;

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await fetch(
          `http://localhost:5000/api/videos/search/${searchTerm}`
        );
        const data = await response.json();
        setVideos(data.videos);
      } catch (error) {
        console.log(error);
      }
    };

    fetchVideos();
  }, [searchTerm]);

  console.log(vidoes);
  const updateSearchTerm = (e) => {
    setSearchTerm(e.target.value);
    console.log(searchTerm);
  };

  return (
    <div>
      <SearchNavBar
        searchQuery={searchTerm}
        updateSearchTerm={updateSearchTerm}
      />
      <div className="w-full h-full flex justify-center flex-col relative">
        <div className="ml-[4%] mr-[4%] mt-[10vh]">
          <h1 className="text-2xl font-poppins mb-[5%] ">Search Results</h1>
          <h1 className="text-2xl font-poppins mb-[5%] ">{searchTerm}</h1>
          <div>
            <ul>
              {vidoes.map((video) => (
                <li key={video._id}>
                  <p>{video.title}</p>
                </li>
              ))}
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
