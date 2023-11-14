"use client"
import React, {useContext, useState, useEffect} from "react"
import "../../css/global.css"
import "../../css/mediaQuery.css"
import Header from "../../components/Header"
import MusicPlayer from "../../components/MusicPlayer"
import Footer from "../../components/Footer"
import EmployeeSettings from "../../components/EmployeeSettings"
import {UserContext} from "../../middleware/Context"
import {State, Action} from "../../middleware/Type"
import {User} from "../../middleware/Interface"
import {useStore} from "../../middleware/Zustand"
import RenderPlaylist from "../../hooks/RenderPlaylist"
import SearchResultDisplay from "../search/page"

const Account = () =>{

    const user = useContext(UserContext) as User;
    const [currentPage, setCurrentPage] = useState(1);
    const playlist = useStore((state:State)=>state.listOfSongs);
    const songDisplay = useStore((state:State)=>state.songDisplay);
    const setSongDisplay = useStore((state:Action)=>state.setSongDisplay);
    const songs = useStore((state:State)=>state.song);
    const searchDisplay = useStore((state:State)=>state.searchDisplay)
    const setSearchDisplay = useStore((state:Action)=>state.setSearchDisplay);
  
    useEffect(()=>{
      setSearchDisplay(false);
    },[])
    return(
      <>
      { searchDisplay
      ?
      <SearchResultDisplay/>
      :
        <>
		<Header/>
  
          <section id = "account" className = "main">

            <h1>Welcome {user?.name}</h1>

            <MusicPlayer/>

          <section className = "flex alignItems spaceEvenly">
            <section>
            <RenderPlaylist playlist = {playlist} setSongDisplay = {(e)=>setSongDisplay(e)} songDisplay = {songDisplay} songs = {songs} currentPage={currentPage} setCurrentPage={(e)=>setCurrentPage(e)}/>

            </section>  
            <EmployeeSettings/>

            </section>
   
          </section>
  
          <Footer/>
  
        </>
      }
      </>
    )
}

export default Account;