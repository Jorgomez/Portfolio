import Aurora from './Aurora/Aurora'


import './BackgroundEffects.scss'
import SvgTextures from '../Backgrounds/SvgTextures/SvgTextures'

const BackgroundEffects = ({ 
  aurora = true, 
  textures = true,
  intensity = 'medium',
  auroraPosition = 'center',
  texturePattern = 'lines',
  textureOpacity = 0.08,
  animateTextures = false
}) => {
  return (
    <div className="background-effects">
      {textures && (
        <SvgTextures
          pattern={texturePattern}
          opacity={textureOpacity}
          animate={animateTextures}
        />
      )}
   
      {aurora && (
        <Aurora 
          intensity={intensity} 
          position={auroraPosition} 
        />
      )}
    </div>
  )
}

export default BackgroundEffects 