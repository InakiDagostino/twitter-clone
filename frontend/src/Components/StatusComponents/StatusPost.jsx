import Interactions from "../PostsComponents/Interactions";
import StatusBody from "./StatusBody";
import StatusFoot from "./StatusFoot";
import StatusUser from "./StatusUser";

export default function StatusPost({style, tweet}){
    return (
        <> 
            <StatusUser style={style} tweet={tweet} />
            <StatusBody style={style} tweet={tweet} />
            <StatusFoot style={style} />
        </>
    )
}