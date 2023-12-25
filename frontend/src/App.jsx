import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import "./css/nav.css"
import {Route, Routes, Link, Navigate } from 'react-router-dom'
import { Home } from './pages/Home'
import { Explore } from './pages/Explore'
import { Notifications } from './pages/Notifications'
import { Messages } from './pages/Messages'
import { Profile } from './pages/Profile'

function App() {

  const [dialog, setDialog] = useState(null)

  useEffect(() => {
    setDialog(document.querySelector("dialog"))
  },[])

  return (
    <>
    <header>
      <nav id="nav-bar">
        <ul id="nav-list">
          <li className="nav-item"><Link to="/home" className="nav-link">Home</Link></li>
          <li className="nav-item"><Link to="/explore" className="nav-link">Explore</Link></li>
          <li className="nav-item"><Link to="/notifications" className="nav-link">Notifications</Link></li>
          <li className="nav-item"><Link to="/messages" className="nav-link">Messages</Link></li>
          <li className="nav-item"><Link to="/ina" className="nav-link">Profile</Link></li>
        </ul>
      </nav>
      <button onClick={() => dialog.showModal()}>Post</button>
      <div>usuario*</div>
    </header>

        <dialog>
          <p>holanda</p>
          <form method="dialog">
            <textarea name="postText" id="post-text" cols="30" rows="10" placeholder='Your post'></textarea>
            <button>Post</button>
          </form>
          <button onClick={() => dialog.close()}>cancel</button>
        </dialog>

      <Routes>
        <Route path="/" element={<Navigate to="/home"/>}/>
        <Route path="/home" element={<Home />}/>
        <Route path="/explore" element={<Explore />}/>
        <Route path="/notifications" element={<Notifications />}/>
        <Route path="/messages" element={<Messages />}/>
        <Route path="/:userName" element={<Profile />}/>
        {/*<Route path="/login" element={<LogIn/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/account" >
          <Route index element={<Account/>}/>
          <Route path="recharge" element={<Recharge/>}/>
          <Route path="retire" element={<Retire/>}/>
        </Route>
  <Route path="/movement" element={<Movement/>}/>*/}
      </Routes>
    </>
  )
}

export default App
