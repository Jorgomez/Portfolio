import { Route, Routes } from 'react-router-dom'
import { ThemeSwitcher } from './Components/ThemeSwitcher/ThemeSwitcher'
import Header from './Components/Header/Header'
import { Home } from './Pages/Home/Home'
import Projects from './Pages/Projects/Projects'
import About from './Pages/AboutMe/AboutMe'
import Footer from './Components/Footer/Footer'

function App() {
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
