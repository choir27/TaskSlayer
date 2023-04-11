import {useNavigate} from "react-router-dom"
import { toast } from "react-toastify";
import { useState, 
         useEffect,
         useCallback } from "react";
         
import { faCheck, 
         faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Header from "../components/Header"
import Footer from "../components/Footer";
import Button from "../components/Button"

import {GetUser} from "../hooks/FetchHooks"

const NAME_REGEX = /^[a-zA-Z]*$/;
const USERNAME_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
const PASSWORD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const EMAIL_REGEX = /^[\w!#$%&'*+/=?`{|}~^-]+(?:\.[\w!#$%&'*+/=?`{|}~^-]+)*@(?:[a-zA-Z0-9-]+\.)+[a-zA-Z]{2,6}$/;

const Register = ({onAdd}) => {

  const [users, setUsers] = useState([]);

  const [name, setName] = useState("");
  const [validName, setValidName] = useState(false);

  const [userName, setUserName] = useState("");
  const [validUserName, setValidUserName] = useState(false);

  const [email, setEmail] = useState("");
  const [validEmail, setValidEmail] = useState(false);

  const [password, setPassword] = useState("");
  const [validPassword, setValidPassword] = useState(false);

  const [matchPassword, setMatchPassword] = useState("");
  const [validMatch, setValidMatch] = useState(false);

  const navigate = useNavigate();

  useEffect(()=>{

    setValidUserName(USERNAME_REGEX.test(userName));
    setValidName(NAME_REGEX.test(name));
    setValidEmail(EMAIL_REGEX.test(email));
    setValidPassword(PASSWORD_REGEX.test(password));
    setValidMatch(password === matchPassword);

    try{
      GetUser.then(res=>setUsers(res));
    }catch(err){
      console.error(err);
      return;
    }

    }, [userName, name, email, password, matchPassword]);

    const handleSubmit = useCallback((e) => {
      try{
        e.preventDefault();

      // if button enabled with JS hack   
      const check1 = USERNAME_REGEX.test(userName);
      const check2 = PASSWORD_REGEX.test(password);
      const check3 = EMAIL_REGEX.test(email);
      const check4 = NAME_REGEX.test(name);

      if (!check1 || !check2 || !check3 || !check4) {
        toast.error("Registration Error");
        return;
      }
      
      //Checks if the user name or email already exists

      if(users){
        users.forEach(ele=>{
          if(ele.email === email){
            toast.error("Email Address already exists");
            return;
          }
          else if(ele.userName === userName){
            toast.error("Username already exists");
            return;
          }
        })
       
      }

    //if passwords don't match and the button is enabled by hacking
      if(password !== matchPassword){
        toast.error("Passwords do not match");
        return;
      }

      onAdd({name, email, password, userName});

      navigate("/");
      }catch(err){
        console.error(err);
        return;
      }

      
    }, [navigate, onAdd, name, email, password, userName, matchPassword, users])

  return (
    <div>
      <Header/>
      <div id = "main">
      <article 
        className = "post" 
        id = "account"
      >
        <section className="major column flex">
          <h1 className = "flex justifyContent">Register Account</h1>

          <form className = "flex column justifyContent alignItems" onSubmit = {handleSubmit} >

            <div className="fields">
             
              <div className="field">
                  <label>
                    Name
                  {
                  name && 
                  validName ? 
                  <FontAwesomeIcon icon={faCheck}/> 
                  : <FontAwesomeIcon icon={faTimes}
                  />
                  }

                  </label>
                  <input 
                    type="text" 
                    name ="name" 
                    value = {name} 
                    placeholder ="Enter your name" 
                    onChange = {(e)=>setName(e.target.value)}
                  />
              </div>

              <div className="field">

                  <label>User Name
                  {
                  validUserName && 
                  userName? 
                  <FontAwesomeIcon 
                  icon={faCheck}/>
                   : <FontAwesomeIcon icon={faTimes}
                   />
                  }
                  </label>

                  <input 
                  type="text" 
                  name  ="userName" 
                  value = {userName} 
                  placeholder ="Enter your user name" 
                  onChange = {(e)=>setUserName(e.target.value)}
                  />

              </div>

              <div className="field">

                  <label>Email
                  {
                  validEmail && 
                  email? 
                  <FontAwesomeIcon 
                  icon={faCheck}
                  /> : 
                  <FontAwesomeIcon 
                  icon={faTimes}
                  />
                  }
                  </label>

                  <input 
                  type="email"
                  name ="email"
                  value = {email} 
                  placeholder ="Enter your email" 
                  onChange = {(e)=>setEmail(e.target.value)}
                  />

              </div>

              <div className="field">

                  <label>Password
                    {
                    validPassword && password ? 
                    <FontAwesomeIcon icon={faCheck}/> 
                    : <FontAwesomeIcon icon={faTimes}/>
                    }
                  </label>

                  <input 
                    type="password" 
                    name ="password"
                    value = {password} 
                    placeholder ="Confirm password" 
                    onChange = {(e)=>setPassword(e.target.value)}
                  />

              </div>

              <div className="field">

                <label>Confirm Password
                  {
                  validMatch && 
                  matchPassword? 
                  <FontAwesomeIcon icon={faCheck}/> 
                  : <FontAwesomeIcon icon={faTimes}
                  />
                  }
                </label>

                <input
                 placeholder = "Confirm password here" 
                 name="confirmPassword" 
                 type = "password" 
                 value = {matchPassword} 
                 onChange = {(e)=>setMatchPassword(e.target.value)}
                />
              </div>

            </div>

            <input
              className = "button" 
              type="submit" 
              value="Register Here" 
              disabled = {
                !validEmail || 
                !validName || 
                !validUserName || 
                !validPassword || 
                !validMatch ? 
                true : 
                false
              }/>
          </form>


          <ul className = "special flex column">

            <li className = "flex justifyContent">
              Already have an account?  Login below:
            </li>

            <li className = "flex justifyContent">
              <Button 
                domain = "/login"
                size = "large"
                cname = "button"
                text = "Login Here"
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