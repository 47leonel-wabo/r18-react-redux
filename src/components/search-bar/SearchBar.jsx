import React from "react";
import { Search } from "react-bootstrap-icons";
import style from "./search.module.css";

const SearchBar = ({ handleChange }) => {
  return (
    <div className={`${style.container}`}>
      <Search />
      <input
        type={`text`}
        className={`${style.in}`}
        onChange={handleChange}
        placeholder="Search note by keywords"
      />
    </div>
  );
};

export default SearchBar;
