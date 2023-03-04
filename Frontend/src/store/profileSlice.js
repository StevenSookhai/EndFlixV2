import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  profiles: [],
  profile: null,
};

const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    getProfiles(state, action) {
      state.profiles = action.payload;
    },
    getProfile(state, action) {
      state.profile = action.payload;
    },
  },
});

export const profileActions = profileSlice.actions;

export default profileSlice;
