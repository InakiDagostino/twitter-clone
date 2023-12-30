import { useEffect } from "react"
import style from "../css/explore.module.css"
import recomends from "../assets/recomends"
import trends from "../assets/trends"
import SearchBar from "../Components/SearchBar"
import Trends from "../Components/TrendsComponents/Trends"
import FollowRecomendation from "../Components/FollowComponents/FollowRecomendation"

export function Explore(){

    return(
        <>
        <main id="main-home">
            <div className={style["center-content"]}>
                <SearchBar style={style} />
                <Trends style={style} trends={trends} />
            </div>
            <div className={style["right-content"]}>
                <FollowRecomendation style={style} recomends={recomends} />
            </div>
        </main>
            
        </>
    )
}