import React, { useContext } from "react";
import ThemeModeContext from "../contexts/ThemeModeContext";

const Level5 = () => {
  const { themeMode, setThemeMode } = useContext(ThemeModeContext);

  function toggleThemeAction() {
    setThemeMode(themeMode === "light" ? "dark" : "light");
  }
  return (
    <>
      <div>Level5 | Toggle theme</div>;
      <button onClick={toggleThemeAction}>ToggleTheme</button>
    </>
  );
};

export default Level5;
