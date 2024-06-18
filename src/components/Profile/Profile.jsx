import css from './Profile.module.css';

export default function Profile({
    userData: { username, tag, location, avatar, stats },
}) {
    return (
        <div className={css.profile}>
            <img className={css.avatar} src={avatar} alt={`${username} avatar`} />
            <p className={css.username}>{username}</p>
            <p className={css.tag}>@{tag}</p>
            <p className={css.location}>{location}</p>
            <ul className={css.stats}>
                <li className={css.statItem}>Followers: {stats.followers}</li>
                <li className={css.statItem}>Views: {stats.views}</li>
                <li className={css.statItem}>Likes: {stats.likes}</li>
            </ul>
        </div>
    );
}

