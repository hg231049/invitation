import './App.css'
import { useEffect } from 'react'

import Home from './sections/Home'
import Message from './sections/Message'
import Gallery from './sections/Gallery'
import Day from './sections/Day'
import Account from './sections/Account'
import Info from './sections/Info'
import FooterSection from './sections/FooterSection'

function App() {

  useEffect(() => {
    // 오프닝 애니메이션이 끝날 때까지 스크롤 잠금
    document.body.style.overflow = 'hidden'

    const timer = setTimeout(() => {
      document.body.style.overflow = ''
    }, 4000)

    return () => {
      clearTimeout(timer)
      document.body.style.overflow = ''
    }
  }, [])

  return (
    <main>

      <Home />
      <Day />
      <Message />
      <Gallery />
      <Info />
      <Account />
      <FooterSection />


    </main>
  )
}

export default App