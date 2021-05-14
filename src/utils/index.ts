import { COLORS } from "../constants";

export const generateTodoBG = (darkMode: boolean) => {
  return darkMode
    ? COLORS.dark.veryDarkDesaturatedBlue
    : COLORS.light.veryLightGray;
};

export const generateTextColor = (darkMode: boolean) => {
  return darkMode
    ? COLORS.dark.lightGrayishBlue
    : COLORS.light.veryDarkGrayishBlue;
};

export const generateMainBG = (darkMode: boolean) => {
  return darkMode ? COLORS.dark.veryDarkBlue : COLORS.light.lightGrayishBlue;
};
