export default function ChatItem({style, i, message}){
    return (
        <div key={i} className={`${style["message-box"]} ${message.user === "ina" ? style["your-message"] : ""}`}>
            {message.content}
        </div>
    )
}