import {useState, useMemo} from "react"
import Header from "../components/Header"
import UserHeader from "../components/UserHeader"

const NavPanel = () => {

  const [toggleNav, setToggleNav] = useState(true);
  const [toggleHeader, setToggleHeader] = useState(null) ;
  const [toggleClose, setToggleClose] = useState(true);

  useMemo(()=>{
    localStorage.getItem("id") ? 
    setToggleHeader(<UserHeader setToggleNav = {setToggleNav} toggleClose = {toggleClose} setToggleClose = {setToggleClose} id = "panel" idName = "navPanel"/>)
    : setToggleHeader(<Header setToggleNav = {setToggleNav} toggleClose = {toggleClose} setToggleClose = {setToggleClose} id = "panel" idName = "navPanel"/>)  
  },[toggleClose])
 
  return (
    toggleNav ?  
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
    toggleHeader
  )
}

export default NavPanel