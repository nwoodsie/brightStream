import React from 'react'
import "./SchedulePage.css"
import { DefaultButton } from '../../index.js'

const scheduletext = "Never miss another lecture or class with the built-in schedule. Integration with learning management systems provides educators and students with a seamless way to schedule and manage classes and access course materials."

function SchedulePage() {
  return (
    <div className='scheduleWrapper'>
      <div className='scheduleContainer'>
        <div className='scheduleLeft'>
          <div className='scheduleTitle'>
            Stay orgamised <br/> with your schedule
          </div>
          <div className='scheduleText'>
            {scheduletext}
          </div>
          <div className='buttonContainer'>
            <DefaultButton text='Get started' size='Big'/>
          </div>
        </div>
        <div scheduleName='scheduleRight'>
          <img src={require('./SchedulePageImage.png')} alt=''></img>
        </div>
      </div>
    </div>
  )
}

export default SchedulePage