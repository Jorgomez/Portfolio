import { NavLink } from 'react-router-dom'
import { motion } from 'framer-motion'
import { navigationAnimations } from '../../animations/headerAnimations'
import './Navigation.scss'

const Navigation = () => {
  const handleProjectsClick = (e) => {
    e.preventDefault()
    alert("Section in update - The projects are being updated. They will be available soon!")
  }

  const menuItems = [
    { name: 'Home', href: '/', enabled: true },
    { name: 'Projects', href: '#', enabled: false, onClick: handleProjectsClick },
    { name: 'About Me', href: '/About', enabled: true }
  ]

  return (
    <motion.nav 
      className="navigation"
      variants={navigationAnimations.container}
      initial="hidden"
      animate="visible"
    >
      {menuItems.map((item, index) => (
        <motion.div 
          key={index}
          variants={navigationAnimations.item}
          whileHover={navigationAnimations.linkHover}
          whileTap={navigationAnimations.linkTap}
        >
          {item.enabled ? (
            <NavLink
              to={item.href}
              className="nav-link"
            >
              {item.name}
            </NavLink>
          ) : (
            <button
              className="nav-link disabled"
              onClick={item.onClick}
            >
              {item.name}
            </button>
          )}
        </motion.div>
      ))}
    </motion.nav>
  )
}

export default Navigation 