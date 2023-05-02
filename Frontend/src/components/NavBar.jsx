import React from "react";
import { useState, useEffect, useRef } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import authSlice, { authActions } from "../store/authSlice";
import { AiOutlineSearch } from "react-icons/ai";
import { useSelector } from "react-redux";

const NavBar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);
  const profile = useSelector((state) => state.auth.profile);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const searchRef = useRef();
  const location = useLocation();

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    if (searchTerm && location.pathname !== "/search") {
      navigate(`/search`, {
        state: { searchTerm },
        handleSearch: handleSearch,
      });
    }
    return () => {
      document.removeEventListener("click", handleClickOutside);
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [searchTerm]);

  const handleLogout = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/auth/logout", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      if (data.message === "User logged out") {
        dispatch(authActions.logout());
      }
    } catch (error) {
      // console.log(error);
      alert("Something went wrong! Please try again later.")
    }
  };

  const handleClickOutside = (event) => {
    if (searchRef.current && !searchRef.current.contains(event.target)) {
      setSearchTerm("");
      setShowSearch(false);
    }
  };

  const handleSearchButton = () => {
    document.addEventListener("mousedown", handleClickOutside);
    setShowSearch(true);
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleScroll = () => {
    // Calculate scroll position and update state based on a threshold
    const scrollY = window.scrollY;
    const threshold = 100; // Change this value to adjust the scroll threshold
    setIsScrolled(scrollY > threshold);
  };

  const handleBackToProfiles = () => {
    navigate("/profiles");
    dispatch(authActions.removeHeroVideo());
  };

  return (
    <div
      className={`fixed top-0 z-20 w-full h-[50px] sm:h-[70px] flex justify-start items-center bg-gradient-to-b from-black transition-color ease-in-out duration-1000 ${
        isScrolled ? "bg-black" : "bg-transparent"
      }`}
    >
      <div className="ml-[3vw] mr-[2vw]">
        <div>
          <img
            className="w-[110px] h-[32px] "
            src="https://endflix-seeds.s3.amazonaws.com/logo.png"
          ></img>
        </div>
      </div>
      <div className="flex justify-center items-center gap-8 flex-col sm:flex-row xs:hidden sm:flex">
        <span
          className={`font-poppins ${
            location.pathname === "/browse" ? "font-bold" : ""
          } text-[#e5e5e5] h-full text-[14px]`}
        >
          <Link to="/browse">Home</Link>
        </span>
        <span className="font-poppins text-[#e5e5e5] h-full text-[14px]">
          <Link to="https://stevensookhai.github.io/">Protfolio</Link>
        </span>
        <span className="font-poppins text-[#e5e5e5] h-full text-[14px]">
          <Link to="https://github.com/StevenSookhai">Github</Link>
        </span>
        <span className="font-poppins text-[#e5e5e5] h-full text-[14px]">
          <Link to="https://www.linkedin.com/in/steven-sookhai-37192a22a/">
            LinkedIn
          </Link>
        </span>
        <span className="font-poppins text-[#e5e5e5] h-full text-[14px]">
          AngelList
        </span>
        <span
          className={`font-poppins ${
            location.pathname === "/mylist" ? "font-bold" : ""
          } text-[#e5e5e5] h-full text-[14px]`}
        >
          <Link to="/mylist">My List</Link>
        </span>
      </div>
      <div className="absolute rounded-sm right-[3vw] max-right-[3vw] flex justify-center items-center gap-10 z-20">
        <div
          onClick={handleSearchButton}
          className="text-white flex items-center justify-center gap-1 relative"
        >
          <div
            className={`${
              showSearch ? "absolute left-0 z-10" : "cursor-pointer"
            }`}
          >
            <AiOutlineSearch color={"white"} size={24} />
          </div>

          <div>
            <input
              onChange={handleSearch}
              ref={searchRef}
              className={`bg-black text-white transition-all ease-in-out duration-500 h-[30px]  border-1 border-white pl-8 items-center ${
                showSearch ? "w-[200px] opacity-100" : "w-0 opacity-0"
              }`}
              type="text"
              value={searchTerm}
              placeholder="Movie Titles"
            />
          </div>
        </div>
        <img
          onMouseEnter={() => setShowMenu(true)}
          className="w-[40px] h-[40px] rounded-md cursor-pointer"
          // src="http://occ-0-3266-444.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABQd4d531rYr0QnH2lEC7omicvIWxQTw1_rx-kENeMVr5DuRh51NtzpJa8GXfVivy7C207tpMW4R7NUMXAJOrt8dZHNszpECL4nre.png?r=8d7"
          src={profile.image_url}
          alt=""
        />
        {showMenu && (
          <div
            onMouseLeave={() => setShowMenu(false)}
            className="h-[200px] w-[150px] absolute border bg-[rgb(0,0,0,.9)] top-14 right-[.1vw] flex flex-col items-center   z-20"
          >
            <div
              className="cursor-pointer  w-full text-center font-poppins font-semibold p-3 "
              onClick={handleLogout}
            >
              Log out
            </div>
            <div
              onClick={handleBackToProfiles}
              className="cursor-pointer  w-full text-center font-poppins font-semibold p-3"
            >
              Profiles
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default NavBar;
