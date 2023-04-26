import "./App.css";
import "./Variables.css";
import NavBar from "./components/NavBar/NavBar.js";

import {
  HomePage,
  ClassPage,
  DashBoard,
  GSPage,
  LoginPage,
  ClassRoom,
} from "./components/index.js";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

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
          </Routes>
        </Router>
      ) : (
        <Router>
          <Routes>
            <Route exact path="/" element={<DashBoard />} />
            <Route exact path="/ViewStream" element={<ClassRoom />} />\
            <Route exact path="/HostStream" element={<DashBoard />} />
          </Routes>
        </Router>
      )}
    </div>
  );
}

export default App;
