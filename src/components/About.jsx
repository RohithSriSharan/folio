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
      <p>Hello, my name is Rohith Jangam,I create things that live on the internet and thrive on the endless possibilities of the digital world. I am fascinated by the power of code to bring ideas to life and to solve real-world problems.</p>
      <p> I am constantly exploring new technologies to expand my skill set. I enjoy working on a variety of projects and am always eager to learn something new. Whether it's building responsive user interfaces, designing intuitive user experiences, or developing complex algorithms, I approach every project with enthusiasm and dedication.</p>  
      <p>My main focus is on building accessible and inclusive products and digital experiences. I believe that the web should be a place where everyone can access information and engage with technology, regardless of their abilities or backgrounds. That's why I strive to create websites and applications that are optimized for accessibility and usability.</p>
      <p>Thank you for visiting my portfolio website. If you're interested in collaborating or have a project you'd like to discuss, I would love to hear from you.</p>
    </div>
    </Tilt>
      </div>
      
  )
}

export default About