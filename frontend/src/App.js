import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import React, { Suspense, useState, useEffect, createContext } from 'react';
import {ToastContainer} from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import PrivateRoutes from "./middleware/PrivateRoutes"
import { createBrowserHistory } from "history";

function App() {

  const [users, setUsers] = useState([])
  const [id, setID] = useState('')
 
  const Home = React.lazy(() => import('./pages/Home'));
  const About = React.lazy(() => import('./pages/About'));
  const Dashboard = React.lazy(() => import('./pages/Dashboard'));
  const Register = React.lazy(() => import('./pages/Register'));
  const Login = React.lazy(() => import('./pages/Login'));
  const Account = React.lazy(() => import('./pages/Account'));
  const AddAudio = React.lazy(()=> import("./components/PostAudio"))

  const [userAccounts, setUserAccounts] = useState([])
  const [currentUser, setCurrentUser] = useState({})

  const fetchUsers = async () => {
    const res = await fetch('http://localhost:8000/api')
    
    const data = await res.json()
    return data
  }

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

  useEffect(() => {
    const history = createBrowserHistory();

    const addId = (userID) => {
      history.push(userID)
    }

    addId(id)
  }, [id]);


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

    setID(data.user._id);

    localStorage.setItem("token", data.token);
    localStorage.setItem("id", data.user._id);

    setUsers([...users, data])
    window.location.reload(false);


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

const data = await res.json()

setID(data.user._id);

localStorage.setItem("token", data.token);
localStorage.setItem("id", data.user._id);
  
setUsers([...users, data])
window.location.reload(false);

}

  
  return (
    <MyContext.Provider value = {currentUser}>
    <Suspense fallback={<div><p>Loading...</p></div>}>
    <Router>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path="/about" element={<About />} />
        <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/register" element={<Register onAdd = {registerUser}/>} />
            <Route path="/login" element={<Login onAdd = {loginUser} />} />
        <Route element={<PrivateRoutes />}>
            <Route path="/:id/addAudio" element={<AddAudio/>}/>
            <Route path="/:id" element={<Home/>} />
            <Route path="/:id/about" element={<About/>} />
            <Route path="/:id/dashboard" element={<Dashboard/>} />
            <Route element = {<Account />} path = '/:id/account'/>
        </Route>
      </Routes>
    </Router>
    <ToastContainer />
    </Suspense>
    </MyContext.Provider>
  );

}

export default App;


export const fetchUsers = async () => {
  try{
    const res = await fetch('http://localhost:8000/api')
    let users = {}
    const data = await res.json()
    data.find(ele=>{
      if(ele._id === localStorage.getItem('id')){
          users = ele
      }
    })
  return data
  }catch(err){
    console.error(err)
  }
  
}

const users = fetchUsers()

export const MyContext = createContext(users)