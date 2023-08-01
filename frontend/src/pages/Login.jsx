import Header from "../components/Header"
import Footer from "../components/Footer"
import {toast} from "react-toastify"
import {useState, 
        useEffect,
        useCallback} from "react"
import {useNavigate} from "react-router-dom"
import NavPanel from "../components/NavPanel"

const Login = ({onAdd}) => {

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [validEmail, setValidEmail] = useState(false);

  const [password , setPassword] = useState("");
  const [validPassword, setValidPassword] = useState(false);

  useEffect(()=>{
    const EMAIL_REGEX = /^[\w!#$%&'*+/=?`{|}~^-]+(?:\.[\w!#$%&'*+/=?`{|}~^-]+)*@(?:[a-zA-Z0-9-]+\.)+[a-zA-Z]{2,6}$/;
    setValidEmail(EMAIL_REGEX.test(email));

    const PASSWORD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
    setValidPassword(PASSWORD_REGEX.test(password));
}, [email, password])


  const handleSubmit = useCallback((e) => {
    try{

      const EMAIL_REGEX = /^[\w!#$%&'*+/=?`{|}~^-]+(?:\.[\w!#$%&'*+/=?`{|}~^-]+)*@(?:[a-zA-Z0-9-]+\.)+[a-zA-Z]{2,6}$/;
      const PASSWORD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

      e.preventDefault();
      // if button enabled with JS hack   
      const v1 = EMAIL_REGEX.test(email);
      const v2 = PASSWORD_REGEX.test(password);
   
      if (!v1 || !v2) {
          toast.error('Registration Error');
          return;
      }
   
     onAdd({email, password});
   
     navigate("/");
    }catch(err){
      console.error(err);
      return;
    }
   
  },[email, password, navigate, onAdd]);

  return (
    <main className = "column flex">
    <NavPanel/>
      <Header idName = "nav"/>
      <section id = "auth" className = "main">

      <h1>Login Demo</h1>

            <form 
              onSubmit = {handleSubmit} 
              className = "flex column justifyContent alignItems" 
              method="POST" 
              action="#"
            >
                <div className="flex column">

                  <label>Email</label>
                  <input
                   placeholder = "Put your email here" 
                   type="text" 
                   name="email" 
                   value = {email} 
                   onChange = {(e)=>setEmail(e.target.value)}
                  />
                </div>
                <div className="flex column">
                    <label>Password</label>
                    <input 
                    placeholder = "Put your password here" 
                    type="password" 
                    name="password"
                    value = {password} 
                    onChange = {(e)=>setPassword(e.target.value)}
                    />
                </div>

              <input 
              className = "button" 
              type="submit" 
              value="Login Here" 
              disabled ={
                !validEmail || 
                !validPassword ? 
                true: false} 
              />
            </form>

          </section>


      <Footer/>

    </main>  
  )
}

export default Login