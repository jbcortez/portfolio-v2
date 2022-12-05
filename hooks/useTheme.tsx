import React, { useEffect, useState } from "react";
import { useAppSelector } from "../redux/reduxHooks";
import { Theme } from "../types";
import { DarkTheme, LightTheme } from "../theme";

const useTheme = () => {
  const themeState = useAppSelector((state) => state.site.theme);
  const [theme, setTheme] = useState<Theme>();

  useEffect(() => {
    if (themeState === "light") {
      setTheme(LightTheme);
    } else {
      setTheme(DarkTheme);
    }
  }, [themeState]);

  return theme;
};

export default useTheme;
