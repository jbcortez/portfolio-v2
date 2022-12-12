import { isItemInteractive } from "../redux/siteSlice";
import { Dispatch } from "redux";

// Used for changing size of CursorOrnament
export const handleIsInteractive = (dispatch: Dispatch, value: boolean) => {
  dispatch(isItemInteractive(value));
};
