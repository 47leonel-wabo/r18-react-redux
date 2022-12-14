import React from "react";
import itemStyle from "./item.module.css";

const DiffItem = ({ difficulty, difficultySelect, isSelected }) => {
  return (
    <div
      className={itemStyle.item}
      style={isSelected ? { background: "goldenrod" } : {}}
      onClick={() => difficultySelect(difficulty)}
    >
      <span>Set to: {difficulty.name}</span>
    </div>
  );
};

export default DiffItem;
