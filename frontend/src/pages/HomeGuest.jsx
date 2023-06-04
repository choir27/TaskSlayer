import Header from "../components/Header"
import NavPanel from "../components/NavPanel"
import {default as MusicPlayer} from "../components/MusicPlayer.tsx"
import DashboardGuest from "./DashboardGuest"
import Footer from "../components/Footer"

const HomeGuest = () => {
  return (
	<main className = "column flex">
		<NavPanel/>
		<Header/>

		<section id = "home" className = "main">

			<section>
				<MusicPlayer/>
				<DashboardGuest/>
			</section>
		</section>

		<Footer/>
	</main>
  )
}

export default HomeGuest