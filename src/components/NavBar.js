import React from 'react'
import './NavBar.css'
import {useState , useEffect} from 'react'
import { CgMenu } from 'react-icons/cg';
import {AiOutlineClose } from 'react-icons/ai';

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
                        <li>About</li>
                        <li>Skills</li>
                        <li>Projects</li>
                        <li>Contact</li>
                    </ul>
                </div>
            )
            }
       </div>

       
    {ismobile && isOpen &&(
        <div className='mobile-menu'>
            <ul>
                <li>About</li>
                <li>Skills</li>
                <li>Projects</li>
                <li>Contact</li>
            </ul>
        </div>
    )}

    </div>
    
  )
}

export default NavBar