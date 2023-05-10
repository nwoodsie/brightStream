import React, { useState } from "react";
import "./LoginPage.css";
import { auth } from "../../firebase.js";
import { DefaultButton } from "../../index.js";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../../../features/userSlice";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const redirect = () => navigate("/", { replace: true });

  const dispatch = useDispatch();

  const onLogin = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        dispatch(
          login({
            user: user.uid,
            isLoggedIn: true,
          })
        );
        redirect();
      })
      .catch((error) => {
        // const errorCode = error.code;
        // const errorMessage = error.message;
        // console.log(errorCode, errorMessage);
        alert("Invalid Username/Password");
      });
  };

  return (
    <div className="loginWrapper">
      <div className="loginContainer">
        <div className="loginTitle">Log in to BrightStream</div>
        <form>
          <div className="loginForm">
            <label className="loginLabel" id="emailLabel">
              Email:
            </label>
            <input
              className="loginInput"
              type="text"
              id="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label className="loginLabel" id="passwordLabel">
              Password:
            </label>
            <input
              className="loginInput"
              type="password"
              id="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="loginButtonContainer" onClick={onLogin}>
            <DefaultButton text="Log in" size="Big" />
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
