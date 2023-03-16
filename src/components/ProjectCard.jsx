import React from 'react'
import './ProjectCard.css'
import { AiFillGithub } from 'react-icons/ai';
import { VscLinkExternal } from 'react-icons/vsc';
import Tilt from 'react-tilt';
const ProjectCard = (props) => {
  return (
    <Tilt
    options={{
      max: 45,
      scale: 1,
      speed: 450,
    }}
    >

    <div className='project-card'>
    <div  className='project-card-icon'>
        <AiFillGithub/>
          <VscLinkExternal/> 
      </div>  
      <div className='project-card-image'><img src={props.image}></img></div>
    
      

        <div className='project-card-info'><h1>{props.title}</h1>
        <p>{props.description}</p></div>
    </div>
  
      
       
 
    </Tilt>
  )
}

export default ProjectCard