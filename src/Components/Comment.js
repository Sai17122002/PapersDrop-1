import React from "react";
import "./Comment.css";
import randomColor from "randomcolor";

function Comment(props) {
  const border = props.isHighlighted ? `3px solid ${randomColor()}` : "none";
  return (
    <div className="comment-parent">
      <div
        style={{
          background: randomColor(),
          border: border,
        }}
        className="comment-image"
      ></div>
      <div className="comment-details">
        <div className="name-month">
          <p className="name">{props.name}</p>
          <p className="month">{props.month} months ago</p>
        </div>
        <div className="content">{props.post}</div>
      </div>
    </div>
  );
}

export default Comment;
