import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ThemeColor } from "../types/global";
import { colorTheme } from "../utils/constants";

const initialState: ThemeColor = colorTheme[0];

const themeColorSlice = createSlice({
  name: "themeColor",
  initialState,
  reducers: {
    setThemeColor(state, action: PayloadAction<ThemeColor>) {
      return action.payload;
    },
    resetThemeColor() {
      return initialState;
    },
  },
});

export const { setThemeColor, resetThemeColor } = themeColorSlice.actions;

export const themeColorApp = themeColorSlice.reducer;
