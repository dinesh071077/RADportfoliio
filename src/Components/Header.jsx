import React from 'react'
import dinesh from '../images//dinesh 712.jpg'
function Header() {
  return (
    <div id='main'> 
      <div className='name'>
            <h2 >I'm Dineshkumar R A</h2>
            <h2>A python Fullstack Developer</h2>
            {/* <h1><span>FITNESS</span> WITH US</h1> */}
            <p className='details'> I am seeking employment with a company where I can  grow professionally and personally.I want a highly rewarding career where I can use my skills and knowledge for organizational and personal growth..</p>
            <div className="header-btns">
                <a href='#' className='header-btn'>HIRE ME</a>
            </div>
      </div>
      <img src={dinesh} className='dineshi'></img>
    </div>
  )
}

export default Header