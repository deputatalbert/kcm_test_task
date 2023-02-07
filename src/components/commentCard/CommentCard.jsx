import React from "react";
import "./CommentCard.css";

const CommentCard = ({ name, email, body }) => (
  <div className="comment-card">
    <h2 className="comment-card__name">{name}</h2>
    <p className="comment-card__email">{email}</p>
    <p className="comment-card__body">{body}</p>
  </div>
);

export default CommentCard;
