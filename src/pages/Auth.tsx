import React, { useState, useEffect} from "react";
import Header from "../components/Header"
import Footer from "../components/Footer";
import NavPanel from "../components/NavPanel"
import {Button} from "../components/Button"
import {Client, Account, ID} from "appwrite"

const NAME_REGEX = /^[a-zA-Z]*$/;
const USERNAME_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
const PASSWORD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const EMAIL_REGEX = /^[\w!#$%&'*+/=?`{|}~^-]+(?:\.[\w!#$%&'*+/=?`{|}~^-]+)*@(?:[a-zA-Z0-9-]+\.)+[a-zA-Z]{2,6}$/;

declare global {
  namespace NodeJS {
    export interface ProcessEnv {
      REACT_APP_COLLECTION_ID: string;
      REACT_APP_DATABASE_ID: string;
      REACT_APP_SERVICE_COLLECTION_ID: string;
      REACT_APP_PROJECT: string;
      REACT_APP_CAR_API_KEY: string;
      REACT_APP_ENDPOINT: string;
      REACT_APP_INVENTORY_COLLECTION_ID: string;
      NODE_ENV: "development" | "production";
      PORT?: string;
      PWD: string;
    }
  }
}

export default function Register(){

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

  const [authDisplay, setAuthDisplay] = useState(false);

  useEffect(()=>{
  },[])

  const check = <i className = "fa-solid fa-check"></i>
  const cross = <i className = "fa-solid fa-xmark"></i>

  async function handleSignUp(){
    try{

      const client = new Client()
      .setEndpoint("https://cloud.appwrite.io/v1") // Your API Endpoint
      .setProject(process.env.REACT_APP_PROJECT) // Your project ID
    
  
      const account = new Account(client);
  
      // Register User
      const createAccount = await account.create(
          ID.unique(),
          email,
          password,
          name
      )

      console.log(createAccount);

      if(createAccount){
        window.location.reload();
      }
    }catch(err){
      console.error(err);
    }
  }

  return (
    <>
        {authDisplay ?
              <main className = "column flex">
              <NavPanel/>
              <Header setToggleNav = {(e:boolean)=>""} setToggleClose = {(e:boolean)=>""}/>
                <section id = "auth" className = "main">
          
                <h1>Login</h1>
          
                      <form 
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

                        
            <section className = "existingAccount flex column alignItems">
                <h2>Don't have an account?  Register below:</h2>
             
                <Button
                  className = "button"
                  text = "Register Here"
                  onClick = {(e: React.MouseEvent<HTMLButtonElement, MouseEvent>)=>setAuthDisplay(!authDisplay)}
                />
            </section>
                      </form>

                      
          
                    </section>
          
          
                <Footer/>
          
              </main>  
        :
        <main className = "column flex">
        <NavPanel />
        <Header setToggleNav = {(e:boolean)=>""} setToggleClose = {(e:boolean)=>""}/>
          <section id = "auth" className = "main flex column">
            <h1>Register Account</h1>
  
              <section className="authContainer">
            <form>
  
                          
                    <div>
                        <label> Name {name && validName ? check :cross }</label>
                        <input 
                          type="text" 
                          name ="name" 
                          value = {name} 
                          placeholder ="Enter your name" 
                          onChange = {(e)=>{setName(e.target.value)
                              setValidName(NAME_REGEX.test(e.target.value));
                          }}
                        />
                    </div>
                        
                    <div>
                        <label>User Name {validUserName && userName? check: cross}</label>
                        
                        <input 
                        type="text" 
                        name  ="userName" 
                        value = {userName} 
                        placeholder ="Enter your username" 
                        onChange = {(e)=>{setUserName(e.target.value)
                          setValidUserName(USERNAME_REGEX.test(e.target.value));
                      }}
                        />
                    </div>
  
              
                  <div>
                      <label>Email{validEmail && email? check : cross}</label>
  
                      <input 
                      type="email"
                      name ="email"
                      value = {email} 
                      placeholder ="Enter your email" 
                      onChange = {(e)=>{setEmail(e.target.value)
                        setValidEmail(EMAIL_REGEX.test(e.target.value));
                    }}
                      />
                  </div>
  
                  <div>
  
                      <label>Password{validPassword && password ? check: cross}</label>
  
                      <input 
                        type="password" 
                        name ="password"
                        value = {password} 
                        placeholder ="Confirm password" 
                        onChange = {(e)=>{setPassword(e.target.value)
                            setValidPassword(PASSWORD_REGEX.test(e.target.value));
                        }}
                      />
  
                  </div>
               
                  <div>

                    <label>Confirm Password{validMatch && matchPassword? check: cross}</label>                  

                    <input
                     placeholder = "Confirm password here" 
                     name="confirmPassword" 
                     type = "password" 
                     value = {matchPassword} 
                     onChange = {(e)=>{
                        setMatchPassword(e.target.value);
                        setValidMatch(password === e.target.value);
                    }}
                    onClick = {(e)=>handleSignUp()}
                    />
                  </div>                  

                  <input
                  className = "button"
                  type="submit" 
                  value="Register Here" 
                  onClick = {(e:React.MouseEvent<HTMLInputElement, MouseEvent>)=>{
                    e.preventDefault()
                    handleSignUp()
                  }}
                  disabled = {!validEmail || !validName || !validUserName || !validPassword || !validMatch ? true : false
                  }/>
  
              
            </form>
  
            <section className = "existingAccount flex column alignItems">
                <h2>Already have an account?  Login below:</h2>
             
                <Button
                  className = "button"
                  text = "Login Here"
                  onClick = {()=>setAuthDisplay(!authDisplay)}
                />
            </section>
            </section>

          </section>
        <Footer/>
  
  
         </main>  
        }
    </>
   
  )
}

