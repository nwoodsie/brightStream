import React from "react";
import "./SettingsButton.css";
import EditIcon from "@mui/icons-material/Edit";
import AddIcon from "@mui/icons-material/Add";
import SaveIcon from "@mui/icons-material/Save";

function SettingsButton({ text, onClick }) {
  const Icons = {
    Edit: EditIcon,
    Add: AddIcon,
    Save: SaveIcon,
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
