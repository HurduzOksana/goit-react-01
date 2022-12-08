
import css from './FriendList.module.css';
export default function FriendItem({ friends }) {
    return (
    <div>
        {friends.map(el => (
        <li className={css.item} key={el.id}>
  <span className={el.isOnline ? css.online : css.offline}></span>
  <img className={css.avatar} src={el.avatar} alt="User avatar" width="48" />
  <p className={css.name}>{el.name}</p>
  </li>
    )
    )}
    </div>  
    );
}