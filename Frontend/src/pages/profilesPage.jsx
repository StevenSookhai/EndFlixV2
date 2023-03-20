import React from "react";
import ProfileCard from "../components/Profile_Card";
import AddProfileButton from "../components/AddProfileButton";
import ManageProfiles from "./ManageProfiles";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { authActions } from "../store/authSlice";
import ProfileForm from "../components/ProfileForm";

const profilesPage = () => {
  const [profiles, setProfiles] = useState([]);
  const [maxProfiles, setMaxProfiles] = useState(false);
  const [manageProfile, setManage] = useState(false);
  const [addProfile, setAddProfile] = useState(false);
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();

  const getProfiles = async () => {
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
      data.profiles.length >= 5 ? setMaxProfiles(true) : setMaxProfiles(false);
      setProfiles([...data.profiles]);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProfiles();
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
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleManage = () => {
    setManage(!manageProfile);
  };

  const handleAddProfile = () => {
    setAddProfile(!addProfile);
  };

  return !manageProfile ? (
    <div className="fixed w-full h-full bg-[#141414]">
      <div className="bg-gradient-to-b from-[#0A0A0A] to-[#141414] h-[80px] top-0 left-0"></div>
      {!addProfile ? (
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
                  manage={false}
                />
              ))}
              {!maxProfiles ? (
                <AddProfileButton handleAddProfile={handleAddProfile} />
              ) : null}
            </ul>
          </div>
          <div className="mt-[2em] pr-[1.5em] pl-[1.5em]  border-gray-500 border-solid border-[1px] cursor-pointer hover:border-white flex justify-center items-center h-[30px] sm:h-[40px]">
            <button
              className="xs:text-[1em] sm:text-[1.2em] text-gray-500 hover:text-white"
              onClick={handleManage}
            >
              Manage Profiles
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
      ) : (
        <ProfileForm
          getProfiles={getProfiles}
          handleAddProfile={handleAddProfile}
          add={true}
        />
      )}
    </div>
  ) : (
    <ManageProfiles
      profiles={profiles}
      handleManageProfile={handleManage}
      getProfiles={getProfiles}
    />
  );
};

export default profilesPage;
