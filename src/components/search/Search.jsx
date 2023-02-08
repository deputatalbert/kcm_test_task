import React, { useState } from "react";
import { connect } from "react-redux";
import { FilterLabel } from "../../elements/FilterLabel/FilterLabel";
import { setSearchValue } from "../../store/commentsActions";

import "./Search.css";
const Search = ({ setSearchValue }) => {
  const [name, setName] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
    setSearchValue(e.target.value);
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

const mapStateToProps = (state) => ({
  searchValue: state.searchValue,
});

const mapDispatchToProps = {
  setSearchValue,
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
