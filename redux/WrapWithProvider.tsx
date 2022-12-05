import React from "react";
import { store } from "./store";
import { Provider } from "react-redux";

interface Props {
  children?: React.ReactNode;
}

const WrapWithProvider: React.FC<Props> = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};

export default WrapWithProvider;
