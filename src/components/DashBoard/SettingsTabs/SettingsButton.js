import React from "react";
import "./SettingsButton.css";
import EditIcon from "@mui/icons-material/Edit";
import AddIcon from "@mui/icons-material/Add";
import SaveIcon from "@mui/icons-material/Save";
import ConnectedTvIcon from "@mui/icons-material/ConnectedTv";
import DesktopAccessDisabledIcon from "@mui/icons-material/DesktopAccessDisabled";

function SettingsButton({ text, onClick }) {
  const Icons = {
    Edit: EditIcon,
    Add: AddIcon,
    Save: SaveIcon,
    GoOnline: ConnectedTvIcon,
    GoOffline: DesktopAccessDisabledIcon,
  };

  const IconToRender = Icons[text];

  return (
    <div className="settingsButtonContainer" onClick={onClick}>
      {text}
      <IconToRender />
    </div>
  );
}

export default SettingsButton;
