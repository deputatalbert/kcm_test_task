import { SET_FILTER, SET_COMMENTS, SET_SEARCH_VALUE } from "./constants";

const initialState = {
  comments: [],
  filter: "",
  searchValue: "",
};

const commentsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_COMMENTS:
      return {
        ...state,
        comments: action.payload,
      };
    case SET_FILTER:
      return {
        ...state,
        filter: action.payload,
      };
    case SET_SEARCH_VALUE:
      return {
        ...state,
        searchValue: action.payload,
      };
    default:
      return state;
  }
};

export default commentsReducer;
