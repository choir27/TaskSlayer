"use client"
import React, {useState} from "react"
import Header from "../components/Header"
import "../css/global.css"
import MusicPlayer from "../components/MusicPlayer"
import Footer from "../components/Footer"
import {useStore} from "../middleware/Zustand"
import {State} from "../middleware/Type"
import RenderMusicList from "../hooks/HomeHooks"

export default function Home(){
    const songs = useStore((state: State)=>state.song);
    const [currentPage, setCurrentPage] = useState(1);
    const rowsPerPage = 5;

    return(
        <main className = "column flex">

		    <Header/>

		    <section id = "home" className = "main">
				
				<section>
					<MusicPlayer/>
					{RenderMusicList({currentPage: currentPage, setCurrentPage: (e:number)=>setCurrentPage(e), rowsPerPage: rowsPerPage, endIndex: currentPage * rowsPerPage, startIndex: (currentPage - 1) * rowsPerPage, songs: songs, check: false})}
		   		</section>
		
		    </section>

		    <Footer/>
	    </main>
    )
}