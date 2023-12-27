import { useEffect } from "react"
import { useParams } from 'react-router-dom'
import { Link } from "react-router-dom";
import style from "../css/profile.module.css"
import tweets from "../assets/tweets";

export function Profile(){

    let { userName } = useParams();

    return(
        <>
        <main id="header-home">
            <div className={style["center-content"]}>
                <div className={style["user-data"]}>
                    <div className={style["name-header"]}>
                        <Link to="/home"><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-narrow-left" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M5 12l14 0" /><path d="M5 12l4 4" /><path d="M5 12l4 -4" /></svg></Link>
                        <div className={style["data"]}>
                            <h2>Inaki Dagostino</h2>
                            <h4>12 posts</h4>
                        </div>
                        
                    </div>
                    <div className={style["profile"]}>
                        <section className={style["header-image"]}>
                            <img width={422} height={163} src="/banner-dev.jpg" alt="user banner image" />
                        </section>
                        <section className={style["profile-data"]}>
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
                            <div className={style["bio"]}>
                                <p className={style["bio-text"]}>
                                    Estudiante de Informática y telecomunicaciones en la UDP.
                                    Youtube: http://youtube.com/@InaDev
                                    Blog: http://inadev-blog.vercel.app
                                </p>
                                <div className={style["sub-data"]}>
                                    <a target="_blank" href="https://inakidagostino.github.io/">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-link" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M9 15l6 -6" /><path d="M11 6l.463 -.536a5 5 0 0 1 7.071 7.072l-.534 .464" /><path d="M13 18l-.397 .534a5.068 5.068 0 0 1 -7.127 0a4.972 4.972 0 0 1 0 -7.071l.524 -.463" /></svg>
                                        inakidagostino.github.io
                                    </a>
                                    <span className={style["join-date"]}>
                                        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-calendar-month" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z" /><path d="M16 3v4" /><path d="M8 3v4" /><path d="M4 11h16" /><path d="M7 14h.013" /><path d="M10.01 14h.005" /><path d="M13.01 14h.005" /><path d="M16.015 14h.005" /><path d="M13.015 17h.005" /><path d="M7.01 17h.005" /><path d="M10.01 17h.005" /></svg>
                                        Joined August 2023
                                    </span>
                                </div>
                                
                            </div>
                            
                        </section>
                        <section className={style["buttons"]}>
                            <button className={style["button"]}>Posts</button>
                            <button className={style["button"]}>Media</button>
                        </section>
                    </div>
                </div>
                
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