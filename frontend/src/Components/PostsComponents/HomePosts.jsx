import Post from "./Post"

export default function HomePosts({style, tweets}){
    return (
        <div id={style["posts"]}>
            {tweets.map((tweet, i) => {
                return (
                    <Post style={style} tweet={tweet} key={i} />
                )
            })}
        </div>
    )
}