import React from 'react'
import './DefaultButton.css'

function DefaultButton({ text, size='Small' }) {
  return (
    <div className={`buttonWrapper${size}`}>
      <div className={`buttonText${size}`}>
        {text}
      </div>
    </div>
  )
}

export default DefaultButton