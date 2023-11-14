"use client"
import React, {useEffect} from "react"
import "../../css/global.css"
import {useRouter} from "next/navigation"
import Header from "../../components/Header"
import Footer from "../../components/Footer"
import {handleLogin} from "../../hooks/AuthHooks"
import withNoAuth from "../../middleware/Public"
import {State, Action} from "../../middleware/Type"
import {useStore} from "../../middleware/Zustand"
import SearchResultsDisplay from "../search/page"

const Login = () => {

  const {push} = useRouter();
	const searchDisplay = useStore((state:State)=>state.searchDisplay)
	const setSearchDisplay = useStore((state:Action)=>state.setSearchDisplay);

	useEffect(()=>{
		setSearchDisplay(false);
	},[])

  return (
    <>
    {searchDisplay?
    <SearchResultsDisplay/>
    :
   <main className = "column flex">
      <Header/>
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
                handleLogin("bobThebuilder@gmail.com", "bobTheBuilder@123456", push)
              }}
              />
            </form>

        </section>

      <Footer/>

    </main>
    }
    </>
  )
}

export default withNoAuth(Login)