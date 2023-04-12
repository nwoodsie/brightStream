import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar1 from "./components/NavBar/NavBar.js";
import HomePage from "./components/Pages/HomePage/HomePage.js";
import ClassPage from './components/Pages/ClassPage/ClassPage.js';
import SchedulePage from './components/Pages/SchedulePage/SchedulePage';
import CollaboratePage from './components/Pages/CollaboratePage/CollaboratePage';
import QuizPage from './components/Pages/QuizPage/QuizPage';
import PrivacyPage from './components/Pages/PrivacyPage/PrivacyPage';
import LoginPage from './components/Pages/LoginPage/LoginPage';
import GSPage from './components/Pages/GSPage/GSPage';

function App() {
  return (
    <Router>
      <NavBar1/>
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/Class' element={<ClassPage/>} />
        <Route path='/Schedule' element={<SchedulePage/>} />
        <Route path='/Collaborate' element={<CollaboratePage/>} />
        <Route path='/Quiz' element={<QuizPage/>} />
        <Route path='/Privacy' element={<PrivacyPage/>} />
        <Route path='/Login' element={<LoginPage/>} />
        <Route path='/GetStarted' element={<GSPage/>} />
      </Routes>
    </Router>
  )
}

export default App;
