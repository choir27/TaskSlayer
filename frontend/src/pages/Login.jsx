import Header from "../components/Header"
import Footer from "../components/Footer";
import {toast} from "react-toastify"
import {useState, useEffect} from 'react'
import { useNavigate } from "react-router-dom";

const Login = ({onAdd}) => {

  const [email, setEmail] = useState('')
  const [password , setPassword] = useState('')
  const [users, setUsers] = useState([])

  const navigate = useNavigate()

  useEffect( () => {
    const getUsers = async () => {
      const usersFromServer = await fetchTasks()
      setUsers(usersFromServer)
    }

    getUsers()
  }, [])

//Fetch Tasks

const fetchTasks = async () => {
  const res = await fetch('http://localhost:8000/api')
  
  const data = await res.json()
  return data
}

const onSubmit = (e) => {
  e.preventDefault() 

  let errors = []

  if(!email){
    toast.error('Please add an email')
    errors.push('1')
  }

  if(!password){
    toast.error('Please add a password')
    errors.push('1')
  }

  if(users){
    for(let i = 0; i <users.length; i++){
      if(users[i].email === email){
          console.log('Success')
      }
    }
}

onAdd({ email, password})

setEmail('')
setPassword('')

navigate('/Account')
}

  return (
   <div>
      <Header/>
      <div id = 'main'>
        <article className = 'post' id = 'account'>
          <section className="major column flex">
            <h1 className = 'flex justifyContent'>Login</h1>

            <form onSubmit = {onSubmit} className = 'flex column justifyContent alignItems' method="POST" action="#">
            <div className="fields">  
                <div className="field">
                    <label>Email</label>
                    <input placeholder = 'Put your email here' type="text" name="email" value = {email} onChange = {(e)=>setEmail(e.target.value)}/>
                </div>
                <div className="field">
                    <label>Password</label>
                    <input placeholder = 'Put your password here' type="password" name="password" value = {password} onChange = {(e)=>setPassword(e.target.value)}/>
                </div>
            </div>
                <input className = 'button' type="submit" value="Login Here" />
            </form>

          </section>
        </article>
      </div>

      <Footer/>

      <div id="copyright">
	      &copy; choir Design: HTML5 UP
      </div>

    </div>  
  )
}

export default Login