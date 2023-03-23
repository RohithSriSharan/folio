import React from 'react'
import './NavBar.css'
import {useState , useEffect} from 'react'
import { CgMenu } from 'react-icons/cg';
import {AiOutlineClose } from 'react-icons/ai';
import { Link } from 'react-scroll'
import { motion } from 'framer-motion';

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [ismobile, setIsMobile] = useState(false)

    useEffect(() => {
        const checkScreenWidth = () => {
          if (window.innerWidth < 768) {
            setIsMobile(true);
          } else {
            setIsMobile(false);
          }
        };
      
        checkScreenWidth();
        window.addEventListener("resize", checkScreenWidth);
    
        return () => {
          window.removeEventListener("resize", checkScreenWidth);
        };
      }, []);

      useEffect(() => {
        if (isOpen) {
          document.body.style.overflow = 'hidden';
        } else {
          document.body.style.overflow = 'auto';
        }
      }, [isOpen]);

    const handleMobileMenu = () => {
        setIsOpen(isOpen => !isOpen)
       
    }



  return (
    <motion.div
      initial = {{y: -50}}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2 }} className='navbar'>
       <motion.div
        initial = {{x: -50}}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }} className='logo'>
            <h1>RJ</h1>
       </motion.div>

       <motion.div className='menu'>

            {ismobile?(
                <motion.div className='menu-button'>
                    <motion.button 
                      initial = {{x:30}}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 1 }} onClick={handleMobileMenu}>{isOpen?<AiOutlineClose/>: <CgMenu/>}</motion.button>
                </motion.div>
            ):(
                <motion.div className='desktop-menu'>
                    <motion.ul>
                        <Link spy={true} smooth={true} to='About'><motion.li
                        initial = {{x: 150}}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4 }} >About</motion.li></Link>
                        <Link spy={true} smooth={true} to='Skills'><motion.li
                        initial = {{x: 150}}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}>Skills</motion.li></Link>
                        <Link spy={true} smooth={true} to='Projects'><motion.li
                        initial = {{x: 150}}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}>Projects</motion.li></Link>
                        <Link spy={true} smooth={true} to='Contact'><motion.li>Contact</motion.li></Link> 
                        
                        
                        
                        
       
                    </motion.ul>
                </motion.div>
            )
            }
       </motion.div>

       
    {ismobile && isOpen &&(
        <motion.div
          initial = {{x: 250}}
          animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4 }}
        className='mobile-menu'>
            <ul>
            <Link spy={true} smooth={true} to='About'><motion.li 
                initial = {{x: 150}}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }} onClick={handleMobileMenu}>About</motion.li></Link>

            <Link spy={true} smooth={true} to='Skills'><motion.li 
            initial = {{x: 150}}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }} onClick={handleMobileMenu} >Skills</motion.li></Link>

            <Link spy={true} smooth={true} to='Projects'><motion.li
            initial = {{x: 150}}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }} onClick={handleMobileMenu} >Projects</motion.li></Link>

            <Link spy={true} smooth={true} to='Contact'><motion.li 
            initial = {{x: 150}}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.2 }} onClick={handleMobileMenu} >Contact</motion.li></Link>
            </ul>
        </motion.div>
    )}

    </motion.div>
    
  )
}

export default NavBar