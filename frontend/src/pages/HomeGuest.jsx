import Header from "../components/Header"
import NavPanel from "../components/NavPanel"
import {default as MusicPlayer} from "../components/MusicPlayer.tsx"
import DashboardGuest from "./DashboardGuest"

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

		<small>
			K-pop Wired &copy; 2023. All rights are reserved
		</small>
	</main>
  )
}

export default HomeGuest