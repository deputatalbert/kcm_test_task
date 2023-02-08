import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { Header } from "./components/header/Header";
import { fetchComments } from "./store/commentsActions";
import { setFilter } from "./store/commentsActions";
import CommentListContainer from "./containers/CommentListContainer";
import "./App.css";

const App = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const filters = useSelector((state) => state.filter);
  const dispatch = useDispatch();

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const filterFromURL = queryParams.get("filter");

    if (filterFromURL) {
      dispatch(setFilter(filterFromURL));
    }
  }, [location, setFilter]);

  useEffect(() => {
    dispatch(fetchComments());
  }, [fetchComments]);

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    queryParams.set("filter", filters);
    navigate("/?" + queryParams.toString(), { replace: true });
  }, [filters]);

  return (
    <div className="page">
      <Header />
      <CommentListContainer />
    </div>
  );
};

export default App;
