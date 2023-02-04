import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import React, { Suspense, useState } from 'react';
import {ToastContainer} from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import PrivateRoutes from "./middleware/PrivateRoutes"
import RegisterLoginRoutes from './middleware/RegisterLoginRoutes';

function App() {

  const [users, setUsers] = useState([])
  const [audios, setAudio] = useState([])

  const Home = React.lazy(() => import('./pages/Home'));
  const About = React.lazy(() => import('./pages/About'));
  const Dashboard = React.lazy(() => import('./pages/Dashboard'));
  const Register = React.lazy(() => import('./pages/Register'));
  const Login = React.lazy(() => import('./pages/Login'));
  const Account = React.lazy(() => import('./pages/Account'));


  const addAudio = async (audio) => {
    const res = await fetch('http://localhost:8000/addAudio', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(audio)
    })

    const data = await res.json();
    setAudio([...audios, data])
  }


  const registerUser = async (user) => {
  
    const res = await fetch(`http://localhost:8000/register`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'      
      },
      body: JSON.stringify(user)
    })
  
    const data = await res.json()


    localStorage.setItem("token", data.token);
    localStorage.setItem("email", data.user.email);
    localStorage.setItem("name", data.user.name);
    localStorage.setItem("userName", data.user.userName)

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

console.log(data)

localStorage.setItem("token", data.token);
localStorage.setItem("email", data.user.email);
localStorage.setItem("name", data.user.name);
localStorage.setItem("userName", data.user.userName)
localStorage.setItem("id", data.user._id);
  
setUsers([...users, data])

}

  
  return (
    <Suspense fallback={<div><p>Loading...</p></div>}>
    <Router>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path="/about" element={<About />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route element = {<RegisterLoginRoutes/>}>
            <Route path="/register" element={<Register onAdd = {registerUser}/>} />
            <Route path="/login" element={<Login onAdd = {loginUser} />} />
        </Route>
        <Route element={<PrivateRoutes />}>
            <Route element = {<Account onAdd = {addAudio}/>} path = '/account/:id'/>
        </Route>
      </Routes>
    </Router>
    <ToastContainer />
    </Suspense>
  );
}


export default App;


