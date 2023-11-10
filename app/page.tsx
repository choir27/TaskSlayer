"use client"
import React, {useState} from "react"
import Header from "../components/Header"
import "../css/global.css"
import MusicPlayer from "../components/MusicPlayer"
import Footer from "../components/Footer"
import {useStore} from "../middleware/Zustand"
import {State, Action} from "../middleware/Type"
import RenderPlaylist from "../hooks/PlaylistHooks"

export default function Home(){
    const [currentPage, setCurrentPage] = useState(1);
    const playlist = useStore((state:State)=>state.listOfSongs);
    const songDisplay = useStore((state:State)=>state.songDisplay);
    const setSongDisplay = useStore((state:Action)=>state.setSongDisplay);
    const songs = useStore((state:State)=>state.song);

    return(
        <main className = "column flex">

		    <Header/>

		    <section id = "home" className = "main">
				
				<section>
					<MusicPlayer/>
					<RenderPlaylist playlist = {playlist} setSongDisplay = {(e)=>setSongDisplay(e)} songDisplay = {songDisplay} songs = {songs} currentPage={currentPage} setCurrentPage={(e)=>setCurrentPage(e)}/>
		   		</section>
		
		    </section>

		    <Footer/>
	    </main>
    )
}