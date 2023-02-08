import { SET_FILTER, SET_COMMENTS, SET_SEARCH_VALUE } from "./constants";

export const setComments = (comments) => {
  return {
    type: SET_COMMENTS,
    payload: comments,
  };
};

export const setFilter = (filter) => {
  return {
    type: SET_FILTER,
    payload: filter,
  };
};

export const setSearchValue = (searchValue) => {
  return {
    type: SET_SEARCH_VALUE,
    payload: searchValue,
  };
};

export const fetchComments = () => (dispatch) => {
  fetch("https://jsonplaceholder.typicode.com/comments")
    .then((res) => {
      if (res.status === 200) return res.json();
      return null;
    })
    .then((comments) => {
      if (comments) return dispatch(setComments(comments));
    })
    .catch((err) => console.error(err));
};
