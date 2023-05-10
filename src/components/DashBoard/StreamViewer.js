import React from "react";
import "./DashBoard.css";
import SideBar from "./SideBar.js";
import { useSelector } from "react-redux";

function StreamViewer() {
  const streamId = useSelector((state) => state.user.streamId);
  const streamName = useSelector((state) => state.user.streamName);
  const streamUrl = `https://viewer.millicast.com/?streamId=${streamId}/${streamName}`;

  return (
    <div className="dashBoardWrapper">
      <div className="dashBoardContainer">
        <SideBar />
        <div className="dashBoardMain">
          <div className="dashBoardTitleContainer">
            <div className="dashBoardTitle">Stream Name</div>
          </div>
          <div className="streamContainer">
            {streamId ? (
              <iframe
                width="100%"
                height="100%"
                src={streamUrl}
                title="MyStreamName"
                allow="fullscreen"
              ></iframe>
            ) : (
              <>
                <iframe
                  width="100%"
                  height="100%"
                  src={streamUrl}
                  title="MyStreamName"
                  allow="fullscreen"
                ></iframe>
                <p>Select a stream from the browse tab!</p>
              </>
            )}
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

export default StreamViewer;
