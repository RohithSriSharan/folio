import React from 'react'
import ProjectCard from './ProjectCard'
import img from '../assets/icons/css.svg'
import './Projects.css'

const Projects = () => {
  return (
    <div className='projects' id='Projects'> 
    <ProjectCard
      image = {img}
      title = "Example Project"
      description ="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eget orci ac mauris rhoncus vestibulum vitae vitae lorem. Duis sit amet felis in nulla interdum semper."
    />
   
  
  
    </div>
  )
}

export default Projects