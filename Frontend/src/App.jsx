import React, { useState, useEffect } from "react";
import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";

const App = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/videos");
        const data = await response.json();
        setVideos(data.videos);
      } catch (error) {
        console.log(error);
      }
    };
    fetchVideos();
    console.log(videos);
  }, []);

  return (
    <div>
      <h1 className="text-6xl font-bold underline m-0">Video List</h1>
      <div className="flex flex-col justify-center items-center">
        {videos.map((video) => (
          <div
            className="flex flex-col justify-center items-center"
            key={video._id}
          >
            <h2 className="font-bold">{video.title}</h2>
            <p className="max-w-[1000px] px-[10px] my-[10px]">
              {video.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
