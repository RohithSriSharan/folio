import React from 'react'
import './Footer.css'

const Footer = () => {

    const date = new Date();
    const year = date.getFullYear()

  return (
    <div className='footer'>
        <p>Designed and Built with passion and code.</p> 
        <p>Copyright © {year} Rohith JANGAM</p>
        
    </div>
  )
}

export default Footer