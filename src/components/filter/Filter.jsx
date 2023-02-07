import React from "react";
import { connect } from "react-redux";
import cn from "classnames";
import { FilterLabel } from "../../elements/FilterLabel/FilterLabel";
import { setFilter } from "../../store/commentsActions";
import "./Filter.css";

const getTopLevelDomain = (email) => {
  const domainPattern = /@(.+)/;
  const domain = domainPattern.exec(email)[1];
  return domain.slice(domain.lastIndexOf("."));
};

const Filter = ({ comments, setFilter, filter }) => {
  const filterValues = Array.from(
    new Set(comments.map((comment) => getTopLevelDomain(comment.email)))
  );

  return (
    <div className="filter">
      <FilterLabel text="Show only" />
      <div className="filter-buttons__list">
        {filterValues.map((item) => (
          <button
            className={cn("filter-button", {
              active: item === filter,
            })}
            key={item}
            onClick={() => setFilter(item === filter ? "" : item)}
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  comments: state.comments,
  filter: state.filter,
});

const mapDispatchToProps = {
  setFilter,
};

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
