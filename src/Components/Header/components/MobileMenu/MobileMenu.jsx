import { NavLink } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import './MobileMenu.scss'

const MobileMenu = ({ isOpen, onClose }) => {
  const handleProjectsClick = (e) => {
    e.preventDefault()
    alert("Section in update - The projects are being updated. They will be available soon!")
    onClose()
  }

  const menuItems = [
    { name: 'Home', href: '/', enabled: true },
    { name: 'Projects', href: '#', enabled: false, onClick: handleProjectsClick },
    { name: 'About Me', href: '/About', enabled: true }
  ]

  const menuVariants = {
    hidden: { 
      opacity: 0,
      height: 0
    },
    visible: { 
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.3,
        ease: "easeOut",
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.3, ease: "easeOut" }
    }
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          className="mobile-menu"
          variants={menuVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
        >
          {menuItems.map((item, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
            >
              {item.enabled ? (
                <NavLink
                  to={item.href}
                  className="mobile-nav-link"
                  onClick={onClose}
                >
                  {item.name}
                </NavLink>
              ) : (
                <button
                  className="mobile-nav-link disabled"
                  onClick={item.onClick}
                >
                  {item.name}
                </button>
              )}
            </motion.div>
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default MobileMenu 