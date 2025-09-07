import { NavLink } from 'react-router-dom'
import { Link, Image } from '@heroui/react'
import { motion } from 'framer-motion'
import { useCustomTheme } from '../../hooks/useCustomTheme'
import { logoAnimations } from '../Header/animations/headerAnimations'
import './Logo.scss'

const Logo = () => {
  const { theme } = useCustomTheme()
  
  return (
    <motion.div
      variants={logoAnimations.container}
      initial="hidden"
      animate="visible"
      whileHover={logoAnimations.hover}
      whileTap={logoAnimations.tap}
    >
      <Link 
        as={NavLink} 
        to="/" 
        className="logo-container flex items-center"
      >
        <Image
          src={
            theme === 'light'
              ? 'https://res.cloudinary.com/digcf0lad/image/upload/v1711666423/Portafolio/logo_1_bivhav.png'
              : 'https://res.cloudinary.com/digcf0lad/image/upload/v1711761580/Portafolio/logo_1_1_kczsvy.png'
          }
          alt="Logo"
          width={35}
          height={30}
          className="object-contain"
        />
        
      </Link>
    </motion.div>
  )
}

export default Logo
