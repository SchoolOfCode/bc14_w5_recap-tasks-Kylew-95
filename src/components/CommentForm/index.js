import { useState } from "react";
import "./commentformstyle.css";
// import Comment from '../Comment';

function CommentForm() {
  const [authorName, setAuthorName] = useState("");
  const [comment, setComment] = useState("");

  return (
    <form className="inputForm">
      <div>
        <label className="authorInput">Author</label>
        <input type="text" value={authorName} />
      </div>
      <div>
        <label className="commentInput">Comment</label>
        <textarea value={comment} />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default CommentForm;
