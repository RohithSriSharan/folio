import React from 'react'
import './Contact.css'
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import PlanetCanvas from '../canvas/Planet';
import { TiTick } from 'react-icons/ti';






const Contact = () => {

  const [sent, setSent] = useState(false)

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm("service_a7x3eax", "template_hd5v90s", form.current, "dWbEzpT5kHna-cdiL")
      .then((result) => {
          console.log(result.text);
          setSent(true)
        
      }, (error) => {
          console.log(error.text);
          
      });
  };
  
  return (
    <div id='Contact' className='contact'>
        <div className='planet'>
          
        <PlanetCanvas/> 
         
        </div>
       
        <div className='contact-right'>
        <div className='wrapper'>
        <div className='greetings'><h1>Dont be a Stranger!</h1>
            <p>Got a project in mind?, feedback or just wanna say hi?
            I'd love to hear from you! Feel free to drop a message.  </p>
          </div>
          <div className='forms'  >
            <form ref={form} onSubmit={sendEmail} >
              <input  type="text" name='username' placeholder='Your name'  ></input>
              <input type="email" name='user_email' placeholder='Email' required></input>
              <textarea type="text" name="message" placeholder='Your message' required></textarea>
              <button >Submit</button>
              {sent && <p className='mail-alert'><span className='tick'><TiTick/></span><span className='sent-alert' >Your message has been sent</span></p> }
            </form>
         </div>
      
        </div>
        </div>
          
    </div>
  )
}

export default Contact