import React from 'react'
import "./CollaboratePage.css"
import { DefaultButton } from '../../index.js'

const collaboratetext = "Intuitive features to facilitate group work and collaboration, such as breakout rooms that can be automatically or manually assigned, digital whiteboards for brainstorming, and interactive polling features."
function CollaboratePage() {
  return (
    <div className='collaborateWrapper'>
     <div className='collaborateContainer'>
     <div className='collaborateCenter'>
     <div className='collaborateTitle'>
            Group work made easier
        </div>
     <img src={require('./CollaboratePageImage.png')} alt=''></img>
        
        <div className='collaborateText'>
            {collaboratetext}
            </div>

          <div className='collabContainer'>
            <DefaultButton text='Get started' size='Big'/>
          
          </div>
        </div>
      </div>
     </div>
    )
  }
  
  export default CollaboratePage
