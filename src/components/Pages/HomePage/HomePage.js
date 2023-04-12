import React from 'react'
import { NavLink } from 'react-router-dom'
import "./HomePage.css"

function HomePage() {
  return (
    <div className='home-content'>
      <h1 className='home-title'>Designed for online learning</h1>
      <p>Access a range of features, including live classes with real-time interaction,
        interactive quizzes and assessments, group breakout rooms, and collaborative learning tools. 
        Our platform is designed to provide seamless and immersive online learning that mirrors
        the in-person classroom experience as closely as possible.
        </p>
      <div className="homepage-gs">
        <rect></rect>
        <h2><NavLink className="nav-link" id="privacy-option" to="/GetStarted">
          Get Started</NavLink></h2>
      </div>
    </div>
  )
}

export default HomePage