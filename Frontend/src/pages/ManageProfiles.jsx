import React from "react";
import { layout } from "../style";
import styles from "../style";
import ProfileCard from "../components/Profile_Card";
import AddProfileButton from "../components/AddProfileButton";
import ProfileForm from "../components/ProfileForm";
import { useState } from "react";

const ManageProfiles = ({ profiles, handleManageProfile }) => {
  const [toggleEdit, setToggleEdit] = useState(false);
  const [selectedProfile, setSelectedProfile] = useState(null);

  const handleToggleEdit = (profile) => {
    setSelectedProfile(profile);
    // setToggleEdit(!toggleEdit);
  };

  return (
    <div className="fixed w-full h-full bg-[#141414]">
      <div className="bg-gradient-to-b from-[#0A0A0A] to-[#141414] h-[80px] top-0 left-0"></div>
      {!selectedProfile ? (
        <div className="flex flex-col justify-center items-center absolute left-0 top-0 right-0 bottom-0">
          <h2 className="w-full font-poppins text-center sm:text-[3.5vw] text-[30px]">
            Manage Profiles:
          </h2>
          <div className="max-w-[80%] block mt-[1.5em]">
            <ul className="flex justify-center items-center xs:flex-wrap sm:flex-row transition-opacity-1 ease-out duration-100 ">
              {profiles.map((profile) => (
                <ProfileCard
                  profile={profile}
                  key={profile.id}
                  id={profile.id}
                  name={profile.name}
                  manage={true}
                  handleToggleEdit={handleToggleEdit}
                />
              ))}
            </ul>
          </div>
          <div className="mt-[2em] pr-[1.5em] pl-[1.5em]  border-gray-500 border-solid border-[1px] cursor-pointer hover:border-white flex justify-center items-center h-[30px] sm:h-[40px]">
            <button
              className="xs:text-[1em] sm:text-[1.2em] text-gray-500 hover:text-white"
              onClick={handleManageProfile}
            >
              Done
            </button>
          </div>
        </div>
      ) : (
        <ProfileForm
          profile={selectedProfile}
          handleToggleEdit={handleToggleEdit}
        />
      )}
    </div>
  );
};

export default ManageProfiles;
