export default function ProfileNameData({style}){
    return (
        <div className={style["name-data"]}>
            <div className={style["user-img"]}>
                <img width={100} height={100} src="/logo dev.png" alt="user log image" />
            </div>
            <div className={style["main-data"]}>
                <h2>Inaki dagostino</h2>
                <h4>@inadev</h4>
            </div>
            <div className={style["edit-btn"]}>
                <button className="btn">Edit Profile</button>
            </div>
        </div>
    )
}