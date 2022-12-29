import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from "./pages/Home"
import About from "./pages/About"
import Account from "./pages/Account"
import Dashboard from "./pages/Dashboard"
import PropTypes from 'prop-types';

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route exact path="/" element={<Home css={centerVertical} />} />
        <Route path="/about" element={<About />} />
        <Route path="/account" element={<Account />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;

const centerVertical ={
  "display" : "flex", 
  "alignItems": "center", 
  "flexDirection": "column", 
  "justifyContent": "center"
}



App.propTypes = {
  css: PropTypes.string
};



