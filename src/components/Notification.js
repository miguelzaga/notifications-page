import { avatars, images } from "../data/images.js";
function Notification({
  id,
  avatar,
  user,
  action,
  post,
  date,
  message,
  image,
  unread,
  handleRead,
}) {
  return (
    <li
      tabIndex="0"
      className={`notification ${unread ? "notification--unread" : ""}`}
      onBlur={handleRead}
    >
      <img
        className="notification__avatar"
        src={avatars[id]}
        alt={`profile picture of ${user}`}
      />
      <div className="notification__container">
        <p className="notification__text">
          <b className="notification__user">{user} </b>
          <span className="notification__action">{action}</span>
          {post ? (
            <a href="#" className="notification__post">
              {post}
            </a>
          ) : (
            ""
          )}
        </p>
        <time className="notification__date">{date}</time>
        {message ? (
          <a className="notification__msg" href="#">
            <p>{message}</p>
          </a>
        ) : (
          ""
        )}
      </div>
      {image ? (
        <img
          className="notification__img"
          src={images[image]}
          alt="image related to the notification"
        />
      ) : (
        ""
      )}
    </li>
  );
}

export default Notification;
