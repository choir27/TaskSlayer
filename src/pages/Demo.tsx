import Header from "../components/Header"
import Footer from "../components/Footer"
import React from "react"
import NavPanel from "../components/NavPanel"
import {handleLogin} from "../hooks/AuthHooks"

const Login = () => {

  return (
   <main className = "column flex">
      <NavPanel/>
      <Header setToggleNav = {(e:boolean)=>""} setToggleClose = {(e:boolean)=>""}/>
        <section id = "auth" className = "main">

            <h1>Login Demo</h1>

            <form className = "flex column alignStart"  method="POST" action="#" id = "login">
                <div className="flex column">
                  <label>Email</label>
                  <input
                   type="text" 
                   name="email" 
                   value = "bobThebuilder@gmail.com" 
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
              onClick={(e:React.MouseEvent<HTMLInputElement, MouseEvent>)=>{
                e.preventDefault();
                handleLogin("bobThebuilder@gmail.com", "bobTheBuilder@123456")
              }}
              />
            </form>

        </section>

      <Footer/>

    </main>  
  )
}

export default Login