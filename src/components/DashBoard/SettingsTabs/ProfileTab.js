import React, { useEffect, useState } from "react";
import "./ProfileTab.css";
import SettingsButton from "./SettingsButton.js";
import { Box, FormControlLabel, Switch } from "@mui/material";
import { db } from "../../firebase.js";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  setDoc,
  where,
} from "firebase/firestore";
import { selectUser } from "../../../features/userSlice.js";
import { useSelector } from "react-redux";

function ProfileTab() {
  const user_id = useSelector(selectUser).user;

  const [userFireStoreData, setUserFireStoreData] = useState({
    dolby_creds: {
      streamId: "",
      streamName: "",
      streamDisplayName: "",
      streamTitle: "",
      streamTopic: "",
      isLive: "",
    },
  });
  const docRef = doc(db, "users", user_id);

  async function getUserData() {
    const userdata = await getDoc(docRef);
    if (userdata.exists()) {
      setUserFireStoreData(userdata.data());
    } else {
      // docSnap.data() will be undefined in this case
      console.log("No such document!");
    }
  }

  useEffect(() => {
    getUserData();
  }, []);

  const [streamId, setStreamId] = useState("");
  const [streamName, setStreamName] = useState("");
  const [streamDisplayName, setStreamDisplayName] = useState("");
  const [streamTitle, setStreamTitle] = useState("");
  const [streamTopic, setStreamTopic] = useState("");
  const [isLive, setIsLive] = useState(false);

  const streamingData = {
    dolby_creds: {
      streamId: streamId,
      streamName: streamName,
      streamDisplayName: streamDisplayName,
      streamTitle: streamTitle,
      streamTopic: streamTopic,
      isLive: isLive,
    },
  };

  const setUserdata = async () =>
    await setDoc(docRef, streamingData, { merge: true });

  const handleSaveStreamDetails = async () => {
    if (
      streamingData.dolby_creds.streamId &&
      streamingData.dolby_creds.streamName &&
      streamingData.dolby_creds.streamDisplayName &&
      streamingData.dolby_creds.streamTitle &&
      streamingData.dolby_creds.streamTopic
    ) {
      await setUserdata();
      alert("Stream Details Saved!");
    } else {
      alert("Please Fill out every field");
    }
  };
  const handleIsLiveChange = async (isLive) =>
    await setDoc(docRef, isLive, { merge: true });

  useEffect(() => {
    handleIsLiveChange({ dolby_creds: { isLive: isLive } });
  }, [isLive]);

  return (
    <>
      <div className="personalContainer">
        <div className="personalInformationSection">
          <div className="personalInformationTitle">Personal Information</div>
          <SettingsButton text="Edit" />
        </div>
        <div className="personalInformationSection">
          <div className="personalInformationBottomLeft">
            <img src={require("./../profilePicture.jpg")} alt="" />
          </div>
          <div className="personalInformationBottomRight">
            <div className="personalInformationText">
              Name: {userFireStoreData.name ?? "Email"}
            </div>
            <div className="personalInformationText">
              Email: {userFireStoreData.email ?? "Email"}
            </div>
            <div className="personalInformationText">
              On Air: {userFireStoreData.dolby_creds?.isLive ? "Yes" : "No"}
            </div>
          </div>
        </div>
      </div>
      <div className="streamingContainer">
        <div className="personalInformationSection">
          <div className="personalInformationTitle">Streaming Set-Up</div>
          <div className="saveButtonWrapper">
            <SettingsButton
              text="Save"
              onClick={() => handleSaveStreamDetails()}
            />
          </div>
        </div>
        <form>
          <div className="formWrapper">
            <div className="streamingInfoBlock">
              <label className="inputLabel">
                Dolby Stream ID:
                {userFireStoreData.dolby_creds?.streamId}
              </label>
              <input
                className="inputBox"
                type="text"
                required
                placeholder={"Set New Dolby Stream ID"}
                value={streamId}
                onChange={(e) => setStreamId(e.target.value)}
              />
              <label className="inputLabel">
                Dolby Stream Name: {userFireStoreData.dolby_creds?.streamName}
              </label>
              <input
                className="inputBox"
                type="text"
                required
                placeholder={"Set New Dolby Stream Name"}
                value={streamName}
                onChange={(e) => setStreamName(e.target.value)}
              />
              <label className="inputLabel">
                Stream Topic: {userFireStoreData.dolby_creds?.streamTopic}
              </label>
              <input
                className="inputBox"
                type="text"
                required
                placeholder={"Set New Topic"}
                value={streamTopic}
                onChange={(e) => setStreamTopic(e.target.value)}
              />
            </div>
            <div className="streamingInfoBlock">

              <label className="inputLabel">Bright Stream Display Name:</label>

              <label className="inputLabel">
                Display Name:
                {userFireStoreData.dolby_creds?.streamDisplayName}
              </label>
              <input
                className="inputBox"
                type="text"
                required
                placeholder={"Set New Display Name"}
                value={streamDisplayName}
                onChange={(e) => setStreamDisplayName(e.target.value)}
              />

              <label className="inputLabel">
                Stream Title:
                {userFireStoreData.dolby_creds?.streamTitle}
              </label>
              <input
                className="inputBox"
                type="text"
                required
                placeholder={"Stream Name"}
                value={streamTitle}
                onChange={(e) => setStreamTitle(e.target.value)}
              />
              <div className="smallBreak" />
              <FormControlLabel
                control={<Switch />}
                checked={isLive}
                onChange={() => setIsLive(!isLive)}
                label={
                  <Box component="div" fontSize={20}>
                    On Air:
                  </Box>
                }
                labelPlacement="start"
              />
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default ProfileTab;
