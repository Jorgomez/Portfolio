import React from 'react'
import { motion } from 'framer-motion'
import './HeroText.scss'

export const HeroText = () => {
  return (
    <motion.div 
      className="hero-text"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <h1 className="hero-title">
        <motion.span 
          className="hero-title__primary"
          initial={{ 
            opacity: 0,
            x: -100,
            rotateX: 10,
            rotateY: 30,
            translateZ: 0
          }}
          animate={{ 
            opacity: 1,
            x: 0,
            rotateX: 2,
            rotateY: 19,
            translateZ: 80
          }}
          transition={{ 
            duration: 1.2, 
            ease: "easeOut",
            delay: 0.3
          }}
          whileHover={{
            scale: 1.05,
            rotateX: -2,
            rotateY: 8,
            translateZ: 100,
            textShadow: "8px 8px 16px rgba(0, 0, 0, 0.9), 5px 5px 10px rgba(0, 0, 0, 0.7)",
            transition: { duration: 0.3, ease: "easeOut" }
          }}
          style={{ cursor: 'pointer' }}
        >
          Movile & Web
        </motion.span>
        
        <motion.span 
          className="hero-title__secondary"
          initial={{ 
            opacity: 0,
            x: 100,
            rotateX: 10,
            rotateY: 30,
            translateZ: 0
          }}
          animate={{ 
            opacity: 1,
            x: 0,
            rotateX: 2,
            rotateY: 19,
            translateZ: 80
          }}
          transition={{ 
            duration: 1.2, 
            ease: "easeOut",
            delay: 0.6
          }}
          whileHover={{
            scale: 1.08,
            rotateX: -3,
            rotateY: 12,
            translateZ: 120,
            textShadow: "10px 10px 20px rgba(227, 229, 215, 0.23), 6px 6px 12px rgba(245, 229, 229, 0.28)",
            transition: { duration: 0.3, ease: "easeOut" }
          }}
          style={{ cursor: 'pointer' }}
        >
          Developer
        </motion.span>
      </h1>
      
      <motion.p 
        className="hero-description"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ 
          duration: 0.8, 
          ease: "easeOut",
          delay: 1.0
        }}
        whileHover={{
          scale: 1.02,
          opacity: 1,
          y: -5,
          transition: { duration: 0.3, ease: "easeOut" }
        }}
        style={{ cursor: 'pointer' }}
      >
      I'm Jorge, a Full Stack Developer based in Madrid, Spain, passionate about building modern applications.
      </motion.p>
    </motion.div>
  )
}

export default HeroText 