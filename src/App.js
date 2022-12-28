import { useState } from "react";
import Notification from "./components/Notification.js";
import notificationsData from "/src/data/notificationsData.json";

function App() {
  return (
    <main className="main">
      <header className="header">
        <h1 className="header__title">
          Notifications
          <b className="header__number">3</b>
        </h1>

        <button className="header__btn">Mark all as read</button>
      </header>
      <ul className="notifications">
        {notificationsData.data.map(function (
          { id, avatar, user, action, post, date, message, image },
          index
        ) {
          return (
            <Notification
              id={id}
              key={`notification-${index}`}
              avatar={avatar}
              user={user}
              action={action}
              post={post}
              date={date}
              message={message}
              image={image}
            />
          );
        })}
      </ul>
    </main>
  );
}

export default App;
