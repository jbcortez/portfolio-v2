import {
  isItemInteractive,
  setShowNav,
  showNavExitAnimation,
} from "../redux/siteSlice";
import { Dispatch } from "redux";
import { NAV_ANIMATION_DURATION } from "./enums";

// Used for changing size of CursorOrnament
export const handleIsInteractive = (dispatch: Dispatch, value: boolean) => {
  dispatch(isItemInteractive(value));
};

export const handleNavMenu = (dispatch: Dispatch, showNav: boolean) => {
  if (showNav) {
    dispatch(showNavExitAnimation({ showNavExitAnimation: true }));
    setTimeout(() => {
      dispatch(setShowNav({ showNav: false }));
      dispatch(showNavExitAnimation({ showNavExitAnimation: false }));
    }, NAV_ANIMATION_DURATION);
  } else {
    setTimeout(() => {
      dispatch(setShowNav({ showNav: true }));
    }, NAV_ANIMATION_DURATION);
  }
};
