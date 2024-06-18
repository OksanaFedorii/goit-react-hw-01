import css from './FriendList.module.css';

export default function FriendList({ friends }) {
    return (
        <ul className={css.friendList}>
            {friends.map(friend => (
                <li key={friend.id} className={css.friendListItem}>
                    <img className={css.friendAvatar} src={friend.avatar} alt={`${friend.name} avatar`} />
                    <p className={css.friendName}>{friend.name}</p>
                    <p className={`${css.friendStatus} ${friend.isOnline ? '' : css.offline}`}>
                    {friend.isOnline ? "Online" : "Offline"}
                    </p>
                </li>
            ))}
        </ul>
    );
}
