import DmItem from "./DmItem"

export default function DmList({style, dms, setTheConvo}){
    return (
        <div className={style["dms-list-div"]}>
            <ul className={style["dms-list"]}>
                {dms.map((dm, i) => {
                    return (
                    <DmItem style={style} dm={dm} i={i} setTheConvo={setTheConvo} />
                    )
                })}
            </ul>
        </div>
    )
}