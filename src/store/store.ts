import { configureStore } from "@reduxjs/toolkit";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { persistStore, persistReducer } from "redux-persist";
import { textReducer } from "./textSlice";

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
};

export const persistedReducer = persistReducer(persistConfig, textReducer);

export const store = configureStore({
  reducer: {
    text: persistedReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
