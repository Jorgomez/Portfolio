import { Route, Routes, useLocation } from 'react-router-dom'
import { ThemeSwitcher } from './Components/ThemeSwitcher/ThemeSwitcher'
import Header from './Components/Header/Header'
import { Home } from './Pages/Home/Home'
import Projects from './Pages/Projects/Projects'
import About from './Pages/AboutMe/AboutMe'
import Footer from './Components/Footer/Footer'
import { useEffect } from 'react'
import { initAnalytics, logPageView } from '../analytics'

function App() {
  const location = useLocation()

  useEffect(() => {
    initAnalytics()
  }, [])

  useEffect(() => {
    logPageView(location.pathname)
  }, [location])

  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Project' element={<Projects />} />
        <Route path='/About' element={<About />} />
      </Routes>
      <Footer />
      {/* <ToastContainer position='top-right' autoClose={3000} hideProgressBar /> */}
    </>
  )
}

export default App
