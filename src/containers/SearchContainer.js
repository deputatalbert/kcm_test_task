import React from "react";
import { useDispatch } from "react-redux";
import { setSearchValue } from "../store/commentsActions";
import Search from "../components/search/Search";

const SearchContainer = () => {
  const dispatch = useDispatch();

  const onHandleNameChange = (value) => {
    dispatch(setSearchValue(value));
  };

  return <Search onHandleNameChange={onHandleNameChange} />;
};

export default SearchContainer;
