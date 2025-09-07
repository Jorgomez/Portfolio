import React from 'react'
import './SvgTextures.scss'

const SvgTextures = ({ 
  pattern = 'topographic', 
  opacity = 0.14, 
  animate = false 
}) => {
  return (
    <div 
      className={`svg-textures svg-textures--${pattern} ${animate ? 'animated' : ''}`}
      style={{ opacity }}
    />
  )
}

export default SvgTextures 