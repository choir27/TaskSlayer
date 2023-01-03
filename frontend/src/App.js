import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import {ToastContainer} from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import PropTypes from 'prop-types';
import React, { Suspense } from 'react';

function App() {

  const Home = React.lazy(() => import('./pages/Home'));
  const About = React.lazy(() => import('./pages/About'));
  const Dashboard = React.lazy(() => import('./pages/Dashboard'));
  const Account = React.lazy(() => import('./pages/Account'));
  const Login = React.lazy(() => import('./pages/Login'));

  return (
    <Suspense fallback={<div><p>Loading...</p></div>}>
    <Router>
      <Routes>
        <Route exact path="/" element={<Home css={centerVertical} />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/account" element={<Account />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
    <ToastContainer />
    </Suspense>
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



