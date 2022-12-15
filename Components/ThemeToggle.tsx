import React from "react";
import styled from "styled-components";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import { useAppDispatch, useAppSelector } from "../redux/reduxHooks";
import { setTheme } from "../redux/siteSlice";

const ThemeToggle = () => {
  const themeMode = useAppSelector((state) => state.site.theme);
  const dispatch = useAppDispatch();

  const toggleTheme = () => {
    if (themeMode === "dark") {
      dispatch(setTheme({ theme: "light" }));
    } else {
      dispatch(setTheme({ theme: "dark" }));
    }
  };
  return (
    <Button aria-label={"Toggle theme"} onClick={toggleTheme}>
      {themeMode === "dark" ? (
        <DarkModeIcon style={{ color: "inherit", fontSize: "inherit" }} />
      ) : (
        <LightModeIcon style={{ color: "inherit", fontSize: "inherit" }} />
      )}
    </Button>
  );
};

export default ThemeToggle;

const Button = styled.button`
  font-size: 2.8rem;
  color: ${(props) => props.theme.colors.primary};
  cursor: pointer;
  background: none;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
`;
