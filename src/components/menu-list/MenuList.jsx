import React from "react";
import DiffItem from "../difficulty-item/DiffItem";
import { difficulties } from "../utils/fakeDifficulties";
import listStyle from "./menulist.module.css";

const MenuList = ({ handleSelection }) => {
    return (
        <div className={listStyle.root}>
            {difficulties.map((diff) => (
                <DiffItem
                    key={diff.id}
                    difficulty={diff}
                    difficultySelect={handleSelection}
                />
            ))}
        </div>
    );
};

export default MenuList;
