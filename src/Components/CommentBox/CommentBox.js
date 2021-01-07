import React, { useState, useEffect } from "react";
import firebase from "firebase";
import { db } from "../../firebase";
import "./CommentBox.css";

const CommentBox = ({ postId, user }) => {
  const [comments, setComments] = useState([]); //posted comments
  const [comment, setComment] = useState(""); // each unique post

  useEffect(() => {
    let unsubscribe;
    if (postId) {
      unsubscribe = db
        .collection("posts")
        .doc(postId)
        .collection("comments")
        .orderBy("timestamp", "desc")
        .onSnapshot((snapshot) => {
          setComments(snapshot.docs.map((doc) => doc.data()));
        });
    }
    return () => {
      unsubscribe();
    };
  }, [postId]);

  const postComment = (event) => {
    // Submits comments of specific post in database
    event.preventDefault();
    db.collection("posts").doc(postId).collection("comments").add({
      text: comment,
      username: user.displayName,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setComment("");
  };

  return (
    <>
      <div className="post__comments">
        {comments.map((comment) => (
          <p>
            <strong>{comment.username}</strong>
            {comment.text}
          </p>
        ))}
      </div>
      {/* Only allow logged in users post comments */}
      {user && (
        <form className="post__commentBox">
          <input
            className="comment__text"
            type="text"
            placeholder="Add a comment..."
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />

          <button
            className="comment__btn"
            disabled={!comment}
            type="submit"
            onClick={postComment}
          >
            Post
          </button>
        </form>
      )}
    </>
  );
};

export default CommentBox;
