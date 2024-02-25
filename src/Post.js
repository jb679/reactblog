// Post.js
import React from "react";
import "./Post.css";

const Post = ({ username, content, timestamp }) => {
  return (
    <div className="post">
      <p className="post-username">{username}</p>
      <p className="post-message">{content}</p>
      <p className="post-timestamp">{timestamp}</p>
    </div>
  );
};

export default Post;
