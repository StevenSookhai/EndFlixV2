import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

const initialState = {
  user: null,
  token: null,
  isAuthenticated: false,
  profile: null,
  list: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login(state, action) {
      state.user = action.payload;
      state.isAuthenticated = true;
    },
    logout(state) {
      state.user = null;
      state.isAuthenticated = false;
      state.token = null;
      state.profile = null;
      state.list = null;
    },
    setProfile(state, action) {
      state.profile = action.payload;
    },
    setList(state, action) {
      state.list = action.payload;
    },
    authenticate(state, action) {},
  },
});

export const authActions = authSlice.actions;

export default authSlice;
