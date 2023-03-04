import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice";
import videoSlice from "./videoSlice";
import profileSlice from "./profileSlice";
import listSlice from "./listSlice";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { PersistGate } from "redux-persist/integration/react";

const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    video: videoSlice.reducer,
    profile: profileSlice.reducer,
    list: listSlice.reducer,
  },
});

export default store;
