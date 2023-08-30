import { configureStore } from "@reduxjs/toolkit";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { persistStore, persistReducer } from "redux-persist";
import { textReducer } from "./textSlice";
import { listReducer } from "./listSlice";
import { themeColorApp } from "./themeColorSlice";

const textPersistConfig = {
  key: "text",
  storage: AsyncStorage,
};

const listPersistConfig = {
  key: "list",
  storage: AsyncStorage,
};

const themeColorPersistConfig = {
  key: "themeColor",
  storage: AsyncStorage,
};


export const persistedTextReducer = persistReducer(textPersistConfig, textReducer);
export const persistedListReducer = persistReducer(listPersistConfig, listReducer);
export const persistedThemeColorReducer = persistReducer(
  themeColorPersistConfig,
  themeColorApp
);


export const store = configureStore({
  reducer: {
    text: persistedTextReducer,
    list: persistedListReducer,
    themeColor: persistedThemeColorReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});


export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
