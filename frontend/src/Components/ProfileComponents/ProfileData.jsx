import { Link } from "react-router-dom";
import ProfileNameHeader from "./ProfileNameHeader";
import ProfileHeaderImg from "./ProfileHeaderImg";
import ProfileButtons from "./ProfileButtons";
import ProfileMainData from "./ProfileMainData";

export default function ProfileData({style}){
    return (
        <div className={style["user-data"]}>
            <ProfileNameHeader style={style} />
            <div className={style["profile"]}>
                <ProfileHeaderImg style={style} />
                <ProfileMainData style={style} />
                <ProfileButtons style={style} />
            </div>
        </div>
    )
}