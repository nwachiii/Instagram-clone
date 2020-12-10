import Posts from "./Posts";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="app__header">
        <img
          className="app__headerImage"
          src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
          alt=""
        />
        <h1>
          HELLO Clever Emmanuel, Let's Build an Instagram Clone with React!
        </h1>
      </div>

      <Posts />
      {/* posts */}
      {/* posts */}
    </div>
  );
}

export default App;
