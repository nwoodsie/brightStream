import React from "react";
import "./DashBoard.css";
import SideBar from "./SideBar.js";

import SocketChatExp from './SocketChat.js'
function StreamViewer() {
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
          <div className="dashBoardChatBox">
            <SocketChatExp />
          </div>
        </div>
      </div>
    </div>
  );
}

export default StreamViewer;