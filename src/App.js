import { useState } from "react";
import Diff from "./components/difficulty-detail/Diff";
import MenuList from "./components/menu-list/MenuList";
import appStyle from "./style.module.css";

function App() {
  const [currentDifficulty, setCurrentDifficulty] = useState(null);

  const handleDifficultySelection = (difficulty) => {
    setCurrentDifficulty(difficulty);
  };
  return (
    <div className={appStyle.appRoot}>
      <h2 className={appStyle.title}>Choose your React course difficulty</h2>
      <div className={appStyle.content}>
        <MenuList
          current={currentDifficulty}
          handleSelection={handleDifficultySelection}
        />
        <Diff diff={currentDifficulty} />
      </div>
    </div>
  );
}

export default App;
