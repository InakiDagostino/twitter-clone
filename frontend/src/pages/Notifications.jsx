import { useEffect } from "react"
import style from "../css/notifications.module.css"
import notifications from "../assets/notis"
import recomends from "../assets/recomends"
import trends from "../assets/trends"
import SearchBar from "../Components/SearchBar"
import Trends from "../Components/TrendsComponents/Trends"
import FollowRecomendation from "../Components/FollowComponents/FollowRecomendation"
import NotificationWall from "../Components/NotificationsComponents/NotificationWall"

export function Notifications(){

    return(
        <>
        <main id="header-home">
            <div className={style["center-content"]}>
                
                <NotificationWall style={style} notifications={notifications} />
                
            </div>
            <div className={style["right-content"]}>
                <SearchBar style={style} />
                
                <Trends style={style} trends={trends} />
                <FollowRecomendation style={style} recomends={recomends} />
            </div>
        </main>
            
        </>
    )
}