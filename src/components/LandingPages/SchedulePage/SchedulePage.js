import React from 'react'
import "./SchedulePage.css"
import { DefaultButton } from '../../index.js'

const scheduletext = "Never miss another lecture or class with the built-in schedule. Integration with learning management systems provides educators and students with a seamless way to schedule and manage classes and access course materials.ccess a range of features, including live classes with real-time interaction, interactive quizzes and assessments, group breakout rooms, and collaborative learning tools. Our platform is designed to provide seamless and immersive online learning that mirrors the in-person classroom experience as closely as possible."

function SchedulePage() {
  return (
    <div className='scheduleWrapper'>
      <div className='scheduleContainer'>
        <div className='scheduleLeft'>
          <div className='scheduleTitle'>
            Stay organised <br/> with your schedule
          </div>
          <div className='scheduleText'>
            {scheduletext}
          </div>
          <div className='buttonContainer'>
            <DefaultButton text='Get started' size='Big'/>
          </div>
        </div>
        <div className='scheduleRight'>
          <img src={require('./SchedulePageImage.png')} alt=''></img>
        </div>
      </div>
    </div>
  )
}

export default SchedulePage