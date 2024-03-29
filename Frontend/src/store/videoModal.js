import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  video: null,
  videoPos: null,
  showCard: false,
  showVideoModal: false,
};

const videoModalSlice = createSlice({
  name: "videoModal",
  initialState,
  reducers: {
    showCard(state, action) {
      state.video = action.payload.movie;
      state.videoPos = action.payload.pos;
      state.showCard = true;
    },
    hideCard(state) {
      state.video = null;
      state.videoPos = null;
      state.showCard = false;
      // state.showVideoModal = false;
    },
    showModal(state) {
      state.showVideoModal = true;
      state.showCard = false;
    },
    hideModal(state) {
      state.showVideoModal = false;
    },
  },
});

export const videoModalActions = videoModalSlice.actions;

export default videoModalSlice;
