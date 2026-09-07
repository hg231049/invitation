import './App.css'
import { useState, useEffect } from 'react'
import Home from './sections/Home'
import Gallery from './sections/Gallery'
import Day from './sections/Day'
import Account from './sections/Account'
import Info from './sections/Info'
import Guestbook from './sections/Guestbook'

function App() {
  const [isDark, setIsDark] = useState(false);
  const [isOpen, setIsOpen] = useState(() => {
    return sessionStorage.getItem('wedding-open') === 'true';
  });
  useEffect(() => {
    sessionStorage.setItem('wedding-open', isOpen);
  }, [isOpen]);

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
      <Gallery/>
      <Day />
      <Account />
      <Info />
      <Guestbook />
    </main>
  )
}

export default App