import React from "react";
import itemStyle from "./item.module.css";

const DiffItem = ({ difficulty, difficultySelect }) => {
    return (
        <div
            className={itemStyle.item}
            onClick={() => difficultySelect(difficulty)}
        >
            <span>Set to: {difficulty.name}</span>
        </div>
    );
};

export default DiffItem;
