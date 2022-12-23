import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Header from "./components/Header"
import Dashboard from "./pages/Dashboard"
import Home from "./pages/Home"

function App() {
  return (
    <>
    <Router>
    <div className = 'container'>
      <Header />
      <Routes>
        <Route path = '/' element = {<Home/>} />
        <Route path = '/dashboard' element = {<Dashboard/>} />
      </Routes>
    </div>
    </Router>
    </>
  );
}

export default App;
