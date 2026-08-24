import './App.css'
import { useState,useEffect } from 'react'
import Home from './sections/Home'
import Gallery from './sections/Gallery'
import Day from './sections/Day'
import Account from './sections/Account'
import Info from './sections/Info'
import Guestbook from './sections/Guestbook'

function App() {

  // 1. 다크모드
  const [isDark,setIsDark] = useState(false);

  useEffect(()=>{
     // 다크모드 시간 설정 (낮:오전6시~,밤:오후6시~)
     const checkTime = () => {
       const hour = new Date().getHours();
       if(hour >= 18 || hour < 6){
        setIsDark(true);
       }else {
        setIsDark(false);
       }
     }
     checkTime();
  },[])

  return (
    <>
    <main className={`${isDark ? 'bg-slate-700' : 'bg-[var(--color-brand-color)]'} h-[100vh]`}>
      
      
      <Day/>
      <Account/>
      <Info/>
      <Guestbook/>
    </main>
    </>
  )
}

export default App
