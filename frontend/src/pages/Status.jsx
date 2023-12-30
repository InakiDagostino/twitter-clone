import { useParams } from 'react-router-dom'
import tweets from '../assets/tweets';
import style from "../css/status.module.css"
import trends from '../assets/trends';
import recomends from '../assets/recomends';
import SearchBar from '../Components/SearchBar';
import Trends from '../Components/TrendsComponents/Trends';
import FollowRecomendation from '../Components/FollowComponents/FollowRecomendation';
import StatusPost from '../Components/StatusComponents/StatusPost';

const tweet = tweets[0]

export default function Status(){

    let { postid } = useParams();

    return (
        <>
        <main>
            <div className={style["center-content"]}>
                <StatusPost tweet={tweet} style={style} />
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