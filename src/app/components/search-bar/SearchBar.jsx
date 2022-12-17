import React, { useState } from "react";
import { Search } from "react-bootstrap-icons";
import style from "./search.module.css";

const SearchBar = ({ handleChange }) => {
  const [inputValue, setInputValue] = useState("");

  function inputChange(event) {
    setInputValue(event.target.value);
  }

  const handleKeyUp = (event) => {
    if (inputValue.trim().length >= 3 && event.key === "Enter") {
      handleChange(inputValue);
      setInputValue("");
    }
  };

  return (
    <div className={style.container}>
      <div className={style.search}>
        <Search />
      </div>
      <input
        className={style.inputSearch}
        value={inputValue}
        onKeyUp={handleKeyUp}
        onChange={inputChange}
        placeholder={`Search TV show you may like`}
        type="text"
      />
    </div>
  );
};

export default SearchBar;
