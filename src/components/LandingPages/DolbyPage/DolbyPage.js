import React from 'react'
import "./DolbyPage.css"
import { DefaultButton } from '../../index.js'

const Dolbytext = "Dolby.io is a new developer platform by Dolby Labs that puts decades of Dolby sight and sound technology in the hands of developers to deliver the highest quality real-time streaming, communications, and media processing solutions."

function DolbyPage() {
  return (
    <div className='dolbyWrapper'>
      <div className='dolbyContainer'>
        <div className='dolbyLeft'>
          <div className='dolbyTitle'>
            Powered by <br/> Dolby.io
          </div>
          <div className='dolbyText'>
            {Dolbytext}
          </div>
          <div className='buttonContainer'>
            <DefaultButton text='Get started' size='Big'/>
          </div>
        </div>
        <div className='dolbyRight'>
          <img src={require('./DolbyPageImage.png')} alt=''></img>
        </div>
      </div>
    </div>
  )
}

export default DolbyPage