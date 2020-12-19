import React, { useState, useEffect } from "react";
import Posts from "./Posts";
import "./App.css";
import { db } from "./firebase";

function App() {
  const [posts, setPosts] = useState([]);

  //UseEffect -> runs a piece of code based on a specific condition
  //onSnapshot -> listens and fires for anytime a document(post) is added, removed, or gets modified

  useEffect(() => {
    db.collection("posts").onSnapshot((snapshot) => {
      console.log(snapshot);
      setPosts(snapshot.docs.map((doc) => doc.data()));
    });
  }, []);

  return (
    <div className="App">
      <div className="app__header">
        <img
          className="app__headerImage"
          src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
          alt=""
        />
      </div>

      {posts.map((post) => {
        return (
          <Posts
            username={post.username}
            caption={post.caption}
            imageUrl={post.imageUrl}
          />
        );
      })}
    </div>
  );
}

export default App;
