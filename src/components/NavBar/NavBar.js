import React from "react";
import "./NavBar.css";
import MenuBookTwoToneIcon from '@mui/icons-material/MenuBookTwoTone';
import { Link } from "react-router-dom";
import { DefaultButton } from "../index.js"
function NavBar() {
  return (
    <div className="navBarWrapper">
      <div className="navBarLeft">
        <MenuBookTwoToneIcon />
        <Link to="/" style={{ textDecoration: "none" }}>
          <div className="navBarTitle">
            BrightStream
          </div>
        </Link>
        <Link to="/Class" style={{ textDecoration: "none" }}>
          <div className="navBarLink">
            Class
          </div>
        </Link>
        <Link to="/Class" style={{ textDecoration: "none" }}>
          <div className="navBarLink">
            Schedule
          </div>
        </Link>
        <Link to="/Collaborate" style={{ textDecoration: "none" }}>
          <div className="navBarLink">
            Collaborate
          </div>
        </Link>
        <Link to="/Class" style={{ textDecoration: "none" }}>
          <div className="navBarLink">
            Quiz
          </div>
        </Link>
        <Link to="/Class" style={{ textDecoration: "none" }}>
          <div className="navBarLink">
            Privacy
          </div>
        </Link>
      </div>
      <div className="navBarRight">
        <div className="navBarLink">
          Log In
        </div>
        <DefaultButton text='Get Started'/>
      </div>
    </div>
  )
}

export default NavBar
