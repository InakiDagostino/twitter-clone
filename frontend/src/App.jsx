import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import "./css/nav.css"
import {Route, Routes, Navigate } from 'react-router-dom'
import { Home } from './pages/Home'
import { Explore } from './pages/Explore'
import { Notifications } from './pages/Notifications'
import { Messages } from './pages/Messages'
import { Profile } from './pages/Profile'
import LogIn from './pages/LogIn'
import Register from './pages/Register'
import Status from './pages/Status'
import Header from './Components/AppComponents/NavComponents/Header'
import Dialog from './Components/AppComponents/Dialog'

function App() {

  const [dialog, setDialog] = useState(null)

  useEffect(() => {
    setDialog(document.querySelector("dialog"))
  },[])

  return (
    <>
      <Header dialog={dialog} />

      <Dialog dialog={dialog} />

      <Routes>
        <Route path="/" element={<Navigate to="/home"/>}/>
        <Route path="/home" element={<Home />}/>
        <Route path="/explore" element={<Explore />}/>
        <Route path="/notifications" element={<Notifications />}/>
        <Route path="/messages" element={<Messages />}/>
        <Route path="/login" element={<LogIn/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/:userName">
          <Route index element={<Profile/>} />
          <Route path='status/:postid' element={<Status />}/>
        </Route>
      </Routes>
    </>
  )
}

export default App
