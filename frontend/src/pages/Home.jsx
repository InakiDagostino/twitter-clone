import { useEffect } from "react"
import tweets from "../assets/tweets"
import style from "../css/home.module.css"

export function Home(){

    return(
        <>
        <main id="main-home">
            <div className={style["center-content"]}>
                <form method="dialog" id={style["post-form-home"]}>
                    <textarea name="postText" id="post-text" cols="20" rows="5" placeholder='Your post'></textarea>
                    <button className="btn">Post</button>
                </form>
                <div id={style["posts"]}>
                    {tweets.map(tweet => {
                        return (
                            <article className={style["post"]}>
                                <h3>{tweet.user}</h3>
                                <h4>{tweet.userName}</h4>
                                <p>{tweet.content}</p>
                                <div className={style["interactions"]}>
                                    <button className={style["answer"]}><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-message-circle-2" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 20l1.3 -3.9a9 8 0 1 1 3.4 2.9l-4.7 1" /></svg></button>
                                    <button className={style["repost"]}><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-repeat" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 12v-3a3 3 0 0 1 3 -3h13m-3 -3l3 3l-3 3" /><path d="M20 12v3a3 3 0 0 1 -3 3h-13m3 3l-3 -3l3 -3" /></svg></button>
                                    <button className={style["like"]}><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-heart" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" /></svg></button>
                                    <button className={style["views"]}><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-chart-histogram" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 3v18h18" /><path d="M20 18v3" /><path d="M16 16v5" /><path d="M12 13v8" /><path d="M8 16v5" /><path d="M3 11c6 0 5 -5 9 -5s3 5 9 5" /></svg></button>
                                </div>
                            </article>
                        )
                    })}
                </div>
                
            </div>
            <div className={style["right-content"]}>
                <div id={style["search-container"]}>
                    <div className={style["search-input"]}>
                    <div id={style["search-icon"]}>
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-search" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" /><path d="M21 21l-6 -6" /></svg>
                    </div>
                    <input type="text" placeholder="Search" />
                </div>
                </div>
                
                <div className={style["trends"]}>
                    <h2>trends</h2>
                    <ul id={style["trends-list"]}>
                        <li>trend1</li>
                        <li>trend1</li>
                        <li>trend1</li>
                        <li>trend1</li>
                        <li>trend1</li>
                        <li>trend1</li>
                        <li>trend1</li>
                        <li>trend1</li>
                        <li>trend1</li>
                    </ul>
                </div>
                <div className={style["who-to-follow"]}>
                    <h2>Who to follow</h2>
                    <ul id={style["follow-list"]}>
                        <li>follow</li>
                        <li>follow</li>
                        <li>follow</li>
                    </ul>
                </div>
            </div>
            
        </main>
            
        </>
    )
}