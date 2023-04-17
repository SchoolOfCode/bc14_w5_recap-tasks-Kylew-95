import React from "react";

import "./commentstyle.css";

function Comment(props) {
  const { author, content } = props;

  let initials = author
    // Split the author string into an array of names
    // Then for any name in the array get the first char and start with the inital index.
    // Then join any uppercase letters together
    .split(" ")
    .map((name, index) => name.charAt(0))
    .join("")
    .toUpperCase();

  return (
    <div className="comment">
      <div className="initials">{initials}</div>
      <div className="details">
        <div id="author">{author}</div>
        <div id="com-content">{content}</div>
      </div>
    </div>
  );
}

export default Comment;
