import React, { useEffect, useState } from "react";
import "./BrowseStreams.css";
import SideBar from "./SideBar.js";
import { allStreams } from "./helpers.js";
import { useDispatch } from "react-redux";
import { setCurrentStream } from "../../features/userSlice";
import { useNavigate } from "react-router-dom";

import { db } from "../firebase.js";
import { collection, getDocs } from "firebase/firestore";

import { Oval } from "react-loader-spinner";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";

function BrowseStreams() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const redirect = () => navigate("/ViewStream", { replace: true });
  const [isLoading, setIsLoading] = useState({
    streamId: "",
    isLoading: true,
  });

  const findAll = async () => {
    const doc_refs = await getDocs(collection(db, "users"));
    const res = [];

    doc_refs.forEach((user) => {
      res.push({
        id: user.id,
        ...user.data(),
      });
    });

    return res;
  };

  const [streamData, setStreamData] = useState([]);

  const fetchData = async () => {
    const res = await findAll();
    console.log({ response: res });
    const streamData = [];
    res.map((user) => {
      if (user.dolby_creds.isLive) streamData.push(user.dolby_creds);
    });
    setStreamData(streamData);
  };

  useEffect(() => {
    fetchData();
  }, []);

  console.log({ streamData });

  const handleStreamClick = async (
    streamId,
    streamName,
    streamDisplayName,
    streamTitle,
    streamTopic
  ) => {
    try {
      dispatch(
        setCurrentStream({
          streamId: streamId,
          streamName: streamName,
          streamDisplayName: streamDisplayName,
          streamTitle: streamTitle,
          streamTopic: streamTopic,
        })
      );
      await new Promise((resolve) => {
        setIsLoading({ userId: streamId, isLoading: true });
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
            {streamData.map((stream) => (
              <div
                className="cardWrapper"
                value={stream.streamId}
                onClick={() =>
                  handleStreamClick(
                    stream.streamId,
                    stream.streamName,
                    stream.streamDisplayName,
                    stream.streamTitle,
                    stream.streamTopic
                  )
                }
              >
                <div className="streamCard">
                  {isLoading.userId === stream.streamId ? (
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
                  <div className="streamTitle">
                    {stream.streamTitle ?? "Untitled Stream"}
                  </div>
                  <div className="streamSubTitle">
                    Topic: {stream.streamTopic ?? "No Topic"}
                  </div>
                  <div className="streamSubTitleStreamer">
                    {stream.displayName ?? "Untitled Streamer"}
                  </div>
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
