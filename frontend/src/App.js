import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import React, { Suspense, useState, useEffect, createContext } from 'react';
import {ToastContainer} from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import PrivateRoutes from "./middleware/PrivateRoutes"


function App() {

  const [users, setUsers] = useState([])
  const [userAccounts, setUserAccounts] = useState([])
  const [currentUser, setCurrentUser] = useState({})

  useEffect( () => {
    const getUsers = async () => {
      const usersFromServer = await fetchUsers()
      setUserAccounts(usersFromServer)
    }

    getUsers()
  }, [])

useEffect(()=>{
  if(userAccounts)
  {
    setCurrentUser(userAccounts.find(ele=>ele._id === localStorage.getItem('id')))
  }
}, [currentUser, userAccounts])


  const fetchUsers = async () => {
    const res = await fetch('http://localhost:8000/api')
    
    const data = await res.json()
    return data
  }




  const registerUser = async (user) => {
    const res = await fetch(`http://localhost:8000/register`, {
      credentials: 'include',
      method: 'POST',
      headers: {
        'Content-type': 'application/json'      
      },
      body: JSON.stringify(user)
    })
  
    const data = await res.json()

    localStorage.setItem("id", data.user._id);

    setUsers([...users, data])


}


const loginUser = async (user) => {
  
  const res = await fetch(`http://localhost:8000/login`, {
  credentials: 'same-origin',
  method: 'POST',
  headers: {
    'Content-type': 'application/json'      
  },
  body: JSON.stringify(user )
})

const data = await res.json();

localStorage.setItem("id", data.user._id);
  
setUsers([...users, data])

}




const Home = React.lazy(() => import('./pages/Home'));
const About = React.lazy(() => import('./pages/About'));
const Dashboard = React.lazy(() => import('./pages/Dashboard'));
const Register = React.lazy(() => import('./pages/Register'));
const Login = React.lazy(() => import('./pages/Login'));
const Account = React.lazy(() => import('./pages/Account'));
const AddAudio = React.lazy(()=> import("./components/PostAudio"))

  
  return (
    <Suspense fallback={<div><p>Loading...</p></div>}>
    <Router>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path="/about" element={<About />} />
        <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/register" element={<Register onAdd = {registerUser}/>} />
            <Route path="/login" element={<Login onAdd = {loginUser} />} />
        <Route element={<PrivateRoutes />}>
            <Route path="/addAudio" element={<AddAudio/>}/>
            <Route element = {<Account />} path = '/account'/>
        </Route>
      </Routes>
    </Router>
    <ToastContainer />
    </Suspense>
  );

}

export default App;


export const fetchUsers = async () => {
  try{
    const res = await fetch('http://localhost:8000/api')
    const data = await res.json()
    data.find(ele=>{
      if(ele._id === localStorage.getItem('id')){
          return {ele}
      }
    })
  return data
  }catch(err){
    console.error(err)
  }
  
}

const users = fetchUsers()

export const MyContext = createContext(users)