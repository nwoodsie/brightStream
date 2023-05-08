import React from 'react'
import "./CollaboratePage.css"
import { DefaultButton } from '../../index.js'
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { selectPage } from "../../../features/userSlice.js";

const collaboratetext = "Intuitive features to facilitate group work and collaboration, such as breakout rooms that can be automatically or manually assigned, digital whiteboards for brainstorming, and interactive polling features."
function CollaboratePage() {

  const dispatch = useDispatch();
  const onNavClick = (nav) => {
    dispatch(selectPage(nav));
  };
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
          <Link to="/GetStarted" style={{ textDecoration: "none" }}>
          <DefaultButton text="Get Started" size= "Big" onClick={() => onNavClick(null)} />
        </Link>
          
          </div>
        </div>
      </div>
     </div>
    )
  }
  
  export default CollaboratePage;
