import React from 'react'
import './Hero.css'


const Hero = () => {
  return (
    <div className='hero' >
        <div className='hero-left hero-top'>
            <p>Hi I am</p>
            <h1>Rohith Jangam</h1>
            <p>An aspiring developer driven to push boundaries and develop creative solutions to comeplex problems</p>
            <button>Download Resume</button>
        </div>
        <div className='hero-right hero-bottom'>
            <h1>Hero Right, Hero bottom</h1>
        </div>
    </div>

  )
}

export default Hero