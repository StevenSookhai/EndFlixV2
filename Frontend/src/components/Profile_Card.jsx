import React from "react";
import { useState } from "react";
import ProfileForm from "./ProfileForm";

const ProfileCard = ({
  profile,
  id,
  name,
  image,
  manage,
  handleToggleEdit,
}) => {
  //   console.log(name);
  //   console.log(profile);
  const [edit, setEdit] = React.useState(false);

  const handleEdit = () => {
    handleToggleEdit(profile);
    // setEdit(!edit);
  };
  return (
    <li
      onClick={manage ? handleEdit : null}
      className="flex flex-col justify-center items-center rounded-md mr-5 hover:text-white cursor-pointer relative"
    >
      <div className="relative">
        {manage && (
          <div className="absolute bg-[rgb(0,0,0,.7)] w-full h-full border-[3px] border-transparent hover:border-gray-500 rounded hover:border-[3px]"></div>
        )}
        <img
          className="min-w-[84px] min-h-[84px] max-w-[200px] max-h-[200px] w-[10vw] border-[3px] border-transparent rounded-md hover:border-white hover:border-[3px]"
          src="http://occ-0-3266-444.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABQd4d531rYr0QnH2lEC7omicvIWxQTw1_rx-kENeMVr5DuRh51NtzpJa8GXfVivy7C207tpMW4R7NUMXAJOrt8dZHNszpECL4nre.png?r=8d7"
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
