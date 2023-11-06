import React from "react"
import Header from "../components/Header"
import NavPanel from "../components/NavPanel"
import MusicPlayer from "../components/MusicPlayer"
import Footer from "../components/Footer"
import {GetMusic} from "../hooks/HomeHooks"

export default function HomeGuest(){
	GetMusic()

  return (
	<main className = "column flex">
		<NavPanel/>
		<Header setToggleNav = {(e:boolean)=>""} setToggleClose = {(e:boolean)=>""}/>

		<section id = "home" className = "main">

			<section>
				 <MusicPlayer/>
				{/*<DashboardGuest/> */}
			</section>
		</section>

		<Footer/>
	</main>
  )
}

