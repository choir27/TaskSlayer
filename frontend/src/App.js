import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import React, { Suspense } from 'react';
import { useState } from 'react'

function App() {

  const [users, setUsers] = useState([])


  const Home = React.lazy(() => import('./pages/Home'));
  const About = React.lazy(() => import('./pages/About'));
  const Dashboard = React.lazy(() => import('./pages/Dashboard'));
  const Register = React.lazy(() => import('./pages/Register'));
  const Login = React.lazy(() => import('./pages/Login'));

  const registerUser = async (user) => {
  
    const res = await fetch(`http://localhost:8000/register`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json'      
    },
    body: JSON.stringify(user )
  })

  const data = await res.json()

  setUsers([...users, data])
}


  return (
    <Suspense fallback={<div><p>Loading...</p></div>}>
    <Router>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register onAdd = {registerUser}/>} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
    </Suspense>
  );
}

export default App;


