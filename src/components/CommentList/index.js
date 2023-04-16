import React from "react";
import Comment from "../Comment";

const Newcomments = [
  {
    id: "jFyGAKz1VsGputO1gV8xa",
    author: "Kyle Williams",
    content: "Best CAR in the WORLD!",
  },
  {
    id: "yGAKzjF1VsGputO1gV8ax",
    author: "Chris Meah",
    content: "Many thank yous",
  },
];

function CommentList() {
  return (
    <div>
      <ul>
        {Newcomments.map((author, index) => (
          <Comment key={index} author={author} />
        ))}
      </ul>
    </div>
  );
}

export default CommentList;
