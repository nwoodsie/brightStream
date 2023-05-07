import React from 'react'
import "./ClassPage.css"
import { DefaultButton } from '../../index.js'

const classtext = "Tools provided for educators and students to manage classrooms more effectively, such as the ability to track attendance and take live notes during a lecture. Streams and notes can also be saved to watch and review at any time. Tools provided for educators and students to manage classrooms more effectively, such as the ability to track attendance and take live notes during a lecture. Streams and notes can also be saved to watch and review at any time. "
function ClassPage() {
  return (
    <div className='classWrapper'>
     <div className='classContainer'>
     <div className='classLeft'>
     <img src={require('./ClassPageImage.jpg')} alt=''></img>
        </div>
      <div className='classRight'>
        <div className='classTitle'>
             Feels more like a <br/> classroom
        </div>
        <div className='classText'>
            {classtext}
            </div>
    
            <div className='classButtonContainer'>
            <DefaultButton text='Get started' size='Big'/>
          
          </div>

          </div>

      
     </div>
    </div>
    )
  }
  
  export default ClassPage