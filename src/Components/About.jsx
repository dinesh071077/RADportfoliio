import React from 'react'
import aboutimg from '../images/pngtree-d-rendering-of-an-engineer-with-college-diploma-and-graduation-cap-image_3868831.jpg'




function About() {
  return (
    <div id='about'>
    <div className="about-image">
         <img src={aboutimg} alt=''/>
    </div>
    <div className="about-text">
        <h1>PROJECT</h1>
        <p> <span>SOLAR POWERD VACCUM CLEANER </span>- Here we present a solar Powerd vaccum cleaner robot that 
            makes cleaning outdoor spaces, terraces, open restaurants, large campus
             etc very easy. The system works
             without any physical effort and without the need to constantly charge the robot.</p>
        <p><span>SEPIC CONVERTER</span>- This project work presents a novel split inductor high-gain 
             Single Ended Primary Inductor Converter (SEPIC) topology designed for renewable energy applications.
            By employing a split inductor configuration, the converter achieves significantly higher  voltage gain </p>
            <p><span>PYTHON FRONTEND PROJECT</span>- GYM WEBPAGE DEVELOPEMENT <a href='https://gymwebpage.vercel.app/'> click the link</a></p>
        {/* <button> READ MORE</button> */}
    </div>
</div>
  )
}

export default About