import { useContext, useState } from "react";
import "./App.css";
import Level1 from "./components/Level1";
import ThemeModeContext, { THEMES } from "./contexts/ThemeModeContext";

function App() {
  const initialThemeMode = useContext(ThemeModeContext);
  const [themeMode, setThemeMode] = useState(initialThemeMode);

  return (
    <ThemeModeContext.Provider value={{ themeMode, setThemeMode }}>
      <div
        className="App"
        style={{
          backgroundColor: THEMES[themeMode].bgColor,
          color: THEMES[themeMode].textColor,
          height: "100vh",
        }}
      >
        <Level1 />
      </div>
    </ThemeModeContext.Provider>
  );
}

export default App;
