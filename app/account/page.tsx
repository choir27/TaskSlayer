"use client"
import React, {useContext, useState} from "react"
import Header from "../../components/Header"
import MusicPlayer from "../../components/MusicPlayer"
import Footer from "../../components/Footer"
import {UserContext} from "../../middleware/Context"
import {useStore, State} from "../../middleware/Zustand"
import {RenderMusicList} from "../../hooks/HomeHooks"
import EmployeeSettings from "../../components/EmployeeSettings"
import "../../css/global.css"
import withAuth from "../../middleware/Private"

const Account = () =>{

    const user = useContext(UserContext);
    const songs = useStore((state:State)=>state.song);
    const [currentPage, setCurrentPage] = useState(1);
    const rowsPerPage = 4;
    const startIndex = (currentPage - 1) * rowsPerPage;
    const endIndex = startIndex + rowsPerPage;

    return(
        <main className = "column flex">
		<Header/>
  
          <section id = "account" className = "main">

            <h1>Welcome {user?.name}</h1>

            <MusicPlayer/>

            <section className = "flex alignItems spaceEvenly">
            {RenderMusicList({songs: songs, check: true, startIndex: startIndex, endIndex: endIndex, currentPage: currentPage, setCurrentPage: (e:number)=>setCurrentPage(e), rowsPerPage: rowsPerPage})}
            <EmployeeSettings/>

            </section>  

   
          </section>
  
          <Footer/>
  
      </main>
    )
}

export default Account;