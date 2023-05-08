import React from "react";
import "./PrivacyPage.css";
import { DefaultButton } from "../../index.js";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { selectPage } from "../../../features/userSlice.js";


const privacytext =
  "Strict security measures are in place to ensure student privacy and prevent unauthorized access to sessions, such as requiring passwords and two-factor authentication. ";
function PrivacyPage() {

  const dispatch = useDispatch();
  const onNavClick = (nav) => {
    dispatch(selectPage(nav));
  };

  return (
    <div className="privacyWrapper">
      <div className="privacyContainer">
        <div className="privacyLeft">
          <img src={require("./PrivacyPageImage.png")} alt=""></img>
        </div>
        <div className="privacyRight">
          <div className="privacyTitle">
            Robust security <br /> measures
          </div>
          <div className="privacyText">{privacytext}</div>

          <div className="buttonContainer">
          <Link to="/GetStarted" style={{ textDecoration: "none" }}>
          <DefaultButton text="Get Started" size= "Big" onClick={() => onNavClick(null)} />
        </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PrivacyPage;
