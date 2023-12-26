import { useEffect } from "react"

export function Explore(){

    return(
        <>
        <main id="header-home">
        <div className="center-content">
                <div id="search-container">
                    <div className="search-input">
                        <div id="search-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-search" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" /><path d="M21 21l-6 -6" /></svg>
                        </div>
                        <input type="text" placeholder="Search" />
                    </div>
                </div>
                <div className="trends">
                    <h2>trends</h2>
                    <ul id="trends-list">
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
            </div>
            <div className="right-content">
                
                
                
                <div className="who-to-follow">
                    <h2>Who to follow</h2>
                    <ul id="follow-list">
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