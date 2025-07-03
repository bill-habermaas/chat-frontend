import { useState } from 'react'
import './css/App.css'
import Rooms from "./pages/Rooms";
import Home from "./pages/Home";
import Logoff from "./pages/Logoff.jsx"
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Login from "./components/Login";
import Motd from "./components/Motd";

function App() {
  
  return (
    <>
      <div>
      <NavBar />
      <main className="main-content">
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/rooms" element={<Rooms />} />
            <Route path="logoff" element={<Logoff />} />
        </Routes>
      </main>
      </div>
      <div>
            <Motd />
            <Login />
      </div>
    </>
  )
}

export default App
