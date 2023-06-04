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
   <main className = "column flex">
      <NavPanel/>
      <Header/>
        <section id = "auth" className = "main">

            <h1>Login Demo</h1>

            <form onSubmit = {handleSubmit} className = "flex column justifyContent alignItems"  method="POST" action="#">
                <div className="flex column">
                  <label>Email</label>
                  <input
                   type="text" 
                   name="email" 
                   value = "bobTheBuilder@gmail.com" 
                   disabled
                  />
                </div>

                <div className="flex column">
                    <label>Password</label>
                    <input 
                    type="password" 
                    name="password"
                    value = "bobTheBuilder@123456"
                    disabled 
                    />
                </div>

              <input 
              className = "button" 
              type="submit" 
              value="Login Here" 
              />
            </form>

        </section>

      <Footer/>

    </main>  
  )
}

export default Login