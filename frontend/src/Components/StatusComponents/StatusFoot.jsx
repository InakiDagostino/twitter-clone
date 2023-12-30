import Interactions from "../PostsComponents/Interactions";

export default function StatusFoot({style}){
    return (
        <div className={style["post-foot"]}>
            <div className={style["date-views"]}>
                17/08/2023 - 100 views
            </div>
            <Interactions style={style} />
        </div>
    )
}