import React from "react";
import "./DashBoard.css";
import SideBar from "./SideBar.js";

function DashBoard() {
  const name = "name"; // Get this name from firestore

  return (
    <div className="dashBoardWrapper">
      <div className="dashBoardContainer">
        <SideBar />
        <div className="dashBoardMain">
          <div className="dashBoardTitle">Welcome {name}</div>
        </div>
      </div>
    </div>
  );
}

export default DashBoard;
