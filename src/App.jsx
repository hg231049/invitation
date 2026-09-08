import './App.css'
import { useState, useEffect } from 'react'
import Home from './sections/Home'
import Message from './sections/Message'
import Gallery from './sections/Gallery'
import Day from './sections/Day'
import Account from './sections/Account'
import Info from './sections/Info'
import Guestbook from './sections/Guestbook'

function App() {
  const [isOpen, setIsOpen] = useState(() => {
    return sessionStorage.getItem('wedding-open') === 'true';
  });
  useEffect(() => {
    sessionStorage.setItem('wedding-open', isOpen);
  }, [isOpen]);



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
    <main>
      <Home
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />
      
      <Day />
      <Message/>
      <Gallery/>
      <Info />
      <Account />
      <Guestbook />
    </main>
  )
}

export default App