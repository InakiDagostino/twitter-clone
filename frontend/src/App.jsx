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
          <li className="nav-item"><Link to="/home" className="nav-link"><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-home" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M5 12l-2 0l9 -9l9 9l-2 0" /><path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7" /><path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6" /></svg>Home</Link></li>
          <li className="nav-item"><Link to="/explore" className="nav-link"><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-search" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" /><path d="M21 21l-6 -6" /></svg>Explore</Link></li>
          <li className="nav-item"><Link to="/notifications" className="nav-link"><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-bell" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M10 5a2 2 0 1 1 4 0a7 7 0 0 1 4 6v3a4 4 0 0 0 2 3h-16a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6" /><path d="M9 17v1a3 3 0 0 0 6 0v-1" /></svg>Notifications</Link></li>
          <li className="nav-item"><Link to="/messages" className="nav-link"><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-messages" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M21 14l-3 -3h-7a1 1 0 0 1 -1 -1v-6a1 1 0 0 1 1 -1h9a1 1 0 0 1 1 1v10" /><path d="M14 15v2a1 1 0 0 1 -1 1h-7l-3 3v-10a1 1 0 0 1 1 -1h2" /></svg>Messages</Link></li>
          <li className="nav-item"><Link to="/ina" className="nav-link"><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-user" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" /><path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" /></svg>Profile</Link></li>
        </ul>
      </nav>
      <button className='btn' onClick={() => dialog.showModal()}>Post</button>
      <div>usuario*</div>
    </header>

        <dialog>
          <p>holanda</p>
          <form method="dialog">
            <textarea name="postText" id="post-text" cols="30" rows="10" placeholder='Your post'></textarea>
            <button className='btn'>Post</button>
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
