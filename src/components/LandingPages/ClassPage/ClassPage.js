import React from 'react'
import "./ClassPage.css"
import { DefaultButton } from '../../index.js'
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { selectPage } from "../../../features/userSlice.js";

const classtext = "Tools provided for educators and students to manage classrooms more effectively, such as the ability to track attendance and take live notes during a lecture. Streams and notes can also be saved to watch and review at any time. Tools provided for educators and students to manage classrooms more effectively, such as the ability to track attendance and take live notes during a lecture. Streams and notes can also be saved to watch and review at any time. "
function ClassPage() {

  const dispatch = useDispatch();
  const onNavClick = (nav) => {
    dispatch(selectPage(nav));
  };
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
            <Link to="/GetStarted" style={{ textDecoration: "none" }}>
          <DefaultButton text="Get Started" size= "Big" onClick={() => onNavClick(null)} />
        </Link>
          
          </div>

          </div>

      
     </div>
    </div>
    )
  }
  
  export default ClassPage