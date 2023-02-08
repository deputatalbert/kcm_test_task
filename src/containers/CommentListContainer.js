import React from "react";
import { connect } from "react-redux";
import CommentList from "../components/commentList/CommentList";

const CommentListContainer = ({ comments, filter, searchValue }) => {
  const filteredComments = comments.filter((comment) => {
    return (
      comment.email.includes(filter) &&
      comment.name.toLowerCase().includes(searchValue.toLowerCase())
    );
  });

  return <CommentList comments={filteredComments} />;
};

const mapStateToProps = (state) => ({
  comments: state.comments,
  filter: state.filter,
  searchValue: state.searchValue,
});

export default connect(mapStateToProps)(CommentListContainer);
