import { isItemInteractive } from "../redux/siteSlice";
import { Dispatch } from "redux";

export const handleIsInteractive = (dispatch: Dispatch, value: boolean) => {
  dispatch(isItemInteractive(value));
};
