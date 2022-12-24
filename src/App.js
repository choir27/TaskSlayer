import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Header from "./components/Header"
import Home from "./pages/Home"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Gameplay from "./pages/Gameplay"

function App() {
  return (
    <>
    <Router>
    <div>
      <Header hori = {horizontalVertical} vert = {centerVertical}/>
      <Routes>
        <Route path = '/' element = {<Home vert = {centerVertical}/>} />
        <Route path = '/about' element = {<About/>} />
        <Route path = '/gameplay' element = {<Gameplay/>} />
        <Route path = '/contact' element = {<Contact/>} />
      </Routes>
    </div>
    </Router>
    </>
  );
}

export default App;

const horizontalVertical ={
  "display" : "flex", "alignItems": "center", "flexDirection": "row", "justifyContent": "center"
}

const centerVertical ={
  "display" : "flex", "alignItems": "center", "flexDirection": "column", "justifyContent": "center"
}