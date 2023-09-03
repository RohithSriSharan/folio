import React from 'react'
import './ProjectCard.css'
import { BsGithub } from 'react-icons/bs';
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
    <a href={props.gitRepoUrl} target='_blank' rel='noopener noreferrer' className='gitlink'><BsGithub/></a>
    <a href={props.liveUrl} target='_blank' rel='noopener noreferrer' className='livelink'><VscLinkExternal/> </a>
        
          
      </div>  
      <div className='project-card-image'><img src={props.image} alt='project_png'></img></div>
    
      <div className='project-card-info'><h1>{props.title}</h1>
        <p>{props.description}</p></div>
    </div>
  
      
       
 
    </Tilt>
  )
}

export default ProjectCard