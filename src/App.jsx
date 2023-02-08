import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { Header } from "./components/header/Header";
import { fetchComments } from "./store/commentsActions";
import { setFilter } from "./store/commentsActions";
import CommentListContainer from "./containers/CommentListContainer";
import "./App.css";

const App = ({ fetchComments, filter, setFilter }) => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const filterFromURL = queryParams.get("filter");

    if (filterFromURL) {
      setFilter(filterFromURL);
    }
  }, [location, setFilter]);

  useEffect(() => {
    fetchComments();
  }, [fetchComments]);

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    queryParams.set("filter", filter);
    navigate("/?" + queryParams.toString(), { replace: true });
  }, [filter]);

  return (
    <div className="page">
      <Header />
      <CommentListContainer />
    </div>
  );
};

const mapStateToProps = (state) => ({
  filter: state.filter,
});

const mapDispatchToProps = {
  fetchComments,
  setFilter,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
