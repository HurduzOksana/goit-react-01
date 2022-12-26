import PropTypes from 'prop-types';
import css from './FriendList.module.css';
export default function FriendItem({ friends }) {
  return (
    <div>
      {friends.map(friend => (
        <li className={css.item} key={friend.id}>
          <span className={friend.isOnline ? css.online : css.offline}></span>
          <img
            className={css.avatar}
            src={friend.avatar}
            alt="User avatar"
            width="48"
          />
          <p className={css.name}>{friend.name}</p>
        </li>
      ))}
    </div>
  );
}

FriendItem.propTypes = {
  avatar: PropTypes.element,
  isOnline: PropTypes.bool,
  name: PropTypes.string,
};
