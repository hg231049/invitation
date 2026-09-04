import './App.css'
import { useState, useEffect } from 'react'
import Home from './sections/Home'
import Day from './sections/Day'
import Account from './sections/Account'
import Info from './sections/Info'
import Guestbook from './sections/Guestbook'

function App() {
  const [isDark, setIsDark] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const hour = new Date().getHours();

    if (hour >= 18 || hour < 6) {
      setIsDark(true);
    } else {
      setIsDark(false);
    }
  }, []);

  // 오프닝이 열리기 전에는 스크롤 잠금
  useEffect(() => {
    if (!isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    // 컴포넌트가 사라질 때 원상복구
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <main
      className={
        isDark
          ? 'bg-[#26372B]'
          : 'bg-[#F6F5EF]'
      }
    >
      <Home
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />

      <Day />
      <Account />
      <Info />
      <Guestbook />
    </main>
  )
}

export default App