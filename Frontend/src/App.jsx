import { useEffect } from "react";
import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import SplashPage from "./pages/splash/SplashPage.jsx";
import AuthPage from "./pages/AuthPage.jsx";
import ProfilesPage from "./pages/ProfilesPage.jsx";
import BrowsePage from "./pages/BrowsePage.jsx";
import MyListPage from "./pages/MyListPage";
import SearchPage from "./pages/SearchPage";
import VideoViewPage from "./pages/VideoViewPage";
import ProtectedRoute from "./util/ProtectedRoute.jsx";

const App = () => {
  useEffect(() => {
    const authenticate = async () => {
      const response = await fetch("http://localhost:5000/api/auth/", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      });
      if (response.ok) {
        const data = await response.json();
        if (data.errors) {
          return false;
        }

        return true;
      }
    };
    authenticate();
  }, []);

  return (
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
          <Route
            exact
            path="/mylist"
            element={
              <ProtectedRoute>
                <MyListPage />
              </ProtectedRoute>
            }
          ></Route>
          <Route
            exact
            path="/search"
            element={
              <ProtectedRoute>
                <SearchPage />
              </ProtectedRoute>
            }
          ></Route>
          <Route
            exact
            path="/watch/:videoId"
            element={
              <ProtectedRoute>
                <VideoViewPage />
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
