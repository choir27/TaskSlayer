import Header from "../components/Header"
import Footer from "../components/Footer"
import { useCallback} from "react"
import {useNavigate} from "react-router-dom"
import NavPanel from "../components/NavPanel"

const Login = ({onAdd}) => {

  const navigate = useNavigate();

  const handleSubmit = useCallback((e) => {
    try{
      e.preventDefault();
      // if button enabled with JS hack   
   
      const password = "bobTheBuilder@123456"
      const email = "bobTheBuilder@gmail.com"
     onAdd({email, password});
   
     navigate("/");
    }catch(err){
      console.error(err);
      return;
    }
   
  },[navigate, onAdd]);

  return (
   <div id = "wrapper">
      <NavPanel/>
      <Header idName = "nav"/>
      <div id = "main">
        <article className = "post" id = "account">
          <section className="major column flex">
            <h1 className = "flex justifyContent">Login</h1>

            <form 
              onSubmit = {handleSubmit} 
              className = "flex column justifyContent alignItems" 
              method="POST" 
              action="#"
            >
              <div className="fields">  
                <div className="field">
                  <label>Email</label>
                  <input
                   type="text" 
                   name="email" 
                   value = "bobTheBuilder@gmail.com" 
                   disabled
                  />
                </div>
                <div className="field">
                    <label>Password</label>
                    <input 
                    type="password" 
                    name="password"
                    value = "bobTheBuilder@123456"
                    disabled 
                    />
                </div>
              </div>

              <input 
              className = "button" 
              type="submit" 
              value="Login Here" 
              />
            </form>

          </section>
        </article>
      </div>

      <Footer/>

      <div id="copyright">
        K-pop Wired &copy; 2023. All rights are reserved
      </div>

    </div>  
  )
}

export default Login