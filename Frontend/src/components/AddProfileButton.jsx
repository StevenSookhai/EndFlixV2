import React from "react";

const AddProfileButton = ({ handleAddProfile }) => {
  return (
    <li
      onClick={handleAddProfile}
      className="flex flex-col justify-center items-center rounded-md hover:text-white cursor-pointer"
    >
      <img
        className="min-w-[84px] min-h-[84px] max-w-[200px] max-h-[200px] w-[10vw] border-[3px] border-transparent rounded-md hover:border-white hover:border-[3px]  "
        src="http://occ-0-3266-444.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABUCQw1IvyDiBJPtrlwSze4_VHboA_nFifXDHPb_t3yNWLejyn2_aM-tKRSceB8PsxgWe8F37YAK_7cfUn_yROh1ePDCsZ4EE7r8T.png?r=a21p://occ-0-3266-444.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABQd4d531rYr0QnH2lEC7omicvIWxQTw1_rx-kENeMVr5DuRh51NtzpJa8GXfVivy7C207tpMW4R7NUMXAJOrt8dZHNszpECL4nre.png?r=8d7"
        alt=""
      />
      <span className="sm:mt-3 font-poppins text-center text-gray-500  text-[1.3vw] sm:text-[1.3vw] xs:text-[3vw] text-truncate text-8xl hover:text-white cursor-pointer">
        Add Profile
      </span>
    </li>
  );
};

export default AddProfileButton;
