import React from "react";
import ProfileCard from "../components/Profile_Card";
import ProfileForm from "../components/ProfileForm";
import { useState } from "react";

const ManageProfiles = ({ profiles, handleManageProfile, getProfiles }) => {
  const [selectedProfile, setSelectedProfile] = useState(null);
  const image =
    "http://occ-0-3266-444.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABQd4d531rYr0QnH2lEC7omicvIWxQTw1_rx-kENeMVr5DuRh51NtzpJa8GXfVivy7C207tpMW4R7NUMXAJOrt8dZHNszpECL4nre.png?r=8d7";
  const handleToggleEdit = (profile) => {
    setSelectedProfile(profile);
  };

  return (
    <div className="h-screen w-screen fixed bg-[#141414] overflow-y-auto">
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
          image={image}
          handleToggleEdit={handleToggleEdit}
          handleManageProfile={handleManageProfile}
          getProfiles={getProfiles}
          add={false}
        />
      )}
    </div>
  );
};

export default ManageProfiles;
