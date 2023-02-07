import React from "react";
import CommentCard from "../commentCard/CommentCard";
import { connect } from "react-redux";
import "./CommentList.css";

const CommentList = ({ comments, filter, searchValue }) => {
  const filteredComments = comments.filter((comment) => {
    return (
      comment.email.includes(filter) &&
      comment.name.toLowerCase().includes(searchValue.toLowerCase())
    );
  });

  return (
    <div className="comments-list">
      {filteredComments.map((comment) => (
        <CommentCard
          key={comment.id}
          name={comment.name}
          email={comment.email}
          body={comment.body}
        />
      ))}
    </div>
  );
};

const mapStateToProps = (state) => ({
  comments: state.comments,
  filter: state.filter,
  searchValue: state.searchValue,
});

export default connect(mapStateToProps)(CommentList);
