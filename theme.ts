import { Spacing, Theme } from "./types";

const spacer = 1;

const spacing: Spacing = {
  0: "0",
  1: spacer * 0.25 + "rem",
  2: spacer * 0.5 + "rem",
  3: spacer + "rem",
  4: spacer * 1.5 + "rem",
  5: spacer * 2 + "rem",
  6: spacer * 3 + "rem",
  7: spacer * 4.5 + "rem",
  8: spacer * 6 + "rem",
  9: spacer * 9 + "rem",
  10: spacer * 12 + "rem",
  11: spacer * 15 + "rem",
};

export const LightTheme: Theme = {
  colors: {
    primary: "#242424",
    secondary: "#a2ceff",
    tertiary: "rgb(242,255,15)",
  },
  spacing: { ...spacing },
};

export const DarkTheme: Theme = {
  colors: {
    primary: "#FFF2E3",
    secondary: "#0a4372",
    tertiary: "rgb(255,205,130)",
  },
  spacing: { ...spacing },
};
