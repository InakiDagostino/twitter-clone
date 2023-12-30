import FollowItem from "./FollowItem"

export default function FollowRecomendation({style, recomends}){
    return (
        <div className={style["who-to-follow"]}>
            <h2>Who to follow</h2>
            <ul id={style["follow-list"]}>
                {recomends.map((recomend, i) => {
                    return (
                        <FollowItem style={style} key={i} recomend={recomend} />
                    )
                })}
            </ul>
        </div>
    )
}