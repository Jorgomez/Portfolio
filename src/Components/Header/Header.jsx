import { useState } from 'react'
import Logo from '../Logo/Logo'
import { ThemeSwitcher } from '../ThemeSwitcher/ThemeSwitcher'
import Navigation from './components/Navigation/Navigation'
import MenuToggle from './components/MenuToggle/MenuToggle'
import MobileMenu from './components/MobileMenu/MobileMenu'
import './Header.scss'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const handleMenuClose = () => {
    setIsMenuOpen(false)
  }

  return (
    <header className="header">
      <div className="header-container">
        <div className="header-left">
          <Logo />
        </div>
        
        <div className="header-center">
          <Navigation />
        </div>
        
        <div className="header-right">
          <ThemeSwitcher />
          <MenuToggle isOpen={isMenuOpen} onToggle={handleMenuToggle} />
        </div>
      </div>
      
      <MobileMenu isOpen={isMenuOpen} onClose={handleMenuClose} />
    </header>
  )
}

export default Header
