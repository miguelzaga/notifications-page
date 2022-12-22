import images from '../data/images.js'
function Notification({ id, avatar, user, action, post, date }) {
  console.log(images)
  console.log(id)
  return (
    <li className="notification notification--unread">
      <img className="notification__avatar" src={images[id]} alt="" />
      <div className="notification__container">
        <p className="notification__text">
          <b className="notification__user">{user} </b>
          <span className="notification__action">{action} </span>
          <a href="#" className="notification__post">
            {post}
          </a>
        </p>
        <time className="notification__date">{date}</time>
      </div>
    </li>
  );
}

export default Notification;
