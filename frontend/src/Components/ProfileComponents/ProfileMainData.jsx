import ProfileBio from "./ProfileBio";
import ProfileNameData from "./ProfileNameData";

export default function ProfileMainData({style}){
    return (
        <section className={style["profile-data"]}>
            <ProfileNameData style={style} />
            <ProfileBio style={style} />
            
        </section>
    )
}