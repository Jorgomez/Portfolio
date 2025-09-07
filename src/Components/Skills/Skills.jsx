import React from 'react'
import { motion } from 'framer-motion'
import './Skills.scss'

export const Skills = () => {
  return (
    <div className="skills-container">
      <div className="skills-content">
        <motion.h2 
          className="skills-title"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ 
            duration: 0.6, 
            ease: "easeOut",
            delay: 1.2
          }}
        >
          Education & Certifications
        </motion.h2>

        <motion.div 
          className="education-section"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.8, 
            ease: "easeOut",
            delay: 1.4
          }}
        >
          {/* Full-Stack Developer Certification */}
          <motion.div 
            className="certification-item"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ 
              duration: 0.6, 
              ease: "easeOut",
              delay: 1.6
            }}
          >
            <img
              src='https://res.cloudinary.com/digcf0lad/image/upload/v1734388672/the_power_logo_cjxbuy.jpg'
              alt='The Power Logo'
              className="certification-logo"
            />
            <div className="certification-info">
              <p className="certification-name">Full-Stack Developer</p>
              <p className="certification-institution">The Power Tech School</p>
            </div>
          </motion.div>
          
          <motion.div 
            className="education-list"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ 
              duration: 0.6, 
              ease: "easeOut",
              delay: 1.8
            }}
          >
            {/* Bachelor's Degree */}
            <div className="education-item">
              <img
                src='https://res.cloudinary.com/digcf0lad/image/upload/v1734388724/logo-universidad-de-valparaiso_cwi3cq.webp'
                alt='Universidad de Valparaíso Logo'
                className="education-logo"
              />
              <div className="education-info">
                <p className="education-name">Bachelor's Degree in Public Administration</p>
                <p className="education-institution">Universidad de Valparaíso</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}
