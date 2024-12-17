import Feed from "./Feed";
import Message from "./Message";
import Notification from "./Notification";

import "./Home.css";

function Home() {
  return (
    <div className="Home">
      <Feed />
      <div className="home-message">
        <Message />
        <Notification />
      </div>
    </div>
  );
}

export default Home;
