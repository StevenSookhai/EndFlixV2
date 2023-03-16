import React from "react";

const ProfileCard = ({ profile, id, name, image }) => {
  //   console.log(name);
  //   console.log(profile);
  return (
    <li className="flex flex-col justify-center items-center rounded-md mr-5">
      <img
        className="min-w-[84px] min-h-[84px] max-w-[200px] max-h-[200px] w-[10vw] rounded-md"
        src="http://occ-0-3266-444.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABQd4d531rYr0QnH2lEC7omicvIWxQTw1_rx-kENeMVr5DuRh51NtzpJa8GXfVivy7C207tpMW4R7NUMXAJOrt8dZHNszpECL4nre.png?r=8d7"
        alt=""
      />
      <span>{name}</span>
    </li>
  );
};

export default ProfileCard;
