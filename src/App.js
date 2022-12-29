import { useState } from "react";
import Notification from "./components/Notification.js";
import notificationsData from "/src/data/notificationsData.json";

function App() {
  var initial  = {
    indexes:  notificationsData.data.map((el, index) => index < 3 ),
    count: undefined,
    updateCount: function (){
      this.count = this.indexes.reduce((acc,isUnread) => acc + isUnread ,0)
    }
  }
  initial.updateCount();
  var [unread, setUnread] = useState(initial);
  var [count, setCount] = useState(unread.count);

  function readIndex (index){
    unread.indexes[index] = false; 
    readUpdate(unread);
  }

  function readAll (){
    unread.indexes.fill(false);
    readUpdate(unread);
  }

  function readUpdate(newUnread) {
    unread.updateCount();
    setUnread(unread);
    setCount(unread.count);
  }

  return (
    <main className="main">
      <header className="header">
        <h1 className="header__title">
          Notifications
          <b className="header__number">{count}</b>
        </h1>

        <button onClick={readAll} className="header__btn">Mark all as read</button>
      </header>
      <ul className="notifications">
        {notificationsData.data.map(function (
          { id, avatar, user, action, post, date, message, image },
          index
        ) {
          return (
            <Notification
              handleRead={() => readIndex(index)}
              id={id}
              key={`notification-${index}`}
              avatar={avatar}
              user={user}
              action={action}
              post={post}
              date={date}
              message={message}
              image={image}
              unread={unread.indexes[index]}
            />
          );
        })}
      </ul>
    </main>
  );
}

export default App;
