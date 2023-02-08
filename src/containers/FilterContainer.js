import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "../store/commentsActions";
import Filter from "../components/filter/Filter";
import getTopLevelDomain from "../helpers/urlHelper";

const FilterContainer = () => {
  const comments = useSelector((state) => state.comments);
  const filters = useSelector((state) => state.filter);
  const dispatch = useDispatch();

  const onSetFilter = (item) => {
    dispatch(setFilter(item === filters ? "" : item));
  };

  const filterValues = Array.from(
    new Set(comments.map((comment) => getTopLevelDomain(comment.email)))
  );

  return <Filter data={filterValues} onClick={onSetFilter} filters={filters} />;
};

export default FilterContainer;
