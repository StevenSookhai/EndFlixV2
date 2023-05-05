import React from "react";
import { useState, useEffect, useRef } from "react";
import {
  Link,
  useNavigate,
  useNavigation,
  useLocation,
} from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { authActions } from "../store/authSlice";
import { AiOutlineSearch } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";

const SearchNavBar = ({ searchQuery, updateSearchTerm }) => {
  const [showMenu, setShowMenu] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const searchRef = useRef();
  const buttonRef = useRef();
  const location = useLocation();
  const currentUrl = location.pathname;
  const doesSearchExist = location.state?.searchTerm;

  useEffect(() => {
    searchRef.current.focus();
  }, []);

  const handleLogout = async () => {
    try {
      const response = await fetch("/api/auth/logout", {
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
      console.log(error);
    }
  };

  const handleClickOutside = (event) => {
    if (searchRef.current && !searchRef.current.contains(event.target)) {
    }
  };

  const handleSearchButton = () => {
    setShowSearch(true);
  };

  const closeSearch = () => {
    navigate(-1);
  };

  return (
    <div className="fixed top-0 z-20 w-full h-[50px] sm:h-[70px] flex justify-start items-center bg-gradient-to-b from-black">
      <div className="ml-[3vw] mr-[2vw]">
        <svg className="w-[110px] h-[28px]">
          <path
            className="fill-current text-[#E50914]  "
            d="M105.06233,14.2806261 L110.999156,30 C109.249227,29.7497422 107.500234,29.4366857 105.718437,29.1554972 L102.374168,20.4686475 L98.9371075,28.4375293 C97.2499766,28.1563408 95.5928391,28.061674 93.9057081,27.8432843 L99.9372012,14.0931671 L94.4680851,-5.68434189e-14 L99.5313525,-5.68434189e-14 L102.593495,7.87421502 L105.874965,-5.68434189e-14 L110.999156,-5.68434189e-14 L105.06233,14.2806261 Z M90.4686475,-5.68434189e-14 L85.8749649,-5.68434189e-14 L85.8749649,27.2499766 C87.3746368,27.3437061 88.9371075,27.4055675 90.4686475,27.5930265 L90.4686475,-5.68434189e-14 Z M81.9055207,26.93692 C77.7186241,26.6557316 73.5307901,26.4064111 69.250164,26.3117443 L69.250164,-5.68434189e-14 L73.9366389,-5.68434189e-14 L73.9366389,21.8745899 C76.6248008,21.9373887 79.3120255,22.1557784 81.9055207,22.2804387 L81.9055207,26.93692 Z M64.2496954,10.6561065 L64.2496954,15.3435186 L57.8442216,15.3435186 L57.8442216,25.9996251 L53.2186709,25.9996251 L53.2186709,-5.68434189e-14 L66.3436123,-5.68434189e-14 L66.3436123,4.68741213 L57.8442216,4.68741213 L57.8442216,10.6561065 L64.2496954,10.6561065 Z M45.3435186,4.68741213 L45.3435186,26.2498828 C43.7810479,26.2498828 42.1876465,26.2498828 40.6561065,26.3117443 L40.6561065,4.68741213 L35.8121661,4.68741213 L35.8121661,-5.68434189e-14 L50.2183897,-5.68434189e-14 L50.2183897,4.68741213 L45.3435186,4.68741213 Z M30.749836,15.5928391 C28.687787,15.5928391 26.2498828,15.5928391 24.4999531,15.6875059 L24.4999531,22.6562939 C27.2499766,22.4678976 30,22.2495079 32.7809542,22.1557784 L32.7809542,26.6557316 L19.812541,27.6876933 L19.812541,-5.68434189e-14 L32.7809542,-5.68434189e-14 L32.7809542,4.68741213 L24.4999531,4.68741213 L24.4999531,10.9991564 C26.3126816,10.9991564 29.0936358,10.9054269 30.749836,10.9054269 L30.749836,15.5928391 Z M4.78114163,12.9684132 L4.78114163,29.3429562 C3.09401069,29.5313525 1.59340144,29.7497422 0,30 L0,-5.68434189e-14 L4.4690224,-5.68434189e-14 L10.562377,17.0315868 L10.562377,-5.68434189e-14 L15.2497891,-5.68434189e-14 L15.2497891,28.061674 C13.5935889,28.3437998 11.906458,28.4375293 10.1246602,28.6868498 L4.78114163,12.9684132 ZM105.06233,14.2806261 L110.999156,30 C109.249227,29.7497422 107.500234,29.4366857 105.718437,29.1554972 L102.374168,20.4686475 L98.9371075,28.4375293 C97.2499766,28.1563408 95.5928391,28.061674 93.9057081,27.8432843 L99.9372012,14.0931671 L94.4680851,-5.68434189e-14 L99.5313525,-5.68434189e-14 L102.593495,7.87421502 L105.874965,-5.68434189e-14 L110.999156,-5.68434189e-14 L105.06233,14.2806261 Z M90.4686475,-5.68434189e-14 L85.8749649,-5.68434189e-14 L85.8749649,27.2499766 C87.3746368,27.3437061 88.9371075,27.4055675 90.4686475,27.5930265 L90.4686475,-5.68434189e-14 Z M81.9055207,26.93692 C77.7186241,26.6557316 73.5307901,26.4064111 69.250164,26.3117443 L69.250164,-5.68434189e-14 L73.9366389,-5.68434189e-14 L73.9366389,21.8745899 C76.6248008,21.9373887 79.3120255,22.1557784 81.9055207,22.2804387 L81.9055207,26.93692 Z M64.2496954,10.6561065 L64.2496954,15.3435186 L57.8442216,15.3435186 L57.8442216,25.9996251 L53.2186709,25.9996251 L53.2186709,-5.68434189e-14 L66.3436123,-5.68434189e-14 L66.3436123,4.68741213 L57.8442216,4.68741213 L57.8442216,10.6561065 L64.2496954,10.6561065 Z M45.3435186,4.68741213 L45.3435186,26.2498828 C43.7810479,26.2498828 42.1876465,26.2498828 40.6561065,26.3117443 L40.6561065,4.68741213 L35.8121661,4.68741213 L35.8121661,-5.68434189e-14 L50.2183897,-5.68434189e-14 L50.2183897,4.68741213 L45.3435186,4.68741213 Z M30.749836,15.5928391 C28.687787,15.5928391 26.2498828,15.5928391 24.4999531,15.6875059 L24.4999531,22.6562939 C27.2499766,22.4678976 30,22.2495079 32.7809542,22.1557784 L32.7809542,26.6557316 L19.812541,27.6876933 L19.812541,-5.68434189e-14 L32.7809542,-5.68434189e-14 L32.7809542,4.68741213 L24.4999531,4.68741213 L24.4999531,10.9991564 C26.3126816,10.9991564 29.0936358,10.9054269 30.749836,10.9054269 L30.749836,15.5928391 Z M4.78114163,12.9684132 L4.78114163,29.3429562 C3.09401069,29.5313525 1.59340144,29.7497422 0,30 L0,-5.68434189e-14 L4.4690224,-5.68434189e-14 L10.562377,17.0315868 L10.562377,-5.68434189e-14 L15.2497891,-5.68434189e-14 L15.2497891,28.061674 C13.5935889,28.3437998 11.906458,28.4375293 10.1246602,28.6868498 L4.78114163,12.9684132 Z"
          ></path>
        </svg>
      </div>
      <div className="flex justify-center items-center gap-8 flex-row xs:hidden sm:flex">
        <span className="font-poppins font-bold text-[#e5e5e5] h-full text-[14px]">
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
        <span className="font-poppins text-[#e5e5e5] h-full text-[14px]">
          <Link to="/mylist">My List</Link>
        </span>
      </div>
      <div className="absolute rounded-sm right-[3vw] max-right-[3vw] flex justify-center items-center gap-10 z-20">
        <div
          onClick={handleSearchButton}
          className="text-white flex items-center justify-center gap-1 relative"
        >
          <div className={`absolute left-0`} ref={buttonRef}>
            <AiOutlineSearch color={"white"} size={24} />
          </div>
          <div
            onClick={closeSearch}
            className={`absolute right-0 ml-3 cursor-pointer`}
            ref={buttonRef}
          >
            <AiOutlineClose color={"white"} size={24} />
          </div>

          <div>
            <input
              onChange={updateSearchTerm}
              ref={searchRef}
              className={`bg-black text-white transition-all ease-in-out duration-500 h-[30px]  border-1 border-white pl-8 items-center w-[200px] opacity-100`}
              type="text"
              value={searchQuery}
              placeholder="Movie Titles"
            />
          </div>
        </div>
        <img
          onMouseEnter={() => setShowMenu(true)}
          className="w-[40px] h-[40px] rounded-md cursor-pointer"
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

export default SearchNavBar;
