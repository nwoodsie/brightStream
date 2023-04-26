import React from "react";
import "./ClassRoom.css";
import SideBar from "./SideBar.js";

function ClassRoom() {
  return (
    <div className="dashBoardWrapper">
      <div className="dashBoardContainer">
        <SideBar />
        <div className="dashBoardMain">
          <div className="dashBoardTitle">ClassRoom</div>
        </div>
      </div>
    </div>
  );
}

export default ClassRoom;
