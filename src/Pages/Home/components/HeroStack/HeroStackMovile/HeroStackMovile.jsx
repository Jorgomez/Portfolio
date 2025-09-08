import React from 'react'
import { motion } from 'framer-motion'
import { FaReact, FaNodeJs } from 'react-icons/fa'
import { SiReact, SiTypescript, SiJavascript, SiExpo, SiSocketdotio } from 'react-icons/si'
import { heroStackAnimations } from '../animations/heroStackAnimations'
import './HeroStackMovile.scss'

export const HeroStackMovile = () => {
  const technologies = [
    { icon: SiReact, name: 'React Native', color: '#61DAFB' },
    { icon: FaReact, name: 'React', color: '#61DAFB' },
    { icon: SiTypescript, name: 'TypeScript', color: '#3178C6' },
    { icon: SiJavascript, name: 'JavaScript', color: '#F7DF1E' },
    { icon: SiExpo, name: 'Expo', color: '#000020' },
    { icon: SiSocketdotio, name: 'Socket.io', color: '#010101' },
    { icon: FaNodeJs, name: 'Node.js', color: '#339933' }
  ]

  
  const duplicatedTechnologies = [...technologies, ...technologies]

  
  const cardWidth = 136; // 120px card + 16px gap
  const totalWidth = technologies.length * cardWidth;

  return (
    <motion.div 
      className="stack-movile"
      variants={heroStackAnimations.container}
      initial="hidden"
      animate="visible"
    >
          <div className="stack-grid-movile">
        <motion.div 
          className="slider-movile"
          animate={{ 
            x: [`0px`, `-${totalWidth}px`]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
            repeatType: "loop"
          }}
        >
          {duplicatedTechnologies.map((tech, index) => (
            <motion.div
              key={`${tech.name}-${index}`}
              className="card-movile"
              style={{ '--tech-color': tech.color }}
              variants={heroStackAnimations.item}
              initial="hidden"
              animate="visible"
              transition={{ delay: (index % technologies.length) * 0.1 }}
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.2 }
              }}
            >
              <div className="icon-container-movile">
                <tech.icon className="tech-icon" />
              </div>
              <span className="tech-name">{tech.name}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  )
}

export default HeroStackMovile
  