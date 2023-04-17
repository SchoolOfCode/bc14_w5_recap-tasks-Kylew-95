import React from "react";
import Comment from "../Comment";

function CommentList({ comments }) {
  return (
    <div>
      <h3 id="com-h3">Comments:</h3>
      <ul>
        {comments.map((comment, index) => (
          <Comment
            key={comment.id}
            author={comment.author}
            content={comment.content}
          />
        ))}
      </ul>
    </div>
  );
}

export default CommentList;
