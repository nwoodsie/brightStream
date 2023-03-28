import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar.js";
import HomePage from "./components/Pages/HomePage/HomePage.js";
import ClassPage from './components/Pages/ClassPage/ClassPage';

function App() {
  return (
    <Router>
      <NavBar/>
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/Class' element={<ClassPage/>} />
      </Routes>
    </Router>
  )
}

export default App;
