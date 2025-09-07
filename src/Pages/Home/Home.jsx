import React from 'react'
import { HeroText } from './components/HeroText/HeroText'
import { HeroStack } from './components/HeroStack/HeroStack'
import { HeroImage } from './components/HeroImage/HeroImage'
import './Home.scss'
import { HeroStackMovile } from './components/HeroStack/HeroStackMovile/HeroStackMovile'

export const Home = () => {
  return (
    <main className="home">
      <div className="home-container">
        <div className="left-container">
          <HeroText/>
          <HeroStack/>
        </div>
        
        <div className="right-container">
          <HeroImage className="home-hero-image" />
          <HeroStackMovile/>
        </div>
      </div>
    </main>
  )
}
