import React from "react";
import "./DashBoard.css";
import SideBar from "./SideBar.js";

function DashBoard() {
  return (
    <div className="dashBoardWrapper">
      <div className="dashBoardContainer">
        <SideBar />
        <div className="dashBoardMain">
          <div className="dashBoardTitleContainer">
            <div className="dashBoardTitle">Stream Name</div>
          </div>
          <div className="streamContainer">
            <iframe
              width="100%"
              height="100%"
              src="https://viewer.millicast.com/?streamId=cpCF9L/myStreamName"
              title="MyStreamName"
              allow="fullscreen"
            ></iframe>
          </div>
        </div>
        <div className="dashBoardChatContainer">
          <div className="dashBoardChatTitle">Chat</div>
          <div className="dashBoardChatBox"></div>
        </div>
      </div>
    </div>
  );
}

export default DashBoard;
