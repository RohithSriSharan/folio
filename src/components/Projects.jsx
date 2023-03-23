import React from 'react'
import ProjectCard from './ProjectCard'
import img from '../assets/icons/css.svg'
import './Projects.css'


const Projects = () => {
  return (
    
    <div className='projects' id='Projects'> 
    
   <div className='title'> <h1>Projects</h1></div>
   <div className='project-cards'>
   <ProjectCard
      gitRepoUrl = "https://github.com/RohithSriSharan/dalle_mern_web_app.git"
      liveUrl=""
      image = {img}
      title = "Dalle-E Clone"
      description ="A MERN application that allows you to generate unique and personalized images using OpenAI's DALL-E API.
       With an intuitive user interface, you can easily customize and visualize your own image. "
    />
   

 
</div>

    </div>
    
  )
}

export default Projects