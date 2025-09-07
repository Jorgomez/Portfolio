import React from 'react'
import { motion } from 'framer-motion'
import { Description } from '../../Components/Desciption/Description'
import { Skills } from '../../Components/Skills/Skills'
import './AboutMe.scss'

const About = () => {
  return (
    <main className="about-page">
      <div className="about-container">
        <motion.div 
          className="about-header"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.8, 
            ease: "easeOut",
            delay: 0.2
          }}
        >
          <h3 className="about-main-title">
            <span className="title-bold">Full-Stack Developer</span> with a{' '}
            <span className="title-bold">Management</span> Background
          </h3>
        </motion.div>
        
        <motion.div 
          className="about-content"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ 
            duration: 0.6,
            delay: 0.5
          }}
        >
          <Description />
          <Skills />
        </motion.div>
      </div>
    </main>
  )
}

export default About
