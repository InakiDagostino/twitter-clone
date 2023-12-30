import NavBar from "./NavBar";
import UserDiv from "./UserDiv";

export default function Header({dialog}){
    return (
        <header>
            <NavBar />
            <button className='btn' onClick={() => dialog.showModal()}>Post</button>
            <UserDiv />
        </header>
    )
}