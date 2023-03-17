import React from "react";

const ProfileForm = ({ profile, image, handleToggleEdit }) => {
  return (
    <div className="w-full h-full absolute border">
      <div>
        <div>
          <h2>Edit Profile</h2>
        </div>
        <div>
          <img src={image} alt="" />
        </div>
        <div>
          <input type="text" value={profile.name} />
        </div>
      </div>
      <div>
        <button> Save </button>
        <button onClick={() => handleToggleEdit(null)}> Cancel </button>
        <button> Delete Profile </button>
      </div>
    </div>
  );
};

export default ProfileForm;
