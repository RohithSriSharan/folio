import React from 'react'
import './About.css'
import backend from '../assets/about/backend.png'
import creator from '../assets/about/creator.png'
import mobile from '../assets/about/mobile.png'
import web from '../assets/about/web.png'

const About = () => {

  return (
    
    <div id='About'>
    <div className='about'>
        <div className='about-me'>
          <div className='title'><h1>About</h1></div>

            <div className='content'><p> 
            As a passionate software developer, I am constantly pushing myself to learn and grow in my field.
            With a keen eye for detail and commitment to excellence,I strive to create innovative and impactful solutions 
            to complex problems.
            With expertise in languages such as Python, Java, Javascript and Typescript I am well versed in a varaiety of programming paradigms and frameworks.
            
            </p>
            <p>Whether working in front-end , back-end development infrastructure, or full-stack applications, I take a creative approach to every project I tackle.</p>

            <p>
              Above all, I am driven by a love for what I do. Whether tinkering with new technologies in my spare time or collaborating with other developers on exiting new projects,
              I am always seeking to expand my horizons and explore new opportunities in the world of software development.
            
            </p>
            
            </div>
          
        </div>
    
      <div className='cards'>

        <div className='card-1'>
          <img src={backend} alt='card'></img>
          <h2>BACK END</h2>
        </div>
        
        <div className='card-2'>
        <img src={creator} alt='card'></img>
        <h2>FRONT END</h2>
      </div>

      <div className='card-3'>
          <img src={web} alt='card'></img>
          <h2>Web Development</h2>
        </div>

        <div className='card-4'>
          <img src={mobile} alt='card'></img>
          <h2>React Developer</h2>
        </div>
        
      </div>
    </div>

      
    </div>

      
  )
}

export default About