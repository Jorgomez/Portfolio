import React from 'react'
import { Image } from '@heroui/react'
import { motion } from 'framer-motion'
import ImageActions from './components/ImageActions/ImageActions'
import './HeroImage.scss'

export const HeroImage = ({ className }) => {
  return (
    <motion.div 
      className={`hero-image ${className || ''}`}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ 
        duration: 0.8, 
        delay: 0.5,
        ease: "easeOut" 
      }}
    >
      <div className="ornamental-frame">
        
        <div className="ornamental-corner ornamental-corner--top-left"></div>
        <div className="ornamental-corner ornamental-corner--top-right"></div>
        <div className="ornamental-corner ornamental-corner--bottom-left"></div>
        <div className="ornamental-corner ornamental-corner--bottom-right"></div>
        
        
        <div className="ornamental-border ornamental-border--top"></div>
        <div className="ornamental-border ornamental-border--right"></div>
        <div className="ornamental-border ornamental-border--bottom"></div>
        <div className="ornamental-border ornamental-border--left"></div>
        
        <Image
          src='https://res.cloudinary.com/digcf0lad/image/upload/v1734369445/IMG_7717_hxiluh.webp'
          alt="Jorge Gómez - Web & Mobile Developer"
          radius="lg"
          shadow="lg"
          classNames={{
            img: "hero-image__img-element",
            wrapper: "hero-image__wrapper"
          }}
        />
        
        
        <ImageActions />
      </div>
    </motion.div>
  )
}

export default HeroImage
