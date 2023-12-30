export default function FollowItem({style, recomend}){
    return (
        <li>
            <div className="follow-img">
                <img width={100} height={100} src={recomend.img} alt="" />
            </div>
            <div className={style["follow-data"]}>
                <h2>{recomend.user}</h2>
                <span>{recomend.userName}</span>
            </div>
            <div className={style["follow-button"]}>
                <button className="btn">Follow</button>
            </div>
        </li>
    )
}