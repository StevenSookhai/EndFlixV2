import { combineReducers, configureStore } from "@reduxjs/toolkit";
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
