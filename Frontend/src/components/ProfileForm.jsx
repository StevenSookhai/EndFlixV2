import React from "react";

const ProfileForm = ({ profile, image, handleToggleEdit }) => {
  return (
    <div className="flex flex-col items-center mt-[10%] overflow-y-auto">
      <div className="flex items-start justify-start w-[70%] border-b border-gray-500">
        <h2 className="text-[40px] font-poppins ">Edit Profile</h2>
      </div>
      <div className="flex w-[70%] mt-[2.5vh] border-b border-gray-500 pb-[2.5vh]">
        <div className="mr-[30px]">
          <img
            className="min-w-[84px] min-h-[84px] max-w-[300px] max-h-[300px] w-[15vw] border-[3px] border-transparent rounded-md"
            src={image}
            alt=""
          />
        </div>
        <div className="w-full flex justify-start items-center">
          <input
            className="xs:h-[50px] sm:h-[50px] w-full pl-5 font-poppins text-[20px] rounded-md "
            type="text"
            value={profile.name}
          />
        </div>
      </div>
      <div className="mt-[3vh] w-[70%] flex gap-5 ">
        <div className="mt-[2em] pr-[1.5em] pl-[1.5em] bg-white cursor-pointer hover:bg-[#E50914] flex justify-center items-center h-[40px] sm:h-[40px] max-w-[120px] text-black font-poppins font-bold hover:text-white text-center">
          Save
        </div>
        <div
          onClick={() => handleToggleEdit(null)}
          className="mt-[2em] pr-[1.5em] pl-[1.5em] w-full border-gray-500 border-solid border-[1px] cursor-pointer hover:border-white  h-[40px] sm:h-[40px] max-w-[120px] text-center items-center justify-center flex text-gray-500 hover:text-white font-poppins"
        >
          Cancel
        </div>
        <div className="mt-[2em] w-full border-gray-500 border-solid border-[1px] cursor-pointer hover:border-white  h-[40px] sm:h-[40px] min-w-[120px] max-w-[150px] text-center items-center justify-center flex text-gray-500 hover:text-white font-poppins">
          Delete Profile
        </div>
      </div>
    </div>
  );
};

export default ProfileForm;
