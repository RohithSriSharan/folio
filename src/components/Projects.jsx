import React from 'react'
import ProjectCard from './ProjectCard'

import './Projects.css'
import dalle from '../assets/dall-e_clone.png'
import ecommerce from '../assets/ecommerce.png'
import threads from '../assets/threads.png'
const Projects = () => {
  return (
    
    <div className='projects' id='Projects'> 
    
   <div className='title'> <h1>Projects</h1></div>
   <div className='project-cards'>
   
   <ProjectCard
      gitRepoUrl = "https://github.com/RohithSriSharan/dalle_mern_web_app.git"
      liveUrl="https://lively-tiramisu-435081.netlify.app"
      image = {dalle}
      title = "Dalle-E Clone"
      description ="A MERN application that allows you to generate unique and personalized images using OpenAI's DALL-E API.
       With an intuitive user interface, you can easily customize and visualize your own image. "
   />
   <ProjectCard
      gitRepoUrl = "https://github.com/RohithSriSharan/fastApi-React-Lab.git"
      liveUrl= "https://github.com/RohithSriSharan/fastApi-React-Lab.git"
      image = {ecommerce}
      title = "A Full Stack ECommerce Website"
      description ="A Python and React Full stack E-commerce website under development. Want to see the progress?
      Feel free to head to my git hub repo. "
    />

    <ProjectCard
      gitRepoUrl = "https://github.com/RohithSriSharan/sayIt.git"
      liveUrl= "https://say-it-tner-g7r7c2krm-rohithsrisharan.vercel.app/"
      image = {threads}
      title = "Threads Clone"
      description ="A comprehensive Threads Clone developed with Next.js, MongoDB, and Clerk for user and state management."
    />

 
</div>

    </div>
    
  )
}

export default Projects