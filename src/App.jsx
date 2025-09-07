import { useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import { initAnalytics, logPageView } from '../analytics'
import Header from './Components/Header/Header'
import BackgroundEffects from './Components/BackgroundEffects/BackgroundEffects'
import { Home } from './Pages/Home/Home'
import Projects from './Pages/Projects/Projects'
import AboutMe from './Pages/AboutMe/AboutMe'

function App() {
  const location = useLocation()

  useEffect(() => {
    initAnalytics()
  }, [])

  useEffect(() => {
    logPageView(location.pathname)
  }, [location])

  return (
    <div className="min-h-screen text-text font-body">
    
      <BackgroundEffects 
        aurora={true}
        shapes={true}
        textures={true}
        intensity="medium"
        shapesCount={1}
        shapesSize="large"  
        auroraPosition="center"
        texturePattern="grid"
        textureOpacity={1}
        animateTextures={true}
      />
      
      <Header />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutMe />} />
      </Routes>
    </div>
  )
}

export default App 