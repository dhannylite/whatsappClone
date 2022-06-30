import { Routes, Route } from "react-router-dom";
import Aside from "./components/Aside";
import Home from "./pages/Home";
import './App.css'
import Chat from "./pages/Chat";
import SideBar from "./components/SideBar";
import Loader from "./components/layout/Loader";
import { useEffect, useState } from "react";

function App() {
  const [loadProgress, setLoadProgress] = useState(false)
  const [loadApp, setLoadApp] = useState(false)

  useEffect(() => {
    setLoadProgress(true)
    setTimeout(() => {
      setLoadApp(true)
    }, 3500)
  },[])
  if (!loadApp) {
    return <Loader done={loadProgress} /> 
  }
  // console.log(loadProgress,9)
  return (
    <>
      <div className="app-mobile-content">
        <p>Only Available On Desktop 😉</p>
      </div>
    <div className="app">
      <SideBar />
      <Routes>
        <Route path="/chat/:id" element={<Chat />} />
        <Route path='/' element={<Home />} />
      </Routes>
    </div>
    </>
  );
}

export default App;
