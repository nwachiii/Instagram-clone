import React from "react";
import Avatar from "@material-ui/core/Avatar";
import "./Posts.css";

function Posts({ username, caption, imageUrl }) {
  return (
    <div className="post">
      {/* header -> avatar + username */}
      <div className="post__header">
        <Avatar
          className="post__avatar"
          alt={username}
          src="././public/profile-img.png"
        />
        <h3>{username}</h3>
      </div>
      {/* Image */}
      <img className="post__image" src={imageUrl} alt={username} />

      {/* username + caption */}
      <h4 className="post__text">
        <strong>{username}: </strong> {caption}
      </h4>
    </div>
  );
}

export default Posts;
