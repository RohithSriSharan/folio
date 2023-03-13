import React from 'react'
import './NavBar.css'
import {useState , useEffect} from 'react'
import { CgMenu } from 'react-icons/cg';
import {AiOutlineClose } from 'react-icons/ai';
import { Link } from 'react-scroll'
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

    const handleMobileMenu = () => {
        setIsOpen(isOpen => !isOpen)
       
    }



  return (
    <div className='navbar'>
       <div className='logo'>
            <h1>RJ</h1>
       </div>

       <div className='menu'>

            {ismobile?(
                <div className='menu-button'>
                    <button onClick={handleMobileMenu}>{isOpen?<AiOutlineClose/>: <CgMenu/>}</button>
                </div>
            ):(
                <div className='desktop-menu'>
                    <ul>
                        <Link spy={true} smooth={true} to='About'><li>About</li></Link>
                        <Link spy={true} smooth={true} to='Skills'><li>Skills</li></Link>
                        <Link spy={true} smooth={true} to='Projects'><li>Projects</li></Link>
                        <Link spy={true} smooth={true} to='Contact'><li>Contact</li></Link>
                        
                        
                        
       
                    </ul>
                </div>
            )
            }
       </div>

       
    {ismobile && isOpen &&(
        <div className='mobile-menu'>
            <ul>
            <Link spy={true} smooth={true} to='About'><li onClick={handleMobileMenu}>About</li></Link>
            <Link spy={true} smooth={true} to='Skills'><li onClick={handleMobileMenu} >Skills</li></Link>
            <Link spy={true} smooth={true} to='Projects'><li onClick={handleMobileMenu} >Projects</li></Link>
            <Link spy={true} smooth={true} to='Contact'><li onClick={handleMobileMenu} >Contact</li></Link>
            </ul>
        </div>
    )}

    </div>
    
  )
}

export default NavBar