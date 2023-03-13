import React from 'react'
import './Contact.css'
import { useRef } from 'react';
import emailjs from '@emailjs/browser';



const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm("service_a7x3eax", "template_hd5v90s", form.current, "dWbEzpT5kHna-cdiL")
      .then((result) => {
          console.log(result.text);
        
      }, (error) => {
          console.log(error.text);
      });
  };
  console.log(process.env.CONTACT_SECRET)
  return (
    <div id='Contact' className='contact'>
        <div className='contact-left'>
          <h1>Dont be a Stranger!</h1>
          <p>Got a project in mind?, feedback or just wanna say hi?
          I'd love to hear from you! Feel free to drop a message.  </p>
        </div>
        <div className='contact-right'>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='username' placeholder='Your name'></input>
          <input type="email" name='user_email' placeholder='Email'></input>
          <textarea type="text" name="message" placeholder='Your message'></textarea>
          <button>Submit</button>
          
        </form>
        </div>
    </div>
  )
}

export default Contact