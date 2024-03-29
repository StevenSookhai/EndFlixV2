import { combineReducers, configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice";
import videoSlice from "./videoSlice";
import profileSlice from "./profileSlice";
import listSlice from "./listSlice";
import videoModalSlice from "./videoModal";

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

// const store = configureStore({
//   reducer: {
//     auth: authSlice.reducer,
//     video: videoSlice.reducer,
//     profile: profileSlice.reducer,
//     list: listSlice.reducer,
//   },
// });

const persistConfig = {
  key: "root",
  version: 1,
  storage,
  whitelist: ["auth"], // only auth will be persisted
};

const rootReducer = combineReducers({
  auth: authSlice.reducer,
  video: videoSlice.reducer,
  profile: profileSlice.reducer,
  list: listSlice.reducer,
  videoModal: videoModalSlice.reducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

export default store;
