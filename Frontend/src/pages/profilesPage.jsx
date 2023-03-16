import React from "react";
import { layout } from "../style";
import styles from "../style";
import ProfileCard from "../components/Profile_Card";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { authActions } from "../store/authSlice";

const profilesPage = () => {
  const [profiles, setProfiles] = useState([]);
  const user = useSelector((state) => state.auth.user);
  console.log(user);
  const dispatch = useDispatch();
  useEffect(() => {
    //will change to fetch all profiles from the database and display them using redux later
    const fetchProfiles = async () => {
      try {
        const response = await fetch(
          `http://localhost:5000/api/users/${user.id}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        const data = await response.json();
        console.log(data.profiles);
        setProfiles([...data.profiles]);
      } catch (error) {
        console.log(error);
      }
    };
    fetchProfiles();
  }, []);

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
        console.log(user);
      }
    } catch (error) {
      console.log(error);
    }
  };
  // console.log(profiles);
  return (
    <div className="fixed w-full h-full bg-[#141414]">
      <div className="bg-gradient-to-b from-[#0A0A0A] to-[#141414] h-[80px] top-0 left-0"></div>
      <div className="flex flex-col justify-center items-center absolute left-0 top-0 right-0 bottom-0">
        <h2 className="w-full font-poppins text-center sm:text-[3.5vw] text-[30px]">
          Who's Watching?
        </h2>
        <div className="max-w-[80%] block mt-[1.5em]">
          <ul className="flex justify-center items-center xs:flex-wrap sm:flex-row transition-opacity-1 ease-out duration-100 ">
            {profiles.map((profile) => (
              <ProfileCard
                profile={profile}
                key={profile.id}
                id={profile.id}
                name={profile.name}
                image="Idk for"
              />
            ))}
          </ul>
        </div>
        <div className="mt-[2em] pr-[1.5em] pl-[1.5em]  border-gray-500 border-solid border-[1px] cursor-pointer hover:border-white flex justify-center items-center h-[30px] sm:h-[40px]">
          <button className="xs:text-[1em] sm:text-[1.2em] text-gray-500 hover:text-white">
            Manage Profiles{" "}
          </button>
        </div>
        <div className="mt-[2em] pr-[1.5em] pl-[1.5em]  border-gray-500 border-solid border-[1px] cursor-pointer hover:border-white flex justify-center items-center h-[30px] sm:h-[40px]">
          <button
            className="xs:text-[1em] sm:text-[1.2em] text-gray-500 hover:text-white"
            onClick={handleLogout}
          >
            Log Out{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default profilesPage;
