
import FriendItem from "./FriendItem";

export default function FriendList({ friends }) {
    return (
        <ul className="friend-list">
            <FriendItem
            friends={friends} />
        </ul>
              
    );
}