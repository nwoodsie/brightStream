import "./App.css";
import "./Variables.css";
import NavBar from "./components/NavBar/NavBar.js";

import {
  HomePage,
  ClassPage,
  CollaboratePage,
  DashBoard,
  GSPage,
  LoginPage,
  ClassRoom,
  ViewStream,
} from "./components/index.js";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";

function App() {
  const isLoggedIn = false;

  return (
    <div className="App">
      {isLoggedIn ? (
        <Router>
          <NavBar />
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route exact path="/Class" element={<ClassPage />} />
            <Route exact path="/GetStarted" element={<GSPage />} />
            <Route exact path="/Login" element={<LoginPage />} />
            <Route exact path="/Collaborate" element={<CollaboratePage />} />
          </Routes>
        </Router>
      ) : (
        <Router>
          <Routes>
            <Route exact path="/" element={<DashBoard />} />
            <Route exact path="/ViewStream" element={<ViewStream />} />
            <Route exact path="/HostStream" element={<ClassRoom />} />
          </Routes>
        </Router>
      )}
    </div>
  );
}

export default App;
