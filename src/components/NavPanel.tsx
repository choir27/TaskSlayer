import React, {useState} from "react"
import Header from "../components/Header"

const NavPanel = () => {

  const [toggleNav, setToggleNav] = useState(true);
  const [toggleClose, setToggleClose] = useState(true);

  return (
    <>

    {toggleNav ?  
      <section id = "menu"
      className = "hidden"
      onClick = {()=>{
        setToggleNav(false);
        setToggleClose(true);
      }}>

        <div id = "menuBar">
          <i className="fa-solid fa-bars fa-2xl" ></i>
          <span>Menu</span>
        </div>
  
      </section>
        : 
        <Header toggleNav = {toggleNav} toggleClose = {toggleClose} setToggleClose={(e:boolean)=>setToggleClose(e)} setToggleNav={(e:boolean)=>setToggleNav(e)}/>}


    </>
  )
}

export default NavPanel