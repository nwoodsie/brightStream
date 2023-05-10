import React from "react";
import "./QuizPage.css";
import { DefaultButton } from "../../index.js";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { selectPage } from "../../../features/userSlice.js";

const quiztext =  "Ability to share multimedia content, embed quizzes and polls within the session, and facilitate real-time feedback from teachers or peers. Teachers can communicate with their students easily with discussion boards.";
function QuizPage(){
    
    const dispatch = useDispatch();
    const onNavClick = (nav) => {
      dispatch(selectPage(nav));
    };

    return (
        <div className = "quizWrapper">
            <div className = "quizContainer">
                <div className = "quizLeft">
                <div className = "quizText">
                    {quiztext}
                </div>
                <div className = "buttonContainerWrapper">
               
                <div className = "quizbuttonContainer">
                <Link to="/GetStarted" style={{ textDecoration: "none" }}>
                <DefaultButton text="Get Started" size= "Big" onClick={() => onNavClick(null)} />
                </Link></div>
                </div>
                <div className = "quizImage"><img src={require("./QuizPageImage.png")} width={491} height={341} alt=""></img></div>
                </div>
                
                <div className = "quizTitle">
                    Interactive Learning <br /> Features
                </div>
                             
                
               
            </div>
            
        </div>
    )

    
}
export default QuizPage