import { createContext } from "react";

const ThemeModeContext = createContext("light");

export const THEMES = {
  light: {
    textColor: "#3e3e3e",
    bgColor: "white",
  },
  dark: {
    textColor: "white",
    bgColor: "#3e3e3e",
  },
};

export default ThemeModeContext;
