import React from 'react'
import './Hero.css'

import AbstractCanvas from '../canvas/Abstract'


const Hero = () => {
  return (
    <div className='hero' >
        <div className='hero-left hero-top'>
           
            <h2>Hi I'm,</h2><h1>ROHITH</h1>
            <p>An aspiring developer driven to push boundaries and develop creative solutions to comeplex problems.</p>
            <button>Download Resume</button>
        </div>
        <div className='hero-right hero-bottom'>
        <AbstractCanvas />
        
          
        </div>
    </div>

  )
}

export default Hero