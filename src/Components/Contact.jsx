import React, { useState } from 'react'

function Contact() {
    // const [name,setName] = useState('')
    // const [nameerror,setNameerror] = useState('')

    // const handleValue = (e) => {
    //   e.preventDefault()
    //   if(name = ''){
    //     setNameerror('Please enter a NAME')
    //   }
    // }  
   
  return (
    <div id='contact'>
        <h1>CONTACT </h1>
       
        <form >
            {/* <input type='text ' placeholder='R A DINESHKUMAR'  required></input> */}
           
            <div className='contact1'>
              <div className='contact2'>
                <h2><span>NAME </span> - R A DINESHKUMAR</h2>
                <h2><span>S/O </span> - ALAGESAN M R</h2>
                <h2><span>EMAIL ID </span> - dinesh071077@gmail.com</h2>
                <h2><span>MOBILE NO </span> - 9360444803</h2>
                <h2><span>DATE OF BIRTH </span> - 04/02/2003</h2>
                <h2><span>NATIONALITY </span> - INDIAN</h2>
                <h2><span>MARITAL STATUS </span> - SINGLE</h2>
                <h2><span>HOBBIES </span> - PLAYING CRICKET,WORKOUT,<br/>RIDING A BIKE.</h2>
                <h2><span>ADDRESS </span> - 4/81 JEEVA STREET<br/> POOLATHUR  KODAIKANAL<br/>  DINDIGUL-624202</h2>
               
              </div>
            
            </div>
            
            {/* <input type='email ' placeholder='Enter Your Email' required ></input>
            <textarea placeholder='Type here .....' name='message' ></textarea>
            <input type='submit' value='send'></input> */}
       
        </form>
       
        
    </div>
  )
}

export default Contact