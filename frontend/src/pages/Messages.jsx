import { useEffect, useState } from "react"
import style from "../css/messages.module.css"
import { dms, chats } from "../assets/dms"
import SearchBar from "../Components/SearchBar"
import DmList from "../Components/ChatComponents/DmList"
import ChatBox from "../Components/ChatComponents/ChatBox"

export function Messages(){

    const [convo, setConvo] = useState(null)

    function setTheConvo(data){
        chats.forEach(chat => {
            if(chat.from === data || chat.to === data){
                setConvo(chat)
            }
        })
    }

    return(
        <>
        <main id={style["main-dm"]}>
            <div className={style["center-content"]}>
                <h2>Messages</h2>
                <SearchBar style={style} />
                <DmList style={style} dms={dms} setTheConvo={setTheConvo} />
            </div>
            <div className={style["right-content"]}>
                <ChatBox style={style} convo={convo} />
            </div>
        </main>
            
        </>
    )
}