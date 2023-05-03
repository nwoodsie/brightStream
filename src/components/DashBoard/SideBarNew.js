import React from "react";
import { useState } from "react";
import "./ExtSideBar.css";
import "./MinSideBar.css";
import MenuBookTwoToneIcon from "@mui/icons-material/MenuBookTwoTone";
import FirstPageIcon from "@mui/icons-material/FirstPage";
import HomeIcon from "@mui/icons-material/Home";
import VideocamIcon from "@mui/icons-material/Videocam";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";
import SettingsIcon from "@mui/icons-material/Settings";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import { Link } from "react-router-dom";
function SideBarNew() {
    const [isSidebar1, setIsSidebar1] = useState(true);
  
    const toggleSidebar = () => {
      setIsSidebar1(!isSidebar1);
    };
    var var1
    let linkElement;
    if (isSidebar1) {
      linkElement = <link rel="stylesheet" type="text/css" href="sidebar1.css" />;
      var1=0;
    } else {
      linkElement = <link rel="stylesheet" type="text/css" href="sidebar2.css" />;
      var1=1;
    }
    let sidebarcode;
    if(var1 === 0){
        sidebarcode = (
            <>
              {linkElement}
              <div className="extsideBarWrapper">
                <div className="extsideBarLogo">
                  <MenuBookTwoToneIcon />
                  <button onClick={toggleSidebar} className="sidebar-toggle"><FirstPageIcon id="extcollapseIcon" />
                  </button>
                </div>
                <Link to="/" style={{ textDecoration: "none" }}>
                  <div className="extsideBarIconWrapper">
                    <HomeIcon />
                    <p>Home</p>
                  </div>
                </Link>
                <Link to="/" style={{ textDecoration: "none" }}>
                  <div className="extsideBarIconWrapper">
                    <VideocamIcon />
                    <p>Classroom</p>
                  </div>
                </Link>
                <Link to="/" style={{ textDecoration: "none" }}>
                  <div className="extsideBarIconWrapper">
                    <OndemandVideoIcon />
                    <p>Browse</p>
                  </div>
                </Link>
                <Link to="/" style={{ textDecoration: "none" }}>
                  <div className="extsideBarIconWrapper">
                    <CalendarMonthIcon />
                    <p>Schedule</p>
                  </div>
                </Link>
                <Link to="/" style={{ textDecoration: "none" }}>
                  <div className="extsideBarIconWrapper">
                    <SettingsIcon />
                    <p>Settings</p>
                  </div>
                </Link>
                <Link to="/" style={{ textDecoration: "none" }}>
                  <div className="extprofileWrapper">
                  <img src={require("./profilePicture.jpg")} alt="" />
                  <p>   profile</p>
                  </div>
                </Link>
              </div>
            </>
          );
        }
        else {
            sidebarcode = (
                <div className="minsideBarWrapper">
                  <div className="minsideBarLogo">
                  <button onClick={toggleSidebar} className="sidebar-toggle"><FirstPageIcon id="mincollapseIcon" />
                  </button>
                    
                  </div>
                  <Link to="/" style={{ textDecoration: "none" }}>
                    <div className="minsideBarIconWrapper">
                      <HomeIcon />
                    </div>
                  </Link>
                  <Link to="/" style={{ textDecoration: "none" }}>
                    <div className="minsideBarIconWrapper">
                      <VideocamIcon />
                    </div>
                  </Link>
                  <Link to="/" style={{ textDecoration: "none" }}>
                    <div className="minsideBarIconWrapper">
                      <OndemandVideoIcon />
                    </div>
                  </Link>
                  <Link to="/" style={{ textDecoration: "none" }}>
                    <div className="minsideBarIconWrapper">
                      <CalendarMonthIcon />
                    </div>
                  </Link>
                  <Link to="/" style={{ textDecoration: "none" }}>
                    <div className="minsideBarIconWrapper">
                      <SettingsIcon />
                    </div>
                  </Link>
                  <Link to="/" style={{ textDecoration: "none" }}>
                    <div className="minprofileWrapper">
                    <img src={require("./profilePicture.jpg")} alt="" />
            
                    
                      
                     
                      
                    </div>
                  </Link>
                  
                </div>
              );


    } 
    return (sidebarcode);
}
    
   
  
  export default SideBarNew;