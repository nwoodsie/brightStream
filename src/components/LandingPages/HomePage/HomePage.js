import React from "react";
import "./HomePage.css";
import { DefaultButton } from "../../index.js";

const hometext =
  "Access a range of features, including live classes with real-time interaction, interactive quizzes and assessments, group breakout rooms, and collaborative learning tools. Our platform is designed to provide seamless and immersive online learning that mirrors the in-person classroom experience as closely as possible.";

function HomePage() {
  return (
    <div className="homeWrapper">
      <div className="homeContainer">
        <div className="homeLeft">
          <div className="homeTitle">
            Designed for <br /> online learning
          </div>
          <div className="homeText">{hometext}</div>
          <div className="homeButtonContainer">
            <DefaultButton text="Get started" size="Big" />
          </div>
        </div>
        <div className="homeRight">
          <img src={require("./HomePageImage.png")} alt=""></img>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
