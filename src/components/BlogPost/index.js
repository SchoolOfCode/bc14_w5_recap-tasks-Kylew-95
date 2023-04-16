import "./blogstyle.css";

function BlogPost({ blog }) {
  return (
    <div className="blog">
      <div className="title-container">
        <h1>{blog.title}</h1>
        <h2>by {blog.author}</h2>
        <p id="date">Posted on {blog.datePosted}</p>
      </div>
      <img src={blog.imageSrc} alt={blog.imageAlt} />
      <p id="altTag">{blog.imageAlt}</p>
      <div className="post-container">
      <h3>My Post:</h3>
        <p id="content">{blog.content}</p>
      </div>
    </div>
  );
}

export default BlogPost;
