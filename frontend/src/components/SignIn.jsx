import Header from "./Header"
import Footer from "./Footer";
import {toast} from "react-toastify"
import {useState, useEffect} from 'react'

const SignIn = ({onAdd}) => {

  const EMAIL_REGEX = /^[\w!#$%&'*+/=?`{|}~^-]+(?:\.[\w!#$%&'*+/=?`{|}~^-]+)*@(?:[a-zA-Z0-9-]+\.)+[a-zA-Z]{2,6}$/;
  const PASSWORD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

  const [email, setEmail] = useState('');
  const [validEmail, setValidEmail] = useState(false);

  const [password , setPassword] = useState('');
  const [validPassword, setValidPassword] = useState(false);

  useEffect(()=>{
    let EMAIL_REGEX = /^[\w!#$%&'*+/=?`{|}~^-]+(?:\.[\w!#$%&'*+/=?`{|}~^-]+)*@(?:[a-zA-Z0-9-]+\.)+[a-zA-Z]{2,6}$/;
    setValidEmail(EMAIL_REGEX.test(email))
}, [email])

useEffect(()=>{
    let PASSWORD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
  setValidPassword(PASSWORD_REGEX.test(password))
}, [password])


const handleSubmit = (e) => {
  e.preventDefault();
  // if button enabled with JS hack   
  const v1 = EMAIL_REGEX.test(email);
  const v2 = PASSWORD_REGEX.test(password);

  if (!v1 || !v2) {
      toast.error('Registration Error');
      return;
  }

      onAdd({email, password})
    
      setEmail('')
      setPassword('');

  }



  return (
   <div>
      <Header/>
      <div id = 'main'>
        <article className = 'post' id = 'account'>
          <section className="major column flex">
            <h1 className = 'flex justifyContent'>Login</h1>

            <form onSubmit = {handleSubmit} className = 'flex column justifyContent alignItems' method="POST" action="#">
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
                <input className = 'button' type="submit" value="Login Here" disabled ={!validEmail || !validPassword ? true: false} onClick = {(e)=>handleSubmit(e)}/>
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

export default SignIn