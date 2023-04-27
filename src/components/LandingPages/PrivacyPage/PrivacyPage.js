import React from 'react'
import "./PrivacyPage.css"
import { DefaultButton } from '../../index.js'

const privacytext = "Strict security measures are in place to ensure student privacy and prevent unauthorized access to sessions, such as requiring passwords and two-factor authentication. "
function PrivacyPage() {
  return (
    <div className='privacyWrapper'>
     <div className='privacycontainer'>
     <div className='classLeft'>
     <img src={require('./PrivacyPageImage.jpg')} alt=''></img>
        </div>
      <div className='privacyRight'>
        <div className='privacyTitle'>
             Robust security <br/> measures
        </div>
        <div className='privacyText'>
            {privacytext}
            </div>
    
            <div className='buttonContainer'>
            <DefaultButton text='Get started' size='Big'/>
          
          </div>

          </div>

      
     </div>
    </div>
    )
  }
  
  export default PrivacyPage