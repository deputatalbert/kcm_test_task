import React from "react";
import "./Header.css";
import { Menu } from "../menu/Menu";

export const Header = () => {
  return (
    <>
      <div className="header">
        <h1 className="header__title">FILTERED LIST</h1>
      </div>
      <Menu />
    </>
  );
};
