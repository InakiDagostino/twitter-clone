import TrendItem from "./TrendItem"

export default function Trends({style, trends}){
    return (
        <div className={style["trends"]}>
            <h2>trends</h2>
            <ul id={style["trends-list"]}>
                {trends.map((trending, i) => {
                    return (
                    <TrendItem style={style} trending={trending} key={i} />
                    )
                })}
            </ul>
        </div>
    )
}