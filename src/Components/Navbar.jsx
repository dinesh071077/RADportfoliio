import React, { useState } from 'react'
// import logo from '../images/logo.png'
import { Link } from 'react-scroll'


function Navbar() {


    const[nav,setNav] = useState(false)

    const changeBackground = () => {
        if(window.scrollY >= 50){
             setNav(true)
        }
        else{
            setNav(false)
        }
    }

    window.addEventListener('scroll',changeBackground)
  return (

   
    <div>
      <nav className={nav ? "nav activ" : "nav"}>
        <Link to='main' className='logo'>
        <h1 className='dinesh'>DINESH</h1>
        </Link>
        <input className='menu-btn' type='checkbox' id='menu-btn'></input>
        <label className='menu-icon' for='menu-btn'>
            <span className='nav-icon'></span>
        </label>
        <ul className='menu'>
            <li><Link to='main'>ABOUT</Link></li>
            <li><Link to='features'>SKILLS</Link></li>
            <li><Link to='presentaion'>EDUCATION</Link></li>
            <li><Link to='about'>PROJECT</Link></li>
            <li><Link to='contact'>CONTACT</Link></li>    
            
        </ul>
      </nav>
    </div>
  )
}

export default Navbar;