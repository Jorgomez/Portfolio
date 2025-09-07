import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import { HeroUIProvider } from '@heroui/react'
import './index.css'
import './styles/global.scss'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <HeroUIProvider>
      <App />
    </HeroUIProvider>
  </BrowserRouter>
)
