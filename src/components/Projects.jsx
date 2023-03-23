import React from 'react'
import ProjectCard from './ProjectCard'
import img from '../assets/icons/css.svg'
import './Projects.css'
import Tilt from 'react-tilt'

const Projects = () => {
  return (
    
    <div className='projects' id='Projects'> 
    
   <div className='title'> <h1>Projects</h1></div>
   <div className='project-cards'>
   <ProjectCard
      gitRepoUrl = "https://www.youtube.com/watch?v=dkaUwGC4XsU"
      image = {img}
      title = "Project Title"
      description ="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eget orci ac mauris rhoncus vestibulum vitae vitae lorem. Duis sit amet felis in nulla interdum semper."
    />
    <ProjectCard
      gitRepoUrl = "https://www.youtube.com/watch?v=dkaUwGC4XsU"
      image = {img}
      title = "Project Title"
      description ="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eget orci ac mauris rhoncus vestibulum vitae vitae lorem. Duis sit amet felis in nulla interdum semper."
    />

 
</div>

    </div>
    
  )
}

export default Projects