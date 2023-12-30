export default function DmItem({style, i, dm, setTheConvo}){
    return (
        <li key={i} onClick={() => {
            if(dm.from === "ina"){
                setTheConvo(dm.to)
            }else{
                setTheConvo(dm.from)
            }
        }}>
        <div className={style["user-img"]}>
            <img src={dm.img} alt="" />
        </div>
        <div>
            {dm.from === "ina" ? dm.to : dm.from}
        </div>
    </li>
    )
}