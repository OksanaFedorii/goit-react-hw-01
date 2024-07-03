import css from './Profile.module.css';

const defaultavatar = "https://cdn-icons-png.flaticon.com/512/2922/2922506.png"

export default function Profile({username, tag, location, avatar = defaultavatar, stats}) {
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


