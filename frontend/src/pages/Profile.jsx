import { useEffect } from "react"
import { useParams } from 'react-router-dom'
import style from "../css/profile.module.css"
import tweets from "../assets/tweets";
import trends from "../assets/trends";
import recomends from "../assets/recomends";
import SearchBar from "../Components/SearchBar";
import Trends from "../Components/TrendsComponents/Trends";
import FollowRecomendation from "../Components/FollowComponents/FollowRecomendation";
import HomePosts from "../Components/PostsComponents/HomePosts";
import ProfileData from "../Components/ProfileComponents/ProfileData";

export function Profile(){

    let { userName } = useParams();

    return(
        <>
        <main id="header-home">
            <div className={style["center-content"]}>
                <ProfileData style={style} />
                
                <HomePosts style={style} tweets={tweets} />
                
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