import NotificationItem from "./NotificationItem"

export default function NotificationWall({style, notifications}){
    return (
        <div id={style["posts"]}>
            <h2>Notifications</h2>
            <ul>
                {notifications.map((noti, i) => {
                    return (
                        <NotificationItem style={style} key={i} noti={noti} />
                    )
                })}
            </ul>
        </div>
    )
}