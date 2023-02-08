import React from "react";
import SearchContainer from "../../containers/SearchContainer";
import FilterContainer from "../../containers/FilterContainer";
import "./Menu.css";

export const Menu = () => {
  return (
    <div className="menu">
      <SearchContainer />
      <FilterContainer />
    </div>
  );
};
