import React from 'react'
import './About.css'
import Tilt from 'react-tilt';
const About = () => {
  return (
    
    <div id='About'>
    <Tilt
    options={{
      max: 10,
      scale: 1,
      speed: 45,
    }}
    >
    <div className='about' >
      <h1>About Me</h1>
    </div>
    </Tilt>
      </div>
      
  )
}

export default About