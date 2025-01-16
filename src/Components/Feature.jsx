import React from 'react'
import Featurebox from './Featurebox'
import fimage1 from '../images/HyzFNhtmlcssjsoverview.png'
import fimage2 from '../images/jsreact.png'
import fimage3 from '../images/MySQL-Logo.png'
import fimage4 from '../images/429d8690-5e85-4f07-a870-2e1fea6cad49.jpg'

function Feature() {
  return (
    <div id='features'>
        <h1>SKILLS</h1>
        <div className='a-container'>
         <Featurebox image={fimage1}  title="HTML&CSS,JAVA SCRIPT,Bootstrap"/>
         <Featurebox image={fimage2} title="REACT.JS"/>
         <Featurebox image={fimage3} title="SQL"/>
         <Featurebox image={fimage4} title="PYTHON"/>

        </div>
    </div>
  )
}

export default Feature