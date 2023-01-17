import Header from "../components/Header"
import Footer from "../components/Footer";
import Button from "../components/Button"
import {useState, useEffect} from 'react'
import {useNavigate} from "react-router-dom"
import {toast} from "react-toastify"
import axios from "axios"

const Register = ( {onAdd} ) => {

  const [name , setName] = useState('')
  const [email , setEmail] = useState('')
  const [password , setPassword] = useState('')
  const [userName, setUserName] = useState('')
  const [confirmPassword , setConfirmPassword] = useState('')
  const [users, setUsers] = useState([])
  const [register, setRegister] = useState(false)

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
  
  // const res = await fetch('https://task-tracker-api-v1eh.onrender.com/api')
  const data = await res.json()
  return data
}

  const onSubmit = (e) => {
    e.preventDefault()  

    let errors = []

    if(!userName){
      toast.error('Please add an username')
      errors.push('1')
    }

    if(!name){
      toast.error('Please add your name')
        errors.push('1')
    }
    
    if(!email){
      toast.error('Please add your email')
      errors.push('1')
    }


    const mail = email.split('@')[0]
    const symbols = ["!", "#", "$", "%" ,"&", " ' " , "*", "+" , "-", "/", "=" , "?", "^", "_", " ` " , " {", "|" , "\\" , "\"", "(" , ")" ,  "," , ":" , ";" , "<" ,">" , "@", "[" ,"]"]
    if(symbols.includes(mail[0]) || symbols.includes(mail[mail.length-1])){
      toast.error("Symbols cannot be placed as the first or last character for the first part of your email before the \"@\" symbol" )
    }

    if(!password){
      toast.error('Please add a password')
      errors.push('1')
    }

    if(!confirmPassword){
      toast.error('Please confirm your password')
      errors.push('1')
    }

    if(password !== confirmPassword){
      toast.error("Passwords do not match, please try again")
      errors.push('1')
    }

    if(password.length < 8 || confirmPassword < 8){
      toast.error('Password needs to be at least 8 characters long')
      errors.push('1')
    }


    if(users){
      for(let i = 0; i <users.length; i++){
        if(users[i].email === email){
          toast.error('Email Address already exists')
         errors.push('1')
        }
      }
  
    }

    if(errors.length > 0){
      return 'Error'
    }
    
    
    onAdd({ userName, name, email, password, confirmPassword})

    setUserName('')
    setName('')
    setEmail('')
    setPassword('')
    setConfirmPassword('')

    const configuration = {
      method: "post",
      url: "https://task-api-pvi2.onrender.com/register",
      data: {
        email,
        password,
      }
    }

    axios(configuration)
        .then((result)=>{
          setRegister(true);
        })
        .catch((error)=>{        
          error = new Error();
        })
  
    if(register){
      navigate('/account')
    }else{
      navigate('/')
    }

}  




  return (
   <div>
      <Header/>
      <div id = 'main'>
        <article className = 'post' id = 'account'>
          <section className="major column flex">
            <h1 className = 'flex justifyContent'>Register Account</h1>

            <form className = 'flex column justifyContent alignItems' onSubmit = {onSubmit} >
            <div className="fields">
               
                <div className="field">
                    <label>Name</label>
                    <input type="text" name  ='name' value = {name} placeholder ='Enter your name' onChange = {(e)=>setName(e.target.value)}/>
                </div>
                <div className="field">
                    <label>User Name</label>
                    <input type="text" name  ='userName' value = {userName} placeholder ='Enter your user name' onChange = {(e)=>setUserName(e.target.value)}/>
                </div>
                <div className="field">
                    <label>Email</label>
                    <input type="email" name ='email' value = {email} placeholder ='Enter your email' onChange = {(e)=>setEmail(e.target.value)}/>
                </div>
                <div className="field">
                    <label>Password</label>
                    <input type="password" name ='password' value = {password} placeholder ='Confirm password' onChange = {(e)=>setPassword(e.target.value)} />
                </div>
                <div className="field">
                    <label>Confirm Password</label>
                    <input placeholder = 'Confirm password here' name="confirmPassword" type = 'password' value = {confirmPassword} onChange = {(e)=>setConfirmPassword(e.target.value)}></input>
                </div>
            </div>
                <input className = 'button' type="submit" value="Register Here" onClick = {(e)=>onSubmit(e)}/>
            </form>


            <ul className = 'special flex column'>
              <li className = 'flex justifyContent'>
                Already have an account?  Login below:
              </li>
              <li className = 'flex justifyContent'>
              <Button 
                domain = '/login'
                size = 'large'
                cname = 'button'
                text = 'Login Here'
              />
              </li>
            </ul>

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

export default Register