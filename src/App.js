import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from "./pages/Home"
import About from "./pages/About"
import Media from "./pages/Media"
import Gameplay from "./pages/Gameplay"
import Dashboard from "./pages/Dashboard"

function App() {
  return (
    <>
    <Router>
    <div>
      <Routes>
        <Route path = '/' element = {<Home vert = {centerVertical}/>} />
        <Route path = '/about' element = {<About/>} />
        <Route path = '/gameplay' element = {<Gameplay/>} />
        <Route path = '/media' element = {<Media/>} />
        <Route path = '/dashboard' element = {<Dashboard/>} />

      </Routes>
    </div>
    </Router>
    </>
  );
}

export default App;

const centerVertical ={
  "display" : "flex", "alignItems": "center", "flexDirection": "column", "justifyContent": "center"
}