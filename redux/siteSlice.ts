import { createSlice } from "@reduxjs/toolkit";
import { ThemeType } from "../types";

export interface SiteState {
  showNav: boolean;
  theme: ThemeType;
  interactiveItem: boolean;
  navExitAnimation: boolean;
}

const initialState: SiteState = {
  showNav: false,
  theme: "dark",
  interactiveItem: false,
  navExitAnimation: false,
};

export const siteSlice = createSlice({
  name: "site",
  initialState,
  reducers: {
    setShowNav: (state, action: { payload: { showNav: boolean } }) => {
      state.showNav = action.payload.showNav;
    },
    setTheme: (state, action: { payload: { theme: ThemeType } }) => {
      state.theme = action.payload.theme;
    },
    isItemInteractive: (state, action: { payload: boolean }) => {
      state.interactiveItem = action.payload;
    },
    showNavExitAnimation: (
      state,
      action: { payload: { showNavExitAnimation: boolean } }
    ) => {
      state.navExitAnimation = action.payload.showNavExitAnimation;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setShowNav, setTheme, isItemInteractive, showNavExitAnimation } =
  siteSlice.actions;

export default siteSlice.reducer;
