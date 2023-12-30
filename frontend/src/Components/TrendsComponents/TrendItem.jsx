export default function TrendItem({style, trending}){
    return (
        <li>
            <span className={style["trend-place"]}>trending in {trending.trendPlace}</span>
            <h4>{trending.trend}</h4>
            <span>{trending.posts} posts</span>
        </li>
    )
}