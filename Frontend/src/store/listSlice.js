import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  list: [],
};

const listSlice = createSlice({
  name: "list",
  initialState,
  reducers: {
    getList(state, action) {
      state.list = action.payload;
    },
  },
});

export const listActions = listSlice.actions;

export default listSlice;
