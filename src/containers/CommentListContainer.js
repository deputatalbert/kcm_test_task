import React from "react";
import { useSelector } from "react-redux";
import CommentList from "../components/commentList/CommentList";

const CommentListContainer = () => {
  const comments = useSelector((state) => state.comments);
  const filters = useSelector((state) => state.filter);
  const searchValue = useSelector((state) => state.searchValue);

  const filteredComments = comments.filter((comment) => {
    return (
      comment.email.includes(filters) &&
      comment.name.toLowerCase().includes(searchValue.toLowerCase())
    );
  });

  return <CommentList comments={filteredComments} />;
};

export default CommentListContainer;
