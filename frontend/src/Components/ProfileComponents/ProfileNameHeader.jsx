import { Link } from "react-router-dom";

export default function ProfileNameHeader({style}){
    return (
        <div className={style["name-header"]}>
            <Link to="/home"><svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-arrow-narrow-left" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M5 12l14 0" /><path d="M5 12l4 4" /><path d="M5 12l4 -4" /></svg></Link>
            <div className={style["data"]}>
                <h2>Inaki Dagostino</h2>
                <h4>12 posts</h4>
            </div>
            
        </div>
    )
}