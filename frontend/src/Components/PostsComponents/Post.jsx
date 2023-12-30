import Interactions from "./Interactions";

export default function Post({style, tweet}){
    return (
        <article className={style["post"]}>
            <h3>{tweet.user}</h3>
            <h4>{tweet.userName}</h4>
            <p>{tweet.content}</p>
            <Interactions style={style} />
        </article>
    )
}