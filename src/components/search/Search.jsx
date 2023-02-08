import React, { useState } from "react";
import { FilterLabel } from "../../elements/FilterLabel/FilterLabel";
import "./Search.css";

const Search = ({ onHandleNameChange }) => {
  const [name, setName] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
    onHandleNameChange(e.target.value);
  };

  return (
    <div className="search">
      <FilterLabel text="Search" />
      <input
        className="search__input"
        placeholder="Enter Name"
        value={name}
        onChange={(e) => handleNameChange(e)}
      />
    </div>
  );
};

export default Search;
