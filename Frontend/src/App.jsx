import React, { useState, useEffect } from "react";
import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import SplashPage from "./pages/splash/splashPage.jsx";
import AuthPage from "./pages/authPage";
import ViewPage from "./pages/viewPage";
import ProfilesPage from "./pages/profilesPage";
import BrowsePage from "./pages/browsePage";
import ProtectedRoute from "./util/ProtectedRoute.jsx";
import { useSelector } from "react-redux";

const App = () => {
  const [videos, setVideos] = useState([]);
  const user = useSelector((state) => state.auth.user);
  console.log("User: ", user);
  useEffect(() => {
    const authenticate = async () => {
      const response = await fetch("http://localhost:5000/api/auth/", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response.ok) {
        const data = await response.json();
        if (data.errors) {
          console.log(data.errors);
          return false;
        }
        state.user = data.user;
        state.isAuthenticated = true;
        return true;
      }
    };
    authenticate();
  }, []);

  // useEffect(() => {
  //   const fetchVideos = async () => {
  //     try {
  //       const response = await fetch("http://localhost:5000/api/videos");
  //       const data = await response.json();
  //       setVideos(data.videos);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  //   fetchVideos();
  //   console.log(videos);
  // }, []);

  return (
    // <div>
    //   <h1 className="text-6xl font-bold underline m-0">Video List</h1>
    //   <div className="flex flex-col justify-center items-center">
    //     {videos.map((video) => (
    //       <div
    //         className="flex flex-col justify-center items-center"
    //         key={video._id}
    //       >
    //         <h2 className="font-bold">{video.title}</h2>
    //         <p className="max-w-[1000px] px-[10px] my-[10px]">
    //           {video.description}
    //         </p>
    //       </div>
    //     ))}
    //   </div>
    // </div>
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SplashPage />} />
          <Route path="/login" element={<AuthPage />} />
          <Route
            exact
            path="/browse"
            element={
              <ProtectedRoute>
                <BrowsePage />
              </ProtectedRoute>
            }
          ></Route>
          <Route
            exact
            path="/profiles"
            element={
              <ProtectedRoute>
                <ProfilesPage />
              </ProtectedRoute>
            }
          ></Route>
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
