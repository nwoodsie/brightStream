import "./App.css";
import "./Variables.css"
import NavBar from "./components/NavBar/NavBar.js"
import { HomePage, ClassPage } from "./components/index.js"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
          <Routes>
            <Route exact path='/' element={<HomePage />}/>
            <Route exact path='/Class' element={<ClassPage />}/>
          </Routes>
      </Router>
    </div>
  )
}

export default App;
