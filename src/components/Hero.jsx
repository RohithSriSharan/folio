import React from 'react'
import './Hero.css'
import { GrLinkedin } from 'react-icons/gr';
import { AiFillGithub } from 'react-icons/ai';

import AbstractCanvas from '../canvas/Abstract'

import Resume from '../assets/Rohith_Sri_sharan_JANGAM.pdf'
const Hero = () => {
  

  return (  
    <div className='hero' >
        <div className='hero-left hero-top'>
           
            <h2
              >Hi I'm,</h2>
            <h1>ROHITH</h1>
            <p
              >An aspiring developer driven to push boundaries and develop creative solutions to comeplex problems.</p>
              <a href={Resume} download={Resume} ><button>Download Resume</button> </a>
                <a href="https://www.linkedin.com/in/rohith-sri-sharan-jangam-95b58a15a" target='_blank' rel='noopener noreferrer' className='linkedin'><GrLinkedin/></a>
              <a href="https://github.com/RohithSriSharan" target='_blank' rel='noopener noreferrer' className='github'><AiFillGithub/></a>
        </div>
        
        <div 
        
          className='hero-right hero-bottom'>
        <AbstractCanvas />         
        </div>

    </div>

  )
}

export default Hero