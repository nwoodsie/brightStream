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
  StreamViewer,
  DolbyPage,
  SchedulePage,
  PrivacyPage,
  BrowseStreams,
  SettingsPage,
} from "./components/index.js";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice.js";

function App() {
  const user = useSelector(selectUser);
  return (
    <div className="App">
      {user ? (
        <Router>
          <Routes>
            <Route exact path="/" element={<DashBoard />} />
            <Route exact path="/BrowseStreams" element={<BrowseStreams />} />
            <Route exact path="/ViewStream" element={<StreamViewer />} />
            <Route exact path="/Settings" element={<SettingsPage />} />
          </Routes>
        </Router>
      ) : (
        <Router>
          <NavBar />
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route exact path="/Class" element={<ClassPage />} />
            <Route exact path="/GetStarted" element={<GSPage />} />
            <Route exact path="/Login" element={<LoginPage />} />
            <Route exact path="/Collaborate" element={<CollaboratePage />} />
            <Route exact path="/Privacy" element={<PrivacyPage />} />
            <Route exact path="/Schedule" element={<SchedulePage />} />
            <Route exact path="/Dolby" element={<DolbyPage />} />
          </Routes>
        </Router>
      )}
    </div>
  );
}

export default App;
