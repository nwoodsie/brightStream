import React from "react";
import "./NavBar.css";
import MenuBookTwoToneIcon from "@mui/icons-material/MenuBookTwoTone";
import { Link } from "react-router-dom";
import { DefaultButton } from "../index.js";

function NavBar() {
  return (
    <div className="navBarWrapper">
      <div className="navBarLeft">
        <MenuBookTwoToneIcon />
        <Link to="/" style={{ textDecoration: "none" }}>
          <div className="navBarTitle">BrightStream</div>
        </Link>
        <Link to="/Class" style={{ textDecoration: "none" }}>
          <div className="navBarLink">Class</div>
        </Link>
        <Link to="/Dolby" style={{ textDecoration: "none" }}>
          <div className="navBarLink">Dolby</div>
        </Link>
        <Link to="/Class" style={{ textDecoration: "none" }}>
          <div className="navBarLink">Schedule</div>
        </Link>
        <Link to="/Collaborate" style={{ textDecoration: "none" }}>
          <div className="navBarLink">Collaborate</div>
        </Link>
        <Link to="/Class" style={{ textDecoration: "none" }}>
          <div className="navBarLink">Quiz</div>
        </Link>
        <Link to="/Privacy" style={{ textDecoration: "none" }}>
          <div className="navBarLink">Privacy</div>
        </Link>
        <Link to="/DashBoard" style={{ textDecoration: "none" }}>
          <div className="navBarLink">DashBoard</div>
        </Link>
      </div>
      <div className="navBarRight">
        <Link to="/Login" style={{ textDecoration: "none" }}>
          <div className="navBarLink">Log In</div>
        </Link>
        <Link to="/GetStarted" style={{ textDecoration: "none" }}>
          <DefaultButton text="Get Started" />
        </Link>
      </div>
    </div>
  );
}

export default NavBar;
