
import FriendItem from "./FriendItem";
import css from './FriendList.module.css';

export default function FriendList({ friends }) {
    return (
        <ul className={css.friendList}>
            <FriendItem
            friends={friends} />
        </ul>
              
    );
};
