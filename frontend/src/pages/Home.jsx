import { useEffect } from "react"
import tweets from "../assets/tweets"
import trends from "../assets/trends"
import recomends from "../assets/recomends"
import style from "../css/home.module.css"
import PostForm from "../Components/PostsComponents/PostForm"
import SearchBar from "../Components/SearchBar"
import Trends from "../Components/TrendsComponents/Trends"
import FollowRecomendation from "../Components/FollowComponents/FollowRecomendation"
import HomePosts from "../Components/PostsComponents/HomePosts"

export function Home(){

    return(
        <>
        <main id="main-home">
            <div className={style["center-content"]}>
                <PostForm style={style} />
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