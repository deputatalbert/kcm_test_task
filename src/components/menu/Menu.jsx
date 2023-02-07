import React from "react";
import Search from "../search/Search";
import Filter from "../filter/Filter";
import "./Menu.css";

export const Menu = () => {
  return (
    <div className="menu">
      <Search />
      <Filter />
    </div>
  );
};
