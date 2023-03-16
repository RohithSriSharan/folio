import React  from 'react'

import BallCanvas from '../canvas/Ball'
import './Skills.css'
// OOP
import python from '../assets/icons/python.svg'
import js from '../assets/icons/js.svg'
//BACKEND
import fastapi from '../assets/icons/fastapi.png'
import mongo from '../assets/icons/mongodb.svg'
import expressjs from '../assets/icons/expressjs.svg'
import nodejs from '../assets/icons/nodejs.svg'
import mysql from '../assets/icons/mysql.svg'
import postman from '../assets/icons/postman.svg'

//FRONT END
import react from '../assets/icons/react.svg'
import css from '../assets/icons/css.svg'
import html from '../assets/icons/html.svg'
import bootstrap from '../assets/icons/bootstrap.svg'
import { useState } from 'react'


import { CgChevronRight } from 'react-icons/cg';
import { FaCode } from 'react-icons/fa';
import { FaServer} from 'react-icons/fa';
import { RxPencil2 } from 'react-icons/rx';
const Skills = () => {
  const [showOop , setShowOop] = useState(false)
  const [showFe , setShowFe] = useState(false)
  const [showBe , setShowBe] = useState(false)
  const handleShowOop= ( )=>{
    setShowOop(!showOop)
  }
  const handleShowFe= ( )=>{
    setShowFe(!showFe)
  }
  const handleShowBe= ( )=>{
    setShowBe(!showBe)
  }

  return (
    
    <div className='skills' id='Skills'> 
        <h1> Skills </h1>
        <p>Driven by a passion for innovation, I am dedicated to expanding my skillset and exploring 
        emerging technologies to deliver cutting-edge solutions that the ever evolving needs ob bussiness and their customers </p>

      <div className='oop'>
       <div className='text'  onClick={handleShowOop}> <h2><CgChevronRight/>  <FaCode/> OOP</h2></div>
       {showOop && (
        <div className='icons'>
        <div className='skill-card'><BallCanvas className='ball' icon={python}/></div>
        <div className='skill-card'><BallCanvas className='ball' icon={js}/></div>
      </div>

        )}  
    </div>
    
    <div className='backend'>
      <div className='text' onClick={handleShowFe}> <h2><CgChevronRight/> <FaServer/>  Back End</h2></div>
      {showFe && (
        <div className='icons'>
        <div className='skill-card'><BallCanvas className='ball' icon={mongo}/> </div>
        <div className='skill-card'><BallCanvas className='ball' icon={fastapi}/> </div>
        <div className='skill-card'><BallCanvas className='ball' icon={expressjs}/></div>
        <div className='skill-card'><BallCanvas className='ball' icon={nodejs}/></div>
        <div className='skill-card'><BallCanvas className='ball' icon={mysql}/></div>
        <div className='skill-card'><BallCanvas className='ball' icon={postman}/></div>
      
      </div>
      )}
      
      
    </div>
    
      <div className='frontend'> 
         <div className='text' onClick={handleShowBe}><h2><CgChevronRight/><RxPencil2/> Front END</h2></div>
          {showBe && (
            <div className='icons'>
            <div className='skill-card'><BallCanvas className='ball' icon={react}/></div>
            <div className='skill-card'><BallCanvas className='ball' icon={css}/></div>
            <div className='skill-card'><BallCanvas className='ball' icon={html}/></div>
            <div className='skill-card'><BallCanvas className='ball' icon={bootstrap}/></div>
          </div>
            
          )}
                           
          
      </div>
    
    
    </div>

    
  )
}

export default Skills