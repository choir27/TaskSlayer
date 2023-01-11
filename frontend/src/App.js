import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import React, { Suspense } from 'react';
import { useState } from 'react'
import {ToastContainer} from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import {ensureAuth} from "./middleware/auth"

function App() {

  const [users, setUsers] = useState([])

  const Home = React.lazy(() => import('./pages/Home'));
  const About = React.lazy(() => import('./pages/About'));
  const Dashboard = React.lazy(() => import('./pages/Dashboard'));
  const Register = React.lazy(() => import('./pages/Register'));
  const Login = React.lazy(() => import('./pages/Login'));
  const Account = React.lazy(() => import('./pages/Account'));

  

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


const loginUser = async (user) => {
  
  const res = await fetch(`http://localhost:8000/login`, {
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
        <Route path="/login" element={<Login onAdd = {loginUser} />} />
        <Route path="/register" element={<Register onAdd = {registerUser}/>} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/account" element={<Account ensureAuth = {ensureAuth}/>} />
      </Routes>
    </Router>
    <ToastContainer />
    </Suspense>
  );
}

export default App;


