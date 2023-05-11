import React, { useState } from "react";
import "./GSPage.css";
import { DefaultButton } from "../../index.js";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../../firebase.js";
import { setDoc, doc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../../../features/userSlice";

function GSPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCPassword] = useState("");

  const navigate = useNavigate();
  const redirect = () => navigate("/", { replace: true });

  const dispatch = useDispatch();

  const onRegister = (e) => {
    e.preventDefault();

    //Authentication firebase + Cloud firestore nested inside function
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;

        //Cloud firestore database to store new registered user
        const userData = {
          user_id: user.uid,
          name: name,
          email: email,
          password: password,
          dolby_creds: {
            displayName: name,
            isLive: false,
            streamId: "",
            streamName: "myStreamName",
            streamTitle: "",
            streamTopic: "",
          },
        };
        setDoc(doc(db, "users", user.uid), userData);

        dispatch(
          login({
            user: user.uid,
            isLoggedIn: true,
          })
        );
        alert("Account Created!");
        redirect();
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);
        alert(errorMessage);
      });
  };

  return (
    <div className="gsWrapper">
      <div className="gsContainer">
        <div className="gsTitle">Create your account</div>
        <form>
          <div className="gsForm">
            <label className="gsLabel" id="nameLabel">
              Name:
            </label>
            <input
              className="gsInput"
              type="text"
              id="name"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <label className="gsLabel" id="emailLabel">
              Email:
            </label>
            <input
              className="gsInput"
              type="text"
              id="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label className="gsLabel" id="passwordLabel">
              Password:
            </label>
            <input
              className="gsInput"
              type="password"
              id="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div>
            <label className="gsLabel" id="cpasswordLabel">
              Confirm Password:
            </label>
            <input
              className="gsInput"
              type="password"
              id="cpassword"
              required
              value={cpassword}
              onChange={(e) => setCPassword(e.target.value)}
            />
          </div>
          <div className="gsButtonContainer">
            <DefaultButton
              text="Create Account"
              size="Big"
              onClick={onRegister}
            />
          </div>
        </form>
      </div>
    </div>
  );
}

export default GSPage;
