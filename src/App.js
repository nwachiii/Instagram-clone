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
      </div>
      <Posts
        username="Happy Family"
        caption="Classy Bougie Catchy"
        imageUrl="https://images.unsplash.com/photo-1484712401471-05c7215830eb?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTF8fHxlbnwwfHx8&auto=format&fit=crop&w=500&q=60"
      />
      <Posts
        username="Crissy"
        caption="The beautiful art of nature"
        imageUrl="https://scontent.flos3-2.fna.fbcdn.net/v/t1.0-9/106727869_735070363920254_6908071804355338326_o.jpg?_nc_cat=110&ccb=2&_nc_sid=09cbfe&_nc_eui2=AeHgvdbjaWl8GMQgoFdhrEzALEhHwQXBm2ssSEfBBcGbazVVAG7VFMRiyDHivaGOG_EtV9s2XX3f9-NxtlYs5-KU&_nc_ohc=hcOyz64U-NIAX9o3giE&_nc_ht=scontent.flos3-2.fna&oh=4c4311f3e7d5ffa0ed7b6cb2c6d99713&oe=5FF834F0"
      />
      <Posts
        username="Jane Stone"
        caption="Smile Regardless"
        imageUrl="https://images.unsplash.com/photo-1499651681375-8afc5a4db253?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NTl8fHxlbnwwfHx8&auto=format&fit=crop&w=500&q=60"
      />
      <Posts
        username="Crissy"
        caption="The beautiful art of nature"
        imageUrl="https://scontent.flos3-2.fna.fbcdn.net/v/t1.0-9/106727869_735070363920254_6908071804355338326_o.jpg?_nc_cat=110&ccb=2&_nc_sid=09cbfe&_nc_eui2=AeHgvdbjaWl8GMQgoFdhrEzALEhHwQXBm2ssSEfBBcGbazVVAG7VFMRiyDHivaGOG_EtV9s2XX3f9-NxtlYs5-KU&_nc_ohc=hcOyz64U-NIAX9o3giE&_nc_ht=scontent.flos3-2.fna&oh=4c4311f3e7d5ffa0ed7b6cb2c6d99713&oe=5FF834F0"
      />
    </div>
  );
}

export default App;
