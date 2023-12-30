export default function NotificationItem({style, noti}){
    return (
        <li>
            <div className={style["noti-img"]}>
                <img src={noti.img} alt="user of notification" />
            </div>
            <div className={style["noti-action"]}>
                <p><b>{noti.user}</b> {noti.action}</p>
            </div>
        </li>
    )
}