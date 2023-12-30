export default function StatusBody({style, tweet}){
    return (
        <div className={style["post-body"]}>
                {tweet.content}
            </div>
    )
}