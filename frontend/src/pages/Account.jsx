import Header from "../components/Header"
import Footer from "../components/Footer";
import Button from "../components/Button"

import {useState, useEffect} from 'react'
import {useSelector, useDispatch} from "react-redux"
import {useNavigate} from "react-router-dom"
import {toast} from "react-toastify"
import {FaUser} from 'react-icons/fa'
import {register, reset} from "../features/auth/authSlice"
import Spinner from "../components/Spinner"

//useSelect selects something from the state () like user
//dispatch a function like register()
const Account = () => {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password2: '',
  })

  const {name, email, password, password2} = formData

  const navigate = useNavigate()
  const dispatch = useDispatch()
  
  const {user, isLoading, isError, isSuccess, message} = useSelector((state)=>state.auth) 

  useEffect(()=>{
    if(isError){
      toast.error(message)
    }

    if(isSuccess || user){
      navigate('/')
    }

    dispatch(reset())

  }, [user, isError, isSuccess, message, navigate, dispatch])

  const onChange = (e) => {
    setFormData((prevState) => ({
     ...prevState,
     [e.target.name] : e.target.value
    }))
  }

  const onSubmit = (e) => {
    e.preventDefault()

    if(password !== password2){
      toast.error("passwords do not match")
    }else{
      const userData = {
        name, email, password
      }

      dispatch(register(userData))
    }
  }

  if(isLoading){
    return <Spinner />
  }


  
  return (
   <div>
      <Header/>
      <div id = 'main'>
        <article className = 'post' id = 'account'>
          <section className="major column flex">
            <h1 className = 'flex justifyContent'>Account</h1>

            <form className = 'flex column justifyContent alignItems' method="POST" action="#">
            <div className="fields">
                <div className="field">
                    <label>Email</label>
                    <input placeholder = 'Put your email here' type="text" name="email"/>
                </div>
                <div className="field">
                    <label>User Name</label>
                    <input placeholder = 'Put your user name here' type="text" name="userName"/>
                </div>
                <div className="field">
                    <label>Password</label>
                    <input placeholder = 'Put your password here' type="password" name="userName"/>
                </div>
                <div className="field">
                    <label>Confirm Password</label>
                    <input placeholder = 'Confirm password here' name="confirmPassword" type = 'password'></input>
                </div>
            </div>
                <input className = 'button' type="submit" value="Register Here" />
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

export default Account