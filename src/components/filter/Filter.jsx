import React from "react";
import cn from "classnames";
import { FilterLabel } from "../../elements/FilterLabel/FilterLabel";
import "./Filter.css";
// TODO: нет propTypes
const Filter = ({ data, onClick, filters }) => {
  // TODO: было бы не плохо множественный выбор добавить
  return (
    <div className="filter">
      <FilterLabel text="Show only" />
      <div className="filter-buttons__list">
        {data.map((item) => (
          <button
            className={cn("filter-button", {
              active: item === filters,
            })}
            key={item}
            onClick={() => onClick(item)}
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Filter;
