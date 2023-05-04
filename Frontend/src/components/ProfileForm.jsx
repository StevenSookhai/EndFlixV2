import React from "react";
import { useSelector } from "react-redux";
import { profileImages } from "../util/assets";
const ProfileForm = ({
  profile,
  image,
  handleToggleEdit,
  getProfiles,
  add,
  handleAddProfile,
}) => {
  const tempImage =
    "http://occ-0-3266-444.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABUCQw1IvyDiBJPtrlwSze4_VHboA_nFifXDHPb_t3yNWLejyn2_aM-tKRSceB8PsxgWe8F37YAK_7cfUn_yROh1ePDCsZ4EE7r8T.png?r=a21p://occ-0-3266-444.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABQd4d531rYr0QnH2lEC7omicvIWxQTw1_rx-kENeMVr5DuRh51NtzpJa8GXfVivy7C207tpMW4R7NUMXAJOrt8dZHNszpECL4nre.png?r=8d7";
  const [profileName, setProfileName] = React.useState(
    profile ? profile.name : ""
  );
  const user = useSelector((state) => state.auth.user);

  const handleNameChange = (e) => {
    setProfileName(e.target.value);
  };

  const handleSave = async () => {
    if (!add) {
      if (profileName !== profile.name) {
        try {
          const response = await fetch(
            // `https://endflix.onrender.com/api/profiles/${profile.id}`,
            `http://localhost:5000/api/profiles/${profile.id}`,
            {
              method: "PATCH",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                name: profileName,
              }),
              credentials: "include",
            }
          );
          if (response.ok) {
            const data = await response.json();
            getProfiles();
            handleToggleEdit(null);
          }
        } catch (error) {
          console.log(error);
        }
      }
    } else if (add) {
      if (profileName !== "") {
        try {
          const response = await fetch(
            `https://endflix.onrender.com/api/profiles/`,
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                name: profileName,
                user_id: user.id,
                image_url:
                  profileImages[
                    Math.floor(Math.random() * profileImages.length)
                  ],
              }),
              credentials: "include",
            }
          );
          if (response.ok) {
            const data = await response.json();
            getProfiles();
            handleAddProfile();
          }
        } catch (error) {
          console.log(error);
        }
      }
    }
  };

  const handleDelete = async () => {
    try {
      const response = await fetch(
        `https://endflix.onrender.com/${profile.id}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
        }
      );

      if (response.ok) {
        getProfiles();
        handleToggleEdit(null);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex flex-col items-center mt-[7%] overflow-y-auto">
      <div className="flex items-start justify-start w-[70%] border-b border-gray-500">
        <h2 className="text-[40px] font-poppins text-white">
          {add ? "Add" : "Edit"} Profile
        </h2>
      </div>
      <div className="flex w-[70%] mt-[2.5vh] border-b border-gray-500 pb-[2.5vh]">
        <div className="mr-[30px]">
          <img
            className="min-w-[84px] min-h-[84px] max-w-[300px] max-h-[300px] w-[15vw] border-[3px] border-transparent rounded-md"
            src={profile?.image_url ? profile.image_url : tempImage}
            alt=""
          />
        </div>
        <div className="w-full flex justify-start items-center">
          <input
            onChange={handleNameChange}
            className="xs:h-[50px] sm:h-[50px] w-full pl-5 font-poppins text-[20px] rounded-md "
            type="text"
            value={profileName}
          />
        </div>
      </div>
      <div className="mt-[3vh] w-[70%] flex gap-5 ">
        <div
          onClick={handleSave}
          className="mt-[2em] pr-[1.5em] pl-[1.5em] bg-white cursor-pointer hover:bg-[#E50914] flex justify-center items-center h-[40px] sm:h-[40px] max-w-[120px] text-black font-poppins font-bold hover:text-white text-center"
        >
          Save
        </div>
        <div
          onClick={!add ? () => handleToggleEdit(null) : handleAddProfile}
          className="mt-[2em] pr-[1.5em] pl-[1.5em] w-full border-gray-500 border-solid border-[1px] cursor-pointer hover:border-white  h-[40px] sm:h-[40px] max-w-[120px] text-center items-center justify-center flex text-gray-500 hover:text-white font-poppins"
        >
          Cancel
        </div>
        {!add && (
          <div
            onClick={handleDelete}
            className="mt-[2em] w-full border-gray-500 border-solid border-[1px] cursor-pointer hover:border-white  h-[40px] sm:h-[40px] min-w-[120px] max-w-[150px] text-center items-center justify-center flex text-gray-500 hover:text-white font-poppins"
          >
            Delete Profile
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfileForm;
