import React from "react";
import CommentCard from "../commentCard/CommentCard";
import "./CommentList.css";

const CommentList = ({ comments }) => {
  return (
    <div className="comments-list">
      {comments.map((comment) => (
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

export default CommentList;
