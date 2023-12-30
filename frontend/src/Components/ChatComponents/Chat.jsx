import ChatItem from "./ChatItem"

export default function Chat({style, convo}){
    return (
        <div className={style["chat"]}>
            {convo?.chat.map((message, i) => {
                return (
                    <ChatItem style={style} message={message} i={i} />
                )
            })}
        </div>
    )
}