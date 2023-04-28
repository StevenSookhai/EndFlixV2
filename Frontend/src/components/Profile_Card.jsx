import React from "react";
import { useState } from "react";
import ProfileForm from "./ProfileForm";
import { useNavigate } from "react-router-dom";
import { authActions } from "../store/authSlice";
import { useDispatch } from "react-redux";

const ProfileCard = ({
  profile,
  id,
  name,
  image,
  manage,
  handleToggleEdit,
}) => {
  const [edit, setEdit] = React.useState(false);
  const [hero, setHero] = useState({});
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleNavigate = async () => {
    dispatch(authActions.setProfile(profile));
    await getList();
    await getHeroVideo();

    navigate("/browse");
  };

  const getList = async () => {
    try {
      const response = await fetch(`http://localhost:5000/api/lists/`, {
        method: "POST",
        body: JSON.stringify({
          profile_id: profile.id,
        }),

        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      dispatch(authActions.setList(data));
    } catch (error) {
      console.log(error);
    }
  };

  const getHeroVideo = async () => {
    try {
      const response = await fetch(`http://localhost:5000/api/videos/`);
      const data = await response.json();

      const video = data.videos[Math.floor(Math.random() * data.videos.length)];

      dispatch(authActions.setHeroVideo(video));
    } catch (error) {
      console.log(error);
    }
  };

  const handleEdit = () => {
    handleToggleEdit(profile);
    // setEdit(!edit);
  };
  return (
    <li
      onClick={manage ? handleEdit : handleNavigate}
      className="flex flex-col justify-center items-center rounded-md mr-5 hover:text-white cursor-pointer relative"
    >
      <div className="relative">
        {manage && (
          <div className="absolute bg-[rgb(0,0,0,.7)] w-full h-full border-[3px] border-transparent hover:border-gray-500 rounded hover:border-[3px]"></div>
        )}
        <img
          className="min-w-[84px] min-h-[84px] max-w-[200px] max-h-[200px] w-[10vw] border-[3px] border-transparent rounded-md hover:border-white hover:border-[3px]"
          // src="http://occ-0-3266-444.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABQd4d531rYr0QnH2lEC7omicvIWxQTw1_rx-kENeMVr5DuRh51NtzpJa8GXfVivy7C207tpMW4R7NUMXAJOrt8dZHNszpECL4nre.png?r=8d7"
          // src="http://occ-0-3266-444.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABUCQw1IvyDiBJPtrlwSze4_VHboA_nFifXDHPb_t3yNWLejyn2_aM-tKRSceB8PsxgWe8F37YAK_7cfUn_yROh1ePDCsZ4EE7r8T.png?r=a21p://occ-0-3266-444.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABQd4d531rYr0QnH2lEC7omicvIWxQTw1_rx-kENeMVr5DuRh51NtzpJa8GXfVivy7C207tpMW4R7NUMXAJOrt8dZHNszpECL4nre.png?r=8d7"
          src={profile.image_url}
          alt=""
        ></img>
      </div>
      <span className="sm:mt-3 font-poppins text-center text-gray-500  text-[1.3vw] sm:text-[1.3vw] xs:text-[3vw] text-truncate text-8xl hover:text-white cursor-pointer max-w[100px] w-full max-w-[160px] truncate">
        {name}
      </span>
    </li>
  );
};

export default ProfileCard;
