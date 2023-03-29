import './App.css'
import Header from "./components/Header/Header.js"
import HomePage from "./components/HomePage/HomePage.js"
import Content from './Content'
import DolbyBase from "./DolbyBase.js"

function App() {
  return (
    <DolbyBase>
      <Content />
    </DolbyBase>
    // <div className="App">
    //   <Header />
    //   <HomePage />
    // </div>
  )
}

export default App;
