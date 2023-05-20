import Footer from "../components/Footer"
import Header from "../components/Header"
import NavPanel from "../components/NavPanel"
import {default as MusicPlayer} from "../components/MusicPlayer.tsx"
import DashboardGuest from "./DashboardGuest"

const HomeGuest = () => {
  return (
	<div id="wrapper">
		<NavPanel />
		<Header idName = "nav"/>
			<div id = "main">
				<MusicPlayer/>
				<DashboardGuest/>
			</div>

		<Footer/>

		<div id="copyright">
			K-pop Wired &copy; 2023. All rights are reserved
		</div>
	</div>
  )
}

export default HomeGuest