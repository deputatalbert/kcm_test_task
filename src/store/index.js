import { createStore, applyMiddleware, compose } from "redux";
import commentsReducer from "./commentsReducer";
import thunk from "redux-thunk";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  commentsReducer,
  composeEnhancers(applyMiddleware(thunk))
);

export default store;
