import React, { useState } from "react";
import { Search } from "react-bootstrap-icons";
import style from "./search.module.css";

const SearchBar = ({ handleChange }) => {
  const [inputValue, setInputValue] = useState("");

  function inputChange(event) {
    setInputValue(event.target.value);
    if (event.key === "enter_command") {
      if (inputValue.trim().length > 6) {
        handleChange(inputValue);
        setInputValue("");
      }
    }
  }

  return (
    <div className={style.container}>
      <div className={style.search}>
        <Search />
      </div>
      <input
        className={style.inputSearch}
        value={inputValue}
        onChange={inputChange}
        placeholder={`Search TV show you may like`}
        type="text"
      />
    </div>
  );
};

export default SearchBar;
