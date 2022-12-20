import { useState } from "react";

function App() {
  return (
    <main className="main">
      <header className="header">
        <h1 className="header__title" class>
          Notifications 
          <b className="header__number">3</b>
        </h1>

        <button className="header__btn">
          Mark all as read
        </button>
      </header>
      <ul className="notifications">
          {/* TODO: create Notification component */}

          Mark Webber reacted to your recent post My first tournament today!
          1m ago

          Angela Gray followed you
          5m ago

          Jacob Thompson has joined your group Chess Club
          1 day ago

          Rizky Hasanuddin sent you a private message
          5 days ago
          Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and 
          I'm already having lots of fun and improving my game.

          Kimberly Smith commented on your picture
          1 week ago

          Nathan Peterson reacted to your recent post 5 end-game strategies to increase your win rate
          2 weeks ago

          Anna Kim left the group Chess Club
          2 weeks ago
      </ul>
    </main>
  );
}

export default App;
