import React from "react";
import "./SideBar.css";
import {
  MenuBookTwoTone,
  Logout,
  FirstPage,
  Home,
  Videocam,
  OndemandVideo,
  Settings,
  CalendarMonth,
} from "@mui/icons-material";

import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../../features/userSlice.js";
import { useNavigate } from "react-router-dom";

function SideBar() {
  //const user = userSelector(selectUser);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const redirect = () => navigate("/", {replace:true});
  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(logout());
    redirect();
  };

  return (
    <div className="sideBarWrapper">
      <div className="sideBarLogo">
        <MenuBookTwoTone />
        <FirstPage id="collapseIcon" />
      </div>
      <Link to="/" style={{ textDecoration: "none" }}>
        <div className="sideBarIconWrapper">
          <Home />
          <p>Home</p>
        </div>
      </Link>
      <Link to="/ViewStream" style={{ textDecoration: "none" }}>
        <div className="sideBarIconWrapper">
          <Videocam />
          <p>View Stream</p>
        </div>
      </Link>
      <Link to="/BrowseStreams" style={{ textDecoration: "none" }}>
        <div className="sideBarIconWrapper">
          <OndemandVideo />
          <p>Browse</p>
        </div>
      </Link>
      <Link to="/" style={{ textDecoration: "none" }}>
        <div className="sideBarIconWrapper">
          <CalendarMonth />
          <p>Schedule</p>
        </div>
      </Link>
      <Link to="/Settings" style={{ textDecoration: "none" }}>
        <div className="sideBarIconWrapper">
          <Settings />
          <p>Settings</p>
        </div>
      </Link>
      <div className="sideBarIconWrapper" onClick={(e) => handleLogout(e)}>
        <Logout />
        <p>Log Out</p>
      </div>
      <Link to="/Settings" style={{ textDecoration: "none" }}>
        <div className="profileWrapper">
          <img src={require("./profilePicture.jpg")} alt="" />
        </div>
      </Link>
    </div>
  );
}

export default SideBar;
