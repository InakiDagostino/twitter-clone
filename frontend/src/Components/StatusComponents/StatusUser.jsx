export default function StatusUser({style, tweet}){
    return (
        <div className={style["user"]}>
            <div className={style['user-img']}>
                <img src="/logo dev.png" alt="foto de perfil del usuario que creo el post" />
            </div>
            <div className={style["user-data"]}>
                <h2>{tweet.user}</h2>
                <span>{tweet.userName}</span>
            </div>
        </div>
    )
}