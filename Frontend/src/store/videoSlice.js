import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  videos: [],
  video: null,
};

const videoSlice = createSlice({
  name: "video",
  initialState,
  reducers: {
    getVideos(state, action) {
      state.videos = action.payload;
    },
    getVideo(state, action) {
      state.video = action.payload;
    },
  },
});

export const videoActions = videoSlice.actions;

export default videoSlice;
