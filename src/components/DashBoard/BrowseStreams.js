import React, { useState } from "react";
import "./BrowseStreams.css";
import SideBar from "./SideBar.js";
import { allStreams } from "./helpers.js";
import { useDispatch } from "react-redux";
import { setCurrentStream } from "../../features/userSlice";
import { useNavigate } from "react-router-dom";
import { getDocs, collection } from "firebase/firestore";
import { Oval } from "react-loader-spinner";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";

function BrowseStreams() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const redirect = () => navigate("/ViewStream", { replace: true });
  const [isLoading, setIsLoading] = useState({
    userId: "",
    isLoading: true,
  });

  const handleStreamClick = async (e) => {
    e.preventDefault();
    try {
      dispatch(
        setCurrentStream({
          userId: "cpCF9L",
          streamName: "myStreamName",
        })
      );
      await new Promise((resolve) => {
        setIsLoading({ userId: "cpCF9L", isLoading: true });
        setTimeout(resolve, 1000);
      });
      redirect();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="dashBoardWrapper">
      <div className="dashBoardContainer">
        <SideBar />
        <div className="dashBoardMain">
          <div className="dashBoardTitle">Browse Streams</div>
          <div className="allStreamsGrid">
            {allStreams.map((stream) => (
              <div
                className="cardWrapper"
                onClick={(e) => handleStreamClick(e)}
              >
                <div className="streamCard">
                  {isLoading.userId === stream.userId ? (
                    <Oval
                      height={80}
                      width={80}
                      color="#92cbdf"
                      wrapperStyle={{}}
                      wrapperClass=""
                      visible={true}
                      ariaLabel="oval-loading"
                      secondaryColor="#b3dbe9"
                      strokeWidth={2}
                      strokeWidthSecondary={2}
                    />
                  ) : (
                    <PlayCircleIcon />
                  )}
                </div>
                <div className="streamTextContainer">
                  <div className="streamTitle">{stream.name}</div>
                  <div className="streamSubTitle">Topic: {stream.topic}</div>
                  <div className="streamSubTitle">{stream.author}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default BrowseStreams;
