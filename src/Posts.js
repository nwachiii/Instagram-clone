import React from "react";

import "./Posts.css";

function Posts() {
  return (
    <div>
      {/* header -> avatar + username */}
      <h1>Username header</h1>

      {/* Image */}
      <img
        className="post__image"
        src="https://images.unsplash.com/photo-1604145559206-e3bce0040e2d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
      />

      {/* username + caption */}
      <h4 className="post__text">
        <strong>Emmanuel</strong> Wow this is a cool view
      </h4>
    </div>
  );
}

export default Posts;
