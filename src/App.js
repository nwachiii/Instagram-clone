import { useState, React } from "react";
import Posts from "./Posts";
import "./App.css";

function App() {
  const [posts, setPosts] = useState([
    {
      username: "Happy Family",
      caption: "Classy Bougie Catchy",
      imageUrl:
        "https://images.unsplash.com/photo-1484712401471-05c7215830eb?ixlib:rb-1.2.1&ixid:MXwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTF8fHxlbnwwfHx8&auto:format&fit:crop&w:500&q:60",
    },
    {
      username: "Echelon Agency",
      caption: "Workflow strategy for productive marketing",
      imageUrl:
        "https://images.unsplash.com/photo-1533749871411-5e21e14bcc7d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTB8fG1hcmtldGluZ3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    },
    {
      username: "ChessChampions_Chicago",
      caption: "The game for the intellectuals",
      imageUrl:
        "https://images.unsplash.com/flagged/photo-1570551502611-c590dc45f644?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NHx8Y2hlc3N8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    },
    {
      username: "Jane Stone",
      caption: "Smile Regardless",
      imageUrl:
        "https://images.unsplash.com/photo-1499651681375-8afc5a4db253?ixlib:rb-1.2.1&ixid:MXwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NTl8fHxlbnwwfHx8&auto:format&fit:crop&w:500&q:60",
    },
  ]);

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
