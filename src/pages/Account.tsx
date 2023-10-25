import React, {useContext, useState} from "react"
import Header from "../components/Header"
import NavPanel from "../components/NavPanel"
import MusicPlayer from "../components/MusicPlayer"
import Footer from "../components/Footer"
import {UserContext} from "../middleware/Context"
import {useStore} from "../middleware/Zustand"
import {RenderMusicList} from "../hooks/HomeHooks"

export default function Account(){

    const user = useContext(UserContext);
    const songs = useStore((state)=>state.song);
    const [currentPage, setCurrentPage] = useState(1);
    const rowsPerPage = 4;
    const startIndex = (currentPage - 1) * rowsPerPage;
    const endIndex = startIndex + rowsPerPage;

    return(
        <main className = "column flex">
        <NavPanel />
		<Header setToggleNav = {(e:boolean)=>""} setToggleClose = {(e:boolean)=>""}/>
  
          <section id = "account" className = "main">

            <h1>Welcome {user?.name}</h1>

            <section>
            <MusicPlayer/>
            {RenderMusicList({songs: songs, check: true, startIndex: startIndex, endIndex: endIndex, currentPage: currentPage, setCurrentPage: (e:number)=>setCurrentPage(e), rowsPerPage: rowsPerPage})}
            </section>  

   
          </section>
  
          <Footer/>
  
      </main>
    )
}