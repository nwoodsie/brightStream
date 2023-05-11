import React, { useState } from "react";
import "./ProfileTab.css";
import SettingsButton from "./SettingsButton.js";
import { Box, FormControlLabel, Switch } from "@mui/material";

function ProfileTab() {
  const handleSaveStreamDetails = () => {
    alert("Stream Details Saved!");
  };

  const [checked, setChecked] = useState(false);
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
            <div className="personalInformationText">Name: Noah Woods</div>
            <div className="personalInformationText">
              Email: noahnwoods@gmail.com
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
              <label className="inputLabel">Dolby Stream ID:</label>
              <input
                className="inputBox"
                type="text"
                required
                placeholder={"Dolby Stream ID"}

                // onChange={(e) => setEmail(e.target.value)}
              />
              <label className="inputLabel">Dolby Stream Name:</label>
              <input
                className="inputBox"
                type="text"
                required
                placeholder={"Dolby Steam Name"}
                // onChange={(e) => setPassword(e.target.value)}
              />
              <label className="inputLabel">Stream Topic:</label>
              <input
                className="inputBox"
                type="text"
                required
                placeholder={"Topic..."}
                // onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="streamingInfoBlock">
              <label className="inputLabel">Bright Stream Display Name:</label>
              <input
                className="inputBox"
                type="text"
                required
                placeholder={"Display Name"}
                // onChange={(e) => setEmail(e.target.value)}
              />
              <label className="inputLabel">BrightStream Stream Title:</label>
              <input
                className="inputBox"
                type="text"
                required
                placeholder={"Stream Name"}
                // onChange={(e) => setPassword(e.target.value)}
              />
              <div className="smallBreak" />
              <FormControlLabel
                control={<Switch />}
                checked={checked}
                onChange={() => setChecked(!checked)}
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
